import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

function calculateProbabilities(probability: number) {
    if (probability <= 0 || probability >= 1) {
        throw new Error("Probability must be between 0 and 1 (exclusive).");
    }

    if (probability > 0.5) {
        return -Math.round((probability / (1 - probability)) * 100);
    } else {
        return Math.round(((1 - probability) / probability) * 100);
    }
}

export function calculateMoneyline(games: any, selectedTeam1Name: string, selectedTeam2Name: string): number[] {
    const gamesHomeTeam1 = games.filter(
        (game: any) => game.homeTeamName === selectedTeam1Name && game.awayTeamName === selectedTeam2Name
    );

    const gamesHomeTeam2 = games.filter(
        (game: any) => game.homeTeamName === selectedTeam2Name && game.awayTeamName === selectedTeam1Name
    );

    const avgTeam2Scored =
        (gamesHomeTeam1.map((game: any) => game.awayPoints) / gamesHomeTeam1.length || 0) +
        (gamesHomeTeam2.map((game: any) => game.homePoints) / gamesHomeTeam2.length || 0);

    const avgTeam1Scored =
        (gamesHomeTeam2.map((game: any) => game.awayPoints) / gamesHomeTeam2.length || 0) +
        (gamesHomeTeam1.map((game: any) => game.homePoints) / gamesHomeTeam1.length || 0);

    const total = avgTeam2Scored + avgTeam1Scored;

    const probability1 = avgTeam1Scored / total;
    const probability2 = avgTeam2Scored / total;

    const moneyLine1 = calculateProbabilities(probability1);
    const moneyLine2 = calculateProbabilities(probability2);

    return [moneyLine1 || 0, moneyLine2 || 0];
}

Chart.register(...registerables);

interface MoneylineChartProps {
    teamA: number;
    teamB: number;
    selectedTeam1: string;
    selectedTeam2: string;
}

const GraphMoneyLine: React.FC<MoneylineChartProps> = ({ teamA, teamB, selectedTeam1, selectedTeam2 }) => {
    const data: ChartData<'bar'> = {
        labels: ["Moneyline"],
        datasets: [
            {
                label: selectedTeam1,
                data: [teamA],
                backgroundColor: ['rgba(54, 162, 235, 0.5)'], // Blue translucent
                borderColor: ['rgba(54, 162, 235, 1)'], // Solid blue
                borderWidth: 1,
            },
            {
                label: selectedTeam2,
                data: [teamB],
                backgroundColor: ['rgba(153, 102, 255, 0.5)'], // Violet translucent
                borderColor: ['rgba(153, 102, 255, 1)'], // Solid violet
                borderWidth: 1,
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    font: {
                        size: 14,
                        weight: 'normal',
                    },
                },
            },
            title: {
                display: true,
                text: 'Moneyline Odds Chart',
                color: 'white',
                font: {
                    size: 18,
                    weight: 'normal',
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const rawValue = Number(context.raw);
                        return `Odds: ${rawValue > 0 ? '+' : ''}${rawValue}`;
                    },
                },
                bodyColor: 'white',
                titleColor: 'white',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Teams',
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Moneyline Odds',
                    color: 'white',
                },
                ticks: {
                    callback: (value) => {
                        const numericValue = Number(value);
                        return `${numericValue > 0 ? '+' : ''}${numericValue}`;
                    },
                    color: 'white',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',
                },
            },
        },
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid white',
                borderRadius: '8px',
                padding: '16px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
        >
            <Bar data={data} options={options} />
        </div>
    );
};

export default GraphMoneyLine;
