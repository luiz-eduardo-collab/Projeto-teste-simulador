/* =========================================
   SISTEMA DO SIMULADOR
========================================= */

let currentQuestions = [];
let currentIndex = 0;
let selectedAnswer = null;
let answeredQuestion = false;


/* =========================================
   ESTATÍSTICAS GERAIS
========================================= */

let stats =
    JSON.parse(localStorage.getItem("stats")) || {
        answered: 0,
        correct: 0,
        wrong: 0
    };


/* =========================================
   RESULTADO DO SIMULADO ATUAL
========================================= */

let simulationStats = {
    answered: 0,
    correct: 0,
    wrong: 0
};


/* =========================================
   ELEMENTOS DO HTML
========================================= */

const areaSelect =
    document.getElementById("areaSelect");

const difficultySelect =
    document.getElementById("difficultySelect");

const modeSelect =
    document.getElementById("modeSelect");


/* =========================================
   CARREGAR ÁREAS
========================================= */

function loadAreas() {

    const areas = [
        ...new Set(
            questions.map(question => question.area)
        )
    ];

    areas.sort((a, b) =>
        a.localeCompare(b, "pt-BR")
    );

    areas.forEach(area => {

        const option =
            document.createElement("option");

        option.value = area;
        option.textContent = area;

        areaSelect.appendChild(option);

    });

}


/* =========================================
   ATUALIZAR ESTATÍSTICAS
========================================= */

function updateStats() {

    document.getElementById("totalQuestions")
        .textContent = questions.length;

    document.getElementById("answered")
        .textContent = stats.answered;

    document.getElementById("correct")
        .textContent = stats.correct;

    document.getElementById("wrong")
        .textContent = stats.wrong;


    const accuracy =
        stats.answered === 0
            ? 0
            : (
                stats.correct /
                stats.answered *
                100
            ).toFixed(1);


    document.getElementById("accuracy")
        .textContent = accuracy + "%";


    localStorage.setItem(
        "stats",
        JSON.stringify(stats)
    );

}


/* =========================================
   EMBARALHAR
========================================= */

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];

    }

    return array;

}


/* =========================================
   INICIAR QUIZ
========================================= */

function startQuiz() {

    let filtered = [...questions];


    /* =========================
       FILTRO POR ÁREA
    ========================= */

    if (areaSelect.value !== "Todas") {

        filtered =
            filtered.filter(
                question =>
                    question.area ===
                    areaSelect.value
            );

    }


    /* =========================
       FILTRO POR DIFICULDADE
    ========================= */

    if (
        difficultySelect.value !==
        "Todas"
    ) {

        filtered =
            filtered.filter(
                question =>
                    question.difficulty ===
                    difficultySelect.value
            );

    }


    /* =========================
       VERIFICA QUESTÕES
    ========================= */

    if (filtered.length === 0) {

        showNoQuestions();

        return;

    }


    /* =========================
       EMBARALHA
    ========================= */

    shuffle(filtered);


    /* =========================
       MODO 20
    ========================= */

    if (
        modeSelect.value ===
        "simulado20"
    ) {

        filtered =
            filtered.slice(0, 20);

    }


    /* =========================
       MODO 40
    ========================= */

    if (
        modeSelect.value ===
        "simulado40"
    ) {

        filtered =
            filtered.slice(0, 40);

    }


    /* =========================
       SALVA QUESTÕES ATUAIS
    ========================= */

    currentQuestions = filtered;

    currentIndex = 0;

    selectedAnswer = null;

    answeredQuestion = false;


    /* =========================
       ZERA RESULTADO DO SIMULADO
    ========================= */

    simulationStats = {
        answered: 0,
        correct: 0,
        wrong: 0
    };


    renderQuestion();

}


/* =========================================
   NENHUMA QUESTÃO
========================================= */

function showNoQuestions() {

    const quiz =
        document.getElementById("quiz");

    quiz.innerHTML = `

        <div class="welcome">

            <h2>
                Nenhuma questão encontrada.
            </h2>

            <p>
                Não existem questões para
                os filtros selecionados.
            </p>

            <p>
                Tente escolher outra área
                ou dificuldade.
            </p>

        </div>

    `;

}


/* =========================================
   MOSTRAR QUESTÃO
========================================= */

