const mongoose = require('mongoose');

const cuentaSchema = new mongoose.Schema({
    titular:{
        type: String,
        required: true
        },
    numeroCuentaCifrado: {
        type: String,
        required:true

    },

    iv: {
    type: String,
    required:true

    },

    authTag: {
        type: String,
        required: true
    },

    saldo: {
        type: Number,
        default: 0    
  
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
  
});
 
module.exports = mongoose.model('Cuenta',cuentaSchema);