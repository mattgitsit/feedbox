import axios from 'axios';
import { FETCH_USER, LOGOUT_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const logoutUser = history => async dispatch => {
  await axios.get('/api/logout');

  dispatch({
    type: LOGOUT_USER
  });

  history.push('/');
};

export const handleStripeToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const submitSurvey = (formValues, history) => async dispatch => {
  const res = await axios.post('/api/surveys', formValues);

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });

  history.push('/surveys');
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({
    type: FETCH_SURVEYS,
    payload: res.data
  });
};
