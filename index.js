require('dotenv').config();

const express = require("express");
const helmet = require("helmet");
const app = express();

const PORT = process.env.PORT || 5100;

const connectDB = require("./src/config/database");

const cuentaRoutes = require('./src/routes/cuentaRoutes');



// routes
const transaccionRoutes = require('./src/routes/transaccionRoutes');


 

// CONEXIÓN A BD
connectDB();

// MIDDLEWARE (IMPORTANTE)
app.use(helmet());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Financial Transfer API funcionando "
  });
});

// ROUTES
app.use('/api/transacciones', transaccionRoutes);
// ROUTES ACCOUNT
app.use('/api/cuentas', cuentaRoutes);

// SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});