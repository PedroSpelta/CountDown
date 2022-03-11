import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from './src/components/header/header';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>

      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000F1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;