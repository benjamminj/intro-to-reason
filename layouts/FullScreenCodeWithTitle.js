import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;

  pre {
    align-items: center;
    border-radius: 0 !important;
    bottom: 0;
    display: flex !important;
    left: 0;
    margin: 0 !important;
    position: absolute !important;
    right: 0;
    top: 0;
    z-index: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    padding: 1rem 2rem;
    position: fixed;
    text-align: left;
    width: 100%;
    z-index: 999;
  }
`;

const FullScreenCodeWithTitle = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default FullScreenCodeWithTitle;
