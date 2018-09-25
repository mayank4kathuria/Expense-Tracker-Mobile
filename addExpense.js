// Implementing AddExpense Page for Expense Tracker App
import React from 'react';
import { View, Button, Text, StyleSheet, TextInput } from 'react-native'; 


export default class AddExpense extends React.Component {

	constructor(){
		super();
		this.state = {
			amount: '',
		}
	}
		

	render() {
		return (
			<View>
				<Text style = {styles.header}>Add Expense</Text>
				<TextInput style ={ styles.input } value="" />
				<Button title="Add Expense" onpress=""/>
			</View>

			)
	}


}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		fontSize: 40,
		padding: 23,
	},
	input: {
		padding: 10,
		borderWidth: 4,
		borderColor: 'black',
	}
});