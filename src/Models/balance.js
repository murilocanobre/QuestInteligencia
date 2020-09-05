const mongoose = require('../database');

const BalanceShema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  income: {
    type: Number,
    require: true,
  },

  outcome: {
    type: Number,
    require: true,
  },

  total: {
    type: Number,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Balance = mongoose.model('Balance', BalanceShema);

module.exports = Balance;
