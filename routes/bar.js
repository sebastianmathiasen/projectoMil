const express = require('express');
const { crearBar, obtenerBares } = require('../controllers/barController');
const router = express.Router();

router.post('/crear-bar', crearBar);
router.get('/bares/:duenoId', obtenerBares);

module.exports = router;
