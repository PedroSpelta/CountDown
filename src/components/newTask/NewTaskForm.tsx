import React, { useState } from "react";
import {
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

const NewTaskForm: React.FC<ICNewTaskForm> = ({ setTasks }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [showDate, setShowDate] = useState<boolean>(false);

  const handleAddTask = () => {
    setTasks((state) => [...state, { title, description, date }]);
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
        <Button title="Novo evento" onPress={handleAddTask}/>
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
