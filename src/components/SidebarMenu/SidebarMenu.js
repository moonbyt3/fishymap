import React from 'react';

import { SidebarMenuWrapper } from './sidebarMenu.css';
import { Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';

const SidebarMenu = () => {
  return (
    <SidebarMenuWrapper>
      <Button variant='text' style={{ minWidth: '34px' }}>
        <PersonIcon fontSize='large'></PersonIcon>
      </Button>

      <Button variant='text' style={{ minWidth: '34px' }}>
        <SearchIcon fontSize='large'></SearchIcon>
      </Button>
      <Button variant='text' style={{ minWidth: '34px' }}>
        <SettingsIcon fontSize='large'></SettingsIcon>
      </Button>
    </SidebarMenuWrapper>
  );
};

export default SidebarMenu;
