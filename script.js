// references to elements
const startBtn = document.getElementById("startBtn");
const modesBtn = document.getElementById("modesBtn");
const optionsBtn = document.getElementById("optionsBtn");
const exitBtn = document.getElementById("exitBtn");
const playNextBtn = document.getElementById("playNextBtn");
const toMenuBtn = document.getElementById("toMenuBtn");
const playNextWINBtn = document.getElementById("playNextWINBtn");
const toMenuWINBtn = document.getElementById("toMenuWINBtn");
const modeBackBtn = document.getElementById("modeBackBtn");
const mode1Btn = document.getElementById("mode1Btn");
const mode2Btn = document.getElementById("mode2Btn");
const mode3Btn = document.getElementById("mode3Btn");
const menuContainer = document.getElementById("menuContainer");
const moneyContainer = document.getElementById("moneyContainer");
const playingMoneyContainer = document.getElementById("playingMoneyContainer");
const questionContainer = document.getElementById("questionContainer");
const gameOverContainer = document.getElementById("gameOverContainer");
const winContainer = document.getElementById("winContainer");
const modesContainer = document.getElementById("modesContainer");
const gameOverText = document.getElementById("gameOverText");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const questionText = document.getElementById("questionText");
const questionNumberText = document.getElementById("questionNumber");
const moneyText = document.getElementById("money");
const hint50 = document.getElementById("hint50");
const hintFriend = document.getElementById("hintFriend");
const hintChange = document.getElementById("hintChange");
const hintMinus = document.getElementById("hintMinus");
const noHints = document.getElementById("noHints");
const friendAnswerText = document.getElementById("friendAnswerText");
const friendContainer = document.getElementById("friendContainer");
const timerContainer = document.getElementById("timerContainer");
const timerText = document.getElementById("timer");
const introContainer = document.getElementById("introContainer");
const introText = document.getElementById("introText");
const introLogo = document.getElementById("introLogo");
const focusBG = document.getElementById("focusBG");
const particlesBG = document.getElementById("particles-BG")
const particlesWIN = document.getElementById("particles-WIN")
const particlesGOOD = document.getElementById("particles-GOOD")
const chosenImg1 = document.getElementById("chosenImg1");
const chosenImg2 = document.getElementById("chosenImg2");
const chosenImg3 = document.getElementById("chosenImg3");

