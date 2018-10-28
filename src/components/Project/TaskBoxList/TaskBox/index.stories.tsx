import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { color, text, array } from '@storybook/addon-knobs/react';
import styled from 'styled-components';
import TaskBox from './index';

const Wrapper = styled.div`
  padding: 20px;
  margin: 10px;
  background: linear-gradient(-45deg, #21252c, #2e333d);
`;

export default (name: string) =>
  storiesOf(name, module).add('basic', () => {
    const taskTitles = array('task titles', [
      'About what to do 1',
      'About what to do 2',
    ]);
    const tasks = taskTitles.map((title, i) => ({
      key: `${Date.now()}_${i}`,
      title,
    }));

    return (
      <>
        <Wrapper>
          <TaskBox
            title={text('title', 'Todo')}
            color={color('color', '#E38EEA')}
            tasks={tasks}
          />
        </Wrapper>
      </>
    );
  });
