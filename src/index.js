import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from 'react-router/BrowserRouter';
import reducer from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);
