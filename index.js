const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const categoriaRoutes = require('./routes/categoria');
const usuarioRoutes = require('./routes/usuario');
const menuRoutes = require('./routes/menu');
const pedidoRoutes = require('./routes/pedido');

// Cargar variables de entorno
dotenv.config();

// Inicializar la app de Express
const app = express();

// Middleware para analizar los datos enviados en formato JSON
app.use(express.json());

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
app.use('/api/usuarios', usuarioRoutes);  // Rutas para usuarios (dueños y empleados)
app.use('/api/menu', menuRoutes);  // Rutas para gestionar el menú (categorías y productos)
app.use('/api/pedidos', pedidoRoutes);  // Rutas para gestionar pedidos
app.use('/api/categorias', categoriaRoutes);  // Rutas para gestionar categorías

// Ruta básica de prueba
app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

// Puerto de escucha del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
