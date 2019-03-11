import React from 'react';

const SurveyField = ({ input, label, meta }) => {
  return (
    <div className="input-field">
      <label className="active">{label}</label>
      <input {...input} />
      <small className="red-text">{meta.touched && meta.error}</small>
    </div>
  );
};

export default SurveyField;
