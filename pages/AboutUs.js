import { gStyles } from "../gStyles";
import { StyleSheet, Text, View } from "react-native";

export function AboutUs() {
	return (
	  <View style={gStyles.pagesBlock}>
		<Text style={styles.title}>About Us</Text>
		
		<Text style={styles.text}>
		  We build simple and useful mobile apps.
		</Text>
		
		<Text style={styles.text}>
		  Our team loves creating great experiences for users.
		</Text>
		
		<Text style={styles.contact}>
		  Contact: hello@ourcompany.com
		</Text>
	  </View>
	);
  }
  
  const styles = StyleSheet.create({
	title: {
	  fontSize: 24,
	  fontWeight: 'bold',
	  marginBottom: 20,
	},
	text: {
	  fontSize: 16,
	  marginBottom: 15,
	},
	contact: {
	  fontSize: 16,
	  marginTop: 30,
	}
  });