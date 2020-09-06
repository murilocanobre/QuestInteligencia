import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import axios from '../../services/axios';
import { DashboardContainer } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Dashboard() {
  const id = useSelector((state) => state.auth.user._id);
  const [transacoes, setTransacao] = useState([], []);
  console.log(id);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/transacao/${id}`);
      setTransacao(response.data[0]);
      console.log(response.data[0]);
    }
    getData();
  }, []);
  return (
    <Container>
      <DashboardContainer>
        {transacoes.map((transacao) => (
          <div key={String(transacao._id)}>
            <span>{transacao.title}</span>
            <span>{transacao.type}</span>

            <span>{transacao.value}</span>
          </div>
        ))}
      </DashboardContainer>
    </Container>
  );
}
