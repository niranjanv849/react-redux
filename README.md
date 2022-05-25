<!-- // Scenario:
// Cake Shop
// ---------
// Entities
// Shop - stores cakes on shelf
// Shopkeeper - at the front of the store
// Customer - at the store entrance

// Activities
// Customer - Buy a cake
// Shopkeeper - Remove a cake from shelf, receipt to keep track

//Three redux - principles
//1: state of whole app is stored in an object tree within a single store
//2: the only way to change a state is to emit an action, an object descibing what happened
// we have to let redux know about that with bindActionCreators, not allowed to update states directly
//3: to specify how state tree is transformed by actions, you write pure reducers
//reducers are pure functions which take prev state and actions as input and return new state
//reducer - (prevState,action) => newState

//🔗: https://youtu.be/_KhGdZEWC4c?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK
