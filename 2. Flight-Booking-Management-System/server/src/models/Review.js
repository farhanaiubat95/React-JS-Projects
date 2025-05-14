import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tour',
        },
        username: {
            type: String,
            required: true,
        },
        reviewText: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
            default: 0,
            
        },
    },
    { timeStamp: true }
);
// after schema , Model can be defined
const reviewsModel = mongoose.model('Review', reviewSchema);

export default reviewsModel;