const Pedido = require('../models/pedido');

// Crear un pedido
exports.crearPedido = async (req, res) => {
    const { mesa, productos, total, barId } = req.body;
    try {
        const nuevoPedido = new Pedido({ mesa, productos, total, barId });
        await nuevoPedido.save();
        res.status(201).json(nuevoPedido);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el pedido' });
    }
};

// Obtener pedidos por bar
exports.obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find({ barId: req.params.barId });
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener pedidos' });
    }
};
