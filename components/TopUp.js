import {TextInput, View, StyleSheet, Button} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { gStyles } from "../gStyles";


export function TopUp(){
	const operators = ["Kyivstar", "Vodafone", "Lifecell"];

	const [phone, setPhone] = useState('');
	const [amount, setAmount] = useState('');
	const [operator, setOperator] = useState('Kyivstar');

	function sendBtnHandler(){
		if(!phone || !amount || !operator){
			return
		}
		if(!(phone.length === 12 || phone.length === 9)){
			return
		}
		if(amount <= 0){
			return	
		}

		console.log('Отправка данных:', { phone, amount, operator });
	}

	return(
		<View style={gStyles.contentBlock}>
			<TextInput
			onChangeText={setPhone}
			value={phone}
			keyboardType="phone-pad"
			placeholder="Enter your phone:"
			style={[styles.text, styles.elem]}/>	

			<Picker 
			style={styles.elem}
			selectedValue={operator}
			onValueChange={setOperator}
			>
				{
					operators.map(op =>{
						return <Picker.Item key={op} label={op} value={op}/>
					})
				}
			</Picker>

			<TextInput
			onChangeText={setAmount}
			value={amount}
			keyboardType="decimal-pad"
			placeholder="Enter amount:"
			style={[styles.text, styles.elem]}/>

			<Button
			onPress={sendBtnHandler}
			title="Send"
			style={styles.elem}/>
		</View>
	);
}

const styles = StyleSheet.create({
	text:{
		textAlign: 'center'
	},
	elem:{
		marginTop: 8,
		marginBottom: 8
	}
});