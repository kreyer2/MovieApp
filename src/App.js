import React, { Component } from 'react';
import Header from './components/Header/Header'
import { getMovies } from "./actions/movies_action";
import { connect } from "react-redux";
import MainContent from "./components/MainContent/MainContent";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <MainContent page={this.props.page}/>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.movies.page,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: url => dispatch(getMovies(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
