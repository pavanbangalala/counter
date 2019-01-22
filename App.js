/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Counter from './src/CounterApp';
import CounterApp from './src/CounterApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = { count: 0 };
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREASE_COUNT':
			return {
				count: state.count + 1,
			};

		case 'DECREASE_COUNT':
			return {
				count: state.count - 1,
			};
	}
	return state;
};
const store = createStore(reducer);

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}
	render() {
		return (
			<Provider store={store}>
				<CounterApp />
			</Provider>
		);
	}
}
