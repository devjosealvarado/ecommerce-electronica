const express = require('express');
const app = express();
const path = require('path');

console.log('hola');


// import { createPool } from "mysql2/promise";

// export const pool = createPool({
//     host:"localhost",
//     port:3306,
//     database:"node_database",
//     user:"root",
//     password:""
// });



// Routes frontend
app.use('/', express.static(path.join(__dirname, 'views', 'home')));

module.exports = app;