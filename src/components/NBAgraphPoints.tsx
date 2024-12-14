import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Select from "react-select";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type TeamOption = { label: string; value: string };

const nbaTeams = [
  "Hawks", "Celtics", "Nets", "Hornets", "Bulls", "Cavaliers", "Mavericks", "Nuggets", "Pistons",
  "Warriors", "Rockets", "Pacers", "Clippers", "Lakers", "Grizzlies", "Heat", "Bucks", "Timberwolves",
  "Pelicans", "Knicks", "Thunder", "Magic", "76ers", "Suns", "TrailBlazers", "Kings", "Spurs", "Raptors",
  "Jazz", "Wizards",
];

// Mock data pour les 30 équipes
const mockData: Record<string, number[]> = {};
nbaTeams.forEach((team) => {
  mockData[team] = Array.from({ length: 6 }, () => Math.floor(Math.random() * 50 + 100)); 
});

// 5 meilleures équipes NBA
const top5Teams = ["Warriors", "Bucks", "Celtics", "Nuggets", "Lakers"]; 

const CompareTeamsPoints = () => {
  const [selectedTeams, setSelectedTeams] = useState<TeamOption[]>([]);

  const handleSelectChange = (selected: TeamOption[]) => {
    setSelectedTeams(selected);
  };

  const getColor = (index: number): string => {
    const colors = [
      "rgba(255,99,132,1)", "rgba(54,162,235,1)", "rgba(255,206,86,1)",
      "rgba(75,192,192,1)", "rgba(153,102,255,1)", "rgba(255,159,64,1)",
    ];
    return colors[index % colors.length];
  };

  const combinedData = {
    labels: Array.from({ length: 6 }, (_, i) => `Match ${i + 1}`), 
    datasets: selectedTeams.map((team, index) => ({
      label: team.label, 
      data: mockData[team.value], 
      borderColor: getColor(index),
      tension: 0.1,
    })),
  };

  
  const top5Data = {
    labels: Array.from({ length: 6 }, (_, i) => `Match ${i + 1}`), 
    datasets: top5Teams.map((team, index) => ({
      label: team, 
      data: mockData[team], 
      borderColor: getColor(index), 
      tension: 0.1,
    })),
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", height: "100%", color: "white" }}>
      <div style={{ margin: "0 auto", width: "80%", textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>
        Comparer les points par match de 5 équipes au cours des 6 derniers match
      </div>

      <div style={{ margin: "0 auto", width: "60%", textAlign: "center" }}>
        <Select
          options={nbaTeams.map((team) => ({ label: team, value: team }))}
          value={selectedTeams}
          onChange={handleSelectChange}
          isMulti
          getOptionLabel={(e) => e.label}
          getOptionValue={(e) => e.value}
          placeholder="Select Teams"
          styles={{
            singleValue: (provided) => ({
              ...provided,
              color: "black",
            }),
            option: (provided) => ({
              ...provided,
              color: "black",
            }),
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ width: "70%", border: "2px solid white", borderRadius: "8px", padding: "10px" }}>
          <Line
            data={combinedData}
            options={{
              plugins: {
                legend: { labels: { color: "white" } },
              },
              scales: {
                x: { ticks: { color: "white" } },
                y: { ticks: { color: "white" } },
              },
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ width: "70%", border: "2px solid white", borderRadius: "8px", padding: "10px" }}>
          <Line
            data={top5Data}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "5 meilleures équipes de la NBA pour les points par match",
                  color: "white", 
                  font: {
                    size: 20, 
                    weight: "bold", 
                  },
                  padding: { bottom: 20 }, 
                },
                legend: { labels: { color: "white" } },
              },
              scales: {
                x: { ticks: { color: "white" } },
                y: { ticks: { color: "white" } },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CompareTeamsPoints;
