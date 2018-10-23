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
				<Text style = {{margin:10}}></Text>
				<TextInput style ={ styles.input } 
				value={this.state.amount}
				keyboardType="numeric"
				onChangeText = {this.handleExpense}/>
				<Text style = {{fontSize: 12}}>**Add "-" before amount to credit</Text>
				<Text style = {{margin:10}}></Text>
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
		paddingTop: 27,
		fontSize: 40,
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: "#eee",	
	},
	input: {
		padding: 10,
		borderWidth: 4,
		borderColor: 'black',
	}
});