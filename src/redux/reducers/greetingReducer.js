const initialState = {
  loading: false,
  error: '',
  msg: 'Hi',
}

const greetingsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'fetchGreetingsMessagesRequest':{
      console.log('Requesting API report from Reducer....');
      return {
        loading: true,
        error: '',
        msg: '',
        arr: []
      }
    }

    case 'FETCH_GREETINGS_MESSAGES_SUCCESS':{
      console.log('API Fetched successfully...');
      const newState = {
        loading: false,
        error: '',
        msg: action.payload
      };
      return newState
    }

    default:
      return state;
  }

  
}

export default greetingsReducer;

