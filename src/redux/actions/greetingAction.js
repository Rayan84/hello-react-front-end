import axios from 'axios';

const URL = 'http://127.0.0.1:10524/greetings';

const FETCH_GREETINGS_MESSAGES_REQUEST = {
  type: 'fetchGreetingsMessagesRequest',
};

export const triggerFetchGreetingsMessagesRequest = () => FETCH_GREETINGS_MESSAGES_REQUEST;

export const triggerFetchGreetingsMessagesSuccess = (payload) => ({
  type: 'FETCH_GREETINGS_MESSAGES_SUCCESS',
  payload,
});

export const triggerFetchGreetingsMessagesFailure = (payload) => ({
  type: 'FETCH_GREETINGS_MESSAGES_FAILURE',
  payload,
});

export const fetchAPI = () => (dispatch) => {
  dispatch(triggerFetchGreetingsMessagesRequest());
  axios.get(URL, { headers: {} })
    .then((response) => {
      const data = Object.values(response.data);
      const arr = [];
      arr.push(data[1]);

      dispatch(triggerFetchGreetingsMessagesSuccess(arr));
    })
    .catch((error) => {
      dispatch(triggerFetchGreetingsMessagesFailure(error.message));
    });
};

export default fetchAPI;
