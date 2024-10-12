const express = require('express');
const router = express.Router();
const { registrarUsuario } = require('../controllers/usuarioController');

// Ruta para registrar un usuario
router.post('/registro', registrarUsuario);

module.exports = router;
