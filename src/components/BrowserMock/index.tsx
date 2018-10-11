import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: linear-gradient(to right, #8e44ad, #c0392b);
  display: flex;
  padding: 2em;
`;

const Browser = styled.div`
  border-top: 2em solid rgba(230, 230, 230, 0.7);
  box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.4);
  position: relative;
  border-radius: 3px 3px 0 0;
  height: 100%;
  width: 100%;

  flex: 1;

  &:before {
    display: block;
    position: absolute;
    content: '';
    top: -1.25em;
    left: 1em;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background-color: #f44;
    box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
  }
`;

const Screen = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const BrowserMock: React.SFC = ({ children }) => (
  <Wrapper>
    <Browser>
      <Screen>{children}</Screen>
    </Browser>
  </Wrapper>
);

export default BrowserMock;
