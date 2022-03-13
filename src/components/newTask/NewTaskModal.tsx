import React, { Dispatch, SetStateAction } from "react";
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { ICNewTaskModal } from "../../types/tasks";
import NewTaskForm from "./NewTaskForm";

const NewTaskModal: React.FC<ICNewTaskModal> = ({
  visible,
  setShowModal,
  setTasks,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={() => {
        setShowModal(false);
      }}
    >
      <TouchableOpacity
        style={styles.modal}
        activeOpacity={0}
        onPressOut={() => setShowModal(false)}
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
