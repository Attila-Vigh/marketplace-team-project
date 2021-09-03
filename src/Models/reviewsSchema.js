import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const reviewsSchema = new Schema(
    {
        comment: { type: String, required: true },
        rate: { 
            type: Number,
            min: [1, 'Rating must be at least 1'],
            max: [5, 'Rating must be at most 5'], 
            default: 5,
        },
    },
    {
        timestamps: true,
    }
);

export default model('Review', reviewsSchema);