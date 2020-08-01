import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.8;
  background-color: #f9f9f9;
  padding: 20px 20px;

  .moviePage__filter {
    display: flex;
    align-items: center;
    color: #606060;
    font-size: xx-small !important;
  }

  .moviePage__filter > h2 {
    margin-left: 10px;
  }

  .moviePage > hr {
    height: 1px;
    border: 0;
    background-color: lightgray;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .movie__row {
    display: flex;
    align-items: center;
    width: 70%;
  }

  .movieDetail__text {
    display: flex;
    flex-direction: column;
  }

  .movieDetail__text > p {
    color: #606060;
    font-size: small !important;
  }

  .movieDetail__logo {
    height: 120px !important;
    width: 120px !important;
    margin: 10px 60px;
  }

  .movieDetail__text > h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Container;
