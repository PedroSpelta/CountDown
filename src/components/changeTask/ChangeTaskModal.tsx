import React from 'react';
import { Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { ICChangeTaskModal } from '../../types/tasks';
import NewTaskForm from '../newTask/NewTaskForm';

const ChangeTaskModal:React.FC<ICChangeTaskModal> =  ({
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

export default ChangeTaskModal;
