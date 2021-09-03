import createError from "http-errors";
import Review from "../../Models/reviewsSchema.js";

export const addReview = async ( req, res, next ) => {
    console.log( "req.params.id::: ", req.body );
    try {
        const newReview = await new Review( req.body ).save();
        res.status( 201 ).send( newReview );
    }
    catch ( error ) {
        next( createError( 500, error.message ) );
    }
};

export const getAllReviews = async ( req, res, next ) => {
     try {

    const reviews = await Review.find({})
    res.send(reviews)
    
    }
    catch ( error ) {
        next( createError( 404, error.message ) );
    }
};

// export const searchBlogByTitle = async ({req, res, next}) => {
//     console.log("req.query ", req.query);
//     try {
//         const blogTitle = await Blogs.find(req.query.title);
//         res.send(blogTitle);
//     }
//     catch (error) {
//         next(createError(500, error.message));
//     }
// };

export const findById = async (req, res, next) => {
    console.log("req.params.id::: ", req.params.id);
    try {
        const review = await Review.findById(req.params.id);
        if(!review) {
            next(createError(404, `Review with id "${ req.params.id }" not found`));}
        res.send(review);
    }
    catch (error) {
        next(createError(500, error.message));
    }
};


export const updateReview = async (req, res, next) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate( req.params.id, req.body, { new: true } );
        res.status(204).send(updatedReview);
    }
    catch (error) {
        next(createError(500, error.message));
    }
};


export const deleteReview = async (req, res, next) => {
    try {
        await Review.findByIdAndDelete( req.params.id);
        res.status(204).send();
    }
    catch (error) {
        next(createError(500, error.message));
    }
};



// export const getBlogCommentsById = async (req, res, next) => {
//     try {
//         const blogComments = await Blogs.findById(req.params.id);
//         if(!blogComments) 
//             next(createError(404, `Blog with id "${ req.params.id }" not found`));
//         res.send(blogComments);
//     }
//     catch (error) {
//         next(createError(500, error.message));
//     }
// }

// export const addComment = async (req, res, next) => {
//     try {
//         const updatedBlog = await Blogs.findByIdAndUpdate( req.params.id, { $push: { comments: req.body } }, { new: true } );
//         res.status(204).send(updatedBlog);
//     }
//     catch (error) {
//         next(createError(500, error.message));
//     }
// }

// export const deleteComment = async (req, res, next) => {
//     try {
//         const updatedBlog = await Blogs.findByIdAndDelete( req.params.id, { $pull: { _id: req.params.commentId } }, { new: true } );
//         res.status(204).send(updatedBlog);
//     }
//     catch (error) {
//         next(createError(500, error.message));
//     }
// }
const ReviewHandler = {
    getAll: getAllReviews,
    add: addReview,
    findById: findById,
    update: updateReview,
    delete: deleteReview
};

export default ReviewHandler;