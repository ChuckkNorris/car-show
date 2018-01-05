import { createStore, combineReducers, compose } from 'redux';
import carShowReducer from './modules/car-show/car-show.reducer';
import DevTools from './modules/common/dev-tools.component';

const rootReducer = combineReducers({
  carShow: carShowReducer
});

const store = createStore(
  rootReducer,
  {},
  DevTools.instrument()
);

export default store;
