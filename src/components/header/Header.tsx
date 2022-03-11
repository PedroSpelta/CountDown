import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { palette } from "../../themes/theme";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CountDown</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.first,
    width: "100%",
    height: 30,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Header;
