import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from 'react-router/BrowserRouter';
import reducer from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);
