import * as React from 'react';
import styled from 'styled-components';
import { Plus } from 'react-feather';

// TODO Helvetica Neue 폰트 적용하기

interface Props {
  color: string;
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0px 0px 6px ${props => props.color};
  background-color: #fff;
`;

const Input = styled.input`
  height: 100%;
  flex: 1;
  font-size: 16px;
  padding: 0px 0px 0px 20px;
  border: 0px none;
  background-color: rgba(0, 0, 0, 0);
`;

const IconWrapper = styled.div`
  display: flex;
  width: 50px;
  justify-content: center;
  align-items: center;
  opacity: 0.2;
`;

export default class InputTask extends React.PureComponent<Props> {
  static defaultProps = {
    color: '#99EA8E',
  };

  render() {
    const { color } = this.props;

    return (
      <Wrapper color={color}>
        <Input placeholder="Add Task" />
        <IconWrapper>
          <Plus color="#2C3037" />
        </IconWrapper>
      </Wrapper>
    );
  }
}
