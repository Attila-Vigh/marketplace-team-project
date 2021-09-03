import authors from "../../tools/fs-CRUD.js";
import createError from "http-errors";
import path from "path";

const pathToFile = path.join( process.cwd(), "src/data/authors.json" );

export const listAuthors = async ( req, res, next ) => {
    try
    {
        const authorsList = await authors.read( pathToFile );
        if ( req.query && req.query.name )
        {
            const filteredAuthors = authorsList.filter( author =>
                author.name
                    .toLowerCase()
                    .includes( req.query.name.toLowerCase() )
            );
            res.send( filteredAuthors );
        }
        else
            res.send( authorsList );
    }
    catch ( error )
    {
        next( createError( 404, error.message ) );
    }
};

export const singleAuthor = async ( req, res, next ) => {
    console.log( "req.params.id::: ", req.params.id );
    try
    {
        const authorsList = await authors.single( req.params.id, pathToFile );
        res.send( authorsList );
    }
    catch ( error )
    {
        next( createError( 500, error.message ) );
    }
};

export const addAuthor = async ( req, res, next ) => {
    console.log( "req.params.id::: ", req.body );
    try
    {
        const newAuthor = await authors.new( req.body, pathToFile );
        res.status( 201 ).send( newAuthor );
    }
    catch ( error )
    {
        next( createError( 500, error.message ) );
    }
};

export const updateAuthor = async ( req, res, next ) => {
    try
    {
        const updatedAuthor = await authors.update( req.params.id, req.body, pathToFile );
        res.status( 204 ).send( updatedAuthor );
    }
    catch ( error )
    {
        next( createError( 500, error.message ) );
    }
};

export const deleteAuthor = async ( req, res, next ) => {
    try
    {
        await authors.delete( req.params.id, pathToFile );
        res.status( 204 ).send();
    }
    catch ( error )
    {
        next( createError( 500, error.message ) );
    }
};

const authorsHandler = {
    add: addAuthor,
    list: listAuthors,
    single: singleAuthor,
    update: updateAuthor,
    delete: deleteAuthor
};

export default authorsHandler;