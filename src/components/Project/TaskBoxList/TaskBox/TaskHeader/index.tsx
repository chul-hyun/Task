import * as React from 'react';
import styled from 'styled-components';
import TaskInput from './TaskInput';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  height: 58px;
  width: 100%;
`;

const HeaderLine = styled.div`
  height: 1px;
  width: 100%;
  border-radius: 50%;
  background-color: ${props => props.color};
  box-shadow: 0px 0px 5px ${props => props.color};
`;

const MainWrapper = styled.div`
  display: flex;
  height: 87px;
  width: 100%;
`;

const TitleStyled = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  font-size: 20px;
  padding: 0px 0px 0px 21px;
  align-items: center;
`;

const TaskNumStyled = styled.div`
  display: flex;
  width: 61px;
  justify-content: center;
  align-items: center;
  color: rgba(44, 49, 58, 0.6);
`;

const TaskInputWrapper = styled.div`
  width: 100%;
  margin: 19px 15px 21px 15px;
`;

export interface Props {
  title: string;
  color: string;
  taskNum: number;
}

export interface State {}

export default class TaskHeader extends React.Component<Props, State> {
  static defaultProps = {
    color: '#99EA8E',
  };

  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    const { children, title, taskNum, color } = this.props;
    return (
      <Wrapper>
        <HeaderWrapper>
          <TitleStyled>{title}</TitleStyled>
          <TaskNumStyled>{taskNum}</TaskNumStyled>
        </HeaderWrapper>
        <HeaderLine color={color} />
        <MainWrapper>
          <TaskInputWrapper>
            <TaskInput color={color} />
          </TaskInputWrapper>
        </MainWrapper>
      </Wrapper>
    );
  }
}
