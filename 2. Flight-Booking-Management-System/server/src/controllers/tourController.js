import Tour from '../models/Tour.js';

// Add Tour Details function
export const AddTour = async (req, res) => {
    const newTour = new Tour(req.body); //

    try {
        const savedTour = await newTour.save();
        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully Added',
                data: savedTour
            });

    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: 'Failed to Add.Try again'
            });
    };
};

// Update Tour Details function
export const UpdateTour = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully Updated Details',
                data: updatedTour,
            });

    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: 'Failed to Update.Try again'
            });
    }
};

// Delete Tour Details function
export const DeleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id);

        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully Deleted Details',
            });

    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: 'Failed to Delete.Try again'
            });
    }
};

// Get Single Tour Details function
export const GetSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const getSingleTour = await Tour.findById(id).populate('reviews');

        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully get single details',
                data: getSingleTour
            });

    } catch (error) {
        res
            .status(404)
            .json({
                success: false,
                message: 'not found'
            });
    }
};

// Get All Tour Details function
export const GetAllTour = async (req, res) => {
    // for pagination
    const page = parseInt(req.query.page);

    try {

        const getAllTour = await Tour.find({})
            .populate('reviews')
            .skip(page * 8)
            .limit(8);

        res
            .status(200)
            .json({
                success: true,
                count: getAllTour.length,
                message: 'Successfully get all details',
                data: getAllTour
            });

    } catch (error) {
        res
            .status(404)
            .json({
                success: false,
                message: 'no data available'
            });
    }
};

// Search Tour Details function
export const SearchTour = async (req, res) => {

    try {
        // Search Tour flightFrom, flightTo, price, maxperson
        const searchTour = await Tour.find(req.query).populate('reviews');

        res
            .status(200)
            .json({
                success: true,
                count: searchTour.length,
                message: 'Successfully get search details',
                data: searchTour
            });

    } catch (error) {
        res
            .status(404)
            .json({
                success: false,
                message: 'no data available'
            });
    }
};

// Get Search Featured Tour Details function
export const GetFeaturedTour = async (req, res) => {
    try {
        const getAllFeaturedTour = await Tour.find({ featured: true })
        .populate('reviews')
        .limit(8);
        res
            .status(200)
            .json({
                success: true,
                count: getAllFeaturedTour.length,
                message: 'Successfully get all details',
                data: getAllFeaturedTour
            });

    } catch (error) {
        res
            .status(404)
            .json({
                success: false,
                message: 'no data available'
            });
    }
};

// Get Search tour counts
export const GetTourCount = async (req, res) => {
    try {
        const getTourCount = await Tour.estimatedDocumentCount();
        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully get count',
                data: getTourCount
            });
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: 'failed to get data'
            });

    }
};