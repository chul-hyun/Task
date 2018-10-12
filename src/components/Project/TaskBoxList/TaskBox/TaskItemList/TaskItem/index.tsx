import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 57px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
`;

const TitleWrapperStyled = styled.span`
  display: flex;
  flex: 1;
  height: 100%;
  font-size: 16px;
  padding: 0px 0px 0px 20px;
  align-items: center;
  overflow: hidden;
`;

const TitleStyled = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export interface Props {
  title: string;
}

export interface State {}

export default class TaskItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    const { title } = this.props;
    return (
      <Wrapper>
        <TitleWrapperStyled>
          <TitleStyled>{title}</TitleStyled>
        </TitleWrapperStyled>
      </Wrapper>
    );
  }
}
