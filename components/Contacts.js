import { View } from "react-native";
import { Contact } from "./Contact";
import { StyleSheet } from "react-native";

export function Contacts({users}){
	return(
		<View style={styles.contactsBlock}>
			{
				users.map(user=> <Contact key={user.phone} user={user}/>)
			}
		</View>
	);
}

const styles = StyleSheet.create({
	contactsBlock:{
		marginTop: 25,
		padding: 10,
		alignItems: 'center',
		backgroundColor: '#00B7EB',
		borderRadius: 15
	}
	
});