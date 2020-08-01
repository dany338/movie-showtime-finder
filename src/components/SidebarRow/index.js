import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const SidebarRow = ({ path, selected, icon, title }) => {
  return (
    <Container to={path} className={`${selected && 'selected'}`}>
      <i className="material-icons sidebarRow__icon">{icon}</i>
      <h2 className="sidebarRow__title">{title}</h2>
    </Container>
  )
};

SidebarRow.propTypes = {

};

export default SidebarRow;
