import * as React from 'react';
import styled from 'styled-components';
import StyledLine from '../StyledLine';

const Wrapper = styled.div`
  width: 100%;
`;

const ItemListStyled = styled.div`
  display: flex;
  height: 87px;
`;

const ItemStyled = styled.div`
  display: flex;
  height: 87px;
  flex: 1;
  font-size: 20px;
  color: #646464;
  justify-content: center;
  align-items: center;
`;

export interface Props {}

export interface State {}

export default class BottomNav extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Wrapper>
        <StyledLine />
        <ItemListStyled>
          <ItemStyled>Home</ItemStyled>
          <ItemStyled>Dashboard</ItemStyled>
          <ItemStyled>My Page</ItemStyled>
          <ItemStyled>Setting</ItemStyled>
        </ItemListStyled>
      </Wrapper>
    );
  }
}
