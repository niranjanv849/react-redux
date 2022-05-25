// action type (or) type of action
const BUY_CAKE = "BUY_CAKE";

//This is a action creator - to buy cake where {} object is a action inside the function
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

//initial state
const initialState = {
  numOfCakes: 10,
};

//reducer - (prevState,action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
