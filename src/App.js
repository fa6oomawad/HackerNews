import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";
import Search from "./Search";

const DEFAULT_QUERY = "redux";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
  }

  //remove the item that have this id from state and update state
  onDismiss(id) {
    const updatedList = this.state.result.hits.filter(
      item => item.objectID !== id
    );
    this.setState({
      result: { ...this.state.result, hits: updatedList }
    });
    console.log(updatedList);
  }

  //when user change the search term , update state with this new search term
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  setSearchTopStories(result) {
    this.setState({ result });
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }

  render() {
    const { searchTerm, result } = this.state;
    if (!result) {
      return null;
    }
    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange} />
        </div>
        <Table
          list={result.hits}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default App;
