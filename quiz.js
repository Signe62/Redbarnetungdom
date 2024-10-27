let answers = {
    running: 0,
    learning: 0,
    crisis: 0
};

let currentQuestion = 1;
const totalQuestions = 3;

function answerQuestion(questionNumber, answer) {
    // Tæl svar
    answers[answer]++;
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
    // Skjul alle spørgsmål og vis kun det aktuelle
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
    // Skjul sidste spørgsmål og vis resultat
    document.getElementById(`question${currentQuestion}`).classList.remove('activeq');
    document.getElementById('result').style.display = 'block';

    // Sortér svarene for at finde den højeste score
    let sortedAnswers = Object.keys(answers).sort((a, b) => answers[b] - answers[a]);

    // Tjek om alle svar er ens
    let allEqual = true;
    for (let i = 1; i < sortedAnswers.length; i++) {
        if (answers[sortedAnswers[i]] !== answers[sortedAnswers[0]]) {
            allEqual = false;
            break;
        }
    }

    if (allEqual) {
        showMultipleResults();
    } else {
        showSingleResult(sortedAnswers[0]);
    }

    // Sæt progress bar til 100%
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
            return '';
    }
}

function restartQuiz() {
    // Nulstil svar
    answers = { running: 0, learning: 0, crisis: 0 };
    currentQuestion = 1;
    
    // Skjul resultatet og vis første spørgsmål
    document.getElementById('result').style.display = 'none';
    showNextQuestion(1);
    updateProgressBar(0);
}