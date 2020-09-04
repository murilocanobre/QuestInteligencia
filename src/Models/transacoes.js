const mongoose = require('../database');

const TransacaoShema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Transacao = mongoose.model('Transacao', TransacaoShema);

module.exports = Transacao;