function renderQuestion() {

    selectedAnswer = null;

    answeredQuestion = false;


    if (
        currentQuestions.length === 0
    ) {

        showNoQuestions();

        return;

    }


    const question =
        currentQuestions[currentIndex];


    const quiz =
        document.getElementById("quiz");


    quiz.innerHTML = `

        <div class="progress">

            Questão
            ${currentIndex + 1}
            de
            ${currentQuestions.length}

        </div>


        <span class="area">

            ${escapeHtml(question.area)}

        </span>


        <span class="difficulty">

            ${escapeHtml(question.difficulty)}

        </span>


        <div class="question">

            ${escapeHtml(question.question)}

        </div>


        ${
            question.code
                ? `
                    <pre>${escapeHtml(question.code)}</pre>
                  `
                : ""
        }


        <div class="options">

            ${
                question.options
                    .map(
                        (option, index) => {

                            const letter =
                                String.fromCharCode(
                                    65 + index
                                );

                            return `

                                <div
                                    class="option"
                                    data-letter="${letter}"
                                >

                                    <strong>
                                        ${letter})
                                    </strong>

                                    ${escapeHtml(
                                        removeOptionLetter(option)
                                    )}

                                </div>

                            `;

                        }
                    )
                    .join("")
            }

        </div>


        <div class="correction-area">

            <button
                id="correctBtn"
                class="correct-btn"
                disabled
            >

                ✓ Corrigir questão

            </button>

        </div>


        <div
            id="feedback"
            class="feedback"
        >

            <h3
                id="feedbackTitle"
            ></h3>


            <div
                id="feedbackText"
                class="explanation"
            ></div>

        </div>


        <div class="navigation">

            <button
                id="previousBtn"
                ${currentIndex === 0 ? "disabled" : ""}
            >

                ◀ Anterior

            </button>


            <button
                id="nextBtn"
                disabled
            >

                Próxima ▶

            </button>

        </div>

    `;


    /* =========================
       ALTERNATIVAS
    ========================= */

    document
        .querySelectorAll(".option")
        .forEach(option => {

            option.addEventListener(
                "click",
                function() {

                    selectOption(this);

                }
            );

        });


    /* =========================
       CORRIGIR
    ========================= */

    document
        .getElementById("correctBtn")
        .addEventListener(
            "click",
            function() {

                correctQuestion(question);

            }
        );


    /* =========================
       PRÓXIMA
    ========================= */

    document
        .getElementById("nextBtn")
        .addEventListener(
            "click",
            nextQuestion
        );


    /* =========================
       ANTERIOR
    ========================= */

    document
        .getElementById("previousBtn")
        .addEventListener(
            "click",
            previousQuestion
        );

}


/* =========================================
   REMOVER A), B), C), D)
========================================= */

function removeOptionLetter(option) {

    if (
        typeof option !== "string"
    ) {

        return option;

    }


    return option.replace(
        /^\s*[A-D]\)\s*/,
        ""
    );

}


/* =========================================
   SELECIONAR ALTERNATIVA
========================================= */

function selectOption(element) {

    if (answeredQuestion) {

        return;

    }


    document
        .querySelectorAll(".option")
        .forEach(option => {

            option.classList.remove(
                "selected"
            );

        });


    element.classList.add("selected");


    selectedAnswer =
        element.dataset.letter;


    const correctButton =
        document.getElementById(
            "correctBtn"
        );


    if (correctButton) {

        correctButton.disabled = false;

    }

}


/* =========================================
   CORRIGIR QUESTÃO
========================================= */

function correctQuestion(question) {

    if (answeredQuestion) {

        return;

    }


    if (!selectedAnswer) {

        alert(
            "Selecione uma alternativa antes de corrigir."
        );

        return;

    }


    answeredQuestion = true;


    const options =
        document.querySelectorAll(
            ".option"
        );


    options.forEach(option => {

        const letter =
            option.dataset.letter;


        /* =========================
           RESPOSTA CORRETA
        ========================= */

        if (
            letter ===
            question.answer
        ) {

            option.classList.add(
                "correct"
            );

        }


        /* =========================
           RESPOSTA ERRADA
        ========================= */

        if (
            letter === selectedAnswer &&
            selectedAnswer !== question.answer
        ) {

            option.classList.add(
                "wrong"
            );

        }


        /* =========================
           DESABILITA CLIQUE
        ========================= */

        option.style.cursor =
            "default";

    });


    /* =========================
       ESTATÍSTICAS GERAIS
    ========================= */

    stats.answered++;


    /* =========================
       ESTATÍSTICAS DO SIMULADO
    ========================= */

    simulationStats.answered++;


    const feedback =
        document.getElementById(
            "feedback"
        );


    const feedbackTitle =
        document.getElementById(
            "feedbackTitle"
        );


    const feedbackText =
        document.getElementById(
            "feedbackText"
        );


    /* =========================
       ACERTO
    ========================= */

    if (
        selectedAnswer ===
        question.answer
    ) {

        stats.correct++;

        simulationStats.correct++;


        feedback.className =
            "feedback ok";


        feedbackTitle.textContent =
            "✓ Resposta correta!";

    }


    /* =========================
       ERRO
    ========================= */

    else {

        stats.wrong++;

        simulationStats.wrong++;


        feedback.className =
            "feedback error";


        feedbackTitle.textContent =
            "✗ Resposta incorreta";

    }


    /* =========================
       FEEDBACK
    ========================= */

    feedbackText.innerHTML = `

        <strong>
            Gabarito:
        </strong>

        ${escapeHtml(question.answer)}

        <br><br>

        <strong>
            Explicação:
        </strong>

        <br>

        ${escapeHtml(
            question.explanation ||
            "Nenhuma explicação cadastrada."
        )}

        <br><br>

        <strong>
            ⚠ Pegadinha da questão:
        </strong>

        <br>

        ${escapeHtml(
            question.trap ||
            "Nenhuma pegadinha cadastrada."
        )}

    `;


    /* =========================
       BOTÃO CORRIGIR
    ========================= */

    document
        .getElementById("correctBtn")
        .disabled = true;


    /* =========================
       PRÓXIMA
    ========================= */

    document
        .getElementById("nextBtn")
        .disabled = false;


    /* =========================
       ATUALIZA ESTATÍSTICAS
    ========================= */

    updateStats();

}


