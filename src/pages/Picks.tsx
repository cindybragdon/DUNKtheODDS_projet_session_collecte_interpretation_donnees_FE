import React, { useState, useEffect } from "react";
import axios from "axios";

import TableauMatchAjd from "../components/tableauMatchAjd.tsx";
import Graphiques from "../components/graphiques.tsx";
import SidebarComponent from "../components/sideBar.tsx";
import { fetchAllPoints, fetchAllTeamsInfos } from "../lib/axios.tsx";


const Picks = () => {
  const [selectedTeam1, setSelectedTeam1] = useState<string>("");
  const [selectedTeam2, setSelectedTeam2] = useState<string>("");
  const [selectedBetType, setSelectedBetType] = useState<string>("points");
  const [teams, setTeams] = useState<any[]>([]); 
  const [points, setPoints] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => { 
      const fetchedTeams = await fetchAllTeamsInfos();
      setTeams(fetchedTeams);
      
      const scores = await fetchAllPoints();
      setPoints(scores);
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <SidebarComponent />

      <div
        className="container-fluid p-4"
        style={{
          marginLeft: "40px",
          marginRight: "40px",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <h1 className="text-center text-white mb-4">Statistiques des Picks</h1>

        <div className="mb-3 d-flex justify-content-between flex-wrap">
          <div className="me-3" style={{ width: "30%", maxWidth: "300px" }}>
            <label className="form-label text-white">Sélectionnez l'équipe 1</label>
            <select
              className="form-select"
              value={selectedTeam1}
              onChange={(e) => setSelectedTeam1(e.target.value)}
            >
              <option value="">Choisir une équipe</option>
              {teams.map((team, index) => (
                
                <option key={index} value={team.teamName}>
                  {team.teamName}
                  {console.log(team)}
                </option>
              ))}
            </select>
          </div>

          <div className="me-3" style={{ width: "30%", maxWidth: "300px" }}>
            <label className="form-label text-white">Sélectionnez l'équipe 2</label>
            <select
              className="form-select"
              value={selectedTeam2}
              onChange={(e) => setSelectedTeam2(e.target.value)}
            >
              <option value="">Choisir une équipe</option>
              {teams.map((team, index) => (
                <option key={index} value={team.teamName}>
                  {team.teamName}
                </option>
              ))}
            </select>
          </div>

          <div style={{ width: "30%", maxWidth: "300px" }}>
            <label className="form-label text-white">Sélectionnez le type de mise</label>
            <select
              className="form-select"
              value={selectedBetType}
              onChange={(e) => setSelectedBetType(e.target.value)}
            >
              <option value="points">Points</option>
              <option value="spread">Spread</option>
              <option value="moneyline">Moneyline</option>
            </select>
          </div>
        </div>

        <Graphiques data={points} />
        <TableauMatchAjd dataMatch={points} />
      </div>
    </div>
  );
};

export default Picks;
