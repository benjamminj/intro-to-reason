import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
  width: ${props => props.width};
`

Column.defaultProps = {
  width: 'auto'
}

export default Column;