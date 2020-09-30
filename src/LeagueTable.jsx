import React from "react";

const LeagueTable = () => {
  const data = [
    {
      team: "Leicester City",
      played: 3,
      won: 3,
      drawn: 0,
      lost: 0,
      points: 9,
    },
    {
      team: "Liverpool",
      played: 3,
      won: 3,
      drawn: 0,
      lost: 0,
      points: 9,
    },
    {
      team: "Everton",
      played: 3,
      won: 3,
      drawn: 0,
      lost: 0,
      points: 9,
    },
    {
      team: "Aston Villa",
      played: 3,
      won: 2,
      drawn: 0,
      lost: 0,
      points: 6,
    },
    {
      team: "Arsenal",
      played: 3,
      won: 2,
      drawn: 0,
      lost: 1,
      points: 6,
    },
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Team</th>
          <th scope="col">Played</th>
          <th scope="col">Won</th>
          <th scope="col">Drawn</th>
          <th scope="col">Lost</th>
          <th scope="col">Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={row.team}>
              <th scope="row">{row.team}</th>
              <th>{row.played}</th>
              <td>{row.won}</td>
              <td>{row.drawn}</td>
              <td>{row.lost}</td>
              <td>{row.points}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LeagueTable;
