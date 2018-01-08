import {combineReducers} from 'redux';
import {keys} from './car-editor.actions';
import { createReducer } from '../../common/utilities';

const carEditorModalReducer = createReducer(
  { isOpen: true }, // initialState
  { // [key]: actionFunc()
    [keys.TOGGLE_CAR_EDITOR_MODAL]: (state, action) => {
      const toSet = !state.isOpen;
      console.log('Setting to:', toSet);
      return {
        ...state,
        isOpen: toSet,
        selectedCar: action.selectedCar
      };
    }
  }
);

// Same Reducer using switch statements instead of an array of key/actionFuncs
// const carEditorModalReducerSwitch = (state = {isOpen: false}, action) => {
//   switch (action.type) {
//     case keys.TOGGLE_CAR_EDITOR_MODAL:
//       return {
//         isOpen: !state.isOpen
//       };
//   }
//   return state;
// }

export default carEditorModalReducer;
