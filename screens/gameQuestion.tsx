import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Question from "../interfaces/question";
import Colors from "../constants/colors";
import CustomButton from "../components/button";

interface Props {
  questions: Array<Question>;
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  manageScreen: (numScreen: number) => void;
}

export default function GameQuestions(props: Props) {
  const [currentQuestionIndex, setCurrentQustionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(props.questions[0]);

  const populateQuestionOptions = () => {
    return props.questions[currentQuestionIndex].questionChoices.map((questionChoice) => {
      return (
        <CustomButton
          buttonStyle={styles.questionChoiceButtons}
          textStyle={styles.questionChoiceText}
          key={questionChoice.questionChoiceText}
          onClick={() => {
            const newQuestions = [...props.questions];
            newQuestions[currentQuestionIndex].questionAnswer = questionChoice.questionChoiceText;
            newQuestions[currentQuestionIndex].questionAnswerValue = questionChoice.questionChoiceValue;

            //Update our state
            props.setQuestions(newQuestions);

            //If there are more questions
            if (currentQuestionIndex < props.questions.length - 1) {
              //Update the question Index, Update the currentQuestion
              setCurrentQustionIndex(currentQuestionIndex + 1);
              setCurrentQuestion(props.questions[currentQuestionIndex + 1]);
            } else {
              //Change to Result screen, there are no more questions
              props.manageScreen(2);
            }
          }}
        >
          {questionChoice.questionChoiceText}
        </CustomButton>
      );
    });
  };

  const widthOfProgresBar = () => {
    let value = ((currentQuestionIndex + 1) / props.questions.length) * 100 + "%";
    return value;
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionProgressContainer}>
        <Text style={styles.questionProgressContainerText}>
          Question {currentQuestionIndex + 1}/{props.questions.length}
        </Text>
        <View style={styles.questionProgressBarContainer}>
          <View style={{ ...styles.questionProgressBarContainerFill, width: widthOfProgresBar() }}></View>
        </View>
      </View>
      <View style={styles.questionTextContainer}>
        <Text style={styles.questionText}>{currentQuestion.questionText}</Text>
      </View>
      <View style={styles.questionChoicesContainer}>{populateQuestionOptions()}</View>
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
    flex: 2,
    //alignItems: "center",
    justifyContent: "center",
  },

  questionText: {
    fontSize: 40,
    color: Colors.primaryText,
    marginHorizontal: 10,
    textAlign: "center",
  },
  questionChoiceButtons: {
    width: "80%",
    backgroundColor: Colors.primary,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "white",
  },
  questionChoiceText: {
    fontSize: 22,
    color: Colors.primaryText,
  },
  questionProgressContainer: {
    flexDirection: "row",
    width: "85%",
    marginTop: 50,
    marginHorizontal: 20,
  },
  questionProgressContainerText: {
    fontSize: 24,
    color: Colors.primaryText,
  },
  questionProgressBarContainer: {
    marginLeft: 20,
    flexGrow: 5,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
  },
  questionProgressBarContainerFill: {
    flex: 1,
    color: "green",
    backgroundColor: "green",
    borderRadius: 20,
  },
});
