import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// User registration
export const Register = async (req, res) => {

    try {
        // Hash the password
        console.log(req.body);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            photo: req.body.photo
        });

        await newUser.save();

        res
            .status(200)
            .json({
                success: true,
                message: 'User Registered Successfully',
                data: newUser
            });
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: 'Failed to Register.Try again'
            });

    }
};

// User login
export const Login = async (req, res) => {
    const username = req.body.username;
    try {

        const login = await User.findOne({ username });
        if (!login) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: 'User not found'
                });
        };

        // compare password
        const validPassword= await User.findOne({password: req.body.password});
        if(!validPassword){
            return res
            .status(400)
            .json({
                success: false,
                message: 'Invalid password'
            });
        }
        const { password, role, ...rest } = login._doc;
        const token = jwt.sign(
            { id: login.id, role: login.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '15d' }
        );

        // set token in the browser cookies and
        // send response to the client
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires:token.expiresIn
        }).status(200).json({
            token,
            data: {...rest},
            role,
            success: true,
            message: 'User logged in successfully',
            
        });
    } catch (error) {
        res
        .status(500)
        .json({
            success: false,
            message: 'Failed to login.Try again'
        });
    }
}