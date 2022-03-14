import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { ICNewTaskDate } from "../../types/tasks";
import { palette } from "../../themes/theme";
import { getDaysUntil, getFutureDate } from "../../lib/time";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NewTaskDate: React.FC<ICNewTaskDate> = ({
  date,
  setDate,
  showDate,
  setShowDate,
}) => {
  const [days, setDays] = useState<string>("0");
  const formattedDate = moment(date).locale("pt").format("DD/MM/YYYY");

  const handleDatePick = (evt: any, selectedDate: any) => {
    if (evt.type === "dismissed") return setShowDate(false);
    setShowDate(false);
    setDate(selectedDate);
    setDays(getDaysUntil(selectedDate).toString());
  };

  const handleDateInput = (text: string) => {
    const number = Number(text).toString();
    setDate(getFutureDate(number));
    setDays(number.replace(/[^0-9]/g, ""));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.pressable, styles.pressableInput]}>
        <TextInput
          keyboardType="number-pad"
          value={days}
          onChangeText={handleDateInput}
          style={styles.pressableText}
        />
        <Text style={styles.pressableText}>Dias</Text>
      </View>
      <Pressable style={styles.pressable} onPress={() => setShowDate(true)}>
        <Text style={styles.input}>{formattedDate}</Text>
      </Pressable>
      {showDate && (
        <DateTimePicker
          value={date}
          minimumDate={new Date()}
          onChange={handleDatePick}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pressableInput: {
    justifyContent: 'space-between'
  },
  pressableText: {
    fontSize: 23
  },
  pressable: {
    flex: 1,
    flexDirection:'row',
    margin: 10,
    backgroundColor: palette.second,
    padding: 5,
    borderRadius: 5,
    fontSize: 23,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 23,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewTaskDate;
