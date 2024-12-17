
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';




function calculateProbabilities(probability:number) {

    if (probability <= 0 || probability >= 1) {
        throw new Error("Probability must be between 0 and 1 (exclusive).");
    }

    if (probability > 0.5) {
        // Favorite: Negative moneyline
        return -Math.round((probability / (1 - probability)) * 100);
    } else {
        // Underdog: Positive moneyline
        return Math.round(((1 - probability) / probability) * 100);
    }
}


export function calculateMoneyline(games:any, selectedTeam1Name:string, selectedTeam2Name:string): number[] {


    const gamesHomeTeam1 = games.filter((game: any) => (game.homeTeamName === selectedTeam1Name && game.awayTeamName === selectedTeam2Name));

    const gamesHomeTeam2 = games.filter((game: any) => (game.homeTeamName === selectedTeam2Name && game.awayTeamName === selectedTeam1Name));

    const avgTeam2Scored = (gamesHomeTeam1.map((game:any) => game.awayPoints)/gamesHomeTeam1.length || 0) + (gamesHomeTeam2.map((game:any) => game.homePoints)/gamesHomeTeam2.length || 0);

    const avgTeam1Scored = (gamesHomeTeam2.map((game:any) => game.awayPoints)/gamesHomeTeam2.length || 0) + (gamesHomeTeam1.map((game:any) => game.homePoints)/gamesHomeTeam1.length || 0);

    const total = avgTeam2Scored + avgTeam1Scored;

    const probability1 = avgTeam1Scored/total

    const probability2 = avgTeam2Scored/total


    const moneyLine1 = calculateProbabilities(probability1);

    const moneyLine2 = calculateProbabilities(probability2);

    return [moneyLine1 || 0, moneyLine2 || 0]
}


Chart.register(...registerables);

interface MoneylineChartProps {
    teamA: number; // Final moneyline odds for Team A
    teamB: number; // Final moneyline odds for Team B
}

const GraphMoneyLine: React.FC<MoneylineChartProps> = ({ teamA, teamB }) => {
    const data: ChartData<'bar'> = {
        labels: ['Team A', 'Team B'], // X-axis labels
        datasets: [
            {
                label: 'Moneyline Odds',
                data: [teamA, teamB], // Final odds
                backgroundColor: ['blue', 'red'],
                borderColor: ['blue', 'red'],
                borderWidth: 1
            }
        ]
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Moneyline Odds Comparison'
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const rawValue = Number(context.raw); // Ensure rawValue is a number
                        return `Odds: ${rawValue > 0 ? '+' : ''}${rawValue}`;
                    }
                }
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Moneyline Odds'
                },
                ticks: {
                    callback: (value) => {
                        const numericValue = Number(value); // Ensure value is a number
                        return `${numericValue > 0 ? '+' : ''}${numericValue}`;
                    }
                }
            }
        }
    };

    return <Bar data={data} options={options} />;
};

export default GraphMoneyLine;