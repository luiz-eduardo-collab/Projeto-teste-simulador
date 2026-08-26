/* =========================================
   VARIÁVEIS DO SISTEMA
========================================= */

let currentQuestions = [];

let currentIndex = 0;

let selectedAnswer = null;

let answeredQuestion = false;


/* =========================================
   ESTATÍSTICAS
========================================= */

let stats =
    JSON.parse(
        localStorage.getItem("stats")
    )
    ||
    {
        answered: 0,
        correct: 0,
        wrong: 0
    };


/* =========================================
   ELEMENTOS
========================================= */

const areaSelect =
    document.getElementById(
        "areaSelect"
    );


const difficultySelect =
    document.getElementById(
        "difficultySelect"
    );


const modeSelect =
    document.getElementById(
        "modeSelect"
    );


/* =========================================
   CARREGAR ÁREAS
========================================= */

function loadAreas() {

    const areas =
        [
            ...new Set(
                questions.map(
                    question =>
                        question.area
                )
            )
        ];


    areas.forEach(area => {

        const option =
            document.createElement(
                "option"
            );


        option.value = area;

        option.textContent = area;


        areaSelect.appendChild(
            option
        );

    });

}


/* =========================================
   ATUALIZAR ESTATÍSTICAS
========================================= */

function updateStats() {

    document
        .getElementById(
            "totalQuestions"
        )
        .textContent =
            questions.length;


    document
        .getElementById(
            "answered"
        )
        .textContent =
            stats.answered;


    document
        .getElementById(
            "correct"
        )
        .textContent =
            stats.correct;


    document
        .getElementById(
            "wrong"
        )
        .textContent =
            stats.wrong;


    const accuracy =
        stats.answered === 0
            ? 0
            :
            (
                stats.correct /
                stats.answered *
                100
            ).toFixed(1);


    document
        .getElementById(
            "accuracy"
        )
        .textContent =
            accuracy + "%";


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
                Math.random() *
                (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }


    return array;
}


/* =========================================
   INICIAR
========================================= */

function startQuiz() {

    let filtered =
        [...questions];


    /*
        FILTRO POR ÁREA
    */

    if (
        areaSelect.value !==
        "Todas"
    ) {

        filtered =
            filtered.filter(
                question =>
                    question.area ===
                    areaSelect.value
            );

    }


    /*
        FILTRO POR DIFICULDADE
    */

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


    /*
        EMBARALHAR
    */

    shuffle(filtered);


    /*
        MODO SIMULADO 20
    */

    if (
        modeSelect.value ===
        "simulado20"
    ) {

        filtered =
            filtered.slice(0, 20);

    }


    /*
        MODO SIMULADO 40
    */

    if (
        modeSelect.value ===
        "simulado40"
    ) {

        filtered =
            filtered.slice(0, 40);

    }


    currentQuestions =
        filtered;


    currentIndex = 0;


    renderQuestion();

}


/* =========================================
   MOSTRAR QUESTÃO
========================================= */

