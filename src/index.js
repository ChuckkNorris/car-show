import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import DevTools from './modules/common/dev-tools.component';
import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <div>
        <App />
        <DevTools />
      </div>
    </Provider>
  ), 
  document.getElementById('root'));
registerServiceWorker();
