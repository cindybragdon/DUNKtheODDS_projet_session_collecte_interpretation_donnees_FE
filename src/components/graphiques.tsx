import React, { useEffect, useState } from 'react';
import { Chart, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const Graphiques = (props: any) => {

  type Game = {
    homeTeamName: string;
    awayTeamName: string;
    scheduled: string; 
    homePoints: number;
    awayPoints: number;
  };

  const formatDate = (date: string): string => {
    const d = new Date(date);
    return d.toLocaleDateString('en-GB');
  };


  const [gameDatesTeam1, setGameDatesTeam1] = useState<any[]>([]);
  const [gamePointsTeam1, setGamePointsTeam1] = useState<any[]>([]);


  const [gameDatesTeam2, setGameDatesTeam2] = useState<any[]>([]);
  const [gamePointsTeam2, setGamePointsTeam2] = useState<any[]>([]);
  useEffect(() => {
    //Team1
    const homePoints = props.games
    .filter((game: Game) => game.homeTeamName === props.selectedTeam1)
    .map((game: Game) => ({ points: game.homePoints, date:  formatDate(game.scheduled) }));

    const awayPoints = props.games
    .filter((game: Game) => game.awayTeamName === props.selectedTeam1)
    .map((game: Game) => ({ points: game.awayPoints, date: formatDate(game.scheduled)}));

    const combinedPoints = [...homePoints, ...awayPoints];

    combinedPoints.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    const gamesPoints = combinedPoints.map((game) => game.points);
    const gamesDates = combinedPoints.map((game) => game.date);
    setGamePointsTeam1(gamesPoints);
    setGameDatesTeam1(gamesDates);


    //Team2
    const homePoints2 = props.games
    .filter((game: Game) => game.homeTeamName === props.selectedTeam2)
    .map((game: Game) => ({ points: game.homePoints, date: formatDate(game.scheduled) }));

    const awayPoints2 = props.games
    .filter((game: Game) => game.awayTeamName === props.selectedTeam2)
    .map((game: Game) => ({ points: game.awayPoints, date: formatDate(game.scheduled) }));

    const combinedPoints2 = [...homePoints2, ...awayPoints2];

    combinedPoints2.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    const gamesPoints2 = combinedPoints2.map((game) => game.points);
    const gamesDates2 = combinedPoints2.map((game) => game.date);
    setGamePointsTeam2(gamesPoints2);
    setGameDatesTeam2(gamesDates2);



  }, [props.game, props.games, props.selectedTeam1, props.selectedTeam2]);


  const dataTeam1 = {
    labels: gameDatesTeam1,
    datasets: [
      {
        label: 'Points par match',
        data: gamePointsTeam1, 
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4, 
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Points par match',
        data: gamePointsTeam2, 
        borderColor: 'rgba(0, 255, 100, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4, 
        pointBackgroundColor: 'rgba(255, 99, 132, 1)'
      },
    ],
  };



  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          textAlign: 'center',
          color: 'white'
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: { raw: any; }) {
            return `Points: ${context.raw}`;

          },
        },
      },
    },
    scales: {
      x: {
        type: 'category', 
        title: {
          display: true,
          text: 'Date',
          color: 'white'
        },
        ticks: {
          color: 'white'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Points par match',
          color: 'white'
        },
        beginAtZero: true,
        ticks: {
          color: 'white'
        }
      },
    },
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ flex: 1, maxWidth: '33%', textAlign: 'center' }}>
        <h2>{props.selectedTeam1}</h2>
        <Line data={dataTeam1} options={options} />
      </div>
    </div>
  );
};

export default Graphiques;
