import React, { useState, useEffect } from "react";
import Graphiques from "../components/graphiques.tsx";
import SidebarComponent from "../components/sideBar.tsx";
import { fetchAllGames, fetchAllPoints, fetchAllTeamsInfos } from "../lib/axios.tsx";
import MatchsAujourdHui from "../components/matchsAujourdhui.tsx";
import GraphMoneyline, { calculateMoneyline } from "../components/graphMoneyline.tsx";
import OverUnder from "../components/overUnder.tsx";

const Picks = () => {
  const [selectedTeam1, setSelectedTeam1] = useState<string>("");
  const [selectedTeam2, setSelectedTeam2] = useState<string>("");
  const [selectedBetType, setSelectedBetType] = useState<string>("points");
  const [teams, setTeams] = useState<any[]>([]);
  const [points, setPoints] = useState<any[]>([]);
  const [games, setGames] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  const [moneyLines, setMoneyLines] = useState<any[]>([]);

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

  const handleTeam1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const team1 = e.target.value;
    setSelectedTeam1(team1);

    if (team1 === selectedTeam2) {
      setError("Les deux équipes ne peuvent pas être identiques.");
      setSelectedTeam2(""); 
    } else {
      setError(""); 
    }
  };

  const handleTeam2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const team2 = e.target.value;
    setSelectedTeam2(team2);

    if (team2 === selectedTeam1) {
      setError("Les deux équipes ne peuvent pas être identiques.");
      setSelectedTeam1(""); 
    } else {
      setError(""); 
    }
  };

  useEffect(() => {
    const moneyLines = calculateMoneyline(games, selectedTeam1, selectedTeam2);
    setMoneyLines(moneyLines);
  }, [games, selectedTeam1, selectedTeam2]);

  return (
    <div className="d-flex s" style={{ minHeight: "100vh", overflowX: "hidden" }}>
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
        {error && (
          <div className="text-danger text-center" style={{ fontSize: "18px" }}>
            {error}
          </div>
        )}
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
                  onChange={handleTeam1Change}
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
                  onChange={handleTeam2Change}
                >
                  <option value="">Choisir une équipe</option>
                  {teams.map((team, index) => (
                    <option key={index} value={team.teamName}>
                      {team.teamName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <h2>{selectedTeam1} vs {selectedTeam2}</h2>
            <div className="graph-container">
              <div className="graph-item">
                <Graphiques
                  games={games}
                  teams={teams}
                  selectedTeam1={selectedTeam1}
                  selectedTeam2={selectedTeam2}
                />
              </div>
              <div className="graph-item">
                <GraphMoneyline
                  teamA={moneyLines[0]}
                  teamB={moneyLines[1]}
                  selectedTeam1={selectedTeam1}
                  selectedTeam2={selectedTeam2}
                />
              </div>
            </div>

            <div style={{ textAlign: "center", margin: "20px 0" }}>
      
              <div
                style={{
                  color: "rgba(255, 205, 86, 0.7)", // Jaune translucide (Chart.js palette)
                  fontSize: "80px", // Taille agrandie pour les chiffres
                }}
              >
                <OverUnder
                  games={games}
                  selectedTeam1={selectedTeam1}
                  selectedTeam2={selectedTeam2}
                />
              </div>
            </div>

            <MatchsAujourdHui data={games} />
          </>
        )}
      </div>
    </div>
  );
};

export default Picks;
