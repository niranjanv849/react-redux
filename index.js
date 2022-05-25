const redux = require("redux");
const createStore = redux.createStore;

// action type (or) type of action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//This is a action creator - to buy cake where {} object is a action inside the function
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

//This is a action creator - to buy ice cream where {} object is a action inside the function
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

//initial state
const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

//reducer - (prevState,action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

//store - requires a parameter - reducer
const store = createStore(reducer);
console.log("Initial state", store.getState());

//adding listerners and unsubscribe to store - subscribe
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

//dispatcher - accepts action to update the state
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
