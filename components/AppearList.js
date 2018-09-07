import { Appear } from 'mdx-deck';
import React from 'react';

const AppearList = ({ children }) => {
  const [first, ...rest] = children;

  return (
    <ul>
      {first}
      <Appear>{rest}</Appear>
    </ul>
  );
};

export default AppearList;
