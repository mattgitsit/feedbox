import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';
import formFields from './formFields';
import validateEmails from '../../utils/validateEmails';

class SurveyForm extends Component {
  renderFields = () => {
    return formFields.map(({ label, name }, index) => (
      <Field
        key={index}
        type="text"
        name={name}
        component={SurveyField}
        label={label}
      />
    ));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.handleSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red white-text btn-flat">
            Cancel
          </Link>
          <button
            type="submit"
            className="right blue darken-1 white-text btn-flat">
            Next
            <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name, label }) => {
    if (!values[name]) {
      errors[name] = `You must provide ${label.toLowerCase()}.`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
