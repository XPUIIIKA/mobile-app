import { View, Text, StyleSheet } from "react-native";

export function Contact({user}){
	return(
		<View style={styles.contact}>
			<Text>{user.name}  {user.phone}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	contact:{
		width: 210,
		padding: 5,
		marginBottom: 8,
		backgroundColor: '#4ccff5',
		borderRadius: 10,
	}
});