import Booking from '../models/BookingModel.js';


// Create a new booking
export const createBooking = async (req, res) => {

    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();
        
        res
        .status(200)
        .json({
            success: true,
            message: "Booking done successfully",
            data: savedBooking,
        });
    } catch (error) {
        res
        .status(500)
        .json({ message: error.message });
    }
};

// Get single bookings
export const getSingleBookings = async (req, res) => {
  
    const id = req.params.id;
    try {
        
        const bookings= await Booking.findById(id);

        if(!bookings) return res.status(404).json({ message: 'Booking not found' });

        res
        .status(200)
        .json({
            success: true,
            data: bookings,
            message: 'Single bookings'
        });
    } catch (error) {
        res
        .status(500)
        .json({ message: error.message });
    }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
  
    try {
        
        const bookings= await Booking.find();

        if(!bookings) return res.status(404).json({ message: 'Booking not found' });

        res
        .status(200)
        .json({
            success: true,
            data: bookings,
            message: 'All bookings'
        });
    } catch (error) {
        res
        .status(500)
        .json({ message: error.message });
    }
};