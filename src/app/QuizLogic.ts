export class QuizLogic {

    private gainedQuizData: [];
    private questionNumber: number;

    constructor() {
        this.questionNumber = 1;
    }

    getGainedQuizData(): [] {
        return this.gainedQuizData;
    }

    getQuestionNumber(): number {
        return this.questionNumber;
    }

    incrementQuestionNumber(): number {
        return this.questionNumber++;
    }

    decrementQuestionNumber(): number {
        return this.questionNumber--;
    }



}