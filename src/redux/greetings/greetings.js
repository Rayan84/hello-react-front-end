const initialState = {
  text: 'Click the button'
}

const greetingsReducer = (state = initialState, action) => {
  switch(state){
    case 'SHUFFLE':
      return state
    default:
      return state
  }

  
}

export default greetingsReducer;
