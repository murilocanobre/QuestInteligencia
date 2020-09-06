import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [title, setTitle] = useState('');
  const [value1, setValue] = useState('');
  let type;
  async function handleSubmit(e) {
    e.preventDefault();

    if (value1 > 0) {
      type = 'income';
      const value = Number(value1);

      try {
        await axios.post('/transacao', {
          title,
          value,
          type,
        });
        toast.success('Cadastro realizado com sucesso');
        history.push('/dashboard');
      } catch (err) {
        console.log(err);
      }
    }
    if (value1 < 0) {
      type = 'outcome';
      const value = -Number(value1);

      try {
        await axios.post('/transacao', {
          title,
          value,
          type,
        });
        toast.success('Cadastro realizado com sucesso');
        history.push('/dashboard');
      } catch (err) {
        toast.error('Saldo Insuficiente');
      }
    }
  }

  return (
    <Container>
      <h1>Nova Transação</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Seu Título"
          />
        </label>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            value={value1}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor"
          />
        </label>

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
