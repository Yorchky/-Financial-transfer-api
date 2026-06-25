const mongoose = require('mongoose');

const transaccionesSchema = new mongoose.Schema({
    cuentaOrigen:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cuentaDestino: {
        type: mongoose.Schema.Types.ObjectId,
        required:true 

    },

    monto: {
    type: Number,
    required:true,
    min: [0, 'El monto debe ser mayor a cero']

    },

    fecha: {
    type: Date,
    default: Date.now,

    },

    estado: {
        type: String,
        enum: ['pendiente', 'completada', 'fallida'],
        default: 'pendiente'
    }
  
});
 
module.exports = mongoose.model('Transaccion', transaccionesSchema);