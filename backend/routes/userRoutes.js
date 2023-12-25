import express from "express";
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Desde <b style="font-size:1.5em">api/usuarios</b>')
})

export default router;