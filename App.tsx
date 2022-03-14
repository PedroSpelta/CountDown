import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {  StyleSheet, View } from "react-native";
import AddTask from "./src/components/newTask/AddTask";
import Header from "./src/components/header/Header";
import Tasks from "./src/components/tasks/Tasks";
import NewTaskModal from "./src/components/newTask/NewTaskModal";
import { ITasks } from "./src/types/tasks";
import { TaskContextWrapper } from "./src/context/TaskContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { defaultTasks } from "./src/constants/taskContants";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITasks>(defaultTasks);

  useEffect(() => {
    const getLocal = async () => {
      const localTasks =
        (await AsyncStorage.getItem("tasks"));
      if (!localTasks) return;
      const parsedLocalTasks = JSON.parse(localTasks);
      setTasks(parsedLocalTasks);
    };
    getLocal();
  }, []);
  
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
