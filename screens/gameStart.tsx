import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import CustomButton from "../components/button";

interface Props {
  manageScreen: (numScreen: number) => void;
}

export default function GameStart(props: Props) {
  const startQuizHandler = () => {
    //Create Logic to Change Screens here
    props.manageScreen(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appTitleContainer}>
        <Text style={styles.appTitle}>Mooder</Text>
      </View>
      <View style={styles.appIntroContainer}>
        <Text style={styles.appIntro}>It's time to Check In!</Text>
      </View>

      <CustomButton
        onClick={startQuizHandler}
        buttonStyle={styles.customStartButton}
      >
        Start
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,

    justifyContent: "center",
  },
  appTitleContainer: {
    flex: 1,
    //For Testing Only
    // borderColor: "orange",
    // borderWidth: 5,
    paddingTop: 100,
    alignItems: "center",
  },
  appTitle: {
    color: Colors.primaryText,
    fontSize: 48,
  },
  appIntroContainer: {
    flex: 2,
    alignItems: "flex-start",

    //For Testing Only
    // borderWidth: 5,
    // borderColor: "green",
  },
  appIntro: {
    color: Colors.primaryText,
    fontSize: 64,
    fontWeight: "bold",
  },
  customStartButton: {
    backgroundColor: "orange",
  },
});
