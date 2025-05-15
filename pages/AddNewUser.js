import { View } from "react-native";
import { gStyles } from "../gStyles";
import { TextInput } from "react-native-web";

export function AddNewUser(){
	return(
		<View style={gStyles.pagesBlock}>
			<View style={gStyles.contentBlock}>
				<TextInput
				placeholder="Enter name"/>
				<TextInput
				placeholder="Enter phone"/>
			</View>
		</View>
	);
}