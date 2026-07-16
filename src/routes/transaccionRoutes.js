const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const {
    crearTransaccion,
    obtenerTransacciones,
    obtenerTransaccion,
    actualizarTransaccion,
    eliminarTransaccion
} = require('../controllers/transaccionController');

router.use(auth);

// CREATE
router.post('/', crearTransaccion);

// READ ALL
router.get('/', obtenerTransacciones);

// READ ONE
router.get('/:id', obtenerTransaccion);

// UPDATE
router.put('/:id', actualizarTransaccion);

// DELETE
router.delete('/:id', eliminarTransaccion);

module.exports = router;