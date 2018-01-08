import {combineReducers} from 'redux';
import {keys} from './car-show.actions';
import * as carShowData from './car-show.data';
import { createReducer } from '../common/utilities';
import carEditorModalReducer from './car-editor/car-editor.reducer';

const carDetailsReducer = createReducer(
  { isLoading: false, response: null, request: null }, 
  {
    [keys.GET_MODEL_TRIMS_START]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        request: action
      }
    },
    [keys.GET_MODEL_TRIMS_SUCCESS]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        response: action.response
      }
    }
})

const carsReducer = createReducer(
  [...carShowData.cars],
  {
   
  }
);

export default combineReducers({
  carEditorModal: carEditorModalReducer,
  cars: carsReducer,
  carDetails: carDetailsReducer
});
