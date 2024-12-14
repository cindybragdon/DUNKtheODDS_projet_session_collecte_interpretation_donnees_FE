import React from "react";
import SidebarComponent from "../components/sideBar";
import CompareTeamsPoints from "../components/NBAgraphPoints";

const PointsDashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: "0 0 75px", borderRight: "1px solid #ccc" }}>
        <SidebarComponent />
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <CompareTeamsPoints />
      </div>
    </div>
  );
};

export default PointsDashboard;
