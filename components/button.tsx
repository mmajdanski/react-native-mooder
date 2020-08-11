import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import Colors from "../constants/colors";

interface Props {
  children: string;
  onClick: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export default function CustomButton(props: Props) {
  useEffect(() => {
    console.log("Console logging all props for a CustomButton Rendered");
    console.log(props);
  }, []);

  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={{ ...styles.button, ...props.buttonStyle }}>
        <Text style={{ ...styles.buttonText, ...props.textStyle }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderRadius: 40,
    padding: 10,
    marginBottom: 20,
    width: 150,
    backgroundColor: Colors.testing,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 36,
    color: Colors.primaryText,
  },
});
