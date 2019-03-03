import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

import Header from './layout/Header';
import Landing from './layout/Landing';
import Dashboard from './layout/Dashboard';
import NewSurvey from './survey/NewSurvey';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route exact path="/surveys/new" component={NewSurvey} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);
