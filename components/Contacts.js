import { Contact } from "./Contact";
import { StyleSheet, Button, View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { gStyles } from "../gStyles";

export function Contacts({users}){

	const navigation = useNavigation();
	
	function openAddBtnHandler(){
		navigation.navigate("Add person");
	}

	return(
		<View style={gStyles.contentBlock}>
			{
				users.map(user=> <Contact key={user.phone} user={user}/>)
			}

			<Button
			title="Add new person"
			onPress={openAddBtnHandler}/>
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