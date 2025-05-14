import mongoose from 'mongoose';
import mongoDb from '../mongoDB.js';


const connectDB = async (options = {}) => {
    try {
        await mongoose.connect(mongoDb, options);
        console.log("Connection to DB is Successfully done");
        mongoose.connection.on('error', (error) => {
            console.error('DB connection error', error);
        });
    } catch (error) {
        console.error('Could not connect to DB', error.toString());
    }
};

export default connectDB;