import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import des icônes Font Awesome

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sidebar
      collapsed={collapsed}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "#1c2b36",
          color: "#fff",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 1000,
          width: collapsed ? "50px" : "180px", // Sidebar plus étroite à 50px
          transition: "width 0.3s ease-in-out",
        },
      }}
      onMouseEnter={() => setCollapsed(false)} // Déplier au survol
      onMouseLeave={() => setCollapsed(true)} // Replier lorsqu'on quitte
    >
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            color: "#fff",
            backgroundColor: active ? "#13395e" : "transparent",
            display: "flex",
            alignItems: "center",
            padding: "10px 15px",
          }),
        }}
      >
        <MenuItem
          icon={<i className="fa fa-home" style={{ fontSize: "18px", color: "#fff" }} />}
          component={<Link to="/" />}
        >
          Home
        </MenuItem>
        <MenuItem
          icon={<i className="fa fa-dollar-sign" style={{ fontSize: "18px", color: "#fff" }} />}
          component={<Link to="/picks" />}
        >
          Picks
        </MenuItem>
        <MenuItem
          icon={<i className="fa fa-sign-in-alt" style={{ fontSize: "18px", color: "#fff" }} />}
          component={<Link to="/login" />}
        >
          LogIn
        </MenuItem>
        <MenuItem
          icon={<i className="fa fa-user-plus" style={{ fontSize: "18px", color: "#fff" }} />}
          component={<Link to="/signin" />}
        >
          SignIn
        </MenuItem>
        <MenuItem
          icon={<i className="fa fa-user" style={{ fontSize: "18px", color: "#fff" }} />}
          component={<Link to="/myaccount" />}
        >
          My Account
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
