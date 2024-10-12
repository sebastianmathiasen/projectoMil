const express = require('express');
const { crearPedido, obtenerPedidos } = require('../controllers/pedidoController');
const router = express.Router();

router.post('/crear-pedido', crearPedido);
router.get('/pedidos/:barId', obtenerPedidos);

module.exports = router;
