import React, { useContext } from "react";

import { slide as Menu } from "react-burger-menu";

import { AuthContext } from "../../App";
import LoggedIn from "../Menu/LoggedIn/LoggedIn";
import NotLoggedIn from "../Menu/NotLoggedIn/NotLoggedIn";

import { SidebarWrapper } from "./sidebar.css";

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
