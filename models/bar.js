const mongoose = require('mongoose');

const barSchema = new mongoose.Schema({
    nombre: { type: String, required: true },  // Nombre del bar
    direccion: { type: String, required: true },  // Dirección del bar
    categorias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }],  // Relación con categorías de productos
    dueño: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },  // Relación con el dueño del bar
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bar', barSchema);
