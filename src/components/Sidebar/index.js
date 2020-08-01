import React from 'react'
import PropTypes from 'prop-types';
/* Components */
import SidebarRow from '../SidebarRow';
/* Style Components */
import { Container } from './styled';

const Sidebar = () => {
  return (
    <Container>
      <SidebarRow selected path="/" icon={'home'} title="Home" />
      <SidebarRow path="/" icon={'whatshot'} title="Treding" />
      <SidebarRow path="/" icon={'subscriptions'} title="Subscription" />
      <hr />
    </Container>
  )
}

Sidebar.propTypes = {

}

export default Sidebar;
