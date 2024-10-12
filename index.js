const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const categoriaRoutes = require('./routes/categoria');
const usuarioRoutes = require('./routes/usuario');
const pedidoRoutes = require('./routes/pedido');

// Cargar variables de entorno
dotenv.config();

const app = express();
app.use(express.json());

// Conexión a MongoDB
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
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/categorias', categoriaRoutes);

// Ruta básica de prueba
app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
