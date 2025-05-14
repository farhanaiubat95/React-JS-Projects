import express from 'express';
import { UpdateUser, DeleteUser, GetSingleUser, GetAllUser} from '../controllers/userController.js';

import {verifyAdmin, verifyUser} from '../utils/verifyToken.js';
// call router() from express and store it in a variable called router 
const router = express.Router();

// // Add new User
// router.post('/', AddUser);

// Update User
router.put('/:id',verifyUser, UpdateUser);

// Delete User
router.delete('/:id',verifyUser, DeleteUser);

// Get Single User
router.get('/:id',verifyUser, GetSingleUser);

// Get All User
router.get('/',verifyAdmin, GetAllUser);

export default router;