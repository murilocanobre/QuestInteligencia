import styled, { createGlobalStyle } from 'styled-components';
import {
  primaryColor,
  primaryDarkColor,
  errorColor,
  sucessColor,
} from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background: ${primaryDarkColor};
    color: ${primaryDarkColor};

  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor:pointer;
    background: #8B0000;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a{
    text-decoration: none;
    color: ${primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${sucessColor}
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${errorColor}
  }
`;

export const Container = styled.section`
  max-width: 760px;
  background: #fff;
  margin: 30px auto;

  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;
