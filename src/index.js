import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import carShowStore from './store';

import DevTools from './modules/common/dev-tools.component';

ReactDOM.render(
  (
    <Provider store={carShowStore}>
      <div>
        <App />
        <DevTools />
      </div>
    </Provider>
  ), 
  document.getElementById('root'));
registerServiceWorker();
