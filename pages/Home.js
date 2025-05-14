import { View } from "react-native";
import { TopUp } from "../components/TopUp";
import { Contacts } from "../components/Contacts";
import { gStyles } from "../gStyles";

export function Home(){
	const users = [
		{
		  name: 'Oleg Mongol',
		  phone: '+380963258741'
		},    
		{
		  name: 'Anton Fedotov',
		  phone: '+380134353565'
		}, 
		{
		  name: 'Zhanna Dark',
		  phone: '+380267283951'
		},    
		{
		  name: 'Olga Valeva',
		  phone: '+380351365365'
		},     
	  ]
	return(
		<View style={gStyles.pagesBlock}>
			<TopUp/>
        	<Contacts users={users}/>
		</View>
	);
}