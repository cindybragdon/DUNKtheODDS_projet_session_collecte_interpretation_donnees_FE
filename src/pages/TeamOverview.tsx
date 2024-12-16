import React, { useState, useEffect } from "react";
import SidebarComponent from "../components/sideBar";
import teamsLogos from "../teamsLogos";

import { fetchAllGames, fetchAllTeamsInfos } from "../lib/axios";

const TeamOverview = () => {
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const [teamInfo, setTeam] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [avgHomePointsScored, setAvgHomePointsScored] = useState(0);
  const [avgAwayPointsScored, setAvgAwayPointsScored] = useState(0);
  const [avgHomePointsAllowed, setAvgHomePointsAllowed] = useState(0);
  const [avgAwayPointsAllowed, setAvgAwayPointsAllowed] = useState(0);
  const handleTeamChange = (event: any) => {
    const team = teamsLogos.find((t) => t.abbrev === event.target.value);
    setSelectedTeam(team);
  };



  useEffect(() => {


    const fetchTeamStats = async (teamName: string) => {
      setLoading(true);
      try {
        const fetchedTeams = await fetchAllTeamsInfos();

        const teamData = fetchedTeams.filter((team: { teamName: string; }) => team.teamName === teamName);
        console.log(teamData);
        setTeam(teamData[0]);
          
      
        const games = await fetchAllGames();

        const homePointsList = games
        .filter((game: any) => game.homeTeamName === teamData[0].teamName)
        .map((game:any) => game.homePoints);


        const awayPointsList = games
        .filter((game: any) => game.awayTeamName === teamData[0].teamName)
        .map((game:any) => game.awayPoints);


        const homePoints = homePointsList.reduce((sum: any, num: any) => sum + num, 0);
        const awayPoints = awayPointsList.reduce((sum: any, num: any) => sum + num, 0);
        const avgHomePointScored = homePoints / homePointsList.length;
        const avgAwayPointScored = awayPoints / awayPointsList.length;

        setAvgHomePointsScored(Math.trunc(avgHomePointScored));
        setAvgAwayPointsScored(Math.trunc(avgAwayPointScored));




        const homePointsAllowedLists = games
        .filter((game: any) => game.homeTeamName === teamData[0].teamName)
        .map((game:any) => game.awayPoints);


        const awayPointsAllowedList = games
        .filter((game: any) => game.awayTeamName === teamData[0].teamName)
        .map((game:any) => game.homePoints);


        const homePointsAllowed = homePointsAllowedLists.reduce((sum: any, num: any) => sum + num, 0);
        const awayPointsAllowed = awayPointsAllowedList.reduce((sum: any, num: any) => sum + num, 0);
        const avgHomePointAllowed = homePointsAllowed / homePointsAllowedLists.length;
        const avgAwayPointAllowed = awayPointsAllowed / awayPointsAllowedList.length;

        setAvgHomePointsAllowed(Math.trunc(avgHomePointAllowed));
        setAvgAwayPointsAllowed(Math.trunc(avgAwayPointAllowed));

      } catch (error) {
        console.error("Erreur lors de la récupération des statistiques:", error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedTeam) {
      const fullTeamName = `${selectedTeam.region} ${selectedTeam.name}`;
      console.log(fullTeamName)
      fetchTeamStats(fullTeamName);
    }
  }, [selectedTeam]);

console.log(teamInfo)
  return (
    <div>
      <SidebarComponent />
      <div style={{ padding: "20px", marginLeft: "50px" }}>
        <h1 style={{ textAlign: "center" }}>Vue d'ensemble par équipe en 2024</h1>
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
                  <p><strong>Nombre de parties jouées :</strong> {teamInfo?.homeWins + teamInfo?.awayWins + teamInfo?.homeLosts + teamInfo?.awayLosts || "Non disponible"}</p>
                  <p><strong>Victoires :</strong> {teamInfo?.homeWins + teamInfo?.awayWins || "Non disponible"}</p>
                  <p><strong>Défaites :</strong> {teamInfo?.homeLosts + teamInfo?.awayLosts || "Non disponible"}</p>
                  <h4>Performances à l'extérieur</h4>
                  <p><strong>Victoires :</strong> {teamInfo?.awayWins || "Non disponible"}</p>
                  <p><strong>Défaites :</strong> {teamInfo?.awayLosts || "Non disponible"}</p>
                  <p><strong>Moyenne des points marqués :</strong> {avgAwayPointsScored || "Non disponible"}</p>
                  <p><strong>Moyenne des points encaissés :</strong> {avgAwayPointsAllowed || "Non disponible"}</p>
                  <h4>Performance à domicile</h4>
                  <p><strong>Victoires :</strong> {teamInfo?.homeWins || "Non disponible"}</p>
                  <p><strong>Défaites :</strong> {teamInfo?.homeLosts || "Non disponible"}</p>
                  <p><strong>Moyenne des points marqués :</strong> {avgHomePointsScored || "Non disponible"}</p>
                  <p><strong>Moyenne des points encaissés :</strong> {avgHomePointsAllowed || "Non disponible"}</p>
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
