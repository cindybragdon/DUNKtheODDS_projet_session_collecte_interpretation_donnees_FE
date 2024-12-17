import React, { useState, useEffect } from "react";
import axios from "axios";

import TableauMatchAjd from "../components/tableauMatchAjd.tsx";
import Graphiques from "../components/graphiques.tsx";
import SidebarComponent from "../components/sideBar.tsx";
import { fetchAllGames, fetchAllPoints, fetchAllTeamsInfos } from "../lib/axios.tsx";
import MatchsAujourdHui from "../components/matchsAujourdhui.tsx";
import GraphMoneyline from "../components/graphMoneyline.tsx";
import GraphOverUnder from "../components/overUnder.tsx";
import OverUnder from "../components/overUnder.tsx";

const Picks = () => {
  const [selectedTeam1, setSelectedTeam1] = useState<string>("");
  const [selectedTeam2, setSelectedTeam2] = useState<string>("");
  const [selectedBetType, setSelectedBetType] = useState<string>("points");
  const [teams, setTeams] = useState<any[]>([]);
  const [points, setPoints] = useState<any[]>([]);
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTeams = await fetchAllTeamsInfos();
        setTeams(fetchedTeams);
        
        const scores = await fetchAllPoints();
        setPoints(scores);

        const games = await fetchAllGames();
        setGames(games);
      } catch (error) {
        console.error("Erreur lors du fetch des données:", error);
      }
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
        <h1 className="text-center text-white mb-4">Picks</h1>

        {!teams.length || !points.length || !games.length ? (
          <div className="text-center text-white">
            <p>Chargement des données...</p>
          </div>
        ) : (
          <>
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
                  <option value="points">Over/Under</option>
                  <option value="spread">Spread</option>
                  <option value="moneyline">Moneyline</option>
                </select>
              </div>
            </div>

            <Graphiques games={games} teams={teams} selectedTeam1={selectedTeam1} selectedTeam2={selectedTeam2}/>
            <GraphMoneyline />
            <OverUnder games={games} selectedTeam1={selectedTeam1} selectedTeam2={selectedTeam2} />
            <MatchsAujourdHui data={games} />
          </>
        )}
      </div>
    </div>
  );
};

export default Picks;
