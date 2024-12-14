import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Sidebar
      collapsed={collapsed}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "#343436",
          color: "#fff",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 1000,
          width: collapsed ? "50px" : "180px",
          transition: "width 0.3s ease-in-out",
        },
        [`.${sidebarClasses.container} .ps-menu-button:hover`]: {
          color: "#000",
          backgroundColor: "#fff",
        },
        [`.${sidebarClasses.container} .ps-menu-button i`]: {
          transition: "color 0.3s ease",
        },
        [`.${sidebarClasses.container} .ps-menu-button:hover i`]: {
          color: "#000",
        },
      }}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            color: "#fff",
            backgroundColor: active ? "#13395e" : "transparent",
            display: "flex",
            alignItems: "center",
            padding: "10px 15px",
            borderRadius: "5px",
            transition: "color 0.3s ease, background-color 0.3s ease",
          }),
        }}
      >
        <MenuItem
          icon={<i className="fa fa-home MenuItem" style={{ fontSize: "18px" }} />}
          component={<Link to="/" />}
        >
        </MenuItem>

        <MenuItem
          icon={<i className="fa fa-sign-in-alt MenuItem" style={{ fontSize: "18px"}} />}
          component={<Link to="/login" />}
        >
          LogIn
        </MenuItem>
        <MenuItem
          icon={<i className="fa fa-user-plus MenuItem" style={{ fontSize: "18px" }} />}
          component={<Link to="/signin" />}
        >
          SignIn
        </MenuItem>
        <MenuItem
          icon={<i className="fa fa-user" style={{ fontSize: "18px" }} />}
          component={<Link to="/myaccount" />}
        >
          My Account
        </MenuItem>
        <MenuItem
          icon={<i className="fa fa-dollar-sign MenuItem" style={{ fontSize: "18px" }} />}
          component={<Link to="/picks" />}
        >
          Picks
        </MenuItem>
        <MenuItem
          icon={<i className="fa fa-tachometer-alt MenuItem" style={{ fontSize: "18px" }} />}
          component={<Link to="/team-dashboard" />}
        >
          <span style={{ whiteSpace: "normal", wordWrap: "break-word" }}>Dashboard Points</span>
        </MenuItem>
        
        <MenuItem
          icon={<i className="fa fa-basketball-ball MenuItem" style={{ fontSize: "18px" }} />}
          component={<Link to="/nba-dashboard" />}
        >
          <span style={{ whiteSpace: "normal", wordWrap: "break-word" }}>Dashboard Ecart</span>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