function renderQuestion() {

    /*
        Limpa resposta anterior
    */

    selectedAnswer = null;

    answeredQuestion = false;


    /*
        Verifica se existem questões
    */

    if (
        currentQuestions.length === 0
    ) {

        document
            .getElementById("quiz")
            .innerHTML = `

                <div class="welcome">

                    <h2>
                        Nenhuma questão encontrada.
                    </h2>

                    <p>
                        Tente selecionar
                        outros filtros.
                    </p>

                </div>

            `;

        return;
    }


    const question =
        currentQuestions[
            currentIndex
        ];


    const quiz =
        document.getElementById(
            "quiz"
        );


    /*
        GERA A QUESTÃO
    */

    quiz.innerHTML = `

        <div class="progress">

            Questão
            ${currentIndex + 1}
            de
            ${currentQuestions.length}

        </div>


        <span class="area">

            ${question.area}

        </span>


        <span class="difficulty">

            ${question.difficulty}

        </span>


        <div class="question">

            ${question.question}

        </div>


        ${
            question.code
                ?
                `
                    <pre>
${escapeHtml(question.code)}
                    </pre>
                `
                :
                ""
        }


        <div class="options">

            ${


                question.options
                    .map(
                        (
                            option,
                            index
                        ) => `

                            <div
                                class="option"
                                data-letter="${String.fromCharCode(
                                    65 + index
                                )}"
                            >

                                ${option}

                            </div>

                        `
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


    /*
        CONFIGURA AS ALTERNATIVAS
    */

    document
        .querySelectorAll(
            ".option"
        )
        .forEach(option => {

            option.addEventListener(
                "click",
                function() {

                    selectOption(
                        this
                    );

                }
            );

        });


    /*
        BOTÃO CORRIGIR
    */

    document
        .getElementById(
            "correctBtn"
        )
        .addEventListener(
            "click",
            function() {

                correctQuestion(
                    question
                );

            }
        );


    /*
        BOTÃO PRÓXIMA
    */

    document
        .getElementById(
            "nextBtn"
        )
        .addEventListener(
            "click",
            nextQuestion
        );


    /*
        BOTÃO ANTERIOR
    */

    document
        .getElementById(
            "previousBtn"
        )
        .addEventListener(
            "click",
            previousQuestion
        );

}


/* =========================================
   SELECIONAR ALTERNATIVA
========================================= */

function selectOption(element) {

    /*
        Se já corrigiu,
        não permite alterar.
    */

    if (answeredQuestion) {

        return;

    }


    /*
        Remove seleção anterior
    */

    document
        .querySelectorAll(
            ".option"
        )
        .forEach(option => {

            option.classList.remove(
                "selected"
            );

        });


    /*
        Destaca a alternativa
    */

    element.classList.add(
        "selected"
    );


    /*
        Guarda a resposta
    */

    selectedAnswer =
        element.dataset.letter;


    /*
        Habilita CORRIGIR
    */

    const correctButton =
        document.getElementById(
            "correctBtn"
        );


    if (correctButton) {

        correctButton.disabled =
            false;

    }

}


/* =========================================
   CORRIGIR
========================================= */

function correctQuestion(
    question
) {

    /*
        Impede segunda correção
    */

    if (answeredQuestion) {

        return;

    }


    /*
        Verifica seleção
    */

    if (!selectedAnswer) {

        alert(
            "Selecione uma alternativa antes de corrigir."
        );

        return;

    }


    /*
        Marca como corrigida
    */

    answeredQuestion = true;


    /*
        Pega alternativas
    */

    const options =
        document.querySelectorAll(
            ".option"
        );


    /*
        Mostra correta
        e errada
    */

    options.forEach(option => {

        const letter =
            option.dataset.letter;


        /*
            Resposta correta
        */

        if (
            letter ===
            question.answer
        ) {

            option.classList.add(
                "correct"
            );

        }


        /*
            Resposta escolhida
            mas incorreta
        */

        if (
            letter ===
                selectedAnswer
            &&
            selectedAnswer !==
                question.answer
        ) {

            option.classList.add(
                "wrong"
            );

        }

    });


    /*
        Atualiza estatísticas
    */

    stats.answered++;


    /*
        Verifica acerto
    */

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


    if (
        selectedAnswer ===
        question.answer
    ) {

        stats.correct++;


        feedback.className =
            "feedback ok";


        feedbackTitle.textContent =
            "✓ Resposta correta!";

    }

    else {

        stats.wrong++;


        feedback.className =
            "feedback error";


        feedbackTitle.textContent =
            "✗ Resposta incorreta";

    }


    /*
        Explicação
    */

    feedbackText.innerHTML = `

        <strong>
            Gabarito:
        </strong>

        ${question.answer}

        <br><br>


        <strong>
            Explicação:
        </strong>

        <br>

        ${question.explanation}

        <br><br>


        <strong>
            ⚠ Pegadinha da questão:
        </strong>

        <br>

        ${question.trap}

    `;


    /*
        Desabilita corrigir
    */

    document
        .getElementById(
            "correctBtn"
        )
        .disabled = true;


    /*
        Libera próxima
    */

    document
        .getElementById(
            "nextBtn"
        )
        .disabled = false;


    /*
        Atualiza painel
    */

    updateStats();

}


/* =========================================
   PRÓXIMA QUESTÃO
========================================= */

function nextQuestion() {

    /*
        Não deixa avançar sem corrigir
    */

    if (!answeredQuestion) {

        alert(
            "Selecione uma alternativa e clique em 'Corrigir questão' antes de continuar."
        );

        return;

    }


    /*
        Ainda existem questões
    */

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

    if (
        currentIndex > 0
    ) {

        currentIndex--;

        renderQuestion();

    }

}


/* =========================================
   FINAL DO SIMULADO
========================================= */

function showFinished() {

    const total =
        currentQuestions.length;


    /*
        Calcula apenas o resultado
        deste simulado
    */

    let simulationCorrect = 0;


    /*
        Não temos histórico individual
        nesta versão, então mostramos
        o painel geral.
    */

    const quiz =
        document.getElementById(
            "quiz"
        );


    quiz.innerHTML = `

        <div class="welcome">

            <h2>
                🎯 Simulado concluído!
            </h2>


            <p>
                Você concluiu
                ${total}
                questões.
            </p>


            <div class="resultado-final">

                <h3>
                    Resultado geral
                </h3>


                <p>
                    Questões respondidas:
                    <strong>
                        ${stats.answered}
                    </strong>
                </p>


                <p>
                    Acertos:
                    <strong>
                        ${stats.correct}
                    </strong>
                </p>


                <p>
                    Erros:
                    <strong>
                        ${stats.wrong}
                    </strong>
                </p>


                <p>
                    Aproveitamento:
                    <strong>
                        ${
                            stats.answered === 0
                                ? 0
                                :
                                (
                                    stats.correct /
                                    stats.answered *
                                    100
                                ).toFixed(1)
                        }%
                    </strong>
                </p>

            </div>


            <button
                id="restartButton"
                class="btn-primary"
            >

                Fazer novamente

            </button>

        </div>

    `;


    document
        .getElementById(
            "restartButton"
        )
        .addEventListener(
            "click",
            startQuiz
        );

}


/* =========================================
   ESCAPAR HTML
========================================= */

function escapeHtml(text) {

    if (!text) {

        return "";

    }


    return text

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
        );

}


/* =========================================
   EMBARALHAR BANCO
========================================= */

document
    .getElementById(
        "shuffleBtn"
    )
    .addEventListener(
        "click",
        function() {

            shuffle(
                questions
            );


            alert(
                "Banco de questões embaralhado com sucesso!"
            );

        }
    );


/* =========================================
   INICIAR
========================================= */

document
    .getElementById(
        "startBtn"
    )
    .addEventListener(
        "click",
        startQuiz
    );


document
    .getElementById(
        "welcomeStart"
    )
    .addEventListener(
        "click",
        startQuiz
    );


/* =========================================
   ZERAR ESTATÍSTICAS
========================================= */

document
    .getElementById(
        "resetBtn"
    )
    .addEventListener(
        "click",
        function() {

            const confirmReset =
                confirm(
                    "Deseja realmente zerar todas as estatísticas?"
                );


            if (
                confirmReset
            ) {

                stats = {

                    answered: 0,

                    correct: 0,

                    wrong: 0

                };


                updateStats();

            }

        }
    );


/* =========================================
   INICIALIZAÇÃO
========================================= */

loadAreas();

updateStats();
