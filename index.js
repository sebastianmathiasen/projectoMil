const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Importar rutas
const usuarioRoutes = require('./routes/usuario');
const categoriaRoutes = require('./routes/categoria');
const pedidoRoutes = require('./routes/pedido');

// Configuración de variables de entorno
dotenv.config();

const app = express();
app.use(express.json()); // Middleware para JSON

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a MongoDB');
}).catch((error) => {
    console.error('Error conectando a MongoDB:', error);
});

// Usar las rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/pedidos', pedidoRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
