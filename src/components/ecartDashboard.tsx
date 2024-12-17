
import React, { Component, useEffect, useState } from 'react'
import { fetchAllGames } from '../lib/axios'
import { data } from 'react-router-dom'
import { Bar, Line } from 'react-chartjs-2'
import { Chart, LineElement, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip, BarElement } from 'chart.js';
import '../Spread.css'

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
const DashboardEcart = () => {
    const [dataGames, setDataGames] = useState<any[]>([]);
    const [teamNames, setTeamsNames] = useState<string[]>([]);
    const [homeTeam, setHomeTeam] = useState<string>('');
    const [awayTeam, setAwayTeam] = useState<string>('');
    const [filteredTeam, setFilteredTeam] = useState<any[]>([]);
    
    
    const setIndividualTeamNames =  () =>{
        const indTeam : any =  Array.from (new Set(dataGames.map((game: any) => game.homeTeamName)));
        setTeamsNames(indTeam); 
    }

    const filterTeam = () => {
        // if(homeTeam && awayTeam){
            const filter : any = dataGames.filter((dataGame : any) => dataGame.homeTeamName === homeTeam && dataGame.awayTeamName === awayTeam ||  dataGame.homeTeamName === awayTeam && dataGame.awayTeamName === homeTeam );
            setFilteredTeam(filter);
        // }
    }
    useEffect(() =>{
        const getData = async () =>{
        const dataFetch =  await fetchAllGames();
            setDataGames(dataFetch);
        }
        getData();
    },[])

    useEffect(() =>{
        if(dataGames.length > 0 ){
            setIndividualTeamNames();
            filterTeam();
        }
    },[dataGames, homeTeam, awayTeam]);
    
    const data = {
            labels: Array.from({ length: filteredTeam.length }, (_, index) => `Match ${index + 1}`), 
            datasets : [{
            label : homeTeam,
            data : filteredTeam.map(((hometeam : any) => hometeam.homePoints)),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false
        },
        {
            label: awayTeam,
            data:  filteredTeam.map(((hometeam : any) => hometeam.awayPoints)),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false
        },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false, 
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
            label: function(context : any) {
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
            text: 'Écart sur 5 match',
        },
        },
        y: {
        title: {
            display: true,
            text: 'Écart',
            },
            beginAtZero: true,
        },
    },
    };
    
    console.log(filteredTeam);
    return(
        <>
        <select onChange={(e) => (setHomeTeam(e.target.value))} value={homeTeam} className='SelectOption'>
            {teamNames.map((name: any  , index: any) => (
                <option key={index} value = {name}>
                    {name}
                </option>
            ))}
        </select>

        <select onChange={(e) => setAwayTeam(e.target.value)} value={awayTeam} className='SelectOption'>
            {teamNames.map((name: any , index: any) => (
                <option key={index}  value={name} >
                    {name}
                </option>
            ))}
        </select>
        <h1 className='TeamName'>{homeTeam}</h1>
        <h1>{awayTeam}</h1>
        {filteredTeam.length === 0 ? (
        <p>No data available for the selected teams</p> 
    ) : (
        <Line data={data} className="Graph" style={{ flex: 1, maxWidth: '50%', textAlign: 'center',marginLeft: '25%' }} />
    )}
        
        
        
        </>
    );

}
export default DashboardEcart;