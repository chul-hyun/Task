import styled from 'styled-components';

const HeaderLine = styled.div`
  border-radius: 50%;
  background-color: ${props => props.color};
  box-shadow: 0px 0px 5px ${props => props.color};
`;

export default HeaderLine;
