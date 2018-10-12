import * as React from 'react';
import styled from 'styled-components';
import StyledLine from '../StyledLine';

const Wrapper = styled.div`
  display: inline-block;
`;

const TitleStyled = styled.div`
  font-size: 30px;
  color: rgba(255, 255, 255, 0.7);
  display: inline-block;
  margin: 13px 17px 9px 56px;
`;

export interface Props {
  title: string;
}

export interface State {}

export default class ProjectTitle extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    const { title } = this.props;
    return (
      <Wrapper>
        <TitleStyled>{title}</TitleStyled>
        <StyledLine />
      </Wrapper>
    );
  }
}
