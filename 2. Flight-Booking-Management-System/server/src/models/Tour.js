import mongoose from "mongoose";
import moment from "moment";
const tourSchema = new mongoose.Schema({
    flightFrom: {
        type: String,
        required: [true, 'Flight From is required'],
        trim: true,
        minlength: [3, 'At least minimum 3 characters'],
        maxlength: [40, 'Maximum 40 characters'],
        set: (v) => v.charAt(0).toUpperCase() + v.slice(1)  // Capitalize first letter

    },
    flightTo: {
        type: String,
        required: [true, 'Flight to is required'],
        trim: true,
        minlength: [3, 'At least minimum 3 characters'],
        maxlength: [40, 'Maximum 40 characters'],
        set: (v) => v.charAt(0).toUpperCase() + v.slice(1),  // Capitalize first letter
        unique: true,
    },
    departureDate: {
        type: Date,
        required: [true, 'Departure Date is required'],
    },
    duration: {
        type: Date,
        required: [true, 'duration Date is required'],
    },

    price: {
        type: Number,
        required: [true, 'Price is required'],
        minlength: [1000, "price must be minimum 1000"],
        maxlength: [200000, "price must be maximum 200000"],
    },
    maxperson: {
        type: Number,
        required: [true, 'maxperson is required'],
        minlength: [1, "price must be minimum 1"],
        maxlength: [100, "price must be maximum 100"],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
        minlength: [5, 'At least minimum 5 characters'],
        maxlength: [500, 'Maximum 500 characters'],
    },
    reviews:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Review',
            }
        ],
    photo: {
        type: String,
        required: [true, 'photo is required'],
    },
    featured: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const Tour = mongoose.model('Tour', tourSchema);
export default Tour;