import axios from "axios";
// import { useDispatch } from "react-redux";

const URL = 'http://127.0.0.1:10524/greetings';




const FETCH_GREETINGS_MESSAGES_REQUEST = {
  type: 'fetchGreetingsMessagesRequest'
};

export const triggerFetchGreetingsMessagesRequest = () => {
  return FETCH_GREETINGS_MESSAGES_REQUEST
}

export const triggerFetchGreetingsMessagesSuccess = (payload) => {
  return {
    type: 'FETCH_GREETINGS_MESSAGES_SUCCESS',
    payload
  }
}

export const triggerFetchGreetingsMessagesFailure = (payload) => {
  return {
    type: 'FETCH_GREETINGS_MESSAGES_FAILURE',
    payload
  }
}

export const fetchAPI = () => (dispatch) => {
  console.log('Fetching..........');

  dispatch(triggerFetchGreetingsMessagesRequest());
  axios.get(URL, { headers: {} } )
  .then((response) => {
    const data = Object.values(response.data);
    const arr = [];
    arr.push(data[1]);
    console.log('data.........:');
    console.log(data[1]);
   
    dispatch(triggerFetchGreetingsMessagesSuccess(arr));
    //console.log('Fetched successfully....')
  })
  .catch((error) => {
    dispatch(triggerFetchGreetingsMessagesFailure(error.message));
  });

};


export default fetchAPI;