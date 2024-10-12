const Usuario = require('../models/usuario');

// Registrar usuario
exports.registrarUsuario = async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
};

// Obtener usuarios por bar
exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find({ barId: req.params.barId });
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};
