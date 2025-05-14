import { model, Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'User name is required'],
            trim: true,
            lowercase: true, // convert username to lowercase
            minlength: [5, 'At least minimum 3 characters'],
            maxlength: [40, 'Maximum 40 characters'],
            unique: true,//username must be unique
        },
        email: {
            type: String,
            required: [true, 'User email is required'],
            trim: true,
            unique: true,//email must be unique
            lowercase: true,
            match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },
        password: {
            type: String,
            minlength: [8, 'At least minimum 8 characters'],
            maxlength: [20, 'Maximum 20 characters'],
            validate: {
                validator: function (v) {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(v);
                },
                message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long.'
            }
            
        },
        photo: {
            type: String,
            // default: defaultImagePath,
        },

    },
    { timestamps: true }
);

// after schema , Model can be defined
const usersModel = model('User', userSchema);

export default usersModel;



