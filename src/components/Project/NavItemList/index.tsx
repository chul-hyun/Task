import * as React from 'react';
import styled from 'styled-components';
import NavItem, { Props as NavItemProps } from './NavItem';
import StyledLine from '../StyledLine';

const Wrapper = styled.div`
  width: 100%;
`;

const ItemListStyled = styled.div`
  display: flex;
`;

export type NavItemPropsList = (NavItemProps & { key: string })[];

export interface Props {
  navItemPropsList: NavItemPropsList;
}

export interface State {}

export default class NavItemList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    const { navItemPropsList } = this.props;
    return (
      <Wrapper>
        <StyledLine />
        <ItemListStyled>
          {navItemPropsList.map(navItemProps => (
            <NavItem {...navItemProps} />
          ))}
        </ItemListStyled>
      </Wrapper>
    );
  }
}
