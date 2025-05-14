import express from 'express';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import { createBooking, getAllBookings, getSingleBookings } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/',verifyUser,createBooking );
router.get('/:id',verifyUser,getSingleBookings );
router.post('/',verifyAdmin,getAllBookings );

export default router;