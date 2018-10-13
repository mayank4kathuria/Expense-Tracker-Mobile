import React from 'react';
import { StyleSheet, Text, View, ScrollView , Button } from 'react-native';
import Constants from "expo"
import AddExpense from './addExpense'



function Transaction(props) {
	const {id, transact: {amount, date, entry}} = props;
	let newDate = date.toString();
	newDate = newDate.slice(0,-15);

	return (
		<View>
			<Text>{id + ")"} Amount of Rs {amount} is {entry}ed on </Text>
			<Text> -- {newDate} </Text>
		</View>	
		)
}
//
export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			showAddExpenseForm: false,
			cash: 1600,
			transaction: []
		}
		this.addExpense = this.addExpense.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
	}

	toggleForm(){
		this.setState( (prevState) => {
			return {showAddExpenseForm: !prevState.showAddExpenseForm,}
		})
	}

	addExpense(amount){

		const d = new Date();

		if(this.state.cash == 0 ){
			this.setState({
			cash: 0,
		}) 
		} 
		else {

			const e = (amount >= 0) ? "Debit" : "Credit";
			
			this.setState( prevState => ({
				cash: prevState.cash - amount,
				transaction: [...prevState.transaction, {amount: Math.abs(amount), date: d, entry: e }],
			
			}) )
			
			this.toggleForm();
	}
}	

  render() {

  	if (this.state.showAddExpenseForm) return <AddExpense onSubmit={this.addExpense} />

    return (
      <View style={styles.container}>
        <Text style = {[styles.header]}>Expense Tracker</Text>
        <Text style = {styles.title}> Cash: {this.state.cash} </Text>
        <Button title="Add Expense" onPress = {this.toggleForm} />
        <Text style = {styles.title}>Transactions</Text>
        <ScrollView style = { {backgroundColor: "red"}}>
        	{this.state.transaction.map( (val, index) => <Transaction id={index + 1} transact={val} /> )}
      	</ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
	flex: 1,
	  padding:24,
  },
  header: {
    padding: Constants.statusBarHeight,
  },
  title: {
      padding: 0,
      fontSize: 50,
  },
  tran : {
  	flex: 1,
    fontSize: 40,
  }
});
