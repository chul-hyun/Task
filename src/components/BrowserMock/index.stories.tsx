import * as React from 'react';
import { storiesOf } from '@storybook/react';
import BrowserMock from './index';

const Hello = () => (
  <div
    style={{
      height: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    Hello World
  </div>
);

export default name =>
  storiesOf(name, module).add('basic', () => (
    <BrowserMock>
      <Hello />
    </BrowserMock>
  ));
