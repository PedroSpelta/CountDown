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
  },
  text: {
    color: "#fff",
    fontSize: 20,
    marginTop: 30,
    marginLeft:25,
    fontWeight: '700',
  },
});

export default Header;
