import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "./constants/colors";
import CustomButton from "./components/button";

export default function App() {
  return (
    <>
      <View style={styles.primaryDiv}>
        <CustomButton />
      </View>
      <View style={styles.secondaryDiv}></View>
      <View style={styles.thirdDiv}></View>
    </>
  );
}

const styles = StyleSheet.create({
  primaryDiv: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryDiv: {
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  thirdDiv: {
    flex: 1,
    backgroundColor: Colors.primaryText,
  },
  fourthDiv: {
    borderColor: "black",
    borderRadius: 40,
    padding: 15,
    width: 200,
    backgroundColor: Colors.testing,
    justifyContent: "center",
  },
});
