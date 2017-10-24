import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Index from 'js/index';

import 'styles/main.scss';
import '/home/ejay/Desktop/Senior/SE2/tempeturs-frontend/src/main/js/components/SitterComps/layouts/layout.css';

const reducers = {
	form: formReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const mountNode = document.querySelector('#main');
ReactDOM.render(<Provider store={store}><Index /></Provider>, mountNode);
