import {combineReducers} from 'redux';
import {keys} from './car-show.actions';
import * as carShowData from './car-show.data';

// Helper function to enables passing an object with
// the action.type as the key and the reducer as the function
const createReducer = (initialState = {}, actionHandlerKeyFuncs = {}) => {
  return (state = initialState, action) => {
    const actionHandler = actionHandlerKeyFuncs[action.type];
    return actionHandler ? actionHandler(state, action) : initialState;
  }
};

// Transforms the carEditorModal
// e.g. { carshow: { carEditorModal: {...} } }
const carEditorModalReducer = createReducer(
  // initialState
  { isOpen: false },
  // actionHandlerKeyFuncs
  {
    [keys.TOGGLE_CAR_EDITOR_MODAL]: (state, action) => {
      return {
        ...state,
        isOpen: !state.isOpen,
        selectedCarId: action.carId
      };
    }
  }
);

// Same Reducer using switch statements instead of a key/a
const carEditorModalReducerSwitch = (state = {isOpen: false}, action) => {
  switch (action.type) {
    case keys.TOGGLE_CAR_EDITOR_MODAL:
      return {
        isOpen: !state.isOpen
      };
  }
  return state;
}

const carsReducer = createReducer(
  // initialState
  [...carShowData.cars],
  // actionHandlerKeyFuncs
  {
    // [keys.TOGGLE_CAR_EDITOR_MODAL]: (state, action) => {
    //   return {
    //     ...state,
    //     isOpen: !state.isOpen
    //   };
    // }
  }
);

export default combineReducers({
  carEditorModal: carEditorModalReducer,
  cars: carsReducer
});
