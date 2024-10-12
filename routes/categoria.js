const express = require('express');
const router = express.Router();
const {
    crearCategoria,
    agregarSubcategoria,
    agregarProducto
} = require('../controllers/categoriaController');

// Ruta para crear una nueva categoría
router.post('/crear-categoria', crearCategoria);

// Ruta para agregar una subcategoría
router.post('/agregar-subcategoria/:categoriaId', agregarSubcategoria);

// Ruta para agregar un producto dentro de una subcategoría
router.post('/agregar-producto/:categoriaId/:subcategoriaId', agregarProducto);

module.exports = router;
