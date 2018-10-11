import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import NavItemList from './index';

const Wrapper = styled.div`
  padding-top: 40px;
  margin: 10px;
  background: linear-gradient(-45deg, #21252c, #2e333d);
`;

export default name =>
  storiesOf(name, module).add('basic', () => (
    <>
      <Wrapper>
        <NavItemList
          navItemPropsList={[
            {
              title: 'Home',
              key: '1',
            },
            {
              title: 'Dashboard',
              key: '2',
            },
            {
              title: 'My page',
              key: '3',
            },
            {
              title: 'Setting',
              key: '4',
            },
          ]}
        />
      </Wrapper>
    </>
  ));
