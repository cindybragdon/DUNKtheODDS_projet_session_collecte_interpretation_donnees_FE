import React, { useEffect, useState } from 'react';


export function calculateOverUnder(games:any, selectedTeam1Name:string, selectedTeam2Name:string) {
    
    const gamesHomeTeam1 = games.filter((game: any) => (game.homeTeamName === selectedTeam1Name && game.awayTeamName === selectedTeam2Name));

    const gamesHomeTeam2 = games.filter((game: any) => (game.homeTeamName === selectedTeam2Name && game.awayTeamName === selectedTeam1Name));

    const avgTeam1Allowed = (gamesHomeTeam1.map((game:any) => game.homePoints)/gamesHomeTeam1.length || 0) + (gamesHomeTeam2.map((game:any) => game.awayPoints)/gamesHomeTeam2.length || 0);
    const avgTeam2Scored = (gamesHomeTeam1.map((game:any) => game.awayPoints)/gamesHomeTeam1.length || 0) + (gamesHomeTeam2.map((game:any) => game.homePoints)/gamesHomeTeam2.length || 0);


    const avgTeam2Allowed = (gamesHomeTeam2.map((game:any) => game.homePoints)/gamesHomeTeam2.length || 0) +  (gamesHomeTeam1.map((game:any) => game.awayPoints)/gamesHomeTeam1.length || 0);
    const avgTeam1Scored = (gamesHomeTeam2.map((game:any) => game.awayPoints)/gamesHomeTeam2.length || 0) + (gamesHomeTeam1.map((game:any) => game.homePoints)/gamesHomeTeam1.length || 0);

    
    const defense = (avgTeam1Allowed+avgTeam2Allowed)/2
    const attack = (avgTeam2Scored+avgTeam1Scored)/2
    return defense + attack;
} 
const OverUnder = (props:any) => {

    const [overUnder, setOverUnder] = useState<number>(0);


 useEffect(() => {

    const fetchGameData = async () => {

      try {


        const overUnder = calculateOverUnder(props.games, props.selectedTeam1, props.selectedTeam2);

        setOverUnder(overUnder);
      } catch (error) {
        console.error("Erreur lors de la récupération des statistiques:", error);
      } 
    };



    fetchGameData();
      
    
  }, [props.games, props.selectedTeam1, props.selectedTeam2]);

  return(
    <div>
        <h1>Over/Under {overUnder}</h1>
    </div>
  )
};

export default OverUnder;