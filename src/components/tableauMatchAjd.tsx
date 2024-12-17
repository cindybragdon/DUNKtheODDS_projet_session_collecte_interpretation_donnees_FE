import React from "react";

const TableauMatchAjd = (props: any) => {
  return (
    <div>
      <h1 className="text-center text-white mb-4">Matchs d'aujourd'hui</h1>
      {props.dataMatch.length > 0 ? (
        props.dataMatch.map((item: any, index: any) => (
          <table className="table table-bordered mt-3" key={index}>
            <thead>
              <tr>
                <th>Team</th>
                <th>Moneyline</th>
                <th>Over/Under</th>
                <th>Spread</th>
              </tr>
            </thead>
            <tbody>
              <tr
                style={{
                  backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#e9ecef",
                }}
              >
                <td>{item.homeTeamName}</td>
                <td>{item.team1Moneyline}</td>
                <td>{props.overUnders[index]}</td>
                <td>{item.homePoints - item.awayPoints}</td>
              </tr>
              <tr
                style={{
                  backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#e9ecef",
                }}
              >
                <td>{item.awayTeamName}</td>
                <td>{item.team2Moneyline}</td>
                <td>{props.overUnders[index]}</td>
                <td>{item.awayPoints - item.homePoints}</td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <h3 className="text-center text-white">
          Aucun match prévu aujourd'hui
        </h3>
      )}
    </div>
  );
};

export default TableauMatchAjd;
