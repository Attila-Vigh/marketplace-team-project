import mongoose from 'mongoose';
const { Schema, model } = mongoose;


import reviewsSchema from './reviewsSchema.js';
// const reviewsSchema = new Schema(
//     {
//         comment: { type: String, required: true },
//         rate: { 
//             type: Number,
//             min: [1, 'Rating must be at least 1'],
//             max: [5, 'Rating must be at most 5'], 
//             default: 5,
//         },
//     },
//     {
//         timestamps: true,
//     }f
// );

const productSchema = new Schema( 
    {
        name       : { type: String, required: true },
        description: { type: String, required: true },
        brand      : { type: String, required: true },
        imageUrl   : { type: String, required: true },
        category   : { type: String, required: true },
        price      : { type: Number, required: true },

        // reviews: [ { type: Schema.Types.ObjectId, ref: "Products" }],

    },
    {
        timestamps: true,
    } 
);

export default model( 'Products', productSchema );

