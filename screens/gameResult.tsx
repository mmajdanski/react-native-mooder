import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import Question from "../interfaces/question";

interface Props {
  questions: Array<Question>;
}

export default function GameResult(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.finalScoreHeading}>
        <Text style={styles.finalScoreHeadingText}>Your final score is:</Text>
      </View>
      <View style={styles.finalScoreResult}>
        <Text style={styles.finalScoreResultText}>
          {props.questions
            .map((question) => {
              return question.questionAnswerValue!;
            })
            .reduce((a, b) => a + b, 0)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
  },

  finalScoreHeading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  finalScoreResult: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "center",
  },

  finalScoreHeadingText: {
    fontSize: 40,
    color: Colors.primaryText,
  },
  questionChoiceButtons: {
    width: 300,
  },
  finalScoreResultText: {
    fontSize: 22,
    color: Colors.primaryText,
  },
});