/* =========================================
   PRÓXIMA QUESTÃO
========================================= */

function nextQuestion() {

    if (!answeredQuestion) {

        alert(
            "Selecione uma alternativa e clique em 'Corrigir questão' antes de continuar."
        );

        return;

    }


    if (
        currentIndex <
        currentQuestions.length - 1
    ) {

        currentIndex++;

        renderQuestion();

    }

    else {

        showFinished();

    }

}


/* =========================================
   QUESTÃO ANTERIOR
========================================= */

function previousQuestion() {

    if (currentIndex <= 0) {

        return;

    }


    /*
        Por enquanto voltamos para a questão
        sem alterar as estatísticas.
    */

    currentIndex--;

    renderQuestion();

}


/* =========================================
   FINAL DO SIMULADO
========================================= */

function showFinished() {

    const total =
        currentQuestions.length;


    const quiz =
        document.getElementById("quiz");


    const percentage =
        simulationStats.answered === 0
            ? 0
            : (
                simulationStats.correct /
                simulationStats.answered *
                100
            ).toFixed(1);


    quiz.innerHTML = `

        <div class="welcome">

            <h2>
                🎯 Simulado concluído!
            </h2>


            <p>

                Você concluiu
                <strong>
                    ${total}
                </strong>
                questões.

            </p>


            <div class="resultado-final">

                <h3>
                    Resultado deste simulado
                </h3>


                <p>

                    Questões respondidas:
                    <strong>
                        ${simulationStats.answered}
                    </strong>

                </p>


                <p>

                    Acertos:
                    <strong>
                        ${simulationStats.correct}
                    </strong>

                </p>


                <p>

                    Erros:
                    <strong>
                        ${simulationStats.wrong}
                    </strong>

                </p>


                <p>

                    Aproveitamento:
                    <strong>
                        ${percentage}%
                    </strong>

                </p>

            </div>


            <button
                id="restartButton"
                class="btn-primary"
            >

                Fazer novamente

            </button>


            <button
                id="backButton"
                class="btn-purple"
                style="margin-left: 10px;"
            >

                Voltar ao início

            </button>

        </div>

    `;


    /* =========================
       FAZER NOVAMENTE
    ========================= */

    document
        .getElementById("restartButton")
        .addEventListener(
            "click",
            startQuiz
        );


    /* =========================
       VOLTAR
    ========================= */

    document
        .getElementById("backButton")
        .addEventListener(
            "click",
            function() {

                location.reload();

            }
        );

}


/* =========================================
   ESCAPAR HTML
========================================= */

function escapeHtml(text) {

    if (
        text === null ||
        text === undefined
    ) {

        return "";

    }


    return String(text)

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            '"',
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );

}


/* =========================================
   EMBARALHAR BANCO
========================================= */

document
    .getElementById("shuffleBtn")
    .addEventListener(
        "click",
        function() {

            shuffle(questions);


            alert(
                "Banco de questões embaralhado com sucesso!"
            );


            updateStats();

        }
    );


/* =========================================
   BOTÃO INICIAR
========================================= */

document
    .getElementById("startBtn")
    .addEventListener(
        "click",
        startQuiz
    );


/* =========================================
   BOTÃO COMEÇAR ESTUDOS
========================================= */

document
    .getElementById("welcomeStart")
    .addEventListener(
        "click",
        startQuiz
    );


/* =========================================
   ZERAR ESTATÍSTICAS
========================================= */

document
    .getElementById("resetBtn")
    .addEventListener(
        "click",
        function() {

            const confirmReset =
                confirm(
                    "Deseja realmente zerar todas as estatísticas?"
                );


            if (!confirmReset) {

                return;

            }


            stats = {
                answered: 0,
                correct: 0,
                wrong: 0
            };


            updateStats();


            alert(
                "Estatísticas zeradas com sucesso!"
            );

        }
    );


/* =========================================
   INICIALIZAÇÃO
========================================= */

loadAreas();

updateStats();


console.log(
    "Simulador iniciado.",
    "Total de questões:",
    questions.length
);
