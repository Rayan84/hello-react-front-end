const initialState = {
  loading: false,
  error: '',
  msg: 'Hi',
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'fetchGreetingsMessagesRequest': {
      return {
        loading: true,
        error: '',
        msg: '',
        arr: [],
      };
    }

    case 'FETCH_GREETINGS_MESSAGES_SUCCESS': {
      const newState = {
        loading: false,
        error: '',
        msg: action.payload,
      };
      return newState;
    }
    case 'FETCH_GREETINGS_MESSAGES_FAILURE': {
      return {
        loading: false,
        error: action.payload,
        msg: action.payload,
      };
    }

    default:
      return state;
  }
};

export default greetingsReducer;
