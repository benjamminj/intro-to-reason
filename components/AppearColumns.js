import React from 'react';
import AppearList from './AppearList';
import styled from 'styled-components';

const AppearColumns = props => (
  <AppearList
    {...props}
    style={{ display: 'flex', alignItems: 'flex-start', ...props.style }}
  />
);

export default AppearColumns;
