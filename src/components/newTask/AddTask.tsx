import React, { Dispatch, SetStateAction } from "react";
import { Alert, Image, Pressable, StyleSheet, Text } from "react-native";
import { palette } from "../../themes/theme";

interface IAddTask {
  setShowModal: Dispatch<SetStateAction<boolean>>
}

const AddTask: React.FC<IAddTask> = ({setShowModal}) => {
  return (
    <Pressable style={styles.button} onPress={() => {setShowModal(true)}}>
      <Image source={ require('../../images/plus.png')} style={styles.image}/>
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
    borderRadius:100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.third,
  },
  image: {
    height: 20,
    width: 20,
  }
});

export default AddTask;
