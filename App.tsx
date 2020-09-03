import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "./constants/colors";
import GameStart from "./screens/gameStart";
import GameQuestions from "./screens/gameQuestion";
import Question from "./interfaces/question";
import GameResult from "./screens/gameResult";

export default function App() {
  const [questionsData, setQuestionData] = useState<Question[]>([]);

  useEffect(() => {
    // Get Data from Some Source and set the Question to that Data
    //Fetch questions and format them with
    //OpenAPI Quiz Platform
    //Question Choices //Question Value //Question Text

    //Data must be of this type
    setQuestionData([
      {
        questionText: "What is the largest building in the Western Hemisphere?",
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
          {
            questionChoiceText: "Question Choice #4 may be this long",
            questionChoiceValue: 20,
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
          {
            questionChoiceText: "DIFF Question Choice #4 may be this long",
            questionChoiceValue: 200,
          },
        ],
      },
    ]);
  }, []);

  const [currentScreen, setCurrentScreen] = useState(0);

  const resetQuiz = () => {
    setQuestionData(questionsData);
    handleChangeScreen(0);
  };

  const handleChangeScreen = (numScreen: number) => {
    setCurrentScreen(numScreen);
  };

  const screenRenderer = () => {
    if (currentScreen === 0) {
      return <GameStart manageScreen={handleChangeScreen} />;
    } else if (currentScreen === 1) {
      return <GameQuestions questions={questionsData} setQuestions={setQuestionData} manageScreen={handleChangeScreen} />;
    } else if (currentScreen === 2) {
      return <GameResult questions={questionsData} resetQuiz={resetQuiz} />;
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
    backgroundColor: Colors.buttonSecondary,
    justifyContent: "center",
  },
});
