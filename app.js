document.addEventListener("DOMContentLoaded", () => {
    const areaSelect = document.getElementById("areaSelect");
    const difficultySelect = document.getElementById("difficultySelect");
    const modeSelect = document.getElementById("modeSelect");
    const startBtn = document.getElementById("startBtn");
    const shuffleBtn = document.getElementById("shuffleBtn");
    const resetStatsBtn = document.getElementById("resetBtn");
    const quiz = document.getElementById("quiz");

    const totalQuestionsEl = document.getElementById("totalQuestions");
    const answeredEl = document.getElementById("answered");
    const correctEl = document.getElementById("correct");
    const wrongEl = document.getElementById("wrong");
    const accuracyEl = document.getElementById("accuracy");

    // 1. Popula o select de áreas
    if (areaSelect && typeof questions !== 'undefined' && Array.isArray(questions)) {
        const areasUnicas = [...new Set(questions.map(q => q.area))];
        areaSelect.innerHTML = '<option value="Todas">Todas</option>';
        areasUnicas.forEach(area => {
            if (area) {
                const option = document.createElement("option");
                option.value = area;
                option.textContent = area;
                areaSelect.appendChild(option);
            }
        });
    }

    // Função auxiliar para embaralhar (Fisher-Yates)
    function embaralharArray(array) {
        let arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // 2. Ação do botão Iniciar
    if (startBtn && quiz && typeof questions !== 'undefined') {
        startBtn.addEventListener("click", () => {
            const selectedArea = areaSelect ? areaSelect.value : "Todas";
            const selectedDiff = difficultySelect ? difficultySelect.value : "Todas";
            
            // Pega o texto ou o valor selecionado no modo e extrai números (ex: "simulado20" ou "Simulado - 20 questões" vira 20)
            let limiteDesejado = null;
            if (modeSelect) {
                const textoModo = modeSelect.options[modeSelect.selectedIndex].text;
                const valorModo = modeSelect.value;
                
                // Tenta achar números no value ou no texto da opção selecionada
                const matchValor = valorModo.match(/\d+/);
                const matchTexto = textoModo.match(/\d+/);
                
                if (matchValor) {
                    limiteDesejado = parseInt(matchValor[0]);
                } else if (matchTexto) {
                    limiteDesejado = parseInt(matchTexto[0]);
                }
            }

            // Filtra as questões pelo tópico e dificuldade selecionados
            let filtradas = questions.filter(q => {
                const matchArea = selectedArea === "Todas" || q.area === selectedArea;
                const matchDiff = selectedDiff === "Todas" || q.difficulty === selectedDiff;
                return matchArea && matchDiff;
            });

            if (filtradas.length === 0) {
                quiz.innerHTML = `<div class="welcome"><h3>Nenhuma questão encontrada</h3><p>Tente mudar o filtro.</p></div>`;
                return;
            }

            // Embaralha e aplica o limite se houver um número válido identificado
            filtradas = embaralharArray(filtradas);
            if (limiteDesejado && !isNaN(limiteDesejado) && filtradas.length > limiteDesejado) {
                filtradas = filtradas.slice(0, limiteDesejado);
            }

            let currentIndex = 0;
            let acertos = 0;
            let erros = 0;

            function atualizarPlacar() {
                if (totalQuestionsEl) totalQuestionsEl.textContent = filtradas.length;
                if (answeredEl) answeredEl.textContent = currentIndex;
                if (correctEl) correctEl.textContent = acertos;
                if (wrongEl) wrongEl.textContent = erros;
                if (accuracyEl) {
                    const totalRespondidas = acertos + erros;
                    const taxa = totalRespondidas > 0 ? Math.round((acertos / totalRespondidas) * 100) : 0;
                    accuracyEl.textContent = taxa + "%";
                }
            }

            function mostrarQuestao() {
                if (currentIndex >= filtradas.length) {
                    quiz.innerHTML = `
                        <div class="welcome" style="padding: 20px; background: #fff; border-radius: 8px; text-align: center;">
                            <h2>Simulado Finalizado! 🎉</h2>
                            <p>Você acertou ${acertos} de ${filtradas.length} questões.</p>
                            <button id="reiniciarBtn" class="start-btn" style="margin-top: 15px; padding: 10px 20px; cursor: pointer; background-color: #0056b3; color: white; border: none; border-radius: 4px;">Tentar Novamente</button>
                        </div>
                    `;
                    document.getElementById("reiniciarBtn").addEventListener("click", () => {
                        quiz.innerHTML = "";
                        acertos = 0;
                        erros = 0;
                        currentIndex = 0;
                        atualizarPlacar();
                    });
                    return;
                }

                const q = filtradas[currentIndex];
                const opcoes = Array.isArray(q.options) ? q.options : [];
                let respostaSelecionada = null;

                quiz.innerHTML = `
                    <div class="question-card" style="padding: 25px; background: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <span style="font-size: 0.85rem; color: #555;">Questão ${currentIndex + 1} de ${filtradas.length} | Tópico: <strong>${q.area}</strong> | Nível: <strong>${q.difficulty}</strong></span>
                        
                        <p style="font-size: 1.2rem; margin: 18px 0; font-weight: 600; color: #111; line-height: 1.5;"><strong>${q.question}</strong></p>
                        
                        ${q.code ? `<pre style="background: #ffffff; padding: 15px; border-radius: 6px; overflow-x: auto; border: 2px solid #cbd5e1; font-family: monospace; font-size: 1.1rem; color: #0f172a; font-weight: 600; line-height: 1.6;"><code>${q.code}</code></pre>` : ''}
                        
                        <div class="options-container" style="display: flex; flex-direction: column; gap: 12px; margin-top: 20px;">
                            ${opcoes.map((op) => {
                                const letra = String(op).trim().charAt(0);
                                return `<button class="opt-btn" data-letra="${letra}" style="padding: 12px 18px; text-align: left; cursor: pointer; border: 1px solid #ccc; border-radius: 6px; background: #f9f9f9; color: #212529; font-size: 1rem; font-weight: 500;">${op}</button>`;
                            }).join('')}
                        </div>

                        <div style="margin-top: 20px; display: flex; gap: 10px;">
                            <button id="corrigirBtn" style="padding: 10px 20px; display: none; cursor: pointer; background-color: #007bff; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: 600;">Corrigir</button>
                            <button id="nextBtn" style="padding: 10px 20px; display: none; cursor: pointer; background-color: #28a745; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: 600;">Próxima Questão</button>
                        </div>

                        <div id="feedback" style="margin-top: 20px; font-weight: 600; font-size: 1.1rem;"></div>
                    </div>
                `;

                atualizarPlacar();

                const optButtons = quiz.querySelectorAll(".opt-btn");
                const corrigirBtn = document.getElementById("corrigirBtn");
                const feedbackEl = document.getElementById("feedback");
                const nextBtn = document.getElementById("nextBtn");

                optButtons.forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        optButtons.forEach(b => {
                            b.style.background = "#f9f9f9";
                            b.style.borderColor = "#ccc";
                        });
                        e.target.style.background = "#e2e6ea";
                        e.target.style.borderColor = "#007bff";
                        respostaSelecionada = e.target.getAttribute("data-letra");
                        corrigirBtn.style.display = "inline-block";
                    });
                });

                corrigirBtn.addEventListener("click", () => {
                    if (!respostaSelecionada) return;

                    optButtons.forEach(b => b.disabled = true);
                    corrigirBtn.style.display = "none";

                    const correta = q.answer ? q.answer.trim() : "";

                    if (respostaSelecionada === correta) {
                        acertos++;
                        feedbackEl.innerHTML = `<span style="color: #155724;">Correto! 🎉 ${q.explanation || ""}</span>`;
                        optButtons.forEach(b => {
                            if (b.getAttribute("data-letra") === correta) {
                                b.style.background = "#d4edda";
                                b.style.borderColor = "#c3e6cb";
                                b.style.color = "#155724";
                            }
                        });
                    } else {
                        erros++;
                        feedbackEl.innerHTML = `<span style="color: #721c24;">Incorreto. ❌ A resposta certa era a letra ${correta}. ${q.explanation || ""}</span>`;
                        optButtons.forEach(b => {
                            if (b.getAttribute("data-letra") === correta) {
                                b.style.background = "#d4edda";
                                b.style.borderColor = "#c3e6cb";
                                b.style.color = "#155724";
                            } else if (b.getAttribute("data-letra") === respostaSelecionada) {
                                b.style.background = "#f8d7da";
                                b.style.borderColor = "#f5c6cb";
                                b.style.color = "#721c24";
                            }
                        });
                    }

                    atualizarPlacar();
                    nextBtn.style.display = "inline-block";
                });

                if (shuffleBtn) {
                    shuffleBtn.onclick = () => {
                        filtradas = embaralharArray(filtradas);
                        currentIndex = 0;
                        acertos = 0;
                        erros = 0;
                        alert("Questões embaralhadas e reiniciadas!");
                        mostrarQuestao();
                    };
                }

                if (resetStatsBtn) {
                    resetStatsBtn.onclick = () => {
                        acertos = 0;
                        erros = 0;
                        currentIndex = 0;
                        atualizarPlacar();
                        mostrarQuestao();
                        alert("Estatísticas zeradas e teste reiniciado do início!");
                    };
                }

                nextBtn.addEventListener("click", () => {
                    currentIndex++;
                    mostrarQuestao();
                });
            }

            mostrarQuestao();
        });
    }
});
