const express = require('express');
const router = express.Router();

const auth = require("../middlewares/auth");
const { crearCuenta, obtenerCuentas } = require('../controllers/cuentaController');

router.use(auth);

router.get('/', obtenerCuentas);
router.post('/', crearCuenta);

module.exports = router;