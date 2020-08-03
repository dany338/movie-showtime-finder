import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;

  .header__logo {
    height: 25px;
    object-fit: contain;
    margin-left: 20px;
  }

  .header__input {
    display: flex;
    align-items: center;
    width: 40%;
    border: 1px solid lightgray;
  }



  .header__icons {
    display: flex;
    align-items: center;
  }

  .header__input > input {
    flex: 1;
    border: none;
  }

  .header__input > input:focus {
    outline: none;
  }

  .header__icon {
    margin-right: 8px;
  }

  .header__inputButton {
    width: 50px !important;
    background-color: #fafafa;
    border-left: 1px solid lightgray;
    color: gray;
  }

  .header__avatar {
    height: 25px;
    object-fit: contain;
    margin-left: 20px;
    vertical-align: middle;
    border-radius: 50%;
  }

  .header__text {
    font-size: 14px;
    color: gray;
  }
`;

export default Container;
