import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchFields: ""
    };
  }

  onChangeSearch = event => {
    this.setState({ searchFields: event.target.value });
  };

  render() {
    const filteredrobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchFields.toLowerCase());
    });
    return (
      <div className="tc">
        <h2>Robo Friends</h2>
        <SearchBox test={this.onChangeSearch} />
        <CardList robots={filteredrobots} />
      </div>
    );
  }
}

export default App;
