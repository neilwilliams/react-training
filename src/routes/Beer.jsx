import React, { useState } from "react";

const BeerList = (props) => {
  const { beers } = props;

  return (
    <>
      {beers && beers.length ? (
        <ul className="list-group">
          {beers.map((beer) => (
            <li className="list-group-item" key={beer.id}>
              {beer.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No beers to display</p>
      )}
    </>
  );
};

const BeerForm = (props) => {
  const [beer, setBeer] = useState("");
  const [beerError, setBeerError] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (beer) {
          props.addBeer({ id: new Date().toString(), name: beer });
          setBeer("");
        } else {
          setBeerError("Please enter a beer");
        }
      }}
    >
      <div className="form-group row justify-content-start">
        <div className="col-sm-4 input-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Add your beer here..."
            value={beer}
            onChange={(e) => setBeer(e.target.value)}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Add beer
            </button>
          </div>
        </div>
      </div>
      {beerError && (
        <div className="text-danger mb-3" role="alert">
          {beerError}
        </div>
      )}
    </form>
  );
};

export const Beer = () => {
  const [beers, setBeers] = useState([]);

  return (
    <>
      <h2>Beer app</h2>
      <BeerForm
        addBeer={(beer) => {
          setBeers([...beers, beer]);
        }}
      />
      <BeerList beers={beers} />
    </>
  );
};
