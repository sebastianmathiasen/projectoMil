// models/Menu.js

const mongoose = require('mongoose');

// Definir el esquema del menú
const MenuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

// Exportar el modelo
module.exports = mongoose.model('Menu', MenuSchema);
