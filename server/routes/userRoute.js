import { Router } from "express";
import {authUser, getProfile, registerUser} from "../controllers/userController.js";
import {protect} from "../middleWare/authMiddleware.js";

const route = Router();

route.post('/', registerUser);
route.post('/login', authUser);
route.get('/profile', protect, getProfile);

export default route