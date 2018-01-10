import {combineReducers} from 'redux';
import {keys} from './car-editor.actions';
import { createReducer } from '../../common/utilities';

const initialCarEditorState = {
  isOpen: false,
  selectedCarId: undefined
}

const carEditorModalReducer = createReducer(
  initialCarEditorState,
  { // [key]: actionFunc
    [keys.TOGGLE_CAR_EDITOR_MODAL]: (state, action) => {
      const toSet = !state.isOpen;
      return {
        ...state,
        isOpen: toSet,
        selectedCarId: action.selectedCarId
      };
    }
  }
);

// Same Reducer using switch statements instead of an array of key/actionFuncs

const carEditorModalReducerSwitch = 
  (state = initialCarEditorState, action) => {
    switch (action.type) {
      case 'TOGGLE_CAR_EDITOR_MODAL':
        return {
          ...state,
          isOpen: !state.isOpen,
          selectedCarId: action.selectedCarId
        };
    }
    return state;
}

export default carEditorModalReducer;
