import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import TransactionScreen from './screens/transactionScreen';
import AddExpenseScreen from './screens/AddExpenceScreen';


const MainNavigator = createStackNavigator({
  Transaction: TransactionScreen,
  AddExpense: AddExpenseScreen,
},{
  initialRouteName: "Transaction",
});

const AppNavigator = createSwitchNavigator({
  Main: MainNavigator,
},{
  initialRouteName: "Main",
});

export default class App extends React.Component {

	state = {
        showAddExpenseForm: false,
        cash: 1600,
  		  transaction: []
  		}

  render(){
    return (
    	<AppNavigator screenProps={{ cash: this.state.cash , transaction: this.state.transaction}}/>
); 
  }

}
	