import React, { Component } from 'react';
import MovieList from "./Movies/MovieList";
import MovieOverview from "../MovieOverview/MovieOverview";
import {
  Switch,
  Route,
} from "react-router-dom";

export default class MainContent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={MovieList}/>
          <Route path="/about/:movieId" component={MovieOverview}/>
          <Route path="/:number" component={MovieList}/>
        </Switch>
      </div>
    );
  }
}