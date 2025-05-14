import Tour from '../models/Tour.js';
import Review from '../models/Review.js';

export const createReview = async (req, res) => {
    const {username, reviewText, rating } = req.body;
    const { tourId } = req.params;
    try {
        const tour = await Tour.findById(tourId);
        if (!tour) {
            return res.status(404).json({ message: 'Tour not found' });
        }
        const review = new Review({
            productId: tourId,
            username,
            reviewText,
            rating,
        });
        await review.save();
        tour.reviews.push(review);
        await tour.save();
        res
            .status(200)
            .json({ 
                success: true,
                message: 'Review created successfully', 
                data:review });

    } catch (error) {
        res
        .status(500)
        .json({ 
            success: false,
            message: error.message 
        });
    }  
}