import React from 'react';
import { StyleSheet, Text, View, ScrollView , Button } from 'react-native';
import Constants from "expo"
import AddExpense from './addExpense'



function Transaction(props){
	return (
		<View>
			<Text>{props.id + ")"} Amount: Rs { props.transact} </Text>
		</View>	
		)
}

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

	addExpense(){
		const debit = 10;
		if(this.state.cash == 0 ){
			this.setState({
			cash: 0,
		}) 
		} 
		else {
		this.setState( state => ({
			cash: state.cash - debit,
			transaction: [...state.transaction, debit],
		}) )
	}
}	

  render() {

  	if (this.state.showAddExpenseForm) return <AddExpense />

    return (
      <View style={styles.container}>
        <Text style = {[styles.header]}>Expense Tracker</Text>
        <Text style = {styles.title}> Cash: {this.state.cash} </Text>
        <Button title="Add Expense" onPress = {this.toggleForm} />
        <Text style = {styles.title}>Transactions</Text>
        <ScrollView style = {[styles.tran, {backgroundColor: "red"} ]}>
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
