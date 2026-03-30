const express = require('express');
const router = express.Router();
const livrosRoutes = require('./src/routes/livros.routes');
const usuariosRoutes = require('./src/routes/usuarios.routes');

// 1. Rotas de Recursos (Coloque SEMPRE antes do 404)
const {
  autenticar, 
  validarContentRype
} = require ('./src/middlewares/main.middlewares')

// 2. Rota Raiz
router.get('/', (req, res) => {
  res.json({ sistema: 'Biblioteca Ralph & Teddy', status: 'Online' });
});

router.use(autenticar);
router.use(validarContentRype);


router.use('/livros', livrosRoutes);
router.use('/usuarios', usuariosRoutes);

module.exports = router;
