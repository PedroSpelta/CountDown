import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { palette } from "../../themes/theme";
import { ICTasks } from "../../types/tasks";
import Task from "./Task";

const Tasks: React.FC<ICTasks> = ({tasks}) => {
  return (
    <ScrollView style={styles.scroll}>
      {tasks.map((task, index) => {
        return <Task key={index} task={task} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.second,
    margin: 25,
    height: 30,
    color: "white",
    borderRadius: 10,
  },
  text: {
    color: "white",
  },
  scroll: {
    width: "100%",
  },
});

export default Tasks;
