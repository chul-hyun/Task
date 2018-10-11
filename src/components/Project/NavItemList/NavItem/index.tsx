import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 87px;
  flex: 1;
  font-size: 20px;
  color: #646464;
  justify-content: center;
  align-items: center;
`;

export interface Props {
  title: string;
}

export interface State {}

export default class NavItem extends React.PureComponent<Props, State> {
  public render() {
    const { title } = this.props;
    return <Wrapper>{title}</Wrapper>;
  }
}
