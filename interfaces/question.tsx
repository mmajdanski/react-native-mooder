export default interface Question {
  questionText: string;
  questionChoices: Array<{
    questionChoiceText: string;
    questionChoiceValue: number;
  }>;
  questionAnswer?: string;
}
