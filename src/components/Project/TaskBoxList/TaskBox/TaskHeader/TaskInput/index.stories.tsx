import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs/react';
import styled from 'styled-components';
import Component from './index';

const Wrapper = styled.div`
  width: 300px;
  height: 47px;
  margin: 10px;
  padding: 30px;
  background-color: #fafafa;
`;

export default name =>
  storiesOf(name, module).add('basic', () => (
    <>
      <Wrapper>
        <Component color={color('color1', Component.defaultProps.color)} />
      </Wrapper>
      <Wrapper>
        <Component color={color('color2', '#E38EEA')} />
      </Wrapper>
    </>
  ));
