import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const Graphiques = (props) => {

    useEffect(() => {
        const ctxPoints = document.getElementById("pointsChart") as HTMLCanvasElement;
        const ctxSpread = document.getElementById("spreadChart") as HTMLCanvasElement;
        const ctxMoneyline = document.getElementById("moneylineChart") as HTMLCanvasElement;
    
        Chart.getChart(ctxPoints)?.destroy();
        Chart.getChart(ctxSpread)?.destroy();
        Chart.getChart(ctxMoneyline)?.destroy();
    
        const teamNames = props.data.map((item) => item.team);
        const teamPoints = props.data.map((item) => item.points);
        const teamSpreads = props.data.map((item) => item.spread);
        const teamOdds = props.data.map((item) => parseInt(item.odds.replace("+", "")) || 0);
    
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
    
    
    
    return(
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
    )
}

export default Graphiques;