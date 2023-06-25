import express from "express";
import { AddUser, RegisterUser, getUserByEmail, removeUserByEmail, updateOwnProfile, updateUserProfile } from "../Controllers/UserController.js";
import { requireAuth } from "../Middleware/AuthMiddleware.js";

const UserRoutes = express.Router();

UserRoutes.route('/user/signup').post(RegisterUser);
UserRoutes.route('/user').post(requireAuth,AddUser);
UserRoutes.route('/user').get(requireAuth,getUserByEmail);
UserRoutes.route('/user').patch(requireAuth,updateUserProfile);
UserRoutes.route('/user/own').patch(requireAuth,updateOwnProfile);
UserRoutes.route('/user/:Email').delete(requireAuth,removeUserByEmail);

export default UserRoutes;