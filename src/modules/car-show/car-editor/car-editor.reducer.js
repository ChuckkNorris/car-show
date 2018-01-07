import {combineReducers} from 'redux';
import {keys} from './car-editor.actions';
import { createReducer } from '../../common/utilities';

const carEditorModalReducer = createReducer(
  { isOpen: false }, // initialState
  { // [key]: actionFunc()
    [keys.TOGGLE_CAR_EDITOR_MODAL]: (state = {isOpen: false }, action) => {
      return {
        ...state,
        isOpen: !state.isOpen,
        selectedCar: action.selectedCar
      };
    }
  }
);

// Same Reducer using switch statements instead of an array of key/actionFuncs
const carEditorModalReducerSwitch = (state = {isOpen: false}, action) => {
  switch (action.type) {
    case keys.TOGGLE_CAR_EDITOR_MODAL:
      return {
        isOpen: !state.isOpen
      };
  }
  return state;
}

export default carEditorModalReducer;
