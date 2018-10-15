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
	
	handleExpense = (amount) => {
		this.setState({amount});
	}	

	handleSubmit = () => {

		this.props.onSubmit(this.state.amount);
		
	}

	render() {
		return (
			<View>
				<Text style = {styles.header}>Add Expense</Text>
				<TextInput style ={ styles.input } 
				value={this.state.amount}
				keyboardType="numeric"
				onChangeText = {this.handleExpense}/>
				<Text style = {{fontSize: 12}}>**Add "-" before amount for credited amount</Text>
				<Button title="Add Expense" onPress={this.handleSubmit}/>
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