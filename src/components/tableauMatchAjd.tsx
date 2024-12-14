import React from "react";

const TableauMatchAjd = (props : any) => {

    return(
        <div>
            <h1 className="text-center text-white mb-4">Matchs d'aujourd'hui</h1>
            {props.dataMatch.map((item : any , index : any) => (
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
                        <tr style={{ backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#e9ecef" }}>
                            <td>{item.team1Name}</td>
                            <td>{item.team1Moneyline}</td>
                            <td>{item.team1Points}</td>
                            <td>{item.team1Points - item.team2Points}</td>
                        </tr>
                        <tr style={{ backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#e9ecef" }}>
                            <td>{item.team2Name}</td>
                            <td>{item.team2Moneyline}</td>
                            <td>{item.team2Points}</td>
                            <td>{item.team2Points - item.team1Points}</td>
                        </tr>
                </tbody>
            </table>
            ))};
        </div>
    )
}

export default TableauMatchAjd;