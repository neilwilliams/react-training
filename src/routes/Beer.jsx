import React, { useEffect, useState, useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  function getBeers() {
    return state.beers || [];
  }

  switch (action.type) {
    case "set_beers":
      return { beers: [...action.payload] };
    case "add_beer":
      return { beers: [...getBeers(), action.payload] };
    case "remove_beer":
      const newBeers = [...getBeers()];
      newBeers.pop(action.payload);
      return { beers: newBeers };
    default:
      throw new Error(`No action found for: ${action}`);
  }
}

export const Beer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [beers, setBeers] = useState([]);

  // did mount
  useEffect(() => {
    const beerStorage = localStorage.getItem("beers");
    if (beerStorage) {
      dispatch({ type: "set_beers", payload: JSON.parse(beerStorage) });
    }
  }, []);

  // did update
  useEffect(() => {
    if (state.beers) {
      localStorage.setItem("beers", JSON.stringify(state.beers));
    }
  });

  return (
    <>
      <h2>Beer app</h2>
      <BeerForm
        addBeer={(beer) => {
          dispatch({ type: "add_beer", payload: beer });
        }}
      />
      <BeerList beers={state.beers} />
    </>
  );
};

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
