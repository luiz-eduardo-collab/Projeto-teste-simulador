/* =====================================================
   SIMULADO UNIFIL - ANALISTA DE TIC
   SISTEMA PRINCIPAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       ELEMENTOS DA PÁGINA
    ================================================= */

    const areaSelect = document.getElementById("areaSelect");
    const difficultySelect = document.getElementById("difficultySelect");
    const modeSelect = document.getElementById("modeSelect");

    const startBtn = document.getElementById("startBtn");
    const shuffleBtn = document.getElementById("shuffleBtn");
    const resetBtn = document.getElementById("resetBtn");
    const welcomeStart = document.getElementById("welcomeStart");

    const quiz = document.getElementById("quiz");

    const totalQuestions = document.getElementById("totalQuestions");
    const answered = document.getElementById("answered");
    const correct = document.getElementById("correct");
    const wrong = document.getElementById("wrong");
    const accuracy = document.getElementById("accuracy");


    /* =================================================
       VERIFICAÇÃO DO BANCO
    ================================================= */

    if (!Array.isArray(window.questions)) {

        quiz.innerHTML = `
            <div class="welcome">

                <h2>Erro ao carregar questões</h2>

                <p>
                    O arquivo <strong>perguntas.js</strong>
                    não foi carregado corretamente.
                </p>

                <p>
                    Verifique se <strong>perguntas.js</strong>
                    está na mesma pasta do <strong>index.html</strong>.
                </p>

            </div>
        `;

        return;
    }


    /* =================================================
       VARIÁVEIS DO SISTEMA
    ================================================= */

    let questionBank = [...questions];

    let currentQuestions = [];

    let currentIndex = 0;

    let selectedAnswer = null;

    let questionAnswered = false;

    let shuffled = false;


    /* =================================================
       ESTATÍSTICAS
    ================================================= */

    let stats = {
        answered: 0,
        correct: 0,
        wrong: 0
    };


    /* =================================================
       CRIA FILTROS DE ÁREA
    ================================================= */

    function loadAreas() {

        const areas = [
            ...new Set(
                questionBank.map(question => question.area)
            )
        ];

        areas.sort((a, b) => a.localeCompare(b));

        areaSelect.innerHTML = `
            <option value="Todas">
                Todas
            </option>
        `;

        areas.forEach(area => {

            const option = document.createElement("option");

            option.value = area;

            option.textContent = area;

            areaSelect.appendChild(option);

        });
    }


    /* =================================================
       ATUALIZA ESTATÍSTICAS
    ================================================= */

    function updateStats() {

        totalQuestions.textContent =
            currentQuestions.length;

        answered.textContent =
            stats.answered;

        correct.textContent =
            stats.correct;

        wrong.textContent =
            stats.wrong;

        const percentage =
            stats.answered > 0
                ? Math.round(
                    (stats.correct / stats.answered) * 100
                )
                : 0;

        accuracy.textContent =
            percentage + "%";
    }


    /* =================================================
       EMBARALHAR ARRAY
    ================================================= */

    function shuffleArray(array) {

        const copy = [...array];

        for (
            let i = copy.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() * (i + 1)
                );

            [
                copy[i],
                copy[j]
            ] = [
                copy[j],
                copy[i]
            ];
        }

        return copy;
    }


    /* =================================================
       OBTÉM QUESTÕES PELOS FILTROS
    ================================================= */

    function getFilteredQuestions() {

        const selectedArea =
            areaSelect.value;

        const selectedDifficulty =
            difficultySelect.value;

        let filtered =
            questionBank.filter(question => {

                const areaOK =
                    selectedArea === "Todas" ||
                    question.area === selectedArea;

                const difficultyOK =
                    selectedDifficulty === "Todas" ||
                    question.difficulty === selectedDifficulty;

                return areaOK && difficultyOK;

            });


        /* =============================================
           EMBARALHAMENTO
        ============================================= */

        if (shuffled) {

            filtered =
                shuffleArray(filtered);

        }

        return filtered;
    }


    /* =================================================
       INICIA SIMULADO
    ================================================= */

    function startQuiz() {

        let filtered =
            getFilteredQuestions();


        if (filtered.length === 0) {

            quiz.innerHTML = `
                <div class="welcome">

                    <h2>Nenhuma questão encontrada</h2>

                    <p>
                        Não existem questões para
                        os filtros selecionados.
                    </p>

                    <button
                        class="btn-primary"
                        id="backBtn"
                    >
                        Voltar
                    </button>

                </div>
            `;

            document
                .getElementById("backBtn")
                .addEventListener(
                    "click",
                    showWelcome
                );

            return;
        }


        /* =============================================
           MODO DE PROVA
        ============================================= */

        const mode =
            modeSelect.value;

        if (mode === "simulado20") {

            filtered =
                filtered.slice(0, 20);

        }

        if (mode === "simulado40") {

            filtered =
                filtered.slice(0, 40);

        }


        currentQuestions =
            filtered;

        currentIndex = 0;

        selectedAnswer = null;

        questionAnswered = false;


        stats = {
            answered: 0,
            correct: 0,
            wrong: 0
        };


        updateStats();

        renderQuestion();
    }


    /* =================================================
       MOSTRA QUESTÃO
    ================================================= */

    function renderQuestion() {

        if (
            currentIndex >=
            currentQuestions.length
        ) {

            showResult();

            return;
        }


        const question =
            currentQuestions[currentIndex];


        selectedAnswer = null;

        questionAnswered = false;


        quiz.innerHTML = `

            <div class="progress">

                Questão
                ${currentIndex + 1}
                de
                ${currentQuestions.length}

            </div>


            <div>

                <span class="area">

                    ${escapeHTML(question.area)}

                </span>


                <span class="difficulty">

                    ${escapeHTML(question.difficulty)}

                </span>

            </div>


            <div class="question">

                ${escapeHTML(question.question)}

            </div>


            ${
                question.code
                    ? `
                        <pre><code>${escapeHTML(
                            question.code
                        )}</code></pre>
                      `
                    : ""
            }


            <div class="options">

                ${question.options
                    .map((option, index) => {

                        return `

                            <div
                                class="option"
                                data-index="${index}"
                            >
                                ${escapeHTML(option)}
                            </div>

                        `;

                    })
                    .join("")
                }

            </div>


            <div class="correction-area">

                <button
                    id="correctBtn"
                    class="correct-btn"
                    disabled
                >
                    Corrigir resposta
                </button>

            </div>


            <div
                id="feedback"
                class="feedback"
            ></div>


            <div class="navigation">

                <button
                    id="prevBtn"
                    ${currentIndex === 0 ? "disabled" : ""}
                >
                    ← Anterior
                </button>


                <button
                    id="nextBtn"
                    disabled
                >
                    ${
                        currentIndex ===
                        currentQuestions.length - 1
                            ? "Finalizar"
                            : "Próxima →"
                    }
                </button>

            </div>

        `;


        /* =============================================
           EVENTOS DAS ALTERNATIVAS
        ============================================= */

        const options =
            quiz.querySelectorAll(".option");

        options.forEach(option => {

            option.addEventListener(
                "click",
                function () {

                    if (questionAnswered) {
                        return;
                    }

                    options.forEach(item => {
                        item.classList.remove(
                            "selected"
                        );
                    });

                    this.classList.add(
                        "selected"
                    );

                    selectedAnswer =
                        Number(
                            this.dataset.index
                        );

                    document
                        .getElementById("correctBtn")
                        .disabled = false;

                }
            );

        });


        /* =============================================
           CORRIGIR
        ============================================= */

        document
            .getElementById("correctBtn")
            .addEventListener(
                "click",
                correctQuestion
            );


        /* =============================================
           ANTERIOR
        ============================================= */

        document
            .getElementById("prevBtn")
            .addEventListener(
                "click",
                function () {

                    if (currentIndex > 0) {

                        currentIndex--;

                        renderQuestion();

                    }

                }
            );


        /* =============================================
           PRÓXIMA
        ============================================= */

        document
            .getElementById("nextBtn")
            .addEventListener(
                "click",
                function () {

                    if (!questionAnswered) {
                        return;
                    }

                    currentIndex++;

                    renderQuestion();

                }
            );

    }


    /* =================================================
       CORRIGE QUESTÃO
    ================================================= */

    function correctQuestion() {

        if (
            selectedAnswer === null ||
            questionAnswered
        ) {
            return;
        }


        const question =
            currentQuestions[currentIndex];


        const selectedOption =
            question.options[selectedAnswer];


        const correctLetter =
            question.answer.trim().toUpperCase();


        const selectedLetter =
            selectedOption
                .trim()
                .charAt(0)
                .toUpperCase();


        const isCorrect =
            selectedLetter === correctLetter;


        questionAnswered = true;


        stats.answered++;


        if (isCorrect) {

            stats.correct++;

        } else {

            stats.wrong++;

        }


        updateStats();


        /* =============================================
           MARCA ALTERNATIVAS
        ============================================= */

        const options =
            quiz.querySelectorAll(".option");


        options.forEach(
            (option, index) => {

                const optionLetter =
                    question.options[index]
                        .trim()
                        .charAt(0)
                        .toUpperCase();


                if (
                    optionLetter ===
                    correctLetter
                ) {

                    option.classList.add(
                        "correct"
                    );

                }


                if (
                    index === selectedAnswer &&
                    !isCorrect
                ) {

                    option.classList.add(
                        "wrong"
                    );

                }


                option.style.cursor =
                    "default";

            }
        );


        /* =============================================
           FEEDBACK
        ============================================= */

        const feedback =
            document.getElementById(
                "feedback"
            );


        if (isCorrect) {

            feedback.className =
                "feedback ok";

            feedback.innerHTML = `

                <h3>✓ Resposta correta!</h3>

                <p class="explanation">

                    <strong>Explicação:</strong><br>

                    ${escapeHTML(
                        question.explanation
                    )}

                </p>

                ${
                    question.trap
                        ? `
                            <p class="explanation">

                                <strong>⚠ Pegadinha:</strong><br>

                                ${escapeHTML(
                                    question.trap
                                )}

                            </p>
                          `
                        : ""
                }

            `;

        } else {

            feedback.className =
                "feedback error";

            feedback.innerHTML = `

                <h3>✗ Resposta incorreta</h3>

                <p class="explanation">

                    <strong>Resposta correta:</strong>
                    ${escapeHTML(
                        question.answer
                    )}

                </p>


                <p class="explanation">

                    <strong>Explicação:</strong><br>

                    ${escapeHTML(
                        question.explanation
                    )}

                </p>

                ${
                    question.trap
                        ? `
                            <p class="explanation">

                                <strong>⚠ Pegadinha:</strong><br>

                                ${escapeHTML(
                                    question.trap
                                )}

                            </p>
                          `
                        : ""
                }

            `;

        }


        /* =============================================
           HABILITA PRÓXIMA
        ============================================= */

        document
            .getElementById("correctBtn")
            .disabled = true;


        document
            .getElementById("nextBtn")
            .disabled = false;

    }


    /* =================================================
       RESULTADO FINAL
    ================================================= */

    function showResult() {

        const percentage =
            stats.answered > 0
                ? Math.round(
                    (stats.correct /
                        stats.answered) * 100
                )
                : 0;


        let message = "";


        if (percentage >= 90) {

            message =
                "Excelente desempenho!";

        } else if (percentage >= 70) {

            message =
                "Bom desempenho! Continue estudando.";

        } else if (percentage >= 50) {

            message =
                "Desempenho intermediário. Revise os assuntos.";

        } else {

            message =
                "É hora de reforçar os estudos.";

        }


        quiz.innerHTML = `

            <div class="welcome">

                <h2>
                    Simulado finalizado!
                </h2>


                <p>
                    ${message}
                </p>


                <div class="resultado-final">

                    <p>
                        <strong>
                            Questões:
                        </strong>

                        ${currentQuestions.length}
                    </p>


                    <p>
                        <strong>
                            Respondidas:
                        </strong>

                        ${stats.answered}
                    </p>


                    <p>
                        <strong>
                            Acertos:
                        </strong>

                        ${stats.correct}
                    </p>


                    <p>
                        <strong>
                            Erros:
                        </strong>

                        ${stats.wrong}
                    </p>


                    <p>
                        <strong>
                            Aproveitamento:
                        </strong>

                        ${percentage}%
                    </p>

                </div>


                <button
                    id="restartBtn"
                    class="btn-primary"
                >
                    Fazer novamente
                </button>

            </div>

        `;


        document
            .getElementById("restartBtn")
            .addEventListener(
                "click",
                startQuiz
            );

    }


    /* =================================================
       TELA INICIAL
    ================================================= */

    function showWelcome() {

        quiz.innerHTML = `

            <div class="welcome">

                <h2>
                    Banco de Questões
                </h2>


                <p>
                    Prepare-se para o cargo de
                    Analista de Tecnologia da Informação
                    e Comunicação.
                </p>


                <p>
                    Escolha os filtros acima ou clique
                    em "Começar Estudos".
                </p>


                <ul>

                    <li>Lógica de Programação</li>

                    <li>Estruturas de Dados</li>

                    <li>
                        Programação Orientada a Objetos
                    </li>

                    <li>Java</li>

                    <li>Dart e Flutter</li>

                    <li>Banco de Dados</li>

                    <li>SQL</li>

                    <li>Desenvolvimento Web</li>

                    <li>Spring</li>

                    <li>REST e SOAP</li>

                    <li>UML</li>

                    <li>Arquitetura de Software</li>

                    <li>Design Patterns</li>

                    <li>DDD</li>

                    <li>Scrum e XP</li>

                    <li>Testes de Software</li>

                    <li>Git</li>

                    <li>
                        Criptografia e
                        Certificação Digital
                    </li>

                </ul>


                <button
                    id="welcomeStart"
                    class="btn-primary"
                >
                    Começar Estudos
                </button>

            </div>

        `;


        document
            .getElementById("welcomeStart")
            .addEventListener(
                "click",
                startQuiz
            );

    }


    /* =================================================
       ESCAPAR HTML
       
       Evita que códigos das questões
       sejam interpretados como HTML.
    ================================================= */

    function escapeHTML(value) {

        if (value === null ||
            value === undefined) {

            return "";

        }

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =================================================
       EMBARALHAR
    ================================================= */

    shuffleBtn.addEventListener(
        "click",
        function () {

            shuffled = true;

            startQuiz();

        }
    );


    /* =================================================
       INICIAR
    ================================================= */

    startBtn.addEventListener(
        "click",
        startQuiz
    );


    /* =================================================
       BOTÃO DA TELA INICIAL
    ================================================= */

    welcomeStart.addEventListener(
        "click",
        startQuiz
    );


    /* =================================================
       ZERAR ESTATÍSTICAS
    ================================================= */

    resetBtn.addEventListener(
        "click",
        function () {

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


    /* =================================================
       FILTROS ALTERADOS
    ================================================= */

    areaSelect.addEventListener(
        "change",
        function () {

            if (currentQuestions.length === 0) {

                updateStats();

            }

        }
    );


    difficultySelect.addEventListener(
        "change",
        function () {

            if (currentQuestions.length === 0) {

                updateStats();

            }

        }
    );


    modeSelect.addEventListener(
        "change",
        function () {

            if (currentQuestions.length === 0) {

                updateStats();

            }

        }
    );


    /* =================================================
       INICIALIZAÇÃO
    ================================================= */

    loadAreas();


    /*
       Mostra a quantidade total do banco
       inicialmente.
    */

    totalQuestions.textContent =
        questionBank.length;

    answered.textContent = "0";
    correct.textContent = "0";
    wrong.textContent = "0";
    accuracy.textContent = "0%";


    console.log(
        "Simulado carregado:",
        questionBank.length,
        "questões."
    );

});
