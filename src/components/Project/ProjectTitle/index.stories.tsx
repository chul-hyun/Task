import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import styled from 'styled-components';
import ProjectTitle from './index';

const Wrapper = styled.div`
  padding: 20px;
  padding-left: 0px;
  margin: 10px;
  background: linear-gradient(-45deg, #21252c, #2e333d);
`;

export default (name: string) =>
  storiesOf(name, module).add('basic', () => (
    <>
      <Wrapper>
        <ProjectTitle title={text('title name', 'Project 01')} />
      </Wrapper>
    </>
  ));
