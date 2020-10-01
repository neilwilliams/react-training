import React from "react";

import LeagueTable from "../LeagueTable";
import Beer from "../Beer";
import QuoteGenerator from "../QuoteGenerator";

export const Home = () => {
  const greeting = () => {
    return "Hello";
  };
  const name = "Neil";
  const hobbies = ["Running", "Cycling"];
  const paragraph = "I also love my red wine - a bit too much.";

  return (
    <>
      <h2>Homepage</h2>
      <p>
        {greeting()}, my name is {name}
      </p>
      <p>My hobbies include:</p>
      <ul>
        {hobbies.map((hobbie, index) => (
          <li key={`${hobbie}${index}`}>{hobbie}</li>
        ))}
      </ul>
      <p>{paragraph}</p>

      <h2>League table</h2>
      <LeagueTable />

      <h2>My beer</h2>
      <Beer />

      <h2>Quote generator</h2>
      <QuoteGenerator />
    </>
  );
};
