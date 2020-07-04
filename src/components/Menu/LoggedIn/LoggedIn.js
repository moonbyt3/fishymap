import React from 'react';
import SidebarMenu from '../../SidebarMenu/SidebarMenu';
import LogOut from '../../LogOut/LogOut';

const LoggedIn = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <SidebarMenu />
    </div>
  );
};

export default LoggedIn;
