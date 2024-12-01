import React, { useState } from "react";

import TableauMatchAjd from "../components/tableauMatchAjd.tsx";
import Graphiques from "../components/graphiques.tsx";

const Picks = () => {
  const [selectedTeam1, setSelectedTeam1] = useState<string>("");
  const [selectedTeam2, setSelectedTeam2] = useState<string>("");
  const [selectedBetType, setSelectedBetType] = useState<string>("points");

  const teams = [
    "Atlanta Hawks", "Boston Celtics", "Charlotte Hornets", 
    "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", 
    "Detroit Pistons", "Houston Rockets", "Indiana Pacers", 
    "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", 
    "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", 
    "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", 
    "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", 
    "Utah Jazz", "Washington Wizards"
  ];

  const mockData = [
    { team: "Lakers", odds: "+120", points: 102, spread: -4.5 },
    { team: "Celtics", odds: "+110", points: 112, spread: -3.5 },
  ];


  return (
    <div className="container-fluid p-4" style={{ overflowX: "hidden" }}>
      <h1 className="text-center text-white mb-4">Statistiques des Picks</h1>

      <div className="mb-3 d-flex justify-content-between flex-wrap" style={{ overflowX: "hidden" }}>
        <div className="me-3" style={{ width: "30%", maxWidth: "300px" }}>
          <label className="form-label text-white">Sélectionnez l'équipe 1</label>
          <select
            className="form-select"
            value={selectedTeam1}
            onChange={(e) => setSelectedTeam1(e.target.value)}
          >
            <option value="">Choisir une équipe</option>
            {teams.map((team, index) => (
              <option key={index} value={team}>
                {team}
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
              <option key={index} value={team}>
                {team}
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

      <Graphiques data={mockData}/>
      <TableauMatchAjd dataMatch={mockData}/>
    </div>
  );
};

export default Picks;
