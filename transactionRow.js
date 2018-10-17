import React from 'react';
import {View , StyleSheet, Text} from 'react-native';


export default function Transaction(props) {
	const {id, transact: {amount, date, entry}} = props;
	let newDate = date.toString();
	newDate = newDate.slice(0,-15);

	return (
		<View style = {styles.row}>
			<Text>{id + ")"} Amount of Rs {amount} is {entry}ed on </Text>
			<Text> -- {newDate} </Text>
		</View>	
		)
}

const styles = StyleSheet.create({
	row: {
		padding: 10,
		backgroundColor: "#00eeaa",
		borderColor: "#fff",
		borderWidth: 4,
	}
});