import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import styled from 'styled-components';
import NavItem from './index';

const Wrapper = styled.div`
  padding: 10px;
  margin: 10px;
  background: linear-gradient(-45deg, #21252c, #2e333d);
`;

export default name =>
  storiesOf(name, module).add('basic', () => (
    <Wrapper>
      <NavItem title={text('title', 'nav')} />
    </Wrapper>
  ));
