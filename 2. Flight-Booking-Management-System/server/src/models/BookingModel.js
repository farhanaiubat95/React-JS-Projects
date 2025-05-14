import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
        },
        tourName: {
            type: String,
            required: true,
        },
        fullname: {
            type: String,
            required: true,
        },
        userEmail: {
            type: String,
        },
        phone: {
            type: Number,
            required: true,
        },
        totalMembers: {
            type: Number,
            required: true,
            min: [1, 'Minimum 1 member is required'],
            max: [5, 'Maximum 5 member is required'],
            default: 1,
        },
        bookingAt: {
            type: Date
          
        },

    },
    { timeStamp: true }
);
// after schema , Model can be defined
const bookingsModel = mongoose.model('Booking', bookingSchema);

export default bookingsModel;