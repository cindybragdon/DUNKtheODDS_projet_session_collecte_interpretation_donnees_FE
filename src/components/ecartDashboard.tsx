
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
            data : filteredTeam.map((hometeam: { homePoints: number; awayPoints: number }) => {
                return hometeam.homePoints - hometeam.awayPoints;
              }),
            borderColor: 'rgb(185, 75, 102)',
            backgroundColor: 'rgb(59, 20, 30, 0.5)',
            borderWidth: 2,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false
        },
        {
            label: awayTeam,
            data:  filteredTeam.map((hometeam: { homePoints: number; awayPoints: number }) => {
                return hometeam.awayPoints - hometeam.homePoints ;
              }),
            borderColor: 'rgb(90, 141, 101)',
            backgroundColor: 'rgba(17, 54, 26, 0.5)',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false
        },
        ],
    };
    console.log(filteredTeam)
    const options = {
        responsive: true,
        animation: {
          duration: 1000,
          easing: 'easeInOutQuart',
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              boxWidth: 15,
              font: {
                size: 12,
                weight: 'bold',
                family: 'Arial',
              },
              color: '#fff',
              padding: 20,
              usePointStyle: true,
            },
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: { size: 14, weight: 'bold' },
            bodyFont: { size: 12 },
            bodySpacing: 8,
            padding: 10,
            displayColors: false,
            callbacks: {
              label: function (context: any) {
                return `Points: ${context.raw}`;
              },
            },
          },
          title: {
            display: true,
            text: "Performance d'une rencontre en se basant sur l'écart",
            font: {
              size: 18,
              weight: 'bold',
            },
            padding: {
              top: 10,
              bottom: 30,
            },
            color: '#fff',
          },
        },
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Match',
              color: '#fff',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
            grid: {
              display: true,
              color: 'rgba(255, 255, 255, 0.2)',
              borderDash: [5, 5],
            },
            ticks: {
              color: '#fff',
              font: {
                size: 12,
              },
            },
          },
          y: {
            title: {
              display: true,
              text: 'Écart',
              color: '#fff',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.2)',
              borderDash: [5, 5],
            },
            ticks: {
              color: '#fff',
              font: {
                size: 12,
              },
              stepSize: 10,
            },
          },
        },
      };
      
    
    console.log(filteredTeam);
    return(
        <div className='body2'>
        <div className='select-container'>
        <select onChange={(e) => (setHomeTeam(e.target.value))} value={homeTeam} className='SelectOption'>
        <option value ="" disabled>Selectionnez une Team</option>
        {teamNames
          .filter((name) => name !== awayTeam) 
          .map((name: any, index: any) => (
              <option key={index} value={name}>
                  {name}
              </option>
          ))}
        </select>

        <select id = 'team-select' onChange={(e) => setAwayTeam(e.target.value)} value={awayTeam} className='SelectOption'>
            <option value ="" disabled>Selectionnez une Team</option>
            {teamNames
              .filter((name) => name !== homeTeam) 
              .map((name: any, index: any) => (
                  <option key={index} value={name}>
                      {name}
                  </option>
              ))}
        </select>
        </div>
        <div className='select-container-h1'  >
            <h1 className='TeamName' >{homeTeam}</h1>
            <h1>{awayTeam}</h1>
        </div>
        {filteredTeam.length === 0 ? (
        <p>Ces teams ne ce sont pas encore rencontrés.</p> 
    ) : (
        <div className='box' >
            <Bar data={data} options={options} className="Graph" style={{ flex: 1, maxWidth: '70%', textAlign: 'center',marginLeft: '80px'}} />
        </div>
    )}
        
        
        
        </div>
    );

}
export default DashboardEcart;