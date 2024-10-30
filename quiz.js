let answers = [
    { name: "running", value: 0 },
    { name: "learning", value: 0 },
    { name: "crisis", value: 0 }
];

let currentQuestion = 1;
const totalQuestions = 3;

function answerQuestion(questionNumber, answer) {
    const answerObj = answers.find(obj => obj.name === answer);
    if (answerObj) {
        answerObj.value++;
    }
    console.log(`Answered question ${questionNumber}: ${answer}`);

    // Opdater progress bar
    updateProgressBar(questionNumber);

    // Gå til næste spørgsmål eller vis resultatet
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
    for (let i = 1; i <= totalQuestions; i++) {
        document.getElementById(`question${i}`).classList.remove('activeq');
    }
    document.getElementById(`question${questionNumber}`).classList.add('activeq');
    currentQuestion = questionNumber;
}

function showPreviousQuestion(questionNumber) {
    document.getElementById(`question${currentQuestion}`).classList.remove('activeq');
    document.getElementById(`question${questionNumber}`).classList.add('activeq');
    currentQuestion = questionNumber;
    updateProgressBar(questionNumber - 1);
}

function goBack() {
    if (currentQuestion > 1) {
        showPreviousQuestion(currentQuestion - 1);
    }
}

function showResult() {
    document.getElementById(`question${currentQuestion}`).classList.remove('activeq');
    document.getElementById('result').style.display = 'block';

    // Sortér svarene for at finde den højeste score
    let sortedAnswers = answers.sort((a, b) => b.value - a.value);

    // Tjek om alle svar er ens
    let allEqual = sortedAnswers.every(obj => obj.value === sortedAnswers[0].value);

    if (allEqual) {
        showMultipleResults();
    } else {
        showSingleResult(sortedAnswers[0].name);
    }

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
            return 'At være medlem i løbeklubben. Som medlem i løbeklubben går medlemsprisen på 25 kr. per gang du deltager direkte til Red Barnet Ungdom, og du bliver en del af et ungt fællesskab med god energi.';
        case 'learning':
            return 'At undervise børn og unge. Du vil være med til at støtte og styrke børn og unge, der har det svært i skolen - Bl.a. med lektiehjælp, læring og selvtillid.';
        case 'crisis':
            return 'At hjælpe børn på krisecentre. Her vil du være med til at give børn der bor på krisecentre et frirum og et meningsfuldt fællesskab.';
        default:
            return '';
    }
}

function restartQuiz() {
    answers.forEach(obj => obj.value = 0);
    currentQuestion = 1;
    document.getElementById('result').style.display = 'none';
    showNextQuestion(1);
    updateProgressBar(0);
}