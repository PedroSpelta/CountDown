import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { ICNewTaskDate } from "../../types/tasks";
import { palette } from "../../themes/theme";

const NewTaskDate: React.FC<ICNewTaskDate> = ({
  date,
  setDate,
  showDate,
  setShowDate,
}) => {
  const formattedDate = moment(date).locale("pt").format("DD/MM/YYYY");

  const handleDate = (evt: any, selectedDate: any) => {
    if (evt.type === "dismissed") return setShowDate(false);
    console.log(evt.type, selectedDate);
    setDate(selectedDate);
    return setShowDate(false);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={() => setShowDate(true)}>
        <Text style={styles.input}>{formattedDate}</Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={() => setShowDate(true)}>
        <Text style={styles.input}>{formattedDate}</Text>
      </Pressable>
      {showDate && (
        <DateTimePicker
          value={date}
          minimumDate={new Date()}
          onChange={handleDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pressable: {
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    margin: 10,
    fontSize: 23,
    width: "100%",
    padding: 5,
    backgroundColor: palette.second,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewTaskDate;
