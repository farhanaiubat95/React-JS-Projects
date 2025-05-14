import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import tourRouter from './src/router/tourRouter.js';
import userRouter from './src/router/userRouter.js';
import authRouter from './src/router/authRouter.js';
import reviewRouter from './src/router/reviewsRouter.js';
import bookingRouter from './src/router/bookingRouter.js';
// Initialize express
const app = express()

const corsOptions={
    origin:true,
    credentials:true,
}

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(morgan('dev'));


// Tour Routes
app.use('/api/v1/tours', tourRouter);

// User routes
app.use('/api/v1/users',userRouter);

// Auth routes
app.use('/api/v1/auth', authRouter);

// Review routes
app.use('/api/v1/reviews', reviewRouter);

// Booking routes
app.use('/api/v1/booking', bookingRouter);


export default app;
