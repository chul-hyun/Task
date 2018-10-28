import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs/react';
import styled from 'styled-components';
import TaskInput from './index';

const Wrapper = styled.div`
  width: 300px;
  height: 47px;
  margin: 10px;
  padding: 30px;
  background-color: #fafafa;
`;

export default (name: string) =>
  storiesOf(name, module).add('basic', () => (
    <>
      <Wrapper>
        <TaskInput color={color('color1', TaskInput.defaultProps.color)} />
      </Wrapper>
      <Wrapper>
        <TaskInput color={color('color2', '#E38EEA')} />
      </Wrapper>
    </>
  ));
