import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 20px;

  .sidebarRow__icon {
    color: #606060;
    font-size: large !important;
  }

  .sidebarRow__title {
    flex: 1;
    margin-left: 20px;
    font-size: 12px;
    font-weight: 500;
  }

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  &:hover > .sidebarRow__icon {
    color: red;
  }

  &:hover > .sidebarRow__title {
    font-weight: bold;
  }

  .selected {
    background-color: lightgray;
  }

  .selected > .sidebarRow__icon {
    color: red;
  }

  .selected > .sidebarRow__title {
    font-weight: bold;
  }
`;

export default Container;
