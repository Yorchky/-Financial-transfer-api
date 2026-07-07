const Cuenta = require('../models/cuenta');

// CREATE
const crearCuenta = async (req, res) => {
    try {
        const cuenta = await Cuenta.create(req.body);
        res.status(201).json(cuenta);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
 

// ALL
const obtenerCuentas = async (req, res) => {
    try {
        const cuentas = await Cuenta.find();
        res.status(200).json(cuentas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearCuenta,
    obtenerCuentas
};