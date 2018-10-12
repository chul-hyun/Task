import * as React from 'react';
import styled from 'styled-components';
import TaskHeader from './TaskHeader';
import TaskItemList, { Tasks } from './TaskItemList/index';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 295px;
  height: 100%;
`;

const TaskHeaderStyled = styled.div`
  position: relative;
  z-index: 2;
`;

const TaskItemListStyled = styled.div`
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 30px;
  flex: 1;
  background: linear-gradient(
    -45deg,
    rgba(240, 240, 240, 0.5),
    rgba(224, 224, 224, 0.8)
  );
  border-radius: 0px 0px 3px 3px;
  overflow-y: auto;
`;

export interface Props {
  title: string;
  color: string;
  tasks: Tasks;
}

export interface State {}

export default class TaskBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    const { title, color, tasks } = this.props;
    return (
      <Wrapper>
        <TaskHeaderStyled>
          <TaskHeader title={title} taskNum={tasks.length} color={color} />
        </TaskHeaderStyled>
        <TaskItemListStyled>
          <TaskItemList tasks={tasks} />
        </TaskItemListStyled>
      </Wrapper>
    );
  }
}
