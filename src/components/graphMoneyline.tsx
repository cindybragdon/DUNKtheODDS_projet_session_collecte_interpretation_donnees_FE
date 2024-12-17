import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

Chart.register(...registerables);

const GraphMoneyline: React.FC = () => {
    const data: ChartData<'scatter'> = {
        datasets: [
            {
                label: 'Team A Odds',
                data: [{ x: 1, y: -150 }, { x: 2, y: -120 }, { x: 3, y: -100 }],
                backgroundColor: 'blue',
                pointRadius: 6
            },
            {
                label: 'Team B Odds',
                data: [{ x: 1, y: 130 }, { x: 2, y: 110 }, { x: 3, y: 105 }],
                backgroundColor: 'red',
                pointRadius: 6
            }
        ]
    };

    const options: ChartOptions<'scatter'> = {
        responsive: true,
        plugins: {
            title: { display: true, text: 'Moneyline Odds Over Games' }
        },
        scales: {
            x: { title: { display: true, text: 'Games' } },
            y: { title: { display: true, text: 'Moneyline Odds' } }
        }
    };

    return <Scatter data={data} options={options} />;
};

export default GraphMoneyline;