import { Profile } from "./pages/Profile";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export function Navigate(){
	return(
			<Tab.Navigator>
				<Tab.Screen
				name="Home"
				component={Home}
				options={{title: 'Home'}}/>
				<Tab.Screen
				name="AboutUs"
				component={AboutUs}
				options={{title: 'About us'}}/>
				<Tab.Screen
				name="Profile"
				component={Profile}
				options={{title: 'Profile'}}/>
			</Tab.Navigator>
	);
}