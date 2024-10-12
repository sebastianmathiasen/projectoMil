const express = require('express');
const { registrarUsuario, obtenerUsuarios } = require('../controllers/usuarioController');
const router = express.Router();

router.post('/registro', registrarUsuario);
router.get('/usuarios/:barId', obtenerUsuarios);

module.exports = router;
