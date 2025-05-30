
const questions = [
    { q: "ما هو الحيوان الذي يلقب بسيد الغابة؟", a: ["أسد", "نمر", "دب", "ذئب"], correct: "أسد" },
    { q: "ما هو أسرع حيوان بري في العالم؟", a: ["فهد", "أسد", "حصان", "ذئب"], correct: "فهد" },
    { q: "ما هو الحيوان الذي له خرطوم طويل؟", a: ["فيل", "زرافة", "حصان", "كلب"], correct: "فيل" },
    { q: "ما هو أطول حيوان في العالم؟", a: ["زرافة", "فيل", "تمساح", "أفعى"], correct: "زرافة" },
    { q: "ما هو الحيوان الذي يعيش في الماء وله زعانف؟", a: ["سمكة", "دلفين", "قرش", "حوت"], correct: "سمكة" },
    // أضف هنا أكثر من 100 سؤال صعب لو أردت
];

while (questions.length < 100) {
    questions.push({
        q: `سؤال صعب رقم ${questions.length + 1}`,
        a: ["خيار 1", "خيار 2", "خيار 3", "خيار 4"],
        correct: "خيار 1"
    });
}

let timer = 10;
let timerInterval;

function startGame() {
    showQuestion();
    timerInterval = setInterval(() => {
        timer--;
        if (timer <= 0) {
            timer = 0;
            clearInterval(timerInterval);
            alert("انتهى الوقت! حاول مرة أخرى.");
            window.location.href = "index.html";
        }
        document.getElementById("timer").innerText = `الوقت: ${timer} ثانية`;
    }, 1000);
}

function showQuestion() {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("question").innerText = randomQuestion.q;
    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";
    randomQuestion.a.forEach(answer => {
        const button = document.createElement("div");
        button.className = "answer";
        button.innerText = answer;
        button.onclick = () => checkAnswer(button, answer, randomQuestion.correct);
        answersContainer.appendChild(button);
    });
}

function checkAnswer(button, selected, correct) {
    if (selected === correct) {
        timer += 3;
        button.classList.add("correct");
    } else {
        timer -= 5;
        if (timer < 0) timer = 0;
        button.classList.add("wrong");
    }
    setTimeout(showQuestion, 1000);
}

window.onload = startGame;
