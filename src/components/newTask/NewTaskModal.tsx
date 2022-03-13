import React, { Dispatch, SetStateAction } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

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
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <Text>testess</Text>
          </View>
        </TouchableWithoutFeedback>
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
    backgroundColor:'rgba(255,255,255,0.8)'
  },
  container: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewTaskModal;
