require('dotenv').config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 5100;

const connectDB = require("./src/config/database");

// routes
const transaccionRoutes = require('./src/routes/transaccionRoutes');

// CONEXIÓN A BD
connectDB();

// MIDDLEWARE (IMPORTANTE)
app.use(express.json());

// ROUTES
app.use('/api/transacciones', transaccionRoutes);

// SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});