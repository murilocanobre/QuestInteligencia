import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import axios from '../../services/axios';
import { DashboardContainer, Nav } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Dashboard() {
  const id = useSelector((state) => state.auth.user._id);
  const [transacoes, setTransacao] = useState([]);
  const [saldo, setSaldo] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/transacao/${id}`);
      setTransacao(response.data[0]);
      setSaldo(response.data[1]);
    }
    getData();
  }, []);
  return (
    <Container>
      <Nav>
        {' '}
        <h3>Transações</h3>
      </Nav>
      <DashboardContainer>
        {transacoes.map((transacao) => (
          <div key={String(transacao._id)}>
            <span>{transacao.title}</span>
            <span>{transacao.type}</span>
            <span>{transacao.value}</span>
          </div>
        ))}
      </DashboardContainer>
      <br />
      <div>Saldo total de R${saldo.total}</div>
    </Container>
  );
}
