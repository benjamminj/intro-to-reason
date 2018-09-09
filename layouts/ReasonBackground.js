import React from 'react';
import styled from 'styled-components';
import { primaryColor } from '../theme';

const Background = styled.div`
  color: #fff;
  background: ${primaryColor};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;
`

const ReasonBackground = ({ children }) => (
  <Background>
    {children}
  </Background>
)

export default ReasonBackground