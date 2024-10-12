const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    mesa: { type: Number, required: true },  // Número de la mesa
    productos: [
        {
            productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },  // Relación con producto
            cantidad: { type: Number, required: true }  // Cantidad de productos pedidos
        }
    ],
    total: { type: Number, required: true },  // Total del pedido
    pagado: { type: Boolean, default: false },  // Estado del pedido
    barId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bar', required: true },  // Relación con el bar
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pedido', pedidoSchema);
