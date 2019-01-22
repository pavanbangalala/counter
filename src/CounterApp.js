/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class CounterApp extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
					<TouchableOpacity onPress={this.props.increaseCount}>
						<Text style={{ fontSize: 20 }}>increment</Text>
					</TouchableOpacity>
					<Text style={{ fontSize: 20 }}>{this.props.count}</Text>
					<TouchableOpacity onPress={this.props.decreaseCount}>
						<Text style={{ fontSize: 20 }}>decrement</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		count: state.count,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		increaseCount: () => dispatch({ type: 'INCREASE_COUNT' }),
		decreaseCount: () => dispatch({ type: 'DECREASE_COUNT' }),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterApp);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
