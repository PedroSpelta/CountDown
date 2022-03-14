import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getTime } from "../../lib/time";
import { palette } from "../../themes/theme";
import { ICTask } from "../../types/tasks";

const Task: React.FC<ICTask> = ({ task }) => {
  const timeUntil = task.date.getTime() - new Date().getTime();
  if (timeUntil < 0) return null;
  const time = getTime(timeUntil);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.title}</Text>
      <Text style={styles.text}>{time.day}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: palette.second,
    margin: 25,
    padding: 10,
    color: "white",
    borderRadius: 10,
  },
  text: {
    color: "white",
  },
});

export default Task;
