import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
  max-width: 90%;

  img {
    object-fit: contain;
    width: 246px;
    height: 138px;
  }

  .movie__text {
    margin-left: 14px;
  }

  .movie__overview {
    margin-top: 20px;
    font-size: 12px;
    color: #606060;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    text-align: justify;
  }

  .movie__subsVotes {
    background-color: lightgray;
    padding: 2px;
  }

  .movie__subsVotes {
    font-weight: bolder;
    color: rgb(84, 157, 211);
  }

  .movie__headline {
    font-size: 12px;
    color: #606060;
  }

  @media only screen and (max-width: 601px) {
    flex-direction: column;
  }
`;

export default Container;
