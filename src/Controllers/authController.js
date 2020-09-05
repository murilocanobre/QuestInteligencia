const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../Middleware/auth');

const authConfig = require('../config/auth.json');
const User = require('../Models/user');
const Transacao = require('../Models/transacoes');

const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

router.get('/logout/:user_id', async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);
    res.json({
      auth: false,
      id: user.id,
    });
  } catch (err) {
    return res.status(400).send({ error: 'Erro' });
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: 'Usuário não encontrado' });
  }
});

router.post('/register', async (req, res) => {
  const { email } = req.body;
  try {
    if (await User.findOne({ email })) { return res.status(400).send({ error: 'Usuário já existente' }); }
    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed' });
  }
});

router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log(user);
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: 'Erro carregar Usuário' });
  }
});

router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(400).send({ error: 'Usuário não encontrado' });
  }
  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).send({ error: 'Senha inválida' });
  }

  user.password = undefined;

  res.send({
    user,
    token: generateToken({ id: user.id }),
  });
});

module.exports = (app) => app.use('/users', router);
