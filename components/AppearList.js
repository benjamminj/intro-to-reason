import { Appear } from 'mdx-deck';
import React from 'react';

const AppearList = ({ children, ...props }) => {
  const [first, ...rest] = children;

  return (
    <ul {...props}>
      {first}
      <Appear>{rest}</Appear>
    </ul>
  );
};

export default AppearList;
