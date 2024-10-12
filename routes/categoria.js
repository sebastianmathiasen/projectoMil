const express = require('express');
const { crearCategoria, agregarSubcategoria, agregarProducto } = require('../controllers/categoriaController');
const router = express.Router();

router.post('/crear-categoria', crearCategoria);
router.post('/agregar-subcategoria/:categoriaId', agregarSubcategoria);
router.post('/agregar-producto/:categoriaId/:subcategoriaId', agregarProducto);

module.exports = router;
