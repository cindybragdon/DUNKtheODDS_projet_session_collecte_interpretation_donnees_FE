import React, { useEffect, useState } from "react";
import TableauMatchAjd from "./tableauMatchAjd";
import { calculateOverUnder } from "./overUnder";
import { calculateMoneyline } from "./graphMoneyline";

const MatchsAujourdHui = (props:any) => {
  const [matchsAujourdhui, setMatchsAujourdhui] = useState([]);
  const [overUnders, setOverUnders] = useState<number[]>([]);

  const [moneyLines, setMoneyLines] = useState<number[][]>([]);

  useEffect(() => {
    const today = new Date();

    const filteredMatchs = props.data.filter((match: any) => {
      const matchDate = new Date(match.scheduled);
      return matchDate.getDate() === today.getDate();
    });

    filteredMatchs.forEach((matchAujourdhui: { homeTeamName: string; awayTeamName: string; }) => {
      const overUnder = calculateOverUnder(props.data, matchAujourdhui.homeTeamName, matchAujourdhui.awayTeamName)
      const moneyLines = calculateMoneyline(props.data, matchAujourdhui.homeTeamName, matchAujourdhui.awayTeamName)
      setOverUnders((prevOverUnders) => [...prevOverUnders, overUnder]);
      setMoneyLines((prevMoneylines) => [...prevMoneylines, moneyLines]);
    });
    setMatchsAujourdhui(filteredMatchs);
  }, [props.data]);

  return (
    <div>
      <TableauMatchAjd dataMatch={matchsAujourdhui} overUnders={overUnders} moneyLines={moneyLines}/>
    </div>
  );
};

export default MatchsAujourdHui;
