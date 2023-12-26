import express from "express";
import { users } from "../controllers/userController.js";
const router = express.Router()

router.get('/', users)

router.post('/', (req, res) => {
    res.send('Desde -POST- <b style="font-size:1.5em">api/usuarios</b>')
})

router.put('/', (req, res) => {
    res.send('Desde -PUT- <b style="font-size:1.5em">api/usuarios</b>')
})

router.delete('/', (req, res) => {
    res.send('Desde -DELETE- <b style="font-size:1.5em">api/usuarios</b>')
})

export default router;