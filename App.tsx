import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "./constants/colors";
import GameStart from "./screens/gameStart";
import GameQuestions from "./screens/gameQuestion";
import Question from "./interfaces/question";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([
    {
      questionText: "Test Question #1",
      questionChoices: [
        {
          questionChoiceText: "Question Choice #1 may be this long",
          questionChoiceValue: 5,
        },
        {
          questionChoiceText: "Question Choice #2 may be this long",
          questionChoiceValue: 10,
        },
        {
          questionChoiceText: "Question Choice #3 may be this long",
          questionChoiceValue: 15,
        },
      ],
    },
    {
      questionText: "Test Question #2",
      questionChoices: [
        {
          questionChoiceText: "DIFF Question Choice #1 may be this long",
          questionChoiceValue: 50,
        },
        {
          questionChoiceText: "DIFF Question Choice #2 may be this long",
          questionChoiceValue: 100,
        },
        {
          questionChoiceText: "DIFF Question Choice #3 may be this long",
          questionChoiceValue: 150,
        },
      ],
    },
  ]);

  // const questions: Array<Question> = [
  //   {
  //     questionText: "Test Question #1",
  //     questionChoices: [
  //       {
  //         questionChoiceText: "Question Choice #1 may be this long",
  //         questionChoiceValue: 5,
  //       },
  //       {
  //         questionChoiceText: "Question Choice #2 may be this long",
  //         questionChoiceValue: 10,
  //       },
  //       {
  //         questionChoiceText: "Question Choice #3 may be this long",
  //         questionChoiceValue: 15,
  //       },
  //     ],
  //   },
  //   {
  //     questionText: "Test Question #2",
  //     questionChoices: [
  //       {
  //         questionChoiceText: "DIFF Question Choice #1 may be this long",
  //         questionChoiceValue: 50,
  //       },
  //       {
  //         questionChoiceText: "DIFF Question Choice #2 may be this long",
  //         questionChoiceValue: 100,
  //       },
  //       {
  //         questionChoiceText: "DIFF Question Choice #3 may be this long",
  //         questionChoiceValue: 150,
  //       },
  //     ],
  //   },
  // ];

  const handleChangeScreen = (numScreen: number) => {
    setCurrentScreen(numScreen);
  };

  const screenRenderer = () => {
    if (currentScreen === 0) {
      return <GameStart manageScreen={handleChangeScreen} />;
    } else if (currentScreen === 1) {
      return (
        <GameQuestions questions={questions} setQuestions={setQuestions} />
      );
    }
  };

  return screenRenderer();
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
