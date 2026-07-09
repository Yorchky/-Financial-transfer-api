const express = require('express');
const router = express.Router();

const {crearCuenta,obtenerCuentas} = require('../controllers/cuentaController');

router.get('/', obtenerCuentas);
router.post('/', crearCuenta);

module.exports = router; 