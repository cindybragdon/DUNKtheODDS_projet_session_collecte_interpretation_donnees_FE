import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

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

  useEffect(() => {
    const ctxPoints = document.getElementById("pointsChart") as HTMLCanvasElement;
    const ctxSpread = document.getElementById("spreadChart") as HTMLCanvasElement;
    const ctxMoneyline = document.getElementById("moneylineChart") as HTMLCanvasElement;

    Chart.getChart(ctxPoints)?.destroy();
    Chart.getChart(ctxSpread)?.destroy();
    Chart.getChart(ctxMoneyline)?.destroy();

    const teamNames = mockData.map((item) => item.team);
    const teamPoints = mockData.map((item) => item.points);
    const teamSpreads = mockData.map((item) => item.spread);
    const teamOdds = mockData.map((item) => parseInt(item.odds.replace("+", "")) || 0);

    new Chart(ctxPoints, {
      type: "bar",
      data: {
        labels: teamNames,
        datasets: [
          {
            label: "Points",
            data: teamPoints,
            backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: 'white',
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white',
            }
          },
          x: {
            ticks: {
              color: 'white',
            }
          }
        },
      },
    });

    new Chart(ctxSpread, {
      type: "line",
      data: {
        labels: teamNames,
        datasets: [
          {
            label: "Spread",
            data: teamSpreads,
            borderColor: "rgba(153, 102, 255, 1)",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: 'white',
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white',
            }
          },
          x: {
            ticks: {
              color: 'white',
            }
          }
        },
      },
    });

    new Chart(ctxMoneyline, {
      type: "doughnut",
      data: {
        labels: teamNames,
        datasets: [
          {
            label: "Odds (Moneyline)",
            data: teamOdds,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: 'white',
            }
          }
        },
      },
    });

    return () => {
      Chart.getChart(ctxPoints)?.destroy();
      Chart.getChart(ctxSpread)?.destroy();
      Chart.getChart(ctxMoneyline)?.destroy();
    };
  }, []);

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

      <div className="chart-container mt-4 d-flex flex-wrap justify-content-between" style={{ overflowX: "hidden" }}>
        <div style={{ width: "30%", minWidth: "200px", maxWidth: "400px", height: "auto" }}>
          <canvas id="pointsChart"></canvas>
        </div>
        <div style={{ width: "30%", minWidth: "200px", maxWidth: "400px", height: "auto" }}>
          <canvas id="spreadChart"></canvas>
        </div>
        <div style={{ width: "30%", minWidth: "200px", maxWidth: "400px", height: "auto" }}>
          <canvas id="moneylineChart"></canvas>
        </div>
      </div>

      <h1 className="text-center text-white mb-4">Matchs d'aujourd'hui</h1>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Team</th>
            <th>Moneyline</th>
            <th>Points</th>
            <th>Spread</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#e9ecef" }}>
              <td>{item.team}</td>
              <td>{item.odds}</td>
              <td>{item.points}</td>
              <td>{item.spread}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Picks;
