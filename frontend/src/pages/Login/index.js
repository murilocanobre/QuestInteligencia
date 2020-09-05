import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Tittle, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const disparador = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    disparador(exampleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Tittle>
        Login
        <small>Oie</small>
      </Tittle>
      <Paragrafo>dd</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
