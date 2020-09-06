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
    color: black;

  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor:pointer;
    background: ${primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 150ms;
  }

  button:hover {
    filter: brightness(75%);
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
  max-width: 800px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;
