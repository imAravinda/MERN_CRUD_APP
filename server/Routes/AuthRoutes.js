import express from 'express';
import { LogoutUser, getUserProfile, loginUser } from '../Controllers/AuthController.js';
import { requireAuth } from '../Middleware/AuthMiddleware.js';
const AuthRoutes = express.Router();

AuthRoutes.route('/auth/login').post(loginUser);
AuthRoutes.route('/auth/logout').post(LogoutUser);
AuthRoutes.route('/auth/profile').get(requireAuth,getUserProfile);

export default AuthRoutes;