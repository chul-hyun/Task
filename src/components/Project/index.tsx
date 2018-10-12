import * as React from 'react';
import styled from 'styled-components';
import ProjectTitle from './ProjectTitle';
import TaskBoxList, { TaskBoxPropsList } from './TaskBoxList';
import NavItemList, { NavItemPropsList } from './NavItemList';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  background: linear-gradient(-45deg, #21252c, #3b414e);
  height: 100vh;
`;

const HeaderStyled = styled.header`
  padding: 15px 0px;
`;

const MainStyled = styled.main`
  margin-top: 20px;
  margin-bottom: 40px;
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