// questions (literally questions database :D)
const questions = [
    {
        question: "Jak zmienić kolor tekstu w CSS?",
        options: ["font-color", "color", "text-color", "style-color"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: 'Co robi "display: flex" w CSS?',
        options: ["Tworzy tabelę", "Ustawia flexbox", "Ukrywa element", "Zmienia kolor"],
        correctOption: "B",
        correctOptionReference: optionB
    },

    // --- JS ---
    {
        question: "Jak stworzyć tablicę w JS?",
        options: ["{}", "[]", "()", "array()"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Jak stworzyć objekt w JS?",
        options: ["[]", "()", "object()", "{}"],
        correctOption: "D",
        correctOptionReference: optionD
    },
    {
        question: "Co zwraca typeof null w JS?",
        options: ["null", "object", "undefined", "number"],
        correctOption: "B",
        correctOptionReference: optionB
    },

    // --- SQL ---
    {
        question: "Jak pobrać dane z tabeli w SQL?",
        options: ["GET", "SELECT", "FETCH", "PULL"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Które polecenie usuwa tabelę w SQL?",
        options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
        correctOption: "C",
        correctOptionReference: optionC
    },

    // --- PHP ---
    {
        question: "Jak zaczyna się kod PHP?",
        options: ["'<?php'", "'<php>'", "'<?'", "'<script>'"],
        correctOption: "A",
        correctOptionReference: optionA
    },
    {
        question: "Kiedy PHP zmienił się w język ze wsparciem dla programowania obiektowego?",
        options: ["1994", "2025", "2004", "2018"],
        correctOption: "C",
        correctOptionReference: optionC
    },

    // --- JAVA ---
    {
        question: "Które słowo tworzy klasę w Javie?",
        options: ["function", "class", "object", "struct"],
        correctOption: "B",
        correctOptionReference: optionB
    },

    // --- mixed questions  ---
    {
        question: "Która planeta jest największa?",
        options: ["Mars", "Ziemia", "Jowisz", "Wenus"],
        correctOption: "C",
        correctOptionReference: optionC
    },
    {
        question: "Ile dni ma rok przestępny?",
        options: ["365", "366", "364", "360"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Który język NIE jest backendowy?",
        options: ["PHP", "Java", "HTML", "Python"],
        correctOption: "C",
        correctOptionReference: optionC
    },
    {
        question: "Co oznacza CPU?",
        options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Core Process Unit"],
        correctOption: "B",
        correctOptionReference: optionB
    },

    {
        question: "Który framework JS jest popularny?",
        options: ["Laravel", "React", "Django", "Flask"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Co robi Git?",
        options: ["Edytuje kod", "Zarządza wersjami", "Kompiluje", "Hostuje strony"],
        correctOption: "B",
        correctOptionReference: optionB
    },

    // harder questions
    {
        question: "Ile bitów ma bajt?",
        options: ["4", "8", "16", "32"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Co oznacza AI?",
        options: ["Automatyczna Inteligencja", "Artificial Intelligence", "Advanced Internet", "Akwarium Indyków"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Ile wynosi liczba Pi z dokładnością do dwóch miejsc po przecinku?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Który pierwiastek chemiczny ma symbol Fe?",
        options: ["Fluor", "Fosfor", "Żelazo", "Ferm"],
        correctOption: "C",
        correctOptionReference: optionC
    },
    {
        question: "W którym roku upadło Cesarstwo Zachodniorzymskie?",
        options: ["476", "1492", "966", "1066"],
        correctOption: "A",
        correctOptionReference: optionA
    },
    {
        question: "Która liczba jest liczbą pierwszą?",
        options: ["21", "29", "39", "51"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Ile wynosi 2^10?",
        options: ["512", "1024", "2048", "4096"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Który ocean jest największy?",
        options: ["Atlantycki", "Indyjski", "Spokojny", "Arktyczny"],
        correctOption: "C",
        correctOptionReference: optionC
    },
    {
        question: "Kto napisał 'Zbrodnię i karę'?",
        options: ["Tołstoj", "Dostojewski", "Mickiewicz", "Sienkiewicz"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Ile wynosi pierwiastek z 144?",
        options: ["10", "11", "12", "13"],
        correctOption: "C",
        correctOptionReference: optionC
    },
    {
        question: "Który kraj ma największą populację na świecie (2024)?",
        options: ["USA", "Indie", "Chiny", "Rosja"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Jak nazywa się proces zamiany gazu w ciecz?",
        options: ["Parowanie", "Sublimacja", "Kondensacja", "Resublimacja"],
        correctOption: "C",
        correctOptionReference: optionC
    },
    {
        question: "Która liczba NIE jest podzielna przez 3?",
        options: ["123", "321", "222", "124"],
        correctOption: "D",
        correctOptionReference: optionD
    },
    {
        question: "Ile wynosi 7! (silnia)?",
        options: ["720", "5040", "40320", "120"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Który z tych języków należy do rodziny germańskiej?",
        options: ["Hiszpański", "Polski", "Niemiecki", "Włoski"],
        correctOption: "C",
        correctOptionReference: optionC
    },
    {
        question: "Która planeta ma najwięcej księżyców?",
        options: ["Ziemia", "Mars", "Jowisz", "Wenus"],
        correctOption: "C",
        correctOptionReference: optionC
    },
    {
        question: "Ile wynosi log2(8)?",
        options: ["2", "3", "4", "8"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Który metal ma najwyższą temperaturę topnienia?",
        options: ["Złoto", "Żelazo", "Wolfram", "Srebro"],
        correctOption: "C",
        correctOptionReference: optionC
    },
    {
        question: "Które państwo nie należy do UE?",
        options: ["Norwegia", "Polska", "Niemcy", "Francja"],
        correctOption: "A",
        correctOptionReference: optionA
    },
    {
        question: "Ile wynosi suma kątów w trójkącie?",
        options: ["90°", "180°", "270°", "360°"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Który gaz stanowi największą część atmosfery Ziemi?",
        options: ["Tlen", "Dwutlenek węgla", "Azot", "Hel"],
        correctOption: "C",
        correctOptionReference: optionC
    },
    {
        question: "Która liczba jest największa?",
        options: ["e^2", "π^2", "10", "9.9"],
        correctOption: "C",
        correctOptionReference: optionC
    },

    // --- everyday life / other ---
    {
        question: "Który dzień tygodnia jest po piątku?",
        options: ["Czwartek", "Sobota", "Niedziela", "Poniedziałek"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Co zwykle pijemy rano, żeby się obudzić?",
        options: ["Sok", "Kawa", "Zupa", "Kompot"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Ile godzin ma doba?",
        options: ["12", "24", "48", "60"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Które zwierzę miauczy?",
        options: ["Pies", "Kot", "Krowa", "Koń"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Co robimy, gdy jesteśmy zmęczeni?",
        options: ["Biegamy", "Śpimy", "Krzyczymy", "Gotujemy"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Który posiłek jest rano?",
        options: ["Obiad", "Kolacja", "Śniadanie", "Deser"],
        correctOption: "C",
        correctOptionReference: optionC
    },
    {
        question: "Co spada z nieba, gdy pada deszcz?",
        options: ["Śnieg", "Piasek", "Woda", "Liście"],
        correctOption: "C",
        correctOptionReference: optionC
    },
    {
        question: "Ile nóg ma człowiek?",
        options: ["1", "2", "3", "4"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Co zwykle robimy w weekend?",
        options: ["Pracujemy 24h", "Odpoczywamy", "Nie istniejemy", "Liczymy śruby"],
        correctOption: "B",
        correctOptionReference: optionB
    },
    {
        question: "Który kolor powstaje z połączenia czerwonego i niebieskiego?",
        options: ["Zielony", "Fioletowy", "Żółty", "Czarny"],
        correctOption: "B",
        correctOptionReference: optionB
    }
];

// variables

let money = 0;
let questionNumber = 0;
let currentQuestion = Math.floor(Math.random() * questions.length);
let guarantee = false;
let usedHints = {
    hint50: false,
    hintFriend: false,
    hintChange: false,
    hintMinus: false
};
const moneyPlaying = {
    1: ["100 zł", 100],
    2: ["500 zł", 500],
    3: ["1 000 zł", 1000],
    4: ["5 000 zł", 5000],
    5: ["25 000 zł", 25000],
    6: ["100 000 zł", 100000],
    7: ["500 000 zł", 500000],
    8: ["1 000 000 zł", 1000000],
    9: ["10 000 000 zł", 10000000],
    10: ["50 000 000 zł", 50000000],
    11: ["100 000 000 zł", 100000000],
    12: ["250 000 000 zł", 250000000],
    13: ["500 000 000 zł", 500000000],
    14: ["1 mld zł", 1000000000]
}
const friendGoodHints = [
    "Myślę, że poprawna odpowiedź to " + questions[currentQuestion].correctOption,
    "Moim zdaniem to " + questions[currentQuestion].correctOption,
    "Wydaje mi się, że to " + questions[currentQuestion].correctOption,
    "Szczerze mówiąc, to chyba " + questions[currentQuestion].correctOption,
    "Nie jestem pewien, ale obstawiam " + questions[currentQuestion].correctOption,
    "Zdaje sobie sprawę mordo że jesteś mało mądry, ale ja myślę że to " + questions[currentQuestion].correctOption,
    "Ciężko powiedzieć, ale chyba " + questions[currentQuestion].correctOption,
    "To trudne pytanie, ale stawiam na " + questions[currentQuestion].correctOption,
    "Nie znam odpowiedzi, ale może to " + questions[currentQuestion].correctOption,
    "To może być " + questions[currentQuestion].correctOption
];

const friendWrongHints = [
    "Myślę, że poprawna odpowiedź to " + getRandomWrongOption(),
    "Moim zdaniem to " + getRandomWrongOption(),
    "Wydaje mi się, że to " + getRandomWrongOption(),
    "Szczerze mówiąc, to chyba " + getRandomWrongOption(),
    "Nie jestem pewien, ale obstawiam " + getRandomWrongOption(),
    "Zdaje sobie sprawę mordo że jesteś mało mądry, ale ja myślę że to " + getRandomWrongOption(),
    "Ciężko powiedzieć, ale chyba " + getRandomWrongOption(),
    "Nie znam odpowiedzi, ale może to " + getRandomWrongOption(),
    "To może być " + getRandomWrongOption()
];

const mainMenuSong = document.getElementById('mainMenuSong');
const openingSong = document.getElementById('openingSong');
const idleSong = document.getElementById('idleSong');
const questionSFX = document.getElementById('questionSFX');
const correctSFX = document.getElementById('correctSFX');
const loseSFX = document.getElementById('loseSFX');
const chooseSFX = document.getElementById('chooseSFX');
const timeEndSFX = document.getElementById('timeEndSFX');
const applauseSFX = document.getElementById('applauseSFX');
let canPlayIdleSong = true;
let interacted = false;
let canInteractHints = true;

let newTime = 30;
let time = 31;
let canTimerUpdate = true;
let canTimerTick = true;

let modes = {
    time: false,
    extraPlus: false,
    twoForOne: false
}

// event listeners

startBtn.addEventListener("click", function() {
    startGame(false);
});

modesBtn.addEventListener("click", function() {
    modeBackBtn.style.pointerEvents = "auto";
    mode1Btn.style.pointerEvents = "auto";
    mode2Btn.style.pointerEvents = "auto";
    mode3Btn.style.pointerEvents = "auto";
    startBtn.style.pointerEvents = "none";
    modesBtn.style.pointerEvents = "none";
    optionsBtn.style.pointerEvents = "none";
    exitBtn.style.pointerEvents = "none";
    setTimeout(function() {
        modesBtn.style.animation = "menuBtnClick 1s forwards ease-out";
        menuContainer.style.animation = "hideMenu 0.5s forwards ease-in";
        setTimeout(function() {
            menuContainer.style.display = "none";
            modesContainer.style.display = "flex";
            modesContainer.style.animation = "showMenu 0.5s forwards ease-out";
        }, 500);
    }, 50);
});

modeBackBtn.addEventListener("click", function() {
    modeBackBtn.style.pointerEvents = "none";
    mode1Btn.style.pointerEvents = "none";
    mode2Btn.style.pointerEvents = "none";
    mode3Btn.style.pointerEvents = "none";
    modesContainer.style.animation = "hideMenu 0.5s forwards ease-in";
    setTimeout(function() {
        modesContainer.style.display = "none";
        menuContainer.style.display = "flex";
        menuContainer.style.animation = "showMenu 0.5s forwards ease-out";
        startBtn.style.pointerEvents = "auto";
        modesBtn.style.pointerEvents = "auto";
        optionsBtn.style.pointerEvents = "auto";
        exitBtn.style.pointerEvents = "auto";
        modesBtn.style.animation = "none";
    }, 500);
});

optionsBtn.addEventListener("click", function() {
    options();
});

exitBtn.addEventListener("click", function() {
    window.close();
});

optionA.addEventListener("click", function() {
    lockInOption("A", optionA);
});

optionB.addEventListener("click", function() {
    lockInOption("B", optionB);
});

optionC.addEventListener("click", function() {
    lockInOption("C", optionC);
});

optionD.addEventListener("click", function() {
    lockInOption("D", optionD);
});

optionA.addEventListener("mouseover", function() {
    optionA.style.animation = "menuBtn 2s infinite ease";
});

optionB.addEventListener("mouseover", function() {
    optionB.style.animation = "menuBtn 2s infinite ease";
});

optionC.addEventListener("mouseover", function() {
    optionC.style.animation = "menuBtn 2s infinite ease";
});

optionD.addEventListener("mouseover", function() {
    optionD.style.animation = "menuBtn 2s infinite ease";
});

optionA.addEventListener("mouseout", function() {
    optionA.style.animation = "none";
});

optionB.addEventListener("mouseout", function() {
    optionB.style.animation = "none";
});

optionC.addEventListener("mouseout", function() {
    optionC.style.animation = "none";
});

optionD.addEventListener("mouseout", function() {
    optionD.style.animation = "none";
});

startBtn.addEventListener("mouseover", function() {
    startBtn.style.animation = "menuBtn 2s infinite ease";
});

modesBtn.addEventListener("mouseover", function() {
    modesBtn.style.animation = "menuBtn 2s infinite ease";
});

optionsBtn.addEventListener("mouseover", function() {
    optionsBtn.style.animation = "menuBtn 2s infinite ease";
});

exitBtn.addEventListener("mouseover", function() {
    exitBtn.style.animation = "menuBtn 2s infinite ease";
});

startBtn.addEventListener("mouseout", function() {
    startBtn.style.animation = "none";
});

modesBtn.addEventListener("mouseout", function() {
    modesBtn.style.animation = "none";
});

optionsBtn.addEventListener("mouseout", function() {
    optionsBtn.style.animation = "none";
});

exitBtn.addEventListener("mouseout", function() {
    exitBtn.style.animation = "none";
});

mode1Btn.addEventListener("click", function() {
    if (modes.time == false) {
        mode1Btn.style.animation = "modeSelect 0.375s forwards ease";
        chosenImg1.style.animation = "modeImgSelect 0.375s forwards ease";
        modes.time = true;
    } else {
        mode1Btn.style.animation = "modeUnselect 0.375s forwards ease";
        chosenImg1.style.animation = "modeImgUnselect 0.375s forwards ease";
        modes.time = false;
    }
});

mode2Btn.addEventListener("click", function() {
    if (modes.extraPlus == false) {
        mode2Btn.style.animation = "modeSelect 0.375s forwards ease";
        chosenImg2.style.animation = "modeImgSelect 0.375s forwards ease";
        modes.extraPlus = true;
    } else {
        mode2Btn.style.animation = "modeUnselect 0.375s forwards ease";
        chosenImg2.style.animation = "modeImgUnselect 0.375s forwards ease";
        modes.extraPlus = false;
    }
});

mode3Btn.addEventListener("click", function() {
    if (modes.twoForOne == false) {
        mode3Btn.style.animation = "modeSelect 0.375s forwards ease";
        chosenImg3.style.animation = "modeImgSelect 0.375s forwards ease";
        modes.twoForOne = true;
    } else {
        mode3Btn.style.animation = "modeUnselect 0.375s forwards ease";
        chosenImg3.style.animation = "modeImgUnselect 0.375s forwards ease";
        modes.twoForOne = false;
    }
});

toMenuBtn.addEventListener("click", function() {
    toMenuBtn.style.pointerEvents = "none";
    playNextBtn.style.pointerEvents = "none";
    gameOverContainer.style.animation = "hideGameOver 1s forwards ease-in";
    focusBG.style.animation = "darkBGHide 1s forwards ease-out";
    setTimeout(function() {
        gameOverContainer.style.display = "none";
        menuContainer.style.display = "flex";
        menuContainer.style.animation = "showMenu 1s forwards ease-out";
        updateMoney();
        startBtn.style.pointerEvents = "auto";
        modesBtn.style.pointerEvents = "auto";
        optionsBtn.style.pointerEvents = "auto";
        exitBtn.style.pointerEvents = "auto";
        guarantee = false;
        playAudio(mainMenuSong);
        document.body.style.animation = "bgBlurReveal 0.375s forwards ease-in";
    }, 1000);
    
});

playNextBtn.addEventListener("click", function() {
    toMenuBtn.style.pointerEvents = "none";
    playNextBtn.style.pointerEvents = "none";
    gameOverContainer.style.animation = "hideGameOver 1s forwards ease-in";
    focusBG.style.animation = "darkBGHide 1s forwards ease";
    document.body.style.animation = "bgBlurHide 1s forwards ease";
    setTimeout(function() {
        gameOverContainer.style.display = "none";
        updateMoney();
        startGame(true);
    }, 1000);
    
});

toMenuWINBtn.addEventListener("click", function() {
    toMenuWINBtn.style.pointerEvents = "none";
    playNextWINBtn.style.pointerEvents = "none";
    winContainer.style.animation = "hideGameOver 1s forwards ease-in";
    focusBG.style.animation = "darkBGHide 1s forwards ease-out";
    setTimeout(function() {
        winContainer.style.display = "none";
        menuContainer.style.display = "flex";
        menuContainer.style.animation = "showMenu 1s forwards ease-out";
        updateMoney();
        startBtn.style.pointerEvents = "auto";
        modesBtn.style.pointerEvents = "auto";
        optionsBtn.style.pointerEvents = "auto";
        exitBtn.style.pointerEvents = "auto";
        guarantee = false;
        playAudio(mainMenuSong);
        document.body.style.animation = "bgBlurReveal 0.375s forwards ease-in";
        stopAudio(applauseSFX);
    }, 1000);
});

playNextWINBtn.addEventListener("click", function() {
    toMenuWINBtn.style.pointerEvents = "none";
    playNextWINBtn.style.pointerEvents = "none";
    winContainer.style.animation = "hideGameOver 1s forwards ease-in";
    focusBG.style.animation = "darkBGHide 1s forwards ease";
    document.body.style.animation = "bgBlurHide 1s forwards ease";
    setTimeout(function() {
        winContainer.style.display = "none";
        updateMoney();
        startGame(true);
        stopAudio(applauseSFX);
    }, 1000);
    
});

hint50.addEventListener("click", function() {
    if (canInteractHints) {
        hint50.style.pointerEvents = "none";
        hint50.style.animation = "useHint 1s forwards cubic-bezier(0.5, 0, 0, 0.5)";
        const options = [optionA, optionB, optionC, optionD];
        const correctOption = questions[currentQuestion].correctOptionReference;
        usedHints.hint50 = true;
        let removed = 0;
        for (let i = 0; i < options.length; i++) {
            if (options[i] !== correctOption && removed < 2) {
                options[i].style.animation = "removeOption 1s forwards cubic-bezier(0.5, 0, 0, 0.5)";
                options[i].style.pointerEvents = "none";
                removed++;
            }
        }
        removed = 0;
        setTimeout(function() {
            checkHints();
        }, 1000)
    }
});

hintChange.addEventListener("click", function() {
    if (canInteractHints) {
        hintChange.style.pointerEvents = "none";
        hintChange.style.animation = "useHint 1s forwards cubic-bezier(0.5, 0, 0, 0.5)";
        currentQuestion = Math.floor(Math.random() * questions.length);
        usedHints.hintChange = true;
        checkQuestions(true);
        setTimeout(function() {
            checkHints();
        }, 1000)
    }
});

hintFriend.addEventListener("click", function() {
    if (canInteractHints) {
        hintFriend.style.pointerEvents = "none";
        hintFriend.style.animation = "useHint 1s forwards cubic-bezier(0.5, 0, 0, 0.5)";
        usedHints.hintFriend = true;
        if (Math.random() < 0.7) {
            friendAnswerText.innerText = friendGoodHints[Math.floor(Math.random() * friendGoodHints.length)];
            friendContainer.style.display = "flex";
            friendContainer.style.animation = "friendHint 1s forwards ease";
        } else {
            friendAnswerText.innerText = friendWrongHints[Math.floor(Math.random() * friendWrongHints.length)];
            friendContainer.style.display = "flex";
            friendContainer.style.animation = "friendHint 1s forwards ease";
        }
        setTimeout(function() {
            checkHints();
        }, 1000)
    }
});

hintMinus.addEventListener("click", function() {
    if (canInteractHints) {
        hintMinus.style.pointerEvents = "none";
        hintMinus.style.animation = "useHint 1s forwards cubic-bezier(0.5, 0, 0, 0.5)";
        const options = [optionA, optionB, optionC, optionD];
        const correctOption = questions[currentQuestion].correctOptionReference;
        let removed = 0;
        usedHints.hintMinus = true;
        for (let i = 0; i < options.length; i++) {
            if (options[i] !== correctOption && removed < 1) {
                options[i].style.animation = "removeOption 1s forwards cubic-bezier(0.5, 0, 0, 0.5)";
                options[i].style.pointerEvents = "none";
                removed++;
            }
        }
        removed = 0;
        setTimeout(function() {
            checkHints();
        }, 1000)
    }
});

// functions

function startGame(playNext) {
    startBtn.style.pointerEvents = "none";
    modesBtn.style.pointerEvents = "none";
    optionsBtn.style.pointerEvents = "none";
    exitBtn.style.pointerEvents = "none";
    questionNumber = 0;
    currentQuestion = Math.floor(Math.random() * questions.length);
    optionA.style.animation = "none";
    optionB.style.animation = "none";
    optionC.style.animation = "none";
    optionD.style.animation = "none";
    hint50.style.pointerEvents = "auto";
    hintFriend.style.pointerEvents = "auto";
    hintChange.style.pointerEvents = "auto";
    hintMinus.style.pointerEvents = "auto";
    hint50.style.animation = "none";
    hintFriend.style.animation = "none";
    hintChange.style.animation = "none";
    hintMinus.style.animation = "none";
    hint50.style.display = "flex";
    hintFriend.style.display = "flex";
    hintChange.style.display = "flex";
    hintMinus.style.display = "flex";
    noHints.style.display = "none";
    usedHints = {
        hint50: false,
        hintFriend: false,
        hintChange: false,
        hintMinus: false
    };
    friendContainer.style.animation = "none";
    friendContainer.style.display = "none";
    newTime = 30;
    time = newTime;

    setTimeout(function() {
        startBtn.style.animation = "menuBtnClick 1s forwards ease-out";
        menuContainer.style.animation = "hideMenu 0.5s forwards ease-in";
        setTimeout(function() {
            menuContainer.style.display = "none";
            moneyContainer.style.animation = "sizeMoney 1s forwards ease-out";
            playingMoneyContainer.style.display = "flex";
            playingMoneyContainer.style.animation = "revealPlayingMoney 1s forwards ease-out";
            checkQuestions();
            startBtn.style.animation = "none";
            optionsBtn.style.animation = "none";
            exitBtn.style.animation = "none";
            stopAudio(mainMenuSong);
            document.body.style.animation = "bgBlurHide 1s forwards ease";
        }, 1000);
    }, 50);
}

function nextQuestion(changeQuestion) {
    if (!changeQuestion) {
        questionNumber++;
        playAudio(questionSFX);
    }
    document.getElementById("playingMoney").innerText = moneyPlaying[questionNumber][0];
    questionNumberText.innerText = questionNumber + " / 14";
    questionText.innerText = questions[currentQuestion].question;
    optionA.innerHTML = '<span class="abcd">A) </span>' + questions[currentQuestion].options[0];
    optionB.innerHTML = '<span class="abcd">B) </span>' + questions[currentQuestion].options[1];
    optionC.innerHTML = '<span class="abcd">C) </span>' + questions[currentQuestion].options[2];
    optionD.innerHTML = '<span class="abcd">D) </span>' + questions[currentQuestion].options[3];
    questionContainer.style.display = "flex";
    questionContainer.style.animation = "revealQuestion 1s forwards cubic-bezier(0.25, 1, 0.5, 1)";
    optionA.style.pointerEvents = "auto";
    optionB.style.pointerEvents = "auto";
    optionC.style.pointerEvents = "auto";
    optionD.style.pointerEvents = "auto";
    optionA.style.animation = "none";
    optionB.style.animation = "none";
    optionC.style.animation = "none";
    optionD.style.animation = "none";
    friendContainer.style.animation = "none";
    friendContainer.style.display = "none";
    canInteractHints = true;
    if (!changeQuestion) {
        time = newTime;
        revealTimer();
    }
    setTimeout(function() {
        if (canPlayIdleSong) {
            playAudio(idleSong);
        }
    }, 5000);
}

function lockInOption(option, btnName) {
    hideTimer();
    canPlayIdleSong = false;
    stopAudio(idleSong);
    stopAudio(questionSFX);
    playAudio(chooseSFX);
    optionA.style.pointerEvents = "none";
    optionB.style.pointerEvents = "none";
    optionC.style.pointerEvents = "none";
    optionD.style.pointerEvents = "none";
    canInteractHints = false;
    setTimeout(function() {
        btnName.style.animation = "optionBtnClick 5s forwards ease-in";
        focusBG.style.animation = "focusShow 5s forwards ease-in";
        document.body.style.animation = "focusBlurShow 5s forwards ease-in";
        setTimeout(function() {
        if (option === questions[currentQuestion].correctOption) {
            playAudio(correctSFX);
            btnName.style.animation = "optionBtnGoodClick 0.375s forwards ease-out";
            focusBG.style.animation = "focusHide 0.375s forwards ease-out";
            document.body.style.animation = "focusBlurHide 0.375s forwards ease-in";
            setTimeout(function() {
                btnName.style.animation = "correctOptionIdle 0.5s infinite cubic-bezier(0.5, 0, 0, 0.5)";
            }, 375);
            setTimeout(function() {
                questionContainer.style.animation = "hideQuestion 1s forwards ease-in";
                setTimeout(function() {
                    questionContainer.style.display = "none";
                    btnName.style.animation = "none";
                    currentQuestion = Math.floor(Math.random() * questions.length);
                    checkQuestions();
                    canPlayIdleSong = true;
                }, 1000);
            }, 6000);
        } else {
            playAudio(loseSFX);
            btnName.style.animation = "optionBtnWrongClick 0.375s forwards ease-out";
            focusBG.style.animation = "focusHide 0.375s forwards ease-out";
            document.body.style.animation = "focusBlurHide 0.375s forwards ease-in";
            setTimeout(function() {
                btnName.style.animation = "wrongOptionIdle 0.5s infinite cubic-bezier(0.5, 0, 0, 0.5)";
            }, 375);
            questions[currentQuestion].correctOptionReference.style.animation = "correctOptionReveal 1s infinite ease";
            setTimeout(function() {
                questionContainer.style.animation = "questionContainerGO 1s forwards ease-in";
                moneyContainer.style.animation = "sizeMoneyGO 1s forwards ease-in";
                playingMoneyContainer.style.animation = "hidePlayingMoney 1s forwards ease-in";
                setTimeout(function() {
                    questionContainer.style.display = "none";
                    gameOverContainer.style.display = "flex";
                    gameOverContainer.style.animation = "revealGameOver 1s forwards ease-out";
                    gameOverText.innerHTML = `${moneyPlaying[questionNumber][1]}`
                    toMenuBtn.style.pointerEvents = "auto";
                    playNextBtn.style.pointerEvents = "auto";
                    canPlayIdleSong = true;
                    document.body.style.animation = "bgBlurReveal 3s forwards ease";
                    focusBG.style.animation = "darkBGShow 1s forwards ease";
                }, 1000);
            }, 5000);
        }
        }, 5000);
    }, 100);
}

function updateMoney() {
    if (guarantee) {
        money += moneyPlaying[5][1];
    } else {
        money += moneyPlaying[questionNumber][1];
    }
    moneyText.innerHTML = `${money}zł`;
}

function checkQuestions(changeQuestion) {
    if (questionNumber > 3 && questionNumber < 9) {
        newTime = 25;
    } else if (questionNumber >= 9 && questionNumber < 11) {
        newTime = 20;
    } else if (questionNumber >= 11 && questionNumber < 14) {
        newTime = 15;
    }

    if (questionNumber >= 5) {
        guarantee = true;
    } else {
        guarantee = false;
    }

    if (questionNumber > 13) {
        playAudio(applauseSFX);
        document.body.style.animation = "focusBlurShow 1s forwards ease";
        focusBG.style.animation = "darkBGShow 1s forwards ease";
        playingMoneyContainer.style.animation = "hidePlayingMoney 1s forwards ease-out";
        winContainer.style.display = "flex";
        winContainer.style.animation = "revealQuestion 1s forwards cubic-bezier(0.25, 1, 0.5, 1)";
        toMenuWINBtn.style.pointerEvents = "auto";
        playNextWINBtn.style.pointerEvents = "auto";
    } else {
        nextQuestion(changeQuestion);
    }
}

function checkHints() {
    if (usedHints.hint50 && usedHints.hintFriend && usedHints.hintChange && usedHints.hintMinus) {
        noHints.style.display = "block";
        noHints.style.animation = "noHints 5s infinite cubic-bezier(0.5, 0, 0, 0.5)";
        hint50.style.display = "none";
        hintFriend.style.display = "none";
        hintChange.style.display = "none";
        hintMinus.style.display = "none";
    } else { 
        noHints.style.display = "none";
    }
}

function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
}

function playAudio(audio) {
    audio.play();
}

function getRandomWrongOption() {
    const options = ["A", "B", "C", "D"];
    const correctOption = questions[currentQuestion].correctOption;
    let randomOption = options[Math.floor(Math.random() * options.length)];
    while (randomOption === correctOption) {
        randomOption = options[Math.floor(Math.random() * options.length)];
    }
    return randomOption;
}

function revealTimer() {
    timerContainer.style.display = "flex";
    timerContainer.style.animation = "revealTimer 3s forwards ease-out"
    canTimerTick = true;
    updateTimer();
    setTimeout(function() {
        if (canTimerTick) {
            timerContainer.style.animation = "timerIdle 2s infinite ease";
        }
    }, 3000)
}

function hideTimer() {
    timerContainer.style.animation = "hideTimer 3s forwards ease-out"
    canTimerUpdate = false;
    canTimerTick = false;
    setTimeout(function() {
        timerContainer.style.animation = "none";
        timerContainer.style.display = "none";
    }, 3000)
}

function updateTimer() {
    timerText.innerText = `${time}s`;
    timerText.style.color = "white";
    if (canTimerUpdate) {
        const timer = setInterval(function() {
            if (canTimerTick) {
                if (time <= 30 && time > 11) {
                    timerText.style.color = "white";
                } else if (time <= 11 && time > 6) {
                    timerText.style.color = "yellow";
                    timerContainer.style.animation = "timerYellowIdle 1s infinite ease";
                } else if (time <= 6) {
                    timerText.style.color = "red";
                    timerContainer.style.animation = "timerRedIdle 0.5s infinite ease";
                }

                if (time > 0) {
                    time--;
                    timerText.innerText = `${time}s`;
                } else {
                    timerText.innerText = `Koniec czasu!`;
                    clearInterval(timer);
                    hideTimer();
                    canPlayIdleSong = false;
                    stopAudio(idleSong);
                    stopAudio(questionSFX);
                    playAudio(timeEndSFX);
                    optionA.style.pointerEvents = "none";
                    optionB.style.pointerEvents = "none";
                    optionC.style.pointerEvents = "none";
                    optionD.style.pointerEvents = "none";
                    canInteractHints = false;
                    setTimeout(function() {
                        questionContainer.style.animation = "questionContainerGO 1s forwards ease-in";
                        moneyContainer.style.animation = "sizeMoneyGO 1s forwards ease-in";
                        playingMoneyContainer.style.animation = "hidePlayingMoney 1s forwards ease-in";
                        document.body.style.animation = "bgBlurReveal 3s forwards ease";
                        setTimeout(function() {
                            questionContainer.style.display = "none";
                            gameOverContainer.style.display = "flex";
                            gameOverContainer.style.animation = "revealGameOver 1s forwards ease-out";
                            gameOverText.innerHTML = `${moneyPlaying[questionNumber][1]}`
                            toMenuBtn.style.pointerEvents = "auto";
                            playNextBtn.style.pointerEvents = "auto";
                            canPlayIdleSong = true;
                            playAudio(loseSFX);
                            canTimerUpdate = true;
                            document.body.style.animation = "bgBlurReveal 3s forwards ease";
                            focusBG.style.animation = "darkBGShow 1s forwards ease";
                        }, 1000);
                    }, 3000);
                }
            }
        }, 1000);
    }
}

function startParticles(win = false, good = false, money = false) {
    if (win) {

    } else if (good) {
        
    } else if (money) {

    }
}

function options() {
    alert("Opcje gry!");
}

// on js page loaded
window.onload = (e) => {
    introText.style.animation = "intro1 2s forwards ease";
    startParticles(true)
    setTimeout(function() {
        introText.innerText = "prezentuje";
        introText.style.animation = "intro2 2s forwards ease";
        setTimeout(function() {
            introText.innerText = "Miliarderzy";
            introLogo.style.display = "block";
            introLogo.style.animation = "intro1 3s forwards ease";
            setTimeout(function() {
                introText.style.animation = "intro1 2s forwards ease";
                setTimeout(function() {
                    introContainer.style.pointerEvents = "none";
                    introContainer.style.animation = "hideIntro 1s forwards ease";
                }, 2000)
            }, 1000);
        }, 2000)
    }, 2000)
}

// because of new browsers restrictions, regarding interacting with the document first before playing an audio,
// im checking here if the user interacted (clicked on the page), if yes - stops checking, to stop spamming the onmousemove event
window.onmousedown = (e) => {
    if (!interacted) {
        playAudio(mainMenuSong);
    }
}

mainMenuSong.addEventListener("playing", function() {
    interacted = true;
});