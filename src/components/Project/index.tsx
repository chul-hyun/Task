import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
`;

export interface Props {}

export interface State {}

export default class Project extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return <Wrapper>얼씨구 절씨구</Wrapper>;
  }
}
