const express = require('express');
const authMiddleware = require('../Middleware/auth');

const Transacao = require('../Models/transacoes');
const Balance = require('../Models/balance');
const User = require('../Models/user');

const router = express.Router();

router.use(authMiddleware);

router.post('/', async (req, res) => {
  try {
    if (req.body.type === 'outcome') {
      const balance = await Balance.findOne();
      const { income } = balance;

      const newBalance = (balance.outcome + req.body.value);
      const newTotal = (income - newBalance);
      if (newTotal < 0) return res.status(400).send({ error: 'Total ficou no negativo' });

      const transacao = await Transacao.create({ ...req.body, user_id: req.userId });

      await Balance.update({ outcome: newBalance, total: newTotal });

      return res.send([transacao, { income, outcome: newBalance, total: (income - newBalance) }]);
    }
    if (req.body.type === 'income') {
      if (await Balance.findOne()) {
        const balance = await Balance.findOne();
        const transacao = await Transacao.create({ ...req.body, user_id: req.userId });
        const { outcome, user_id } = balance;
        const newBalance = (balance.income + req.body.value);
        const newTotal = (newBalance - outcome);
        await Balance.update({ income: newBalance, total: newTotal });

        return res.send(
          [transacao, { income: newBalance, outcome, total: (newBalance - outcome) }],
        );
      }
    }
    const transacao = await Transacao.create({ ...req.body, user_id: req.userId });
    const income = req.body.value;
    const outcome = 0;
    const total = req.body.value;
    const balance = await Balance.create({
      income, outcome, total, user_id: req.userId,
    });
    return res.send([transacao, balance]);
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao criar' });
  }
});
router.get('/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;

    const transacao = await Transacao.find({ user_id: { $eq: user_id } });
    const balance = await Balance.find({ user_id: { $eq: user_id } });
    return res.json([transacao, balance]);
  } catch (e) {
    return res.status(400).send({ error: 'Erro ao buscar' });
  }
});
module.exports = (app) => app.use('/transacao', router);
