const express = require('express');
const router = express.Router();

const {
    crearCuenta,
    obtenerCuentas
} = require('../controllers/cuentaController');

router.post('/', crearCuenta);
router.get('/', obtenerCuentas);

module.exports = router;