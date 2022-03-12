import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { palette } from "../../themes/theme";
import Task from "./Task";

const defaultTasks = [
  {
    message: "Sei lá",
    date: new Date("03/20/2022"),
  },
  {
    message: "Teste",
    date: new Date("03/15/2022"),
  },
  {
    message: "Não sei",
    date: new Date("03/12/2022"),
  },
];

const Tasks: React.FC = () => {
  return (
    <ScrollView style={styles.scroll}>
      {defaultTasks.map((task, index) => {
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
