import React, { useEffect } from "react";
import Chart from "chart.js/auto";

interface ChartProps {
  data: { team: string; odds: string; points: number; spread: number }[];
}

const ChartComponent: React.FC<ChartProps> = ({ data }) => {
  useEffect(() => {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;

    // Récupérez les noms des équipes et leurs cotes pour le graphique
    const teamNames = data.map((item) => item.team);
    const teamOdds = data.map((item) => parseFloat(item.odds));

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: teamNames, // Labels des équipes
        datasets: [
          {
            label: "Odds",
            data: teamOdds, // Cotes
            backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [data]);

  return <canvas id="myChart" width="400" height="200"></canvas>;
};

export default ChartComponent;
