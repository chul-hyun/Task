import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Component from './index';

const Wrapper = styled.div`
  margin: 10px;
  padding: 30px;
  background-color: #2e333d;
`;

export default name =>
  storiesOf(name, module).add('basic', () => (
    <>
      <Wrapper>
        <Component />
      </Wrapper>
    </>
  ));
