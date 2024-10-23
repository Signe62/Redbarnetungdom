let answers = {
    running: 0,
    learning: 0,
    crisis: 0
};

let currentQuestion = 1;
const totalQuestions = 3;  // Total number of questions

function answerQuestion(questionNumber, answer) {
    // Increment the selected answer
    answers[answer]++;
    console.log(`Answered question ${questionNumber}: ${answer}`);

    // Update progress bar
    updateProgressBar(questionNumber);

    // Move to the next question or show result
    if (questionNumber < totalQuestions) {
        showNextQuestion(questionNumber + 1);
    } else {
        showResult();
    }
}