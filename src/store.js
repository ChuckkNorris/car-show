import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import carShowReducer from './modules/car-show/car-show.reducer';
import DevTools from './modules/common/dev-tools.component';
import thunkMiddlware from 'redux-thunk';
import { createLogger } from 'redux-logger'

const rootReducer = combineReducers({
  carShow: carShowReducer
});

const loggerMiddleware = createLogger();

// const configureStore = (preloadedState) => {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     compose(
//       applyMiddleware(
//         thunkMiddlware,
//         loggerMiddleware
//       ),
//       DevTools.instrument()
//     )
//   );
// }
const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(
      thunkMiddlware,
      loggerMiddleware
    ),
    DevTools.instrument()
  )
);

export default store;
