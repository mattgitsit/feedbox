import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { submitSurvey } from '../../actions';

import formFields from './formFields';

const SurveyFormReview = ({
  handleCancelSubmit,
  formValues,
  submitSurvey,
  history
}) => {
  const reviewFields = formFields.map(({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>

      {reviewFields}

      <button
        onClick={handleCancelSubmit}
        className="yellow darken-3 btn-flat white-text">
        <i className="material-icons left">arrow_back</i>
        Back
      </button>

      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat white-text right">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  formValues: state.form.surveyForm.values
});

const SurveyFormReviewWithRouter = withRouter(SurveyFormReview);

export default connect(
  mapStateToProps,
  { submitSurvey }
)(SurveyFormReviewWithRouter);
