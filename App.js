import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import TransactionScreen from './screens/transactionScreen';

const MainNavigator = createStackNavigator({
  Transaction: TransactionScreen,
},{
  initialRouteName: "Transaction",
});

const AppNavigator = createSwitchNavigator({
  Main: MainNavigator,
},{
  initialRouteName: "Main",
});

export default class App extends React.Component {

  render(){
    return (
    <AppNavigator />
); 
  }

}
	