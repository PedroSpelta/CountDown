import React, { Dispatch, SetStateAction } from "react";
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import NewTaskForm from "./NewTaskForm";

interface INewTaskModal {
  visible: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const NewTaskModal: React.FC<INewTaskModal> = ({ visible, setShowModal }) => {
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
        <NewTaskForm />
      </TouchableOpacity>
      {/* <View >
      </View> */}
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
