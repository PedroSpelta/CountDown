import React, { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { palette } from "../../themes/theme";
import NewTaskDate from "./NewTaskDate";
import { ICNewTaskForm } from "../../types/tasks";
import { useTaskContext } from "../../context/TaskContext";

const NewTaskForm: React.FC<ICNewTaskForm> = ({ setTasks }) => {
  const { selectedTask, taskModalType } = useTaskContext();
  const [title, setTitle] = useState<string>(selectedTask.title);
  const [description, setDescription] = useState<string>(
    selectedTask.description
  );
  const [date, setDate] = useState<Date>(selectedTask.date);
  const [showDate, setShowDate] = useState<boolean>(false);

  const buttonText = taskModalType === "add" ? "Novo evento" : "Mudar evento";

  const handleChangeTask = () => {
    setTasks((state) => {
      const newState = state.map((ts) => {
        if( ts.date !== selectedTask.date) return ts;
        return {
          title,
          description,
          date
        }
      })
      return newState;
    })
  };

  const handleAddTask = () => {
    if (title === "" || description === "")
      return Alert.alert(
        "Erro",
        "O título e a descrição não podem estar vazios"
      );
    setTasks((state) => [...state, { title, description, date }]);
  };

  const handleButtonPress = () => {
    if (taskModalType === "add") return handleAddTask();
    handleChangeTask();
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.title}>Título</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(evt) => setTitle(evt)}
        />
        <Text style={styles.title}>Descrição</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={(evt) => setDescription(evt)}
        />
        <Text style={styles.title}>Data</Text>
        <NewTaskDate
          date={date}
          setDate={setDate}
          showDate={showDate}
          setShowDate={setShowDate}
        />
        <Button title={buttonText} onPress={handleButtonPress} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    width: "90%",
    borderRadius: 5,
    backgroundColor: palette.first,
    justifyContent: "center",
  },
  input: {
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    fontSize: 22,
    backgroundColor: palette.second,
  },
  title: {
    marginHorizontal: 10,
  },
});

export default NewTaskForm;
