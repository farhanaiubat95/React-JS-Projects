import express from 'express';
import { Register,Login} from '../controllers/authController.js';

// call router() from express and store it in a variable called router 
const router = express.Router();

// User registration
router.post('/register', Register);

// User Login
router.post('/login', Login);

export default router;