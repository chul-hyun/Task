import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import styled from 'styled-components';
import TaskItem from './index';

const Wrapper = styled.div`
  width: 282px;
  height: 57px;
  padding: 20px;
  margin: 10px;
  background: linear-gradient(-45deg, #f0f0f0, #e0e0e0);
`;

export default name =>
  storiesOf(name, module).add('basic', () => (
    <>
      <Wrapper>
        <TaskItem title={text('title', 'text')} />
      </Wrapper>
      <Wrapper>
        <TaskItem title="About what to do" />
      </Wrapper>
      <Wrapper>
        <TaskItem title="About what to do long long long long" />
      </Wrapper>
    </>
  ));
