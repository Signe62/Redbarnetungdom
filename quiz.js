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
    document.getElementById(`question${currentQuestion}`).classList.remove('activeq');
    document.getElementById(`question${questionNumber}`).classList.add('activeq');
    currentQuestion = questionNumber;
}

function showResult() {
    document.getElementById(`question${currentQuestion}`).classList.remove('activeq');
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

function showSingleResult(result) {
    let resultText = getResultText(result);
    document.getElementById('result-text').textContent = resultText;
}

function showMultipleResults() {
    let resultText = "Du passer til flere frivillige roller. \n" +
        "Derfor ville en rolle i bestyrelsen være attraktiv for dig, da man som medlem i bestyrelsen har indflydelse på alle slags frivilligt arbejde.";
    document.getElementById('result-text').textContent = resultText;
}

function getResultText(result) {
    switch (result) {
        case 'running':
            return 'At være medlem i løbeklubben. Som medlem i løbeklubben går medlemsprisen pr. måned direkte til Red Barnet Ungdom, og du bliver en del af et ungt fællesskab med god energi.';
        case 'learning':
            return 'At undervise børn og unge. Du vil være med til at støtte og styrke børn og unge, der har det svært i skolen - Bl.a. med lektiehjælp, læring og selvtillid.';
        case 'crisis':
            return 'At hjælpe børn på krisecentre. Her vil du være med til at give børn der bor på krisecentre et frirum og et meningsfuldt fællesskab.';
        default:
            return ''; // No log for unknown results
    }
}