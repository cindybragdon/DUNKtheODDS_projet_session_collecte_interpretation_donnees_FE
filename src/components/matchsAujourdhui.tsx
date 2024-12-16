import React, { useEffect, useState } from "react";
import TableauMatchAjd from "./tableauMatchAjd";
import { fetchAllPoints } from "../lib/axios";

const MatchsAujourdHui = (props:any) => {
  const [matchsAujourdhui, setMatchsAujourdhui] = useState([]);

  useEffect(() => {
    const today = new Date();

    const filteredMatchs = props.data.filter((match: any) => {
      const matchDate = new Date(match.scheduled);
      return matchDate.getDate() === today.getDate();
    });

    setMatchsAujourdhui(filteredMatchs);
  }, [props.data]);

  return (
    <div>
      <TableauMatchAjd dataMatch={matchsAujourdhui} />
    </div>
  );
};

export default MatchsAujourdHui;
