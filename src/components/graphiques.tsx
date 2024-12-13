import React from 'react';
import { Chart, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const TeamGraphPointsByGame = () => {
  const data = {
    labels: ['June', 'July', 'August', 'September', 'October', 'November'],
    datasets: [
      {
        label: 'Points par match',
        data: [102, 98, 105, 110, 120, 115], 
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4, 
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
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
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
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
          text: 'Mois',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Points par match',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ flex: 1, maxWidth: '33%', textAlign: 'center' }}>
        <h2>Lakers</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TeamGraphPointsByGame;
