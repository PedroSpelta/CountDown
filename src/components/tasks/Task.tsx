import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useTaskContext } from "../../context/TaskContext";
import { getTime } from "../../lib/time";
import { palette } from "../../themes/theme";
import { ICTask } from "../../types/tasks";

const Task: React.FC<ICTask> = ({ task }) => {
  const { setSelectedTask, setShowTaskModal } = useTaskContext();
  const timeUntil = task.date.getTime() - new Date().getTime();
  if (timeUntil < 0) return null;
  const time = getTime(timeUntil);
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        setSelectedTask(task);
        setShowTaskModal(true);
      }}
    >
      <Text style={styles.text}>{task.title}</Text>
      <Text style={styles.text}>{time.day}</Text>
    </Pressable>
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
