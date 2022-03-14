import React from "react";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { useTaskContext } from "../../context/TaskContext";
import { ICNewTaskModal } from "../../types/tasks";
import NewTaskForm from "./NewTaskForm";

const NewTaskModal: React.FC<ICNewTaskModal> = ({ setTasks }) => {
  const { showTaskModal, setShowTaskModal } = useTaskContext();
  return (
    <Modal
      visible={showTaskModal}
      transparent
      onRequestClose={() => {
        setShowTaskModal(false);
      }}
    >
      <TouchableOpacity
        style={styles.modal}
        activeOpacity={0}
        onPressOut={() => setShowTaskModal(false)}
      >
        <NewTaskForm setTasks={setTasks} />
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
  },
});

export default NewTaskModal;
