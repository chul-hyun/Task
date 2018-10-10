import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs/react';
import styled from 'styled-components';
import Component from './index';

const Wrapper = styled.div`
  width: 364px;
  height: 47px;
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
