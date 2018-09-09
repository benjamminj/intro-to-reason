import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  position: relative;
  font-size: 3rem;
`;

const IconWrapper = styled.span`
  position: absolute;
  max-width: 3rem;
  left: calc(-3rem - 1ch);
`;

const Li = ({ icon, children, ...props }) => (
  <StyledLi {...props}>
    <IconWrapper>{icon}</IconWrapper>
    {children}
  </StyledLi>
);

export default Li