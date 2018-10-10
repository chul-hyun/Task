import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs/react';
import styled from 'styled-components';
import TaskBoxList from './index';

const Wrapper = styled.div`
  padding: 20px;
  margin: 10px;
  background: linear-gradient(-45deg, #21252c, #2e333d);
`;

export default name =>
  storiesOf(name, module).add('basic', () => (
    <>
      <Wrapper>
        <TaskBoxList
          taskBoxPropsList={[
            {
              key: '1',
              title: 'Todo',
              color: 'pink',
              tasks: [
                { title: 'About what to do 1', key: '1' },
                { title: 'About what to do 2', key: '2' },
                { title: 'About what to do 3', key: '3' },
                { title: 'About what to do 4', key: '4' },
                { title: 'About what to do 5', key: '5' },
                { title: 'About what to do 6', key: '6' },
                { title: 'About what to do 7', key: '7' },
                { title: 'About what to do 8', key: '8' },
                { title: 'About what to do 9', key: '9' },
                { title: 'About what to do 10', key: '10' },
                { title: 'About what to do 11', key: '11' },
                { title: 'About what to do 12', key: '12' },
              ],
            },
            {
              key: '2',
              title: 'Done',
              color: 'green',
              tasks: [
                { title: 'About what to done 1', key: '1' },
                { title: 'About what to done 2', key: '2' },
                { title: 'About what to done 3', key: '3' },
              ],
            },
            {
              key: '3',
              title: 'Done 3',
              color: 'black',
              tasks: [
                { title: 'About what to done 1', key: '1' },
                { title: 'About what to done 2', key: '2' },
                { title: 'About what to done 3', key: '3' },
              ],
            },
            {
              key: '4',
              title: 'Done 4',
              color: 'white',
              tasks: [
                { title: 'About what to done 1', key: '1' },
                { title: 'About what to done 2', key: '2' },
                { title: 'About what to done 3', key: '3' },
              ],
            },
            {
              key: '5',
              title: 'Done',
              color: 'red',
              tasks: [
                { title: 'About what to done 1', key: '1' },
                { title: 'About what to done 2', key: '2' },
                { title: 'About what to done 3', key: '3' },
              ],
            },
          ]}
        />
      </Wrapper>
    </>
  ));
