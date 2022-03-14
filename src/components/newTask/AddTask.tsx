import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { defaultTask } from "../../constants/taskContants";
import { useTaskContext } from "../../context/TaskContext";
import { palette } from "../../themes/theme";

const AddTask: React.FC = () => {
  const { setShowTaskModal, setSelectedTask, setTaskModalType } =
    useTaskContext();
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        setShowTaskModal(true);
        setSelectedTask(defaultTask);
        setTaskModalType("add");
      }}
    >
      <Image source={require("../../images/plus.png")} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 60,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: palette.third,
  },
  image: {
    height: 20,
    width: 20,
  },
});

export default AddTask;
