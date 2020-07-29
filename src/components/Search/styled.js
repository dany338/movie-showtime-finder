import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 15px;
  background-color: ${props => props.theme.headerBackground} !important;
  color: ${props => props.theme.headerText};
`;

export default Container;
