import carShowService from './car-show.service';

export const keys = {
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

export const getModelTrims = (year, make, model) => {
  // Thunk Middleware enables action creators to return functions instead of an action object
  return (dispatch, getState) => {
    dispatch(getModelTrimsStart(year, make, model));
    // return dispatch((dispatch) => {
      
      return carShowService.getTrims(year, make, model).then(response => dispatch(getModelTrimsSuccess(response)));
    // })
  }
}
