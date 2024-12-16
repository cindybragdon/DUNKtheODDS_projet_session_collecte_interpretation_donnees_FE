import React, { useState, useEffect } from "react";
import SidebarComponent from "../components/sideBar";
import teamsLogos from "../teamsLogos";
import axios from "axios";

const TeamOverview = () => {
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const [teamStats, setTeamStats] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleTeamChange = (event: any) => {
    const team = teamsLogos.find((t) => t.abbrev === event.target.value);
    setSelectedTeam(team);
  };

  const fetchTeamStats = async (teamName: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/team-stats/${teamName}`);
      setTeamStats(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des statistiques:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedTeam) {
      fetchTeamStats(selectedTeam.name);
    }
  }, [selectedTeam]);

  return (
    <div className="overlay">
      <SidebarComponent />
      <div style={{ padding: "20px", marginLeft: "50px" }}>
        <h1 style={{ textAlign: "center" }}>Vue d'ensemble par équipe</h1>
        <h3 style={{ textAlign: "center" }}>Toutes les stats de votre équipe au même endroit</h3>
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <label htmlFor="team-select">Choisissez une équipe : </label>
          <select
            id="team-select"
            onChange={handleTeamChange}
            defaultValue=""
            style={{ padding: "5px", fontSize: "16px" }}
          >
            <option value="" disabled>
              Sélectionnez une équipe
            </option>
            {teamsLogos.map((team) => (
              <option key={team.tid} value={team.abbrev}>
                {team.region} {team.name}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
            background: "rgba(255, 255, 255, 0.8)", // Couleur blanche translucide
            borderRadius: "10px",
            padding: "20px",
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            color: "black", // Couleur du texte noire
          
          }}
        >
          {selectedTeam ? (
            <div style={{ textAlign: "center" }}>
              <img
                src={selectedTeam.imgURL}
                alt={`${selectedTeam.name} logo`}
                style={{ height: "100px", marginBottom: "10px" }}
              />
              <h2>{selectedTeam.region} {selectedTeam.name}</h2>
              <p>{`Ville: ${selectedTeam.region}`}</p>
              {loading ? (
                <p>Chargement des statistiques...</p>
              ) : (
                <div>
                  <h3>Statistiques de l'équipe</h3>
                  <p><strong>Nombre de parties jouées :</strong> {teamStats?.gamesPlayed || "Non disponible"}</p>
                  <p><strong>Victoires :</strong> {teamStats?.wins || "Non disponible"}</p>
                  <p><strong>Défaites :</strong> {teamStats?.losses || "Non disponible"}</p>
                  <h4>Performances en points</h4>
                  <p><strong>Moyenne des points marqués :</strong> {teamStats?.pointsAvg || "Non disponible"}</p>
                  <p><strong>Moyenne des points encaissés :</strong> {teamStats?.pointsAllowedAvg || "Non disponible"}</p>
                  <h4>Performance à domicile</h4>
                  <p><strong>Victoires :</strong> {teamStats?.homeWins || "Non disponible"}</p>
                  <p><strong>Défaites :</strong> {teamStats?.homeLosses || "Non disponible"}</p>
                  <p><strong>Moyenne des points marqués :</strong> {teamStats?.homePointsAvg || "Non disponible"}</p>
                  <p><strong>Moyenne des points encaissés :</strong> {teamStats?.homePointsAllowedAvg || "Non disponible"}</p>
                </div>
              )}
            </div>
          ) : (
            <p>Sélectionnez une équipe pour afficher les détails.</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default TeamOverview;
