import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import AddTask from './src/components/newTask/AddTask';
import Header from './src/components/header/Header';
import Tasks from './src/components/tasks/Tasks';
import NewTaskModal from './src/components/newTask/NewTaskModal';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <View style={styles.container}>
      <Header />
      <Tasks />
      <StatusBar style="auto" />
      <AddTask setShowModal={setShowModal}/>
      <NewTaskModal visible={showModal} setShowModal={setShowModal} />
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
