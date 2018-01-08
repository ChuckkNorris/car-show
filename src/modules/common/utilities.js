
// Stateless Component
// @props is an object
// @props.condition is a boolean expression
// @props.children is a reserved React property representing any children within the If component
export const If = ({condition, children}) => {
    if (condition)
      return children;
    else 
      return null;
}

// Helper function to enables passing an object with
// the action.type as the key and the reducer as the function
export const createReducer = (initialState = {}, actionHandlerKeyFuncs = {}) => {
  return (state = initialState, action) => {
    const actionHandler = actionHandlerKeyFuncs[action.type];
    return actionHandler ? actionHandler(state, action) : state; // was `initialState`
  }
};
