import React from "react";

const TableauMatchAjd = (props) => {

    return(
        <div>
            <h1 className="text-center text-white mb-4">Matchs d'aujourd'hui</h1>
            <table className="table table-bordered mt-3">
                <thead>
                <tr>
                    <th>Team</th>
                    <th>Moneyline</th>
                    <th>Points</th>
                    <th>Spread</th>
                </tr>
                </thead>
                <tbody>
                {props.dataMatch.map((item, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#e9ecef" }}>
                    <td>{item.team}</td>
                    <td>{item.odds}</td>
                    <td>{item.points}</td>
                    <td>{item.spread}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableauMatchAjd;