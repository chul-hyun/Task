import * as React from 'react';
import styled from 'styled-components';
import { Plus } from 'react-feather';

const Wrapper = styled.div`
  display: flex;
  width: 320px;
  height: 47px;
  border-radius: 3px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background-color: #fff;
`;

const Input = styled.input`
  height: 100%;
  flex: 1;
  font-size: 16px;
  color: rgba(185, 185, 185, 0.8);
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

const TaskBoxInput = () => (
  <Wrapper>
    <Input placeholder="Add Task box" />
    <IconWrapper>
      <Plus color="#2C3037" />
    </IconWrapper>
  </Wrapper>
);

export default TaskBoxInput;
