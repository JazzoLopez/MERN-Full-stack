import express from "express";
import { users, register } from "../controllers/userController.js";
const router = express.Router()

router.get('/', users)
router.post('/', register) //*Crear usuario

export default router;