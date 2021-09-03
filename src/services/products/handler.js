import createError from "http-errors"; import express from "express";
import q2m from "query-to-mongo";

import Products from "../../Models/productsSchema.js";

export const listProducts = async ( req, res, next ) => {
    try
    {
        const productsList = await Products.find( {} );
        res.send( productsList );
    }
    catch ( error )
    {
        next( createError( 404, error.message ) );
    }
};

export const singleProduct = async ( req, res, next ) => {
    console.log( "req.params.id::: ", req.params.id );
    try
    {
        const productId = req.params.productId;

        const product = await Products.findById( productId ); // similar to findOne()

        product
            ? res.send( product )
            : next( createError( 404, `product with id ${ productId } not found!` ) );
    }
    catch ( error )
    {
        next( createError( 500, error.message ) );
    }
};

export const addProduct = async ( req, res, next ) => {
    console.log( "req.params.id::: ", req.body );
    try
    {
        const newProduct = await new Products( req.body ).save();

        res.status( 201 ).send( newProduct );
    }
    catch ( error )
    {
        next( createError( 500, error.message ) );
    }
};

export const updateProduct = async ( req, res, next ) => {
    try
    {
        const productId = req.params.productId;

        const updatedProduct = await Products.findByIdAndUpdate( productId, req.body, {
            new: true,
            runValidators: true, // returns the modified user
        } );

        if ( updatedProduct )
            res.send( updatedProduct );
    }

    catch ( error )
    {
        next( createError( 500, error.message ) );
    }
};

export const deleteProduct = async ( req, res, next ) => {
    try
    {

        await Products.findByIdAndDelete( req.params.productId );
        res.status( 204 ).send();
    }
    catch ( error )
    {
        next( createError( 500, error.message ) );
    }
};

export const getAllReviewsByProductId = async ( req, res, next ) => {
    try
    {

        
    }
    catch ( error )
    {
        next( createError( 500, error.message ) );
    }
};

const productHandler = {
    add: addProduct,
    list: listProducts,
    single: singleProduct,
    update: updateProduct,
    delete: deleteProduct,
    getAllReviewsByProductId: getAllReviewsByProductId
};

export default productHandler;