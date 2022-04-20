const initialState = {
  msge: 'Hi',
  arr: ['Hello', 'Good Morning!', 'Howdy', 'Salute']
}

const greetingsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'shuffle':{
      console.log('Shuffle detected...');
      console.log(state.arr);
      let random = Math.floor(Math.random()*state.arr.length);
      console.log(random)
      console.log(random);
      let newMsg = state.arr[random];
      const newState = {
        arr: state.arr,
        msg: newMsg
      }
      return newState;
    }

    default:
      return state;
  }

  
}

export default greetingsReducer;
