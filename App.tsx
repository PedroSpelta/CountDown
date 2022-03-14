import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import AddTask from "./src/components/newTask/AddTask";
import Header from "./src/components/header/Header";
import Tasks from "./src/components/tasks/Tasks";
import NewTaskModal from "./src/components/newTask/NewTaskModal";
import { ITasks } from "./src/types/tasks";
import { TaskContextWrapper, useTaskContext } from "./src/context/TaskContext";

const defaultTasks = [
  {
    title: "Sei lá",
    description: "a",
    date: new Date("03/20/2022"),
  },
  {
    title: "Teste",
    description: "a",
    date: new Date("03/15/2022"),
  },
  {
    title: "Não sei",
    description: "a",
    date: new Date("03/12/2022"),
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITasks>(defaultTasks);
  return (
    <TaskContextWrapper>
      <View style={styles.container}>
        <Header />
        <Tasks tasks={tasks} />
        <StatusBar style="auto" />
        <AddTask />
        <NewTaskModal setTasks={setTasks} />
      </View>
    </TaskContextWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000F1C",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
