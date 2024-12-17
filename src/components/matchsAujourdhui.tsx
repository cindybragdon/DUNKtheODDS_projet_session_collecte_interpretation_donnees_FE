import React, { useEffect, useState } from "react";
import TableauMatchAjd from "./tableauMatchAjd";
import { calculateOverUnder } from "./overUnder";

const MatchsAujourdHui = (props:any) => {
  const [matchsAujourdhui, setMatchsAujourdhui] = useState([]);
  const [overUnders, setOverUnders] = useState<number[]>([]);

  useEffect(() => {
    const today = new Date();

    const filteredMatchs = props.data.filter((match: any) => {
      const matchDate = new Date(match.scheduled);
      return matchDate.getDate() === today.getDate();
    });

    filteredMatchs.forEach((matchAujourdhui: { homeTeamName: string; awayTeamName: string; }) => {
      const overUnder = calculateOverUnder(props.data, matchAujourdhui.homeTeamName, matchAujourdhui.awayTeamName)
      setOverUnders((prevOverUnders) => [...prevOverUnders, overUnder]);
    });
    setMatchsAujourdhui(filteredMatchs);
  }, [props.data]);

  return (
    <div>
      <TableauMatchAjd dataMatch={matchsAujourdhui} overUnders={overUnders}/>
    </div>
  );
};

export default MatchsAujourdHui;
