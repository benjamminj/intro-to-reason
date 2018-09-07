import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  height: ${(props => props.height)};
  width: ${(props => props.width)};
  object-fit: ${props => props.objectFit};
  min-width: ${props => props.minWidth};

  ${({ shape, width }) =>
    shape === 'square' &&
    `
    min-width: auto !important;
    height: ${width}px;
    width: ${width}px;
  `};

  & + img {
    margin-left: 1rem;
  }
`;

const Img = props => <StyledImg {...props} />;

Img.defaultProps = {
  width: 'auto',
  height: 'auto',
  objectFit: 'cover',
  minWidth: '1200px'
};

export default Img;
