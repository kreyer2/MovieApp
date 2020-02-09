import React from 'react';
import Header from './components/Header/Header'
import { getMovies } from "./actions/movies_action";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import MovieOverview from "./components/MovieOverview/MovieOverview";

function App () {
    return (
      <Router>
        <div className="App">
            <Header/>
            <Switch>
              <Route exact path="/" component={MainContent}/>
              <Route path="/about/:movieId" component={MovieOverview}/>
              <Route path="/:number" component={MainContent}/>
            </Switch>
        </div>
      </Router>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: url => dispatch(getMovies(url))
  };
};

export default connect(null, mapDispatchToProps)(App)
