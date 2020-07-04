import React, { useContext } from 'react';

import { SidebarWrapper } from './sidebar.css';

import { AuthContext } from '../../App';
import { slide as Menu } from 'react-burger-menu';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import LoggedIn from '../Menu/LoggedIn/LoggedIn';
import NotLoggedIn from '../Menu/NotLoggedIn/NotLoggedIn';

const Sidebar = () => {
  const Auth = useContext(AuthContext);

  return (
    <SidebarWrapper>
      <Menu right>
        {Auth.isLoggedIn && <LoggedIn />}
        {!Auth.isLoggedIn && <NotLoggedIn />}
      </Menu>
    </SidebarWrapper>
  );
};

export default Sidebar;
