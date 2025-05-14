import { SafeAreaView, StyleSheet, View } from 'react-native';
import { TopUp } from './components/TopUp';
import { Contacts } from './components/Contacts';

export default function App() {
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
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TopUp/>
        <Contacts users={users}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#4ccff5'

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4ccff5'
  },
});
