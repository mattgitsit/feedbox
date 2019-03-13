import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys = () => {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey._id} className="card darken-1">
          <div className="card-content blue lighten-1">
            <span className="card-title white-text">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>

          <div className="card-action">
            <a href="!#" className="blue-text">
              Yes: {survey.yes}
            </a>
            <a href="!#" className="blue-text">
              No: {survey.no}
            </a>
          </div>
        </div>
      );
    });
  };

  render() {
    if (!this.props.surveys) {
      return <div>Loading</div>;
    }

    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = state => ({
  surveys: state.surveys
});

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
