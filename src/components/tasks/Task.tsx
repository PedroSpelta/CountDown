import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTaskContext } from "../../context/TaskContext";
import { getTime } from "../../lib/time";
import { palette } from "../../themes/theme";
import { ICTask } from "../../types/tasks";

const Task: React.FC<ICTask> = ({ task }) => {
  const { setSelectedTask, setShowTaskModal, setTaskModalType } =
    useTaskContext();
  const timeUntil = new Date(task.date).getTime() - new Date().getTime();
  if (timeUntil < 0) return null;
  const time = getTime(timeUntil);
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        setSelectedTask(task);
        setShowTaskModal(true);
        setTaskModalType("change");
      }}
    >
      <View>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>
      <View style={styles.number}>
      <Text style={styles.numberText}>{time.day + 1} D</Text>
      </View>
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
  numberText: {
    color: "white",
    fontSize: 26
  },
  title: {
    fontSize:20,
    color:'white',
    fontWeight: '700'
  },
  number: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {

  }
});

export default Task;
