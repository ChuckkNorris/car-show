import carShowService from './car-show.service';
import uuid from 'uuid';

export const keys = {
  ADD_CAR: 'ADD_CAR',
  REMOVE_CAR: 'REMOVE_CAR',
  UPDATE_CAR: 'UPDATE_CAR',
  // Three actions for async
  GET_MODEL_TRIMS_START: 'GET_MODEL_TRIMS_START',
  GET_MODEL_TRIMS_SUCCESS: 'GET_MODEL_TRIMS_SUCCESS',
  GET_MODEL_TRIMS_ERROR: 'GET_MODEL_TRIMS_ERROR'
};

const getModelTrimsStart = (year, make, model) => {
  return {
    type: keys.GET_MODEL_TRIMS_START,
    year,
    make,
    model
  };
}

const getModelTrimsSuccess = (response) => {
  return {
    type: keys.GET_MODEL_TRIMS_SUCCESS,
    response
  };
}

const getModelTrimsError = (error) => {
  return {
    type: keys.GET_MODEL_TRIMS_ERROR,
    error
  };
}

export const getModelTrims = (year, make, model) => {
  // Thunk Middleware enables action creators to return functions in place of action objects
  // Which allows you to dispatch multiple actions in one action creator (via dispatch parameter)
  return (dispatch, getState) => {
    dispatch(getModelTrimsStart(year, make, model));
    return carShowService.getTrims(year, make, model)
      .then(response => dispatch(getModelTrimsSuccess(response)))
      .catch(error => dispatch(getModelTrimsError(error)));
  }
}

export const addCar = () => {
  return {
    type: keys.ADD_CAR,
    // Generating a random ID is "impure" - these things should be done in the action creators
    carId: uuid.v4()
  };
}

export const removeCar = (carId) => {
  return {
    type: keys.REMOVE_CAR,
    carId
  };
}

export const updateCar = (car) => {
  return {
    type: keys.UPDATE_CAR,
    car
  };
}
