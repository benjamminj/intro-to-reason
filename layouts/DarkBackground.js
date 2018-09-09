import React from 'react';
import styled from 'styled-components';
import { darkGray } from '../theme';

const Background = styled.div`
  color: #fff;
  background: ${darkGray};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;
`

const DarkBackground = ({ children }) => (
  <Background>
    {children}
  </Background>
)

export default DarkBackground