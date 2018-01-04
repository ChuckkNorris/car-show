import {combineReducers} from 'redux';
import {keys} from './car-show.actions';

// Must set default state
const carEditorModalReducer = (state = {isOpen: false}, action) => {
  switch(action.type) {
    case keys.TOGGLE_CAR_EDITOR_MODAL:
      return {
        isOpen: !state.isOpen
      };
  }
  return state;
}

export default combineReducers({
  carEditorModal: carEditorModalReducer
});
