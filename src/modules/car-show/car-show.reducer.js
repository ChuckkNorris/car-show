import {combineReducers} from 'redux';
import {keys} from './car-show.actions';
import * as carShowData from './car-show.data';
import { createReducer } from '../common/utilities';
import carEditorModalReducer from './car-editor/car-editor.reducer';

const carsReducer = createReducer(
  [...carShowData.cars],
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
