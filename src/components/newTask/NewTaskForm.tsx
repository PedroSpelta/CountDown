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
import DateTimePicker from "@react-native-community/datetimepicker";

const NewTaskForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [showDate, setShowDate] = useState<boolean>(false);

  const handleDate = (evt, selectedDate) => {
    if(evt.type === 'dismissed') return setShowDate(false);
    console.log(evt.type, selectedDate);
    setDate(selectedDate);
    setShowDate(false);
  };
  console.log(date)

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
        <Button title="date" onPress={() => setShowDate(true)}/>
        <Text >{date.toLocaleDateString('pt-br')}</Text>
        {showDate && (
          <DateTimePicker
            value={date}
            minimumDate={new Date()}
            onChange={handleDate}
          />
        )}
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
