require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express(); 
const PORT = process.env.PORT || 3000;
const MONGOBD_URL = process.env.MONGODB_URL;

app.use(express.json());

mongoose.connect(MONGODB_URL) /*/Aquí allá no funciona la parte de connexión a mongoose
.then(() => {
    console.log('Conexión exitosa a MongoDB Atlas');
})
.catch(err => {
    console.log('Error de conexión', err.message);
})