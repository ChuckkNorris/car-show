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
});

const carsReducer = createReducer(
  [...carShowData.cars],
  {
    [keys.ADD_CAR] : (state, action) => {
      // TODO: Trigger modal
      return [
        // e.g. array of cars
        ...state,
        // add an empty car
        { id: action.carId }
      ];
    },
    [keys.REMOVE_CAR] : (state, action) => {
      return state.map(car => {
        if (car.id != action.carId)
          return car;
      });
    },
    [keys.UPDATE_CAR] : (state, action) => {
      const updatedCar = action.car;
      return state.map(car => {
        return car.id == updatedCar.id ? {...car, ...updatedCar} : car;
      });
    }
  }
);

export default combineReducers({
  carEditorModal: carEditorModalReducer,
  cars: carsReducer,
  carDetails: carDetailsReducer
});
