import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.2;

  @media only screen and (max-width: 601px) {
    flex: 0;
    display: none;
  }
`;

export default Container;
