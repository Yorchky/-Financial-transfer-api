const Transaccion = require('../models/Transacciones');

// CREATE
const crearTransaccion = async (req, res) => {
    try {
        const transaccion = new Transaccion(req.body);
        await transaccion.save();

        res.status(201).json(transaccion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ ALL
const obtenerTransacciones = async (req, res) => {
    try {
        const transacciones = await Transaccion.find();
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ ONE
const obtenerTransaccion = async (req, res) => {
    try {
        const transaccion = await Transaccion.findById(req.params.id);

        if (!transaccion) {
            return res.status(404).json({ message: 'No encontrada' });
        }

        res.json(transaccion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE
const actualizarTransaccion = async (req, res) => {
    try {
        const transaccion = await Transaccion.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!transaccion) {
            return res.status(404).json({ message: 'No encontrada' });
        }

        res.json(transaccion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE
const eliminarTransaccion = async (req, res) => {
    try {
        const transaccion = await Transaccion.findByIdAndDelete(req.params.id);

        if (!transaccion) {
            return res.status(404).json({ message: 'No encontrada' });
        }

        res.json({ message: 'Eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    crearTransaccion,
    obtenerTransacciones,
    obtenerTransaccion,
    actualizarTransaccion,
    eliminarTransaccion
};