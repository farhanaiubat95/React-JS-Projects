import express from 'express';
import { AddTour, UpdateTour, DeleteTour, GetSingleTour, GetAllTour, SearchTour, GetFeaturedTour, GetTourCount } from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';
// call router() from express and store it in a variable called router 
const router = express.Router();

// Add new tour
router.post('/',verifyAdmin, AddTour);

// Update tour
router.put('/:id',verifyAdmin, UpdateTour);

// Delete tour
router.delete('/:id',verifyAdmin, DeleteTour);

// Get Single tour
router.get('/:id', GetSingleTour);

// Get All tour
router.get('/', GetAllTour);

// Get Search
router.get('/search/getAllSearch', SearchTour);

// Get Search Featured Tour
router.get('/search/getFeaturedTours', GetFeaturedTour);

// Get Search count tour
router.get('/search/getTourCount', GetTourCount);

export default router;