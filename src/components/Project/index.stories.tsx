import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { color, number, text, array } from '@storybook/addon-knobs/react';
import styled from 'styled-components';
import { string } from 'prop-types';
import Project from './index';

const Wrapper = styled.div`
  padding: 20px;
  padding-left: 0px;
  margin: 10px;
  background: linear-gradient(-45deg, #21252c, #2e333d);
`;

export default name =>
  storiesOf(name, module).add('basic', () => (
    <>
      <Wrapper>
        <Project />
      </Wrapper>
    </>
  ));
