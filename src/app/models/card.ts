export class Card {
  groupName: string;
  question: string;
  answer: string;

  constructor(question: string, answer: string, groupName: string) {
    this.question = question;
    this.answer = answer;
    this.groupName = groupName;
  }
}
