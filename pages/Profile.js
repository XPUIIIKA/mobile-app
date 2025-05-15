import { gStyles } from "../gStyles";
import { View, Text, StyleSheet } from 'react-native';

export function Profile() {
  return (
    <View style={[gStyles.pagesBlock, {justifyContent: 'center'}]}>
      <View style={styles.header}>
        <Text style={styles.name}>X user</Text>
        <Text style={styles.bio}>Mobile Developer</Text>
      </View>

      <View style={gStyles.contentBlock}>
        <Text style={styles.sectionTitle}>Contact Info</Text>
        <Text style={styles.info}>Email: user@example.com</Text>
        <Text style={styles.info}>Phone: +350 441 567 890</Text>
      </View>

      <View style={gStyles.contentBlock}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <Text style={styles.info}>Notifications: ON</Text>
        <Text style={styles.info}>Theme: Light</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 24
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    marginTop: 4
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12
  },
  info: {
    fontSize: 16,
    marginBottom: 8
  }
});