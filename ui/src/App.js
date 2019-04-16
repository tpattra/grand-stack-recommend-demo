import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import MovieList from "./MovieList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.title
    };
  }

  searchMovie = title => {
    this.setState({ title });
  };

  render() {
    const { title } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img
            src={process.env.PUBLIC_URL + "/img/grandstack.png"}
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Movies Recommendation GRANDstack Demo</h1>
        </header>

        <Search searchMovie={this.searchMovie} title={title} />
        <MovieList />
      </div>
    );
  }
}

export default App;
