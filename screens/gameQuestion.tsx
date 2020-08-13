import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Question from "../interfaces/question";
import Colors from "../constants/colors";
import CustomButton from "../components/button";

interface Props {
  questions: Array<Question>;
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

export default function GameQuestions(props: Props) {
  const [currentQuestionIndex, setCurrentQustionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(props.questions[0]);

  const populateQuestionOptions = () => {
    return props.questions[currentQuestionIndex].questionChoices.map(
      (questionChoice) => {
        return (
          <CustomButton
            buttonStyle={styles.questionChoiceButtons}
            textStyle={styles.questionChoiceText}
            key={questionChoice.questionChoiceText}
            onClick={() => {
              let newQuestions = [...props.questions];
              newQuestions[currentQuestionIndex].questionAnswer = "Test";
              props.setQuestions(newQuestions); //State is updated
              setCurrentQustionIndex(currentQuestionIndex + 1);
              setCurrentQuestion(props.questions[currentQuestionIndex + 1]);
            }}
          >
            {questionChoice.questionChoiceText}
          </CustomButton>
        );
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionTextContainer}>
        <Text style={styles.questionText}>{currentQuestion.questionText}</Text>
      </View>
      <View style={styles.questionChoicesContainer}>
        {populateQuestionOptions()}
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
  questionTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  questionChoicesContainer: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "center",
  },

  questionText: {
    fontSize: 40,
    color: Colors.primaryText,
  },
  questionChoiceButtons: {
    width: 300,
  },
  questionChoiceText: {
    fontSize: 22,
    color: Colors.primaryText,
  },
});
