require("dotenv").config();

const { generarApplicationToken } = require("./src/helpers/applicationToken");

console.log("Application Token:");
console.log(generarApplicationToken());