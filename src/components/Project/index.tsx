import * as React from 'react';
import styled from 'styled-components';
import ProjectTitle from './ProjectTitle';
import TaskBoxList, { TaskBoxPropsList } from './TaskBoxList';
import NavItemList, { NavItemPropsList } from './NavItemList';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  background: linear-gradient(-45deg, #21252c, #2e333d);
  height: 100vh;
`;

const HeaderStyled = styled.header`
  padding: 28px 0px;
`;

const MainStyled = styled.main`
  margin-top: 37px;
  margin-left: 68px;
  margin-right: 68px;
  margin-bottom: 63px;
  overflow: auto;
  flex: 1;
`;

const FooterStyled = styled.footer``;

export interface Props {
  title: string;
  taskBoxPropsList: TaskBoxPropsList;
  navItemPropsList: NavItemPropsList;
}

export interface State {}

export default class Project extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    const { title, taskBoxPropsList, navItemPropsList } = this.props;

    return (
      <Wrapper>
        <HeaderStyled>
          <ProjectTitle title={title} />
        </HeaderStyled>
        <MainStyled>
          <TaskBoxList taskBoxPropsList={taskBoxPropsList} />
        </MainStyled>
        <FooterStyled>
          <NavItemList navItemPropsList={navItemPropsList} />
        </FooterStyled>
      </Wrapper>
    );
  }
}
