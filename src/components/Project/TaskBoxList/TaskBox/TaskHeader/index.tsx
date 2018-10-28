import * as React from 'react';
import styled from 'styled-components';
import { wrapper } from '../../../../../utils/style-utils';
import TaskInput from './TaskInput';
import * as className from './index.scss';

const defaultProps = {
  color: '#99EA8E',
};

interface Props extends Unpacked<typeof defaultProps> {
  title: string;
  taskNum: number;
}

const HeaderLine = styled.div`
  height: 1px;
  width: 100%;
  border-radius: 50%;
  background-color: ${props => props.color};
  box-shadow: 0px 0px 5px ${props => props.color};
`;

const MainWrapper = styled.div`
  display: flex;
`;

const TitleStyled = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  font-size: 20px;
  padding: 0px 0px 0px 21px;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const TaskNumStyled = styled.div`
  display: flex;
  width: 61px;
  justify-content: center;
  align-items: center;
  color: rgba(44, 49, 58, 0.6);
`;

const StyledTaskInput = styled(TaskInput)`
  flex: 1;
  margin: 19px 15px 21px 15px;
`;

export interface State {}

export default class TaskHeader extends React.PureComponent<Props, State> {
  static defaultProps = defaultProps;

  public render() {
    const { title, taskNum, color } = this.props;
    return (
      <div className={className.root}>
        <div className={className.header}>
          <TitleStyled>{title}</TitleStyled>
          <TaskNumStyled>{taskNum}</TaskNumStyled>
        </div>
        <HeaderLine color={color} />
        <MainWrapper>
          <StyledTaskInput color={color} />
        </MainWrapper>
      </div>
    );
  }
}
