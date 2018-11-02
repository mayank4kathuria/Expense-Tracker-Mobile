import React from 'react';
import Constants from "expo";
import { StyleSheet, Text, View, ScrollView , Button } from 'react-native';
import AddExpense from '../addExpense';
import Transaction from '../transactionRow';


export default class transactionScreen extends React.Component {
  
  constructor(){
      super();
      
      // this.state = this.screenProps.state;
  		this.addExpense = this.addExpense.bind(this);
  		this.toggleForm = this.toggleForm.bind(this);
  	}

  	toggleForm(){
  		// this.setState( (prevState) => {
  		// 	return {showAddExpenseForm: !prevState.showAddExpenseForm,}
  		// })
      this.navigation.navigate("AddExpense");
  	}

  	addExpense(amount){

  		const d = new Date();

  		if(this.screenProps.cash == 0 ){
  			this.setState({
  			cash: 0,
  		}) 
  		} 
  		else {

  			const e = (amount >= 0) ? "Debit" : "Credit";
  			
  			this.setState( prevState => ({
  				cash: prevState.screenProps.cash - amount,
  				transaction: [...prevState.screenProps.transaction, {amount: Math.abs(amount), date: d, entry: e }],
  			
  			}) )
  	}
  }	

    render() {

      return (
        <View style={styles.container}>
          <Text style = {styles.header}>Expense Tracker</Text>
          <Text style = {styles.title}> Cash: {this.screenProps.cash} </Text>
          <Button title="Add Expense" style={styles.btn} onPress = {this.toggleForm} />
          <Text style = {styles.title}>Transactions</Text>
          <ScrollView style = {styles.tran}>

          	{ this.screenProps.transaction.length > 0 ? (this.screenProps.transaction.map( (val, index) => <Transaction id={index + 1} transact={val} /> )) : <Text style={styles.msg}> No Transactions to show</Text> }
        	</ScrollView>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
	  flex: 1,
	  paddingTop:24,
	  margin: 5, 
  },
  header: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    margin: -5,

  },
  title: {
      padding: 0,
      fontSize: 50,
  },
  btn: {
  	borderWidth: 2,
      borderColor: "#000",
  },
  tran:{
  	margin: 10,
  	backgroundColor: "red",
  },
  msg : {
    fontSize: 20,
    padding:"10%",
  }
});
