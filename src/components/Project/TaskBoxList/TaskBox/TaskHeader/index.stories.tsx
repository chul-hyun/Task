import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { color, text, number } from '@storybook/addon-knobs/react';
import styled from 'styled-components';
import Component from './index';
import TaskInput from './TaskInput';

const Wrapper = styled.div`
  width: 335px;
  height: 146px;
  padding: 20px;
  margin: 10px;
  background: linear-gradient(-45deg, #21252c, #2e333d);
`;

export default name =>
  storiesOf(name, module).add('basic', () => (
    <>
      <Wrapper>
        <Component
          taskNum={number('taskNum', 12)}
          title={text('title', 'Todo')}
          color={color('color', '#E38EEA')}
        />
      </Wrapper>
      <Wrapper>
        <Component taskNum={10} title="test" />
      </Wrapper>
      <Wrapper>
        <Component taskNum={3} title="Done">
          <TaskInput />
        </Component>
      </Wrapper>
    </>
  ));
