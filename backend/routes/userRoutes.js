import express from "express";
import { authenticateUser, register } from "../controllers/userController.js";
const router = express.Router()

router.post('/', register) //*Crear usuario
router.post('/login', authenticateUser)

export default router;