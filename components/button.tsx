import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

export default function CustomButton() {
  return (
    <View style={styles.button}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 36,
          color: Colors.primaryText,
        }}
      >
        Test
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderRadius: 40,
    padding: 15,
    width: 200,
    backgroundColor: Colors.testing,
    justifyContent: "center",
  },
});
