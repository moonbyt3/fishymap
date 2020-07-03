import React, { useContext } from 'react';

import { SidebarWrapper } from './sidebar.css';

import { AuthContext } from '../../App';
import { slide as Menu } from 'react-burger-menu';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import LogOut from '../LogOut/LogOut';
import Profile from '../Profile/Profile';

const Sidebar = () => {
  const Auth = useContext(AuthContext);

  return (
    <SidebarWrapper>
      <Menu right>
        {Auth.isLoggedIn && (
          <div
            style={{
              paddingTop: '20px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <LogOut />
            <SidebarMenu />
            <Profile />
          </div>
        )}
        {!Auth.isLoggedIn && (
          <div style={{ margin: 'auto 0' }}>
            <LogIn />
            <p style={{ margin: '30% 0' }}>
              Nemate nalog?
              <br />
            </p>
            <SignUp />
          </div>
        )}
      </Menu>
    </SidebarWrapper>
  );
};

export default Sidebar;
