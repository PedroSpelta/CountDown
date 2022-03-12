import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from './src/components/header/header';
import Tasks from './src/components/tasks/Tasks';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scroll}>
        <Tasks />
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
  scroll: {
    width:'100%'
  }
});

export default App;