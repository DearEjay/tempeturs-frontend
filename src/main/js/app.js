import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Index from 'js/index';
import { ToastContainer, toast } from 'react-toastify';


import 'styles/main.scss';

const reducers = {
	form: formReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const mountNode = document.querySelector('#main');
ReactDOM.render(<Provider store={store}><Index /></Provider>, mountNode);
ReactDOM.render(<ToastContainer
          position="top-right"
          type="default"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
         />);
