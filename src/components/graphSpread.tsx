import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

Chart.register(...registerables);

const GraphSpread: React.FC = () => {
    const data: ChartData<'line'> = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'], // Quarters
        datasets: [
            {
                label: 'Team A Spread',
                data: [0, 5, 8, 10],
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Team B Spread',
                data: [0, -5, -8, -10],
                borderColor: 'red',
                borderWidth: 2,
                fill: false
            }
        ]
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            title: { display: true, text: 'Spread Over Time (Quarters)' }
        },
        scales: {
            y: { title: { display: true, text: 'Spread Points' } },
            x: { title: { display: true, text: 'Quarters' } }
        }
    };

    return <Line data={data} options={options} />;
};

export default GraphSpread;