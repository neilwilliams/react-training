import React from "react";

export default class QuoteGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: 100,
    };
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    const { quote } = this.state;
    return (
      <>
        <p>Your quote is: {quote}</p>
        <button
          className="btn btn-primary"
          onClick={(e) => this.setState({ quote: this.getRandomInt(20) })}
        >
          Generate
        </button>
      </>
    );
  }
}
