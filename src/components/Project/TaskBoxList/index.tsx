import * as React from 'react';
import styled from 'styled-components';
import TaskBox, { Props as TaskBoxProps } from './TaskBox';
import TaskBoxInput from './TaskBoxInput';

const Wrapper = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  height: 100%;
`;

const ChildrenItemStyled = styled.div`
  display: inline-block;
  margin-right: 120px;
  vertical-align: top;
  height: 100%;
`;

export type TaskBoxPropsList = (TaskBoxProps & { key: string })[];

export interface Props {
  taskBoxPropsList: TaskBoxPropsList;
}

export interface State {}

export default class TaskBoxList extends React.Component<Props, State> {
  childrenRender = () => {
    const { taskBoxPropsList } = this.props;

    return taskBoxPropsList.map(taskBoxProps => (
      <ChildrenItemStyled key={taskBoxProps.key}>
        <TaskBox {...taskBoxProps} />
      </ChildrenItemStyled>
    ));
  };

  public render() {
    return (
      <Wrapper>
        {this.childrenRender()}
        <ChildrenItemStyled>
          <TaskBoxInput />
        </ChildrenItemStyled>
      </Wrapper>
    );
  }
}
