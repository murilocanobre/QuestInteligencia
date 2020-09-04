const express = require('express');
const authMiddleware = require('../Middleware/auth');

const Transacao = require('../Models/transacoes');

const router = express.Router();

router.use(authMiddleware);

router.post('/', async (req, res) => {
  try {
    const transacao = await Transacao.create({ ...req.body, user_id: req.userId });
    return res.send({ transacao });
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao criar' });
  }
});
module.exports = (app) => app.use('/transacao', router);
