import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AddTask from './src/components/common/AddTask';
import Header from './src/components/header/Header';
import Tasks from './src/components/tasks/Tasks';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Tasks />
      <StatusBar style="auto" />
      <AddTask />
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
