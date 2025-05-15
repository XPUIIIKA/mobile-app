import { Profile } from "./pages/Profile";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AddNewUser } from "./pages/AddNewUser";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NavigateStack(){
	return(
		<Stack.Navigator>
			<Stack.Screen
			options={{ title: "Home" }}
			name="Home"
			component={Home}/>
			<Stack.Screen
			name="Add person"
			component={AddNewUser}/>
		</Stack.Navigator>
	);
}

export function NavigateTab(){
	return(
			<Tab.Navigator>
				<Tab.Screen
				name="HomeAndAdd"
				component={NavigateStack}
				options={{ title: "Home", headerShown: false }}

				/>
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