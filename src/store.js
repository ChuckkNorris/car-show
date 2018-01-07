import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import carShowReducer from './modules/car-show/car-show.reducer';
import DevTools from './modules/common/dev-tools.component';
import thunkMiddlware from 'redux-thunk';

const rootReducer = combineReducers({
  carShow: carShowReducer
});

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(
      thunkMiddlware
    ),
    DevTools.instrument()
  )
);

export default store;
