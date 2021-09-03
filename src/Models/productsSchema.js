import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const commentSchema = new Schema({
    text: { type: String, required: true },
    rating: { 
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating must be at most 5'], 
        default: 5,
    },
    user: { 
        name: { type: String, required: true },
        avatar: { type: String, required: true },
    },
});

const blogSchema = new Schema( 
{
    category: { type: String, required: true },
    title: { type: String, required: true },
    cover: { type: String, required: true },
    readTime: {
        value: { type: Number, required: true },
        unit : { type: String, required: true },
    },
    comments: { default: [], type: [ commentSchema] },
    author: {
        name  : { type: String, required: true },
        email : { type: String, required: true },
        avatar: { type: String, required: true },
    },
    content: { type: String, required: true },      
},
{
    timestamps: true,
} );

export default model( 'Blogs', blogSchema );