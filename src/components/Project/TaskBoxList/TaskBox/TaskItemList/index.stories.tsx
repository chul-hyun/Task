import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs/react';
import styled from 'styled-components';
import TaskItemList from './index';

const Wrapper = styled.div`
  width: 325px;
  height: 596px;
  padding: 20px;
  margin: 10px;
  background: linear-gradient(-45deg, #21252c, #2e333d);
`;
export default name =>
  storiesOf(name, module).add('basic', () => (
    <>
      <Wrapper>
        <TaskItemList
          tasks={[
            { title: 'About what to do 1', key: '1' },
            { title: 'About what to do 2', key: '2' },
            { title: 'About what to do 3', key: '3' },
          ]}
        />
      </Wrapper>
    </>
  ));
