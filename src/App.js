import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";
import Search from "./Search";
const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux/",
    author: "Dan Abramov, Andrws clark",
    num_comments: 2,
    points: 4,
    objectID: 1
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: ""
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
    console.log(updatedList);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    const { list, searchTerm } = this.state;

    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange} />
        </div>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

export default App;
