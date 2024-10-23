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

function updateProgressBar(questionNumber) {
    const progressPercentage = (questionNumber / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = progressPercentage + '%';
}

function showNextQuestion(questionNumber) {
    document.getElementById(`question${currentQuestion}`).classList.remove('active');
    document.getElementById(`question${questionNumber}`).classList.add('active');
    currentQuestion = questionNumber;
}

function showResult() {
    document.getElementById(`question${currentQuestion}`).classList.remove('active');
    document.getElementById('result').style.display = 'block';

    let sortedAnswers = Object.keys(answers).sort((a, b) => answers[b] - answers[a]);

    // Show multiple results if all answers are different
    if (answers[sortedAnswers[0]] === 1 && answers[sortedAnswers[1]] === 1 && answers[sortedAnswers[2]] === 1) {
        showMultipleResults();
    } else {
        showSingleResult(sortedAnswers[0]);
    }

    // Set progress bar to 100% on result
    updateProgressBar(totalQuestions);
}