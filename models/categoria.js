const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },  // Nombre de la categoría (ej. Bebidas)
    subcategorias: [
        {
            nombre: { type: String, required: true },  // Nombre de la subcategoría (ej. Vinos)
            productos: [
                {
                    nombre: { type: String, required: true },  // Nombre del producto (ej. Malbec)
                    precio: { type: Number, required: true }  // Precio del producto
                }
            ]
        }
    ],
    barId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bar', required: true },  // Relación con el bar
});

module.exports = mongoose.model('Categoria', categoriaSchema);
