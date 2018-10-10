import * as React from 'react';
import styled from 'styled-components';
import TaskItem, { Props as TaskItemProps } from './TaskItem/index';

const Wrapper = styled.div``;

const ChildrenItemStyled = styled.div`
  margin-bottom: 25px;
`;

export type Tasks = (TaskItemProps & { key: string })[];

export interface Props {
  tasks: Tasks;
}

export interface State {}

export default class TaskItemList extends React.Component<Props, State> {
  childrenRender = () => {
    const { tasks } = this.props;

    return tasks.map(task => (
      <ChildrenItemStyled key={task.key}>
        <TaskItem {...task} />
      </ChildrenItemStyled>
    ));
  };

  public render() {
    return <Wrapper>{this.childrenRender()}</Wrapper>;
  }
}
