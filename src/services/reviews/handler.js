import Blogs from "../../Models/productsSchema.js";
import createError from "http-errors";

export const getAllBlogs = async ( req, res, next ) => {
    try {
        const blogsList = await Blogs.find( {} );
        if ( req.query && req.query.name )
        {
            const filteredBlogs = blogsList.filter( author =>
                author.name
                    .toLowerCase()
                    .includes( req.query.name.toLowerCase() )
            );
            res.send( filteredBlogs );
        }
        else
            res.send( blogsList );
    }
    catch ( error ) {
        next( createError( 404, error.message ) );
    }
};

export const addBlog = async ( req, res, next ) => {
    console.log( "req.params.id::: ", req.body );
    try {
        const newBlog = await new Blogs( req.body ).save();
        res.status( 201 ).send( newBlog );
    }
    catch ( error ) {
        next( createError( 500, error.message ) );
    }
};

export const searchBlogByTitle = async ({req, res, next}) => {
    console.log("req.query ", req.query);
    try {
        const blogTitle = await Blogs.find(req.query.title);
        res.send(blogTitle);
    }
    catch (error) {
        next(createError(500, error.message));
    }
};

export const findById = async (req, res, next) => {
    console.log("req.params.id::: ", req.params.id);
    try {
        const blog = await Blogs.findById(req.params.id);
        if(!blog) {
            next(createError(404, `Blog with id "${ req.params.id }" not found`));}
        res.send(blog);
    }
    catch (error) {
        next(createError(500, error.message));
    }
};

export const updateBlog = async (req, res, next) => {
    try {
        const updatedAuthor = await Blogs.findByIdAndUpdate( req.params.id, req.body, { new: true } );
        res.status(204).send(updatedAuthor);
    }
    catch (error) {
        next(createError(500, error.message));
    }
};

export const deleteBlog = async (req, res, next) => {
    try {
        await Blogs.findByIdAndDelete( req.params.id);
        res.status(204).send();
    }
    catch (error) {
        next(createError(500, error.message));
    }
};

export const getBlogCommentsById = async (req, res, next) => {
    try {
        const blogComments = await Blogs.findById(req.params.id);
        if(!blogComments) 
            next(createError(404, `Blog with id "${ req.params.id }" not found`));
        res.send(blogComments);
    }
    catch (error) {
        next(createError(500, error.message));
    }
}

export const addComment = async (req, res, next) => {
    try {
        const updatedBlog = await Blogs.findByIdAndUpdate( req.params.id, { $push: { comments: req.body } }, { new: true } );
        res.status(204).send(updatedBlog);
    }
    catch (error) {
        next(createError(500, error.message));
    }
}

export const deleteComment = async (req, res, next) => {
    try {
        const updatedBlog = await Blogs.findByIdAndDelete( req.params.id, { $pull: { _id: req.params.commentId } }, { new: true } );
        res.status(204).send(updatedBlog);
    }
    catch (error) {
        next(createError(500, error.message));
    }
}
const BlogsHandler = {
    getAll: getAllBlogs,
    add: addBlog,
    searchByTitle: searchBlogByTitle,
    findById: findById,
    update: updateBlog,
    delete: deleteBlog,
    getBlogCommentsById: getBlogCommentsById,
    addComment: addComment
};

export default BlogsHandler;