
/* =====================================================
   INICIALIZAÇÃO DO SISTEMA DE QUESTÕES
===================================================== */
window.questions = [];
let id = 1;

function addQuestion(area, difficulty, question, code, options, answer, explanation, trap){
    questions.push({
        id: id++,
        area,
        difficulty,
        question,
        code,
        options,
        answer,
        explanation,
        trap
    });
}

/* =====================================================
   BLOCO 1: LÓGICA DE PROGRAMAÇÃO (40 QUESTÕES)
===================================================== */

// --- Questões Originais Ajustadas ---
addQuestion(
    "Lógica de Programação", "Fácil",
    "Considere o algoritmo abaixo. Qual será o valor final de x?",
    "x = 6\ny = 3\n\nif(x > y){\n    x = x - y;\n}else{\n    x = x + y;\n}\n\nx = x * 2;",
    ["A) 6", "B) 18", "C) 3", "D) 6"],
    "A",
    "Inicialmente x=6 e y=3. Como x é maior que y, ocorre x=x-y, resultando em 3. Depois x é multiplicado por 2, chegando em 6.",
    "Acompanhe cada linha do algoritmo; a banca costuma explorar atribuições sequenciais."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Considere o algoritmo abaixo. Qual será o valor final de x?",
    "x = 7\ny = 4\n\nif(x > y){\n    x = x - y;\n}else{\n    x = x + y;\n}\n\nx = x * 2;",
    ["A) 6", "B) 22", "C) 3", "D) 7"],
    "A",
    "Inicialmente x=7 e y=4. Como x é maior que y, ocorre x=x-y, resultando em 3. Depois x é multiplicado por 2, chegando em 6.",
    "Acompanhe cada linha do algoritmo; a banca costuma explorar atribuições sequenciais."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Considere o algoritmo abaixo. Qual será o valor final de x?",
    "x = 8\ny = 2\n\nif(x > y){\n    x = x - y;\n}else{\n    x = x + y;\n}\n\nx = x * 2;",
    ["A) 12", "B) 20", "C) 6", "D) 8"],
    "A",
    "Inicialmente x=8 e y=2. Como x é maior que y, ocorre x=x-y, resultando em 6. Depois x é multiplicado por 2, chegando em 12.",
    "Acompanhe cada linha do algoritmo; a banca costuma explorar atribuições sequenciais."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor final impresso para a variável 'res' ao término do algoritmo abaixo?",
    "int res = 1;\nfor(int i = 1; i <= 5; i++){\n    if(i % 2 == 0){\n        res += i;\n    } else {\n        res -= 1;\n    }\n}\nSystem.out.println(res);",
    ["A) 4", "B) 7", "C) 6", "D) 5"],
    "C",
    "Passo a passo:\n- i=1 (ímpar): res = 1 - 1 = 0\n- i=2 (par): res = 0 + 2 = 2\n- i=3 (ímpar): res = 2 - 1 = 1\n- i=4 (par): res = 1 + 4 = 5\n- i=5 (ímpar): res = 5 - 1 = 4.",
    "Rastreie com atenção os operadores de atribuição acumulativa (+= e -=)."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual é o comportamento do algoritmo abaixo ao receber n = 5?",
    "int calc(int n){\n    if(n == 0) return 1;\n    return n * calc(n - 1);\n}",
    ["A) Retorna 5", "B) Retorna 120", "C) Retorna 25", "D) Entra em loop infinito"],
    "B",
    "O algoritmo calcula o fatorial de n. Para n=5, o resultado é 5 * 4 * 3 * 2 * 1 = 120.",
    "Caso base (n=0 retorna 1) interrompe a recursão com segurança."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Em lógica booleana, qual é o resultado da expressão abaixo?",
    "boolean v = (true && false) || (true && true);",
    ["A) true", "B) false", "C) null", "D) undefined"],
    "A",
    "(true && false) resulta em false. (true && true) resulta em true. Logo, false || true resulta em true.",
    "Avalie primeiro os parênteses internos antes do operador OR (||)."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor impresso após a execução do trecho de código com matrizes?",
    "int[][] m = {{1, 2}, {3, 4}};\nint s = 0;\nfor(int i=0; i<2; i++){\n    s += m[i][i];\n}\nSystem.out.println(s);",
    ["A) 4", "B) 5", "C) 10", "D) 3"],
    "B",
    "O código soma os elementos da diagonal principal da matriz (m[0][0] + m[1][1]), ou seja, 1 + 4 = 5.",
    "m[i][i] acessa exatamente a diagonal principal em matrizes quadradas."
);

addQuestion(
    "Lógica de Programação", "Média",
    "O que faz um algoritmo de ordenação do tipo Bubble Sort ao varrer um vetor?",
    "// Conceito teórico de Bubble Sort",
    ["A) Divide o vetor recursivamente ao meio", "B) Compara elementos adjacentes e os troca de posição se estiverem na ordem errada", "C) Cria uma tabela hash temporária", "D) Seleciona sempre o menor elemento restante"],
    "B",
    "O Bubble Sort flutua os maiores elementos para o final do vetor através de sucessivas trocas de elementos vizinhos.",
    "Eficiência O(n²) no pior caso."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual estrutura de controle condicional é mais recomendada para tratar múltiplas ramificações discretas de uma mesma variável inteira ou caractere?",
    "// Seleção múltipla por valor",
    ["A) if-else encadeado profundo", "B) switch-case", "C) do-while", "D) recursão terminal"],
    "B",
    "O comando switch-case melhora a legibilidade e a performance em testes de igualdade múltiplos para uma única variável.",
    "Evita a poluição visual de muitos ifs aninhados."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor de x ao final da execução do código abaixo?",
    "int x = 10;\nif(x > 5) x *= 2;\nif(x > 15) x -= 5;\nelse x += 5;",
    ["A) 20", "B) 15", "C) 25", "D) 10"],
    "B",
    "x inicia em 10. 10 > 5 é verdadeiro, logo x vira 20. Na segunda condição, 20 > 15 é verdadeiro, logo executa x -= 5, resultando em 15. O bloco else é ignorado.",
    "Cuidado: o segundo 'if' é independente do primeiro, mas o 'else' pertence estritamente ao segundo 'if'."
);

addQuestion(
    "Lógica de Programação", "Média",
    "O que avalia uma estrutura de repetição do tipo 'do-while' em relação ao 'while' tradicional?",
    "do { ... } while(condicao);",
    ["A) O bloco de código é executado ao menos uma vez, pois a condição é avaliada no final", "B) A condição é testada antes de qualquer execução", "C) Ela substitui obrigatoriamente recursões complexas", "D) Ela não aceita contadores numéricos"],
    "A",
    "No do-while, o corpo executa primeiro e a condição de parada é checada no fim.",
    "Garante pelo menos uma execução do bloco interno."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual operador lógico representa a negação (inversão do valor booleano) na maioria das linguagens de programação?",
    "// Operador unário de inversão",
    ["A) &&", "B) ||", "C) !", "D) =="],
    "C",
    "O ponto de exclamação (!) inverte o valor booleano (true vira false, e vice-versa).",
    "Operador unário de negação lógica."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o resultado da operação de módulo (resto da divisão) para a expressão abaixo em Java/C?",
    "int r = -7 % 3;",
    ["A) -1", "B) 1", "C) -2", "D) 2"],
    "A",
    "Em Java e C, o operador de módulo preserva o sinal do dividendo (o primeiro operando). Portanto, -7 % 3 resulta em -1.",
    "Fique atento às especificidades matemáticas versus a implementação de linguagens de programação."
);

// --- Novas Questões Adicionadas para Completar 40 ---

addQuestion(
    "Lógica de Programação", "Fácil",
    "O que representa um fluxograma em algoritmos?",
    "// Representação gráfica",
    ["A) A compilação binária de um programa", "B) A representação gráfica da lógica de um algoritmo através de símbolos padronizados", "C) Um banco de dados relacional em nuvem", "D) Uma ferramenta de estilização de páginas web"],
    "B",
    "O fluxograma utiliza formas geométricas para ilustrar o fluxo de execução e tomadas de decisão de um processo ou algoritmo.",
    "Símbolos comuns incluem retângulos para processamento e losangos para decisões."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual é o tipo de dado adequado para armazenar valores lógicos que assumem apenas verdadeiro ou falso?",
    "// Tipagem básica",
    ["A) String", "B) int", "C) boolean", "D) double"],
    "C",
    "O tipo boolean armazena exclusivamente os estados verdadeiro (true) ou falso (false).",
    "Essencial para testes condicionais."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Em uma atribuição matemática em programação como 'x = x + 1', qual é a operação realizada comumente conhecida?",
    "x = x + 1;",
    ["A) Decremento", "B) Incremento", "C) Divisão inteira", "D) Potenciação"],
    "B",
    "A adição de uma unidade a uma variável é chamada de incremento, frequentemente abreviada como x++.",
    "Muito utilizada em contadores de laços."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual comando de saída é amplamente utilizado na linguagem Java para exibir mensagens no console?",
    "System.out.println(\"Teste\");",
    ["A) console.print()", "B) printfs()", "C) System.out.println()", "D) echo()"],
    "C",
    "System.out.println imprime o argumento fornecido seguido de uma quebra de linha no console padrão.",
    "Essencial para testes rápidos de depuração."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "O que é uma variável em programação?",
    "// Conceito fundamental",
    ["A) Um valor fixo que nunca pode ser alterado durante a execução", "B) Um espaço reservado na memória RAM para armazenar dados temporários que podem mudar", "C) Um erro de compilação crítico", "D) Uma biblioteca externa de funções matemáticas"],
    "B",
    "Variáveis guardam dados que variam e são manipulados ao longo da execução do programa.",
    "Possuem nome, tipo e valor armazenado."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual operador relacional representa a comparação de igualdade entre dois valores em linguagens como Java e C?",
    "if (a == b)",
    ["A) =", "B) ==", "C) ===", "D) !="],
    "B",
    "O operador '==' compara se dois valores são iguais. Um único '=' é reservado para atribuição.",
    "Confundir '=' com '==' é um dos erros mais comuns de iniciantes."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual estrutura de repetição é controlada por uma contagem numérica explícita (inicialização, condição e incremento)?",
    "for(int i=0; i<10; i++)",
    ["A) while", "B) do-while", "C) for", "D) switch"],
    "C",
    "O laço 'for' agrupa a inicialização, a condição de continuidade e a atualização do contador em uma única linha estruturada.",
    "Ideal para repetições com número de vezes conhecido."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "O que significa a sigla IDE no contexto de desenvolvimento de software?",
    "// Ferramentas",
    ["A) Interface Dinâmica de Execução", "B) Integrated Development Environment", "C) Internal Data Engine", "D) Internet Domain Extension"],
    "B",
    "IDE significa Ambiente de Desenvolvimento Integrado, reunindo editores, compiladores e depuradores.",
    "Exemplos: IntelliJ, Eclipse, VS Code."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual operador representa a disjunção lógica (OU) em Java?",
    "if (a || b)",
    ["A) &&", "B) ||", "C) !", "D) ^"],
    "B",
    "O operador '||' retorna verdadeiro se pelo menos uma das condições envolvidas for verdadeira.",
    "Diferente do '&&' (E), que exige que todas sejam verdadeiras."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "O que é um vetor (array unidimensional)?",
    "int[] v = new int[5];",
    ["A) Uma matriz tridimensional sem limites", "B) Uma estrutura de dados homogênea que armazena múltiplos elementos de um mesmo tipo sob um único identificador", "C) Um ponteiro de memória volátil estático", "D) Uma função matemática de raiz"],
    "B",
    "Arrays armazenam coleções indexadas de dados do mesmo tipo em posições contíguas de memória.",
    "O primeiro índice de um array em Java é sempre 0."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual será o valor impresso pelo trecho abaixo?\n\nint a = 5;\nint b = 2;\nSystem.out.println(a / b);",
    "int a = 5;\nint b = 2;\nSystem.out.println(a / b);",
    ["A) 2.5", "B) 2", "C) 3", "D) 2.0"],
    "B",
    "Como 'a' e 'b' são inteiros, a divisão inteira descarta a parte fracionária. 5 / 2 resulta em 2.",
    "Para obter 2.5, pelo menos um dos operandos deveria ser do tipo ponto flutuante (double/float)."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Analise o laço abaixo:\n\nint c = 0;\nfor(int i = 0; i < 4; i++){\n    c += i;\n}\nSystem.out.println(c);",
    "int c = 0;\nfor(int i = 0; i < 4; i++){\n    c += i;\n}\nSystem.out.println(c);",
    ["A) 10", "B) 6", "C) 4", "D) 0"],
    "B",
    "O laço acumula os valores de i de 0 a 3: 0 + 0 + 1 + 2 + 3 = 6.",
    "Atenção ao limite superior: i vai até estritamente menor que 4."
);

addQuestion(
    "Lógica de Programação", "Média",
    "O que caracteriza uma busca binária em relação à busca linear?",
    "// Algoritmos de busca",
    ["A) A busca binária exige que o vetor esteja ordenado e possui complexidade logarítmica O(log n)", "B) A busca binária é mais lenta que a linear em grandes volumes de dados", "C) A busca linear divide o vetor recursivamente ao meio", "D) Não há diferença prática de desempenho"],
    "A",
    "A busca binária divide o espaço de busca pela metade a cada passo, exigindo ordenação prévia, o que a torna muito eficiente.",
    "Complexidade O(log n) contra O(n) da busca linear."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual é a saída do código abaixo?\n\nString s = \"Java\";\nSystem.out.println(s.length());",
    "String s = \"Java\";\nSystem.out.println(s.length());",
    ["A) 3", "B) 4", "C) 5", "D) Erro de compilação"],
    "B",
    "O método length() retorna a quantidade de caracteres da string. 'J-a-v-a' possui 4 caracteres.",
    "Diferente de arrays, onde length é um atributo, em strings Java length() é um método."
);

addQuestion(
    "Lógica de Programação", "Média",
    "O que acontece se um vetor em Java for declarado com tamanho 5 e tentarmos acessar o índice 5 (ex: v[5])?",
    "int[] v = new int[5];\nint x = v[5];",
    ["A) Retorna o valor 0 por padrão", "B) Lança uma exceção do tipo ArrayIndexOutOfBoundsException em tempo de execução", "C) Expande o vetor automaticamente", "D) Retorna null"],
    "B",
    "Os índices válidos para um vetor de tamanho 5 vão de 0 a 4. Acessar o índice 5 viola os limites e gera exceção.",
    "Cuidado com erros de off-by-one em laços de repetição."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual é o resultado da expressão lógica se a=true, b=false e c=true:\n`!(a && b) || c`?",
    "boolean res = !(a && b) || c;",
    ["A) false", "B) true", "C) null", "D) Indefinido"],
    "B",
    "(a && b) é false. Negação !(false) é true. Como temos true || c (true || true), o resultado geral é true.",
    "Resolva os parênteses e operações de negação de dentro para fora."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual é o objetivo principal de modularizar um programa utilizando funções ou métodos?",
    "// Boas práticas",
    ["A) Aumentar o consumo de memória RAM", "B) Promover a reutilização de código, legibilidade e facilidade de manutenção", "C) Impedir o uso de variáveis globais", "D) Forçar o uso obrigatório de orientação a objetos"],
    "B",
    "A modularização divide um problema complexo em partes menores, isoladas e fáceis de testar e reutilizar.",
    "Conceito fundamental de engenharia de software."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Analise o trecho:\n\nint x = 3;\nswitch(x) {\n    case 1: x++; break;\n    case 3: x += 2;\n    case 5: x--; break;\n    default: x = 0;\n}\nSystem.out.println(x);",
    "int x = 3;\nswitch(x) {\n    case 1: x++; break;\n    case 3: x += 2;\n    case 5: x--; break;\n    default: x = 0;\n}\nSystem.out.println(x);",
    ["A) 5", "B) 4", "C) 0", "D) 3"],
    "B",
    "x inicia em 3. Entra no 'case 3', executando x += 2 (x vira 5). Como NÃO HÁ comando 'break' no case 3, o fluxo executa o 'case 5' em seguida: x-- (x vira 4), onde encontra o break.",
    "Atenção ao efeito 'fall-through' do switch-case quando o break é omitido."
);

addQuestion(
    "Lógica de Programação", "Média",
    "Qual método de ordenação compara elementos distantes entre si e vai reduzindo o intervalo (gap) a cada passo?",
    "// Algoritmos avançados",
    ["A) Shell Sort", "B) Bubble Sort", "C) Selection Sort", "D) Linear Sort"],
    "A",
    "O Shell Sort é uma evolução do Insertion Sort que permite a troca de elementos distantes, melhorando a velocidade.",
    "Reduz o intervalo progressivamente até 1."
);

addQuestion(
    "Lógica de Programação", "Média",
    "O que significa a complexidade assintótica de um algoritmo expressa pela notação Big O?",
    "// Complexidade",
    ["A) O tempo exato em segundos que o código demora para rodar no computador", "B) O comportamento de crescimento do tempo de execução ou uso de espaço conforme o tamanho da entrada aumenta", "C) A quantidade de linhas de código escritas", "D) O consumo de bateria do dispositivo"],
    "B",
    "Big O mede a escalabilidade do algoritmo, abstraindo detalhes de hardware e focando no comportamento com entradas grandes.",
    "Exemplos: O(1), O(n), O(n²)."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor impresso ao final da execução do algoritmo abaixo?\n\nint total = 0;\nfor(int i = 1; i <= 3; i++){\n    for(int j = 1; j <= 2; j++){\n        total += (i * j);\n    }\n}\nSystem.out.println(total);",
    "int total = 0;\nfor(int i = 1; i <= 3; i++){\n    for(int j = 1; j <= 2; j++){\n        total += (i * j);\n    }\n}\nSystem.out.println(total);",
    ["A) 12", "B) 18", "C) 36", "D) 24"],
    "B",
    "Cálculo por iteração:\n- i=1: j=1 (1*1=1), j=2 (1*2=2) -> soma=3\n- i=2: j=1 (2*1=2), j=2 (2*2=4) -> soma=6\n- i=3: j=1 (3*1=3), j=2 (3*2=6) -> soma=9\nTotal = 3 + 6 + 9 = 18.",
    "Rastreie laços aninhados multiplicando e somando passo a passo."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual é a complexidade de tempo no pior caso para o algoritmo de ordenação Quick Sort?",
    "// Análise de Algoritmos",
    ["A) O(n log n)", "B) O(n)", "C) O(n²)", "D) O(log n)"],
    "C",
    "Embora no caso médio o Quick Sort seja O(n log n), no pior caso (quando a escolha do pivô é inadequada, como escolher sempre o menor/maior elemento), sua complexidade degrada para O(n²).",
    "O caso médio é excelente, mas o pior caso exige cuidado na escolha do pivô."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Analise o método recursivo abaixo:\n\npublic int m(int n) {\n    if (n <= 1) return n;\n    return m(n - 1) + m(n - 2);\n}\n\nO que esse método calcula e qual o valor de m(4)?",
    "public int m(int n) {\n    if (n <= 1) return n;\n    return m(n - 1) + m(n - 2);\n}",
    ["A) Sequência de Fibonacci; resultado 3", "B) Fatorial; resultado 24", "C) Soma progressiva; resultado 10", "D) Potenciação; resultado 16"],
    "A",
    "O método implementa a série de Fibonacci. Para m(4): m(3)+m(2) -> (m(2)+m(1)) + (m(1)+m(0)) -> ((1+1)+1) + (1+0) = 3.",
    "A sequência de Fibonacci soma os dois termos anteriores."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual é o comportamento da passagem de parâmetros por valor em tipos primitivos ao modificar a variável dentro de um método em Java?",
    "// Passagem de parâmetros",
    ["A) O valor original na função chamadora é alterado permanentemente", "B) Apenas uma cópia do valor é passada, logo a variável original permanece inalterada fora do escopo do método", "C) Ocorre um erro de compilação automático", "D) A variável passa a ser tratada como constante"],
    "B",
    "Em Java, os tipos primitivos são passados estritamente por valor, significando que o método manipula uma cópia local.",
    "Alterações internas no parâmetro não afetam a variável externa."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será a saída do código abaixo ao processar operadores bitwise:\n\nint x = 5;\nint y = 3;\nSystem.out.println(x & y);",
    "int x = 5;\nint y = 3;\nSystem.out.println(x & y);",
    ["A) 7", "B) 1", "C) 5", "D) 0"],
    "B",
    "Em binário: 5 é '101' e 3 é '011'. A operação AND bitwise (&) compara bit a bit: 101 & 011 resulta em 001, que vale 1 em decimal.",
    "Operadores bitwise operam diretamente sobre a representação binária dos números."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "O que caracteriza uma estrutura de dados do tipo Pilha (Stack) em relação à política de acesso aos elementos?",
    "// Estruturas de Dados Lineares",
    ["A) FIFO (First In, First Out)", "B) LIFO (Last In, First Out)", "C) Acesso randômico por índice O(1)", "D) Ordenação automática alfabética"],
    "B",
    "A pilha segue o princípio LIFO (último a entrar, primeiro a sair), onde inserções e remoções ocorrem no mesmo topo.",
    "Exemplo clássico: pilha de pratos ou o controle de chamadas (stack trace) de métodos."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual é a principal vantagem de uma Lista Encadeada (Linked List) sobre um Vetor tradicional estático?",
    "// Estruturas Dinâmicas",
    ["A) Acesso direto a qualquer elemento em tempo O(1) usando índices", "B) Inserções e remoções eficientes sem a necessidade de realocar ou deslocar blocos inteiros de memória contígua", "C) Menor consumo de memória RAM por elemento", "D) Suporte nativo a matrizes multidimensionais"],
    "B",
    "Enquanto vetores exigem realocação e deslocamento custoso para inserções no meio, listas encadeadas apenas ajustam referências de ponteiros.",
    "Em contrapartida, perdem o acesso indexado direto O(1)."
);
/* =====================================================
   BLOCO 2: ESTRUTURAS DE DADOS (40 QUESTÕES)
===================================================== */

// --- Questões Originais Ajustadas ---
addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual elemento será removido?",
    "Stack<Integer> pilha = new Stack<>();\n\npilha.push(10);\npilha.push(20);\npilha.push(30);\n\npilha.pop();",
    ["A) 10", "B) 20", "C) 30", "D) Nenhum"],
    "C",
    "A pilha segue LIFO. O último elemento inserido é removido primeiro.",
    "LIFO = Last In First Out."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual elemento será atendido primeiro?",
    "Queue<Integer> fila = new LinkedList<>();\n\nfila.add(10);\nfila.add(20);\nfila.add(30);\n\nfila.poll();",
    ["A) 10", "B) 20", "C) 30", "D) Erro"],
    "A",
    "A fila segue FIFO. O primeiro inserido sai primeiro.",
    "FIFO = First In First Out."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual estrutura representa melhor uma hierarquia?",
    "        Diretor\n        /       \\\n   Gerente A     Gerente B",
    ["A) Fila", "B) Pilha", "C) Árvore", "D) Vetor"],
    "C",
    "Estruturas hierárquicas são representadas por árvores.",
    "Árvore possui raiz e nós."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a principal propriedade de uma estrutura de dados do tipo Pilha (Stack)?",
    "Operações push e pop",
    ["A) FIFO (First In, First Out)", "B) LIFO (Last In, First Out)", "C) Acesso direto por índice O(1)", "D) Ordenação automática alfabética"],
    "B",
    "A pilha opera no modelo LIFO, onde o último elemento inserido é obrigatoriamente o primeiro a ser retirado.",
    "Pilha = pratos empilhados (último a entrar sai primeiro)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Em uma Lista Simplesmente Encadeada, qual é a complexidade de tempo para inserir um novo elemento diretamente no início da lista (cabeça)?",
    "Head -> [Nó 1] -> [Nó 2]",
    ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n log n)"],
    "A",
    "Como mantemos a referência direta para a cabeça (head), a inserção no início requer apenas atualizar os ponteiros, custando tempo constante O(1).",
    "Inserir no final sem ponteiro de cauda exigiria varrer toda a lista O(n)."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual estrutura de dados não linear organiza elementos em uma relação hierárquica de pai e filhos, contendo uma raiz única?",
    "Nós conectados por arestas hierárquicas",
    ["A) Fila", "B) Pilha", "C) Árvore", "D) Vetor estático"],
    "C",
    "Árvores modelam hierarquias corporativas, sistemas de arquivos e sintaxes de compiladores.",
    "Possuem nós raiz, ramos e folhas."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "O que caracteriza uma Árvore Binária de Busca (BST)?",
    "Filho esquerdo menor / Filho direito maior",
    ["A) Cada nó pode ter no máximo 4 filhos", "B) Os nós à esquerda são menores que a raiz, e os à direita são maiores", "C) Os dados são armazenados estritamente de forma linear", "D) Não existem chaves duplicadas em hipótese alguma"],
    "B",
    "A propriedade fundamental da BST garante buscas eficientes comparando valores recursivamente.",
    "Busca em árvore balanceada custa O(log n)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Qual método de resolução de colisões em Tabelas Hash armazena múltiplos elementos que caíram no mesmo índice em uma lista encadeada interna?",
    "Índice Hash -> [Elemento A -> Elemento B]",
    ["A) Endereçamento aberto por sondagem linear", "B) Encadeamento separado (Chaining)", "C) Redimensionamento estático", "D) Dupla Hifenação"],
    "B",
    "No encadeamento separado, cada posição da tabela aponta para uma lista ligada que abriga as colisões.",
    "Evita perda de dados e estouro de índice."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a complexidade de tempo no pior caso para buscar um elemento em um Vetor Desordenado de tamanho n?",
    "Busca linear em array comum",
    ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n²)"],
    "C",
    "Como o vetor não está ordenado, pode ser necessário inspecionar cada um dos n elementos (busca linear).",
    "Busca binária só se aplica a vetores previamente ordenados."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual estrutura linear é ideal para implementar algoritmos de percurso em largura (BFS) em grafos?",
    "Estrutura FIFO para controle de visita",
    ["A) Pilha", "B) Fila", "C) Tabela Hash", "D) Matriz esparsa"],
    "B",
    "A Fila (Queue) gerencia a ordem de exploração dos nós vizinhos no algoritmo BFS.",
    "Busca em profundidade (DFS) utiliza Pilha (ou recursão)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "O que é um Grafo Direcionado (Dígrafo)?",
    "Arestas com setas direcionais unidirecionais",
    ["A) Um grafo cujas arestas possuem direção específica de um vértice para outro", "B) Um grafo que não permite ciclos", "C) Uma árvore com múltiplos nós raízes", "D) Uma lista encadeada bidirecional"],
    "A",
    "No dígrafo, a aresta (u, v) indica um caminho de u para v, mas não necessariamente o inverso.",
    "Exemplo clássico: seguidores no Twitter ou rotas de mão única."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a principal vantagem de uma Lista Duplamente Encadeada sobre a Lista Simplesmente Encadeada?",
    "Ponteiros next e prev",
    ["A) Ocupa menos memória RAM", "B) Permite percorrer a lista tanto para frente quanto para trás de forma eficiente", "C) Dispensa o uso de ponteiros", "D) Ordena os elementos automaticamente"],
    "B",
    "Cada nó possui um ponteiro para o próximo e para o anterior, facilitando operações de remoção e navegação reversa.",
    "O custo é um leve acréscimo no consumo de memória para o segundo ponteiro."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Em uma Heap Binária Mínima (Min-Heap), onde se encontra sempre o menor elemento da estrutura?",
    "Árvore parcialmente ordenada",
    ["A) Na raiz da árvore", "B) Em uma das folhas da última camada", "C) No último nó inserido", "D) Distribuído aleatoriamente"],
    "A",
    "Na Min-Heap, o elemento pai é sempre menor ou igual aos seus filhos, garantindo que a raiz guarde o menor valor global.",
    "Na Max-Heap, a raiz guarda o maior valor."
);

// --- Novas Questões Adicionadas para Completar 40 ---

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual operação é utilizada para inserir um elemento em uma Pilha?",
    "// Operações básicas de Pilha",
    ["A) enqueue", "B) push", "C) addLast", "D) insert"],
    "B",
    "O método push empilha um novo elemento no topo da estrutura.",
    "O oposto é o pop."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual operação é utilizada para inserir um elemento em uma Fila tradicional?",
    "// Operações básicas de Fila",
    ["A) push", "B) enqueue (ou add)", "C) pop", "D) peek"],
    "B",
    "Elementos entram no final da fila através de operações como enqueue ou add.",
    "O atendimento ocorre pelo início (dequeue/poll)."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Como é chamado o nó de uma árvore que não possui nenhum filho (ou seja, está no final dos ramos)?",
    "// Terminologia de Árvores",
    ["A) Raiz", "B) Folha (Leaf)", "C) Sub-árvore", "D) Aresta"],
    "B",
    "Nós terminais sem descendentes são denominados nós folha.",
    "Nós intermediários são nós internos."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual estrutura de dados permite armazenar pares de chave-valor permitindo buscas extremamente rápidas?",
    "// Mapeamento direto",
    ["A) Fila", "B) Tabela Hash (HashMap)", "C) Lista Encadeada Simples", "D) Vetor desordenado"],
    "B",
    "A Tabela Hash utiliza funções de espalhamento para mapear chaves diretamente a índices de armazenamento.",
    "Complexidade média O(1) para inserção e busca."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "O que mede a altura de uma árvore binária?",
    "// Propriedades dimensionais",
    ["A) A quantidade total de folhas", "B) O comprimento do maior caminho da raiz até uma folha", "C) O número total de nós multiplicado por dois", "D) A largura do nível mais preenchido"],
    "B",
    "A altura representa o número de arestas no caminho mais longo da raiz até um nó folha.",
    "Árvores balanceadas mantêm a altura logarítmica."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual é a principal característica de uma estrutura de dados estática, como um vetor tradicional?",
    "// Alocação de memória",
    ["A) Seu tamanho pode crescer dinamicamente em tempo de execução conforme a demanda", "B) Seu tamanho é fixo e definido no momento da sua criação", "C) Ela descarta automaticamente elementos duplicados", "D) Ela não precisa de tipo definido"],
    "B",
    "Estruturas estáticas alocam um bloco fixo de memória que não pode ser redimensionado após a inicialização.",
    "Para tamanhos variáveis, utilizam-se estruturas dinâmicas."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Em um grafo, como são chamados os pontos ou entidades que armazenam os dados?",
    "// Elementos de Grafos",
    ["A) Arestas", "B) Vértices (ou Nós)", "C) Ponteiros", "D) Registros"],
    "B",
    "Vértices representam os objetos ou entidades, enquanto arestas representam as conexões entre eles.",
    "Conceito base da Teoria dos Grafos."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual método permite consultar o elemento que está no topo de uma Pilha sem removê-lo?",
    "// Consulta de Pilha",
    ["A) pop", "B) peek", "C) poll", "D) clear"],
    "B",
    "O método peek (ou top) inspeciona o elemento atual do topo sem alterar a estrutura da pilha.",
    "Diferente do pop, que remove o item."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "O que significa dizer que uma estrutura de dados é linear?",
    "// Classificação estrutural",
    ["A) Os elementos formam uma sequência onde cada elemento possui um único predecessor e um único sucessor (exceto pontas)", "B) Os dados são dispostos em matrizes bidimensionais complexas", "C) Os nós possuem múltiplos pais simultâneos", "D) Os dados não possuem ordem sequencial"],
    "A",
    "Estruturas lineares (como listas, pilhas e filas) organizam os dados de forma sequencial.",
    "Oposição às estruturas não lineares (árvores e grafos)."
);

addQuestion(
    "Estruturas de Dados", "Fácil",
    "Qual é o tipo de percurso em árvores binárias que visita primeiro a raiz, depois a sub-árvore esquerda e por fim a sub-árvore direita?",
    "// Percursos",
    ["A) Em-ordem (Inorder)", "B) Pré-ordem (Preorder)", "C) Pós-ordem (Postorder)", "D) Por nível (Level order)"],
    "B",
    "O percurso em pré-ordem processa a raiz (Root-Left-Right), sendo útil para clonar árvores.",
    "Existem três percursos recursivos principais baseados em profundidade."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a complexidade de tempo para inserir ou remover um elemento no início de uma Lista Encadeada versus um Vetor?",
    "// Comparativo de desempenho",
    ["A) Lista Encadeada: O(1); Vetor: O(n)", "B) Lista Encadeada: O(n); Vetor: O(1)", "C) Ambas possuem complexidade O(n)", "D) Ambas possuem complexidade O(1)"],
    "A",
    "Na lista encadeada, basta ajustar o ponteiro da cabeça O(1). No vetor, inserir no início exige deslocar todos os demais elementos uma posição à frente O(n).",
    "Vantagem clássica das listas para inserções frequentes."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "O que ocorre com uma Árvore Binária de Busca (BST) se inserirmos elementos já ordenados de forma crescente?",
    "// Degradação de Árvores",
    ["A) Ela se torna perfeitamente balanceada", "B) Ela degenera para uma estrutura semelhante a uma lista encadeada linear com complexidade O(n)", "C) Ocorre um erro de estouro de pilha imediato", "D) Os elementos são duplicados automaticamente"],
    "B",
    "Inserções ordenadas criam uma árvore desbalanceada (degenerada), perdendo a eficiência logarítmica e virando O(n).",
    "Árvores AVL e Rubro-Negras resolvem isso com auto-balanceamento."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a principal função de uma função de dispersão (Hash Function) eficiente?",
    "// Tabelas Hash",
    ["A) Ordenar alfabeticamente os elementos inseridos", "B) Converter chaves de entrada em índices inteiros válidos dentro do tamanho da tabela, minimizando colisões", "C) Criptografar dados sensíveis de senhas", "D) Compactar o tamanho dos dados armazenados"],
    "B",
    "Uma boa função hash distribui uniformemente as chaves pelos slots disponíveis na tabela, reduzindo colisões.",
    "Essencial para manter o acesso em O(1)."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual algoritmo de percurso em grafos utiliza uma Fila para explorar os vértices camada por camada a partir de uma origem?",
    "// Algoritmos em Grafos",
    ["A) Busca em Profundidade (DFS)", "B) Busca em Largura (BFS)", "C) Algoritmo de Dijkstra", "D) Ordenação Topológica"],
    "B",
    "O BFS (Breadth-First Search) expande os nós vizinhos mais próximos antes de avançar para os mais distantes usando uma Fila.",
    "O DFS utiliza Pilha."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "O que caracteriza uma Árvore AVL em relação às Árvores Binárias de Busca comuns?",
    "// Árvores Balanceadas",
    ["A) Ela é uma árvore binária de busca auto-balanceada que mantém a diferença de altura entre sub-árvores menor ou igual a 1", "B) Ela aceita apenas dados numéricos inteiros", "C) Ela possui quatro filhos por nó", "D) Ela não permite remoção de nós"],
    "A",
    "A AVL aplica rotações automáticas (simples e duplas) para garantir altura O(log n) e evitar degradação.",
    "Nomeada em homenagem aos seus criadores Adelson-Velsky e Landis."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é o comportamento da operação de redimensionamento (rehash) em uma Tabela Hash quando ela atinge seu fator de carga limite?",
    "// Redimensionamento",
    ["A) A tabela é apagada inteira", "B) A tabela dobra de tamanho aproximadamente e todos os elementos existentes são recalculados e reinseridos", "C) Novos elementos são rejeitados permanentemente", "D) Os elementos excedentes vão para uma pilha auxiliar"],
    "B",
    "O rehash expande o array subjacente para acomodar mais dados sem degradar a performance por excesso de colisões.",
    "Mantém a eficiência O(1) amortizada."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Em um Grafo Ponderado, o que representam os pesos associados às arestas?",
    "// Grafos Ponderados",
    ["A) A cor visual do nó", "B) Custos, distâncias, capacidades ou tempos associados ao trajeto entre dois vértices", "C) A quantidade de filhos que o vértice possui", "D) O nível hierárquico do nó"],
    "B",
    "Grafos ponderados atribuem valores numéricos às arestas, fundamentais para resolver problemas de menor caminho.",
    "Exemplos: mapas rodoviários (quilômetros) ou redes de computadores (latência)."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "Qual é a complexidade de tempo para acessar um elemento pelo seu índice em um Array (Vetor estático)?",
    "// Acesso a Vetores",
    ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n²)"],
    "A",
    "Como o array ocupa posições contíguas de memória e o índice indica o deslocamento exato a partir da base, o acesso é direto e instantâneo O(1).",
    "Grande vantagem dos vetores."
);

addQuestion(
    "Estruturas de Dados", "Média",
    "O que é um Deque (Double-Ended Queue)?",
    "// Deque",
    ["A) Uma fila especial que permite inserções e remoções tanto no início quanto no final", "B) Uma pilha que aceita apenas dois elementos", "C) Uma árvore com dois troncos", "D) Uma lista encadeada sem ponteiros"],
    "A",
    "O Deque flexibiliza as pontas, combinando comportamentos de pilha e fila de forma unificada.",
    "Utilizado em algoritmos de janela deslizante."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Qual é a complexidade de tempo no pior caso para realizar operações de busca em uma Árvore AVL perfeitamente balanceada com n nós?",
    "// Desempenho AVL",
    ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"],
    "B",
    "Como a AVL garante fator de balanceamento estrito, sua altura máxima é rigorosamente limitada a O(log n), garantindo buscas rápidas.",
    "Evita o pior caso O(n) da BST comum."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Qual algoritmo clássico encontra a árvore geradora mínima (MST) em um grafo conexo e ponderado adicionando sempre a aresta de menor peso disponível que não forme ciclos?",
    "// Algoritmos de Grafos",
    ["A) Algoritmo de Dijkstra", "B) Algoritmo de Kruskal", "C) Algoritmo de Floyd-Warshall", "D) Busca em Largura"],
    "B",
    "Kruskal ordena todas as arestas por peso e usa estruturas de conjunto disjunto (Union-Find) para montar a árvore geradora mínima.",
    "O algoritmo de Prim constrói a árvore a partir de um vértice inicial."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Em uma Max-Heap representada por um vetor, se um nó está localizado no índice i, quais são as fórmulas matemáticas para encontrar os índices de seus filhos esquerdo e direito?",
    "// Heap em Vetor",
    ["A) Esquerdo: 2*i + 1, Direito: 2*i + 2", "B) Esquerdo: i - 1, Direito: i + 1", "C) Esquerdo: i / 2, Direito: i * 2", "D) Esquerdo: i + 2, Direito: i + 4"],
    "A",
    "A indexação baseada em zero para heap em vetor utiliza 2*i + 1 para o filho esquerdo e 2*i + 2 para o direito.",
    "O pai de um nó em i é dado por (i - 1) / 2."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Qual algoritmo é utilizado para encontrar o caminho mais curto de um único vértice de origem para todos os demais vértices em um grafo com arestas de pesos não negativos?",
    "// Caminho mais curto",
    ["A) Algoritmo de Dijkstra", "B) Algoritmo de Kruskal", "C) Busca em Profundidade", "D) Ordenação Topológica"],
    "A",
    "O algoritmo de Dijkstra utiliza uma fila de prioridades gananciosa para determinar as menores distâncias a partir de uma fonte.",
    "Não funciona corretamente se houver pesos negativos nas arestas (onde se usa Bellman-Ford)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "O que caracteriza uma Árvore Rubro-Negra (Red-Black Tree)?",
    "// Árvores Avançadas",
    ["A) Uma árvore binária de busca auto-balanceada onde cada nó possui um atributo de cor (vermelho ou preto) e regras restritas de coloração para manter o balanceamento aproximado", "B) Uma árvore que possui estritamente nós coloridos em vermelho", "C) Uma árvore que aceita apenas nós com chaves numéricas pares", "D) Uma árvore onde os nós vermelhos ficam apenas na raiz"],
    "A",
    "A Rubro-Negra relaxa ligeiramente o balanceamento em comparação com a AVL, resultando em menor custo de rotações em inserções e remoções frequentes.",
    "Utilizada internamente no TreeMap e TreeSet do Java."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "Qual é a complexidade temporal para remover um elemento de uma Heap Binária (por exemplo, extrair o elemento máximo/mínimo da raiz) em uma estrutura com n elementos?",
    "// Complexidade de Heaps",
    ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"],
    "B",
    "A remoção da raiz substitui o topo pelo último elemento e executa a operação de reorganização (heapify) descendo pela árvore, proporcional à altura O(log n).",
    "A consulta ao topo (peek) custa O(1)."
);

addQuestion(
    "Estruturas de Dados", "Difícil",
    "O que é uma Ordenação Topológica aplicada a um Grafo Direcionado Acíclico (DAG)?",
    "// Ordenação Topológica",
    ["A) Uma listagem linear de todos os vértices tal que, para toda aresta direcionada u -> v, u aparece antes de v na ordem", "B) Ordenar alfabeticamente os nomes dos vértices do grafo", "C) Organizar os vértices em ordem decrescente de grau de saída", "D) Um algoritmo para apagar ciclos do grafo"],
    "A",
    "A ordenação topológica lineariza dependências (como pré-requisitos de matérias ou compilação de tarefas), exigindo ausência de ciclos (DAG).",
    "Pode ser implementada via DFS ou algoritmo de Kahn."
);
addQuestion(
    "Estruturas de Dados", "Difícil",
    "Qual estrutura de dados do tipo árvore balanceada é uma árvore de busca multiway (com múltiplos filhos por nó), amplamente utilizada em sistemas de arquivos e bancos de dados para minimizar acessos a disco?",
    "Nós com múltiplas chaves e ponteiros",
    ["A) Árvore AVL", "B) Árvore B (B-Tree)", "C) Árvore Binária de Busca", "D) Heap Binária"],
    "B",
    "As Árvores B e suas variantes (como B+ e B*) mantêm os dados ordenados e permitem buscas, inserções e exclusões em tempo logarítmico, otimizando blocos de leitura em disco.",
    "Padrão em bancos de dados relacionais e sistemas de arquivos modernos."
);

/* =====================================================
   BLOCO 3: PROGRAMAÇÃO ORIENTADA A OBJETOS (40 QUESTÕES)
===================================================== */

// --- Questões Originais Ajustadas ---
addQuestion(
    "POO", "Fácil",
    "Observe o código Java. Qual conceito está representado pela criação do objeto?",
    "class Servidor{\n   String nome;\n}\n\nServidor s = new Servidor();",
    ["A) Herança", "B) Instanciação", "C) Encapsulamento", "D) Polimorfismo"],
    "B",
    "A classe Servidor é utilizada para criar um objeto chamado s.",
    "Classe é o molde; objeto é a instância criada."
);

addQuestion(
    "POO", "Média",
    "Qual princípio da orientação a objetos é demonstrado?",
    "class Conta{\n   private double saldo;\n}",
    ["A) Herança", "B) Recursividade", "C) Encapsulamento", "D) Sobrecarga"],
    "C",
    "O modificador private restringe o acesso direto ao atributo saldo.",
    "Private está fortemente associado ao encapsulamento."
);

addQuestion(
    "POO", "Difícil",
    "Qual será a saída?",
    "class Animal{\n   void som(){\n      System.out.println(\"Animal\");\n   }\n}\n\nclass Cachorro extends Animal{\n   @Override\n   void som(){\n      System.out.println(\"Cachorro\");\n   }\n}\n\nAnimal a = new Cachorro();\na.som();",
    ["A) Animal", "B) Cachorro", "C) Erro", "D) Nenhuma saída"],
    "B",
    "O objeto criado é Cachorro. O método sobrescrito é executado por polimorfismo.",
    "Observe sempre o tipo real do objeto."
);

addQuestion(
    "POO", "Fácil",
    "Qual palavra-chave representa herança em Java?",
    "class Analista ______ Funcionario{\n}",
    ["A) implements", "B) extends", "C) inherit", "D) super"],
    "B",
    "Classes utilizam extends para herdar outra classe.",
    "implements é utilizado para interfaces."
);

addQuestion(
    "POO", "Fácil",
    "Qual pilar da POO permite criar novas classes baseadas em classes existentes, reaproveitando código e estabelecendo hierarquias?",
    "class Carro extends Veiculo",
    ["A) Encapsulamento", "B) Herança", "C) Polimorfismo", "D) Abstração"],
    "B",
    "A herança promove o reaproveitamento de atributos e métodos comuns na superclasse.",
    "Relação conceitual de especialização ('é-um')."
);

addQuestion(
    "POO", "Média",
    "Qual princípio do SOLID determina que uma classe deve ter apenas um, e apenas um, motivo para mudar?",
    "Single Responsibility Principle",
    ["A) Princípio da Responsabilidade Única (SRP)", "B) Princípio Aberto-Fechado (OCP)", "C) Inversão de Dependência (DIP)", "D) Segregação de Interfaces (ISP)"],
    "A",
    "O SRP evita classes monolíticas com múltiplas responsabilidades desconexas.",
    "Alta coesão está diretamente ligada ao cumprimento do SRP."
);

addQuestion(
    "POO", "Difícil",
    "O que estabelece o Princípio Aberto-Fechado (OCP) do SOLID?",
    "Módulos abertos para extensão, fechados para modificação",
    ["A) Classes devem ser abertas para alterações diretas no código-fonte original sempre que houver bug", "B) Entidades de software devem ser abertas para extensão, mas fechadas para modificação", "C) Interfaces não podem possuir métodos default", "D) Atributos privados devem ser tornados públicos para facilitar testes"],
    "B",
    "O OCP permite adicionar novos comportamentos estendendo o código (via herança ou polimorfismo) sem precisar alterar o código já testado e funcional.",
    "Base fundamental para design patterns flexíveis."
);

addQuestion(
    "POO", "Fácil",
    "O que representa uma Classe Abstrata em linguagens orientadas a objetos?",
    "public abstract class Conta",
    ["A) Um modelo que pode ser instanciado diretamente com o operador new", "B) Uma classe genérica que serve primariamente como base e não pode ser instanciada diretamente", "C) Uma interface que obrigatoriamente possui atributos estáticos", "D) Um erro de sintaxe de compilação"],
    "B",
    "Classes abstratas definem contratos parciais e comportamentos comuns para suas subclasses.",
    "Tentativa de dar 'new ClasseAbstrata()' gera erro de compilação."
);

addQuestion(
    "POO", "Média",
    "Qual é a principal diferença conceitual entre uma Interface e uma Classe Abstrata em Java moderno?",
    "Contratos puros vs Herança estrutural",
    ["A) Interfaces não podem declarar métodos", "B) Classes abstratas permitem herança múltipla irrestrita", "C) Interfaces definem contratos de comportamento sem estado de instância, enquanto classes abstratas podem conter estado e métodos concretos", "D) Não há nenhuma diferença prática"],
    "C",
    "Interfaces focam no 'o quê' o objeto faz (comportamento puro), enquanto classes abstratas compartilham código estrutural e estado.",
    "Java permite implementar múltiplas interfaces, mas herdar de apenas uma classe."
);

addQuestion(
    "POO", "Difícil",
    "O que caracteriza o acoplamento em um sistema orientado a objetos?",
    "Nível de dependência entre classes/módulos",
    ["A) A quantidade de linhas de código em um método", "B) O grau de interdependência entre os módulos; deseja-se sempre mantê-lo baixo", "C) A velocidade de execução da máquina virtual", "D) A duplicação de variáveis locais"],
    "B",
    "Alto acoplamento engessa o sistema, tornando manutenções e testes custosos. O ideal arquitetural é baixo acoplamento.",
    "Acoplamento baixo + Alta coesão = Código de alta qualidade."
);

addQuestion(
    "POO", "Fácil",
    "Qual modificador de acesso restringe a visibilidade de membros de uma classe apenas ao próprio pacote e às subclasses (mesmo em pacotes diferentes)?",
    "protected int idade;",
    ["A) private", "B) public", "C) protected", "D) static"],
    "C",
    "O modificador protected abre o escopo de visibilidade para herança e para o pacote local.",
    "private é estrito à classe; default restringe ao pacote."
);

addQuestion(
    "POO", "Média",
    "O que é polimorfismo de sobrecarga (Overloading)?",
    "Métodos com mesmo nome e assinaturas diferentes",
    ["A) Reescrita de métodos herdados na subclasse", "B) Declaração de múltiplos métodos com o mesmo nome na mesma classe, diferenciando-se pelos parâmetros", "C) Criação de objetos estáticos", "D) Ocultação de atributos privados"],
    "B",
    "A sobrecarga ocorre na mesma classe com assinaturas de parâmetros distintas (quantidade ou tipos).",
    "Diferente de sobrescrita (Overriding), que ocorre em herança."
);

addQuestion(
    "POO", "Difícil",
    "O que estabelece o Princípio da Inversão de Dependência (DIP) do SOLID?",
    "Depender de abstrações, não de implementações",
    ["A) Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações", "B) O banco de dados deve ser injetado diretamente no Controller", "C) Classes concretas nunca devem ser instanciadas", "D) Injeção de dependência é proibida em arquiteturas limpas"],
    "A",
    "O DIP desacopla componentes através de interfaces ou classes abstratas, facilitando testes unitários e trocas de tecnologia.",
    "Base conceitual para frameworks como Spring."
);

addQuestion(
    "POO", "Média",
    "O que significa encapsulamento em POO?",
    "Ocultamento de detalhes internos de implementação",
    ["A) Compactação de arquivos binários", "B) Ocultação do estado interno de um objeto, expondo apenas uma interface controlada de acesso", "C) Criação de cópias idênticas de objetos na memória RAM", "D) Herança múltipla de comportamentos"],
    "B",
    "O encapsulamento protege os dados contra alterações inválidas diretas, utilizando métodos de acesso controlados.",
    "Atributos private + métodos getters/setters públicos."
);

// --- Novas Questões Adicionadas para Completar 40 ---

addQuestion(
    "POO", "Fácil",
    "O que é uma classe em Programação Orientada a Objetos?",
    "// Conceito básico",
    ["A) Um objeto instanciado na memória RAM", "B) Um molde ou projeto que define os atributos e métodos comuns a um grupo de objetos", "C) Uma função isolada sem relação com dados", "D) Um banco de dados relacional"],
    "B",
    "A classe funciona como a planta baixa (blueprint) para a criação posterior de instâncias (objetos).",
    "Define o tipo estrutural dos objetos gerados."
);

addQuestion(
    "POO", "Fácil",
    "Qual é o operador utilizado em Java para instanciar novos objetos a partir de uma classe?",
    "// Instanciação",
    ["A) allocate", "B) new", "C) create", "D) instance"],
    "B",
    "O operador 'new' aloca memória dinamicamente para o novo objeto e chama o construtor correspondente.",
    "Exemplo: `Pessoa p = new Pessoa();`"
);

addQuestion(
    "POO", "Fácil",
    "Como são chamadas as variáveis declaradas dentro de uma classe que representam as características dos objetos?",
    "// Atributos",
    ["A) Métodos", "B) Atributos (ou Variáveis de Instância)", "C) Pacotes", "D) Construtores"],
    "B",
    "Atributos definem o estado de um objeto em POO.",
    "Exemplo: nome, idade, cor."
);

addQuestion(
    "POO", "Fácil",
    "Qual é a função de um construtor em uma classe?",
    "// Construtores",
    ["A) Apagar o objeto da memória ao final da execução", "B) Inicializar o estado do objeto no momento de sua criação", "C) Sobrescrever métodos herdados", "D) Conectar o sistema a um banco de dados externo"],
    "B",
    "O construtor possui o mesmo nome da classe e é executado automaticamente no uso do operador new.",
    "Pode receber parâmetros para configurar valores iniciais."
);

addQuestion(
    "POO", "Fácil",
    "Qual palavra-chave em Java é utilizada para referenciar o objeto atual dentro de seus próprios métodos ou construtores?",
    "// Referência interna",
    ["A) super", "B) this", "C) base", "D) self"],
    "B",
    "A palavra-chave 'this' aponta para a instância corrente da classe, útil para resolver ambiguidades de nomes de parâmetros.",
    "Diferente de 'super', que referencia a superclasse."
);

addQuestion(
    "POO", "Fácil",
    "Qual modificador de acesso torna um atributo ou método visível para qualquer outra classe do projeto sem restrições?",
    "// Modificadores",
    ["A) private", "B) protected", "C) public", "D) default"],
    "C",
    "O modificador 'public' abre a visibilidade globalmente.",
    "O oposto mais restritivo é o 'private'."
);

addQuestion(
    "POO", "Fácil",
    "O que significa a sigla SOLID no contexto de design de software orientado a objetos?",
    "// Princípios SOLID",
    ["A) Cinco princípios fundamentais de design e arquitetura limpa em POO", "B) Uma biblioteca padrão de banco de dados em Java", "C) Um conjunto de regras estritas de formatação de código CSS", "D) Um padrão de arquitetura de redes"],
    "A",
    "SOLID agrupa 5 princípios de orientação a objetos criados para facilitar manutenção e testabilidade.",
    "Inclui SRP, OCP, LSP, ISP e DIP."
);

addQuestion(
    "POO", "Fácil",
    "Qual é o principal objetivo da Abstração em POO?",
    "// Pilares da POO",
    ["A) Esconder detalhes complexos de implementação e expor apenas os aspectos essenciais de um objeto", "B) Criar cópias idênticas de classes", "C) Impedir a herança de métodos", "D) Aumentar o consumo de processamento"],
    "A",
    "A abstração simplifica o modelo do mundo real focando no que é relevante para o sistema atual.",
    "Um dos quatro pilares fundamentais."
);

addQuestion(
    "POO", "Fácil",
    "O que ocorre quando uma classe implementa uma Interface em Java?",
    "// Interfaces",
    ["A) Ela herda obrigatoriamente os atributos estáticos da interface", "B) Ela se compromete a fornecer uma implementação concreta para todos os métodos abstratos declarados na interface", "C) Ela perde o direito de usar construtores", "D) Ela se torna automaticamente uma classe abstrata"],
    "B",
    "Implementar uma interface exige cumprir o contrato definindo os corpos de seus métodos.",
    "Garante padronização de comportamento."
);

addQuestion(
    "POO", "Média",
    "Qual é a diferença fundamental entre Sobrescrita (Override) e Sobrecarga (Overload)?",
    "// Polimorfismo",
    ["A) Override ocorre na mesma classe com parâmetros iguais; Overload ocorre na subclasse", "B) Override substitui o comportamento de um método herdado na subclasse mantendo a assinatura; Overload cria múltiplos métodos com mesmo nome mas assinaturas diferentes na mesma classe", "C) Não há diferença conceitual", "D) Override é exclusivo de variáveis estáticas"],
    "B",
    "Override exige herança e mesma assinatura; Overload ocorre na mesma classe alterando os parâmetros.",
    "Pilares centrais do polimorfismo."
);

addQuestion(
    "POO", "Média",
    "O que estabelece o Princípio da Substituição de Liskov (LSP) do SOLID?",
    "// Princípio LSP",
    ["A) Objetos de uma superclasse devem poder ser substituídos por objetos de suas subclasses sem quebrar a corretude do programa", "B) Subclasses nunca podem sobrescrever métodos herdados", "C) Classes abstratas não podem ter subclasses concretas", "D) Herança deve ser evitada em favor de switch-cases"],
    "A",
    "O LSP garante que a herança seja utilizada corretamente, preservando contratos e comportamentos esperados.",
    "O 'L' do acrônimo SOLID."
);

addQuestion(
    "POO", "Média",
    "O que define o Princípio da Segregação de Interfaces (ISP) do SOLID?",
    "// Princípio ISP",
    ["A) Uma classe deve implementar uma única interface gigante com todos os métodos do sistema", "B) É melhor ter várias interfaces específicas para clientes específicos do que uma interface única e genérica", "C) Interfaces não podem estender outras interfaces", "D) Métodos em interfaces devem ser sempre privados"],
    "B",
    "O ISP evita que classes sejam forçadas a implementar métodos vazios ou desnecessários que não utilizam.",
    "Promove interfaces coesas e enxutas."
);

addQuestion(
    "POO", "Média",
    "O que é coesão em um sistema orientado a objetos?",
    "// Coesão vs Acoplamento",
    ["A) O grau em que os elementos de um módulo ou classe pertencem juntos e trabalham para um único propósito bem definido", "B) A dependência direta entre duas classes distintas", "C) O número de classes instanciadas na memória", "D) A herança múltipla de atributos"],
    "A",
    "Deseja-se alta coesão nas classes, significando que cada classe possui responsabilidades focadas e claras.",
    "O oposto de classes 'faz-tudo'."
);

addQuestion(
    "POO", "Média",
    "Qual é a utilidade do modificador 'static' aplicado a um atributo em uma classe Java?",
    "// Membros estáticos",
    ["A) Torna o atributo constante e imutável", "B) Faz com que o atributo pertença à classe como um todo, sendo compartilhado por todas as instâncias, e não exclusivo de cada objeto", "C) Oculta o atributo de subclasses", "D) Permite acesso apenas via reflexão"],
    "B",
    "Membros estáticos são associados à classe em vez de objetos individuais.",
    "Acessados diretamente via NomeDaClasse.atributo."
);

addQuestion(
    "POO", "Média",
    "O que é uma classe concreta em POO?",
    "// Classes Concretas",
    ["A) Uma classe que possui métodos abstratos e não pode ser instanciada", "B) Uma classe completa que possui todas as implementações de seus métodos e pode ser instanciada diretamente com new", "C) Uma interface sem métodos", "D) Uma classe usada apenas para testes unitários"],
    "B",
    "Classes concretas implementam todos os contratos necessários e geram objetos reais.",
    "Oposição direta às classes abstratas."
);

addQuestion(
    "POO", "Média",
    "Qual é o comportamento do operador 'instanceof' em Java?",
    "// Operador instanceof",
    ["A) Cria uma nova instância de um objeto na memória", "B) Testa se um objeto é uma instância de uma classe específica ou implementa uma dada interface, retornando um valor booleano", "C) Compara os valores internos de dois objetos", "D) Destrói um objeto alocado"],
    "B",
    "Utilizado em checagens de tipo em tempo de execução antes de realizar casts seguros.",
    "Retorna true ou false."
);

addQuestion(
    "POO", "Média",
    "O que caracteriza o polimorfismo em tempo de execução (dinâmico)?",
    "// Polimorfismo Dinâmico",
    ["A) A resolução de qual método sobrescrito executar é feita em tempo de execução com base no tipo real do objeto instanciado", "B) A escolha do método ocorre estaticamente pelo compilador", "C) Ocorre exclusivamente em métodos privados", "D) Não existe em linguagens como Java"],
    "A",
    "Através de referências da superclasse apontando para subclasses, o método correto é despachado dinamicamente.",
    "Base da flexibilidade orientada a objetos."
);

addQuestion(
    "POO", "Média",
    "O que é uma exceção (Exception) em Java e como a POO lida com erros?",
    "// Tratamento de Exceções",
    ["A) Um erro de hardware irrecuperável", "B) Um objeto que representa uma condição anormal de execução, o qual pode ser lançado (throw) e tratado (try-catch)", "C) Um tipo especial de interface gráfica", "D) Uma variável global estática"],
    "B",
    "Em Java, exceções são classes que herdam de Throwable, permitindo tratamento robusto de falhas.",
    "Promove confiabilidade no sistema."
);

addQuestion(
    "POO", "Difícil",
    "Qual é a restrição principal em relação à herança de classes em Java?",
    "// Restrições de Herança",
    ["A) Uma classe pode herdar diretamente de múltiplas classes (herança múltipla de implementação)", "B) Java não suporta herança múltipla de classes, permitindo apenas herança simples de classe (extends único)", "C) Classes filhas não podem acessar métodos públicos da mãe", "D) Subclasses devem obrigatoriamente ser abstratas"],
    "B",
    "Para evitar o 'problema do diamante' e complexidades estruturais, Java restringe extends a uma única classe por vez.",
    "A múltipla herança de comportamento é simulada via interfaces."
);

addQuestion(
    "POO", "Difícil",
    "O que caracteriza uma classe marcada com a palavra-chave 'final' em Java?",
    "// Modificador final",
    ["A) Ela se torna abstrata e ganha métodos automáticos", "B) Ela não pode ser estendida (não aceita subclasses), prevenindo herança", "C) Seus atributos passam a ser salvos em banco de dados", "D) Ela não pode ser instanciada"],
    "B",
    "Classes final (como String) fecham a hierarquia, impedindo criação de subclasses por razões de segurança ou design.",
    "Métodos final não podem ser sobrescritos."
);

addQuestion(
    "POO", "Difícil",
    "Em um cenário de design orientado a objetos, qual é a principal motivação para aplicar o princípio da Injeção de Dependência (DI)?",
    "// Injeção de Dependência",
    ["A) Acoplar firmemente os componentes concretos dentro das classes de negócio", "B) Desacoplar a criação de dependências da classe que as utiliza, facilitando a substituição de implementações e testes unitários", "C) Aumentar o consumo de memória RAM", "D) Impedir o uso de interfaces"],
    "B",
    "A DI transfere a responsabilidade de instanciar dependências para containers ou classes externas, promovendo flexibilidade.",
    "Pilar essencial para arquiteturas desacopladas."
);

addQuestion(
    "POO", "Difícil",
    "Qual é o comportamento do método `equals()` e do operador `==` quando comparamos dois objetos distintos em Java que possuem o mesmo conteúdo nos atributos?",
    "// Comparação de Objetos",
    ["A) Ambos retornam true", "B) O operador '==' compara referências de memória (retornando false), enquanto o 'equals()', se não sobrescrito, também compara referências, mas costuma ser implementado para comparar o conteúdo lógico dos atributos", "C) O operador '==' compara o conteúdo e equals compara referências", "D) Ambos geram erro de compilação"],
    "B",
    "Comparar objetos com '==` checa se apontam para o mesmo endereço na heap; equals() avalia a igualdade lógica quando implementado corretamente.",
    "Cuidado clássico em provas de programação."
);

addQuestion(
    "POO", "Difícil",
    "O que é uma Interface Funcional em Java (introduzida no Java 8) e qual anotação opcional a caracteriza?",
    "// Interfaces Funcionais",
    ["A) Uma interface que possui múltiplos métodos abstratos e usa a anotação @Multi", "B) Uma interface que possui exatamente um único método abstrato, permitindo o uso de expressões Lambda, caracterizada pela anotação @FunctionalInterface", "C) Uma interface que executa apenas funções matemáticas", "D) Uma classe abstrata sem métodos"],
    "B",
    "Interfaces funcionais servem como base para expressões lambda e programação funcional em Java.",
    "Exemplos nativos: Runnable, Comparator."
);

addQuestion(
    "POO", "Difícil",
    "O que significa o conceito de Imutabilidade (Immutable Objects) em POO e quais são suas vantagens?",
    "// Objetos Imutáveis",
    ["A) Objetos cujos estados internos não podem ser alterados após a sua criação, garantindo segurança em ambientes concorrentes (threads-safe) e previsibilidade", "B) Objetos que mudam de valor aleatoriamente", "C) Objetos que não podem ser instanciados com new", "D) Classes que não possuem métodos getters"],
    "A",
    "Objetos imutáveis (como String e LocalDate) eliminam efeitos colaterais indesejados e problemas de concorrência em multithreading.",
    "Atributos tipicamente marcados como private final."
);

addQuestion(
    "POO", "Difícil",
    "Como o conceito de Encapsulamento se relaciona com o princípio de Ocultamento de Informação (Information Hiding) de David Parnas?",
    "// Encapsulamento Avançado",
    ["A) São conceitos opostos; encapsulamento expõe tudo e ocultamento esconde tudo", "B) O encapsulamento fornece os mecanismos sintáticos (como modificadores private) para aplicar o ocultamento de informações, protegendo o design interno contra mudanças externas", "C) Ocultamento de informação refere-se apenas a arquivos em disco", "D) Não há relação conceitual"],
    "B",
    "Ocultar detalhes internos reduz o impacto de mudanças, permitindo alterar a implementação sem quebrar o código cliente.",
    "Fundamento de projetos de software modulares."
);

addQuestion(
    "POO", "Difícil",
    "Em padrões de projeto (Design Patterns), o que caracteriza o padrão Criacional Singleton?",
    "// Padrões de Projeto",
    ["A) Permite criar qualquer quantidade ilimitada de objetos concorrentes", "B) Garante que uma classe tenha apenas uma única instância em toda a aplicação e fornece um ponto global de acesso a ela", "C) Subdivide objetos complexos em partes menores", "D) Converte interfaces incompatíveis"],
    "B",
    "O Singleton restringe a instanciação a um único objeto, controlando o acesso centralizado (ex: conexões de banco de dados ou loggers).",
    "Construtor privado + método estático getInstance()."
);

/* =====================================================
   BLOCO 4: JAVA (40 QUESTÕES)
===================================================== */

addQuestion(
    "Java", "Fácil",
    "Qual método é o ponto de entrada principal (main entry point) de uma aplicação Java executável?",
    "public static void main(String[] args)",
    ["A) public void start(String[] args)", "B) public static void main(String[] args)", "C) private static void run(String args)", "D) public int main()"],
    "B",
    "A Java Virtual Machine (JVM) procura exatamente pela assinatura public static void main(String[] args) para iniciar a execução de um programa.",
    "Sem esse método exato, a classe não pode ser executada diretamente como um aplicativo standalone."
);

addQuestion(
    "Java", "Fácil",
    "Qual dos seguintes tipos de dados em Java é considerado um tipo primitivo?",
    "int idade = 25;",
    ["A) String", "B) Integer", "C) double", "D) BigDecimal"],
    "C",
    "O tipo double é primitivo e armazena números de ponto flutuante diretamente na pilha (stack). String, Integer e BigDecimal são classes (referências).",
    "Tipos primitivos em Java começam com letra minúscula (int, char, boolean, double, etc.)."
);

addQuestion(
    "Java", "Média",
    "Qual é a principal diferença entre as classes String, StringBuilder e StringBuffer em relação à mutabilidade?",
    "Manipulação de texto eficiente",
    ["A) Todas são imutáveis após a sua criação", "B) String é imutável, enquanto StringBuilder e StringBuffer são mutáveis", "C) StringBuilder é sincronizada para ambientes multi-thread, ao contrário de StringBuffer", "D) StringBuffer consome menos memória que String em qualquer cenário"],
    "B",
    "Objetos do tipo String não podem ser alterados após criados (qualquer modificação gera um novo objeto). StringBuilder e StringBuffer permitem alteração direta no buffer de caracteres.",
    "StringBuffer é thread-safe (sincronizada), enquanto StringBuilder não é, sendo mais rápida em ambientes de uma única thread."
);

addQuestion(
    "Java", "Difícil",
    "O que acontece no código abaixo durante a execução?",
    "String s1 = \"Java\";\nString s2 = new String(\"Java\");\nSystem.out.println(s1 == s2);",
    ["A) Imprime true porque o conteúdo de ambas é idêntico", "B) Imprime false porque o operador == compara referências de memória, e s2 foi instanciada com new", "C) Gera um erro de compilação por tipos incompatíveis", "D) Gera uma exceção NullPointerException em tempo de execução"],
    "B",
    "O operador == em objetos compara o endereço de memória. A string literal \"Java\" vem do String Pool, enquanto new String(...) cria um novo objeto no heap.",
    "Para comparar o conteúdo de textos em Java, deve-se usar o método .equals()."
);

addQuestion(
    "Java", "Média",
    "Qual estrutura de controle de fluxo foi introduzida no Java 12 (tornada permanente no Java 14) como uma forma mais concisa e limpa de substituir múltiplos blocos if-else ou switch tradicionais?",
    "Expressões Switch (Switch Expressions)",
    ["A) O comando goto estruturado", "B) Switch Expressions com uso da seta (->)", "C) O comando try-with-resources avançado", "D) Laço for-each assíncrono"],
    "B",
    "As expressões switch modernas usam o operador -> para retornar valores diretamente sem a necessidade incômoda da instrução break em cada case.",
    "Evita o problema comum de fall-through acidental do switch clássico."
);

addQuestion(
    "Java", "Fácil",
    "Qual modificador de acesso em Java restringe a visibilidade de um atributo ou método apenas às classes do mesmo pacote?",
    "Modificador padrão (Package-Private)",
    ["A) private", "B) public", "C) protected", "D) Nenhum modificador explícito (package-private)"],
    "D",
    "Quando nenhum modificador de acesso é declarado, o membro assume o escopo de pacote (package-private), ficando visível apenas dentro do mesmo diretório/pacote.",
    "Diferente de protected, que também permite acesso por subclasses em pacotes externos."
);

addQuestion(
    "Java", "Média",
    "O que caracteriza uma Interface Funcional em Java (introduzida a partir do Java 8)?",
    "Uso intensivo de expressões lambda",
    ["A) Uma interface que possui obrigatoriamente 10 métodos abstratos", "B) Uma interface que possui exatamente um único método abstrato", "C) Uma interface que não pode conter métodos default", "D) Uma classe abstrata sem construtor"],
    "B",
    "Interfaces funcionais servem como base para expressões lambda e referências de métodos. Elas podem conter métodos default ou estáticos, mas devem ter apenas um método abstrato.",
    "Anotadas frequentemente com @FunctionalInterface."
);

addQuestion(
    "Java", "Difícil",
    "Qual é a principal finalidade da classe Optional<T> introduzida no Java 8?",
    "Eliminar o tratamento manual repetitivo de valores nulos",
    ["A) Substituir completamente o uso de bancos de dados relacionais", "B) Container para representar a presença ou ausência de um valor, evitando NullPointerException", "C) Gerenciar a concorrência em threads de forma automática", "D) Criptografar dados sensíveis na memória"],
    "B",
    "Optional força o desenvolvedor a lidar explicitamente com a possibilidade de um valor ser ausente (null), tornando o código mais seguro e legível.",
    "Evita o famigerado NullPointerException se utilizado corretamente em retornos de métodos."
);

addQuestion(
    "Java", "Fácil",
    "Qual coleção do Java Collections Framework armazena elementos de forma ordenada e não permite elementos duplicados?",
    "Set e suas implementações como HashSet ou TreeSet",
    ["A) ArrayList", "B) HashMap", "C) TreeSet / HashSet", "D) LinkedList"],
    "C",
    "A interface Set modela conjuntos matemáticos, rejeitando inserções duplicadas. O TreeSet ainda mantém os elementos ordenados por sua ordem natural ou comparator.",
    "ArrayList permite duplicatas e mantém ordem de inserção."
);

addQuestion(
    "Java", "Média",
    "O que a API Stream (java.util.stream), introduzida no Java 8, permite realizar de forma declarativa?",
    "Processamento funcional de coleções de dados",
    ["A) Conexão direta com servidores web via protocolo HTTP", "B) Operações de filtro, mapeamento e redução em coleções de dados com suporte a paralelismo", "C) Manipulação direta de ponteiros de memória em baixo nível", "D) Criação automática de interfaces gráficas em Swing"],
    "B",
    "A Stream API permite processar sequências de elementos de maneira declarativa e funcional (usando métodos como filter, map, collect).",
    "Facilita o processamento paralelo sem escrever código manual complexo de threads."
);

addQuestion(
    "Java", "Difícil",
    "No contexto de tratamento de exceções em Java, qual é a principal diferença entre Checked Exceptions e Unchecked Exceptions?",
    "Obrigatoriedade de tratamento em tempo de compilação",
    ["A) Checked exceptions herdam de RuntimeException, enquanto unchecked herdam de Exception", "B) O compilador obriga o desenvolvedor a tratar ou declarar checked exceptions (como IOException), enquanto unchecked (como NullPointerException) não são verificadas em compilação", "C) Exceções checked nunca podem ser capturadas por blocos catch", "D) Unchecked exceptions encerram o sistema operacional obrigatoriamente"],
    "B",
    "Exceções checadas (Exception direta) forçam o uso de try-catch ou throws na assinatura. Exceções não checadas (RuntimeException) indicam falhas de lógica que podem ocorrer em tempo de execução.",
    "Exemplos de unchecked: NullPointerException, ArrayIndexOutOfBoundsException."
);

addQuestion(
    "Java", "Fácil",
    "Qual palavra-chave é utilizada em Java para impedir que uma classe seja herdada ou que um método seja sobrescrito?",
    "final class Servidor",
    ["A) static", "B) private", "C) final", "D) abstract"],
    "C",
    "O modificador final aplicado a uma classe proíbe herança. Aplicado a um método, proíbe sobrescrita (override). Aplicado a uma variável, torna-a uma constante.",
    "Garante imutabilidade estrutural ou de valor."
);

addQuestion(
    "Java", "Média",
    "O que faz o bloco finally em uma estrutura try-catch-finally?",
    "Execução garantida de código de limpeza",
    ["A) É executado apenas se ocorrer uma exceção grave no bloco try", "B) É executado independentemente de ter ocorrido uma exceção ou não", "C) Substitui o bloco catch em qualquer situação", "D) Serve apenas para fechar conexões de rede em modo assíncrono"],
    "B",
    "O bloco finally garante que instruções cruciais (como fechamento de arquivos, conexões de banco de dados ou sockets) sejam executadas antes de sair do bloco.",
    "Mesmo que haja um return no try ou catch, o finally executa (com raras exceções como System.exit())."
);

addQuestion(
    "Java", "Difícil",
    "O que são os Records introduzidos formalmente no Java 14/16?",
    "Classes portadoras de dados imutáveis (Transparent Data Carriers)",
    ["A) Arquivos de configuração binários usados pelo compilador javac", "B) Uma forma concisa de declarar classes cuja única finalidade é armazenar dados imutáveis, gerando automaticamente construtores, equals, hashCode e getters", "C) Uma substituição para tabelas de banco de dados NoSQL", "D) Uma estrutura de dados para gerenciar logs do sistema"],
    "B",
    "Records reduzem drasticamente o código boilerplate (código repetitivo) necessário para criar classes de transporte de dados (DTOs) ou entidades simples.",
    "Declarados com a palavra-chave public record Aluno(String nome, int idade) {}."
);

addQuestion(
    "Java", "Média",
    "Qual é a utilidade da palavra-chave super dentro de uma subclasse em Java?",
    "Referência à superclasse imediata",
    ["A) Chamar o construtor ou métodos da classe pai (superclasse)", "B) Criar uma nova instância estática da classe atual", "C) Converter tipos primitivos em objetos empacotados", "D) Definir uma variável global compartilhada"],
    "A",
    "super() permite invocar o construtor da classe pai, enquanto super.metodo() invoca um método sobrescrito na superclasse.",
    "Deve ser a primeira instrução em um construtor de subclasse se usada para chamar o construtor pai."
);

addQuestion(
    "Java", "Fácil",
    "Como se declara corretamente um vetor (array) de 10 inteiros em Java?",
    "int[] numeros = new int[10];",
    ["A) int numeros[10];", "B) int[] numeros = new int[10];", "C) array numeros = new array(10);", "D) vector numeros = new vector();"],
    "B",
    "Em Java, a declaração de arrays utiliza colchetes e o operador new especificando o tamanho fixo da estrutura na memória.",
    "Os índices dos elementos vão de 0 até 9."
);

addQuestion(
    "Java", "Difícil",
    "O que significa dizer que o coletor de lixo (Garbage Collector) do Java opera de forma automática?",
    "Gerenciamento automático de memória no heap",
    ["A) O programador deve liberar explicitamente cada objeto usando o comando delete", "B) A JVM identifica e remove da memória os objetos que não possuem mais nenhuma referência ativa", "C) O sistema operacional apaga arquivos temporários do disco rígido", "D) As variáveis locais da pilha são limpas por threads de sistema"],
    "B",
    "O Garbage Collector monitora o heap do Java, reciclando dinamicamente a memória ocupada por objetos inalcançáveis para evitar vazamentos de memória (memory leaks).",
    "Elimina a necessidade de desalocação manual de ponteiros como em C ou C++."
);

addQuestion(
    "Java", "Média",
    "Qual interface do Java Collections Framework representa uma estrutura baseada em chave-valor?",
    "Map (como HashMap, TreeMap)",
    ["A) List", "B) Set", "C) Map", "D) Queue"],
    "C",
    "A interface Map não herda de Collection, mapeando chaves exclusivas para valores correspondentes.",
    "Exemplo clássico: Map<String, String> configs = new HashMap<>();."
);

addQuestion(
    "Java", "Fácil",
    "Qual modificador indica que um atributo ou método pertence à classe em si, e não a uma instância específica criada com new?",
    "static",
    ["A) final", "B) static", "C) transient", "D) volatile"],
    "B",
    "Membros static são compartilhados por todas as instâncias da classe e podem ser acessados diretamente sem criar um objeto.",
    "Exemplo: Math.sqrt() ou o método main."
);

addQuestion(
    "Java", "Média",
    "O que é o conceito de Autoboxing e Unboxing em Java?",
    "Conversão automática entre tipos primitivos e suas classes wrapper",
    ["A) A conversão automática de arquivos Java para bytecode", "B) A conversão automática realizada pelo compilador entre tipos primitivos (ex: int) e seus wrappers correspondentes (ex: Integer)", "C) A serialização automática de objetos para transmissão em rede", "D) O empacotamento de dependências usando Maven ou Gradle"],
    "B",
    "Autoboxing converte primitivo para objeto (ex: int para Integer), e unboxing faz o inverso de forma transparente.",
    "Facilita o uso de tipos primitivos em coleções como ArrayList<Integer>."
);

addQuestion(
    "Java", "Difícil",
    "O que é uma Classe Anônima (Anonymous Inner Class) em Java?",
    "Declaração e instanciação simultânea de uma classe sem nome",
    ["A) Uma classe que não possui métodos declarados", "B) Uma classe sem nome declarada e instanciada em uma única expressão, útil para implementações rápidas de interfaces ou classes abstratas", "C) Uma classe de segurança que oculta o código-fonte compilado", "D) Um erro de sintaxe gerado pelo compilador moderno"],
    "B",
    "Classes anônimas permitiam criar implementações pontuais de interfaces (como listeners antigos de eventos), sendo hoje em dia grandemente substituídas por expressões lambda.",
    "Sintaxe típica: Runnable r = new Runnable() { @Override public void run() { ... } };."
);

addQuestion(
    "Java", "Fácil",
    "Qual operador em Java é utilizado para verificar se um objeto é uma instância de uma determinada classe ou interface?",
    "instanceof",
    ["A) isInstance", "B) instanceof", "C) checkClass", "D) typeOf"],
    "B",
    "O operador instanceof retorna um valor booleano indicando se o objeto à esquerda é compatível com o tipo especificado à direita.",
    "Muito útil antes de realizar downcasting de referências."
);

addQuestion(
    "Java", "Média",
    "O que são métodos default em interfaces (recurso introduzido no Java 8)?",
    "Métodos com implementação padrão em interfaces",
    ["A) Métodos que obrigatoriamente devem ser reescritos por todas as classes", "B) Métodos declarados com a palavra-chave default que possuem corpo/implementação dentro da interface, permitindo evolução sem quebrar classes legadas", "C) Métodos privados utilitários", "D) Construtores padrão gerados automaticamente"],
    "B",
    "Permitem adicionar novos métodos com comportamento padrão a interfaces existentes sem exigir que todas as classes implementadoras modifiquem seu código imediatamente.",
    "Evita quebrar contratos em bibliotecas legadas."
);

addQuestion(
    "Java", "Difícil",
    "No contexto de concorrência em Java, qual é a utilidade da palavra-chave synchronized?",
    "Controle de concorrência e exclusão mútua",
    ["A) Garantir que variáveis estáticas nunca mudem de valor", "B) Garantir que um bloco de código ou método seja acessado por apenas uma thread por vez, evitando condições de corrida", "C) Sincronizar o relógio do sistema operacional com servidores externos", "D) Executar tarefas de forma assíncrona em segundo plano"],
    "B",
    "synchronized provê exclusão mútua em blocos críticos de código multi-thread, prevenindo corrupção de dados compartilhados.",
    "Garante visibilidade de memória e atomicidade em seções críticas."
);

addQuestion(
    "Java", "Fácil",
    "Qual pacote padrão do Java é importado implicitamente em todos os arquivos de código-fonte Java sem necessidade de declaração explícita?",
    "java.lang",
    ["A) java.util", "B) java.io", "C) java.lang", "D) java.net"],
    "C",
    "O pacote java.lang contém classes fundamentais como String, System, Math, Integer, Exception e Object, sendo importado automaticamente.",
    "Outros pacotes exigem o comando import."
);

addQuestion(
    "Java", "Média",
    "O que significa a serialização de objetos em Java?",
    "Transformação de objeto em fluxo de bytes",
    ["A) Converter código Java em código executável de máquina nativa", "B) O processo de converter o estado de um objeto em uma sequência de bytes para armazenamento em arquivo ou transmissão em rede", "C) Organizar métodos em ordem alfabética estrita", "D) Ordenar coleções de dados numéricos"],
    "B",
    "Para serializar um objeto, a classe deve implementar a interface marcadora Serializable.",
    "O oposto (reconstruir o objeto a partir de bytes) chama-se desserialização."
);

addQuestion(
    "Java", "Difícil",
    "O que estabelece a especificação do Java Memory Model (JMM) em relação à palavra-chave volatile?",
    "Garantia de visibilidade imediata de variáveis entre threads",
    ["A) Torna a variável imutável como uma constante", "B) Garante que leituras e escritas nessa variável sejam feitas diretamente na memória principal (RAM), garantindo visibilidade imediata entre diferentes threads", "C) Acelera o cálculo matemático usando processamento de GPU", "D) Impede que a variável seja coletada pelo Garbage Collector"],
    "B",
    "Em arquiteturas modernas de CPU, threads usam caches locais. O modificador volatile evita que uma thread use valores desatualizados em cache de variáveis compartilhadas.",
    "Não garante atomicidade para operações compostas como incremento (++)."
);

addQuestion(
    "Java", "Fácil",
    "Qual método da classe Object (presente em todas as classes Java) é utilizado para obter a representação textual de um objeto?",
    "toString()",
    ["A) printObject()", "B) toString()", "C) stringValue()", "D) display()"],
    "B",
    "O método toString() retorna uma string que descreve o objeto. É altamente recomendável sobrescrevê-lo nas suas classes para depuração legível.",
    "Por padrão, retorna o nome da classe seguido por @ e o hash code em hexadecimal."
);

addQuestion(
    "Java", "Média",
    "Qual é a finalidade principal do comando try-with-resources introduzido no Java 7?",
    "Gerenciamento automático de recursos que implementam AutoCloseable",
    ["A) Capturar múltiplos erros de sintaxe em tempo de compilação", "B) Fechar automaticamente recursos abertos (como arquivos e conexões JDBC) ao término do bloco try", "C) Substituir blocos try-catch tradicionais em códigos assíncronos", "D) Otimizar o consumo de memória RAM do Garbage Collector"],
    "B",
    "O try-with-resources fecha de forma segura e automática qualquer recurso que implemente a interface AutoCloseable ou Closeable, mesmo se exceções forem lançadas.",
    "Evita vazamentos de conexões e arquivos abertos."
);

addQuestion(
    "Java", "Difícil",
    "O que é a reflexão (Reflection API) em Java (java.lang.reflect)?",
    "Inspeção e manipulação dinâmica de classes em tempo de execução",
    ["A) Um mecanismo de renderização gráfica 3D", "B) Uma API que permite a um programa examinar e modificar sua própria estrutura, inspecionando classes, métodos, atributos e construtores em tempo de execução", "C) Um padrão de projeto para clonar objetos profundos", "D) Um compilador just-in-time otimizado"],
    "B",
    "Reflection é amplamente utilizada por frameworks como Spring e Hibernate para mapear entidades, injetar dependências e processar anotações dinamicamente.",
    "Pode impactar a performance se usada excessivamente e burlar verificações de encapsulamento."
);

addQuestion(
    "Java", "Fácil",
    "Qual palavra-chave é utilizada para criar uma nova instância (objeto) de uma classe em Java?",
    "new",
    ["A) create", "B) instantiate", "C) new", "D) malloc"],
    "C",
    "O operador new aloca memória no heap para o novo objeto e invoca o construtor correspondente.",
    "Exemplo: Carro meuCarro = new Carro();."
);

addQuestion(
    "Java", "Média",
    "O que é uma Enum (Enumeração) em Java?",
    "Tipo de dado especial que representa um conjunto fixo de constantes",
    ["A) Uma classe abstrata sem atributos", "B) Um tipo de dado especial que restringe uma variável a assumir apenas um conjunto predefinido de valores constantes nomeados", "C) Uma interface para manipulação de arquivos binários", "D) Uma estrutura de repetição equivalente ao for clássico"],
    "B",
    "Enums melhoram a segurança de tipos e legibilidade do código comparado ao uso de constantes inteiras ou strings soltas.",
    "Exemplo: dias da semana, status de pedidos, direções cardinais."
);

addQuestion(
    "Java", "Difícil",
    "Qual é a diferença conceitual e de comportamento entre StringBuilder e StringBuffer?",
    "Sincronização de threads",
    ["A) StringBuilder é mais lento que StringBuffer em qualquer ambiente", "B) StringBuilder não é sincronizada (não thread-safe), o que a torna mais rápida para uso em uma única thread; StringBuffer é sincronizada (thread-safe)", "C) StringBuffer foi descontinuada no Java moderno", "D) Não há nenhuma diferença de performance ou comportamento"],
    "B",
    "A sincronização interna do StringBuffer adiciona overhead de desempenho. Se o código roda em uma única thread, StringBuilder é sempre a melhor escolha.",
    "Ambas compartilham exatamente os mesmos métodos públicos de manipulação de texto."
);

addQuestion(
    "Java", "Fácil",
    "Como se faz um comentário de múltiplas linhas em código Java?",
    "/* Comentário */",
    ["A) // Comentário", "B) /* Comentário */", "C) # Comentário", "D) <!-- Comentário -->"],
    "B",
    "Comentários de múltiplas linhas em Java usam /* ... */. Para documentação JavaDoc, usa-se /** ... */ e para linha única //.",
    "O compilador ignora completamente qualquer comentário."
);

addQuestion(
    "Java", "Média",
    "O que significa a assinatura de método public static final int MAX = 100; dentro de uma interface?",
    "Definição de constante pública estática",
    ["A) A variável pode ser alterada livremente por classes implementadoras", "B) Todos os atributos declarados em interfaces são implicitamente public, static e final, funcionando como constantes globais", "C) O código gerará um erro de compilação por redundância de modificadores", "D) O atributo é privado e visível apenas internamente"],
    "B",
    "Em interfaces Java, qualquer campo declarado é automaticamente tratado como constante pública, estática e final.",
    "Não é necessário repetir os modificadores, embora seja comum."
);

addQuestion(
    "Java", "Difícil",
    "O que são métodos estáticos private permitidos em interfaces a partir do Java 9?",
    "Métodos auxiliares privados para reutilização interna na interface",
    ["A) Métodos acessíveis diretamente por qualquer classe externa ao pacote", "B) Métodos auxiliares que permitem compartilhar código comum entre métodos default ou estáticos dentro da própria interface sem expô-los publicamente", "C) Construtores privados para impedir instanciação de classes", "D) Métodos obsoletos substituídos por lambdas"],
    "B",
    "O Java 9 permitiu que interfaces encapsulassem lógica repetitiva em métodos privados, melhorando a organização do código sem violar o contrato público.",
    "Reduz duplicação de código entre métodos default."
);

addQuestion(
    "Java", "Fácil",
    "Qual operador aritmético em Java é utilizado para calcular o resto de uma divisão inteira?",
    "%",
    ["A) /", "B) %%", "C) %", "D) mod"],
    "C",
    "O operador módulo % retorna o resto da divisão entre dois números inteiros (ou de ponto flutuante).",
    "Exemplo: 5 % 2 resulta em 1."
);

addQuestion(
    "Java", "Média",
    "O que ocorre se tentarmos compilar e executar uma classe Java que não possui nenhum construtor explícito escrito pelo programador?",
    "Inclusão automática do construtor padrão (default constructor)",
    ["A) O compilador emite um erro fatal de compilação", "B) O compilador insere automaticamente um construtor padrão público sem parâmetros", "C) O programa roda, mas gera NullPointerException imediata", "D) A JVM utiliza um construtor genérico externo"],
    "B",
    "Se nenhum construtor é definido na classe, o compilador gera um construtor padrão sem argumentos (ClassName() {}) por baixo dos panos.",
    "Caso você crie um construtor com parâmetros, o construtor padrão deixa de ser gerado automaticamente."
);

addQuestion(
    "Java", "Difícil",
    "Qual é a finalidade da anotação @Override em Java?",
    "Verificação em tempo de compilação de sobrescrita de método",
    ["A) Marcar o método como obsoleto (deprecated)", "B) Solicitar que o compilador verifique se o método realmente está sobrescrevendo um método da superclasse ou interface, prevenindo erros de digitação na assinatura", "C) Forçar a execução síncrona do método em múltiplas threads", "D) Otimizar a velocidade de execução via JIT compiler"],
    "B",
    "@Override é uma boa prática de segurança de código. Se você errar o nome ou os parâmetros do método herdado, o compilador avisa imediatamente.",
    "Não afeta o comportamento em tempo de execução, servindo para checagem estática."
);

addQuestion(
    "Java", "Difícil",
    "No contexto da API de Streams do Java, qual é a diferença fundamental entre operações intermediárias (intermediate) e operações terminais (terminal)?",
    "Avaliação tardia (lazy evaluation) versus execução imediata",
    ["A) Operações intermediárias executam imediatamente, enquanto as terminais são opcionais", "B) Operações intermediárias são lazy (retornam um novo Stream e só executam quando uma operação terminal é acionada), enquanto as terminais acionam o processamento e produzem um resultado ou efeito colateral", "C) Operações terminais servem apenas para filtrar dados em paralelo", "D) Não existe diferença técnica de desempenho entre elas"],
    "B",
    "As streams do Java usam avaliação tardia (lazy evaluation). Nenhuma operação de filtro ou mapeamento roda até que uma operação terminal (como collect, forEach ou reduce) seja invocada.",
    "Isso permite otimizações importantes de encadeamento pelo compilador e JVM."
);

/* =====================================================
   BLOCO 5: DART E FLUTTER (40 QUESTÕES)
===================================================== */

addQuestion(
    "Dart/Flutter", "Fácil",
    "No ecossistema Dart e Flutter, qual é a principal diferença entre os tipos de widgets 'StatelessWidget' e 'StatefulWidget'?",
    "Stateless vs StatefulWidget",
    [
        "A) O StatelessWidget mantém estado interno mutável, enquanto o StatefulWidget é imutável após renderizado.",
        "B) O StatelessWidget é imutável e não mantém estado interno mutável ao longo do ciclo de vida, enquanto o StatefulWidget pode gerenciar e alterar estado interno.",
        "C) O StatefulWidget executa exclusivamente em servidores web, enquanto o StatelessWidget é exclusivo para aplicativos móveis nativos.",
        "D) Não há diferença arquitetural; ambos utilizam o mesmo gerenciador de estado nativo do Dart."
    ],
    "B",
    "Widgets sem estado (Stateless) dependem apenas de suas configurações iniciais, enquanto widgets com estado (Stateful) possuem um objeto State associado que pode sofrer alterações e redesenhar a tela (setState).",
    "Sempre dê preferência a StatelessWidget quando o componente for estático para otimizar a performance."
);

addQuestion(
    "Dart/Flutter", "Média",
    "Qual modificador de palavra-chave na linguagem Dart é utilizado para declarar variáveis que podem ser calculadas em tempo de execução, mas cujo valor é atribuído uma única vez e permanece imutável após a inicialização?",
    "final vs const",
    [
        "A) var",
        "B) dynamic",
        "C) final",
        "D) static"
    ],
    "C",
    "A palavra-chave `final` define uma variável que só pode ser configurada uma vez. Já o `const` define uma constante estática avaliada obrigatoriamente em tempo de compilação.",
    "Cuidado para não confundir: `const` é mais restrito que `final` por exigir valor conhecido antes mesmo de rodar o aplicativo."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "No Flutter, qual é o papel fundamental do motor gráfico de renderização (como o Impeller ou o antigo Skia) na arquitetura do framework?",
    "Motor gráfico e renderização",
    [
        "A) Traduzir diretamente o código Dart para componentes nativos específicos de UI (como botões nativos do Android e iOS).",
        "B) Desenhar os pixels diretamente na tela utilizando gráficos acelerados por hardware, ignorando a árvore de widgets nativa do sistema operacional.",
        "C) Gerenciar exclusivamente as requisições de rede HTTP e a persistência local via SQLite.",
        "D) Executar a máquina virtual Dart em segundo plano em um thread separado de I/O."
    ],
    "B",
    "O Flutter utiliza uma abordagem de renderização própria (cross-platform non-native components), desenhando os elementos usando seu próprio motor gráfico, o que garante alta performance e consistência visual entre diferentes plataformas.",
    "Isso explica por que um botão no Flutter se parece exatamente igual no iOS e no Android por padrão."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual método é obrigatório em qualquer classe que herda de StatelessWidget ou StatefulWidget em Flutter?",
    "Método build",
    [
        "A) initState()",
        "B) render()",
        "C) build()",
        "D) create()"
    ],
    "C",
    "O método build(BuildContext context) é obrigatório e descreve a parte da interface do usuário representada por este widget.",
    "O método build é chamado sempre que o widget precisa ser renderizado novamente."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "O que o operador de segurança contra nulos (null-safety) '??' faz em Dart?",
    "Operador de coalescência nula",
    [
        "A) Lança uma exceção se a variável for nula.",
        "B) Retorna o operando à esquerda se ele não for nulo; caso contrário, retorna o operando à direita.",
        "C) Força o compilador a ignorar erros de nulidade.",
        "D) Converte um tipo inteiro para string de forma segura."
    ],
    "B",
    "O operador de coalescência nula (??) retorna a expressão à esquerda se ela não for nula; se for, avalia e retorna a expressão à direita.",
    "É ideal para definir valores padrão de forma concisa."
);

addQuestion(
    "Dart/Flutter", "Média",
    "Qual componente do Flutter é mais indicado para criar uma lista longa e dinâmica de itens de forma eficiente, carregando apenas os elementos visíveis na tela sob demanda?",
    "ListView.builder",
    [
        "A) Column",
        "B) ListView",
        "C) ListView.builder",
        "D) Stack"
    ],
    "C",
    "O ListView.builder constrói os itens sob demanda, conforme eles entram na área visível da tela, otimizando o uso de memória em listas extensas.",
    "Nunca utilize Column para listas grandes com muitos elementos para evitar problemas de desempenho."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que são Isolate em Dart?",
    "Concorrência e Isolates",
    [
        "A) Componentes visuais isolados que não afetam o layout principal.",
        "B) Threads independentes que possuem sua própria memória heap, permitindo processamento concorrente sem bloquear a thread principal (UI thread).",
        "C) Funções assíncronas baseadas em Future e async/await.",
        "D) Bibliotecas de terceiros para gerenciar requisições HTTP seguras."
    ],
    "B",
    "Em Dart, o código roda na thread principal (event loop). Para tarefas pesadas de CPU, usam-se Isolates, que rodam em paralelo com memórias separadas.",
    "Isolates ajudam a manter a interface fluida mesmo durante cálculos complexos."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Como é chamada a linguagem de programação principal utilizada para desenvolver aplicativos em Flutter?",
    "Linguagem Dart",
    [
        "A) JavaScript",
        "B) TypeScript",
        "C) Kotlin",
        "D) Dart"
    ],
    "D",
    "Flutter utiliza a linguagem Dart, desenvolvida pelo Google, que suporta compilação JIT (Just-In-Time) para desenvolvimento rápido e AOT (Ahead-Of-Time) para produção.",
    "Dart possui tipagem forte e suporta orientação a objetos."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual é a utilidade do arquivo pubspec.yaml em um projeto Flutter?",
    "Arquivo pubspec.yaml",
    [
        "A) Configurar as regras de estilização CSS do aplicativo.",
        "B) Gerenciar dependências do projeto, fontes, ativos (imagens) e metadados gerais.",
        "C) Compilar o código nativo para iOS e Android simultaneamente.",
        "D) Executar os testes unitários automatizados."
    ],
    "B",
    "O arquivo pubspec.yaml é o manifesto do projeto, onde declaramos pacotes externos, fontes locais e assets de imagens.",
    "Qualquer alteração de dependência exige a execução do comando pub get."
);

addQuestion(
    "Dart/Flutter", "Média",
    "No contexto de programação assíncrona em Dart, qual é a diferença essencial entre um Future e um Stream?",
    "Future vs Stream",
    [
        "A) Future lida com um único valor assíncrono futuro, enquanto Stream lida com uma sequência de eventos ou múltiplos valores ao longo do tempo.",
        "B) Future roda em uma thread separada, enquanto Stream roda na thread principal.",
        "C) Stream é síncrono e Future é assíncrono.",
        "D) Não há diferença prática; ambos são sinônimos para Promises."
    ],
    "A",
    "Um Future representa a computação de um único valor que estará disponível no futuro. Um Stream é como uma tubulação de dados que pode emitir múltiplos eventos ao longo do tempo.",
    "Streams são amplamente utilizados para manipulação de dados em tempo real."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual é a função do operador de acesso condicional '?.', também conhecido como safe navigation operator, em Dart?",
    "Navegação segura contra nulos",
    [
        "A) Força a conversão de um objeto para nulo.",
        "B) Evita o lançamento de NullPointerException caso o objeto à esquerda seja nulo, retornando nulo em vez de quebrar a execução.",
        "C) Compara se duas variáveis apontam para o mesmo endereço de memória.",
        "D) Cria uma nova instância estática da classe."
    ],
    "B",
    "O operador `?.` verifica se o objeto é nulo antes de tentar acessar uma propriedade ou método, evitando falhas em tempo de execução.",
    "Recurso essencial introduzido com o sound null-safety."
);

addQuestion(
    "Dart/Flutter", "Média",
    "O que significa dizer que o Dart possui suporte a tipagem opcional (ou inferência de tipos avançada) através de palavras-chave como var?",
    "Tipagem e inferência em Dart",
    [
        "A) Que o Dart é inteiramente fracamente tipado como JavaScript.",
        "B) Que o compilador infere automaticamente o tipo da variável no momento da atribuição inicial, mantendo a segurança estática de tipos.",
        "C) Que os tipos de dados mudam dinamicamente durante a execução do programa.",
        "D) Que variáveis declaradas com var não podem receber novos valores."
    ],
    "B",
    "Embora o Dart seja fortemente tipado, ele possui inferência de tipos robusta, permitindo usar var sem perder a checagem estática de tipos realizada pelo compilador.",
    "Uma vez inferido o tipo, você não pode atribuir um valor de outro tipo àquela variável."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que é o 'BuildContext' em Flutter e qual é a sua principal responsabilidade na árvore de widgets?",
    "BuildContext",
    [
        "A) Um gerenciador de banco de dados local SQLite otimizado para mobile.",
        "B) Um objeto que representa o local de um widget na árvore de widgets, permitindo localizar outros widgets ancestrais ou acessar temas e mídias.",
        "C) O motor gráfico responsável por compilar o código nativo.",
        "D) Uma função assíncrona para requisições de rede."
    ],
    "B",
    "O BuildContext é o manipulador da posição do widget na árvore de componentes. É indispensável para operações como Navigator.of(context) ou Theme.of(context).",
    "Erros comuns de contexto ocorrem quando se tenta usá-lo após assincronia sem checar se o widget ainda está montado."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual comando executado no terminal é utilizado para criar um novo projeto padrão em Flutter?",
    "Comando flutter create",
    [
        "A) flutter init meu_app",
        "B) flutter new project",
        "C) flutter create meu_app",
        "D) dart build app"
    ],
    "C",
    "O comando `flutter create <nome_do_projeto>` estrutura toda a árvore de diretórios padrão exigida para um aplicativo Flutter multiplataforma.",
    "Gera pastas como lib, android, ios, test, entre outras."
);

addQuestion(
    "Dart/Flutter", "Média",
    "No ciclo de vida de um StatefulWidget, qual método é executado apenas uma única vez quando o objeto State é inserido pela primeira vez na árvore de widgets?",
    "Método initState",
    [
        "A) build()",
        "B) initState()",
        "C) dispose()",
        "D) didUpdateWidget()"
    ],
    "B",
    "O método initState() é o ponto ideal para inicializar variáveis de estado, assinar streams ou carregar dados iniciais.",
    "É obrigatório chamar `super.initState()` no início da implementação."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que acontece no ciclo de vida de um StatefulWidget quando ele é permanentemente removido da árvore de widgets?",
    "Método dispose",
    [
        "A) O método initState é chamado novamente para limpeza.",
        "B) O método dispose() é acionado, permitindo liberar recursos como controllers, animações e listeners para evitar vazamentos de memória.",
        "C) A máquina virtual Dart encerra o aplicativo imediatamente.",
        "D) O garbage collector remove a tela sem avisar o widget."
    ],
    "B",
    "O método dispose() serve estritamente para limpeza de recursos pesados. Sempre chame `super.dispose()` ao final.",
    "Esquecer de dar dispose em TextEditingController ou StreamSubscription causa memory leaks."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual estrutura de controle condicional em Dart permite lidar de forma elegante e concisa com múltiplos padrões e tipos (Pattern Matching), introduzida nas versões recentes da linguagem?",
    "Pattern Matching moderno",
    [
        "A) O comando switch-case tradicional aprimorado com padrões e expressões",
        "B) Apenas if-else aninhados",
        "C) O operador ternário triplo",
        "D) A instrução goto"
    ],
    "A",
    "O Dart moderno introduziu suporte completo a patterns e destructuring em switches, permitindo desestruturar objetos e listas diretamente nas condições.",
    "Torna o código muito mais expressivo e limpo."
);

addQuestion(
    "Dart/Flutter", "Média",
    "Qual é a utilidade do operador 'as' em Dart?",
    "Cast de tipos com 'as'",
    [
        "A) Atribuir um valor padrão caso a variável seja nula.",
        "B) Realizar a coerção (cast) de tipo de um objeto para uma classe específica da hierarquia.",
        "C) Declarar uma variável assíncrona.",
        "D) Importar um pacote externo com um prefixo."
    ],
    "B",
    "O operador `as` faz um cast explícito de tipo. Se o objeto não for do tipo especificado, uma exceção do tipo TypeError é lançada.",
    "Prefira usar o operador `is` para checagens seguras antes de realizar o cast."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "No gerenciamento de estado assíncrono em telas do Flutter, qual widget escuta um Stream ou Future e reconstrói automaticamente a interface com base no estado mais recente da operação?",
    "FutureBuilder e StreamBuilder",
    [
        "A) StateObserver",
        "B) FutureBuilder / StreamBuilder",
        "C) ValueNotifierWidget",
        "D) AsyncRenderer"
    ],
    "B",
    "Os widgets FutureBuilder e StreamBuilder gerenciam conexões assíncronas declarativamente, facilitando exibir indicadores de progresso (loading) ou dados retornados.",
    "Eliminam a necessidade de escrever lógica manual de setState para requisições simples."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual widget do Flutter é utilizado para alinhar seu filho e dimensioná-lo de acordo com uma proporção (aspect ratio) específica?",
    "Aspectadio",
    [
        "A) SizedBox",
        "B) AspectRatio",
        "C) Expanded",
        "D) Padding"
    ],
    "B",
    "O AspectRatio tenta ajustar o widget filho para uma proporção largura/altura predeterminada.",
    "Muito útil em players de vídeo ou exibição de imagens padronizadas."
);

addQuestion(
    "Dart/Flutter", "Média",
    "Qual é a diferença de comportamento entre Expanded e Flexible dentro de um widget flexível como Row ou Column?",
    "Expanded vs Flexible",
    [
        "A) Expanded força o filho a preencher todo o espaço disponível restante no eixo principal; Flexible permite que o filho ocupe até o espaço máximo, mas pode ser menor.",
        "B) Expanded só funciona em Column, enquanto Flexible só funciona em Row.",
        "C) Flexible é obsoleto e foi substituído inteiramente por Expanded.",
        "D) Não há diferença técnica de layout."
    ],
    "A",
    "O Expanded impõe flexFittight (obrigando o filho a ocupar o espaço), enquanto o Flexible usa flexFitloose (permitindo que o filho decida seu tamanho desde que caiba no limite).",
    "Conhecer essa sutis diferença evita erros de layout flex overflow."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que são extension methods (métodos de extensão) em Dart?",
    "Extension methods",
    [
        "A) Uma forma de herdar classes fechadas sem usar o modificador extends.",
        "B) Um recurso que permite adicionar novas funcionalidades (métodos ou getters) a bibliotecas ou classes existentes sem modificar seu código-fonte original.",
        "C) Plugins nativos para comunicação via canal de plataforma (MethodChannel).",
        "D) Atalhos de compilação para arquivos YAML."
    ],
    "B",
    "Extension methods permitem estender classes de terceiros ou do próprio Dart (como adicionar métodos a String ou int) de forma limpa e segura.",
    "Declarados com a palavra-chave `extension Nome on Tipo { ... }`."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Como se define uma função anônima (closure / lambda) em Dart que recebe um parâmetro inteiro x e retorna o seu dobro?",
    "Funções anônimas em Dart",
    [
        "A) function(int x) { return x * 2; }",
        "B) (int x) => x * 2;",
        "C) lambda x: x * 2",
        "D) def calc(x) -> x * 2"
    ],
    "B",
    "Dart suporta arrow syntax (`=>`) para funções de expressão única, sendo amplamente usada em lambdas e callbacks.",
    "Equivalente a uma closure tradicional com corpo `{ return ... }`."
);

addQuestion(
    "Dart/Flutter", "Média",
    "Qual é a utilidade do construtor nomeado `Named Constructors` em classes Dart?",
    "Construtores nomeados",
    [
        "A) Permitir criar múltiplos construtores com propósitos distintos em uma mesma classe, identificados por um nome específico.",
        "B) Impedir que a classe seja instanciada fora do pacote.",
        "C) Substituir obrigatoriamente o construtor padrão.",
        "D) Criar métodos estáticos de acesso global."
    ],
    "A",
    "Dart não suporta sobrecarga de construtores por assinatura tradicional, por isso utiliza construtores nomeados como `Classe.nome()`.",
    "Exemplo clássico no Flutter: `DateTime.utc()` ou `Container.from BoxDecoration()`."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que são os Mixins em Dart e qual palavra-chave é utilizada para aplicá-los em uma classe?",
    "Mixins em Dart",
    [
        "A) Mecanismo de herança múltipla de classes tradicionais (extends múltiplo).",
        "B) Uma forma de reutilizar código de uma classe em múltiplas hierarquias de classes diferentes sem usar herança linear, utilizando a palavra-chave `with`.",
        "C) Interfaces puras focadas em requisições de rede.",
        "D) Funções assíncronas executadas em background."
    ],
    "B",
    "Mixins permitem injetar comportamentos em classes de forma modular. São declarados com a palavra `mixin` e aplicados com `with`.",
    "Evitam os problemas clássicos associados à herança múltipla estrita."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual comando do Flutter CLI é utilizado para verificar o ambiente de desenvolvimento e identificar dependências ausentes ou problemas de configuração?",
    "Comando flutter doctor",
    [
        "A) flutter check",
        "B) flutter verify",
        "C) flutter doctor",
        "D) dart analyze"
    ],
    "C",
    "O `flutter doctor` faz um diagnóstico completo da máquina, checando SDKs, Android Studio, Xcode, dispositivos conectados e licenças.",
    "Sempre o primeiro comando a rodar quando há falhas de build."
);

addQuestion(
    "Dart/Flutter", "Média",
    "O que é o pub.dev no ecossistema Flutter e Dart?",
    "Repositório pub.dev",
    [
        "A) Um ambiente oficial de testes em nuvem para aplicativos iOS.",
        "B) O repositório oficial de pacotes e bibliotecas de terceiros para Dart e Flutter.",
        "C) O compilador oficial executado na web.",
        "D) Uma ferramenta de design gráfico de interfaces."
    ],
    "B",
    "O pub.dev abriga milhares de pacotes open-source reutilizáveis que facilitam desde requisições HTTP até gerenciamento de estado.",
    "Gerenciado diretamente através do arquivo pubspec.yaml."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que é o conceito de 'Tree Shaking' aplicado pelo compilador do Flutter durante a geração do build final de produção?",
    "Tree Shaking",
    [
        "A) Otimização visual que reorganiza a árvore de widgets em ordem alfabética.",
        "B) Remoção automática de código não utilizado (dead code) e classes/funções órfãs do pacote final para reduzir drasticamente o tamanho do binário.",
        "C) Processo de criptografia de arquivos assets.",
        "D) Compactação de imagens PNG para WebP."
    ],
    "B",
    "O tree shaking analisa estaticamente o código e elimina tudo o que não é chamado ou referenciado na aplicação compilada.",
    "Garante builds de produção altamente otimizados e leves."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual widget em Flutter é essencial para posicionar outros widgets de forma livre na tela, permitindo sobreposição (camadas z-index)?",
    "Widget Stack",
    [
        "A) Column",
        "B) Row",
        "C) Stack",
        "D) ListView"
    ],
    "C",
    "O Stack permite sobrepor filhos uns sobre os outros, geralmente combinado com o widget Positioned para controle exato de coordenadas.",
    "Ideal para criar efeitos como badges de notificação sobre ícones ou telas de splash."
);

addQuestion(
    "Dart/Flutter", "Média",
    "Qual é a utilidade do operador de coerção restrita contra nulos '!' (postfix error operator / bang operator) em Dart?",
    "Operador bang (!)",
    [
        "A) Nega um valor booleano (inversão lógica).",
        "B) Afirma ao compilador que uma expressão anulável (nullable) não é nula naquele ponto exato, lançando uma exceção caso seja.",
        "C) Converte uma string para inteiro.",
        "D) Interrompe a execução de um loop."
    ],
    "B",
    "O operador `!` diz ao compilador de null-safety para confiar em você. Se a variável for nula em tempo de execução, um NullThrownError é lançado.",
    "Deve ser usado com cautela extrema para evitar crashes inesperados."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "Como o Flutter lida com a comunicação nativa (interoperabilidade) com códigos específicos de plataforma (como Kotlin/Java no Android e Swift/Objective-C no iOS)?",
    "Platform Channels",
    [
        "A) Através de compilação cruzada direta via WebAssembly.",
        "B) Utilizando Platform Channels (MethodChannel), que enviam mensagens assíncronas serializadas entre a thread Dart e o código nativo.",
        "C) O Flutter não permite acessar APIs nativas do sistema operacional.",
        "D) Através de arquivos de configuração em formato XML."
    ],
    "B",
    "Os MethodChannels permitem invocar métodos nativos do sistema operacional a partir do Dart e vice-versa usando mensagens estruturadas.",
    "Fundamental para acessar sensores de hardware específicos não cobertos pelo framework."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual é o comportamento padrão do widget Scaffold em aplicativos Flutter?",
    "Estrutura básica Scaffold",
    [
        "A) Fornece uma estrutura visual padrão de design (Material Design) que inclui suporte para AppBar, Drawer, BottomNavigationBar e FloatingActionButton.",
        "B) Serve estritamente para gerenciar requisições de banco de dados local.",
        "C) É um componente puramente lógico sem representação gráfica.",
        "D) Gerencia rotas de navegação avançadas."
    ],
    "A",
    "O Scaffold é o esqueleto visual básico recomendado para estruturar telas seguindo as diretrizes do Material Design.",
    "Facilita enormemente a montagem de layouts comuns em aplicativos móveis."
);

addQuestion(
    "Dart/Flutter", "Média",
    "O que significa a compilação AOT (Ahead-Of-Time) utilizada pelo Dart para builds de produção em dispositivos móveis?",
    "Compilação AOT",
    [
        "A) O código é traduzido para código de máquina nativo antes da execução, garantindo inicialização rápida e alta performance.",
        "B) O código é interpretado linha por linha em tempo de execução.",
        "C) O código roda exclusivamente dentro de uma máquina virtual baseada em navegador.",
        "D) A compilação ocorre apenas quando o usuário abre o aplicativo pela primeira vez no celular."
    ],
    "A",
    "A compilação AOT traduz o código Dart diretamente para instruções de máquina nativas antes da distribuição, otimizando performance.",
    "Diferente do modo JIT, usado no modo Debug para permitir Hot Reload."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "O que é o Hot Reload no Flutter e por que ele é diferente do Hot Restart?",
    "Hot Reload vs Hot Restart",
    [
        "A) Hot Reload reinicia o aplicativo inteiro do zero; Hot Restart apenas limpa o cache.",
        "B) Hot Reload injeta arquivos de código Dart atualizados na máquina virtual em execução sem perder o estado atual da tela; Hot Restart reinicia o estado do app do zero.",
        "C) Hot Reload é exclusivo para plataformas web; Hot Restart é exclusivo para dispositivos físicos.",
        "D) Não há diferença técnica entre ambos."
    ],
    "B",
    "O Hot Reload preserva o estado da aplicação enquanto atualiza a árvore de widgets, permitindo ajustes rápidos de UI em segundos.",
    "O Hot Restart reinicia todo o estado global da aplicação."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual classe do Flutter gerencia a pilha de navegação (Navigator), permitindo empurrar (push) e desempurrar (pop) telas?",
    "Navegação com Navigator",
    [
        "A) RouterManager",
        "B) Navigator",
        "C) ScreenController",
        "D) RouteHandler"
    ],
    "B",
    "O Navigator gerencia rotas como uma pilha de páginas (stack of pages), onde `Navigator.push` adiciona uma tela e `Navigator.pop` a remove.",
    "Abordagem clássica de navegação imperativa em Flutter."
);

addQuestion(
    "Dart/Flutter", "Média",
    "O que são 'Generics' em Dart e qual é a principal vantagem de utilizá-los?",
    "Generics em Dart",
    [
        "A) Funções matemáticas avançadas para tratamento de números decimais.",
        "B) Um mecanismo de reutilização de código que permite criar classes, interfaces e métodos parametrizados por tipo, garantindo segurança estática sem perder flexibilidade.",
        "C) Atalhos para gerar código boilerplate automaticamente.",
        "D) Um sistema de controle de versão integrado."
    ],
    "B",
    "Generics (como `List<T>`) evitam casts explícitos e garantem checagem de tipos em tempo de compilação, prevenindo erros de tipo em coleções.",
    "Símbolos como `<T>` indicam parâmetros de tipo genérico."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "No contexto de gerenciamento de estado reativo avançado, o que caracteriza bibliotecas como Provider, Bloc/Cubit ou Riverpod?",
    "Gerenciamento de estado",
    [
        "A) Substituem inteiramente a necessidade de escrever código em linguagem Dart.",
        "B) Fornecem arquiteturas padronizadas para separar a lógica de negócios da interface do usuário e notificar widgets afetados para reconstrução seletiva.",
        "C) Conectam o aplicativo diretamente a servidores de hospedagem web.",
        "D) Compilam o aplicativo para código nativo de desktop."
    ],
    "B",
    "Essas ferramentas ajudam a organizar a aplicação desacoplando o estado dos widgets visuais, facilitando testes e manutenção em projetos grandes.",
    "A escolha da ferramenta depende da complexidade e preferência da equipe."
);

addQuestion(
    "Dart/Flutter", "Fácil",
    "Qual widget de espaçamento simples é comumente utilizado em Rows ou Columns para adicionar um espaço fixo entre os elementos?",
    "Widget SizedBox",
    [
        "A) Spacer",
        "B) SizedBox",
        "C) EmptyBox",
        "D) PaddingBlock"
    ],
    "B",
    "Um `SizedBox(width: 10)` ou `SizedBox(height: 10)` é a forma mais leve e idiomática de impor dimensões fixas ou espaçamentos em layouts lineares.",
    "Muito mais performático que aninhar múltiplos Padding desnecessários."
);

addQuestion(
    "Dart/Flutter", "Média",
    "O que significa a palavra-chave async e await em funções assíncronas escritas em Dart?",
    "Async e Await",
    [
        "A) Executam o código de forma síncrona bloqueando a thread principal.",
        "B) Tornam a manipulação de operações assíncronas (como requisições de rede) legível e linear, pausando a execução da função até que o Future seja resolvido sem travar a UI.",
        "C) Criam um novo processo isolado de hardware (Isolate).",
        "D) Forçam o garbage collector a limpar a memória imediatamente."
    ],
    "B",
    "O uso de `async/await` açúcar sintático (syntactic sugar) sobre Futures, permitindo escrever código assíncrono com aparência síncrona e limpa.",
    "Toda função `async` retorna obrigatoriamente um Future."
);

addQuestion(
    "Dart/Flutter", "Difícil",
    "Qual é o comportamento da palavra-chave 'rethrow' quando utilizada dentro de um bloco catch no tratamento de exceções em Dart?",
    "Comando rethrow",
    [
        "A) Interrompe a execução do aplicativo e fecha a janela.",
        "B) Relança exatamente a mesma exceção capturada, preservando o stack trace original para que possa ser tratada em níveis superiores da aplicação.",
        "C) Substitui a exceção atual por um erro genérico.",
        "D) Converte a exceção em uma string legível."
    ],
    "B",
    "O `rethrow` propaga a exceção original adiante sem perder a pilha de rastreamento (stack trace), ao contrário de fazer `throw e`, que reiniciaria o stack trace.",
    "Essencial em camadas de repositório ou tratamento centralizado de erros."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que preconiza o Teorema de CAP em sistemas distribuídos de bancos de dados?",
    "Teorema de CAP",
    ["A) Um sistema distribuído pode garantir simultaneamente e sem restrições a Consistência, Disponibilidade e Tolerância a Particionamento.", "B) Em caso de falha de rede (particionamento), um sistema distribuído pode escolher garantir Consistência ou Disponibilidade, mas nunca ambas simultaneamente.", "C) Garante criptografia absoluta para dados em trânsito.", "D) Define o limite máximo de conexões."],
    "B",
    "O Teorema de CAP estabelece trade-offs em redes sujeitas a falhas de comunicação.", "Bancos relacionais tendem a priorizar CP, enquanto NoSQL costumam focar em AP."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a principal diferença conceitual entre bancos de dados relacionais e não relacionais (NoSQL)?",
    "Relacional vs NoSQL",
    ["A) Bancos NoSQL não utilizam estrutura de dados.", "B) Bancos relacionais estruturam dados em tabelas rígidas com fortes garantias ACID; bancos NoSQL oferecem alta escalabilidade horizontal e esquemas flexíveis.", "C) Bancos NoSQL são incompatíveis com microsserviços.", "D) Bancos relacionais rodam apenas em Linux."],
    "B",
    "O NoSQL resolve problemas de grande volume e alta velocidade onde a escalabilidade horizontal é crítica.", "A escolha depende do domínio do problema."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que caracteriza o modelo de Consistência Eventual (Eventual Consistency) em NoSQL?",
    "Consistência Eventual",
    ["A) Os dados nunca são salvos no disco.", "B) Se nenhuma nova atualização for feita, todas as réplicas eventualmente retornarão o mesmo valor após um curto período de propagação.", "C) As transações exigem bloqueio síncrono absoluto.", "D) O banco apaga registros antigos à meia-noite."],
    "B",
    "Prioriza a alta disponibilidade e performance de gravação (modelo AP do CAP).", "Comum em redes sociais e carrinhos de compras."
);

addQuestion(
    "Banco de Dados", "Média",
    "Para que serve o processo de Normalização de Bancos de Dados (até a 3ª Forma Normal)?",
    "Normalização",
    ["A) Para duplicar dados intencionalmente.", "B) Para organizar tabelas e colunas de forma a reduzir redundâncias e eliminar anomalias de inserção, atualização e exclusão.", "C) Para converter textos em planilhas.", "D) Para criptografar senhas."],
    "B",
    "A normalização divide dados repetidos em tabelas relacionadas por chaves estrangeiras.", "Evita inconsistências lógicas."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a principal utilidade de um banco de dados em memória do tipo Chave-Valor (como Redis)?",
    "Bancos Chave-Valor (Redis)",
    ["A) Armazenar backups em fitas magnéticas.", "B) Atuar como cache de alta performance, gerenciamento de sessões e filas de mensagens rápidas devido ao acesso na RAM.", "C) Executar relatórios gerenciais complexos.", "D) Substituir o armazenamento em disco."],
    "B",
    "Oferece tempos de resposta na ordem de microssegundos.", "Alivia a carga de bancos relacionais."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que diferencia o Sharding (Fragmentação) da Replicação em bancos distribuídos?",
    "Sharding vs Replicação",
    ["A) Sharding duplica todos os dados; replicação divide.", "B) A replicação copia dados em múltiplos nós para alta disponibilidade; o sharding divide o banco em partes menores distribuídas horizontalmente.", "C) Não há diferença técnica.", "D) Sharding é exclusivo de relacionais."],
    "B",
    "A replicação resolve leitura e disponibilidade; o sharding resolve limites físicos de armazenamento e escrita.", "Exige planejamento de chaves."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que modela primariamente um banco de dados orientado a Grafos (como Neo4j)?",
    "Bancos de Grafos",
    ["A) Tabelas relacionais estritas.", "B) Dados altamente conectados compostos por Nós, Arestas e Propriedades, ideal para redes sociais e detecção de fraudes.", "C) Arquivos binários planos.", "D) Séries temporais."],
    "B",
    "Calcula relacionamentos complexos de múltiplos graus sem JOINs custosos.", "Utiliza linguagens como Cypher."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é o modelo BASE em bancos NoSQL distribuídos, em contraponto ao ACID?",
    "Modelo BASE",
    ["A) Um protocolo de segurança para senhas.", "B) Acrônimo para Basic Availability, Soft-state e Eventual consistency, priorizando disponibilidade e escalabilidade.", "C) Um método para compactar tabelas.", "D) Um padrão frontend."],
    "B",
    "Aceita que o sistema flutue temporariamente em seu estado até atingir consistência assíncrona.", "Filosofia de microsserviços modernos."
);

addQuestion(
    "Banco de Dados", "Média",
    "Em que consiste a técnica de 'Desnormalização' em bancos de dados?",
    "Desnormalização",
    ["A) Corrigir erros de sintaxe.", "B) Introduzir intencionalmente redundância de dados para eliminar JOINs complexos e acelerar a leitura.", "C) Apagar chaves primárias.", "D) Converter NoSQL em Excel."],
    "B",
    "Sacrifica a pureza estrutural para obter ganhos de performance de leitura em alta escala.", "Exige gestão de consistência pela aplicação."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a função de um banco de dados de Séries Temporais (Time-Series, como InfluxDB)?",
    "Séries Temporais",
    ["A) Armazenar agendas corporativas.", "B) Otimizar a ingestão e consulta de dados indexados por carimbos de data/hora, como métricas de IoT e logs.", "C) Gerenciar versões Git.", "D) Executar animações 3D."],
    "B",
    "Usa compressão agressiva de colunas por tempo e políticas de retenção.", "Essencial para observabilidade."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que garantem as propriedades ACID em transações relacionais?",
    "Propriedades ACID",
    ["A) Atomicidade, Consistência, Isolamento e Durabilidade: garantem execução confiável e íntegra.", "B) Agilidade e Distribuição em nuvem.", "C) Apenas velocidade de leitura.", "D) Criptografia avançada."],
    "A",
    "Atomicidade assegura tudo ou nada; Isolamento impede interferências; Durabilidade previne perdas.", "Fundação de sistemas OLTP."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um Índice (Index) em um banco de dados e qual seu principal objetivo?",
    "Índices",
    ["A) Um arquivo de backup incremental.", "B) Uma estrutura auxiliar (B-Tree) que acelera a recuperação de registros, ao custo de espaço em disco e leve lentidão nas escritas.", "C) Uma chave estrangeira.", "D) Um comando de limpeza."],
    "B",
    "Evita a varredura completa da tabela (Full Table Scan).", "Deve ser criado estrategicamente."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que caracteriza o nível de isolamento 'Serializable'?",
    "Níveis de Isolamento",
    ["A) Permite leituras sujas.", "B) O nível mais rigoroso, garantindo que transações concorrentes produzam o mesmo resultado de uma execução estritamente serial.", "C) Bloqueia o banco inteiro por 24 horas.", "D) É o padrão NoSQL."],
    "B",
    "Evita leituras sujas, não repetitivas e fantasmas.", "Impacta a concorrência."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um banco de dados orientado a Documentos (Document Store, como MongoDB)?",
    "Bancos de Documentos",
    ["A) Um software para gerenciar PDFs.", "B) Um NoSQL que armazena dados em estruturas flexíveis como JSON/BSON sem esquemas rígidos.", "C) Um banco relacional restrito.", "D) Um repositório de texto."],
    "B",
    "Permite que campos variem entre registros de uma mesma coleção.", "Facilita modelagem ágil."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é o fenômeno da 'Leitura Fantasma' (Phantom Read)?",
    "Leitura Fantasma",
    ["A) Ler dados de uma tabela apagada.", "B) Quando uma transação repete uma consulta e percebe que novas linhas foram inseridas por outra transação concorrente que fez commit.", "C) Erro de hardware.", "D) Leitura de senhas."],
    "B",
    "Envolve o surgimento ou desaparecimento de linhas inteiras que satisfazem um critério.", "Prevenido com isolamento alto."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a utilidade do comando 'EXPLAIN' em SGBDs relacionais?",
    "EXPLAIN",
    ["A) Traduzir queries para Python.", "B) Exibir o plano de execução gerado pelo otimizador, mostrando uso de índices e varreduras.", "C) Excluir registros antigos.", "D) Criar chaves primárias."],
    "B",
    "Ferramenta essencial para diagnosticar consultas lentas.", "Permite ajustar índices."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "O que representa a chave primária (Primary Key)?",
    "Chave Primária",
    ["A) A senha do administrador.", "B) Um identificador único para cada linha, que não pode ser nulo nem se repetir.", "C) O arquivo de configuração.", "D) O IP do cliente."],
    "B",
    "Garante a integridade de entidade.", "Permite referenciamento via chaves estrangeiras."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que caracteriza um banco de dados Colunar (Column-Oriented, como Cassandra/Bigtable)?",
    "Bancos Colunares",
    ["A) Armazenam em linhas na RAM.", "B) Organizados por colunas em vez de linhas, permitindo altíssima performance em agregações massivas e compressão (OLAP).", "C) Impedem chaves compostas.", "D) Incompatíveis com clusters."],
    "B",
    "Ideais para análises em grandes volumes de dados.", "Diferem dos sistemas OLTP tradicionais."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que significa o conceito de Deadlock (Impasse)?",
    "Deadlock",
    ["A) Falha permanente de disco.", "B) Situação em que duas ou mais transações ficam bloqueadas, cada uma aguardando um recurso retido pela outra.", "C) Queda de rede por timeout.", "D) Corrupção de índices."],
    "B",
    "O SGBD detecta o impasse e aborta uma das transações (rollback).", "Aplicações devem tratar com retries."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é uma View (Visão) em bancos relacionais?",
    "Views",
    ["A) Cópia física estática.", "B) Uma consulta SQL armazenada tratada como tabela virtual, com dados calculados dinamicamente no acesso.", "C) A interface gráfica web.", "D) Log de auditoria."],
    "B",
    "Simplifica consultas complexas e oculta colunas sensíveis.", "Existem também as Materialized Views."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que são Gatilhos (Triggers)?",
    "Triggers",
    ["A) Alertas de erro por e-mail.", "B) Procedimentos executados automaticamente pelo SGBD em resposta a eventos de modificação (INSERT, UPDATE, DELETE).", "C) Rotinas de fim de semana.", "D) Compactadores de log."],
    "B",
    "Úteis para auditoria e validações complexas.", "Devem ser usados com parcimônia para evitar impactos ocultos."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é um Índice Composto e qual regra de uso deve ser observada?",
    "Índice Composto",
    ["A) Índice em múltiplas colunas; o SGBD só o aproveita eficientemente se a consulta filtrar pela coluna mais à esquerda.", "B) Índice automático para chaves estrangeiras.", "C) Exclusivo NoSQL.", "D) Backup compactado."],
    "A",
    "A ordem das colunas na definição altera totalmente a capacidade de busca.", "Conceito vital de tuning."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "O que é uma Chave Estrangeira (Foreign Key)?",
    "Chave Estrangeira",
    ["A) Senha externa.", "B) Coluna cujos valores correspondem à chave primária de outra tabela, vinculando-as.", "C) Índice temporário de RAM.", "D) Identificador de nuvem."],
    "B",
    "Garante a integridade referencial.", "Evita registros órfãos."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um ORM (Object-Relational Mapping)?",
    "ORM",
    ["A) Protocolo de microsserviços.", "B) Técnica que conecta o paradigma orientado a objetos a bancos relacionais, permitindo manipular dados via classes.", "C) NoSQL de memória.", "D) Ferramenta de diagramas."],
    "B",
    "Exemplos: Hibernate, Entity Framework, Prisma.", "Facilita o desenvolvimento, mas exige atenção ao desempenho."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que consiste o problema 'N+1 Selects' em ORMs?",
    "Problema N+1 Selects",
    ["A) Falha ao abrir conexões.", "B) Problema onde o ORM executa 1 query para buscar N registros, e depois N queries adicionais para buscar dados relacionados de cada um.", "C) Erro de compilação.", "D) Duplicação de chaves."],
    "B",
    "Gera tráfego excessivo e degrada a performance.", "Resolvido com Eager Loading / JOIN FETCH."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que caracteriza um banco Wide-Column Store (como Cassandra)?",
    "Wide-Column Store",
    ["A) Tabelas rígidas.", "B) Armazenamento baseado em famílias de colunas onde linhas podem ter conjuntos de colunas totalmente diferentes, otimizado para gravações massivas.", "C) Arquivos planos.", "D) Foco em IoT embarcado."],
    "B",
    "Prioriza consultas por chave de partição e alta taxa de escrita.", "Altamente escalável."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é o Índice Bitmap e onde é recomendado?",
    "Índice Bitmap",
    ["A) Índice de imagens.", "B) Estrutura que usa matrizes de bits, eficiente em colunas de baixa cardinalidade (poucos valores distintos, como gênero) em análises.", "C) Criptografia binária.", "D) Índice de documentos."],
    "B",
    "Excelente para combinar filtros booleanos em Data Warehouses.", "Ineficiente em ambientes de alta atualização OLTP."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um Data Warehouse?",
    "Data Warehouse",
    ["A) O rack de servidores físicos.", "B) Sistema centralizado projetado para consultas analíticas (OLAP), consolidação e inteligência de negócios a partir de múltiplas fontes.", "C) Cache RAM.", "D) Repositório Git."],
    "B",
    "Armazena dados históricos desnormalizados para tomada de decisão.", "Exemplos: Snowflake, BigQuery."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é o Write-Ahead Logging (WAL)?",
    "Write-Ahead Logging",
    ["A) Log de texto de usuários.", "B) Técnica onde modificações são gravadas em log sequencial no disco antes de irem para as páginas principais.", "C) Encriptação.", "D) Versionamento."],
    "B",
    "Garante recuperação em quedas de energia (crash recovery).", "Fundamental para a Durabilidade ACID."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que são Stored Procedures (Procedimentos Armazenados)?",
    "Stored Procedures",
    ["A) Rotinas de salvamento em nuvem.", "B) Sub-rotinas SQL compiladas e armazenadas diretamente no servidor de banco de dados.", "C) Arquivos de hardware.", "D) Códigos de hash."],
    "B",
    "Centralizam lógica de negócios e reduzem tráfego de rede.", "Devem ser usados com equilíbrio."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é o Teorema PACELC?",
    "Teorema PACELC",
    ["A) Extensão do CAP: se há Partição (P), escolhe A ou C; caso contrário (E), escolhe entre Latência (L) ou Consistência (C).", "B) Protocolo Wi-Fi.", "C) Desempenho NoSQL.", "D) Normalização NoSQL."],
    "A",
    "Complementa o CAP analisando o trade-off de latência em operação normal.", "Muitos NoSQL escolhem AP/EL."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a utilidade do particionamento de tabelas (Table Partitioning)?",
    "Particionamento",
    ["A) Deletar dados antigos.", "B) Dividir uma tabela grande lógica em partes físicas menores com base em critérios, melhorando performance e manutenção.", "C) Criptografar colunas.", "D) Sincronizar com planilhas."],
    "B",
    "Facilita operações de limpeza (drop partition) e acelera varreduras por data.", "Comum em grandes bases temporais."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que são Lock Manager e Lock Escalation?",
    "Gerenciamento de Locks",
    ["A) Ferramentas de tranca física de racks.", "B) Mecanismos onde o SGBD converte vários locks de nível de linha em um único lock de nível de tabela para economizar memória.", "C) Senhas de root.", "D) Criptografia de rede."],
    "B",
    "Evita estouro de memória de locks, mas pode reduzir a concorrência severamente.", "Ocorre sob alta pressão transacional."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que significa 'Dirty Read' (Leitura Suja)?",
    "Dirty Read",
    ["A) Ler dados corrompidos por vírus.", "B) Quando uma transação lê dados modificados por outra transação concorrente que ainda não fez commit (e pode sofrer rollback).", "C) Ler tabelas sem índices.", "D) Arquivos temporários."],
    "B",
    "Anomalia evitada a partir do nível Read Committed.", "Compromete a integridade se houver desfazimento."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um banco de dados relacional objeto-relacional (ORDBMS)?",
    "ORDBMS",
    ["A) Banco exclusivo para planilhas.", "B) SGBD relacional estendido com suporte a conceitos de orientação a objetos, como tipos definidos pelo usuário, herança e métodos.", "C) NoSQL puro.", "D) Arquivo binário."],
    "B",
    "Exemplo clássico: PostgreSQL.", "Une a robustez relacional com flexibilidade estrutural."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "O que é MVCC (Multi-Version Concurrency Control)?",
    "MVCC",
    ["A) Controle de versão de código.", "B) Técnica onde leituras não bloqueiam escritas e escritas não bloqueiam leituras, mantendo múltiplas versões dos dados simultaneamente.", "C) Replicação Master-Slave.", "D) Criptografia AES."],
    "B",
    "Adotado por PostgreSQL e MySQL/InnoDB para alta concorrência.", "Garante isolamento sem locks excessivos."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um Schema em bancos de dados relacionais (como PostgreSQL)?",
    "Schemas",
    ["A) O disco rígido do servidor.", "B) Um namespace lógico que agrupa objetos de banco de dados (tabelas, views, funções) dentro de um mesmo database.", "C) O arquivo de log.", "D) Uma chave primária."],
    "B",
    "Permite organizar objetos por módulos ou permissões.", "Evita conflitos de nomes."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é a função do checkpoint em um motor de banco de dados?",
    "Checkpoints",
    ["A) Validar senhas de usuários.", "B) Escrever periodicamente páginas de dados modificadas da memória RAM para o armazenamento persistente em disco.", "C) Fazer backup completo na nuvem.", "D) Apagar logs."],
    "B",
    "Reduz o tempo de recuperação (crash recovery) aplicando o WAL.", "Gerencia o fluxo de escrita em disco."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é um Data Mart?",
    "Data Marts",
    ["A) Lojas virtuais de dados.", "B) Subconjunto focado de um Data Warehouse, voltado para as necessidades analíticas de um departamento específico (ex: Vendas ou RH).", "C) Tabela temporária.", "D) Cache Redis."],
    "B",
    "Mais ágil e enxuto que um Data Warehouse corporativo global.", "Facilita relatórios setoriais."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que é a integridade referencial?",
    "Integridade Referencial",
    ["A) Criptografia forte de colunas.", "B) Regra que garante que chaves estrangeiras sempre apontem para registros válidos e existentes na tabela relacionada.", "C) Garantia de que a senha é forte.", "D) Backup diário."],
    "B",
    "Impossibilita dados órfãos.", "Gerenciada por restrições de Foreign Key."
);

addQuestion(
    "SQL", "Média",
    "Qual é a principal diferença entre `DELETE`, `TRUNCATE` e `DROP`?",
    "Comandos SQL",
    ["A) Todos fazem a mesma coisa.", "B) DELETE é DML (remove linhas específicas com WHERE e gera log linha a linha); TRUNCATE é DDL (limpa tudo rapidamente sem log individual); DROP apaga a tabela inteira.", "C) DROP apaga uma linha.", "D) TRUNCATE cria tabelas."],
    "B",
    "Compreender DDL vs DML é fundamental para segurança e performance.", "Sempre cheque FKs antes de TRUNCATE/DROP."
);

addQuestion(
    "SQL", "Média",
    "Qual é o comportamento padrão de um `INNER JOIN`?",
    "JOINS",
    ["A) Retorna tudo da esquerda.", "B) Retorna apenas os registros que possuem correspondência exata em ambas as tabelas envolvidas.", "C) Produto cartesiano absoluto.", "D) Apenas exclusivos."],
    "B",
    "Linhas sem correspondência na condição ON são descartadas.", "Diferente de LEFT/RIGHT JOIN."
);

addQuestion(
    "SQL", "Média",
    "Para que servem as funções de agregação (`COUNT`, `SUM`, `AVG`) com `GROUP BY`?",
    "Agregação",
    ["A) Ordenar alfabeticamente.", "B) Realizar cálculos estatísticos e resumir conjuntos de dados agrupados por colunas específicas.", "C) Criar chaves primárias.", "D) Filtrar antes da query."],
    "B",
    "Condensa múltiplos registros em linhas de resumo por categoria.", "Filtros posteriores usam HAVING."
);

addQuestion(
    "SQL", "Média",
    "Qual é a função da cláusula `HAVING`?",
    "HAVING vs WHERE",
    ["A) Filtrar linhas antes do GROUP BY.", "B) Filtrar os resultados gerados após a aplicação de funções de agregação e agrupamento.", "C) Ordenar decrescente.", "D) Unir tabelas."],
    "B",
    "O WHERE filtra linhas brutas; o HAVING filtra grupos agregados.", "Fica após o GROUP BY."
);

addQuestion(
    "SQL", "Média",
    "Qual é a diferença entre `UNION` e `UNION ALL`?",
    "UNION vs UNION ALL",
    ["A) UNION remove duplicatas e ordena; UNION ALL inclui tudo de forma direta e mais rápida.", "B) UNION une bancos diferentes.", "C) São idênticos.", "D) UNION ALL apaga dados."],
    "A",
    "O UNION consome mais CPU por causa do DISTINCT implícito.", "Ambos exigem compatibilidade de colunas."
);

addQuestion(
    "SQL", "Média",
    "Qual é a função de uma Subconsulta (Subquery)?",
    "Subconsultas",
    ["A) Limpeza de logs.", "B) Permitir que uma consulta seja colocada dentro de outra instrução, servindo como filtro dinâmico ou fonte de dados.", "C) Imprimir relatórios.", "D) Criptografar dados."],
    "B",
    "Subconsultas podem ser escalares, de linha ou de tabela.", "Correlacionadas rodam para cada linha externa."
);

addQuestion(
    "SQL", "Difícil",
    "O que são Funções de Janela (Window Functions)?",
    "Window Functions",
    ["A) Abrir janelas gráficas.", "B) Funções que calculam em um conjunto de linhas relacionadas à atual, permitindo agregações (ROW_NUMBER, SUM) sem colapsar o detalhe.", "C) Apagar janelas de manutenção.", "D) Dividir arquivos."],
    "B",
    "Mantêm a granularidade individual das linhas.", "Utilizam a cláusula OVER."
);

addQuestion(
    "SQL", "Média",
    "Qual é o propósito da cláusula `LIMIT` (ou `TOP` / `ROWNUM`)?",
    "LIMIT",
    ["A) Limitar tamanho do disco.", "B) Restringir o número máximo de linhas retornadas, ideal para paginação e controle de tráfego.", "C) Limitar conexões.", "D) Impedir DELETE."],
    "B",
    "Combinada com OFFSET, viabiliza a paginação web.", "Otimiza a visualização."
);

addQuestion(
    "SQL", "Fácil",
    "Qual é a função da instrução `JOIN` em SQL?",
    "JOIN",
    ["A) Apagar tabelas vazias.", "B) Combinar registros de duas ou mais tabelas com base em uma condição lógica relacionada.", "C) Inserir em lote.", "D) Alterar tipo de dado."],
    "B",
    "Base fundamental para recuperar dados normalizados.", "Inclui INNER, LEFT, RIGHT, FULL."
);

addQuestion(
    "SQL", "Difícil",
    "O que é um Índice Composto e qual regra de prefixo possui?",
    "Índice Composto",
    ["A) Índice em várias colunas; o SGBD só o aproveita bem se a query filtrar pela coluna mais à esquerda.", "B) Chave estrangeira automática.", "C) Exclusivo NoSQL.", "D) Backup de tabelas."],
    "A",
    "Filtrar apenas pela segunda coluna inutiliza o uso otimizado do índice.", "Conceito essencial de otimização."
);

addQuestion(
    "SQL", "Fácil",
    "O que é uma Chave Estrangeira (Foreign Key)?",
    "Foreign Key",
    ["A) Senha de criptografia.", "B) Coluna cujos valores correspondem à chave primária de outra tabela, unindo-as.", "C) Índice de RAM.", "D) ID de nuvem."],
    "B",
    "Garante integridade referencial.", "Evita registros órfãos."
);

addQuestion(
    "SQL", "Média",
    "O que é um ORM (Object-Relational Mapping)?",
    "ORM",
    ["A) Protocolo de rede.", "B) Técnica que conecta classes orientadas a objetos a tabelas relacionais, permitindo gerenciar dados via código.", "C) NoSQL em memória.", "D) Ferramenta visual."],
    "B",
    "Exemplos: Hibernate, Prisma, Sequelize.", "Exige cuidado com queries automáticas ineficientes."
);

addQuestion(
    "SQL", "Difícil",
    "O que consiste o problema 'N+1 Selects'?",
    "Problema N+1 Selects",
    ["A) Falha de conexões.", "B) Problema onde o ORM executa 1 query para buscar N registros, e depois N queries extras para buscar relações de cada um.", "C) Erro de compilação.", "D) Duplicação de chaves."],
    "B",
    "Degrada drasticamente a performance da aplicação.", "Resolvido com carregamento ansioso."
);

addQuestion(
    "SQL", "Fácil",
    "Qual é a função da cláusula `GROUP BY`?",
    "GROUP BY",
    ["A) Agrupar tabelas em arquivo.", "B) Agrupar linhas com valores idênticos em conjuntos resumidos para aplicação de funções estatísticas.", "C) Ordenar alfabeticamente.", "D) Filtrar antes do JOIN."],
    "B",
    "Sempre associada a funções de agregação.", "Filtros posteriores usam HAVING."
);

addQuestion(
    "SQL", "Fácil",
    "Qual comando SQL insere novos registros?",
    "INSERT",
    ["A) ADD INTO", "B) INSERT INTO", "C) CREATE RECORD", "D) UPDATE TABLE"],
    "B",
    "Comando DML padrão para popular tabelas.", "Pode inserir uma ou múltiplas linhas."
);

addQuestion(
    "SQL", "Média",
    "O que são Stored Procedures?",
    "Stored Procedures",
    ["A) Rotinas de salvamento.", "B) Sub-rotinas SQL compiladas e armazenadas diretamente no servidor de banco de dados.", "C) Arquivos de hardware.", "D) Hashes de senha."],
    "B",
    "Centralizam regras de negócio e reduzem tráfego de rede.", "Devem ser usadas com bom senso."
);

addQuestion(
    "SQL", "Difícil",
    "O que é o Teorema PACELC?",
    "PACELC",
    ["A) Extensão do CAP considerando Latência vs Consistência em operação normal.", "B) Protocolo Wi-Fi.", "C) Desempenho NoSQL.", "D) Normalização."],
    "A",
    "Descreve trade-offs fora de cenários de falha de rede.", "Fundamental em sistemas distribuídos."
);

addQuestion(
    "SQL", "Média",
    "O que são Triggers (Gatilhos) em SQL?",
    "Triggers",
    ["A) Alertas por e-mail.", "B) Procedimentos executados automaticamente pelo SGBD em eventos de DML (INSERT, UPDATE, DELETE).", "C) Rotinas de fim de semana.", "D) Compactadores."],
    "B",
    "Úteis para auditoria e regras complexas.", "Podem ocultar lógicas importantes se abusados."
);

addQuestion(
    "SQL", "Média",
    "O que significa a propriedade de Atomicidade em transações SQL?",
    "Atomicidade",
    ["A) Dados atômicos criptografados.", "B) Unidade indivisível: ou todas as operações da transação passam (commit) ou todas falham e são revertidas (rollback).", "C) Execução em única thread.", "D) Registros imutáveis."],
    "B",
    "Evita estados inconsistentes intermediários.", "Base da confiabilidade transacional."
);

addQuestion(
    "SQL", "Difícil",
    "O que é Write-Ahead Logging (WAL) em motores relacionais?",
    "WAL",
    ["A) Log de texto.", "B) Técnica onde modificações são gravadas em log sequencial em disco antes de serem aplicadas nas páginas principais.", "C) Criptografia.", "D) Versionamento."],
    "B",
    "Garante recuperação contra quedas de energia.", "Assegura a durabilidade ACID."
);

addQuestion(
    "SQL", "Média",
    "Qual é a utilidade do operador `LIKE` em consultas SQL?",
    "Operador LIKE",
    ["A) Somar valores numéricos.", "B) Realizar buscas por padrão de texto usando curingas como `%` (vários caracteres) e `_` (um caractere).", "C) Unir tabelas.", "D) Agrupar resultados."],
    "B",
    "Fundamental para pesquisas textuais parciais.", "Ex: `WHERE nome LIKE 'A%'`."
);

addQuestion(
    "SQL", "Média",
    "Para que serve a cláusula `ORDER BY`?",
    "ORDER BY",
    ["A) Agrupar dados.", "B) Ordenar o conjunto de resultados de uma consulta com base em uma ou mais colunas, de forma ascendente (ASC) ou descendente (DESC).", "C) Limitar linhas.", "D) Filtrar grupos."],
    "B",
    "Organiza visualmente a saída dos dados.", "Pode causar impacto de performance se houver muitos dados sem índice."
);

addQuestion(
    "SQL", "Média",
    "O que é uma Restrição `UNIQUE`?",
    "Restrição UNIQUE",
    ["A) Uma chave primária temporária.", "B) Uma regra que garante que todos os valores em uma coluna (ou grupo de colunas) sejam distintos entre si, permitindo apenas um valor nulo dependendo do SGBD.", "C) Um índice de texto.", "D) Um tipo de JOIN."],
    "B",
    "Evita duplicação indesejada em colunas de negócio (como e-mail ou CPF).", "Diferencia-se da PK por aceitar nulos em alguns motores."
);

addQuestion(
    "SQL", "Fácil",
    "Qual comando SQL é utilizado para modificar dados existentes em uma tabela?",
    "Comando UPDATE",
    ["A) MODIFY", "B) UPDATE", "C) CHANGE", "D) ALTER"],
    "B",
    "Comando DML essencial para atualizar valores em linhas específicas usando o WHERE.", "Cuidado para não omitir o WHERE e alterar toda a tabela."
);

addQuestion(
    "SQL", "Média",
    "O que faz a restrição `CHECK` em uma tabela SQL?",
    "Restrição CHECK",
    ["A) Checa se o servidor está online.", "B) Garante que os valores inseridos em uma coluna atendam a uma condição lógica específica (ex: idade > 18).", "C) Verifica vírus.", "D) Faz backup automático."],
    "B",
    "Adiciona validação de domínio diretamente no nível do banco de dados.", "Garante integridade dos dados inseridos."
);

addQuestion(
    "SQL", "Média",
    "O que é o operador `BETWEEN` em SQL?",
    "Operador BETWEEN",
    ["A) Um comando para dividir tabelas.", "B) Um operador lógico que filtra resultados dentro de um intervalo inclusivo de valores (mínimo e máximo).", "C) Uma função de string.", "D) Um tipo de JOIN."],
    "B",
    "Facilita consultas com datas, números ou faixas textuais.", "Equivalente a usar `>=` e `<=` combinados com AND."
);

addQuestion(
    "SQL", "Média",
    "Qual é a função do operador `IN` em uma consulta SQL?",
    "Operador IN",
    ["A) Inserir dados.", "B) Verificar se um valor corresponde a qualquer valor dentro de uma lista especificada de constantes ou subconsulta.", "C) Criar índices.", "D) Apagar registros."],
    "B",
    "Simplifica consultas que exigiriam múltiplos operadores OR.", "Ex: `WHERE status IN ('Ativo', 'Pendente')`."
);

addQuestion(
    "SQL", "Difícil",
    "O que é uma CTE (Common Table Expression) e como é introduzida?",
    "CTE",
    ["A) Uma tabela física permanente.", "B) Um resultado temporário nomeado, introduzido pela cláusula `WITH`, que existe apenas durante a execução de uma única query.", "C) Um tipo de erro SQL.", "D) Uma criptografia de dados."],
    "B",
    "Melhora drasticamente a legibilidade de consultas complexas e recursivas.", "Alternativa moderna a subqueries aninhadas."
);

addQuestion(
    "SQL", "Média",
    "O que faz a função de agregação `COUNT(*)` comparada a `COUNT(coluna)`?",
    "Função COUNT",
    ["A) São idênticas.", "B) `COUNT(*)` conta todas as linhas do resultado (incluindo nulos); `COUNT(coluna)` conta apenas as linhas onde o valor daquela coluna não é nulo.", "C) `COUNT(*)` apaga dados.", "D) Contam apenas chaves primárias."],
    "B",
    "Diferença crucial ao lidar com dados incompletos ou valores NULL.", "Afeta diretamente o resultado estatístico."
);

addQuestion(
    "SQL", "Média",
    "O que é uma Consulta Cruzada ou Pivotagem em SQL?",
    "Pivotagem",
    ["A) Girar o monitor do computador.", "B) Transformar linhas de dados em colunas para facilitar a leitura de relatórios analíticos.", "C) Apagar tabelas cruzadas.", "D) Criar chaves estrangeiras."],
    "B",
    "Muito usada em relatórios gerenciais e Data Warehouses.", "Pode ser feita via CASE WHEN ou funções nativas de alguns SGBDs."
);

addQuestion(
    "SQL", "Difícil",
    "O que é uma CTE Recursiva e para que serve?",
    "CTE Recursiva",
    ["A) Uma query que entra em loop infinito e trava o servidor.", "B) Uma CTE que chama a si mesma, usada para consultar dados hierárquicos ou em formato de árvore (como organogramas e categorias pai-filho).", "C) Um comando DDL.", "D) Um tipo de backup."],
    "B",
    "Permite navegar por estruturas de dados relacionais auto-referenciadas.", "Exige uma condição de parada (anchor member e recursive member)."
);

addQuestion(
    "SQL", "Média",
    "Qual é a função da cláusula `DISTINCT` em uma consulta SQL?",
    "Cláusula DISTINCT",
    ["A) Destruir dados duplicados permanentemente.", "B) Omitir linhas duplicadas no conjunto de resultados retornado, exibindo apenas valores únicos.", "C) Ordenar os dados.", "D) Filtrar valores nulos."],
    "B",
    "Útil para extrair listas de categorias ou itens únicos de uma coluna repetitiva.", "Pode impactar a performance em grandes volumes se usado sem índices."
);

addQuestion(
    "SQL", "Média",
    "O que são Funções de Manipulação de Strings em SQL (como `CONCAT`, `SUBSTRING`, `UPPER`)?",
    "Funções de String",
    ["A) Funções matemáticas para cálculo de juros.", "B) Funções embutidas para formatar, recortar, unir ou transformar dados textuais diretamente nas consultas.", "C) Comandos para criar tabelas.", "D) Ferramentas de rede."],
    "B",
    "Permitem padronizar a exibição de textos sem alterar os dados brutos salvos.", "Variam ligeiramente de sintaxe entre SGBDs."
);

addQuestion(
    "SQL", "Média",
    "O que é a função `COALESCE` em SQL?",
    "Função COALESCE",
    ["A) Uma função para fundir duas tabelas físicas.", "B) Uma função que retorna o primeiro valor não nulo de uma lista de expressões passadas como argumento.", "C) Um comando para apagar valores nulos.", "D) Um operador de criptografia."],
    "B",
    "Excelente para tratar valores NULL substituindo-os por padrões legíveis (ex: `COALESCE(telefone, 'Não informado')`).", "Suportada pela grande maioria dos SGBDs."
);

addQuestion(
    "SQL", "Difícil",
    "O que é uma Transação Explícita e como ela é controlada?",
    "Transações Explícitas",
    ["A) Uma query sem filtro WHERE.", "B) Um bloco de comandos controlado manualmente por instruções como `BEGIN TRANSACTION`, `COMMIT` e `ROLLBACK`.", "C) Um comando DDL automático.", "D) Um erro de sintaxe."],
    "B",
    "Permite agrupar múltiplas operações sob a mesma garantia ACID.", "Se algo falha, o desenvolvedor decide desfazer tudo com ROLLBACK."
);

addQuestion(
    "SQL", "Média",
    "O que faz o operador `EXISTS` em uma subconsulta SQL?",
    "Operador EXISTS",
    ["A) Verifica se a tabela existe no disco.", "B) Retorna verdadeiro se a subconsulta associada retornar pelo menos uma linha, encerrando a busca antecipadamente por otimização.", "C) Apaga dados duplicados.", "D) Cria um índice."],
    "B",
    "Altamente performático para checar a existência de relacionamentos em subqueries.", "Diferencia-se do IN por focar na existência lógica e não nos dados em si."
);

addQuestion(
    "SQL", "Média",
    "Qual é o papel da função condicional `CASE` em SQL?",
    "Função CASE",
    ["A) Criar casos de teste de software.", "B) Aplicar lógica condicional do tipo SE-ENTÃO (If-Then-Else) diretamente nas consultas, permitindo retornar valores customizados com base em condições.", "C) Gerenciar conexões.", "D) Tratar erros de sintaxe."],
    "B",
    "Extremamente versátil para transformar dados dinamicamente no SELECT ou em regras de ordenação.", "Substitui estruturas complexas de código de aplicação."
);

addQuestion(
    "SQL", "Média",
    "O que faz a restrição `DEFAULT` em uma coluna de tabela SQL?",
    "Restrição DEFAULT",
    ["A) Define a coluna como chave primária padrão.", "B) Atribui automaticamente um valor pré-determinado a uma coluna caso nenhum valor seja explicitamente fornecido durante uma inserção.", "C) Apaga dados padrão.", "D) Criptografa o campo."],
    "B",
    "Útil para campos de controle como data de criação (`CURRENT_TIMESTAMP`) ou status iniciais.", "Evita falhas de inserção por falta de dados opcionais."
);

addQuestion(
    "SQL", "Média",
    "O que é um Índice Parcial (Partial Index) em SQL?",
    "Índice Parcial",
    ["A) Um índice corrompido pela metade.", "B) Um índice construído apenas para um subconjunto de linhas de uma tabela, definido por uma condição WHERE (ex: `WHERE ativo = true`).", "C) Um índice sem chave primária.", "D) Um backup parcial."],
    "B",
    "Economiza muito espaço em disco e acelera buscas filtradas focadas.", "Disponível em SGBDs avançados como PostgreSQL."
);

addQuestion(
    "SQL", "Difícil",
    "O que é uma `MATERIALIZED VIEW` (Visão Materializada) e qual sua diferença para uma View comum?",
    "Materialized View",
    ["A) Não há diferença.", "B) Enquanto a View comum executa a query dinamicamente a cada acesso, a Materialized View persiste fisicamente o resultado em disco, exigindo atualização (refresh) periódica para acelerar leituras pesadas.", "C) É exclusiva para bancos NoSQL.", "D) Apaga dados automaticamente."],
    "B",
    "Estratégia clássica de otimização em Data Warehouses e relatórios complexos.", "Ganha performance de leitura sacrificando a atualização em tempo real."
);
/* =====================================================
   BLOCO 8 (COMPLETO - 40 QUESTÕES): DESENVOLVIMENTO WEB (HTML, CSS E JAVASCRIPT)
===================================================== */

// --- 1 a 15: HTML e Fundamentos Web ---

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para criar um hiperlink para outra página ou site?",
    "<a href=\"https://www.exemplo.com\">Link</a>",
    [
        "A) <link href=\"...\">",
        "B) <a href=\"...\">Link</a>",
        "C) <hyperlink>...</hyperlink>",
        "D) <url>...</url>"
    ],
    "B",
    "A tag <a> (anchor) combinada com o atributo href define hiperlinks na web.",
    "A tag <link> é usada tipicamente para carregar folhas de estilo no HTML."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é semanticamente a mais adequada para representar o cabeçalho principal de uma página ou seção?",
    "<header>",
    [
        "A) <head>",
        "B) <top>",
        "C) <header>",
        "D) <h1>"
    ],
    "C",
    "A tag <header> representa conteúdo introdutório ou um grupo de elementos de navegação.",
    "A tag <head> fica oculta e guarda metadados da página, enquanto <h1> define um título de nível 1."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para criar uma lista não ordenada (com marcadores em bolinhas)?",
    "<ul>",
    [
        "A) <ol>",
        "B) <list>",
        "C) <ul>",
        "D) <li>"
    ],
    "C",
    "A tag <ul> (unordered list) agrupa itens de lista que utilizam a tag <li>.",
    "A tag <ol> cria listas ordenadas (numeradas)."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para inserir um arquivo JavaScript externo em um documento?",
    "<script src=\"script.js\"></script>",
    [
        "A) <javascript src=\"script.js\">",
        "B) <script href=\"script.js\">",
        "C) <script src=\"script.js\"></script>",
        "D) <js file=\"script.js\">"
    ],
    "C",
    "A tag <script> com o atributo src vincula scripts externos à página.",
    "Geralmente colocada no final do corpo (body) ou no head com defer."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "Qual é a finalidade do atributo async ou defer em tags <script> no HTML?",
    "Controlar o carregamento e execução assíncrona de scripts externos",
    [
        "A) Comprimir o tamanho do arquivo JavaScript para baixar mais rápido",
        "B) Permitir o carregamento não bloqueante do script em paralelo com a análise do HTML",
        "C) Criptografar o código JavaScript contra inspeção",
        "D) Forçar a execução imediata travando a renderização"
    ],
    "B",
    "Scripts sem async/defer pausam o parsing do HTML até que o script seja baixado e executado. Com defer, o script executa após o documento estar pronto.",
    "Melhora consideravelmente a performance de carregamento da página."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual elemento HTML é utilizado para agrupar conteúdos de forma genérica em nível de bloco (block-level), muito usado para estilização com CSS?",
    "<div>",
    [
        "A) <span>",
        "B) <section>",
        "C) <div>",
        "D) <block>"
    ],
    "C",
    "A tag <div> não possui significado semântico específico por si só, servindo como container em bloco genérico.",
    "Para elementos em linha (inline), utiliza-se frequentemente a tag <span>."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual atributo HTML é obrigatório na tag <img> para garantir acessibilidade a leitores de tela e descrever a imagem caso ela não carregue?",
    "alt",
    [
        "A) title",
        "B) alt",
        "C) description",
        "D) src-desc"
    ],
    "B",
    "O atributo alt fornece um texto alternativo essencial para a acessibilidade web (WCAG).",
    "O atributo src define o caminho do arquivo de imagem."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que são elementos HTML Semânticos e qual a sua principal vantagem?",
    "Elementos que dão significado claro ao seu conteúdo para navegadores e desenvolvedores",
    [
        "A) Elementos que rodam códigos executáveis diretamente no navegador",
        "B) Tags que transmitem claramente o seu significado estrutural tanto para o navegador quanto para leitores de tela e mecanismos de busca (SEO)",
        "C) Tags exclusivas para estilização de fontes e cores sem uso de CSS",
        "D) Atalhos de teclado para navegação rápida"
    ],
    "B",
    "Exemplos de tags semânticas incluem <article>, <section>, <nav> e <footer>, substituindo o uso excessivo de divs genéricas.",
    "Melhoram significativamente a acessibilidade e o SEO das páginas."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para criar um campo de entrada de dados interativo (como texto, senha ou checkbox) em um formulário?",
    "<input>",
    [
        "A) <form-field>",
        "B) <input>",
        "C) <text-box>",
        "D) <field>"
    ],
    "B",
    "A tag <input> altera seu comportamento com base no atributo type (ex: type='text', type='password', type='checkbox').",
    "Deve ser associada a um elemento <label> para boa acessibilidade."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "Qual é a diferença entre as tags <section>, <article> e <div> em HTML5?",
    "Contexto e semântica de agrupamento",
    [
        "A) Não há nenhuma diferença; todas geram exatamente o mesmo comportamento visual",
        "B) <article> representa um conteúdo independente e distribuível; <section> agrupa conteúdos temáticos relacionados; <div> é um container puramente genérico sem significado semântico",
        "C) <section> é usada apenas para rodapés e <article> para cabeçalhos",
        "D) <div> é moderna e substitui completamente <section> e <article>"
    ],
    "B",
    "A escolha correta da tag semântica enriquece a árvore do documento para leitores de tela e indexadores de busca.",
    "Divs continuam úteis para fins de estilização pura quando nenhum significado se aplica."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para estruturar a tabela propriamente dita, contendo linhas e células de dados?",
    "<table>",
    [
        "A) <grid>",
        "B) <table>",
        "C) <tab>",
        "D) <data-grid>"
    ],
    "B",
    "A tag <table> é combinada com <tr> (linha), <th> (cabeçalho da célula) e <td> (célula de dado).",
    "Não deve ser utilizada para estruturar o layout geral da página."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que significa a especificação HTML5 em termos de multimídia?",
    "Suporte nativo a elementos de áudio e vídeo sem plugins externos",
    [
        "A) A exigência de instalar o Adobe Flash Player para rodar animações",
        "B) A introdução de tags nativas como <audio> e <video>, dispensando plugins proprietários de terceiros",
        "C) A conversão automática de imagens JPG para arquivos vetoriais",
        "D) A remoção completa de imagens do ecossistema web"
    ],
    "B",
    "Com o HTML5, tags como <video> e <audio> tornaram a reprodução de mídia nativa e universal nos navegadores.",
    "Reduziu drasticamente falhas de segurança e dependência de softwares legados."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para definir metadados sobre o documento, como codificação de caracteres, título da aba e links de estilo?",
    "<head>",
    [
        "A) <meta-data>",
        "B) <head>",
        "C) <header>",
        "D) <body>"
    ],
    "B",
    "O elemento <head> abriga informações que não são exibidas diretamente na página visível, como <title>, <meta> e <link>.",
    "Diferente do <body>, que engloba todo o conteúdo visualizado pelo usuário."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "Qual é a função da tag <meta charset=\"UTF-8\"> no cabeçalho de uma página HTML?",
    "Definir a codificação de caracteres para suportar acentos e símbolos universais",
    [
        "A) Definir a velocidade de carregamento do servidor",
        "B) Especificar o conjunto de caracteres UTF-8, garantindo a correta exibição de acentos, cedilhas e caracteres internacionais",
        "C) Criptografar o código fonte contra cópias piratas",
        "D) Definir a linguagem padrão da interface do navegador"
    ],
    "B",
    "O UTF-8 é o padrão mundial de codificação de caracteres na web.",
    "Sua ausência pode causar problemas de exibição de caracteres especiais (gerando símbolos corrompidos)."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual tag HTML é utilizada para criar uma caixa de texto de múltiplas linhas (área de texto) em um formulário?",
    "<textarea>",
    [
        "A) <input type=\"multiline\">",
        "B) <textarea>",
        "C) <text-input lines=\"multiple\">",
        "D) <box-text>"
    ],
    "B",
    "A tag <textarea> permite que os usuários insiram blocos extensos de texto livre.",
    "Diferente do <input type='text'>, que é limitado a uma única linha."
);


// --- 16 a 27: CSS e Estilização Avançada ---

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual propriedade CSS é utilizada para alterar a cor de fundo de um elemento?",
    "background-color: #ffffff;",
    [
        "A) color",
        "B) background-color",
        "C) fill-color",
        "D) bg-style"
    ],
    "B",
    "A propriedade background-color define a cor de fundo, enquanto color altera a cor do texto.",
    "Essencial para estilização visual básica."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "Qual é a diferença principal entre position: absolute e position: fixed em CSS?",
    "Contexto de referência e rolagem da página",
    [
        "A) Absolute posiciona em relação à tela, enquanto fixed posiciona em relação ao corpo",
        "B) Absolute posiciona em relação ao ancestral posicionado mais próximo, enquanto fixed posiciona em relação à janela de visualização (viewport) e não se move com o scroll",
        "C) Fixed funciona apenas em dispositivos móveis",
        "D) Não há diferença prática de comportamento"
    ],
    "B",
    "Elementos com position: fixed ficam fixos na tela mesmo quando o usuário rola a página (scroll), ao contrário de absolute.",
    "Fundamentais para criar menus fixos e layouts complexos."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que caracteriza o modelo de layout CSS Flexbox?",
    "Alinhamento unidimensional de itens",
    [
        "A) Um sistema de grade bidimensional focado em colunas e linhas complexas",
        "B) Um modelo unidimensional projetado para distribuir espaço e alinhar itens em linha ou coluna",
        "C) Um método obsoleto substituído por tabelas HTML",
        "D) Uma ferramenta exclusiva para animações 3D"
    ],
    "B",
    "O Flexbox é ideal para layouts onde os itens precisam se ajustar dinamicamente em uma única direção (linha ou coluna).",
    "Para layouts complexos em grade de duas dimensões, usa-se CSS Grid."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual propriedade CSS define a opacidade (transparência) de um elemento?",
    "opacity: 0.5;",
    [
        "A) transparency",
        "B) opacity",
        "C) alpha",
        "D) visibility"
    ],
    "B",
    "A propriedade opacity aceita valores de 0 (totalmente transparente) a 1 (totalmente opaco).",
    "Diferente de visibility: hidden, a opacidade ainda mantém a interatividade do elemento se não for ajustada."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "No contexto de CSS Grid, o que significa a unidade fracionária fr?",
    "Fração do espaço disponível no container da grade",
    [
        "A) Uma unidade fixa baseada em fontes tipográficas",
        "B) Uma fração do espaço livre disponível dentro do container grid",
        "C) Pixels flutuantes responsivos",
        "D) Porcentagem baseada na altura da tela"
    ],
    "B",
    "A unidade fr facilita criar layouts flexíveis onde o espaço é distribuído proporcionalmente (ex: 1fr 2fr).",
    "Elimina o cálculo manual complexo de porcentagens com margens."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que é o conceito de CSS Specificity (Especificidade)?",
    "Regra de peso que define qual estilo CSS será aplicado quando há conflitos",
    [
        "A) A velocidade com que o navegador interpreta o arquivo de estilos",
        "B) O peso calculado de seletores CSS para determinar qual regra prevalece em caso de conflito de regras sobre o mesmo elemento",
        "C) A quantidade de linhas de código em um arquivo CSS",
        "D) O suporte a navegadores antigos"
    ],
    "B",
    "IDs têm mais peso que classes, que por sua vez têm mais peso que seletores de tag.",
    "O uso excessivo de !important sobrescreve a especificidade normal."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual propriedade CSS define o espaçamento interno entre o conteúdo de um elemento e suas bordas?",
    "padding: 15px;",
    [
        "A) margin",
        "B) spacing",
        "C) padding",
        "D) border-gap"
    ],
    "C",
    "O padding define o espaço interno. O margin define o espaço externo ao redor da borda.",
    "Componentes fundamentais do CSS Box Model."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que define o comportamento de seletores CSS combinadores, como o seletor de irmão adjacente (+)?",
    "Seleciona o elemento imediatamente após o especificado",
    [
        "A) Seleciona todos os descendentes diretos ou indiretos",
        "B) Seleciona o elemento que vem imediatamente após o primeiro elemento especificado, desde que compartilhem o mesmo pai",
        "C) Seleciona apenas elementos que possuem classes idênticas",
        "D) Seleciona elementos pais recursivamente"
    ],
    "B",
    "O combinador + atinge o próximo irmão imediato. O combinador ~ atinge todos os irmãos seguintes.",
    "Útil para estilizações condicionais baseadas na ordem estrutural do HTML."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que são Media Queries em CSS e qual é o seu principal caso de uso?",
    "Regras condicionais para aplicar estilos baseados nas características do dispositivo (como largura da tela)",
    [
        "A) Funções para carregar vídeos e mídias em alta definição",
        "B) Ferramentas de estilização condicional que aplicam regras CSS específicas dependendo do tamanho da tela, resolução ou orientação do dispositivo (essencial para Design Responsivo)",
        "C) Consultas de banco de dados feitas diretamente no arquivo de estilos",
        "D) Comandos de animação vetorial"
    ],
    "B",
    "As media queries formam a base do design responsivo moderno, permitindo adaptar interfaces de desktops para celulares e tablets.",
    "Exemplo: @media (max-width: 768px) { ... }"
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual propriedade CSS é utilizada para alterar a cor do texto de um elemento?",
    "color: #ff0000;",
    [
        "A) text-color",
        "B) font-color",
        "C) color",
        "D) text-style"
    ],
    "C",
    "A propriedade color define a cor do texto, diferentemente de background-color.",
    "Pode receber valores em HEX, RGB, HSL ou nomes de cores diretos."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "Qual é a diferença entre unidades de medida relativas (como em, rem, %) e absolutas (como px) em CSS?",
    "Escalabilidade em relação a contextos ou dispositivos",
    [
        "A) Unidades relativas só funcionam em navegadores mobile",
        "B) Unidades absolutas (px) possuem tamanho fixo invariável; unidades relativas (rem, em, %) escalam dinamicamente com base no elemento pai, raiz ou viewport, facilitando a acessibilidade e responsividade",
        "C) Unidades relativas não aceitam casas decimais",
        "D) Não há diferença prática na renderização moderna"
    ],
    "B",
    "O uso de rem (relativo à fonte raiz <html>) é altamente recomendado para tipografia responsiva e acessibilidade (zoom de tela).",
    "Pixels (px) continuam úteis para bordas finas e detalhes de layout estritos."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que faz a propriedade CSS `box-sizing: border-box;`?",
    "Inclui padding e border na largura e altura totais declaradas do elemento",
    [
        "A) Adiciona sombras tridimensionais automáticas nas bordas do elemento",
        "B) Faz com que o padding e a borda sejam incluídos dentro das dimensões de largura (width) e altura (height) especificadas, evitando que o elemento expanda além do esperado",
        "C) Converte caixas retangulares em círculos perfeitos",
        "D) Remove completamente as bordas de tabelas"
    ],
    "B",
    "Por padrão (content-box), o padding e a border somam-se à largura declarada, quebrando layouts frequentemente. Border-box resolve esse problema intuitivamente.",
    "É amplamente aplicada como reset universal em folhas de estilo modernas (* { box-sizing: border-box; })."
);


// --- 28 a 40: JavaScript, DOM e Assincronicidade ---

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que significa a sigla DOM no contexto de desenvolvimento web com JavaScript?",
    "Document Object Model",
    [
        "A) Data Object Management",
        "B) Document Object Model",
        "C) Digital Oriented Markup",
        "D) Dynamic Opacity Module"
    ],
    "B",
    "O DOM é a representação em árvore estruturada do documento HTML que permite ao JavaScript interagir e modificar elementos da página.",
    "Permite manipulação dinâmica de conteúdo, classes e estilos."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual método JavaScript é utilizado para selecionar um único elemento do DOM utilizando um seletor CSS (como uma classe ou ID)?",
    "document.querySelector('#meuId');",
    [
        "A) document.getElementById() apenas",
        "B) document.querySelector()",
        "C) document.selectElement()",
        "D) document.findElement()"
    ],
    "B",
    "O querySelector retorna o primeiro elemento que corresponde ao seletor CSS especificado.",
    "Para retornar todos os elementos correspondentes, usa-se querySelectorAll()."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que é o mecanismo de Event Bubbling (Borbulhamento de Eventos) em JavaScript?",
    "Propagação de eventos do elemento mais interno para os mais externos",
    [
        "A) A criação de eventos duplicados por falha de sintaxe",
        "B) O fluxo onde um evento disparado em um elemento filho é propagado para cima através de seus ancestrais na árvore DOM",
        "C) O cancelamento automático de requisições AJAX simultâneas",
        "D) A execução assíncrona de funções em background"
    ],
    "B",
    "Quando um evento ocorre em um elemento, ele primeiro roda os ouvintes do próprio elemento e depois sobe propagando-se para os elementos pai.",
    "Pode ser interrompido usando o método event.stopPropagation()."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que são Promises em JavaScript?",
    "Objetos que representam a conclusão ou falha de uma operação assíncrona",
    [
        "A) Variáveis constantes que nunca mudam de valor",
        "B) Objetos que representam o resultado eventual (sucesso ou erro) de uma operação assíncrona",
        "C) Funções matemáticas de alta precisão",
        "D) Atalhos para criar loops for otimizados"
    ],
    "B",
    "Promises possuem estados: pending (pendente), fulfilled (realizada) e rejected (rejeitada).",
    "Facilitam o tratamento de código assíncrono em comparação a callbacks aninhados."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que o operador await faz dentro de uma função assíncrona (async function) em JavaScript?",
    "Pausa a execução da função até que a Promise seja resolvida",
    [
        "A) Interrompe a execução de todo o navegador",
        "B) Faz a função aguardar de forma assíncrona a resolução de uma Promise antes de prosseguir com a próxima linha",
        "C) Converte tipos primitivos em objetos",
        "D) Dispara um erro síncrono proposital"
    ],
    "B",
    "O await torna o código assíncrono muito mais legível, parecendo um código síncrono linear.",
    "Só pode ser utilizado dentro de funções declaradas com a palavra-chave async."
);

addQuestion(
    "Desenvolvimento Web", "Fácil",
    "Qual comando JavaScript converte um objeto ou array JavaScript em uma string JSON?",
    "JSON.stringify(objeto);",
    [
        "A) JSON.parse()",
        "B) JSON.stringify()",
        "C) JSON.toText()",
        "D) JSON.convert()"
    ],
    "B",
    "JSON.stringify serializa dados para o formato de texto JSON, enquanto JSON.parse faz o inverso (texto para objeto).",
    "Fundamental para enviar dados via fetch para APIs."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que é o CORS (Cross-Origin Resource Sharing) em aplicações web?",
    "Mecanismo de segurança baseado em cabeçalhos HTTP",
    [
        "A) Um protocolo de criptografia de ponta a ponta para senhas",
        "B) Um mecanismo de segurança implementado por navegadores que restringe requisições HTTP feitas a partir de um domínio diferente daquele que serviu o recurso original",
        "C) Uma biblioteca JavaScript para requisições assíncronas",
        "D) Um padrão de rotas para Single Page Applications"
    ],
    "B",
    "O CORS protege contra requisições maliciosas entre origens distintas, exigindo cabeçalhos específicos no servidor para liberar o acesso.",
    "Erros de CORS ocorrem frequentemente ao testar APIs locais sem configuração de permissão."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "Qual é a principal utilidade do localStorage em navegadores web?",
    "Armazenamento persistente de dados chave-valor no navegador",
    [
        "A) Enviar dados criptografados diretamente para um banco de dados em nuvem",
        "B) Armazenar dados no navegador do usuário de forma persistente, mesmo após fechar a aba ou o navegador",
        "C) Guardar arquivos temporários que expiram ao fechar a sessão",
        "D) Gerenciar o histórico de navegação avançado"
    ],
    "B",
    "Diferente do sessionStorage (que apaga ao fechar a aba), o localStorage armazena dados sem data de expiração explícita.",
    "Armazena apenas strings. Objetos precisam ser convertidos com JSON.stringify."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que é o Virtual DOM utilizado em bibliotecas como o React?",
    "Cópia leve do DOM real mantida na memória",
    [
        "A) Um navegador web rodando em servidores na nuvem",
        "B) Uma representação leve em memória do DOM real, permitindo calcular o diff e atualizar apenas os nós alterados de forma otimizada",
        "C) Um emulador de dispositivos móveis para testes",
        "D) Uma extensão de segurança para JavaScript"
    ],
    "B",
    "O Virtual DOM minimiza manipulações diretas e lentas do DOM real, melhorando drasticamente a performance de renderização.",
    "O algoritmo de reconciliação compara o estado anterior com o atual."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "O que significa dizer que o JavaScript é uma linguagem de programação single-threaded?",
    "Executa apenas uma instrução por vez na thread principal",
    [
        "A) Não suporta nenhum tipo de operação assíncrona",
        "B) Possui apenas uma linha de execução principal na thread, processando tarefas sequencialmente",
        "C) Roda estritamente em processadores de um único núcleo",
        "D) É uma linguagem exclusiva para servidores monousuário"
    ],
    "B",
    "Embora seja single-threaded, o JavaScript gerencia operações assíncronas eficientemente através do Event Loop e callbacks.",
    "Evita problemas complexos de concorrência comum em multithreading tradicional."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que são Web Workers em JavaScript?",
    "Scripts executados em background em threads separadas",
    [
        "A) Robôs de indexação de motores de busca",
        "B) Um mecanismo que permite executar scripts JavaScript em threads de segundo plano separadas da thread principal da interface",
        "C) Ferramentas de automação de testes end-to-end",
        "D) Servidores web embutidos no navegador"
    ],
    "B",
    "Web Workers evitam que tarefas pesadas de processamento travem a interface gráfica do usuário na thread principal.",
    "Eles não têm acesso direto ao DOM da página."
);

addQuestion(
    "Desenvolvimento Web", "Média",
    "Qual é a utilidade do método fetch() em JavaScript moderno?",
    "Realizar requisições HTTP assíncronas para servidores (APIs)",
    [
        "A) Buscar elementos no DOM usando tags HTML",
        "B) Realizar requisições de rede assíncronas (como GET e POST) para buscar recursos ou APIs",
        "C) Baixar arquivos compactados em formato ZIP localmente",
        "D) Recarregar a página web automaticamente"
    ],
    "B",
    "O fetch() substituiu o antigo XMLHttpRequest, retornando Promises de forma nativa.",
    "Facilita a comunicação com serviços web e APIs RESTful."
);

addQuestion(
    "Desenvolvimento Web", "Difícil",
    "O que é um Closure (Fechamento) em JavaScript?",
    "Uma função que se lembra do seu escopo léxico mesmo quando executada fora dele",
    [
        "A) Um comando para encerrar conexões abertas de rede",
        "B) A capacidade de uma função interna acessar e lembrar das variáveis de sua função externa (escopo léxico), mesmo após a função externa já ter retornado",
        "C) Uma estrutura de dados para criptografar senhas locais",
        "D) Um erro de sintaxe gerado por variáveis não declaradas"
    ],
    "B",
    "Closures são fundamentais em JavaScript para criar variáveis privadas e emular encapsulamento de dados.",
    "Utilizados frequentemente em geradores de funções e callbacks avançados."
);

/* =====================================================
   BLOCO 09: SPRING FRAMEWORK (SPRING BOOT, DATA, SECURITY, CLOUD E ARQUITETURA)
===================================================== */

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o conceito de Inversão de Controle (IoC) e Injeção de Dependência (DI) no Spring Framework?",
    "IoC e Injeção de Dependência",
    [
        "A) O Spring obriga o desenvolvedor a instanciar manualmente todas as classes com o operador `new` em tempo de execução.",
        "B) O framework (Container IoC) assume a responsabilidade de criar, gerenciar o ciclo de vida e injetar automaticamente os objetos (beans) onde forem necessários, promovendo o desacoplamento.",
        "C) É um mecanismo de segurança para criptografar senhas de usuários no banco de dados.",
        "D) Um padrão de roteamento de requisições HTTP para microsserviços."
    ],
    "B",
    "Em vez da classe controlar a criação de suas próprias dependências, o container do Spring faz essa injeção (geralmente via `@Autowired` ou construtor), facilitando testes e manutenção.",
    "A injeção via construtor é atualmente a prática recomendada em detrimento da injeção direta em campos (`@Autowired` em atributos)."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é o principal objetivo do Spring Boot na simplificação do desenvolvimento de aplicações Java?",
    "Spring Boot",
    [
        "A) Substituir a linguagem Java por JavaScript no backend.",
        "B) Eliminar a necessidade de configurações XML complexas e Boilerplate, oferecendo auto-configuração (autoconfigure), dependências empacotadas (starters) e um servidor embutido (como Tomcat).",
        "C) Executar o código exclusivamente no navegador web do cliente.",
        "D) Fornecer um banco de dados relacional em memória com persistência infinita."
    ],
    "B",
    "O Spring Boot automatiza a configuração inicial de bibliotecas com base no classpath e nas dependências declaradas (os famosos `spring-boot-starter-*`), permitindo subir uma aplicação pronta para produção em minutos.",
    "Permite focar nas regras de negócio em vez de gastar horas configurando servidores de aplicação."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como o Spring Data JPA simplifica a camada de persistência de dados em aplicações Java?",
    "Spring Data JPA",
    [
        "A) Exigindo que o desenvolvedor escreva manualmente todas as consultas SQL brutas para operações básicas de CRUD.",
        "B) Permitindo a criação automática de repositórios através de interfaces que estendem `JpaRepository`, gerando consultas dinâmicas baseadas no nome dos métodos e implementando o mapeamento objeto-relacional (ORM).",
        "C) Substituindo o banco de dados por arquivos de texto plano em formato CSV.",
        "D) Executando migrações de esquema via linha de comando do terminal."
    ],
    "B",
    "Com o Spring Data JPA, você cria uma interface como `interface UsuarioRepository extends JpaRepository<Usuario, Long>` e o framework implementa automaticamente operações como `save`, `findById`, `delete`, além de parser de nomes como `findByEmail`.",
    "Reduz drasticamente o código repetitivo (boilerplate) de acesso a dados."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a função das anotações `@Controller` e `@RestController` no Spring MVC / Spring Boot?",
    "Spring MVC e REST",
    [
        "A) `@Controller` lida com requisições HTTP retornando visualizações (como páginas HTML via Thymeleaf), enquanto `@RestController` é uma combinação de `@Controller` com `@ResponseBody`, serializando os retornos automaticamente para JSON ou XML.",
        "B) `@RestController` é usado apenas para conectar o sistema ao banco de dados Oracle.",
        "C) Não há diferença técnica; ambas executam exatamente o mesmo comportamento de serialização.",
        "D) `@Controller` gerencia transações de segurança e `@RestController` gerencia rotas de arquivos estáticos."
    ],
    "A",
    "A anotação `@RestController` é o padrão para desenvolvimento de APIs REST modernas, pois garante que o objeto retornado por um método seja convertido diretamente em JSON para consumo pelo frontend.",
    "Facilita a construção de arquiteturas desacopladas."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que o Spring Security gerencia em uma aplicação web corporativa?",
    "Spring Security",
    [
        "A) O balanceamento de carga entre servidores na nuvem AWS.",
        "B) O framework abrangente e altamente customizável de autenticação (quem você é) e controle de autorização (o que você pode fazer), além de proteção contra vulnerabilidades comuns como CSRF e XSS.",
        "C) A compactação de arquivos estáticos de imagem e JavaScript.",
        "D) A execução de testes unitários automatizados."
    ],
    "B",
    "O Spring Security intercepta requisições HTTP através de uma cadeia de filtros (Security Filter Chain), garantindo que apenas usuários autenticados e com as devidas roles/permissões acessem endpoints protegidos.",
    "É amplamente integrado com padrões modernos como OAuth2, JWT e autenticação baseada em sessão."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que serve a anotação `@Transactional` no Spring?",
    "Gerenciamento de Transações",
    [
        "A) Para registrar logs de erro no arquivo console da aplicação.",
        "B) Para gerenciar automaticamente o limite de conexões simultâneas com o servidor.",
        "C) Para declarar que um método ou classe deve executar dentro de uma transação de banco de dados, garantindo atomicidade (ACID) — ou seja, se ocorrer uma exceção não tratada, todas as operações são revertidas (rollback).",
        "D) Para criptografar dados sensíveis trafegados na rede."
    ],
    "C",
    "O Spring gerencia transações de forma declarativa através de proxies. Se um método anotado com `@Transactional` lança uma RuntimeException, o framework executa o rollback automático no banco.",
    "Fundamental para manter a consistência de dados em operações complexas que envolvem múltiplos passos."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que são e para que servem os 'Spring Boot Actuator' em uma aplicação de produção?",
    "Spring Boot Actuator",
    [
        "A) Ferramentas para gerar diagramas UML da arquitetura da aplicação.",
        "B) Endpoints prontos de monitoramento e gerenciamento que expõem métricas de saúde da aplicação (`/actuator/health`), uso de memória, threads, ambiente e informações de build.",
        "C) Um compilador de código Java para binários nativos.",
        "D) Um framework de testes de aceitação em interface gráfica."
    ],
    "B",
    "O Actuator é essencial em ambientes de microsserviços e produção, permitindo que ferramentas de observabilidade (como Prometheus, Grafana ou Kubernetes) monitorem a saúde do serviço em tempo real.",
    "Endpoints sensíveis devem ser devidamente protegidos via Spring Security."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a utilidade do ecossistema 'Spring Cloud' no desenvolvimento de software?",
    "Spring Cloud",
    [
        "A) Fornecer ferramentas e padrões para o desenvolvimento e gerenciamento de arquiteturas baseadas em microsserviços (como Service Discovery, API Gateway, Config Server e Circuit Breaker).",
        "B) Hospedar arquivos estáticos de imagens na nuvem da Google.",
        "C) Substituir o framework Spring Boot por servidores web tradicionais legados.",
        "D) Otimizar consultas SQL em bancos de dados relacionais locais."
    ],
    "A",
    "O Spring Cloud resolve os problemas complexos inerentes a sistemas distribuídos, como descoberta dinâmica de serviços (Eureka), centralização de configurações e tolerância a faltas.",
    "Facilita a transição de monólitos para ambientes resilientes baseados em nuvem."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como o Spring lida com o tratamento global de exceções em APIs REST?",
    "Tratamento de Exceções",
    [
        "A) Deixando a aplicação quebrar e exibir stack traces em HTML para o usuário final.",
        "B) Utilizando classes anotadas com `@ControllerAdvice` (ou `@RestControllerAdvice`) combinadas com `@ExceptionHandler` para capturar exceções de forma centralizada e retornar respostas HTTP padronizadas.",
        "C) Forçando o reinício automático do servidor web a cada erro encontrado.",
        "D) Convertendo erros de banco de dados diretamente em arquivos PDF."
    ],
    "B",
    "O `@ControllerAdvice` atua como um interceptor global de erros, permitindo mapear exceções de negócio (ex: `RecursoNaoEncontradoException`) para códigos de status HTTP apropriados (`404 Not Found`) de forma limpa.",
    "Evita duplicação de blocos `try-catch` espalhados por todos os controllers."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que o Spring Profiles (`application-{profile}.properties` ou `.yml`) permite configurar em uma aplicação?",
    "Spring Profiles",
    [
        "A) Os perfis de acesso e permissões dos usuários administradores do sistema.",
        "B) Conjuntos de configurações customizadas e isoladas para diferentes ambientes de execução (como `dev`, `test`, `prod`), permitindo alternar facilmente conexões de banco de dados e portas sem alterar o código fonte.",
        "C) A paleta de cores e temas visuais do framework.",
        "D) As credenciais de acesso ao repositório GitHub."
    ],
    "B",
    "Os profiles ajudam a separar parâmetros que mudam conforme o ambiente onde a aplicação está rodando (ex: banco H2 em memória para desenvolvimento e PostgreSQL corporativo para produção).",
    "Pode ser ativado via propriedade `spring.profiles.active=prod`."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a função da anotação `@Component` e suas especializações (`@Service`, `@Repository`, `@Controller`) no Spring?",
    "Estereótipos do Spring",
    [
        "A) Indicar classes que devem ser ignoradas pelo container IoC.",
        "B) Marcar classes para que o Spring faça a varredura automática (Component Scanning) e as registre como beans gerenciados no container.",
        "C) Definir rotas de conexão exclusiva com o protocolo FTP.",
        "D) Configurar regras de formatação de moeda para internacionalização."
    ],
    "B",
    "O Spring detecta automaticamente classes anotadas com `@Component` e seus derivados semânticos, instanciando-as e tornando-as disponíveis para injeção de dependência.",
    "`@Repository` também adiciona tradução automática de exceções de banco de dados para DataAccessExceptions do Spring."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que significa o escopo de um Bean no Spring (`singleton`, `prototype`, `request`, `session`)?",
    "Escopo de Beans",
    [
        "A) A quantidade de linhas de código que a classe possui.",
        "B) O tempo de vida e a forma como o container do Spring gerencia e compartilha instâncias daquele bean (por exemplo, `singleton` cria apenas uma instância para toda a aplicação; `prototype` cria uma nova instância a cada injeção ou solicitação).",
        "C) O nível de criptografia da classe contra engenharia reversa.",
        "D) A prioridade com que o compilador executa a classe."
    ],
    "B",
    "O escopo padrão no Spring é `singleton`. Beans com estado mutável compartilhados em threads concorrentes sob escopo singleton podem gerar problemas de concorrência (thread-safety).",
    "Escopos web como `request` e `session` só estão disponíveis em aplicações web integradas."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que servem as anotações `@PostConstruct` e `@PreDestroy` em um bean gerenciado pelo Spring?",
    "Ciclo de Vida do Bean",
    [
        "A) Para registrar logs de erro críticos no console do sistema.",
        "B) Para executar métodos específicos logo após a construção e injeção de dependências do bean (`@PostConstruct`) e antes que o bean seja destruído pelo container (`@PreDestroy`).",
        "C) Para testar a velocidade de resposta do banco de dados.",
        "D) Para abrir e fechar conexões de rede via Bluetooth."
    ],
    "B",
    "Esses ganchos (hooks) permitem inicializar recursos (como carregar caches ou abrir pools dedicados) e realizar limpezas adequadas antes do encerramento da aplicação.",
    "Faziam parte do pacote padrão `javax.annotation` (agora `jakarta.annotation`)."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o conceito de Spring Boot Starters e qual a sua principal vantagem?",
    "Spring Boot Starters",
    [
        "A) Atalhos de teclado para compilar o código mais rápido na IDE.",
        "B) Descritores de dependências prontos que reúnem todas as bibliotecas necessárias para um tipo específico de projeto (ex: `spring-boot-starter-web`, `spring-boot-starter-data-jpa`), eliminando o gerenciamento manual de versões.",
        "C) Ferramentas para iniciar o sistema operacional a partir do disco rígido externo.",
        "D) Plugins para converter código Java para Python."
    ],
    "B",
    "Os starters garantem compatibilidade entre versões de bibliotecas correlatas (como Hibernate, Jackson e Tomcat), poupando desenvolvedores de conflitos de dependências no Maven ou Gradle.",
    "Basta adicionar o starter correto para habilitar uma pilha tecnológica inteira."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é o papel da anotação `@SpringBootApplication` nas classes principais do Spring Boot?",
    "Anotação Principal",
    [
        "A) É uma anotação meta que combina três outras anotações cruciais: `@SpringBootConfiguration`, `@EnableAutoConfiguration` e `@ComponentScan`.",
        "B) Força a aplicação a rodar exclusivamente em modo de homologação.",
        "C) Desativa todos os filtros de segurança do Spring Security.",
        "D) Cria tabelas físicas no banco de dados automaticamente semânticas."
    ],
    "A",
    "Essa única anotação inicializa o contexto da aplicação, ativa a varredura de componentes a partir do pacote atual e aciona a auto-configuração inteligente do Spring Boot.",
    "Geralmente colocada na classe que contém o método `main`."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como o Spring Boot determina quais configurações automáticas aplicar ao iniciar (Auto-Configuration)?",
    "Auto-Configuration",
    [
        "A) Lendo arquivos de texto gerados aleatoriamente pelo sistema operacional.",
        "B) Analisando o classpath da aplicação (quais dependências foram adicionadas no projeto) e as propriedades definidas no `application.properties` ou `application.yml` através de condicionais como `@ConditionalOnClass`.",
        "C) Consultando um servidor de inteligência artificial em nuvem em tempo real.",
        "D) Verificando a quantidade de memória RAM disponível na placa de vídeo."
    ],
    "B",
    "Se o driver do H2 e o Spring Data JPA estiverem no classpath, o Spring Boot auto-configura uma fonte de dados (DataSource) em memória sem que você precise escrever código para isso.",
    "Pode ser desativada pontualmente usando o atributo `exclude` na anotação principal."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que serve a anotação `@Configuration` combinada com `@Bean` em classes Java do Spring?",
    "Java-based Configuration",
    [
        "A) Para definir classes de configuração que registram manualmente beans no container IoC quando bibliotecas externas não possuem anotações de estereótipo.",
        "B) Para conectar a aplicação diretamente a impressoras locais via USB.",
        "C) Para criar telas de interface gráfica em desktop.",
        "D) Para compactar arquivos binários em formato ZIP."
    ],
    "A",
    "É a forma padrão para instanciar e configurar beans de terceiros (como um `ObjectMapper` customizado ou um cliente HTTP) cujas classes você não pode alterar para adicionar `@Component`.",
    "Os métodos anotados com `@Bean` são interceptados pelo container para garantir o comportamento Singleton."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que o Spring Expression Language (SpEL) permite fazer em aplicações Spring?",
    "SpEL",
    [
        "A) Compilar código Java diretamente para linguagem de máquina Assembly.",
        "B) Avaliar expressões dinâmicas em tempo de execução para consultar e manipular o grafo de objetos do container, sendo amplamente usado em injeções com `@Value` e regras de segurança.",
        "C) Escrever consultas SQL otimizadas para bancos NoSQL.",
        "D) Traduzir textos da interface para múltiplos idiomas automaticamente."
    ],
    "B",
    "Permite injetar propriedades usando sintaxe como `@Value(\"${app.nome:Padrao}\")` ou realizar operações lógicas complexas diretamente nas anotações.",
    "Oferece forte integração com o ecossistema Spring."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o Spring Native e qual problema ele busca resolver?",
    "Spring Native",
    [
        "A) Uma versão do Spring que roda exclusivamente em dispositivos móveis Android antigos.",
        "B) Uma tecnologia que permite compilar aplicações Spring Boot em executáveis nativos usando o GraalVM, reduzindo drasticamente o tempo de inicialização (startup time) e o consumo de memória RAM.",
        "C) Um driver para conectar o Spring diretamente a sistemas operacionais Linux legados.",
        "D) Uma biblioteca para criar jogos em 2D usando Java."
    ],
    "B",
    "A compilação nativa via GraalVM elimina a necessidade de carregar a máquina virtual Java tradicional em tempo de execução, ideal para ambientes serverless e Kubernetes.",
    "Integrado nativamente a partir do Spring Framework 6 / Spring Boot 3."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como funcionam as propriedades externas (Externalized Configuration) no Spring Boot?",
    "Externalized Configuration",
    [
        "A) Obrigando o desenvolvedor a recompilar o arquivo JAR toda vez que mudar uma URL de conexão.",
        "B) Permitindo separar o código das configurações por meio de arquivos (`application.properties`, `application.yml`), variáveis de ambiente, argumentos de linha de comando (`--server.port=9090`) e JNDI.",
        "C) Armazenando senhas em texto puro diretamente no código fonte do repositório.",
        "D) Sincronizando dados através de disquetes de 3.5 polegadas."
    ],
    "B",
    "O Spring Boot possui uma ordem estrita de precedência para carregar propriedades, permitindo sobrescrever configurações locais facilmente via variáveis de ambiente em produção.",
    "Variáveis de ambiente em formato maiúsculo com sublinhados (ex: `SPRING_DATASOURCE_URL`) são mapeadas automaticamente."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o mecanismo de Derived Query Methods (Consultas Derivadas) no Spring Data JPA?",
    "Derived Query Methods",
    [
        "A) Um gerador de relatórios visuais em PDF.",
        "B) A capacidade de criar consultas SQL/JPQL automaticamente com base puramente na assinatura e nomenclatura dos métodos da interface de repositório (ex: `findByNomeAndEmail`).",
        "C) Um otimizador de índices para bancos de dados relacionais.",
        "D) Um sistema de cache em memória para requisições HTTP."
    ],
    "B",
    "O Spring analisa o nome do método (`findBy`, `readBy`, `countBy`, `deleteBy`) combinando com propriedades da entidade para gerar a consulta correspondente sem necessidade de código manual.",
    "Evita escrever consultas JPQL simples repetidamente."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que serve a anotação `@Query` no Spring Data JPA?",
    "Anotação @Query",
    [
        "A) Para disparar alertas sonoros quando o banco de dados cair.",
        "B) Para escrever consultas personalizadas utilizando JPQL (Java Persistence Query Language) ou SQL nativo diretamente nos métodos dos repositórios.",
        "C) Para gerar dados fakes de teste automaticamente.",
        "D) Para mapear relacionamentos de chave estrangeira entre tabelas."
    ],
    "B",
    "Quando as consultas derivadas se tornam complexas demais ou exigem junções avançadas (JOINs), a anotação `@Query` permite escrever o comando personalizado. Pode usar `nativeQuery = true` para SQL puro.",
    "Suporta parâmetros nomeados com `@Param`."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que são e para que servem as Paginations e Sortings através das interfaces `Pageable` e `Page` no Spring Data JPA?",
    "Paginação e Ordenação",
    [
        "A) Para redimensionar o tamanho das janelas de código na IDE.",
        "B) Para buscar grandes volumes de dados do banco de dados divididos em páginas controladas e ordenadas, otimizando o uso de memória e a performance da API.",
        "C) Para criar animações de rolagem infinita no frontend.",
        "D) Para limitar a quantidade de linhas em arquivos de log."
    ],
    "B",
    "Passando um objeto `Pageable` (geralmente construído via `PageRequest.of(page, size, sort)`) no método do repositório, o Spring gera automaticamente as cláusulas LIMIT e OFFSET no SQL subjacente.",
    "Retorna um objeto `Page<T>` contendo metadados úteis como total de elementos e total de páginas."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a diferença entre carregamento EAGER (ocioso/imediato) e LAZY (preguiçoso) em mapeamentos JPA (`@OneToMany`, `@ManyToOne`)?",
    "EAGER vs LAZY",
    [
        "A) EAGER carrega os dados associados apenas quando acessados explicitamente; LAZY carrega tudo imediatamente junto com a entidade principal.",
        "B) LAZY carrega os dados relacionados sob demanda (apenas quando o getter correspondente é chamado), economizando recursos; EAGER carrega os dados associados imediatamente na mesma consulta inicial.",
        "C) Não há diferença de desempenho entre ambos.",
        "D) LAZY funciona apenas com bancos de dados NoSQL."
    ],
    "B",
    "O padrão para coleções (`@OneToMany`, `@ManyToMany`) no JPA é `LAZY` para evitar consultas pesadas desnecessárias. O acesso fora de uma transação ativa pode gerar a famosa exceção `LazyInitializationException`.",
    "Associações para um (`@ManyToOne`, `@OneToOne`) vêm por padrão como `EAGER`."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que o Flyway ou Liquibase realizam quando integrados a uma aplicação Spring Boot?",
    "Database Migrations",
    [
        "A) Gerenciam o versionamento e a evolução estrutural do banco de dados (criação de tabelas, colunas, scripts de migração SQL) de forma automatizada e controlada entre diferentes ambientes.",
        "B) Converte arquivos de texto em planilhas Excel na nuvem.",
        "C) Realizam backups automáticos do disco rígido local.",
        "D) Otimizam loops de repetição em Java."
    ],
    "A",
    "Eles evitam o risco de usar `spring.jpa.hibernate.ddl-auto=create-drop` ou `update` em produção, garantindo que o esquema do banco evolua de forma previsível e auditável via scripts versionados.",
    "Os scripts são executados ordenadamente assim que a aplicação sobe."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o conceito de Projections (Projeções) no Spring Data JPA?",
    "Projections",
    [
        "A) Ferramentas de inteligência artificial para projetar telas em 3D.",
        "B) Um mecanismo que permite buscar apenas um subconjunto específico de colunas de uma entidade usando interfaces (Interface-based Projections) ou classes DTO, evitando o tráfego desnecessário de dados.",
        "C) Um padrão de design para criar animações em HTML5.",
        "D) Um formato de compactação de imagens."
    ],
    "B",
    "Em vez de carregar a entidade inteira com dezenas de colunas, você pode definir uma interface com getters específicos (`interface NomeEmailOnly { String getNome(); String getEmail(); }`) e o Spring otimiza a query.",
    "Melhora a performance em consultas de leitura intensiva."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que ocorre quando uma operação de banco de dados lança uma exceção e o método está anotado com `@Transactional`?",
    "Rollback Transactional",
    [
        "A) A transação é mantida aberta indefinidamente até o servidor reiniciar.",
        "B) O Spring realiza o rollback automático da transação caso ocorra uma `RuntimeException` (ou subclasses de `Error`), desfazendo todas as alterações feitas no banco de dados durante o escopo.",
        "C) O erro é ignorado silenciosamente e o fluxo continua.",
        "D) O sistema deleta todas as tabelas do banco de segurança."
    ],
    "B",
    "Por padrão, exceções checadas (`Checked Exceptions`, como `IOException`) não disparam rollback automático a menos que explicitamente configurado (`@Transactional(rollbackFor = Exception.class)`).",
    "Garante a integridade dos dados transacionais."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que serve a anotação `@Modifying` combinada com `@Query` no Spring Data JPA?",
    "@Modifying",
    [
        "A) Para modificar o estilo visual dos botões no front-end.",
        "B) Para indicar ao Spring Data que a consulta personalizada (`@Query`) é uma operação de alteração de dados (como UPDATE, DELETE ou INSERT), exigindo uma transação ativa.",
        "C) Para alterar dinamicamente o tipo de banco de dados em tempo de execução.",
        "D) Para modificar permissões de acesso de usuários no Spring Security."
    ],
    "B",
    "Por padrão, o Spring Data assume que consultas `@Query` são do tipo SELECT. Sem o `@Modifying`, operações de escrita em consultas JPQL nativas geram erros.",
    "Deve ser usado obrigatoriamente dentro de métodos transacionais."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o cache de primeiro nível (First-Level Cache) gerenciado pelo EntityManager / Hibernate no JPA?",
    "Hibernate Cache",
    [
        "A) Um cache compartilhado por todos os servidores do cluster em nuvem.",
        "B) Um cache associado ao ciclo de vida da transação (EntityManager/Session), que armazena entidades já carregadas para evitar consultas repetidas ao banco de dados dentro da mesma transação.",
        "C) O cache do navegador web do usuário final.",
        "D) Um armazenamento temporário na memória ROM do processador."
    ],
    "B",
    "Se você buscar o mesmo ID duas vezes dentro do mesmo escopo de persistência, a segunda chamada retorna a instância em memória sem ir ao banco.",
    "Existe também o cache de segundo nível (Second-Level Cache), que opera no nível da fábrica de sessões (SessionFactory)."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a utilidade da anotação `@EntityListeners` em entidades JPA?",
    "Entity Listeners",
    [
        "A) Para escutar eventos de cliques de mouse em formulários web.",
        "B) Para interceptar o ciclo de vida da entidade no banco de dados (como antes de persistir `@PrePersist`, após carregar `@PostLoad`, antes de atualizar `@PreUpdate`), permitindo auditorias automáticas.",
        "C) Para escutar requisições HTTP vindas de APIs externas.",
        "D) Para monitorar o uso de CPU do servidor."
    ],
    "B",
    "Muito utilizada para preencher automaticamente campos de data de criação e atualização (`createdAt`, `updatedAt`) sem precisar repassá-los manualmente em todos os serviços.",
    "Comum em classes de auditoria com `@EntityListeners(AuditingEntityListener.class)`."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como o Spring Security gerencia a autenticação em APIs REST modernas utilizando tokens JWT (JSON Web Token)?",
    "Spring Security & JWT",
    [
        "A) O Spring Security armazena o token permanentemente na memória RAM do roteador Wi-Fi.",
        "B) Através da criação de um filtro customizado (que estende `OncePerRequestFilter`) inserido na Security Filter Chain para interceptar requisições, validar o token no cabeçalho Authorization e autenticar o contexto de segurança.",
        "C) Substituindo completamente o protocolo HTTP por sockets criptografados.",
        "D) Criptografando arquivos de código fonte em tempo de compilação."
    ],
    "B",
    "Em APIs REST sem estado (stateless), o JWT substitui as sessões tradicionais baseadas em cookies. O filtro valida a assinatura do token e popula o `SecurityContextHolder`.",
    "O servidor não precisa manter estado de sessão dos usuários conectados."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que serve a anotação `@EnableWebSecurity` e o uso de beans do tipo `SecurityFilterChain` nas versões modernas do Spring Security (6+ / Boot 3+)?",
    "SecurityFilterChain",
    [
        "A) Para bloquear completamente o acesso de qualquer usuário à aplicação.",
        "B) Para configurar de forma declarativa e fluida as regras de segurança HTTP, como quais endpoints são públicos, quais exigem autenticação, regras de CORS, CSRF e o gerenciamento da sessão stateless.",
        "C) Para criptografar senhas usando algoritmos obsoletos como MD5.",
        "D) Para gerar certificados SSL autoassinados."
    ],
    "B",
    "Substituiu a antiga classe adaptadora `WebSecurityConfigurerAdapter` (que foi descontinuada), adotando uma abordagem baseada estritamente em componentes e builder fluídos.",
    "Garante controle granular sobre o fluxo de requisições."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o Service Discovery (Descoberta de Serviços) no ecossistema Spring Cloud, utilizando ferramentas como Netflix Eureka?",
    "Spring Cloud Eureka",
    [
        "A) Um mecanismo para descobrir vírus e malwares em servidores Java.",
        "B) Um registro centralizado onde microsserviços dinâmicos se registram ao inicializar e consultam uns aos outros por nome lógico, dispensando endereços IP estáticos em ambientes elásticos de nuvem.",
        "C) Uma ferramenta para buscar arquivos perdidos no disco rígido.",
        "D) Um banco de dados NoSQL distribuído."
    ],
    "B",
    "Em arquiteturas de microsserviços onde instâncias sobem e descem dinamicamente (ex: containers Kubernetes), o Service Discovery resolve o problema de comunicação entre serviços sem configuração manual de IPs.",
    "Composto por um servidor de registro (Eureka Server) e clientes (Eureka Clients)."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a função do Spring Cloud Gateway em uma arquitetura de microsserviços?",
    "Spring Cloud Gateway",
    [
        "A) Gerenciar portas físicas de roteamento de rede no switch da empresa.",
        "B) Atuar como ponto de entrada único (API Gateway) para todas as requisições externas, gerenciando roteamento dinâmico, filtros de segurança globais, limitação de taxa (rate limiting) e balanceamento de carga.",
        "C) Compilar arquivos Java para aplicações móveis iOS.",
        "D) Substituir bancos de dados relacionais por proxies reversos."
    ],
    "B",
    "O Gateway centraliza responsabilidades transversais que antes estariam duplicadas em cada microsserviço, servindo como a porta da frente segura para clientes web e mobile.",
    "Construído sobre o ecossistema reativo Project Reactor (WebFlux)."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como o Spring Boot facilita a realização de testes de integração com banco de dados usando a anotação `@DataJpaTest`?",
    "Testes com @DataJpaTest",
    [
        "A) Iniciando um servidor Tomcat completo e abrindo telas no navegador.",
        "B) Configurando automaticamente um ambiente de teste focado na camada JPA (carregando apenas repositórios, entidades e configurando por padrão um banco de dados em memória como H2), executando os testes de forma isolada e transacional.",
        "C) Executando testes unitários puramente em JavaScript.",
        "D) Conectando-se obrigatoriamente ao banco de dados de produção da empresa."
    ],
    "B",
    "O `@DataJpaTest` desativa a auto-configuração completa e carrega apenas os componentes essenciais para testar persistência, garantindo alta velocidade nos testes de repositórios.",
    "Cada teste é executado dentro de uma transação que sofre rollback automático ao final."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Para que serve a anotação `@SpringBootTest` em testes automatizados?",
    "@SpringBootTest",
    [
        "A) Para testar apenas funções matemáticas isoladas sem carregar o Spring.",
        "B) Para carregar o ApplicationContext completo do Spring Boot (incluindo todos os beans, serviços e controladores), permitindo testes de integração ponta a ponta (E2E).",
        "C) Para testar a velocidade de download de arquivos da internet.",
        "D) Para gerar relatórios de cobertura de código em formato gráfico."
    ],
    "B",
    "É a anotação mais abrangente para testes, simulando o ambiente real de execução da aplicação. Como carrega todo o contexto, tende a ser mais pesada que testes focados (@WebMvcTest, @DataJpaTest).",
    "Pode ser combinada com `WebEnvironment.RANDOM_PORT` para testar requisições HTTP reais via `TestRestTemplate` ou `WebTestClient`."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que é o Circuit Breaker (Disjuntor) provido pelo Resilience4j integrado ao Spring Cloud?",
    "Circuit Breaker",
    [
        "A) Um dispositivo físico de proteção contra curtos-circuitos elétricos no servidor.",
        "B) Um padrão de resiliência que monitora falhas em chamadas a serviços externos; se o número de erros ultrapassar um limite, o circuito 'abre', bloqueando novas chamadas imediatas e retornando uma resposta padrão (fallback) para evitar efeito cascata de indisponibilidade.",
        "C) Um mecanismo para desligar a aplicação quando o uso de memória atinge 100%.",
        "D) Um sistema de criptografia de senhas para APIs."
    ],
    "B",
    "Evita que a queda de um microsserviço secundário derrube toda a cadeia de microsserviços dependentes por esgotamento de threads (thread starvation).",
    "Possui estados: Closed, Open e Half-Open."
);

addQuestion(
    "Spring Framework",
    "Média",
    "O que o Spring Cloud Config Server resolve em ambientes corporativos distribuídos?",
    "Spring Cloud Config",
    [
        "A) A formatação de arquivos de texto em planilhas.",
        "B) A centralização do gerenciamento de arquivos de configuração de todos os microsserviços em um repositório remoto (como Git), permitindo atualizar parâmetros em tempo de execução sem recompilar as aplicações.",
        "C) O controle de acesso físico aos servidores em data centers.",
        "D) A tradução automática de códigos Java para C#."
    ],
    "B",
    "Em vez de cada microsserviço ter seus próprios application.properties espalhados, o Config Server centraliza e serve as configurações de forma segura e versionada.",
    "Suporta atualização dinâmica de propriedades via endpoint `/actuator/refresh` (quando combinado com `@RefreshScope`)."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Qual é a função da anotação `@WebMvcTest` em testes unitários do Spring Boot?",
    "@WebMvcTest",
    [
        "A) Testar diretamente queries SQL complexas no banco de dados Oracle.",
        "B) Focar o teste estritamente na camada web (Controllers), carregando apenas os componentes necessários do Spring MVC (como `@Controller`, `@ControllerAdvice`, conversores) sem subir o banco de dados ou serviços de negócio reais.",
        "C) Executar testes de estresse em servidores de nuvem.",
        "D) Compilar arquivos HTML para React."
    ],
    "B",
    "Permite testar rotas, validações de payload e códigos de status HTTP rapidamente com o auxílio do `MockMvc`, mockando as dependências de serviço (`@MockBean`).",
    "Isola o teste da camada de persistência."
);

addQuestion(
    "Spring Framework",
    "Média",
    "Como o Spring lida com agendamento de tarefas (Task Scheduling) de forma declarativa?",
    "Spring Scheduling",
    [
        "A) Exigindo a instalação de servidores de fila externos complexos obrigatórios.",
        "B) Através da anotação `@EnableScheduling` na classe de configuração e `@Scheduled(cron = '0 0 12 * * ?')` nos métodos que devem executar periodicamente.",
        "C) Executando código exclusivamente quando o usuário clica em um botão na interface.",
        "D) Lendo arquivos do Excel em segundo plano."
    ],
    "B",
    "O Spring disponibiliza um agendador de tarefas embutido baseado em pool de threads, suportando tanto intervalos fixos (`fixedRate`, `fixedDelay`) quanto expressões Cron completas.",
    "Ideal para rotas de limpeza de cache, envio de e-mails em lote ou relatórios agendados simples."
);

/* =====================================================
   Bloco 10: REST E SOAP (ARQUITETURAS DE APIS E SERVIÇOS WEB)
===================================================== */

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a principal diferença arquitetural e de protocolo entre os estilos REST e SOAP?",
    "Conceitos Básicos",
    [
        "A) O REST é um protocolo estrito baseado em XML padronizado pela W3C, enquanto o SOAP é um estilo arquitetural flexível restrito apenas ao método GET.",
        "B) O SOAP é um protocolo rígido baseado estritamente em XML com envelope próprio e contratos WSDL rígidos; o REST é um estilo arquitetural leve que utiliza verbos HTTP padrão (GET, POST, PUT, DELETE) e suporta múltiplos formatos de dados como JSON.",
        "C) O REST funciona exclusivamente sobre redes locais sem fio, enquanto o SOAP opera somente via Bluetooth.",
        "D) Não há diferenças técnicas; ambos são sinônimos para chamadas de procedimentos remotos (RPC)."
    ],
    "B",
    "O SOAP (Simple Object Access Protocol) é um protocolo pesado com especificações rígidas de segurança e transações (WS-Security). O REST (Representational State Transfer) foca em recursos, escalabilidade e simplicidade usando os princípios nativos da web.",
    "O REST tornou-se o padrão dominante para APIs web modernas devido à sua leveza e facilidade de consumo com JSON."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Como o REST lida com o conceito de 'Stateless' (Sem Estado) em suas requisições?",
    "Princípios do REST",
    [
        "A) O servidor armazena todas as senhas e históricos de navegação dos clientes em memória RAM.",
        "B) Cada requisição do cliente para o servidor deve conter todas as informações necessárias para entender e processar a solicitação, sem depender de contextos ou sessões armazenadas previamente no servidor.",
        "C) O estado da aplicação é mantido permanentemente em cookies criptografados no banco de dados relacional.",
        "D) O servidor gerencia o fluxo temporal das telas do usuário através de conexões TCP persistentes."
    ],
    "B",
    "A restrição Stateless melhora drasticamente a escalabilidade dos servidores REST, pois qualquer instância do servidor pode atender a qualquer requisição de forma independente.",
    "A autenticação baseada em tokens (como JWT) encaixa-se perfeitamente nessa premissa."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é o papel do arquivo WSDL (Web Services Description Language) no ecossistema SOAP?",
    "Contratos SOAP",
    [
        "A) Servir como um documento de estilos CSS para renderizar páginas HTML no navegador.",
        "B) Descrever formalmente o contrato do serviço SOAP, especificando as operações disponíveis, os formatos XML esperados, os tipos de dados e os endpoints de comunicação.",
        "C) Criptografar o payload da mensagem contra ataques de negação de serviço (DDoS).",
        "D) Substituir o banco de dados relacional no armazenamento de logs de erro."
    ],
    "B",
    "O WSDL atua como um contrato rígido baseado em XML. Ferramentas de desenvolvimento podem ler esse arquivo automaticamente para gerar stubs e classes de cliente capazes de consumir a API SOAP.",
    "Garante alta tipagem e validação estricta, embora adicione complexidade de configuração."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Quais são os verbos HTTP padrão mais comumente utilizados em uma API RESTful para mapear operações CRUD (Create, Read, Update, Delete)?",
    "Verbos HTTP no REST",
    [
        "A) `FETCH`, `SEND`, `CHANGE`, `REMOVE`",
        "B) `GET` (Ler), `POST` (Criar), `PUT`/`PATCH` (Atualizar), `DELETE` (Remover)",
        "C) `SELECT`, `INSERT`, `UPDATE`, `DROP`",
        "D) `REQUEST`, `RESPONSE`, `VALIDATE`, `EXECUTE`"
    ],
    "B",
    "O REST explora a semântica nativa dos métodos HTTP. O `GET` recupera recursos, `POST` cria novos recursos, `PUT`/`PATCH` atualizam e `DELETE` os remove.",
    "O uso correto dos verbos e códigos de status HTTP (200, 201, 400, 404, 500) é essencial para uma API REST bem projetada."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Por que o protocolo SOAP é frequentemente escolhido em ambientes corporativos bancários ou governamentais legados?",
    "Uso do SOAP",
    [
        "A) Porque ele consome menos largura de banda que o formato JSON.",
        "B) Devido aos seus padrões nativos robustos de segurança avançada (WS-Security), confiabilidade transacional (ACID/WS-AtomicTransaction) e contratos contratuais rígidos.",
        "C) Porque os navegadores web modernos executam SOAP de forma nativa sem bibliotecas adicionais.",
        "D) Porque ele não exige o uso de endereços IP para comunicação."
    ],
    "B",
    "Embora mais pesado e complexo que o REST, o SOAP oferece recursos de segurança corporativa de nível empresarial integrados e garantias rígidas de entrega de mensagens.",
    "Ainda é muito comum em sistemas legados corporativos e integrações B2B (Business-to-Business)."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que significa o conceito de 'HATEOAS' (Hypermedia As The Engine Of Application State) no nível mais avançado de maturidade REST (Modelo de Maturidade de Richardson)?",
    "HATEOAS no REST",
    [
        "A) Um sistema de criptografia de ponta a ponta para proteger dados contra ataques de man-in-the-middle.",
        "B) A prática de incluir links de hipermídia nas respostas da API, permitindo que o cliente navegue dinamicamente pelas próximas ações possíveis sem precisar hardcodar URLs.",
        "C) Uma biblioteca de compressão de arquivos JSON para otimizar o tráfego de rede.",
        "D) Um framework de injeção de dependência para microsserviços Java."
    ],
    "B",
    "Com HATEOAS, a resposta da API não traz apenas os dados, mas também os links de navegação disponíveis (ex: links para pagar, cancelar ou atualizar o recurso), tornando o cliente altamente desacoplado da estrutura de URLs.",
    "Representa o Nível 3 do Modelo de Maturidade de Leonard Richardson para APIs REST."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a principal desvantagem técnica associada ao uso do protocolo SOAP?",
    "Limitações do SOAP",
    [
        "A) A incapacidade total de trafegar dados em formato numérico.",
        "B) O alto overhead de processamento e banda devido à obrigatoriedade de serialização e parsing de estruturas XML complexas (Envelopes SOAP), além do acoplamento rígido.",
        "C) A falta absoluta de padrões de segurança e criptografia.",
        "D) A impossibilidade de ser executado sobre o protocolo HTTP."
    ],
    "B",
    "O XML do SOAP é verboso e pesado. Processar envelopes SOAP exige mais recursos computacionais de CPU e memória em comparação com o formato JSON leve utilizado pelo REST.",
    "Isso tornou o SOAP impopular para aplicações móveis e arquiteturas de alta escala orientadas a microsserviços."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Como o REST gerencia a identificação dos recursos disponibilizados na web?",
    "Recursos no REST",
    [
        "A) Através de nomes de métodos remotos encapsulados em um arquivo XML.",
        "B) Através de URIs (Uniform Resource Identifiers) claros e orientados a substantivos (ex: `/clientes/123/pedidos`).",
        "C) Através de números de portas TCP exclusivos para cada cliente conectado.",
        "D) Através de comandos SQL diretos enviados na URL."
    ],
    "B",
    "No REST, tudo é tratado como um 'recurso'. As URIs devem identificar os recursos de forma intuitiva, focando em substantivos no plural em vez de verbos de ação.",
    "Exemplo correto: `GET /produtos` em vez de `GET /obterProdutos`."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Em termos de transporte e flexibilidade de protocolos, qual é a grande vantagem do REST sobre o SOAP?",
    "Transporte no REST",
    [
        "A) O REST opera exclusivamente via protocolo FTP.",
        "B) O SOAP está preso obrigatoriamente ao protocolo HTTP, enquanto o REST pode usar qualquer protocolo de rede.",
        "C) O SOAP é altamente acoplado ao protocolo HTTP (e dependente de extensões rígidas), enquanto o REST tira proveito universal de qualquer recurso web baseado em HTTP, podendo também transitar facilmente sobre JSON, XML, HTML ou texto puro.",
        "D) O REST exige conexões dedicadas via cabo de fibra ótica."
    ],
    "C",
    "Embora o SOAP possa teoricamente rodar sobre SMTP ou TCP, ele é fortemente atrelado ao HTTP com regras complexas de envelopamento. O REST aproveita diretamente a infraestrutura nativa da web (cache, proxies, gateways HTTP).",
    "A flexibilidade de formatos de payload (JSON, XML, YAML) também favorece o REST."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual formato de serialização de dados é o mais universal e amplamente associado ao desenvolvimento de APIs REST modernas?",
    "Formatos de Dados no REST",
    [
        "A) XML estrito com validação XSD obrigatória.",
        "B) JSON (JavaScript Object Notation), devido à sua leveza, legibilidade humana e facilidade de parsing nativo em linguagens web.",
        "C) Arquivos binários compactados em formato ZIP.",
        "D) Textos estruturados em planilhas CSV."
    ],
    "B",
    "Embora o REST suporte múltiplos formatos (conteúdo negociado via header `Accept`), o JSON tornou-se o padrão de fato da indústria por sua simplicidade e baixo consumo de banda comparado ao XML.",
    "Acelera o desenvolvimento tanto no backend quanto no frontend."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que caracteriza o componente UDDI (Universal Description, Discovery, and Integration) na arquitetura tradicional de Web Services SOAP?",
    "UDDI no SOAP",
    [
        "A) Um banco de dados relacional para cache de imagens.",
        "B) Um diretório centralizado onde provedores registram seus serviços WSDL para que clientes possam descobri-los dinamicamente.",
        "C) Um mecanismo de criptografia de senhas para o protocolo HTTP.",
        "D) Uma ferramenta de testes automatizados de front-end."
    ],
    "B",
    "O UDDI formava a tríade clássica do SOAP junto com WSDL e o próprio protocolo SOAP, funcionando como um catálogo corporativo de serviços.",
    "Atualmente é pouco utilizado, tendo sido substituído por abordagens mais modernas em nuvem."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que significa a restrição de 'Uniform Interface' (Interface Uniforme) no estilo arquitetural REST?",
    "Interface Uniforme",
    [
        "A) Que todas as respostas da API devem usar a mesma paleta de cores CSS.",
        "B) Que as interações entre cliente e servidor seguem um conjunto padronizado de regras (identificação de recursos via URIs, manipulação via representações, mensagens auto-descritivas e HATEOAS), simplificando a arquitetura.",
        "C) Que o servidor deve aceitar apenas comandos escritos em linguagem C.",
        "D) Que o tamanho de todas as respostas JSON deve ser exatamente o mesmo."
    ],
    "B",
    "A interface uniforme desacopla os clientes das implementações dos servidores, permitindo que cada parte evolua de forma independente.",
    "É um dos pilares fundamentais definidos por Roy Fielding em sua tese."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Como o protocolo SOAP lida com a confiabilidade e transações distribuídas?",
    "WS-ReliableMessaging",
    [
        "A) Através de extensões de especificação conhecidas como WS-ReliableMessaging e WS-AtomicTransaction, que garantem entrega garantida de mensagens sobre redes instáveis.",
        "B) Deixando o pacote de dados ser descartado sem aviso prévio caso ocorra perda de sinal.",
        "C) Utilizando comandos de rollback automáticos no navegador do usuário.",
        "D) Criptografando o disco rígido do servidor de aplicação."
    ],
    "A",
    "O ecossistema WS-* (Web Services Standards) adiciona funcionalidades de nível empresarial que o HTTP puro do REST não possui nativamente.",
    "Exige implementações robustas tanto no cliente quanto no servidor."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a finalidade principal do cabeçalho HTTP `Cache-Control` em uma API RESTful?",
    "Cache no REST",
    [
        "A) Definir a senha de acesso root ao banco de dados.",
        "B) Instruir clientes, proxies e servidores intermediários sobre como e por quanto tempo uma resposta de recurso pode ser armazenada em cache.",
        "C) Forçar o navegador a reiniciar a cada 5 segundos.",
        "D) Compactar o código JavaScript do front-end."
    ],
    "B",
    "O uso correto de cache (ex: `Cache-Control: max-age=3600`) reduz drasticamente a carga no servidor e melhora a latência para os clientes.",
    "Aproveita a infraestrutura nativa da web que o SOAP não consegue utilizar com a mesma facilidade."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que representa o Nível 1 (Recursos) no Modelo de Maturidade de Richardson para APIs REST?",
    "Maturidade Richardson",
    [
        "A) O uso de um único endpoint genérico para todas as operações do sistema.",
        "B) A divisão do sistema em múltiplos URIs distintos para cada recurso específico (ex: `/usuarios`, `/produtos`), em vez de enviar tudo para um único túnel RPC.",
        "C) A implementação completa de HATEOAS com links hipermídia.",
        "D) A remoção total do protocolo HTTP."
    ],
    "B",
    "No Nível 1, a API começa a tratar conceitos orientados a recursos, separando os pontos de entrada por entidades do domínio.",
    "O Nível 0 foca em chamadas de método remoto via URI única (Tunneling)."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que representa o Nível 2 (Verbos HTTP) no Modelo de Maturidade de Richardson para APIs REST?",
    "Maturidade Richardson",
    [
        "A) Usar sempre o método POST para qualquer operação de leitura ou escrita.",
        "B) Utilizar corretamente os métodos HTTP (GET para leitura, POST para criação, PUT para atualização, DELETE para remoção) e códigos de status apropriados.",
        "C) Substituir o protocolo HTTP por sockets TCP brutos.",
        "D) Encriptar payloads com chaves simétricas de 512 bits."
    ],
    "B",
    "Este nível explora a semântica dos verbos HTTP e códigos de status, tornando a API compreensível e padronizada.",
    "É o nível adotado pela imensa maioria das APIs REST comerciais do mercado."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é o comportamento esperado de um método RESTful que retorna o código de status HTTP `201 Created`?",
    "Códigos HTTP",
    [
        "A) A requisição falhou por falta de parâmetros.",
        "B) O recurso foi criado com sucesso no servidor, e normalmente a resposta inclui um cabeçalho `Location` apontando para a URI do novo recurso criado.",
        "C) O servidor encontrou um erro interno inesperado.",
        "D) O recurso foi deletado permanentemente."
    ],
    "B",
    "O código `201` é a resposta padrão para operações bem-sucedidas de criação de recursos via POST ou PUT.",
    "Ajuda a manter o contrato semântico claro com o consumidor da API."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Como o SOAP lida com a segurança em nível de mensagem em comparação com a segurança baseada em transporte do REST (como HTTPS/TLS)?",
    "Segurança SOAP",
    [
        "A) O SOAP não possui nenhum mecanismo de segurança, sendo totalmente vulnerável.",
        "B) Enquanto o REST confia majoritariamente na segurança de transporte (HTTPS), o SOAP utiliza a especificação WS-Security para assinar e criptografar partes específicas do documento XML, garantindo segurança de ponta a ponta mesmo passando por múltiplos intermediários.",
        "C) O SOAP exige o uso de senhas escritas em cartões perfurados.",
        "D) O REST criptografa apenas arquivos de imagem."
    ],
    "B",
    "A segurança de mensagem do WS-Security protege o payload mesmo que ele transite por proxies ou barramentos corporativos (ESB) intermediários que decodifiquem o HTTPS.",
    "Torna o SOAP atraente para corporações com políticas estritas de auditoria de dados."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que significa a propriedade de 'Idempotência' em métodos HTTP no REST (como PUT, DELETE e GET)?",
    "Idempotência no REST",
    [
        "A) Que o método altera dados aleatórios a cada execução.",
        "B) Que realizar várias requisições idênticas consecutivas produz exatamente o mesmo efeito colateral no servidor do que realizar apenas uma única requisição.",
        "C) Que o servidor rejeitará qualquer requisição enviada após o meio-dia.",
        "D) Que a API funciona apenas em modo offline."
    ],
    "B",
    "Métodos como `GET`, `PUT` e `DELETE` são idempotentes (fazer um DELETE duas vezes no mesmo ID resulta no mesmo estado final: recurso inexistente). O `POST` por padrão não é idempotente.",
    "Fundamental para projetar sistemas tolerantes a falhas de rede e retentativas (retries)."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a principal diferença entre os métodos HTTP `PUT` e `PATCH` em uma API REST?",
    "PUT vs PATCH",
    [
        "A) Não há diferença; ambos criam novos usuários no sistema.",
        "B) O `PUT` substitui integralmente o recurso existente pelos dados enviados (atualização completa), enquanto o `PATCH` aplica apenas modificações parciais nos campos especificados.",
        "C) O `PATCH` funciona apenas via protocolo FTP.",
        "D) O `PUT` é utilizado exclusivamente para consultas de leitura."
    ],
    "B",
    "Se você enviar um objeto com apenas 2 campos via PUT em um recurso que possui 5 campos, os outros 3 podem ser apagados ou setados como nulos. No PATCH, apenas os 2 campos enviados são modificados.",
    "Ajuda a economizar banda e evitar sobrescritas acidentais."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que são os contratos XSD (XML Schema Definition) associados a serviços SOAP?",
    "XSD no SOAP",
    [
        "A) Arquivos de folha de estilo para formatação de texto em negrito.",
        "B) Documentos que definem a estrutura formal, os tipos de dados permitidos e a validação dos elementos XML trafidados nas mensagens SOAP.",
        "C) Senhas mestras de acesso ao banco de dados Oracle.",
        "D) Bibliotecas de animação gráfica para interfaces desktop."
    ],
    "B",
    "O XSD garante estritamente que nenhum dado fora do formato esperado entre ou saia do serviço SOAP, provendo validação rígida de tipos.",
    "Garante altíssima previsibilidade em integrações corporativas complexas."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Por que as APIs REST são consideradas mais escaláveis para aplicações web de alto volume de tráfego?",
    "Escalabilidad do REST",
    [
        "A) Porque exigem servidores físicos caríssimos dedicados a cada usuário.",
        "B) Devido à restrição Stateless, uso eficiente de cache HTTP intermediário e payloads leves em JSON, permitindo distribuir requisições facilmente entre múltiplos nós de servidores.",
        "C) Porque bloqueiam o acesso de robôs indexadores de busca.",
        "D) Porque utilizam conexões de linha discada."
    ],
    "B",
    "A capacidade de armazenar respostas em cache na rede (CDNs, proxies) e a ausência de estado de sessão no servidor reduzem gargalos de processamento.",
    "É a base arquitetural da web moderna de grande escala."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que indica o código de status HTTP `401 Unauthorized` em uma resposta de API REST?",
    "Códigos HTTP",
    [
        "A) O servidor está temporariamente desligado para manutenção.",
        "B) A requisição carece de credenciais de autenticação válidas; o cliente precisa se identificar (ex: enviar um token ou fazer login) antes de acessar o recurso.",
        "C) O recurso solicitado foi permanentemente apagado.",
        "D) O formato do JSON enviado está corrompido."
    ],
    "B",
    "Diferente do 403 (Forbidden, onde o usuário é conhecido mas não tem permissão), o 401 significa que o cliente não está autenticado.",
    "Indica que falta identificação válida na requisição."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que indica o código de status HTTP `403 Forbidden` em uma resposta de API REST?",
    "Códigos HTTP",
    [
        "A) O usuário precisa digitar a senha novamente porque ela expirou.",
        "B) O servidor entendeu a requisição e a identidade do cliente, mas este não possui as permissões (autorização/roles) necessárias para acessar o recurso solicitado.",
        "C) O endereço URL digitado não existe no servidor.",
        "D) O banco de dados relacional atingiu o limite de conexões."
    ],
    "B",
    "O servidor sabe quem é o cliente (autenticado), mas o perfil dele não tem privilégios suficientes para executar aquela ação.",
    "Distinção crucial em relação ao código 401."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a função do cabeçalho HTTP `Content-Type` em uma requisição ou resposta RESTful?",
    "Cabeçalhos HTTP",
    [
        "A) Determinar a velocidade máxima da conexão de internet em megabits.",
        "B) Indicar o tipo de mídia (MIME type) do corpo da mensagem enviado ou retornado (ex: `application/json`, `application/xml`, `text/plain`), permitindo que o receptor interprete os dados corretamente.",
        "C) Criptografar o IP do cliente contra rastreamento.",
        "D) Armazenar o histórico de navegação do usuário."
    ],
    "B",
    "Sem o `Content-Type: application/json`, o servidor pode não saber como fazer o parsing do corpo da requisição enviada pelo cliente.",
    "Essencial para a negociação de conteúdo (Content Negotiation)."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a função do cabeçalho HTTP `Accept` em uma requisição enviada por um cliente REST?",
    "Negociação de Conteúdo",
    [
        "A) Aceitar os termos de uso e política de privacidade do site.",
        "B) Informar ao servidor quais tipos de mídia (formatos de dados) o cliente é capaz de processar e prefere receber na resposta (ex: `Accept: application/json`).",
        "C) Permitir conexões automáticas via Bluetooth.",
        "D) Validar a assinatura digital do certificado SSL."
    ],
    "B",
    "Permite que o servidor decida dinamicamente se responderá em JSON, XML ou outro formato com base nas preferências declaradas pelo cliente.",
    "Fundamental para arquiteturas flexíveis orientadas a múltiplos clientes (web, mobile, desktop)."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Como o SOAP realiza a comunicação subjacente caso não utilize diretamente o protocolo HTTP?",
    "Transporte SOAP",
    [
        "A) Ele só pode rodar em disquetes de 3.5 polegadas.",
        "B) Embora o HTTP seja o mais comum, o envelope SOAP é independente de transporte, podendo ser transmitido via SMTP (e-mail), TCP puro ou JMS (Java Message Service).",
        "C) Através de sinais de rádio AM/FM analógicos.",
        "D) Por meio de conexões físicas diretas via porta serial RS-232."
    ],
    "B",
    "Essa flexibilidade de transporte era muito valorizada em ambientes corporativos antigos de integração assíncrona por filas de mensagens.",
    "No entanto, na prática moderna, quase todo SOAP roda sobre HTTP/HTTPS."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que significa a sigla REST e quem a cunhou?",
    "Origem do REST",
    [
        "A) Remote Execution System Transfer, cunhado por Alan Turing em 1950.",
        "B) Representational State Transfer, cunhado por Roy Fielding em sua tese de doutorado em 2000.",
        "C) Rapid Enterprise Service Technology, cunhado pela Microsoft em 2008.",
        "D) Reliable Secure Transmission, cunhado pelo W3C em 1999."
    ],
    "B",
    "Roy Fielding definiu o conjunto de restrições arquiteturais que moldaram a forma como a web e as APIs modernas funcionam.",
    "O REST descreve o comportamento de sistemas distribuídos baseados em hipermídia."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que é um 'Envelope' na estrutura de uma mensagem SOAP?",
    "Envelope SOAP",
    [
        "A) Um envelope físico de papel despachado pelos Correios.",
        "B) O elemento raiz obrigatório de qualquer documento XML SOAP, que divide a mensagem em duas partes lógicas opcionais/obrigatórias: o Header (cabeçalho) e o Body (corpo).",
        "C) Um algoritmo de criptografia simétrica de chave única.",
        "D) Um arquivo compactado em formato ZIP."
    ],
    "B",
    "O Envelope define o início e o fim da mensagem SOAP, contendo metadados de roteamento e segurança no Header e a carga útil de negócio no Body.",
    "É a assinatura estrutural inconfundível do protocolo SOAP."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é o comportamento de um método RESTful que retorna o código de status HTTP `204 No Content`?",
    "Códigos HTTP",
    [
        "A) A requisição falhou porque o servidor está sem conexão com a internet.",
        "B) A requisição foi processada com sucesso pelo servidor, mas não há dados de corpo (payload) para retornar na resposta (comum em operações bem-sucedidas de exclusão via DELETE).",
        "C) O servidor encontrou um loop infinito de execução.",
        "D) O recurso solicitado foi duplicado incorretamente."
    ],
    "B",
    "Muito útil em endpoints de exclusão (`DELETE`) ou atualização sem retorno de dados, economizando banda de rede.",
    "Informa ao cliente que a ação ocorreu perfeitamente, embora nada precise ser exibido."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que caracteriza uma arquitetura de API orientada a recursos no REST em contraste com RPC (Remote Procedure Call)?",
    "REST vs RPC",
    [
        "A) No REST você foca em entidades/substantivos expostos por URIs (`/clientes`), enquanto no RPC você foca em invocar métodos/verbos remotos abstratos (`/deletarCliente?id=5`).",
        "B) O RPC utiliza exclusivamente JSON leve, enquanto o REST usa apenas XML pesado.",
        "C) O REST funciona apenas sem fio e o RPC via cabo.",
        "D) Não há diferença conceitual entre ambos."
    ],
    "A",
    "O RPC expõe funções ou procedimentos do backend como se fossem locais. O REST expõe o modelo de domínio da aplicação estruturado em recursos interconectados.",
    "O REST aproveita melhor a semântica e a infraestrutura nativa da web."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que significa o código de status HTTP `500 Internal Server Error` em uma API REST?",
    "Códigos HTTP",
    [
        "A) O cliente errou ao digitar a URL da API.",
        "B) O servidor encontrou uma condição inesperada que o impediu de atender à solicitação (ex: uma exceção Java não tratada, falha de conexão com o banco de dados).",
        "C) A senha do usuário foi alterada com sucesso.",
        "D) O navegador do cliente precisa ser atualizado."
    ],
    "B",
    "Indica um problema grave do lado do servidor, e não um erro de envio por parte do cliente.",
    "Exige análise de logs do backend para correção."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Como o SOAP lida com tratamento de erros em suas respostas XML?",
    "Fault SOAP",
    [
        "A) Retornando códigos de status numéricos HTTP genéricos como 404.",
        "B) Utilizando um elemento estruturado especial chamado `Fault` dentro do Body da resposta XML, contendo códigos de erro padronizados (`faultcode`, `faultstring`) para descrever o problema detalhadamente.",
        "C) Desligando o servidor imediatamente para proteger os dados.",
        "D) Convertendo o erro em um arquivo de áudio."
    ],
    "B",
    "O mecanismo de Fault do SOAP padroniza a forma como falhas e exceções são comunicadas de volta ao cliente em XML.",
    "Diferente do REST, que usa códigos de status HTTP variados, o SOAP frequentemente retorna HTTP 200 ou 500 trazendo o XML estruturado de Fault no corpo."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a relação entre microsserviços modernos e o estilo arquitetural REST?",
    "Microsserviços e REST",
    [
        "A) Microsserviços proíbem totalmente o uso de REST, exigindo apenas SOAP.",
        "B) O REST (junto com JSON) tornou-se o meio de comunicação síncrona predominante entre microsserviços devido à sua simplicidade, baixo acoplamento e independência de linguagem.",
        "C) O REST obriga todos os microsserviços a rodarem na mesma máquina física.",
        "D) O REST substitui completamente a necessidade de bancos de dados nos microsserviços."
    ],
    "B",
    "A leveza do REST facilita a comunicação HTTP leve entre diferentes serviços desenvolvidos em linguagens distintas (ex: Java falando com Python ou Node.js).",
    "É a espinha dorsal de muitas arquiteturas modernas baseadas em nuvem."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que indica o código de status HTTP `400 Bad Request` em uma resposta de API REST?",
    "Códigos HTTP",
    [
        "A) O servidor não conseguiu encontrar o recurso solicitado.",
        "B) O servidor não pôde processar a requisição devido a um erro do cliente (ex: sintaxe JSON inválida, parâmetros obrigatórios ausentes ou falha de validação de payload).",
        "C) O servidor foi invadido por hackers.",
        "D) O arquivo solicitado é grande demais."
    ],
    "B",
    "Indica que a requisição está mal formatada ou viola regras de validação de entrada, impedindo o processamento pelo backend.",
    "Um dos códigos de erro mais comuns no desenvolvimento de APIs."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que indica o código de status HTTP `404 Not Found` em uma API REST?",
    "Códigos HTTP",
    [
        "A) A operação foi concluída com sucesso absoluto.",
        "B) O servidor não encontrou nenhum recurso correspondente à URI fornecida ou o recurso foi removido.",
        "C) O usuário digitou a senha correta.",
        "D) O banco de dados relacional está sobrecarregado."
    ],
    "B",
    "Um dos códigos mais tradicionais da web, usado quando o identificador de um recurso buscado (ex: `/clientes/99999`) não existe no sistema.",
    "Ajuda a sinalizar claramente a ausência da entidade consultada."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Por que o SOAP exige o uso de ferramentas geradoras de código (stubs/proxies) enquanto o REST é consumido mais facilmente de forma nativa?",
    "Consumo de APIs",
    [
        "A) Porque o SOAP não pode ser lido por humanos, exigindo parsers complexos baseados em WSDL, enquanto o REST lida com JSON simples que qualquer linguagem consome nativamente sem contratos rígidos obrigatórios.",
        "B) Porque o REST é proibido em computadores corporativos.",
        "C) Porque o SOAP roda apenas em computadores quânticos.",
        "D) Não há diferenças na facilidade de consumo."
    ],
    "B",
    "A rigidez dos contratos WSDL e a verbosidade do XML do SOAP tornam quase inviável escrever clientes manualmente sem o auxílio de ferramentas automáticas.",
    "O REST foca na flexibilidade e no consumo ágil por clientes web e mobile."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "O que é a negociação de conteúdo (Content Negotiation) em uma API REST?",
    "Content Negotiation",
    [
        "A) Um acordo salarial entre desenvolvedores backend e frontend.",
        "B) O mecanismo pelo qual o cliente e o servidor entram em acordo sobre o formato de representação dos dados a ser trocado (ex: JSON vs XML), utilizando cabeçalhos como `Accept` e `Content-Type`.",
        "C) Um protocolo de criptografia de senhas em tempo de execução.",
        "D) Um sistema de controle de versão de código fonte."
    ],
    "B",
    "Permite que o mesmo endpoint sirva diferentes formatos de dados dependendo exclusivamente do que o cabeçalho da requisição do cliente solicitar.",
    "Aumenta a versatilidade e interoperabilidade dos serviços RESTful."
);

addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é o impacto do uso de Proxies e CDNs intermediários em arquiteturas RESTful comparado ao SOAP?",
    "Proxies e CDNs no REST",
    [
        "A) Proxies e CDNs bloqueiam totalmente o tráfego REST.",
        "B) Como o REST utiliza verbos HTTP padronizados e semântica de recursos, proxies e CDNs podem armazenar respostas em cache de forma inteligente, reduzindo a latência global; o SOAP encapsula tudo em POSTs genéricos, dificultando esse cache intermediário.",
        "C) O SOAP aproveita muito melhor CDNs do que o REST.",
        "D) Não há impacto na performance de rede."
    ],
    "B",
    "O fato de requisições `GET` no REST serem seguras e idempotentes permite que a infraestrutura da internet faça cache agressivo das respostas, otimizando drasticamente a performance.",
    "Isso torna o REST incomparavelmente superior para distribuição de conteúdo web global."
);
addQuestion(
    "REST e SOAP",
    "Média",
    "Qual é a função do cabeçalho HTTP `Location` em uma resposta RESTful associada à criação de um recurso?",
    "Cabeçalhos HTTP",
    [
        "A) Indicar a coordenada geográfica física do servidor que processou a requisição.",
        "B) Fornecer a URL exata onde o recém-criado recurso pode ser acessado e recuperado pelo cliente.",
        "C) Redirecionar o usuário obrigatoriamente para a página inicial do Google.",
        "D) Apagar o cache local do navegador."
    ],
    "B",
    "Em conjunto com o código 201 Created, o cabeçalho Location informa ao cliente o caminho exato (URI) do novo recurso gerado.",
    "Facilita a navegabilidade imediata após operações de escrita (POST)."
);

/* =====================================================
    Bloco: 11 UML (LINGUAGEM DE MODELAGEM UNIFICADA) - Bloco 01
===================================================== */

addQuestion(
    "UML", 
    "Média", 
    "Qual é o principal objetivo de um Diagrama de Classes na UML?", 
    "Diagrama de Classes", 
    [
        "A) Mostrar o fluxo temporal de mensagens trocadas entre objetos em um cenário de uso.",
        "B) Representar a estrutura estática do sistema, exibindo as classes, seus atributos, operações e os relacionamentos entre elas.",
        "C) Descrever o comportamento dinâmico de um objeto através de estados e transições.",
        "D) Mapear fisicamente os nós de hardware e a topologia de rede onde a aplicação será executada."
    ], 
    "B", 
    "O Diagrama de Classes é o pilar estrutural mais utilizado da UML, servindo para modelar o domínio do problema e a arquitetura orientada a objetos antes da implementação do código.", 
    "Ele foca na visão estática, diferindo dos diagramas comportamentais."
);

addQuestion(
    "UML", 
    "Média", 
    "No contexto de relacionamentos entre classes na UML, qual é a diferença fundamental entre Composição e Agregação?", 
    "Relacionamentos UML", 
    [
        "A) A agregação indica uma relação de 'todo-parte' onde as partes podem existir independentemente do todo; a composição é uma forma mais forte de agregação onde o ciclo de vida da parte é dependente do todo.",
        "B) A composição é utilizada exclusivamente para classes abstratas e a agregação para interfaces.",
        "C) Não há diferença prática; ambos os termos são sinônimos para herança múltipla.",
        "D) A agregação utiliza uma seta preta sólida e a composição uma seta tracejada."
    ], 
    "A", 
    "Na agregação (losango vazio), o objeto parte sobrevive se o todo for destruído (ex: um curso e seus alunos). Na composição (losango preenchido), se o todo morre, as partes morrem junto (ex: uma casa e seus cômodos ou uma nota fiscal e seus itens).", 
    "A composição representa uma relação de propriedade estrita."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a finalidade principal de um Diagrama de Casos de Uso?", 
    "Diagrama de Casos de Uso", 
    [
        "A) Detalhar a sintaxe de programação e os algoritmos internos dos métodos de uma classe.",
        "B) Mapear a infraestrutura de servidores cloud e balanceadores de carga.",
        "C) Ilustrar as funcionalidades do sistema a partir da perspectiva dos atores externos (usuários ou outros sistemas), mostrando quem interage com o quê.",
        "D) Controlar o versionamento de branches e merges no repositório Git."
    ], 
    "C", 
    "O Diagrama de Casos de Uso é uma ferramenta de análise de requisitos que descreve o comportamento do sistema sob o ponto de vista do usuário (ator), sem entrar em detalhes técnicos de implementação.", 
    "Utiliza elementos como atores (bonequinhos), elipses (casos de uso) e limites do sistema."
);

addQuestion(
    "UML", 
    "Média", 
    "Para que serve o relacionamento do tipo 'Include' (Inclusão) em um Diagrama de Casos de Uso?", 
    "Casos de Uso (Relacionamentos)", 
    [
        "A) Para indicar que um caso de uso é opcional e só executa se o usuário pagar uma taxa.",
        "B) Para indicar que o comportamento de um caso de uso base inclui obrigatoriamente a execução de outro caso de uso subtarefa (reutilização de comportamento obrigatório).",
        "C) Para herdar atributos e métodos de uma classe pai para uma classe filha.",
        "D) Para conectar o banco de dados relacional ao servidor backend."
    ], 
    "B", 
    "A relação `<<include>>` aponta que um fluxo principal sempre executa um subfluxo obrigatório (ex: o caso de uso 'Efetuar Pagamento' pode incluir obrigatoriamente o caso de uso 'Validar Token de Segurança').", 
    "Diferencia-se do `<<extend>>`, que modela comportamentos opcionais ou condicionais."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual tipo de diagrama UML é mais adequado para representar a ordem cronológica de mensagens trocadas entre objetos ou atores?", 
    "Diagrama de Sequência", 
    [
        "A) Diagrama de Implantação",
        "B) Diagrama de Sequência",
        "C) Diagrama de Classes",
        "D) Diagrama de Componentes"
    ], 
    "B", 
    "O Diagrama de Sequência pertence à categoria de diagramas de interação, organizando os objetos na horizontal e o tempo na vertical para mostrar o fluxo dinâmico das chamadas de métodos.", 
    "É amplamente utilizado por desenvolvedores para documentar fluxos complexos de APIs e microsserviços."
);

addQuestion(
    "UML", 
    "Média", 
    "O que representa a visibilidade de um atributo ou método precedido pelo sinal de menos (`-`) em um Diagrama de Classes?", 
    "Visibilidade na UML", 
    [
        "A) Público (`public`); acessível por qualquer classe externa.",
        "B) Protegido (`protected`); acessível apenas pelas subclasses.",
        "C) Privado (`private`); acessível exclusivamente dentro da própria classe.",
        "D) Pacote (`package`); acessível apenas por classes do mesmo diretório."
    ], 
    "C", 
    "Na notação UML, o sinal de mais (`+`) indica visibilidade pública, o sustenido (`#`) indica protegida, o til (`~`) indica pacote e o menos (`-`) indica privada.", 
    "Esses símbolos ajudam a aplicar o princípio do encapsulamento na modelagem."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é o objetivo de um Diagrama de Atividades na UML?", 
    "Diagrama de Atividades", 
    [
        "A) Modelar o fluxo de controle lógico de processos, algoritmos ou fluxos de trabalho (workflows), funcionando como uma evolução sofisticada dos fluxogramas tradicionais.",
        "B) Descrever exclusivamente a arquitetura física de redes de computadores.",
        "C) Armazenar os logs de transações financeiras de um banco de dados.",
        "D) Representar a estrutura hierárquica de pastas de um projeto de software."
    ], 
    "A", 
    "O Diagrama de Atividades utiliza nós de ação, decisões (losangos) e barras de sincronização (fork/join) para modelar processos paralelos ou sequenciais, tanto de negócio quanto de software.", 
    "Excelente para modelar regras de negócio complexas com múltiplos desvios condicionais."
);

addQuestion(
    "UML", 
    "Média", 
    "O que modela um Diagrama de Estados (State Machine Diagram)?", 
    "Diagrama de Estados", 
    [
        "A) O estado financeiro e o balanço patrimonial da empresa desenvolvedora.",
        "B) O ciclo de vida de um objeto específico, mostrando os estados pelos quais ele passa, os eventos que disparam a mudança de estado e as ações associadas.",
        "C) A quantidade de servidores ativos em um cluster de computação em nuvem.",
        "D) As relações estáticas de herança entre várias classes do sistema."
    ], 
    "B", 
    "O Diagrama de Estados é ideal para objetos que mudam de comportamento drasticamente dependendo do momento (ex: um pedido que passa por: `Pendente` -> `Aprovado` -> `Enviado` -> `Entregue`).", 
    "Conecta-se intimamente com padrões de projeto como o State Pattern."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a finalidade de um Diagrama de Implantação (Deployment Diagram)?", 
    "Diagrama de Implantação", 
    [
        "A) Mostrar a arquitetura física dos artefatos de software executados em nós de hardware (como servidores, dispositivos móveis e ambientes de nuvem).",
        "B) Detalhar o código fonte linha por linha em arquivos de extensão .java ou .cs.",
        "C) Descrever o passo a passo de uma tela de login para o usuário final.",
        "D) Listar os requisitos de negócio exigidos pelo Product Owner."
    ], 
    "A", 
    "O Diagrama de Implantação situa os componentes de software em suas respectivas infraestruturas físicas de hardware, mapeando conexões de rede e nós operacionais.", 
    "Pertence à categoria de diagramas estruturais voltados para a visão de infraestrutura."
);

addQuestion(
    "UML", 
    "Média", 
    "No contexto da UML, o que significa uma classe descrita em itálico ou com o modificador `<<abstract>>`?", 
    "Classes Abstratas na UML", 
    [
        "A) Uma classe que possui erros de sintaxe e não pode ser compilada.",
        "B) Uma classe abstrata, que serve como modelo base e não pode ser instanciada diretamente, exigindo que suas subclasses implementem seus métodos abstratos.",
        "C) Uma classe legada que foi descontinuada pelo desenvolvedor.",
        "D) Uma interface gráfica de usuário renderizada em formato web."
    ], 
    "B", 
    "Classes abstratas definem contratos genéricos e comportamentos parciais. Na UML, seus nomes aparecem em itálico ou acompanhados do estereótipo `<<abstract>>`.", 
    "Diferem das interfaces puras, embora ambas compartilhem a restrição de não permitirem instanciação direta com `new`."
);

addQuestion(
    "UML", 
    "Média", 
    "O que representa o relacionamento do tipo 'Extend' (Extensão) em um Diagrama de Casos de Uso?", 
    "Casos de Uso (Relacionamentos)", 
    [
        "A) Uma extensão de garantia contratual fornecida pelo fabricante do software.",
        "B) Um comportamento opcional ou condicional que é inserido em um caso de uso base sob determinadas circunstâncias.",
        "C) A herança direta de atributos entre tabelas de banco de dados relacionais.",
        "D) O encadeamento síncrono obrigatório de chamadas de métodos em uma API."
    ], 
    "B", 
    "A relação `<<extend>>` indica que um caso de uso secundário pode (ou não) estender o comportamento de um caso de uso base se uma condição específica for atendida (ex: 'Fazer Login' pode ser estendido por 'Enviar Código 2FA').", 
    "A seta aponta do caso de uso de extensão para o caso de uso base."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a principal função de um Diagrama de Componentes na UML?", 
    "Diagrama de Componentes", 
    [
        "A) Mostrar a organização e as dependências entre os módulos de software, bibliotecas, executáveis e arquivos que compõem o sistema.",
        "B) Listar os componentes de hardware de uma placa-mãe de computador.",
        "C) Detalhar os componentes visuais de interface do usuário (botões, inputs e formulários HTML).",
        "D) Gerenciar a dependência de pacotes externos via gerenciadores como npm ou pip."
    ], 
    "A", 
    "O Diagrama de Componentes foca na arquitetura de alto nível baseada em blocos de software reutilizáveis e nas interfaces que eles expõem ou requerem.", 
    "Ajuda a visualizar a modularidade do sistema e o desacoplamento de partes."
);

addQuestion(
    "UML", 
    "Média", 
    "Como a herança (ou generalização) é representada graficamente em um Diagrama de Classes UML?", 
    "Relacionamentos UML", 
    [
        "A) Por uma linha tracejada com uma seta preta preenchida.",
        "B) Por uma linha contínua com uma ponta de seta fechada em forma de triângulo vazio apontando para a superclasse.",
        "C) Por um losango preenchido na ponta da classe filha.",
        "D) Por uma linha dupla com duas setas em sentidos apostos."
    ], 
    "B", 
    "A generalização estabelece que a subclasse herda características da superclasse. Na UML, a seta triangular vazia aponta sempre da classe especializada (filha) para a generalizada (pai).", 
    "Representa a famosa relação 'é um' (is-a)."
);

addQuestion(
    "UML", 
    "Média", 
    "O que indica a multiplicidade (como `1..*` ou `0..1`) colocada nas extremidades de uma associação em um Diagrama de Classes?", 
    "Multiplicidade na UML", 
    [
        "A) A quantidade de instâncias de uma classe que podem se relacionar com instâncias de outra classe.",
        "B) O número de linhas de código que cada método possui.",
        "C) A prioridade de execução das tarefas em um ambiente multithread.",
        "D) O consumo de memória RAM estimado para carregar o objeto."
    ], 
    "A", 
    "A multiplicidade define a cardinalidade do relacionamento. Por exemplo, `1` significa obrigatoriamente um, enquanto `0..*` significa de zero a muitos.", 
    "É fundamental para o mapeamento correto de cardinalidades em bancos de dados relacionais (1 para 1, 1 para N, N para N)."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é o propósito de um Diagrama de Comunicação (anteriormente chamado de Diagrama de Colaboração) na UML?", 
    "Diagrama de Comunicação", 
    [
        "A) Descrever o envio de e-mails de notificação automática aos usuários do sistema.",
        "B) Enfatizar a organização estrutural dos objetos que enviam e recebem mensagens, utilizando numeração sequencial para indicar a ordem das interações.",
        "C) Estabelecer protocolos de comunicação de rede TCP/IP.",
        "D) Controlar os chats e fóruns de suporte técnico de uma aplicação web."
    ], 
    "B", 
    "Enquanto o Diagrama de Sequência foca no eixo temporal, o Diagrama de Comunicação foca na disposição espacial dos objetos e nas ligações físicas/lógicas entre eles para trocar mensagens.", 
    "Ambos fazem parte da categoria de diagramas de interação da UML."
);

addQuestion(
    "UML", 
    "Média", 
    "O que representa o sinal de mais (`+`) antes de um atributo ou operação em um Diagrama de Classes?", 
    "Visibilidade na UML", 
    [
        "A) Visibilidade pública (`public`), permitindo acesso livre por qualquer outra classe.",
        "B) Operação matemática de adição ou incremento.",
        "C) Atributo obrigatório que não pode ser nulo.",
        "D) Indicador de que a classe possui múltiplos herdeiros."
    ], 
    "A", 
    "O modificador de acesso público (`+`) garante visibilidade irrestrita ao membro da classe a partir de qualquer ponto do projeto.", 
    "Faz parte do conjunto padrão de visibilidade junto com `-` (privado), `#` (protegido) e `~` (pacote)."
);

addQuestion(
    "UML", 
    "Média", 
    "O que caracteriza uma Interface na UML, geralmente representada pelo estereótipo `<<interface>>` ou por um círculo?", 
    "Interfaces na UML", 
    [
        "A) Uma classe completa com código funcional pronto para ser executado.",
        "B) Um conjunto de operações públicas que especifica um serviço de uma classe ou componente, sem conter implementações próprias de código.",
        "C) Uma tela gráfica de interface com o usuário construída em React ou Angular.",
        "D) Um driver de conexão proprietário para banco de dados relacional."
    ], 
    "B", 
    "Interfaces definem contratos que as classes devem cumprir ao implementá-las, contendo apenas assinaturas de métodos e constantes.", 
    "Promovem o princípio do acoplamento frouxo e da inversão de dependência."
);

addQuestion(
    "UML", 
    "Média", 
    "Para que serve um Diagrama de Visão Geral de Interação (Interaction Overview Diagram)?", 
    "Visão Geral de Interação", 
    [
        "A) Unir elementos de diagramas de atividades e diagramas de sequência para modelar o fluxo de controle de interações de forma macro.",
        "B) Substituir completamente o manual do usuário de um software comercial.",
        "C) Gerenciar o fluxo de caixa financeiro de projetos de TI.",
        "D) Exibir unicamente a tabela de rotas de uma API REST."
    ], 
    "A", 
    "Ele combina a estrutura de controle de um diagrama de atividades com nós que contêm fragmentos de diagramas de interação.", 
    "É um dos diagramas comportamentais mais avançados e menos comuns da UML."
);

addQuestion(
    "UML", 
    "Média", 
    "O que significa o conceito de Polimorfismo no contexto da orientação a objetos modelada em UML?", 
    "Conceitos de OO / UML", 
    [
        "A) A capacidade de um objeto assumir múltiplas formas de hardware.",
        "B) A habilidade de diferentes classes responderem à mesma mensagem (mesmo método) de maneiras específicas para cada uma delas.",
        "C) A duplicação acidental de código em múltiplos arquivos do projeto.",
        "D) A conversão automática de tipos de dados primitivos em strings."
    ], 
    "B", 
    "O polimorfismo permite que subclasses reescrevam (sobreponham) métodos herdados da superclasse, garantindo flexibilidade e extensibilidade ao sistema.", 
    "É um dos pilares fundamentais da programação orientada a objetos junto com encapsulamento e herança."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual elemento da UML é utilizado para agrupar elementos correlacionados do modelo em blocos lógicos de gerenciamento, como pacotes de código?", 
    "Diagrama de Pacotes", 
    [
        "A) Caixa de areia (Sandbox)",
        "B) Pacote (Package), representado graficamente pelo ícone de uma pasta de arquivos",
        "C) Contêiner Docker",
        "D) Módulo estrito de compilação"
    ], 
    "B", 
    "Os pacotes ajudam a organizar modelos complexos em namespaces gerenciáveis, reduzindo a complexidade visual e estrutural do projeto.", 
    "Podem ser aplicados em qualquer tipo de diagrama UML para organizar elementos."
);

addQuestion(
    "UML", 
    "Média", 
    "O que indica o símbolo de `#` (sustenido) antes de um membro de classe em um Diagrama de Classes UML?", 
    "Visibilidade na UML", 
    [
        "A) Visibilidade protegida (`protected`); o membro é acessível na própria classe e em suas subclasses.",
        "B) Um número sequencial para identificação de hash no banco de dados.",
        "C) Que o método é estático (`static`) e compartilhado.",
        "D) Que a propriedade é obsoleta."
    ], 
    "A", 
    "O modificador `#` protege o atributo ou método contra acessos externos gerais, mas permite visibilidade para herdeiros diretos.", 
    "Complementa o conjunto de visibilidades junto com `+`, `-` e `~`."
);

addQuestion(
    "UML", 
    "Média", 
    "No Diagrama de Sequência, o que representa a linha tracejada vertical que desce a partir de um objeto ou ator?", 
    "Diagrama de Sequência", 
    [
        "A) Linha de Vida (Lifeline), indicando a existência do objeto ao longo do eixo temporal.",
        "B) Conexão de rede sem fio (Wi-Fi) com o servidor.",
        "C) Um erro de execução em tempo de compilação.",
        "D) O canal de log de depuração."
    ], 
    "A", 
    "A linha de vida mostra o período de tempo em que o objeto permanece ativo e participando das interações descritas no diagrama.", 
    "A caixa retangular no topo representa a instância do objeto."
);

addQuestion(
    "UML", 
    "Média", 
    "O que significam os blocos condicionais como `alt`, `loop` e `opt` em um Diagrama de Sequência UML?", 
    "Diagrama de Sequência", 
    [
        "A) Atalhos de teclado para edição do diagrama.",
        "B) Fragmentos combinados (Combined Fragments) que permitem modelar lógica de controle avançada (alternativas condicionais, repetições e opções).",
        "C) Funções matemáticas avançadas de otimização de código.",
        "D) Métodos deprecados de bibliotecas antigas."
    ], 
    "B", 
    "Os fragmentos combinados evitam a necessidade de criar diagramas separados para cada fluxo lógico alternativo, agrupando blocos de mensagens sob regras lógicas.", 
    "São essenciais para representar fluxos lógicos complexos baseados em desvios."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a principal função de um Diagrama de Tempo (Timing Diagram) na UML?", 
    "Diagrama de Tempo", 
    [
        "A) Medir o tempo de resposta de requisições HTTP em servidores web.",
        "B) Focar nas mudanças de estado de um objeto ao longo do tempo e nas restrições temporais entre eventos.",
        "C) Cronometrar o tempo de desenvolvimento de uma sprint ágil.",
        "D) Gerenciar fuso horário em aplicações distribuídas globais."
    ], 
    "B", 
    "O Diagrama de Tempo é uma forma especializada de diagrama de interação que prioriza o eixo temporal linear para sistemas de tempo real ou embarcados.", 
    "Muito utilizado em sistemas ciber-físicos e automação industrial."
);

addQuestion(
    "UML", 
    "Média", 
    "O que representa o símbolo de `~` (til) antes de um atributo ou método em um Diagrama de Classes?", 
    "Visibilidade na UML", 
    [
        "A) Visibilidade de pacote (`package` ou default); acessível apenas por classes pertencentes ao mesmo pacote.",
        "B) Operação de negação lógica (NOT).",
        "C) Dado corrompido ou temporário.",
        "D) Atributo criptografado."
    ], 
    "A", 
    "A visibilidade de pacote restringe o acesso aos limites lógicos do namespace (pasta/pacote) onde a classe está declarada.", 
    "Corresponde ao modificador padrão em linguagens como Java quando nenhum outro modificador é explícito."
);

addQuestion(
    "UML", 
    "Média", 
    "O que é uma Classe Associativa em um Diagrama de Classes UML?", 
    "Relacionamentos UML", 
    [
        "A) Uma classe que armazena informações extras referentes unicamente a um relacionamento de associação N para N entre outras duas classes.",
        "B) Uma classe que une dois bancos de dados distintos.",
        "C) Um erro de modelagem que deve ser evitado a todo custo.",
        "D) Uma classe filha que herda de múltiplas superclasses simultaneamente."
    ], 
    "A", 
    "Quando um relacionamento N para N precisa carregar atributos próprios (ex: a associação entre `Aluno` e `Curso` precisa do atributo `Nota`), utiliza-se uma classe associativa conectada por uma linha tracejada.", 
    "Resolve a necessidade de armazenar dados que pertencem à relação e não às entidades isoladas."
);

addQuestion(
    "UML", 
    "Média", 
    "Em um Diagrama de Atividades, qual elemento representa um ponto de decisão ou ramificação condicional?", 
    "Diagrama de Atividades", 
    [
        "A) Um círculo preenchido em preto",
        "B) Um losango (Diamond) com múltiplos caminhos de saída rotulados por guardas condicionais",
        "C) Uma barra retangular preta espessa",
        "D) Um retângulo com bordas arredondadas"
    ], 
    "B", 
    "O losango funciona como um desvio onde o fluxo de execução segue apenas pelo caminho cuja condição (guarda) seja verdadeira.", 
    "Equivale conceitualmente ao comando `if/else` ou `switch` da programação."
);

addQuestion(
    "UML", 
    "Média", 
    "O que representam as barras de sincronização (Fork e Join) em um Diagrama de Atividades?", 
    "Diagrama de Atividades", 
    [
        "A) O início e o fim absoluto do sistema operacional.",
        "B) Barras pretas grossas utilizadas para dividir um fluxo único em múltiplos fluxos concorrentes (Fork) ou unir múltiplos fluxos concorrentes em um só (Join).",
        "C) Conexões de rede física via cabo de fibra óptica.",
        "D) O ponto de salvamento automático de arquivos."
    ], 
    "B", 
    "Elas permitem modelar processamento paralelo e multithreading, garantindo que tarefas paralelas sejam iniciadas juntas ou aguardem a conclusão umas das outras.", 
    "Essenciais para fluxos de trabalho que ocorrem simultaneamente."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é o objetivo de um Diagrama de Estrutura Composicionais (Composite Structure Diagram)?", 
    "Estrutura Composicional", 
    [
        "A) Mostrar a estrutura interna de um classificador (como uma classe, componente ou nó), incluindo suas partes, portas e conectores.",
        "B) Compor músicas de fundo para o software.",
        "C) Organizar arquivos compactados em formato ZIP ou RAR.",
        "D) Estruturar tabelas de layout CSS em páginas web."
    ], 
    "A", 
    "Ele detalha o interior de classes complexas que possuem arquiteturas internas de colaboração de instâncias acopladas.", 
    "Aprofunda a visão estrutural além dos atributos e operações tradicionais."
);

addQuestion(
    "UML", 
    "Média", 
    "O que significa o conceito de Dependência (representado por uma seta tracejada) em diagramas UML?", 
    "Relacionamentos UML", 
    [
        "A) Que a classe cliente sofre de acoplamento permanente de herança múltipla.",
        "B) Que uma mudança na especificação de um elemento (fornecedor) pode afetar o outro elemento que o utiliza (cliente), sem que haja uma associação estrutural permanente.",
        "C) Que o código possui erros de compilação pendentes.",
        "D) Que os arquivos dependem de conexão com a internet."
    ], 
    "B", 
    "A dependência é um relacionamento de uso mais fraco que a associação (ex: uma classe usa outra como parâmetro de método ou tipo de retorno local).", 
    "Representada graficamente por uma linha tracejada com seta aberta."
);

addQuestion(
    "UML", 
    "Média", 
    "O que é um 'Ator' (Actor) em um Diagrama de Casos de Uso?", 
    "Diagrama de Casos de Uso", 
    [
        "A) Um ator de cinema contratado para fazer o marketing do software.",
        "B) Um papel desempenhado por um usuário externo, hardware ou outro sistema que interage diretamente com o sistema em desenvolvimento.",
        "C) Uma função interna privada executada pelo banco de dados.",
        "D) O desenvolvedor sênior responsável pela codificação."
    ], 
    "B", 
    "Atores representam entidades externas que iniciam ou recebem interações do sistema, sendo tipicamente representados por um boneco palito.", 
    "Não fazem parte do sistema em si, mas delimitam o escopo de uso."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a finalidade do Limite do Sistema (System Boundary) em um Diagrama de Casos de Uso?", 
    "Diagrama de Casos de Uso", 
    [
        "A) Delimitar visualmente o escopo do sistema que está sendo construído, separando o que está dentro do sistema (casos de uso) do que está fora (atores).",
        "B) Limitar a quantidade máxima de usuários logados simultaneamente.",
        "C) Proteger o sistema contra ataques cibernéticos de firewall.",
        "D) Definir o orçamento financeiro do projeto."
    ], 
    "A", 
    "O retângulo delimitador define claramente os limites funcionais do software em questão, facilitando a gestão de requisitos e escopo.", 
    "Ajuda a evitar a expansão descontrolada de escopo (scope creep)."
);

addQuestion(
    "UML", 
    "Média", 
    "No contexto de diagramas UML, o que representa a Orientação a Objetos no tocante ao Encapsulamento?", 
    "Conceitos de OO / UML", 
    [
        "A) A ocultação dos detalhes internos de funcionamento de um objeto, expondo apenas uma interface pública controlada.",
        "B) A compactação de arquivos binários para economia de disco.",
        "C) O armazenamento de dados em nuvem criptografada.",
        "D) A proteção de copyright da marca do software."
    ], 
    "A", 
    "O encapsulamento protege o estado interno do objeto contra modificações externas indevidas, permitindo alteração interna sem quebrar o código cliente.", 
    "É diretamente mapeado na UML através dos modificadores de visibilidade (+, -, #, ~)."
);

addQuestion(
    "UML", 
    "Média", 
    "O que representa uma Operação Abstrata (ou método abstrato) em uma classe UML?", 
    "Classes Abstratas na UML", 
    [
        "A) Um método que possui código completo altamente otimizado.",
        "B) Um método que possui apenas a assinatura definida na superclasse, exigindo obrigatoriamente que as subclasses concretas forneçam a implementação.",
        "C) Um método que foi deletado do sistema.",
        "D) Um método executado automaticamente em segundo plano."
    ], 
    "B", 
    "Métodos abstratos definem contratos obrigatórios que garantem que todas as subclasses compartilhem o mesmo comportamento polimórfico adaptado.", 
    "Aparecem em itálico nos diagramas de classes."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a utilidade do Diagrama de Perfil (Profile Diagram) na UML?", 
    "Diagrama de Perfil", 
    [
        "A) Criar perfis de acesso e senhas para os administradores do sistema.",
        "B) Permitir a personalização e extensão de modelos UML através de estereótipos, tags e restrições para domínios específicos.",
        "C) Analisar o perfil de consumo de memória RAM do servidor.",
        "D) Criar redes sociais corporativas."
    ], 
    "B", 
    "Os perfis estendem a metamodelação padrão da UML para atender a nichos específicos (como modelagem de banco de dados ou sistemas embarcados).", 
    "Permite criar metadados customizados."
);

addQuestion(
    "UML", 
    "Média", 
    "O que caracteriza a Multiplicidade '0..*' em uma associação UML?", 
    "Multiplicidade na UML", 
    [
        "A) Exatamente zero ou uma ocorrência.",
        "B) Zero ou mais ocorrências (nenhuma ou quantas forem necessárias).",
        "C) Obrigatoriamente muitas ocorrências, com mínimo de uma.",
        "D) Intervalo fechado exclusivo de dez itens."
    ], 
    "B", 
    "Indica opcionalidade total de instâncias na outra ponta da associação, permitindo coleções vazias ou com múltiplos elementos.", 
    "Corresponde a listas ou arrays que podem estar vazios no código."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a principal diferença entre um Diagrama de Estados e um Diagrama de Atividades?", 
    "Diagramas Comportamentais", 
    [
        "A) O Diagrama de Estados foca nos estados de um único objeto e nos eventos que mudam esses estados; o Diagrama de Atividades foca no fluxo de controle procedimental de processos ou algoritmos.",
        "B) O Diagrama de Estados é feito em formato 3D e o de atividades em 2D.",
        "C) Não há diferença; são sinônimos perfeitos na especificação UML.",
        "D) O Diagrama de Estados é voltado apenas para hardware e o de atividades para software."
    ], 
    "A", 
    "Enquanto o diagrama de estados descreve o ciclo de vida reativo de uma entidade baseada em eventos, o diagrama de atividades modela uma sequência linear ou paralela de passos executados.", 
    "Ambos descrevem comportamento dinâmico, mas sob perspectivas distintas."
);

addQuestion(
    "UML", 
    "Média", 
    "O que é uma Classe Concreta na UML em oposição a uma Classe Abstrata?", 
    "Classes na UML", 
    [
        "A) Uma classe construída de concreto armado para infraestrutura física.",
        "B) Uma classe que pode ser instanciada diretamente (criar objetos com `new`), pois possui implementações para todas as suas operações.",
        "C) Uma classe que não possui atributos, apenas comentários.",
        "D) Uma classe legada que não pode mais ser modificada."
    ], 
    "B", 
    "Classes concretas implementam todos os contratos herdados e estão prontas para gerar instâncias em tempo de execução.", 
    "Seus nomes aparecem com fonte normal (não em itálico)."
);

addQuestion(
    "UML", 
    "Média", 
    "No contexto de modelagem de dados, como uma chave estrangeira (Foreign Key) costuma ser representada em um Diagrama de Classes UML?", 
    "Diagrama de Classes", 
    [
        "A) Através de linhas de associação diretas entre as classes com multiplicidades corretas, em vez de expor apenas o ID bruto como atributo isolado.",
        "B) Através de linhas vermelhas tracejadas com marca d'água.",
        "C) Não pode ser representada de nenhuma forma na UML.",
        "D) Apenas utilizando comentários textuais."
    ], 
    "A", 
    "A UML prioriza relacionamentos orientados a objetos (Associações) em vez de depender estritamente de chaves estrangeiras primitivas, embora atributos de ID possam coexistir.", 
    "Facilita a transição do modelo conceitual para o objeto-relacional."
);

addQuestion(
    "UML", 
    "Média", 
    "Qual é a principal vantagem de utilizar a UML (Linguagem de Modelagem Unificada) em projetos de software corporativos?", 
    "Fundamentos da UML", 
    [
        "A) Garantir que o sistema seja compilado automaticamente sem bugs.",
        "B) Fornecer uma notação padronizada, rica e visual para especificar, construir e documentar os artefatos de um sistema de software, facilitando a comunicação da equipe.",
        "C) Substituir totalmente a necessidade de escrever código de programação.",
        "D) Reduzir o custo de aquisição de licenças de servidores em nuvem."
    ], 
    "B", 
    "A UML atua como uma 'planta baixa' padronizada da engenharia de software, permitindo alinhar arquitetos, desenvolvedores, testadores e analistas de negócios.", 
    "Padronizada pela OMG (Object Management Group)."
);


/* =====================================================
   Bloco 12: ARQUITETURA DE SOFTWARE - 40 QUESTÕES
===================================================== */

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Qual é o principal objetivo da Arquitetura Limpa (Clean Architecture), proposta por Robert C. Martin (Uncle Bob)?", 
    "Clean Architecture", 
    [
        "A) Garantir que o banco de dados relacional seja o núcleo central e inalterável de toda a regra de negócio da aplicação.",
        "B) Separar as preocupações do software em camadas concêntricas, onde as dependências apontam sempre de fora para dentro (as regras de negócio centrais não conhecem detalhes de framework, UI ou banco de dados).",
        "C) Automatizar a criação de arquivos CSS e scripts de estilização para o front-end.",
        "D) Substituir a orientação a objetos tradicional por programação puramente funcional em servidores web."
    ], 
    "B", 
    "A Clean Architecture isola o domínio (regras de negócio) de agentes externos como frameworks, banco de dados ou interfaces de usuário, garantindo alta testabilidade e independência tecnológica.", 
    "A Regra de Dependência é o pilar fundamental: código de círculos externos pode conhecer círculos internos, mas nunca o inverso."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "No contexto da Arquitetura Hexagonal (também conhecida como Ports and Adapters), qual é a função das Portas (Ports) e dos Adaptadores (Adapters)?", 
    "Arquitetura Hexagonal", 
    [
        "A) As portas são gabinetes de servidores físicos e os adaptadores são cabos de rede de fibra ótica.",
        "B) As portas definem interfaces abstratas de entrada e saída para a aplicação, enquanto os adaptadores implementam essas portas para conectar o núcleo de negócio a tecnologias externas específicas (como REST APIs, bancos SQL ou filas).",
        "C) As portas controlam o roteamento de telas no front-end e os adaptadores gerenciam folhas de estilo.",
        "D) As portas substituem completamente a necessidade de testes unitários automatizados."
    ], 
    "B", 
    "A Arquitetura Hexagonal isola o núcleo da aplicação (Domain) permitindo que ele seja acionado ou acione o mundo exterior através de Portas (contratos) e Adaptadores (implementações concretas de I/O).", 
    "Isso facilita a troca de um banco de dados ou framework sem alterar uma única linha da regra de negócio."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Quais são as características fundamentais que definem o estilo de Arquitetura de Microsserviços em comparação com uma aplicação Monolítica?", 
    "Microsserviços vs Monolito", 
    [
        "A) Microsserviços rodam obrigatoriamente na mesma máquina física e compartilham a mesma base de dados centralizada.",
        "B) Uma aplicação é estruturada como um conjunto de pequenos serviços independentes, cada um executando em seu próprio processo, comunicando-se via mecanismos leves (geralmente HTTP/REST ou gRPC) e podendo ser implantados de forma autônoma.",
        "C) Microsserviços eliminam a necessidade de testes automatizados e integração contínua.",
        "D) Monolitos são sempre modernos e escaláveis, enquanto microsserviços são usados apenas em sistemas legados."
    ], 
    "B", 
    "Microsserviços promovem o desacoplamento organizacional e técnico, permitindo que diferentes equipes desenvolvam, escalem e façam deploy de serviços de forma independente.", 
    "Em contrapartida, introduzem complexidade distribuída em áreas como consistência de dados, latência de rede e observabilidade."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão arquitetural MVC (Model-View-Controller)?", 
    "Padrão MVC", 
    [
        "A) A união de todas as regras de banco de dados, layout visual e lógica de controle em um único arquivo de código executável.",
        "B) A separação de responsabilidades em três componentes: o Model (dados e lógica de negócio), a View (interface de apresentação visual) e o Controller (intermediário que gerencia as entradas do usuário e atualiza o Model/View).",
        "C) Um padrão exclusivo para bancos de dados NoSQL distribuídos.",
        "D) Uma técnica de criptografia de ponta para requisições HTTP."
    ], 
    "B", 
    "O MVC é um dos padrões mais clássicos da engenharia de software, promovendo a separação entre a representação visual dos dados, a interface de controle e a lógica estrutural.", 
    "Serve de base conceitual para diversos frameworks web modernos (como Spring MVC, ASP.NET Core MVC, Laravel, entre outros)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que propõe o padrão arquitetural CQRS (Command Query Responsibility Segregation)?", 
    "CQRS", 
    [
        "A) Utilizar a mesma tabela e o mesmo modelo de objetos tanto para operações pesadas de escrita quanto para consultas simples de leitura.",
        "B) Separar rigorosamente os modelos e operações de leitura (Queries) dos modelos e operações de escrita/atualização (Commands), permitindo otimizar cada lado de forma independente.",
        "C) Sincronizar dados exclusivamente via arquivos de texto plano em lotes diários.",
        "D) Substituir servidores web tradicionais por funções serverless."
    ], 
    "B", 
    "Em sistemas de alta escala, as necessidades de leitura diferem drasticamente das de escrita. O CQRS permite escalar e otimizar bancos de dados de leitura separadamente das bases transacionais de escrita.", 
    "Muitas vezes é combinado com o padrão Event Sourcing para rastrear o estado do sistema através de eventos."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "No contexto de Arquitetura Orientada a Microsserviços, qual é o objetivo do padrão 'API Gateway'?", 
    "API Gateway", 
    [
        "A) Substituir os bancos de dados relacionais por tabelas em cache.",
        "B) Atuar como um ponto único de entrada (proxy reverso) para todas as requisições dos clientes, lidando com roteamento, autenticação, controle de taxa (rate limiting), SSL termination e agregação de respostas.",
        "C) Executar testes de carga automatizados direto no servidor de produção.",
        "D) Gerenciar o versionamento de código no repositório GitHub."
    ], 
    "B", 
    "O API Gateway oculta a topologia interna dos microsserviços dos clientes externos, fornecendo uma fachada unificada que simplifica o consumo e centraliza políticas transversais de segurança.", 
    "Evita que clientes móveis precisem fazer dezenas de requisições diretas a microsserviços internos diferentes."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza uma Arquitetura Orientada a Eventos (Event-Driven Architecture - EDA)?", 
    "Event-Driven Architecture", 
    [
        "A) Os serviços comunicam-se estritamente de forma síncrona através de chamadas HTTP bloqueantes encadeadas.",
        "B) A produção, detecção e consumo de eventos ocorrem de forma assíncrona entre componentes desacoplados, permitindo reatividade imediata e alta escalabilidade por meio de brokers de mensagens (como Kafka ou RabbitMQ).",
        "C) O sistema aguarda o encerramento manual do operador para processar qualquer dado.",
        "D) As regras de negócio ficam centralizadas em um único banco de dados monolítico."
    ], 
    "B", 
    "Na EDA, um componente publica um fato ocorrido (evento) sem se preocupar com quem vai consumi-lo, promovendo um desacoplamento temporal e espacial extremo entre os serviços.", 
    "É ideal para arquiteturas reativas e sistemas que lidam com grandes volumes de dados em tempo real."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que avalia a métrica de 'Acoplamento' (Coupling) na arquitetura de software?", 
    "Acoplamento e Coesão", 
    [
        "A) O grau de interconexão entre diferentes módulos ou classes de um sistema; quanto menor o acoplamento, mais independentes e fáceis de modificar os módulos são.",
        "B) A quantidade de linhas de código que cada desenvolvedor escreve por dia.",
        "C) O espaço em disco ocupado pelos arquivos binários da aplicação compilada.",
        "D) A velocidade de execução dos testes unitários em milissegundos."
    ], 
    "A", 
    "Um baixo acoplamento é altamente desejável, pois alterações em um módulo não quebram os demais.", 
    "Deve sempre caminhar junto com a alta coesão (módulos que fazem uma única coisa bem feita)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Qual é a principal proposta da Arquitetura Orientada a Serviços (SOA - Service-Oriented Architecture)?", 
    "SOA", 
    [
        "A) Desenvolver aplicações monolíticas gigantescas sem divisão de componentes.",
        "B) Estruturar o software em serviços interoperáveis e reutilizáveis que se comunicam através de um barramento central de integração (ESB - Enterprise Service Bus) e protocolos padronizados.",
        "C) Executar códigos exclusivamente no navegador web do cliente.",
        "D) Eliminar o uso de bancos de dados relacionais em corporações."
    ], 
    "B", 
    "A SOA precursora dos microsserviços focava fortemente na integração empresarial e reutilização de serviços corporativos, frequentemente utilizando SOAP, XML e o ESB.", 
    "Enquanto a SOA foca em compartilhamento e integração corporativa, os microsserviços focam em autonomia e descentralização."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que define a Arquitetura em Camadas (Layered Architecture ou N-Tier)?", 
    "Arquitetura em Camadas", 
    [
        "A) Organizar o software em bandas horizontais superpostas (ex: Apresentação, Negócio/Domínio, Persistência/Dados), onde cada camada presta serviços para a camada imediatamente superior.",
        "B) Dividir o sistema em pequenos processos independentes distribuídos em servidores cloud.",
        "C) Executar o código de forma estritamente funcional sem estados internos.",
        "D) Agrupar classes por funcionalidades de negócio verticais independentes."
    ], 
    "A", 
    "A arquitetura em camadas tradicional organiza o sistema de forma técnica e horizontal. É amplamente compreendida, embora exija cuidado para evitar o vazamento de regras de negócio entre as camadas.", 
    "É o ponto de partida arquitetural mais comum para sistemas corporativos tradicionais."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão arquitetural Publisher-Subscriber (Pub/Sub)?", 
    "Padrão Pub/Sub", 
    [
        "A) Os emissores de mensagens enviam dados diretamente para um único cliente de forma síncrona e bloqueante.",
        "B) Os emissores (publishers) enviam mensagens a um canal ou tópico sem conhecer os destinatários (subscribers), e a infraestrutura de mensageria encaminha as cópias aos interessados.",
        "C) Um banco de dados relacional centralizado onde todos os clientes realizam leitura e escrita síncrona.",
        "D) Uma técnica de renderização de páginas HTML no lado do cliente."
    ], 
    "B", 
    "O padrão Pub/Sub desacopla severamente quem produz a informação de quem a consome, permitindo múltiplos assinantes dinâmicos sem alterar o publicador.", 
    "É altamente empregado em sistemas de streaming de dados e mensageria distribuída."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que significa a sigla SOLID no contexto de design de software orientado a objetos?", 
    "Princípios SOLID", 
    [
        "A) Cinco princípios fundamentais de design (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) que facilitam a manutenção e testabilidade.",
        "B) Cinco regras obrigatórias de estruturação de tabelas em bancos de dados relacionais.",
        "C) Cinco padrões para criptografia de senhas em sistemas web.",
        "D) Uma metodologia ágil focada exclusivamente em reuniões diárias de equipe."
    ], 
    "A", 
    "Os princípios SOLID ajudam arquitetos e desenvolvedores a escreverem código altamente modular, flexível, de baixo acoplamento e fácil de estender.", 
    "São a base essencial para arquiteturas limpas e sustentáveis a longo prazo."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que estabelece o Princípio da Responsabilidade Única (Single Responsibility Principle - SRP)?", 
    "Princípios SOLID", 
    [
        "A) Uma classe deve ter apenas um, e apenas um, motivo para mudar, significando que ela deve concentrar-se em uma única parte da funcionalidade do software.",
        "B) Um sistema inteiro deve consistir em apenas um arquivo de código-fonte principal.",
        "C) Toda função deve executar exatamente uma linha de comando antes de retornar.",
        "D) Uma aplicação deve possuir apenas um desenvolvedor responsável por sua manutenção."
    ], 
    "A", 
    "O SRP evita que classes fiquem sobrecarregadas com múltiplas responsabilidades não relacionadas, reduzindo o impacto de futuras alterações.", 
    "Se uma classe lida com lógica de negócio e persistência ao mesmo tempo, ela viola o SRP."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que determina o Princípio Aberto/Fechado (Open/Closed Principle - OCP)?", 
    "Princípios SOLID", 
    [
        "A) As entidades de software devem ser abertas para extensão, mas fechadas para modificação.",
        "B) O código-fonte de um sistema deve permanecer sempre aberto na internet, mas fechado para edições locais.",
        "C) Funções públicas devem ser abertas para chamadas externas e fechadas para testes internos.",
        "D) Bancos de dados devem ser abertos a leituras e fechados para escrituras simultâneas."
    ], 
    "A", 
    "O OCP permite adicionar novas funcionalidades ao sistema criando novos códigos (extensão) em vez de alterar códigos antigos já testados e funcionais (modificação).", 
    "Geralmente é alcançado através do uso de interfaces, classes abstratas e polimorfismo."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que postula o Princípio da Substituição de Liskov (Liskov Substitution Principle - LSP)?", 
    "Princípios SOLID", 
    [
        "A) Objetos em um programa devem ser substituíveis por instâncias de seus subtipos sem alterar a correção ou o comportamento esperado do programa.",
        "B) Subclasses devem sempre lançar exceções quando herdarem métodos de classes pai.",
        "C) Herança de classes deve ser evitada em favor de funções estáticas globais.",
        "D) Variáveis globais podem substituir parâmetros de métodos em qualquer situação."
    ], 
    "A", 
    "O LSP garante que uma classe derivada atenda rigorosamente ao contrato estabelecido pela classe base, evitando comportamentos inesperados ao usar polimorfismo.", 
    "Violar o LSP costuma gerar erros sutis em tempo de execução."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Qual é o objetivo do Princípio da Segregação de Interfaces (Interface Segregation Principle - ISP)?", 
    "Princípios SOLID", 
    [
        "A) Forçar classes a implementarem interfaces grandes e genéricas com dezenas de métodos.",
        "B) Muitas interfaces específicas são melhores do que uma única interface genérica e volumosa, evitando que clientes dependam de métodos que não utilizam.",
        "C) Segregar a interface gráfica do usuário do banco de dados relacional.",
        "D) Isolar redes corporativas usando firewalls baseados em portas físicas."
    ], 
    "B", 
    "O ISP evita o acoplamento desnecessário a métodos irrelevantes, mantendo os contratos coesos e focados nas necessidades reais de cada cliente.", 
    "Interfaces enxutas facilitam implementações mockadas em testes unitários."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que determina o Princípio da Inversão de Dependência (Dependency Inversion Principle - DIP)?", 
    "Princípios SOLID", 
    [
        "A) Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes.",
        "B) O banco de dados deve controlar diretamente a lógica de negócio central.",
        "C) Dependências circulares entre pacotes são obrigatórias para otimizar compilações.",
        "D) Classes concretas devem instanciar diretamente suas dependências internas usando 'new'."
    ], 
    "A", 
    "O DIP desacopla os componentes principais das implementações tecnológicas voláteis, injetando interfaces ou contratos em vez de acoplar classes concretas.", 
    "É o princípio base que sustenta a Injeção de Dependência e arquiteturas desacopladas."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que avalia a métrica de 'Coesão' (Cohesion) em um módulo de software?", 
    "Acoplamento e Coesão", 
    [
        "A) O grau em que os elementos internos de um módulo pertencem uns aos outros e trabalham juntos para realizar uma única tarefa bem definida.",
        "B) O volume de conexões de rede entre servidores distribuidos na nuvem.",
        "C) A quantidade de dependências externas que uma biblioteca possui no arquivo package.json.",
        "D) O tempo necessário para compilar todo o código-fonte."
    ], 
    "A", 
    "Busca-se sempre alta coesão dentro de módulos ou classes, garantindo que suas responsabilidades sejam estritamente focadas e coesas.", 
    "Alta coesão combinada com baixo acoplamento é o padrão ouro do design de software."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão arquitetural Domain-Driven Design (DDD)?", 
    "Domain-Driven Design", 
    [
        "A) Um foco em modelar o software em torno do domínio de negócio complexo, utilizando uma Linguagem Ubíqua compartilhada entre especialistas de negócio e desenvolvedores.",
        "B) Uma técnica exclusiva para otimizar consultas SQL em bancos de dados relacionais legados.",
        "C) Um framework JavaScript voltado para criação de interfaces de usuário reativas.",
        "D) Uma metodologia de infraestrutura focada apenas em servidores físicos on-premise."
    ], 
    "A", 
    "O DDD prioriza o núcleo do negócio, modelando entidades, value objects, agregados e repositórios para refletir fielmente as regras e processos da empresa.", 
    "Ajuda a lidar com alta complexidade de domínios corporativos."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "No contexto de Domain-Driven Design (DDD), o que é um 'Agregado' (Aggregate)?", 
    "Domain-Driven Design", 
    [
        "A) Um cluster de objetos de domínio associados que tratamos como uma unidade única para fins de alteração de dados, tendo uma Entidade raiz (Aggregate Root).",
        "B) Uma tabela temporária de auditoria em um banco NoSQL.",
        "C) Um grupo de servidores web balanceados por carga.",
        "D) Um arquivo de configuração de build em ferramentas como Maven ou Gradle."
    ], 
    "A", 
    "O Aggregate define limites claros de consistência transacional, garantindo que invariantes de negócio sejam mantidas dentro do limite do agregado.", 
    "Modificações externas devem sempre passar pela raiz do agregado (Aggregate Root)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que define o padrão arquitetural Microkernel (ou Arquitetura Plugável)?", 
    "Padrão Microkernel", 
    [
        "A) Um núcleo central minimalista que fornece apenas as funcionalidades sistêmicas fundamentais, complementado por módulos ou plugins independentes que adicionam recursos específicos.",
        "B) Um sistema operacional completo rodando dentro de um navegador web.",
        "C) Uma aplicação monolítica sem nenhuma separação de pacotes.",
        "D) Um banco de dados distribuído sem suporte a transações ACID."
    ], 
    "A", 
    "O padrão Microkernel é muito utilizado em IDEs (como VS Code ou Eclipse) e sistemas operacionais, onde funcionalidades extras são adicionadas via extensões.", 
    "Permite alta extensibilidade e isolamento de funcionalidades opcionais."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza uma Arquitetura Baseada em Espaços (Space-Based Architecture)?", 
    "Space-Based Architecture", 
    [
        "A) Um estilo arquitetural projetado para escalar horizontalmente de forma extrema através da remoção de gargalos de banco de dados centralizado, utilizando dados em memória (in-memory data grids) e processamento paralelo.",
        "B) Uma arquitetura restrita apenas a sistemas de controle de satélites espaciais.",
        "C) O armazenamento de dados exclusivamente em discos rígidos físicos externos.",
        "D) Uma aplicação que roda inteiramente dentro da memória cache do processador CPU."
    ], 
    "A", 
    "A Space-Based Architecture elimina o banco de dados centralizado como ponto único de falha e gargalo de concorrência, replicando dados em cache na memória de nós processadores.", 
    "Ideal para lidar com picos massivos de tráfego imprevisíveis."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que é a 'Lei de Conway' na engenharia de software e arquitetura?", 
    "Lei de Conway", 
    [
        "A) As organizações que projetam sistemas são restritas a produzir designs que são cópias das estruturas de comunicação dessas organizações.",
        "B) O tempo de execução de um software dobra a cada 18 meses, independentemente do hardware.",
        "C) Todo microsserviço deve possuir exatamente três desenvolvedores associados.",
        "D) Bugs de software sempre aparecem primeiro em ambientes de produção."
    ], 
    "A", 
    "A Lei de Conway demonstra que a estrutura organizacional de uma empresa influencia diretamente a arquitetura técnica dos softwares que ela constrói.", 
    "É frequentemente citada para justificar o uso de microsserviços alinhados a equipes multidisciplinares autônomas (Equipes Inversas / Reverse Conway Maneuver)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que avalia o conceito de 'Escalabilidade Horizontal' (Scale Out)?", 
    "Escalabilidade", 
    [
        "A) A capacidade de adicionar mais instâncias ou nós de servidores ao sistema para distribuir a carga de trabalho.",
        "B) O aumento da capacidade de processamento de um único servidor adicionando mais memória RAM ou discos mais potentes.",
        "C) A expansão física do tamanho do gabinete do computador central.",
        "D) O aumento do número de linhas de código em um arquivo fonte."
    ], 
    "A", 
    "A escalabilidade horizontal permite crescer infinitamente (até limites de rede/infra) adicionando máquinas mais simples, diferentemente da escalabilidade vertical (Scale Up), que possui limites físicos de hardware.", 
    "É um pilar fundamental em arquiteturas nativas em nuvem."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "No contexto de sistemas distribuídos e arquitetura de microsserviços, o que preconiza o Teorema de CAP?", 
    "Teorema de CAP", 
    [
        "A) Um sistema de dados distribuído pode garantir simultaneamente no máximo duas de três propriedades: Consistência (Consistency), Disponibilidade (Availability) e Tolerância a Partição (Partition Tolerance).",
        "B) Servidores cloud devem priorizar Custo, Agilidade e Performance acima de tudo.",
        "C) Aplicações web modernas exigem Cache, Autenticação e Proxy obrigatórios.",
        "D) Conexões de rede suportam apenas Concorrência, Autonomia e Protocolos seguros."
    ], 
    "A", 
    "Como falhas de rede (partições) são inevitáveis em sistemas distribuídos reais, os arquitetos devem escolher conscientemente entre Consistência (CP) ou Disponibilidade (AP) durante uma falha de rede.", 
    "Fundamento crítico na escolha de bancos de dados NoSQL e SQL distribuídos."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que descreve o padrão 'Circuit Breaker' (Disjuntor) em sistemas distribuídos?", 
    "Resiliência e Circuit Breaker", 
    [
        "A) Um mecanismo de proteção que monitora falhas em chamadas a serviços externos; se o índice de falhas ultrapassar um limite, o circuito 'abre' e rejeita requisições rapidamente sem sobrecarregar o serviço instável.",
        "B) Um disjuntor elétrico físico que desliga o servidor em caso de superaquecimento.",
        "C) Um algoritmo de criptografia para proteger senhas de usuários.",
        "D) Uma ferramenta de integração contínua para build de projetos."
    ], 
    "A", 
    "O Circuit Breaker evita falhas em cascata em arquiteturas de microsserviços, permitindo que sistemas falhem de forma controlada e se recuperem graciosamente.", 
    "Possui estados típicos como Closed, Open e Half-Open."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Qual é a finalidade do padrão 'Service Discovery' em arquiteturas de microsserviços?", 
    "Service Discovery", 
    [
        "A) Permitir que os microsserviços descubram dinamicamente endereços IP e portas de outros serviços na rede sem necessidade de configuração estática.",
        "B) Descobrir senhas perdidas de administradores de sistemas.",
        "C) Encontrar arquivos perdidos no disco rígido do servidor.",
        "D) Mapear rotas de URL no front-end da aplicação."
    ], 
    "A", 
    "Em ambientes de nuvem onde instâncias de microsserviços sobem e descem elasticamente (com IPs dinâmicos), o Service Discovery (como Consul, Eureka ou DNS interno) mantém o diretório atualizado de localização dos serviços.", 
    "Essencial para automação de infraestrutura."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão arquitetural 'Serverless' (Computação Sem Servidor)?", 
    "Serverless", 
    [
        "A) O desenvolvedor escreve código que é executado em containers efêmeros gerenciados por terceiros (como AWS Lambda), cobrando apenas pelo tempo de execução real, sem gerenciamento de servidores físicos ou virtuais.",
        "B) Um sistema que não utiliza nenhum tipo de computador ou processador.",
        "C) Servidores que rodam exclusivamente desligados da tomada.",
        "D) Uma aplicação que roda inteiramente no navegador do cliente sem backend."
    ], 
    "A", 
    "O Serverless transfere toda a responsabilidade de provisionamento, escalabilidade automática e manutenção de infraestrutura para o provedor de nuvem.", 
    "Excelente para cargas de trabalho orientadas a eventos e APIs de uso esporádico ou variável."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que define o padrão arquitetural 'Monolito Modular'?", 
    "Monolito Modular", 
    [
        "A) Uma aplicação estruturada como um único binário/implantação, mas dividida internamente em módulos de negócio fortemente encapsulados e desacoplados, evitando o espalhamento de dependências.",
        "B) Um monolito antigo que foi dividido em 50 microsserviços independentes.",
        "C) Um conjunto de microsserviços que compartilham o mesmo código fonte.",
        "D) Um sistema sem nenhuma separação de pacotes ou camadas."
    ], 
    "A", 
    "O Monolito Modular combina a simplicidade de deploy de um monolito com a organização limpa e modular de um sistema bem desenhado, servindo muitas vezes de transição para microsserviços.", 
    "Evita a complexidade distribuída precoce."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que avalia a característica de 'Mantenabilidade' (Maintainability) de um sistema de software?", 
    "Atributos de Qualidade", 
    [
        "A) A facilidade com que um sistema pode ser modificado para corrigir defeitos, melhorar o desempenho ou adaptar-se a mudanças em seu ambiente.",
        "B) A quantidade de manutenção física preventiva feita nos racks de servidores.",
        "C) O custo mensal da conta de energia elétrica do data center.",
        "D) A velocidade com que a equipe atual faz reuniões de planejamento."
    ], 
    "A", 
    "Sistemas com alta mantenabilidade possuem código limpo, boa cobertura de testes, baixo acoplamento e alta coesão, reduzindo o custo total de propriedade (TCO).", 
    "É um dos principais atributos de qualidade arquitetural (ilities)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "No contexto de testes de arquitetura, o que ferramentas como ArchUnit permitem verificar?", 
    "Testes de Arquitetura", 
    [
        "A) Regras arquiteturais de forma automatizada no código (ex: classes de persistência não devem acessar diretamente camadas de apresentação, ou pacotes de domínio não devem depender de frameworks web).",
        "B) A velocidade de clock do processador do servidor de homologação.",
        "C) A quantidade de pixels corretos em uma tela mobile.",
        "D) O tempo de resposta de requisições HTTP externas."
    ], 
    "A", 
    "O ArchUnit permite escrever testes unitários em código para validar o próprio design arquitetural, impedindo que desenvolvedores quebrem as regras de dependência ao longo do tempo.", 
    "Garante conformidade arquitetural contínua em projetos de grande porte."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão arquitetural 'Pipes and Filters' (Tubos e Filtros)?", 
    "Padrão Pipes and Filters", 
    [
        "A) O processamento de um fluxo de dados é dividido em etapas sequenciais independentes (filtros) conectadas por canais de transmissão (tubos), onde cada filtro transforma a entrada e repassa a saída.",
        "B) Um encanamento hidráulico físico que refrigera os servidores do data center.",
        "C) Filtros de segurança de rede baseados em endereços IP.",
        "D) Um método de filtragem de dados em consultas SQL complexas."
    ], 
    "A", 
    "O padrão Pipes and Filters é amplamente utilizado em processamento de lotes (batch processing), compiladores e pipelines de dados, promovendo alta reutilização e desacoplamento de etapas.", 
    "Cada filtro opera de forma isolada."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que significa a prática de 'Refatoração Arquitetural' (Architectural Refactoring)?", 
    "Refatoração", 
    [
        "A) A reestruturação de componentes e dependências estruturais de um sistema para melhorar seus atributos de qualidade internos sem alterar seu comportamento externo observável.",
        "B) A reescrita completa de um software usando uma linguagem de programação diferente a cada semana.",
        "C) A formatação automática de arquivos de texto usando editores de código.",
        "D) A troca física de servidores antigos por novos discos rígidos."
    ], 
    "A", 
    "A refatoração arquitetural combate o 'débito técnico estrutural' acumulado, permitindo que o sistema continue evoluindo de forma sustentável.", 
    "Exige forte cobertura de testes automatizados para garantir segurança."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Qual é a função de um 'Load Balancer' (Balanceador de Carga) na arquitetura de infraestrutura?", 
    "Balanceamento de Carga", 
    [
        "A) Distribuir o tráfego de rede ou de requisições de clientes entre múltiplos servidores de backend para otimizar a utilização de recursos, maximizar a capacidade de processamento e evitar sobrecarga.",
        "B) Equilibrar o peso físico dos gabinetes de servidores no rack.",
        "C) Balancear o uso de memória RAM entre threads de uma única aplicação.",
        "D) Dividir tarefas de desenvolvimento entre os membros da equipe de TI."
    ], 
    "A", 
    "O Load Balancer é indispensável para alcançar alta disponibilidade e escalabilidade horizontal, atuando como ponto de entrada para clusters de servidores.", 
    "Pode operar em camadas de rede (L4) ou de aplicação (L7)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão arquitetural 'Blackboard' (Quadro-Negro)?", 
    "Padrão Blackboard", 
    [
        "A) Um espaço de dados global compartilhado (o quadro-negro) onde vários módulos especialistas independentes (agentes) leem e escrevem informações para resolver problemas complexos onde não há uma rotina determinística clara.",
        "B) Uma sala de aula tradicional usada para treinamentos de arquitetura de software.",
        "C) Um painel Kanban usado por equipes ágeis para gerenciar tarefas.",
        "D) Um sistema de monitoramento de logs em tempo real."
    ], 
    "A", 
    "O padrão Blackboard é útil em inteligência artificial, reconhecimento de padrões e sistemas especialistas, onde múltiplos algoritmos colaboram para construir uma solução parcial iterativa.", 
    "Os agentes não se comunicam diretamente entre si, apenas através do quadro-negro."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que avalia o atributo de qualidade 'Resiliência' (Resilience) em sistemas distribuídos?", 
    "Resiliência", 
    [
        "A) A capacidade do sistema de se recuperar de falhas e continuar operando de forma aceitável, em vez de falhar completamente diante de erros inesperados.",
        "B) A rigidez dos materiais físicos usados na carcaça dos computadores.",
        "C) A velocidade com que desenvolvedores corrigem bugs em produção.",
        "D) A capacidade de resistir a ataques de força bruta em senhas."
    ], 
    "A", 
    "Sistemas resilientes assumem que falhas de rede, quedas de serviços e travamentos de hardware vão ocorrer, implementando estratégias como retries, fallbacks e disjuntores.", 
    "Difere de robustez, pois foca na recuperação após a falha."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "No contexto de arquitetura de software, o que é um 'Anti-Corruption Layer' (ACL - Camada Anticorrupção)?", 
    "Anti-Corruption Layer", 
    [
        "A) Uma camada tradutora posicionada entre um subsistema moderno e um sistema legado (ou de terceiros), impedindo que conceitos e modelos legados mal estruturados 'corrompam' o domínio limpo da nova aplicação.",
        "B) Um sistema antivírus corporativo que bloqueia acessos maliciosos.",
        "C) Um módulo de segurança focado em auditoria de fraudes financeiras.",
        "D) Uma ferramenta para impedir plágio de código-fonte no GitHub."
    ], 
    "A", 
    "A ACL isola o sistema novo traduzindo bidirecionalmente os modelos de dados e chamadas, permitindo integração segura com legados sem poluir a arquitetura interna.", 
    "Crucial em projetos de migração gradual."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que define o padrão arquitetural 'Broker' (Corretor de Mensagens/Serviços)?", 
    "Padrão Broker", 
    [
        "A) Um componente intermediário responsável por coordenar a comunicação entre clientes e servidores distribuídos, ocultando os detalhes de localização e facilitando o desacoplamento.",
        "B) Um corretor de imóveis responsável por alugar data centers.",
        "C) Um sistema de transações financeiras em bolsas de valores.",
        "D) Uma biblioteca para formatação de arquivos JSON."
    ], 
    "A", 
    "O padrão Broker permite que componentes distribuídos solicitem e recebam serviços de terceiros através de um intermediário padronizado.", 
    "Muito presente em sistemas de filas e brokers de mensageria modernos."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que significa a adoção de 'Design Patterns' (Padrões de Projeto) na arquitetura de software?", 
    "Design Patterns", 
    [
        "A) Soluções típicas e reutilizáveis para problemas recorrentes encontrados no projeto e desenvolvimento de software orientado a objetos.",
        "B) Regras estritas de formatação visual de telas em CSS.",
        "C) Padrões obrigatórios de nomenclatura de variáveis definidos pelo compilador.",
        "D) Modelos de contratos comerciais entre empresas de tecnologia."
    ], 
    "A", 
    "Catalogados amplamente pelo livro da Gang of Four (GoF), os padrões de projeto (como Factory, Singleton, Observer, Strategy) fornecem vocabulário compartilhado e soluções validadas para arquitetos e desenvolvedores.", 
    "Ajudam a estruturar o código de forma elegante e desacoplada."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "O que caracteriza o padrão de projeto comportamental 'Strategy'?", 
    "Design Patterns", 
    [
        "A) Permitir definir uma família de algoritmos, encapsular cada um deles em classes separadas e tornar os algoritmos intercambiáveis em tempo de execução.",
        "B) Garantir que uma classe tenha apenas uma única instância em todo o sistema.",
        "C) Notificar automaticamente múltiplos objetos sobre mudanças de estado.",
        "D) Criar objetos complexos passo a passo de forma isolada."
    ], 
    "A", 
    "O padrão Strategy elimina o uso excessivo de condicionais complexas (if/else ou switch), delegando comportamentos variados a classes polimórficas injetadas.", 
    "Promove o princípio aberto/fechado (OCP)."
);

addQuestion(
    "Arquitetura de Software", 
    "Média", 
    "Qual é o propósito principal do padrão de projeto 'Observer'?", 
    "Design Patterns", 
    [
        "A) Definir uma dependência um-para-muitos entre objetos para que, quando um objeto mudar de estado, todos os seus dependentes sejam notificados e atualizados automaticamente.",
        "B) Observar o desempenho de CPU e memória dos servidores em tempo real.",
        "C) Monitorar logs de erro gerados por usuários na aplicação web.",
        "D) Inspecionar pacotes de rede usando firewalls."
    ], 
    "A", 
    "O padrão Observer é a base conceitual para arquiteturas reativas, programação assíncrona baseada em eventos e fluxos de dados observáveis.", 
    "Desacopla o emissor do evento dos receptores interessados."
);

addQuestion(
    "Arquitetura de Software",
    "Média",
    "O que define a abordagem de 'Documentação Arquitetural' através do modelo C4?",
    "Documentação Arquitetural",
    [
        "A) Um conjunto de diagramas hierárquicos baseados em Contexto, Contêineres, Componentes e Código para descrever a arquitetura de software de forma clara e estruturada.",
        "B) Um modelo matemático para calcular o custo de servidores em nuvem.",
        "C) Um padrão de quatro colunas para relatórios de testes de carga.",
        "D) Uma metodologia ágil focada em quatro reuniões semanais."
    ],
    "A",
    "Criado por Simon Brown, o modelo C4 resolve o problema de diagramas confusos ou desatualizados, permitindo dar 'zoom' desde a visão macro do sistema (contexto) até os detalhes internos de componentes.",
    "Facilita enormemente a comunicação técnica na equipe."
);

/* =====================================================
    Bloco 13: DESIGN PATTERNS (40 QUESTÕES COMPLETAS)
===================================================== */

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão de projeto criacional garante que uma classe tenha apenas uma instância em toda a aplicação e fornece um ponto de acesso global para ela?", 
    "Singleton", 
    [
        "A) Factory Method",
        "B) Singleton",
        "C) Prototype",
        "D) Builder"
    ], 
    "B", 
    "O Singleton restringe a instanciação de uma classe a um único objeto, sendo útil para gerenciar recursos compartilhados como conexões de banco de dados ou configurações globais.", 
    "Cuidado com o uso excessivo de Singletons, pois eles introduzem estado global e podem dificultar testes unitários."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual categoria de Design Patterns foca na forma como classes e objetos são compostos para formar estruturas maiores, garantindo flexibilidade e eficiência?", 
    "Padrões Estruturais", 
    [
        "A) Criacionais",
        "B) Estruturais",
        "C) Comportamentais",
        "D) Concorrentes"
    ], 
    "B", 
    "Os padrões estruturais (como Adapter, Decorator e Facade) explicam como montar objetos e classes em estruturas maiores, mantendo essas estruturas flexíveis.", 
    "Exemplos clássicos de estruturais: Adapter, Composite, Proxy."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite que você defina uma família de algoritmos, coloque cada um deles em uma classe separada e faça com que seus objetos sejam intercambiáveis em tempo de execução?", 
    "Strategy", 
    [
        "A) Strategy",
        "B) Observer",
        "C) Command",
        "D) Template Method"
    ], 
    "A", 
    "O padrão Strategy permite alterar o comportamento de um objeto em tempo de execução encapsulando algoritmos intercambiáveis.", 
    "Ideal para substituir grandes estruturas condicionais (if/else ou switch/case) baseadas no tipo de comportamento."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão criacional fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas?", 
    "Abstract Factory", 
    [
        "A) Factory Method",
        "B) Abstract Factory",
        "C) Builder",
        "D) Singleton"
    ], 
    "B", 
    "O Abstract Factory permite produzir famílias de produtos compatíveis sem que o código cliente dependa de suas classes concretas.", 
    "Muito útil quando o sistema precisa ser independente de como seus produtos são criados, compostos e representados."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão de projeto criacional define uma interface para criar um objeto, mas deixa as subclasses decidirem qual classe instanciar, permitindo que a instanciação seja adiada para as subclasses?", 
    "Factory Method", 
    [
        "A) Abstract Factory",
        "B) Factory Method",
        "C) Prototype",
        "D) Singleton"
    ], 
    "B", 
    "O Factory Method resolve o problema de criar objetos sem especificar a classe exata do objeto que será criado, delegando essa responsabilidade para as subclasses.", 
    "Promove o princípio aberto/fechado (Open/Closed Principle) do SOLID."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão criacional permite construir objetos complexos passo a passo, utilizando o mesmo código de construção para produzir diferentes tipos e representações de um objeto?", 
    "Builder", 
    [
        "A) Builder",
        "B) Factory Method",
        "C) Prototype",
        "D) Adapter"
    ], 
    "A", 
    "O Builder separa a construção de um objeto complexo da sua representação, permitindo a criação de diferentes variações utilizando o mesmo processo.", 
    "Evita construtores telescópicos com dezenas de parâmetros opcionais."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão criacional permite copiar objetos existentes sem que o código dependa de suas classes, clonando instâncias em tempo de execução?", 
    "Prototype", 
    [
        "A) Prototype",
        "B) Singleton",
        "C) Factory Method",
        "D) Facade"
    ], 
    "A", 
    "O Prototype especifica os tipos de objetos a criar usando uma instância exemplar e cria novos objetos copiando este protótipo.", 
    "Útil para evitar a criação custosa de objetos via banco de dados ou operações complexas de inicialização."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural permite que objetos com interfaces incompatíveis colaborem entre si, atuando como um tradutor ou wrapper?", 
    "Adapter", 
    [
        "A) Decorator",
        "B) Adapter",
        "C) Facade",
        "D) Bridge"
    ], 
    "B", 
    "O Adapter converte a interface de uma classe em outra interface esperada pelos clientes, permitindo que classes trabalhem juntas que antes não conseguiam devido a incompatibilidades.", 
    "Muito comum ao integrar bibliotecas de terceiros ou sistemas legados."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural desacopla uma abstração de sua implementação, permitindo que ambas possam variar independentemente?", 
    "Bridge", 
    [
        "A) Bridge",
        "B) Composite",
        "C) Proxy",
        "D) Flyweight"
    ], 
    "A", 
    "O padrão Bridge divide uma classe grande ou um conjunto de classes intimamente ligadas em duas hierarquias separadas (abstração e implementação) que podem ser desenvolvidas independentemente.", 
    "Evita a explosão de subclasses combinatórias."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural permite que você componha objetos em estruturas de árvores e trabalhe com essas estruturas como se fossem objetos individuais?", 
    "Composite", 
    [
        "A) Composite",
        "B) Decorator",
        "C) Flyweight",
        "D) Proxy"
    ], 
    "A", 
    "O Composite permite que clientes tratem objetos individuais e composições de objetos de maneira uniforme (ex: hierarquias de arquivos e pastas).", 
    "Baseia-se em recursividade nas chamadas de métodos estruturais."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural anexa novos comportamentos a objetos colocando-os dentro de objetos wrapper que contêm esses comportamentos?", 
    "Decorator", 
    [
        "A) Adapter",
        "B) Decorator",
        "C) Facade",
        "D) Proxy"
    ], 
    "B", 
    "O Decorator permite adicionar responsabilidades a objetos dinamicamente em tempo de execução, sendo uma alternativa flexível à herança para estender funcionalidades.", 
    "Muito utilizado em fluxos de I/O (como streams de leitura e escrita)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural fornece uma interface simplificada para uma biblioteca, um framework ou um conjunto complexo de classes?", 
    "Facade", 
    [
        "A) Facade",
        "B) Proxy",
        "C) Bridge",
        "D) Adapter"
    ], 
    "A", 
    "O Facade oculta a complexidade de subsistemas internos por trás de uma fachada de alto nível, facilitando o uso por clientes externos.", 
    "Reduz o acoplamento entre o código cliente e subsistemas complexos."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural usa compartilhamento para dar suporte a grandes quantidades de objetos de granulação fina de forma eficiente em termos de memória?", 
    "Flyweight", 
    [
        "A) Flyweight",
        "B) Singleton",
        "C) Prototype",
        "D) Composite"
    ], 
    "A", 
    "O Flyweight economiza RAM armazenando o estado compartilhado (intrínseco) no próprio objeto e passando o estado contextual (extrínseco) para os métodos.", 
    "Comum em editores de texto para renderização eficiente de milhares de caracteres."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural fornece um substituto ou placeholder para outro objeto, controlando o acesso a ele (ex: controle de acesso, carregamento tardio ou cache)?", 
    "Proxy", 
    [
        "A) Proxy",
        "B) Decorator",
        "C) Adapter",
        "D) Facade"
    ], 
    "A", 
    "O Proxy intercepta chamadas ao objeto real, permitindo executar tarefas antes ou depois do repasse da requisição (ex: Lazy Loading, Smart References, Protection Proxy).", 
    "Mantém a mesma interface do objeto original."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental define uma dependência um-para-muitos entre objetos para que, quando um objeto mudar de estado, todos os seus dependentes sejam notificados e atualizados automaticamente?", 
    "Observer", 
    [
        "A) Observer",
        "B) Strategy",
        "C) State",
        "D) Mediator"
    ], 
    "A", 
    "O Observer estabelece o mecanismo de publicação-assinatura (pub/sub), desacoplando o sujeito emissor dos observadores interessados nas mudanças.", 
    "Base fundamental para arquiteturas reativas e interfaces orientadas a eventos."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite que um objeto altere seu comportamento quando seu interior muda de estado, parecendo que a classe do objeto mudou?", 
    "State", 
    [
        "A) State",
        "B) Strategy",
        "C) Command",
        "D) Memento"
    ], 
    "A", 
    "O padrão State encapsula comportamentos dependentes de estados em classes separadas e delega as transições para o objeto de estado atual, eliminando grandes estruturas condicionais.", 
    "Muito próximo estruturalmente do padrão Strategy, mas com foco em transições de ciclo de vida."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental encapsula uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações, enfileirar operações e suportar operações que podem ser desfeitas (undo)?", 
    "Command", 
    [
        "A) Command",
        "B) Mediator",
        "C) Chain of Responsibility",
        "D) Visitor"
    ], 
    "A", 
    "O Command transforma uma operação em um objeto independente contendo todos os dados e dependências necessárias para executá-la mais tarde.", 
    "Ideal para filas de tarefas, históricos de ações e macros."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite que você passe solicitações ao longo duma cadeia de handlers, onde cada handler decide se processa a solicitação ou a passa para o próximo handler da cadeia?", 
    "Chain of Responsibility", 
    [
        "A) Chain of Responsibility",
        "B) Mediator",
        "C) Observer",
        "D) Template Method"
    ], 
    "A", 
    "A Chain of Responsibility desacopla o remetente de um comando do seu receptor, permitindo múltiplos objetos processarem a requisição em sequência.", 
    "Comum em middlewares de requisições HTTP (como em Express.js ou Spring Security)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental define o esqueleto de um algoritmo em uma operação, postergando a implementação de alguns passos para as subclasses?", 
    "Template Method", 
    [
        "A) Template Method",
        "B) Strategy",
        "C) Factory Method",
        "D) State"
    ], 
    "A", 
    "O Template Method permite que subclasses reescrevam etapas específicas de um algoritmo sem alterar a estrutura global do fluxo.", 
    "Utiliza o princípio de inversão de controle (Hollywood Principle: 'Não nos chame, nós chamaremos você')."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental reduz o acoplamento caótico entre classes, restringindo as comunicações diretas entre os objetos e forçando-os a colaborar apenas através de um objeto mediador?", 
    "Mediator", 
    [
        "A) Mediator",
        "B) Observer",
        "C) Facade",
        "D) Command"
    ], 
    "A", 
    "O Mediator centraliza a lógica de comunicação de um grupo de objetos, evitando que eles se conheçam explicitamente e reduza o acoplamento complexo de rede M para M.", 
    "Comum em sistemas de controle de interface de usuário complexos."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite capturar e externalizar o estado interno de um objeto sem violar o encapsulamento, de modo que o objeto possa ser restaurado a esse estado mais tarde?", 
    "Memento", 
    [
        "A) Memento",
        "B) Prototype",
        "C) Command",
        "D) State"
    ], 
    "A", 
    "O Memento armazena cópias de segurança do estado de um objeto de forma desacoplada, permitindo implementar funcionalidades de desfazer/refazer (undo/redo).", 
    "Respeita o encapsulamento ao não expor diretamente os dados internos do originador."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite percorrer elementos de uma coleção (como listas, árvores ou grafos) de maneira sequencial sem expor sua representação interna?", 
    "Iterator", 
    [
        "A) Iterator",
        "B) Composite",
        "C) Visitor",
        "D) Interpreter"
    ], 
    "A", 
    "O Iterator extrai a lógica de travessia de dados para um objeto iterador dedicado, uniformizando o acesso a diferentes estruturas de dados.", 
    "Presente nativamente na maioria das linguagens modernas (ex: `for...of`, interfaces `Iterator`)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite separar algoritmos dos objetos sobre os quais eles operam, possibilitando adicionar novas operações sem alterar as classes desses objetos?", 
    "Visitor", 
    [
        "A) Visitor",
        "B) Strategy",
        "C) Template Method",
        "D) Command"
    ], 
    "A", 
    "O Visitor utiliza dupla dispatch para injetar novas operações em uma hierarquia de classes estável sem modificar suas estruturas.", 
    "Comum em compiladores e analisadores sintácticos de árvores de código."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite definir uma gramática para uma linguagem e um interpretador para usar essa gramática para avaliar sentenças na linguagem?", 
    "Interpreter", 
    [
        "A) Interpreter",
        "B) Command",
        "C) Mediator",
        "D) Visitor"
    ], 
    "A", 
    "O Interpreter mapeia regras gramaticais em classes de objetos, permitindo avaliar expressões complexas baseadas em árvores de sintaxe.", 
    "Pouco utilizado no dia a dia, exceto em motores de regras de negócio, parsers ou ferramentas de busca."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual é a principal vantagem de aplicar Design Patterns em projetos de desenvolvimento de software?", 
    "Fundamentos de Design Patterns", 
    [
        "A) Eliminar completamente a necessidade de escrever testes unitários.",
        "B) Fornecer soluções comprovadas e reutilizáveis para problemas recorrentes de projeto, facilitando um vocabulário compartilhado entre desenvolvedores.",
        "C) Reduzir a quantidade de linhas de código binário compilado pela metade.",
        "D) Garantir velocidade máxima de execução em microcontroladores."
    ], 
    "B", 
    "Os padrões de projeto encapsulam décadas de experiência coletiva da engenharia de software orientada a objetos.", 
    "Originados e popularizados pelo livro clássico da 'Gang of Four' (GoF)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "No contexto dos princípios SOLID, com quais categorias de Design Patterns o Princípio da Responsabilidade Única (SRP) e o Princípio Aberto/Fechado (OCP) mais se alinham diretamente?", 
    "SOLID e Design Patterns", 
    [
        "A) Com praticamente todos os padrões GoF, pois buscam modularidade, baixo acoplamento e alta coesão.",
        "B) Apenas com padrões estritamente criacionais baseados em XML.",
        "C) Apenas com o padrão Singleton.",
        "D) Não há relação conceitual entre SOLID e padrões de projeto."
    ], 
    "A", 
    "Os padrões de projeto foram concebidos justamente para materializar os princípios SOLID na prática arquitetural.", 
    "Facilitam a manutenção e a escalabilidade de sistemas de grande porte."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual é a principal diferença conceitual entre os padrões Strategy e State?", 
    "Strategy vs State", 
    [
        "A) O Strategy é um padrão criacional e o State é estrutural.",
        "B) O Strategy é escolhido pelo cliente de forma consciente para realizar uma tarefa; o State gerencia mudanças internas automáticas de ciclo de vida do objeto sem que o cliente precise gerenciar transições explícitas.",
        "C) O Strategy só funciona em JavaScript e o State apenas em C++.",
        "D) Não há diferença; são sinônimos perfeitos."
    ], 
    "B", 
    "Embora estruturalmente parecidos (composição com delegação), suas intenções de negócio e acoplamento de transições diferem significativamente.", 
    "O State conhece outros estados e comanda transições; o Strategy é independente."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão de projeto criacional pode ser implementado de forma segura em ambientes multithread utilizando técnicas como Double-Checked Locking?", 
    "Singleton", 
    [
        "A) Singleton",
        "B) Builder",
        "C) Prototype",
        "D) Factory Method"
    ], 
    "A", 
    "Em aplicações concorrentes, múltiplos threads podem tentar instanciar o Singleton simultaneamente se a inicialização não for thread-safe.", 
    "Exige cuidados especiais dependendo da linguagem de programação utilizada (ex: Java, C#, Python)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "O que caracteriza o uso do padrão Null Object dentro de padrões comportamentais/estruturais?", 
    "Null Object Pattern", 
    [
        "A) Substituir referências nulas (`null`) por um objeto polimórfico que implementa o comportamento padrão neutro (vazio), evitando checagens constantes de `if (x != null)`.",
        "B) Deletar arquivos corrompidos do disco rígido.",
        "C) Forçar exceções de ponteiro nulo em tempo de execução.",
        "D) Desativar o coletor de lixo (Garbage Collector)."
    ], 
    "A", 
    "O Null Object encapsula o comportamento de 'nada' ou 'ausência', simplificando o código cliente ao eliminar condicionais repetitivas de checagem de nulidade.", 
    "Promove o princípio do polimorfismo limpo."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural é frequentemente comparado a um 'cartão de crédito virtual' ou 'um substituto seguro' que delega chamadas para um objeto pesado ou remoto?", 
    "Proxy", 
    [
        "A) Proxy",
        "B) Adapter",
        "C) Decorator",
        "D) Bridge"
    ], 
    "A", 
    "O Proxy atua como intermediário transparente, controlando o acesso, otimizando recursos (Lazy Loading) ou adicionando camadas de segurança.", 
    "Muito utilizado em ORMs para carregamento tardio de relacionamentos (Lazy Loading Proxies)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão criacional é útil quando a criação de objetos é mais custosa do que clonar instâncias pré-existentes na memória?", 
    "Prototype", 
    [
        "A) Prototype",
        "B) Singleton",
        "C) Factory Method",
        "D) Facade"
    ], 
    "A", 
    "O Prototype permite a criação de novos objetos através da cópia de protótipos já carregados, economizando viagens ao banco de dados ou inicializações complexas.", 
    "Evita hierarquias complexas de subclasses de fábrica."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental permite desacoplar remetentes e receptores através de mensagens distribuídas em canais ou tópicos de eventos?", 
    "Observer", 
    [
        "A) Observer",
        "B) Command",
        "C) Mediator",
        "D) State"
    ], 
    "A", 
    "O padrão Observer notifica automaticamente múltiplos objetos dependentes sobre qualquer mudança de estado no objeto observado.", 
    "Base fundamental para arquiteturas reativas baseadas em eventos."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "No contexto de refatoração de código legado, qual categoria de Design Patterns costuma ser mais aplicada para desacoplar sistemas rígidos e interfaces incompatíveis?", 
    "Padrões Estruturais", 
    [
        "A) Estruturais",
        "B) Criacionais",
        "C) Concorrentes",
        "D) Apenas testes unitários"
    ], 
    "A", 
    "Padrões como Adapter, Facade e Bridge são cruciais para adaptar APIs antigas a novos contratos sem reescrever todo o sistema.", 
    "Facilitam a transição gradual de arquiteturas legadas."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental é ideal para implementar a funcionalidade de 'Desfazer' (Undo) e 'Refazer' (Redo) em editores de texto ou softwares gráficos?", 
    "Command", 
    [
        "A) Command",
        "B) Strategy",
        "C) Template Method",
        "D) Iterator"
    ], 
    "A", 
    "O padrão Command encapsula ações como objetos independentes, permitindo armazená-las em pilhas de histórico para reversão.", 
    "Pode ser combinado com o padrão Memento para salvar o estado dos dados manipulados."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual é o principal risco associado ao uso inadequado do padrão Singleton em aplicações orientadas a objetos?", 
    "Singleton", 
    [
        "A) Introduzir estado global oculto e forte acoplamento, dificultando a escrita de testes unitários isolados.",
        "B) Gerar erros de compilação automáticos de sintaxe.",
        "C) Duplicar instâncias de hardware na placa-mãe.",
        "D) Aumentar a velocidade de execução da CPU em 500%."
    ], 
    "A", 
    "O estado global dificulta o paralelismo e o isolamento de testes, pois testes diferentes podem interferir nas variáveis compartilhadas do Singleton.", 
    "Recomenda-se cautela e preferência por Injeção de Dependência sempre que possível."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural permite adicionar funcionalidades a um objeto individual de forma dinâmica, sem afetar o comportamento de outros objetos da mesma classe?", 
    "Decorator", 
    [
        "A) Decorator",
        "B) Adapter",
        "C) Composite",
        "D) Proxy"
    ], 
    "A", 
    "O Decorator envolve o objeto original em wrappers sucessivos para estender comportamentos em tempo de execução.", 
    "Evita a explosão combinatorial de subclasses para cada combinação de recursos."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental define passos fixos de um algoritmo na superclasse, permitindo que as subclasses alterem apenas etapas específicas?", 
    "Template Method", 
    [
        "A) Template Method",
        "B) Strategy",
        "C) State",
        "D) Builder"
    ], 
    "A", 
    "O Template Method reutiliza o fluxo principal do algoritmo e delega os detalhes customizáveis para métodos abstratos implementados nas subclasses.", 
    "Exemplo clássico: algoritmos de salvamento ou processamento de arquivos em etapas (abrir, ler, processar, fechar)."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão estrutural atua como um 'escudo' ou 'controlador de acesso' na frente de um objeto sensível ou remoto?", 
    "Proxy", 
    [
        "A) Proxy",
        "B) Facade",
        "C) Adapter",
        "D) Flyweight"
    ], 
    "A", 
    "O Proxy de Proteção verifica permissões antes de repassar a chamada ao objeto real.", 
    "Mantém a mesma assinatura de interface do objeto original para total transparência."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Qual padrão comportamental evita que um remetente de solicitação acople-se rigidamente ao seu receptor, permitindo que vários objetos tenham a chance de tratar o pedido em sequência?", 
    "Chain of Responsibility", 
    [
        "A) Chain of Responsibility",
        "B) Mediator",
        "C) Observer",
        "D) Command"
    ], 
    "A", 
    "Os handlers formam uma corrente onde cada elo decide se consome a requisição ou a repassa adiante.", 
    "Muito utilizado em frameworks web para processamento de middlewares de requisição."
);

addQuestion(
    "Design Patterns", 
    "Média", 
    "Como os Design Patterns se relacionam com os princípios de orientação a objetos (como encapsulamento, herança e polimorfismo)?", 
    "Fundamentos de Design Patterns", 
    [
        "A) Eles aplicam esses pilares de forma avançada para resolver problemas recorrentes de design com baixo acoplamento e alta coesão.",
        "B) Eles substituem completamente o uso de polimorfismo por variáveis globais.",
        "C) Eles funcionam apenas em linguagens não tipadas.",
        "D) Eles anulam a necessidade de encapsulamento."
    ], 
    "A", 
    "Os padrões são receitas arquiteturais construídas diretamente sobre os fundamentos da orientação a objetos.", 
    "Promovem código limpo, extensível e de fácil manutenção."
);

/* =====================================================
   Bloco 14: DOMAIN-DRIVEN DESIGN (DDD) - 40 QUESTÕES COMPLETAS
===================================================== */

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que é a 'Linguagem Ubíqua' (Ubiquitous Language) no contexto do Domain-Driven Design (DDD)?", 
    "Linguagem Ubíqua", 
    [
        "A) Uma linguagem de programação exclusiva desenvolvida para implementar regras de negócio complexas.",
        "B) Uma linguagem rigorosamente compartilhada e comum entre desenvolvedores e especialistas do domínio, utilizada tanto nas conversas quanto no código-fonte.",
        "C) O padrão internacional de documentação em diagramas UML exigido para sistemas corporativos.",
        "D) Um framework de tradução automática de código legado para microsserviços modernos."
    ], 
    "B", 
    "A Linguagem Ubíqua elimina a barreira de tradução entre negócios e tecnologia, garantindo que os termos do domínio apareçam diretamente nas classes, métodos e variáveis do software.", 
    "Se os especialistas de negócio chamam o conceito de 'Apólice', o código deve usar `Apolice`, e não termos genéricos como `Registro`."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Qual é a principal diferença conceitual entre uma Entidade (Entity) e um Objeto de Valor (Value Object) no DDD?", 
    "Entidades vs Objetos de Valor", 
    [
        "A) As entidades possuem identidade própria e única que persiste ao longo das mudanças de atributos, enquanto os objetos de valor são definidos exclusivamente pelos seus valores e são imutáveis.",
        "B) Os objetos de valor salvam dados no banco relacional, e as entidades ficam apenas na memória RAM.",
        "C) As entidades não podem conter regras de negócio, função exclusiva dos objetos de valor.",
        "D) Não há diferença arquitetural; ambos são sinônimos para classes de domínio."
    ], 
    "A", 
    "Uma Entidade (ex: `Cliente` com um ID único) continua sendo a mesma mesmo se o endereço mudar. Um Objeto de Valor (ex: `Endereco` ou `Dinheiro`) é comparado pelo conteúdo; se alterar um centavo, ele se torna outro objeto de valor.", 
    "Sempre que possível, prefira modelar conceitos como Objetos de Valor pela facilidade de manutenção e imutabilidade."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que define um 'Bounded Context' (Contexto Delimitado) e qual é a sua importância na arquitetura?", 
    "Contexto Delimitado", 
    [
        "A) O limite físico de memória RAM que um microsserviço pode consumir em produção.",
        "B) A demarcação explícita dentro da qual um modelo de domínio se aplica, garantindo que termos e conceitos tenham um significado preciso e isolado.",
        "C) A restrição de segurança que impede acessos externos não autorizados via token JWT.",
        "D) O tempo limite de resposta (timeout) para requisições HTTP entre diferentes servidores."
    ], 
    "B", 
    "Em grandes sistemas, um termo como 'Produto' significa coisas totalmente diferentes para o setor de Vendas e para o setor de Logística. O Bounded Context isola esses modelos para que não haja contaminação conceitual.", 
    "Muitas vezes, cada Bounded Context corresponde diretamente a um microsserviço independente."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "No padrão de projeto tático do DDD, o que é um 'Aggregate' (Agregado) e uma 'Aggregate Root' (Raiz do Agregado)?", 
    "Agregados", 
    [
        "A) Um banco de dados NoSQL utilizado para armazenar logs de auditoria em lote.",
        "B) Um agrupamento de entidades e objetos de valor associados tratado como uma unidade única para mudanças de dados, sendo que a Raiz do Agregado é a única porta de entrada externa para acessá-los.",
        "C) Uma biblioteca de relatórios estatísticos em tempo de execução.",
        "D) O diagrama que une todas as tabelas do sistema em formato relacional."
    ], 
    "B", 
    "O Agregado define limites de consistência transacional. Alterações em qualquer elemento interno devem passar obrigatoriamente pela Raiz do Agregado para garantir a integridade das regras de negócio.", 
    "Manter os agregados pequenos reduz conflitos de concorrência em sistemas distribuídos."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Quando devemos utilizar um 'Domain Service' (Serviço de Domínio) no DDD?", 
    "Serviços de Domínio", 
    [
        "A) Para realizar consultas SQL de infraestrutura diretamente na tabela de usuários.",
        "B) Quando uma operação de negócio envolve múltiplos agregados ou conceitos que não pertencem de forma natural a nenhuma entidade ou objeto de valor isolado.",
        "C) Para substituir completamente os controladores REST de uma API web.",
        "D) Para gerenciar o roteamento de telas no frontend."
    ], 
    "B", 
    "Embora a maioria da lógica de negócio deva residir dentro das Entidades e Objetos de Valor, algumas regras coordenam vários objetos diferentes (ex: uma transferência bancária entre duas contas distintas). Nesses casos, usa-se um Serviço de Domínio.", 
    "Serviços de domínio não devem conter estado (stateless) e focam puramente em comportamento."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Qual é a principal função de um Repositório (Repository) na arquitetura orientada ao domínio?", 
    "Repositórios", 
    [
        "A) Executar scripts de migração de banco de dados (Flyway ou Liquibase).",
        "B) Forçar o desacoplamento entre a camada de domínio e a persistência, simulando uma coleção em memória para encontrar, adicionar e remover agregados inteiros.",
        "C) Substituir os testes unitários por simulações reais de disco rígido.",
        "D) Criptografar senhas de usuários antes de salvar no SGBD."
    ], 
    "B", 
    "O repositório isola o domínio dos detalhes de infraestrutura (como ORMs, SQL ou NoSQL). Ele deve operar sempre em nível de Agregados, e não de tabelas individuais.", 
    "Em DDD, criamos repositórios apenas para Raízes de Agregados."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que distingue o 'Design Estratégico' (Strategic Design) do 'Design Tático' (Tactical Design) no DDD?", 
    "Estratégico vs Tático", 
    [
        "A) O estratégico foca na organização de grandes sistemas, contextos delimitados e relacionamentos entre equipes; o tático foca nos padrões de código de implementação interna (entidades, objetos de valor, repositórios).",
        "B) O estratégico é usado apenas em projetos legados, e o tático é exclusivo para arquiteturas serverless.",
        "C) O estratégico é responsabilidade exclusiva dos testadores (QA), enquanto o tático é feito pelo Product Owner.",
        "D) Não há distinção conceitual; ambos tratam da mesma granularidade de código."
    ], 
    "A", 
    "O Design Estratégico ajuda a enxergar o 'panorama geral' da empresa e dividir o domínio em partes gerenciáveis (Bounded Contexts, Context Mapping). O Design Tático entra no nível microscópico do código-fonte.", 
    "Muitos desenvolvedores aplicam padrões táticos sem usar o design estratégico, perdendo os maiores benefícios do DDD."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Para que serve uma 'Anti-Corruption Layer' (Camada Anticorrupção - ACL) quando integramos sistemas?", 
    "Camada Anticorrupção", 
    [
        "A) Para bloquear tentativas de invasão e ataques de injeção de SQL na API.",
        "B) Para traduzir e isolar o modelo de domínio moderno de sistemas legados ou de terceiros mal estruturados, impedindo que conceitos externos 'sujem' o código limpo da aplicação.",
        "C) Para auditar a folha de pagamento e evitar fraudes financeiras internas.",
        "D) Para compactar pacotes de dados antes de enviar via protocolo gRPC."
    ], 
    "B", 
    "A ACL atua como uma ponte tradutora entre dois subsistemas com modelos diferentes. Assim, se o sistema legado usa termos confusos, a camada os traduz para a Linguagem Ubíqua do seu domínio atual.", 
    "É um padrão essencial ao modernizar sistemas legados de forma incremental."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Qual é o papel de um 'Domain Event' (Evento de Domínio) em uma arquitetura DDD?", 
    "Eventos de Domínio", 
    [
        "A) Registrar erros de sintaxe e exceções de NullPointer no arquivo de log do servidor.",
        "B) Representar formalmente algo importante que aconteceu no domínio do negócio (ex: 'PedidoPago' ou 'ClienteCadastrado'), permitindo comunicação assíncrona e reativa entre agregados ou contextos.",
        "C) Agendar reinicializações automáticas do servidor de aplicações toda meia-noite.",
        "D) Controlar cliques de mouse e eventos de interface do usuário no front-end."
    ], 
    "B", 
    "Eventos de Domínio capturam efeitos colaterais de negócios de forma desacoplada. Um agregado dispara um evento, e outros componentes ou contextos podem escutá-lo para reagir sem acoplamento direto.", 
    "São a base fundamental para arquiteturas orientadas a eventos (Event-Driven Architecture) e padrões como CQRS."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "No contexto de criação de objetos complexos no DDD, quando devemos utilizar o padrão 'Factory' (Fábrica)?", 
    "Fábricas", 
    [
        "A) Para fabricar componentes físicos de hardware em linhas de montagem industrial.",
        "B) Para encapsular a lógica complexa de criação de Agregados ou Entidades, garantindo que o objeto nasça sempre em um estado válido e consistente, sem poluir o construtor padrão.",
        "C) Para gerar conexões simultâneas com bancos de dados relacionais.",
        "D) Para compilar o código Java/C# para código de máquina nativo."
    ], 
    "B", 
    "Quando a construção de um agregado exige validações complexas, regras de negócio ou montagem de sub-objetos, delegar essa responsabilidade a uma Factory mantém o domínio limpo e coeso.", 
    "Ajuda a evitar a criação de objetos 'incompletos' ou inválidos na aplicação."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que significa a relação de 'Context Mapping' (Mapeamento de Contextos) no Design Estratégico do DDD?", 
    "Context Mapping", 
    [
        "A) Mapear coordenadas geográficas de GPS para entrega de mercadorias em tempo real.",
        "B) Identificar e documentar explicitamente as fronteiras, dependências e padrões de integração e comunicação entre diferentes Bounded Contexts de um sistema.",
        "C) Criar tabelas de tradução de idiomas em aplicações multilíngues.",
        "D) Mapear classes de modelo para tabelas relacionais via ORM."
    ], 
    "B", 
    "O Context Mapping revela a topologia organizacional e técnica dos subsistemas, explicitando se a relação é de Parceria, Cliente-Servidor, Upstream-Downstream, entre outras.", 
    "Essencial para evitar surpresas e acoplamentos ocultos entre equipes diferentes."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "No padrão de relacionamento entre contextos delimitados, o que caracteriza uma relação 'Upstream / Downstream' (Montante / Jusante)?", 
    "Upstream / Downstream", 
    [
        "A) O Upstream é o sistema que consome dados, e o Downstream é o banco de dados principal.",
        "B) O Upstream é o sistema provedor cujas mudanças afetam o Downstream; o Downstream é o consumidor que depende dos dados ou serviços fornecidos pelo Upstream.",
        "C) Refere-se exclusivamente à direção do fluxo de água em sistemas de saneamento básico modelados via DDD.",
        "D) Indica que o Downstream tem autoridade total para alterar o código do Upstream sem permissão."
    ], 
    "B", 
    "Essa relação define dependências de direção. O time Downstream precisa estar atento às evoluções e contratos fornecidos pelo time Upstream.", 
    "Pode ser suavizada com o uso de padrões como Translation layers ou Open Host Service."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que é o padrão de integração 'Open Host Service' (OHS) em arquiteturas DDD?", 
    "Open Host Service", 
    [
        "A) Um servidor web aberto sem senha para acesso público na internet.",
        "B) Um protocolo que define o Bounded Context como um provedor de serviços de acesso público bem estruturado e estável (como uma API REST documentada) para múltiplos clientes downstream.",
        "C) Um serviço de hospedagem de código em nuvem semelhante ao GitHub.",
        "D) Uma política de portas abertas no firewall corporativo."
    ], 
    "B", 
    "O Open Host Service evita que o subsistema precise negociar integrações customizadas com cada consumidor diferente, oferecendo uma API padrão e bem mantida.", 
    "Geralmente combinado com o padrão Published Language."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que significa 'Published Language' (Linguagem Publicada) quando associada ao Open Host Service?", 
    "Published Language", 
    [
        "A) A publicação de livros técnicos sobre arquitetura de software.",
        "B) A documentação de uma linguagem de modelagem de dados documentada e compartilhada (como JSON Schema, XML ou Protobuf) para que qualquer sistema downstream consiga entender os dados fornecidos.",
        "C) Traduzir o código fonte para o inglês técnico.",
        "D) Publicar artigos científicos em revistas acadêmicas."
    ], 
    "B", 
    "A Published Language fornece um formato de intercâmbio de dados claro, estável e bem documentado, complementando o Open Host Service.", 
    "Garante independência de modelos internos proprietários."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Qual é a característica do padrão de relacionamento 'Shared Kernel' (Núcleo Compartilhado) entre Bounded Contexts?", 
    "Shared Kernel", 
    [
        "A) Compartilhar o mesmo servidor físico de produção entre dez aplicações diferentes.",
        "B) Um subconjunto do modelo de domínio e do código que é explicitamente compartilhado e mantido em conjunto por duas ou mais equipes de contextos diferentes.",
        "C) Uma biblioteca de componentes visuais de interface gráfica (Design System).",
        "D) O banco de dados relacional monolítico compartilhado por todo o sistema legado."
    ], 
    "B", 
    "O Shared Kernel exige forte alinhamento e comunicação contínua entre as equipes, pois qualquer alteração no código compartilhado afeta diretamente a todos os contextos envolvidos.", 
    "Deve ser usado com cautela extrema para evitar acoplamento indesejado."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que define o padrão de relacionamento 'Customer-Supplier' (Cliente-Fornecedor) entre equipes em DDD?", 
    "Customer-Supplier", 
    [
        "A) A relação comercial de venda de software B2B para o cliente final.",
        "B) Uma relação onde o time Downstream (Cliente) depende diretamente do time Upstream (Fornecedor) para entregar suas funcionalidades, havendo negociação mútua de prazos e prioridades de entrega.",
        "C) O modelo de cobrança por hora trabalhada em consultorias de TI.",
        "D) A compra de licenças de software de terceiros."
    ], 
    "B", 
    "Nesta relação, as necessidades do cliente influenciam o planejamento do fornecedor, existindo um acordo cooperativo de entregas.", 
    "Diferente da relação unilateral 'Conformist'."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que caracteriza o padrão 'Conformist' (Conformista) em um mapa de contextos?", 
    "Conformist", 
    [
        "A) Um desenvolvedor que aceita qualquer requisito sem questionar o product owner.",
        "B) Uma relação onde o contexto Downstream aceita passivamente o modelo de domínio do contexto Upstream exatamente como ele é, sem capacidade de negociar mudanças ou criar camadas de tradução.",
        "C) Um padrão de design visual baseado em temas escuros.",
        "D) A conformidade estrita com as leis de proteção de dados (LGPD)."
    ], 
    "B", 
    "O time downstream abre mão de ter seu próprio modelo adaptado e molda seu código diretamente ao modelo fornecido pelo upstream, reduzindo o custo de tradução ao custo de acoplamento.", 
    "Útil quando o upstream possui alta autoridade ou o modelo dele já é excelente."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que significa o padrão 'Antisocial / Separate Ways' (Caminhos Separados) no Context Mapping?", 
    "Separate Ways", 
    [
        "A) O divórcio jurídico entre sócios de uma empresa de tecnologia.",
        "B) Uma decisão consciente de não estabelecer integração ou vínculo arquitetural entre dois subsistemas, pois o custo de integrá-los supera os benefícios, optando por processos manuais ou isolados.",
        "C) Separar o front-end do back-end em repositórios distintos.",
        "D) Dividir o banco de dados em partições geograficamente distribuídas."
    ], 
    "B", 
    "Nem tudo precisa estar integrado. Se a integração não traz valor de negócio compensatório, seguir por caminhos separados é a escolha arquitetural correta.", 
    "Evita a complexidade desnecessária de integrações de sistemas."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que é um 'Domain Primitive' (Primitivo de Domínio) no contexto de modelagem rica?", 
    "Domain Primitive", 
    [
        "A) Uma linguagem de programação arcaica como Fortran ou Cobol.",
        "B) A substituição de tipos primitivos genéricos da linguagem (como `String` ou `int`) por pequenos Objetos de Valor fortemente tipados que carregam validações de negócio (ex: `Email`, `CPF`, `Dinheiro`).",
        "C) Funções matemáticas básicas em assembly.",
        "D) O banco de dados relacional em sua forma mais simples."
    ], 
    "B", 
    "Evita o anti-pattern de 'obsessão por tipos primitivos' (Primitive Obsession), garantindo que dados inválidos nunca circulem pelo domínio da aplicação.", 
    "Exemplo: um método que recebe `Email` em vez de uma `String` genérica."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que caracteriza o anti-pattern do 'Anemic Domain Model' (Modelo de Domínio Anêmico)?", 
    "Anemic Domain Model", 
    [
        "A) Classes de domínio que contêm apenas propriedades de dados (getters e setters) sem nenhuma regra de negócio, sendo toda a lógica concentrada em 'Serviços' externos.",
        "B) Um modelo de dados que não utiliza chaves primárias em tabelas relacionais.",
        "C) Sistemas que rodam em servidores com pouca memória RAM.",
        "D) Classes totalmente protegidas por criptografia de ponta a ponta."
    ], 
    "A", 
    "O modelo anêmico vai contra a essência do DDD e da Orientação a Objetos, transformando os objetos em meras estruturas de dados e centralizando o comportamento proceduralmente.", 
    "Martin Fowler classificou o modelo anêmico como um anti-pattern clássico."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que é um 'Rich Domain Model' (Modelo de Domínio Rico)?", 
    "Rich Domain Model", 
    [
        "A) Um sistema financeiro que movimenta bilhões de dólares por dia.",
        "B) Um modelo onde Entidades e Objetos de Valor encapsulam tanto o estado (dados) quanto o comportamento (regras de negócio e invariantes), impedindo estados inválidos.",
        "C) Uma arquitetura que utiliza bancos de dados NoSQL altamente custosos em nuvem.",
        "D) Um código repleto de comentários explicativos em inglês."
    ], 
    "B", 
    "No modelo rico, a própria entidade sabe validar suas regras e alterar seu estado de forma segura (ex: `pedido.aprovar()`), em vez de deixar isso para classes de serviço externas.", 
    "É o padrão esperado e desejado ao aplicar Domain-Driven Design."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Qual é o papel das 'Invariantes' (Invariants) dentro de um Agregado no DDD?", 
    "Invariantes", 
    [
        "A) Variáveis de ambiente que nunca mudam após o deploy em produção.",
        "B) Regras de consistência de negócio que devem ser mantidas sempre verdadeiras dentro dos limites do agregado a cada transação concluída.",
        "C) Constantes matemáticas utilizadas em algoritmos de criptografia de senhas.",
        "D) Logs imutáveis de auditoria de sistema."
    ], 
    "B", 
    "As invariantes protegem a integridade do domínio (ex: 'A soma dos itens do pedido deve ser igual ao valor total'). O agregado garante que essas regras nunca sejam violadas.", 
    "Garantir consistência forte dentro do agregado é a principal justificativa para sua existência."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Por que uma boa prática do DDD recomenda manter os Agregados pequenos?", 
    "Tamanho dos Agregados", 
    [
        "A) Para economizar espaço de armazenamento físico no disco rígido SSD.",
        "B) Para evitar contenção de concorrência, deadlocks em banco de dados e garantir que transações sejam rápidas e focadas em uma única consistência de negócio.",
        "C) Para permitir que o código seja lido em telas de smartphones.",
        "D) Para reduzir o número de linhas de código compiladas."
    ], 
    "B", 
    "Agregados grandes demais englobam muitas entidades, gerando conflitos de concorrência quando múltiplos usuários tentam alterá-los simultaneamente.", 
    "A regra de ouro é: Agregados devem conter apenas a raiz e o estritamente necessário para manter as invariantes."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Como se faz a referência entre diferentes Agregados em DDD de forma correta?", 
    "Referências entre Agregados", 
    [
        "A) Utilizando objetos de referência direta em memória (ponteiro de objeto completo).",
        "B) Referenciando outros agregados exclusivamente através de seus Identificadores únicos (IDs), e nunca mantendo referências a objetos inteiros de outro agregado.",
        "C) Utilizando views relacionais complexas no banco de dados SQL.",
        "D) Copiando todos os atributos do agregado externo para dentro do agregado local."
    ], 
    "B", 
    "O uso de IDs para referenciar outros agregados impede que um agregado acesse acidentalmente o estado interno de outro e evita o carregamento em cascata de grafos de objetos gigantescos.", 
    "Mantém os limites de consistência rigidamente separados."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que é o conceito de 'Event Storming' amplamente utilizado em projetos DDD?", 
    "Event Storming", 
    [
        "A) Uma tempestade de raios que derruba os servidores de computação em nuvem.",
        "B) Uma oficina colaborativa de facilitação rápida envolvendo especialistas de negócio e desenvolvedores para descobrir e mapear eventos de domínio, fluxos e limites de contextos.",
        "C) Um teste de estresse automatizado para medir vazão de requisições HTTP.",
        "D) Uma metodologia ágil para reescrever código legado em 24 horas."
    ], 
    "B", 
    "Criado por Alberto Brandolini, o Event Storming utiliza post-its coloridos para modelar visualmente o domínio de forma ágil e intuitiva.", 
    "Excelente ponto de partida para iniciar o Design Estratégico de um sistema."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Qual é a relação entre Domain-Driven Design (DDD) e Arquitetura Limpa / Hexagonal (Ports and Adapters)?", 
    "DDD e Arquitetura Limpa", 
    [
        "A) São concorrentes diretos; usar DDD impede o uso de Arquitetura Hexagonal.",
        "B) Eles se complementam perfeitamente: a Arquitetura Hexagonal fornece a estrutura técnica de camadas e isolamento, enquanto o DDD fornece os padrões de modelagem para a camada de domínio.",
        "C) A Arquitetura Hexagonal substitui completamente a necessidade de aplicar DDD.",
        "D) O DDD funciona apenas em arquiteturas baseadas em microsserviços sem banco de dados."
    ], 
    "B", 
    "A camada de domínio modelada com DDD fica no centro da Arquitetura Hexagonal, totalmente isolada de detalhes de infraestrutura, frameworks e bancos de dados.", 
    "Essa combinação garante alta manutenibilidade e testabilidade."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "No contexto de persistência em DDD, o que significa a separação entre 'Modelos de Domínio' e 'Modelos de Persistência' (Data Models)?", 
    "Modelos de Domínio vs Persistência", 
    [
        "A) Significa que o sistema não utiliza banco de dados.",
        "B) A prática de utilizar classes separadas para o domínio (regras puras) e para o banco de dados (tabelas/ORM), mapeando-os explicitamente para evitar que detalhes de banco de dados poluam as regras de negócio.",
        "C) O uso de duas linguagens de programação diferentes no mesmo projeto.",
        "D) A replicação de dados em servidores geograficamente separados."
    ], 
    "B", 
    "Permite que o modelo de domínio evolua livremente sem ficar engessado pelas limitações ou estruturas de um esquema relacional de banco de dados.", 
    "Mapeadores customizados ou ORMs bem configurados ajudam nessa tradução."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que é uma 'Specification' (Especificação) no padrão de design tático do DDD?", 
    "Specification Pattern", 
    [
        "A) Um documento técnico em formato PDF exigido para licitações públicas.",
        "B) Um padrão de projeto que encapsula uma regra de negócio ou critério de filtragem em um objeto reutilizável, permitindo combinar regras complexas via operações lógicas (E, OU, NÃO).",
        "C) O manual de instruções de uma biblioteca de código aberto.",
        "D) Um contrato de API REST gerado automaticamente pelo Swagger."
    ], 
    "B", 
    "O padrão Specification é muito útil para expressar regras de validação ou critérios de busca complexos que podem ser reutilizados tanto no domínio quanto nos repositórios.", 
    "Promove legibilidade e testabilidade isolada de regras de negócio."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Qual é o principal objetivo do DDD ao lidar com a complexidade de software?", 
    "Objetivo do DDD", 
    [
        "A) Reduzir o custo de infraestrutura de servidores em nuvem em até 90%.",
        "B) Concentrar o esforço de desenvolvimento no núcleo do negócio (Core Domain), onde reside o verdadeiro valor competitivo da empresa.",
        "C) Eliminar a necessidade de documentação escrita por analistas de sistemas.",
        "D) Permitir que aplicações rodem sem conexão com a internet."
    ], 
    "B", 
    "O DDD propõe direcionar foco e energia para o que realmente importa para a empresa (Core Domain), lidando com domínios genéricos ou de suporte de forma pragmática.", 
    "Maximiza o retorno sobre o investimento em desenvolvimento de software."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que são Domínios 'Core', 'Supporting' (Suporte) e 'Generic' (Genéricos) no DDD?", 
    "Tipos de Domínios", 
    [
        "A) Classificação de tipos de bancos de dados relacionais.",
        "B) A categorização estratégica dos subsistemas de uma empresa: Core é o diferencial competitivo; Supporting apoia o core mas não é diferencial; Generic é padrão de mercado (ex: autenticação, faturamento).",
        "C) Divisão de cargos e salários entre equipes de engenharia de software.",
        "D) Níveis de segurança e criptografia de dados confidenciais."
    ], 
    "B", 
    "Identificar a qual categoria cada parte do sistema pertence ajuda a decidir onde investir os melhores desenvolvedores e arquitetura (focando no Core Domain).", 
    "Domínios genéricos podem ser comprados prontos ou terceirizados."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que significa dizer que um Objeto de Valor (Value Object) deve ser 'Imutável' (Immutable)?", 
    "Imutabilidade", 
    [
        "A) Que ele nunca pode ser apagado da memória RAM pelo Garbage Collector.",
        "B) Que após ser criado, seu estado interno não pode mais ser alterado; qualquer modificação deve resultar na criação de uma nova instância do objeto.",
        "C) Que ele não pode ser convertido para formato JSON.",
        "D) Que seu código fonte é protegido contra cópias não autorizadas."
    ], 
    "B", 
    "A imutabilidade garante segurança em ambientes concorrentes, elimina efeitos colaterais indesejados e permite compartilhar instâncias de objetos de valor sem medo de alterações paralelas.", 
    "Exemplo clássico: objetos de data (`LocalDate`) ou dinheiro (`Money`)."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Qual é a principal responsabilidade de uma camada de 'Application Service' (Serviço de Aplicação) em uma arquitetura DDD?", 
    "Serviços de Aplicação", 
    [
        "A) Conter todas as regras de negócio complexas e cálculos fiscais da empresa.",
        "B) Orquestrar o fluxo de tarefas técnicas da aplicação (como coordenar transações, disparar repositórios, chamar serviços de domínio e publicar eventos), sem conter lógica de negócio pura.",
        "C) Renderizar componentes visuais de interface do usuário no navegador.",
        "D) Executar scripts de migração de banco de dados."
    ], 
    "B", 
    "O Serviço de Aplicação é um 'fino condutor' que recebe comandos da camada de interface (API), busca agregados via repositório, invoca o domínio e salva o resultado.", 
    "Ele não toma decisões de negócio; apenas coordena o fluxo."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que é uma 'Domain Exception' (Exceção de Domínio) e como ela se diferencia de erros técnicos?", 
    "Exceções de Domínio", 
    [
        "A) Um erro de sintaxe detectado pelo compilador da linguagem.",
        "B) Uma exceção personalizada que representa a violação de uma regra de negócio (ex: `SaldoInsuficienteException`), comunicando falhas do modelo de forma clara e compreensível.",
        "C) Uma falha física de hardware na placa-mãe do servidor.",
        "D) Um erro de conexão com a rede Wi-Fi corporativa."
    ], 
    "B", 
    "Exceções de domínio fazem parte da Linguagem Ubíqua e informam regras violadas, diferenciando-se de erros técnicos como falhas de conexão de banco ou estouro de memória.", 
    "Permitem tratamento adequado de mensagens de erro para o usuário final."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Como o DDD lida com a consistência de dados em ambientes distribuídos (microsserviços)?", 
    "Consistência em Microsserviços", 
    [
        "A) Utilizando bloqueios pessimistas globais em todas as tabelas de todos os microsserviços.",
        "B) Adotando consistência eventual (eventual consistency) através de Eventos de Domínio e o padrão Sagas, já que transações ACID atômicas distribuídas são inviáveis.",
        "C) Proibindo o uso de bancos de dados em nuvem.",
        "D) Forçando o uso de um único banco de dados monolítico para todos os serviços."
    ], 
    "B", 
    "Em arquiteturas modernas baseadas em Bounded Contexts independentes, a consistência forte ocorre dentro de cada agregado, enquanto entre contextos utiliza-se consistência eventual com eventos.", 
    "Fundamental para escalabilidade horizontal."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que é o padrão 'Saga' frequentemente associado a arquiteturas DDD e Event-Driven?", 
    "Padrão Saga", 
    [
        "A) Uma série épica de livros de ficção científica lida por programadores.",
        "B) Um padrão de gerenciamento de transações distribuídas que coordena uma sequência de passos locais em diferentes microsserviços, executando ações compensatórias caso alguma etapa falhe.",
        "C) Um framework de testes unitários para JavaScript.",
        "D) Um algoritmo de criptografia de ponta a ponta."
    ], 
    "B", 
    "Como não é possível usar transações de banco tradicionais entre microsserviços, a Saga garante a integridade de negócios complexos de forma assíncrona (orquestrada ou coreografada).", 
    "Essencial em arquiteturas de domínios descentralizados."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Qual é o papel do 'Ubiquitous Language Dictionary' (Dicionário de Linguagem Ubíqua) em um projeto?", 
    "Glossário de Linguagem Ubíqua", 
    [
        "A) Traduzir o código fonte para diferentes idiomas humanos.",
        "B) Servir como fonte de verdade viva documentando todos os termos de negócio, conceitos e definições acordados entre desenvolvedores e especialistas do domínio.",
        "C) Substituir a documentação de API do Swagger.",
        "D) Listar todas as senhas de acesso ao servidor de homologação."
    ], 
    "B", 
    "Manter um glossário atualizado evita ambiguidades e garante que todos os envolvidos usem exatamente os mesmos termos nas conversas e no código.", 
    "É um artefato vivo fundamental do DDD."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "O que acontece quando os desenvolvedores ignoram o Design Estratégico do DDD e aplicam apenas o Design Tático?", 
    "Riscos do DDD Parcial", 
    [
        "A) O sistema roda 50% mais rápido em servidores legados.",
        "B) O código interno fica limpo, mas o sistema como um todo continua monolítico, caótico, com acoplamento indesejado entre contextos e forte contaminação conceitual de negócios.",
        "C) O banco de dados relacional se converte automaticamente em NoSQL.",
        "D) Os testes unitários deixam de funcionar completamente."
    ], 
    "B", 
    "O Design Tático cuida das árvores, mas o Design Estratégico cuida da floresta. Ambos são necessários para colher os frutos do Domain-Driven Design.", 
    "A divisão correta de Bounded Contexts é o coração do sucesso arquitetural."
);

addQuestion(
    "Domain-Driven Design (DDD)", 
    "Média", 
    "Por que o Domain-Driven Design é considerado mais do que uma simples 'ferramenta ou biblioteca de software'?", 
    "Filosofia do DDD", 
    [
        "A) Porque ele exige a compra de licenças caras de softwares proprietários.",
        "B) Porque é uma abordagem de modelagem e design centrada no entendimento profundo do negócio, exigindo colaboração humana estreita e mudança na cultura de desenvolvimento.",
        "C) Porque ele funciona sem precisar escrever linhas de código.",
        "D) Porque substitui metodologias ágeis como Scrum e Kanban."
    ], 
    "B", 
    "O DDD conecta a estratégia de negócios da empresa diretamente à implementação técnica, unindo pessoas, linguagem e código em prol de um objetivo comum.", 
    "O código é apenas o reflexo do modelo mental validado do negócio."
);
addQuestion(
    "Domain-Driven Design (DDD)",
    "Média",
    "Como funciona a coordenação em um padrão Saga baseado em orquestração (Orchestration-based Saga)?",
    "Padrão Saga",
    [
        "A) Cada microsserviço ouve eventos de forma descentralizada e decide autonomamente o próximo passo sem um controlador central.",
        "B) Um componente centralizador (o Orquestrador) gerencia explicitamente o fluxo de transações, enviando comandos para os serviços envolvidos e acionando transações compensatórias em caso de falha.",
        "C) O banco de dados bloqueia todas as tabelas globalmente até que o usuário feche o navegador.",
        "D) As requisições são convertidas em código assembly para execução direta no processador."
    ],
    "B",
    "No modelo por orquestração, há um coordenador central que dita o fluxo e sabe exatamente qual passo executar a seguir e quais compensações disparar se houver erro.",
    "Facilita a visualização do fluxo de negócios complexos comparado à coreografia pura."
);

addQuestion(
    "Domain-Driven Design (DDD)",
    "Média",
    "O que diferencia um padrão Saga baseado em coreografia (Choreography-based Saga) da orquestração?",
    "Padrão Saga",
    [
        "A) A coreografia exige licenças de software comercial muito mais caras.",
        "B) Na coreografia não há um coordenador central; cada serviço executa sua tarefa local e publica um evento de domínio, e os demais serviços interessados escutam e reagem a esses eventos de forma descentralizada.",
        "C) A coreografia é usada exclusivamente para interfaces gráficas em React.",
        "D) Na coreografia as transações são sempre síncronas e bloqueantes."
    ],
    "B",
    "Na coreografia, os serviços comunicam-se de forma reativa por meio de eventos, reduzindo o acoplamento de controle, embora possa dificultar o rastreio visual de fluxos muito longos.",
    "Ideal para sistemas altamente desacoplados e orientados a eventos."
);
/* =====================================================
   Bloco 15: SCRUM E EXTREME PROGRAMMING (XP) - 40 QUESTÕES COMPLETAS
===================================================== */

addQuestion(
    "Scrum e XP", 
    "Média", 
    "Qual é a principal responsabilidade do Product Owner (PO) no framework Scrum?", 
    "Papéis no Scrum", 
    [
        "A) Garantir que o time siga rigorosamente os processos tradicionais de gerenciamento de projetos em cascata.",
        "B) Representar os interesses dos stakeholders, gerenciar, detalhar e priorizar o Product Backlog (Fila do Produto).",
        "C) Atuar como líder servente removendo impedimentos técnicos e facilitando os eventos diários.",
        "D) Escrever e executar os testes automatizados de aceitação de código."
    ], 
    "B", 
    "O Product Owner é o único dono do Product Backlog e responsável por maximizar o valor do produto, decidindo o que entra na fila e qual a ordem de prioridade com base no retorno de valor para o negócio.", 
    "O PO responde pelo 'quê' deve ser feito, enquanto o time de desenvolvimento decide o 'como'."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que ocorre tipicamente durante a reunião de Sprint Retrospective (Retrospectiva da Sprint) no Scrum?", 
    "Eventos do Scrum", 
    [
        "A) O time apresenta o incremento de software pronto para os clientes e stakeholders externos.",
        "B) O time de desenvolvimento inspeciona a si próprio, avaliando pessoas, relacionamentos, processos e ferramentas, criando um plano de melhorias para a próxima Sprint.",
        "C) O Scrum Master distribui as tarefas da semana seguinte para cada desenvolvedor.",
        "D) O Product Owner cancela a Sprint caso as metas financeiras não tenham sido atingidas."
    ], 
    "B", 
    "A Retrospectiva é um evento focado em melhoria contínua interna do time, onde se discute o que funcionou bem, o que falhou e o que pode ser aprimorado no processo de trabalho.", 
    "Diferencia-se da Sprint Review, que foca na inspeção do produto entregue."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "No Extreme Programming (XP), o que caracteriza a prática de 'Programação em Par' (Pair Programming)?", 
    "Práticas do XP", 
    [
        "A) Dois desenvolvedores trabalham juntos na mesma estação de trabalho, onde um escreve o código (piloto) e o outro revisa e pensa criticamente em tempo real (observador/copiloto), invertendo os papéis frequentemente.",
        "B) Cada desenvolvedor trabalha em um branch separado e faz um merge ao final do dia.",
        "C) Os desenvolvedores competem para ver quem entrega a mesma feature mais rápido.",
        "D) A equipe se divide em duplas para realizar testes de carga em servidores remotos."
    ], 
    "A", 
    "A programação em par melhora a qualidade do código, reduz a quantidade de defeitos de forma instantânea e promove a disseminação de conhecimento técnico entre os membros da equipe.", 
    "É uma das práticas mais icônicas e debatidas do desenvolvimento ágil."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que compõe o chamado 'Sprint Backlog' em um projeto Scrum?", 
    "Artefatos do Scrum", 
    [
        "A) A lista completa de todos os requisitos desejados para o software ao longo de todo o ciclo de vida do produto.",
        "B) O conjunto de itens do Product Backlog selecionados para a Sprint atual, juntamente com o plano de desenvolvimento necessário para entregar o incremento.",
        "C) O relatório de desempenho financeiro apresentado aos investidores da empresa.",
        "D) A lista de bugs críticos encontrados pelo setor de qualidade em produção."
    ], 
    "B", 
    "O Sprint Backlog pertence exclusivamente ao time de desenvolvimento e detalha o trabalho que a equipe realizará para atingir a Meta da Sprint (Sprint Goal).", 
    "Ele é dinâmico e evolui ao longo da Sprint conforme o time descobre mais sobre o trabalho."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "Quais são os cinco valores fundamentais propostos pelo Extreme Programming (XP)?", 
    "Valores do XP", 
    [
        "A) Custo, Escopo, Prazo, Qualidade e Hierarquia.",
        "B) Comunicação, Simplicidade, Feedback, Coragem e Respeito.",
        "C) Planejamento, Execução, Controle, Monitoramento e Encerramento.",
        "D) Transparência, Inspeção, Adaptação, Velocidade e Previsibilidade."
    ], 
    "B", 
    "Os cinco valores do XP guiam as atitudes e comportamentos da equipe técnica, criando um ambiente colaborativo e altamente adaptável a mudanças.", 
    "Esses valores sustentam as 12 práticas clássicas do XP."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "Qual melhor descreve o papel do Scrum Master em um projeto ágil?", 
    "Papéis no Scrum", 
    [
        "A) Um gerente de projeto tradicional que cobra prazos, delega tarefas e controla horas trabalhadas.",
        "B) Um líder servente (servant leader) que ajuda a remover impedimentos, protege a equipe de interferências externas e promove a adoção do Scrum.",
        "C) O responsable técnico supremo pela arquitetura de código e banco de dados.",
        "D) O representante oficial dos clientes que valida cada linha de código escrita."
    ], 
    "B", 
    "O Scrum Master não manda na equipe; ele serve ao time, facilitando os eventos, garantindo que o Scrum seja compreendido e ajudando a eliminar bloqueios que atrapalham a produtividade.", 
    "Ele atua como um facilitador e guardião do processo ágil."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "No contexto do Extreme Programming (XP), qual é o objetivo da prática de Refatoração Contínua (Refactoring)?", 
    "Práticas do XP", 
    [
        "A) Reescrever completamente o software do zero a cada seis meses para usar novas linguagens.",
        "B) Melhorar a estrutura interna do código existente sem alterar o seu comportamento externo, mantendo-o limpo, legível e livre de dívidas técnicas.",
        "C) Aumentar artificialmente o número de linhas de código para impressionar os gestores.",
        "D) Traduzir comentários em inglês para o idioma nativo da equipe."
    ], 
    "B", 
    "A refatoração constante evita o acúmulo de complexidade desnecessária (dívida técnica), tornando o sistema mais fácil de manter e estender ao longo do tempo.", 
    "No XP, refatorar é uma atividade diária e integrada ao desenvolvimento."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que significa a 'Definição de Pronto' (Definition of Done - DoD) no Scrum?", 
    "Conceitos do Scrum", 
    [
        "A) O momento exato em que o cliente paga a fatura mensal do contrato de software.",
        "B) Uma compreensão compartilhada e formal de todos os critérios de qualidade que um incremento de software deve atender para ser considerado completo e liberável.",
        "C) A quantidade de horas semanais que os desenvolvedores passam na empresa.",
        "D) A autorização dada pelo gerente para iniciar uma nova Sprint."
    ], 
    "B", 
    "A DoD garante transparência e qualidade. Se um item do backlog não atende aos critérios da DoD (ex: código revisado, testes unitários passando, documentado), ele não pode ser considerado pronto nem entregue.", 
    "Diferencia-se da 'Definition of Ready' (DoR), que define quando um item está pronto para entrar na Sprint."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que significa o conceito de 'Timebox' aplicado aos eventos do Scrum?", 
    "Eventos do Scrum", 
    [
        "A) Um cronograma flexível que pode ser estendido caso a reunião não termine.",
        "B) Uma duração máxima fixa alocada para cada evento ou atividade, ajudando a focar, evitar reuniões longas e promover a pontualidade.",
        "C) O prazo de entrega estipulado pelo contrato com o cliente final.",
        "D) Uma ferramenta de controle de ponto dos funcionários."
    ], 
    "B", 
    "Os eventos do Scrum (como a Daily de 15 minutos ou a Planning de até 8 horas para Sprints de um mês) possuem duração máxima estrita (Timebox) para otimizar o tempo e evitar desperdícios.", 
    "Uma vez esgotado o tempo de um evento timeboxed, ele é encerrado."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "Qual prática do Extreme Programming (XP) enfatiza a integração frequente de código várias vezes ao dia, combinada com testes automatizados?", 
    "Práticas do XP", 
    [
        "A) Integração Contínua (Continuous Integration)",
        "B) Cascata Estendida (Extended Waterfall)",
        "C) Planejamento de Longo Prazo (Long-Term Planning)",
        "D) Controle Manual de Mudanças (Change Control Board)"
    ], 
    "A", 
    "A Integração Contínua no XP exige que os desenvolvedores integrem seu código ao repositório principal com alta frequência, rodando suítes de testes automatizados para detectar conflitos e bugs imediatamente.", 
    "Minimiza o pesadelo de integrar códigos divergentes após semanas de trabalho isolado."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que é a prática de 'Desenvolvimento Orientado a Testes' (Test-Driven Development - TDD) no Extreme Programming?", 
    "Práticas do XP", 
    [
        "A) Escrever os testes automatizados somente após todo o código do sistema estar em produção.",
        "B) Escrever o teste automatizado falho antes de escrever o código de produção, implementando apenas o código necessário para passar no teste e depois refatorando.",
        "C) Contratar uma equipe exclusiva de testadores manuais para validar as telas.",
        "D) Testar o software apenas quando o cliente solicitar."
    ], 
    "B", 
    "O ciclo do TDD resume-se em: Vermelho (escreve teste que falha), Verde (escreve código para passar) e Refatorar (limpa o código), garantindo alta testabilidade e design limpo.", 
    "É um dos pilares técnicos mais fortes do XP."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "Qual é o propósito da reunião de 'Sprint Planning' (Planejamento da Sprint) no Scrum?", 
    "Eventos do Scrum", 
    [
        "A) Definir os salários e bônus anuais da equipe de desenvolvimento.",
        "B) Planejar o trabalho a ser realizado na Sprint através de colaboração de todo o Scrum Team, definindo a Meta da Sprint e selecionando os itens do Product Backlog.",
        "C) Avaliar o desempenho individual de cada funcionário da empresa.",
        "D) Apresentar o software finalizado para diretores e clientes externos."
    ], 
    "B", 
    "A Planning estabelece o foco da Sprint. O PO apresenta o que tem mais valor, e o time decide o quanto consegue entregar e como fará o trabalho.", 
    "É um evento timeboxed com duração proporcional ao tamanho da Sprint."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que é o 'Product Backlog' (Fila do Produto) no framework Scrum?", 
    "Artefatos do Scrum", 
    [
        "A) Um documento estático em PDF criado no início do projeto que nunca mais pode ser alterado.",
        "B) Uma lista emergente e ordenada de tudo o que é necessário para o produto, sendo a única fonte de requisitos para quaisquer mudanças a serem feitas.",
        "C) A lista de tarefas técnicas que os programadores executam escondidos do PO.",
        "D) O registro de todos os erros de sistema ocorridos em servidores de produção."
    ], 
    "B", 
    "O Product Backlog é vivo e dinâmico. Ele muda constantemente para refletir o que o produto precisa para ser competitivo e útil.", 
    "Gerenciado exclusivamente pelo Product Owner."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que caracteriza a prática de 'Small Releases' (Pequenas Lançamentos) no Extreme Programming?", 
    "Práticas do XP", 
    [
        "A) Lançar uma nova versão grande do software apenas a cada dois anos.",
        "B) Colocar versões funcionais do software em produção com alta frequência (semanalmente ou até diariamente), reduzindo o escopo de cada entrega.",
        "C) Escrever códigos com o mínimo de linhas possíveis para economizar espaço em disco.",
        "D) Reduzir o salário dos desenvolvedores proporcionalmente ao tamanho do projeto."
    ], 
    "B", 
    "Pequenas liberações garantem feedback rápido dos usuários reais, reduzem riscos de grandes falhas de deploy e geram valor contínuo para o negócio.", 
    "Permite adaptações rápidas baseadas no uso real."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que ocorre durante o evento de 'Sprint Review' (Revisão da Sprint) no Scrum?", 
    "Eventos do Scrum", 
    [
        "A) O time revisa as políticas internas de recursos humanos e férias da empresa.",
        "B) O Scrum Team e os stakeholders inspecionam o incremento de software resultante da Sprint e adaptam o Product Backlog se necessário.",
        "C) O Scrum Master aplica uma prova teórica de Scrum para os desenvolvedores.",
        "D) Os desenvolvedores votam em quem trabalhou mais horas na semana."
    ], 
    "B", 
    "A Review é uma sessão de colaboração e inspeção do produto, onde se demonstra o que foi feito, discute-se o andamento do projeto e ajustam-se os próximos passos com os stakeholders.", 
    "Não deve ser uma reunião puramente formal de aprovação, mas sim um espaço de troca."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que significa a prática de 'On-Site Customer' (Cliente no Local / Presente) no Extreme Programming?", 
    "Práticas do XP", 
    [
        "A) Um cliente misterioso que testa a segurança física da empresa.",
        "B) Ter um especialista de domínio (ou representante real do cliente) disponível em tempo integral junto à equipe de desenvolvimento para esclarecer dúvidas de negócio instantaneamente.",
        "C) Instalar câmeras de segurança na casa dos clientes finais.",
        "D) Realizar reuniões quinzenais por videoconferência com o patrocinador do projeto."
    ], 
    "B", 
    "A presença contínua do cliente elimina atrasos na especificação de requisitos, reduz mal-entendidos e garante que o software construído atenda exatamente às necessidades reais.", 
    "Um dos grandes diferenciais para evitar o desenvolvimento de funcionalidades inúteis."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que é a 'Daily Scrum' (Reunião Diária) e qual é o seu principal objetivo?", 
    "Eventos do Scrum", 
    [
        "A) Uma reunião de 4 horas onde o gerente cobra relatórios individuais de produtividade.",
        "B) Um evento timeboxed de 15 minutos para o time de desenvolvimento inspecionar o progresso em direção à Meta da Sprint e planejar o trabalho para as próximas 24 horas.",
        "C) Uma palestra motivacional obrigatória antes de iniciar o expediente.",
        "D) O momento onde o cliente aprova ou rejeita o código do dia anterior."
    ], 
    "B", 
    "A Daily é para o time de desenvolvimento sincronizar atividades e criar um plano para o dia, ajustando o rumo caso estejam desviando da Meta da Sprint.", 
    "Não é um relatório de status para o chefe, mas sim uma ferramenta de planejamento diário da equipe."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "No Extreme Programming, o que significa a prática de 'Coding Standards' (Padrões de Código)?", 
    "Práticas do XP", 
    [
        "A) Todos os programadores devem usar a mesma marca de computador e teclado mecânico.",
        "B) Acordar e seguir regras consistentes de formatação, nomenclatura e estilo de código em toda a equipe para que qualquer membro possa ler e manter qualquer parte do sistema facilmente.",
        "C) Escrever comentários exclusivamente no idioma latim clássico.",
        "D) Utilizar apenas linguagem de montagem (Assembly) em projetos web."
    ], 
    "B", 
    "Com padrões de código claros, o software parece ter sido escrito por uma única pessoa, facilitando a refatoração e a programação em par.", 
    "Geralmente automatizada com linters e formatadores de código."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que é o 'Incremento' (Increment) no contexto do framework Scrum?", 
    "Artefatos do Scrum", 
    [
        "A) O aumento salarial concedido aos desenvolvedores após entregarem uma versão.",
        "B) Um passo concreto em direção ao objetivo do produto, consistindo em todas as Sprints anteriores somadas ao trabalho concluído na Sprint atual, devendo atender à Definição de Pronto.",
        "C) O acréscimo de novos bugs encontrados pela equipe de testes.",
        "D) O aumento percentual no escopo inicial exigido pelo cliente."
    ], 
    "B", 
    "Cada incremento deve estar utilizável, independentemente de o Product Owner decidir liberá-lo comercialmente ou não.", 
    "Representa a soma de valor funcional entregue."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "No Extreme Programming, o que prega a prática de 'Simple Design' (Design Simples)?", 
    "Práticas do XP", 
    [
        "A) Desenvolver sistemas sem banco de dados e sem interface gráfica.",
        "B) Construir o sistema da forma mais simples possível que atenda aos requisitos atuais, evitando over-engineering (projetar funcionalidades complexas para o 'futuro').",
        "C) Copiar códigos prontos da internet sem entender o funcionamento.",
        "D) Utilizar apenas variáveis de uma única letra nos algoritmos."
    ], 
    "B", 
    "O design simples passa em todos os testes, não contém duplicação, expressa todas as ideias importantes da equipe e minimiza o número de classes e métodos.", 
    "O mantra é: 'Faça a coisa mais simples que possa funcionar'."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "Qual é a atitude correta do Scrum Team em relação ao escopo de uma Sprint após ela ter sido iniciada?", 
    "Conceitos do Scrum", 
    [
        "A) O escopo pode ser alterado livremente pelo Product Owner a qualquer momento do dia.",
        "B) A Sprint Goal não deve ser colocada em risco; o escopo pode ser clarificado e renegociado entre o PO e o Time de Desenvolvimento à medida que mais aprendizados surgem, mantendo a meta.",
        "C) O escopo é totalmente congelado e proibido de sofrer qualquer ajuste sob nenhuma hipótese.",
        "D) O Scrum Master tem poder absoluto para dobrar o escopo na metade da Sprint."
    ], 
    "B", 
    "Flexibilidade com responsabilidade: a meta da Sprint permanece protegida, mas há diálogo contínuo caso detalhes precisem ser ajustados.", 
    "Garante foco sem perder a agilidade."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que caracteriza a prática de 'Metaphor' (Metáfora) no Extreme Programming?", 
    "Práticas do XP", 
    [
        "A) O uso excessivo de figuras de linguagem poéticas na documentação técnica.",
        "B) Encontrar uma história ou vocabulário compartilhado simples que descreva como o sistema funciona, unificando a arquitetura e facilitando a comunicação (semelhante ao conceito de Linguagem Ubíqua do DDD).",
        "C) Utilizar metáforas corporativas para pressionar os funcionários.",
        "D) Criptografar senhas usando mitos gregos."
    ], 
    "B", 
    "A metáfora guia o design do sistema para que todos na equipe tenham uma visão intuitiva de onde cada componente se encaixa.", 
    "Ajuda novos membros a entenderem o sistema rapidamente."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que significa 'Scrum Team' (Time Scrum) e quais papéis o compõem?", 
    "Papéis no Scrum", 
    [
        "A) Apenas os programadores seniores e o gerente financeiro da empresa.",
        "B) Uma unidade coesa composta pelo Product Owner, pelo Scrum Master e pelos Desenvolvedores (Developers), sem sub-equipes ou hierarquias internas.",
        "C) Os consultores externos contratados para auditar a empresa.",
        "D) Apenas o Scrum Master e o Product Owner."
    ], 
    "B", 
    "O Scrum Team é multidisciplinar e auto-organizável, possuindo todas as habilidades necessárias para criar valor a cada Sprint.", 
    "Não existem cargos formais de 'Analista' ou 'Testador' no Scrum; todos são chamados de Desenvolvedores."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "No Extreme Programming, o que significa a prática de 'Collective Code Ownership' (Propriedade Coletiva de Código)?", 
    "Práticas do XP", 
    [
        "A) Nenhum programador é dono de nenhum arquivo; qualquer desenvolvedor pode alterar qualquer linha de código em qualquer parte do sistema a qualquer momento.",
        "B) O código-fonte pertence legalmente a todos os clientes da empresa.",
        "C) Cada desenvolvedor tem direito a apenas um arquivo por projeto.",
        "D) O código só pode ser modificado com autorização expressa do diretor de TI."
    ], 
    "B", 
    "Todos são responsáveis por todo o código. Se alguém encontrar um bug em um módulo feito por outro colega, tem a liberdade e o dever de corrigi-lo.", 
    "Elimina silos de conhecimento na equipe."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "Qual é o significado de 'Velocity' (Velocidade) em projetos que utilizam metodologias ágeis?", 
    "Métricas Ágeis", 
    [
        "A) A velocidade de clock dos processadores dos computadores da equipe.",
        "B) Uma medida da quantidade de trabalho (geralmente em story points) que o time entrega como 'Pronto' em uma Sprint.",
        "C) O tempo médio que um servidor leva para responder a uma requisição HTTP.",
        "D) A rapidez com que o gerente consegue demitir funcionários improdutivos."
    ], 
    "B", 
    "A velocidade ajuda o time a planejar previsivelmente quantas funcionalidades conseguem puxar nas próximas Sprints com base no histórico real.", 
    "Não deve ser usada como métrica de competição entre equipes."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que prega a prática de 'Sustainable Pace' (Ritmo Sustentável / 40-hour week) no Extreme Programming?", 
    "Práticas do XP", 
    [
        "A) Trabalhar 80 horas por semana para entregar o projeto mais rápido.",
        "B) Manter um ritmo de trabalho constante e saudável (geralmente cerca de 40 horas semanais), evitando horas extras excessivas que geram fadiga, esgotamento e queda na qualidade do software.",
        "C) Reduzir o ritmo de entrega para uma linha de código por dia.",
        "D) Parar totalmente o desenvolvimento durante os meses de inverno."
    ], 
    "B", 
    "Profissionais cansados cometem mais erros. O XP defende que equipes descansadas produzem software de muito mais qualidade a longo prazo.", 
    "O lema é: 'Trabalhe como um profissional, durma bem'."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que acontece se uma Sprint for cancelada antes do seu término no Scrum?", 
    "Conceitos do Scrum", 
    [
        "A) Todos os desenvolvedores são demitidos por justa causa.",
        "B) Apenas o Product Owner tem o poder de cancelar a Sprint caso a meta tenha tornado-se obsoleta, reiniciando o processo com um novo planejamento.",
        "C) O projeto inteiro é encerrado definitivamente.",
        "D) O Scrum Master assume o controle do escopo por tempo indeterminado."
    ], 
    "B", 
    "Cancelamentos de Sprint são raros e drásticos, ocorrendo tipicamente se a direção da empresa mudar radicalmente ou se o negócio perder o sentido daquela meta.", 
    "Itens 'prontos' são revisados; os inacabados voltam para o Product Backlog."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "Qual é a relação entre o Scrum e o Extreme Programming (XP) quando aplicados juntos no desenvolvimento de software?", 
    "Scrum e XP", 
    [
        "A) São totalmente incompatíveis; usar Scrum proíbe o uso de práticas do XP.",
        "B) Eles se complementam excelentemente: o Scrum fornece o arcabouço de gestão, papéis e governança do projeto, enquanto o XP fornece as práticas técnicas de engenharia de software (TDD, refatoração, par).",
        "C) O Scrum substitui o código fonte por planilhas e o XP cuida do design visual.",
        "D) O XP é usado apenas por analistas de suporte e o Scrum por diretores."
    ], 
    "B", 
    "Muitas equipes utilizam o que chamam de 'ScrumBan' ou processos ágeis híbridos, onde o Scrum organiza o fluxo de gestão e o XP garante a excelência técnica do código.", 
    "Uma combinação clássica e altamente recomendada na indústria."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que significa 'User Story' (História de Usuário) utilizada no planejamento ágil?", 
    "Planejamento Ágil", 
    [
        "A) Um conto de fadas lido para a equipe relaxar nas sextas-feiras.",
        "B) Uma descrição curta e simples de uma funcionalidade contada a partir da perspectiva do usuário final, focando no valor que ela entrega ('Como [usuário], eu quero [ação], para que [benefício]').",
        "C) Um relatório financeiro anual apresentado aos acionistas.",
        "D) Um manual técnico de engenharia de rede em formato PDF."
    ], 
    "B", 
    "As histórias de usuário servem como base para conversas e estimativas, substituindo os antigos e burocráticos documentos de requisitos detalhados.", 
    "Focam sempre no valor entregue ao cliente."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que é a técnica de estimativa conhecida como 'Planning Poker' (Pôquer de Planejamento)?", 
    "Planejamento Ágil", 
    [
        "A) Um jogo de azar apostando dinheiro real durante as reuniões da empresa.",
        "B) Uma técnica de estimativa colaborativa baseada em consenso, onde os desenvolvedores utilizam cartas numeradas (geralmente com a sequência de Fibonacci) para estimar o esforço de histórias de usuário.",
        "C) Um torneio de videogame realizado após o término de cada Sprint.",
        "D) Uma ferramenta estatística para calcular impostos corporativos."
    ], 
    "B", 
    "O Planning Poker evita o viés de ancoragem (onde o mais sênior fala primeiro), estimulando discussões ricas sobre a complexidade técnica dos itens do backlog.", 
    "Amplamente utilizada em equipes ágeis."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que define o conceito de 'Empirismo' no coração do framework Scrum?", 
    "Pilares do Scrum", 
    [
        "A) Tomar decisões baseadas em intuição pessoal, astrologia e achismos gerenciais.",
        "B) O processo de tomar decisões com base no que é conhecido, na experiência passada e na observação direta dos fatos, sustentado pelos pilares de Transparência, Inspeção e Adaptação.",
        "C) Seguir cegamente manuais teóricos escritos há 50 anos.",
        "D) Controlar rigorosamente cada minuto de trabalho dos funcionários via spyware."
    ], 
    "B", 
    "Como o desenvolvimento de software ocorre em ambientes incertos e complexos, o Scrum usa o controle de processo empírico para testar e adaptar ciclos curtos.", 
    "Transparência, Inspeção e Adaptação são inegociáveis."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "Qual é o papel da 'Transparência' dentro dos pilares empíricos do Scrum?", 
    "Pilares do Scrum", 
    [
        "A) Permitir que portas de vidro sejam instaladas em todas as salas de reunião.",
        "B) Exigir que os aspectos significativos do processo sejam visíveis para aqueles responsáveis pelos resultados, utilizando um vocabulário e padrões compartilhados.",
        "C) Publicar o código-fonte de propriedade intelectual na internet aberta.",
        "D) Divulgar os salários individuais de todos os funcionários publicamente."
    ], 
    "B", 
    "Sem transparência, a inspeção e a adaptação tornam-se cegas e ineficazes, gerando falsas impressões sobre o andamento do projeto.", 
    "Artefatos como o Product Backlog e o Sprint Backlog devem ser totalmente visíveis."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que significa o pilar de 'Inspeção' no Scrum?", 
    "Pilares do Scrum", 
    [
        "A) Fiscalizar o crachá de entrada dos funcionários na catraca da empresa.",
        "B) Examinar com frequência os artefatos do Scrum e o progresso em direção à Meta da Sprint para detectar variações indesejadas ou problemas no processo.",
        "C) Contratar auditores fiscais externos para verificar os impostos.",
        "D) Realizar testes toxicológicos surpresa nos programadores."
    ], 
    "B", 
    "A inspeção não deve ser tão frequente a ponto de atrapalhar o trabalho, mas deve ocorrer regularmente nos eventos oficiais do Scrum (Daily, Review, Retrospective).", 
    "Permite identificar desvios precocemente."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "Qual é o papel da 'Adaptação' no ciclo empírico do Scrum?", 
    "Pilares do Scrum", 
    [
        "A) Adaptar o escritório para climas frios ou quentes.",
        "B) Ajustar um processo ou o material sob trabalho o mais rápido possível caso a inspeção aponte que um ou mais aspectos de um processo desviaram dos limites aceitáveis.",
        "C) Mudar a linguagem de programação do projeto toda semana.",
        "D) Demitir a equipe caso ocorra um único erro em produção."
    ], 
    "B", 
    "A adaptação é a ação corretiva imediata tomada com base nos insights gerados durante a inspeção (frequentemente tratada na Retrospectiva).", 
    "Fecha o ciclo do empirismo: Transparência -> Inspeção -> Adaptação."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que significa a prática de 'Refactoring' combinada com 'Automated Tests' no XP?", 
    "Práticas do XP", 
    [
        "A) Que podemos alterar o código com total segurança sabendo que os testes automatizados avisarão imediatamente se alguma funcionalidade existente quebrou.",
        "B) Que os testes devem ser reescritos do zero toda vez que o código for salvo.",
        "C) Que o cliente é quem deve executar os testes de refatoração manualmente.",
        "D) Que o compilador se encarrega de reescrever o código otimizado."
    ], 
    "A", 
    "Testes automatizados robustos são a rede de segurança indispensável para realizar refatorações profundas sem medo de introduzir regressões no sistema.", 
    "Código limpo sem testes é frágil; testes sem código limpo são insustentáveis."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "Qual é a duração máxima recomendada para uma Sprint no framework Scrum oficial?", 
    "Duração das Sprints", 
    [
        "A) Exatamente um ano civil.",
        "B) Um mês ou menos, sendo um período fixo durante o qual um incremento de produto 'pronto', utilizável e liberável é criado.",
        "C) Exatamente três dias úteis.",
        "D) O tempo que o cliente demorar para pagar o projeto."
    ], 
    "B", 
    "Sprints curtas limitam o risco a um escopo menor e fornecem feedback frequente. Uma vez iniciada uma Sprint, sua duração é fixa e não pode ser alterada.", 
    "Sprints de 2 semanas são as mais comuns na indústria."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que caracteriza o conceito de 'Auto-organização' (Self-Organization) do Time de Desenvolvimento no Scrum?", 
    "Conceitos do Scrum", 
    [
        "A) Cada desenvolvedor escolhe se quer trabalhar ou ficar em casa dormindo.",
        "B) A equipe decide internamente quem faz o quê, como o trabalho é executado e como transformar o Product Backlog em Incremento, sem precisar de ordens de gerentes externos.",
        "C) O Scrum Master define todas as tarefas diárias de cada membro.",
        "D) Os clientes controlam diretamente as tarefas de programação de cada hora."
    ], 
    "B", 
    "Times auto-organizados possuem autonomia e responsabilidade coletiva, resultando em maior motivação, criatividade e produtividade na entrega de software.", 
    "O Scrum dá autonomia sobre o 'como', mantendo alinhamento no 'quê'."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "Por que o Extreme Programming (XP) é considerado uma metodologia focada em feedback rápido?", 
    "Filosofia do XP", 
    [
        "A) Porque utiliza microfones de alta sensibilidade nas estações de trabalho.",
        "B) Porque incentiva testes automatizados constantes, integrações diárias, pequenas liberações frequentes e a presença contínua do cliente, encurtando o ciclo entre escrever código e saber se ele funciona e agrega valor.",
        "C) Porque os gerentes aplicam pesquisas de satisfação diárias aos funcionários.",
        "D) Porque o software avisa por voz toda vez que há um erro de sintaxe."
    ], 
    "B", 
    "O feedback rápido é o antídoto contra o desperdício em desenvolvimento de software, permitindo corrigir falhas de entendimento ou de código em minutos, e não em meses.", 
    "Um dos pilares fundamentais da filosofia ágil."
);

addQuestion(
    "Scrum e XP", 
    "Média", 
    "O que significa dizer que o Scrum é 'leve' e 'fácil de entender, mas difícil de dominar'?", 
    "Filosofia do Scrum", 
    [
        "A) Que ele exige o uso de equipamentos leves de informática e mesas portáteis.",
        "B) Que suas regras e guias oficiais são concisos, mas sua aplicação prática exige mudança cultural profunda, disciplina comportamental e maturidade organizacional para lidar com pessoas e processos complexos.",
        "C) Que qualquer estagiário consegue gerenciar projetos complexos sem treinamento.",
        "D) Que o framework ocupa pouco espaço de armazenamento em servidores web."
    ], 
    "B", 
    "Muitas empresas adotam as cerimônias do Scrum superficialmente (chamado de 'ScrumBut'), mas falham em abraçar a cultura ágil subjacente.", 
    "Dominar o Scrum exige resiliência, transparência e melhoria contínua genuína."
);
addQuestion(
    "Scrum e XP",
    "Média",
    "Como o Extreme Programming (XP) aplica o conceito de feedback rápido na prática?",
    "Filosofia do XP",
    [
        "A) Aguardando o término total do projeto de dois anos para só então entregar ao cliente.",
        "B) Através de testes automatizados executados a cada alteração, pequenas liberações frequentes em produção, programação em par e feedback contínuo do cliente no local.",
        "C) Fazendo pesquisas de satisfação por e-mail anualmente.",
        "D) Contratando gerentes para fiscalizar o tempo de pausa dos programadores."
    ],
    "B",
    "O ciclo de feedback rápido do XP permite detectar e corrigir erros em minutos ou horas, em vez de semanas ou meses, garantindo o alinhamento constante com as necessidades reais do negócio.",
    "Reduz drasticamente o retrabalho e o risco de falhas em produção."
);

/* =====================================================
    Blcoo 16: TESTES DE SOFTWARE - 40 QUESTÕES COMPLETAS
===================================================== */

addQuestion(
    "Testes de Software", 
    "Média", 
    "Qual é a principal diferença conceitual entre testes de caixa preta (black-box) e testes de caixa branca (white-box)?", 
    "Caixa Preta vs Caixa Branca", 
    [
        "A) O teste de caixa preta é feito apenas em servidores de produção, enquanto o de caixa branca roda localmente.",
        "B) O teste de caixa preta valida a funcionalidade externa e os requisitos do sistema sem conhecer o código interno, enquanto o teste de caixa branca examina a estrutura interna, lógica e caminhos do código-fonte.",
        "C) O teste de caixa preta é totalmente automatizado e o de caixa branca é executado exclusivamente de forma manual.",
        "D) Não há diferença prática; ambos utilizam os mesmos algoritmos de cobertura de código."
    ], 
    "B", 
    "Nos testes de caixa preta (especificação), o testador avalia entradas e saídas baseando-se nos requisitos funcionais. Nos testes de caixa branca (estruturais), o testador conhece o código e escreve casos para cobrir ramificações, loops e linhas de código.", 
    "Testes unitários costumam ser de caixa branca, enquanto testes de aceitação e sistema tendem a ser de caixa preta."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "No contexto da pirâmide de testes de software, qual é a principal característica dos testes unitários (Unit Tests)?", 
    "Pirâmide de Testes", 
    [
        "A) São testes lentos que validam a integração completa entre o banco de dados e a interface gráfica.",
        "B) São testes de baixo nível, rápidos e isolados que verificam o comportamento de pequenos blocos de código (como funções ou métodos individuais).",
        "C) São executados manualmente por usuários finais em ambiente de homologação.",
        "D) Substituem completamente a necessidade de testes de sistema e de regressão."
    ], 
    "B", 
    "Os testes unitários formam a base da pirâmide de testes. Devem ser executados em grande quantidade, rodar em milissegundos e isolar dependências externas utilizando mocks ou stubs.", 
    "Uma boa suíte de testes unitários detecta regressões imediatamente após alterações no código."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que significa o conceito de 'TDD' (Test-Driven Development) no ciclo de desenvolvimento de software?", 
    "TDD", 
    [
        "A) Desenvolver todo o sistema primeiro e escrever os testes automatizados apenas após o deploy em produção.",
        "B) Uma técnica onde os testes automatizados são escritos antes do código de produção, seguindo o ciclo: falhar (Red), passar (Green) e refatorar (Refactor).",
        "C) Um método de teste baseado em carga para medir a tolerância a falhas de servidores web.",
        "D) Documentar os requisitos do cliente utilizando diagramas de casos de uso em UML."
    ], 
    "B", 
    "No TDD, o desenvolvedor primeiro escreve um teste que falha para uma funcionalidade desejada, depois escreve o código mínimo necessário para fazer o teste passar, e por fim refatora o código mantendo-o limpo.", 
    "O TDD ajuda a projetar códigos mais desacoplados e altamente testáveis desde a concepção."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "Qual é o principal objetivo dos testes de integração em uma aplicação?", 
    "Testes de Integração", 
    [
        "A) Garantir que métodos individuais em classes isoladas funcionem sem erros de sintaxe.",
        "B) Verificar se diferentes módulos, componentes ou serviços do sistema (como a comunicação entre a API e o banco de dados) funcionam corretamente quando combinados.",
        "C) Validar a experiência visual e o design responsivo em diferentes tamanhos de tela.",
        "D) Testar o comportamento do aplicativo sob estresse extremo de requisições simultâneas."
    ], 
    "B", 
    "Enquanto o teste unitário isola as partes, o teste de integração assegura que a engrenagem conjunta funcione — por exemplo, testando se um repositório consegue persistir dados reais no banco de dados sem quebrar.", 
    "Eles identificam falhas de interface ou contratos entre serviços que os testes unitários não conseguem pegar."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que avalia o tipo de teste conhecido como 'Teste de Regressão'?", 
    "Testes de Regressão", 
    [
        "A) Se o software consegue voltar para uma versão anterior em caso de falha crítica no servidor.",
        "B) Se novas alterações no código (correções de bugs ou novas features) quebraram funcionalidades que já funcionavam anteriormente.",
        "C) Se a velocidade de carregamento regrediu após a otimização de imagens.",
        "D) O nível de satisfação dos usuários antigos em relação aos novos menus do sistema."
    ], 
    "B", 
    "O teste de regressão é executado sempre que há uma mudança no código para garantir que o comportamento existente permaneceu intacto. A automação é fundamental para tornar esse processo viável.", 
    "Suítes de testes de regressão automatizadas economizam centenas de horas de testes manuais."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "Qual é a finalidade de utilizar 'Mocks' (ou Dublês de Teste) durante a execução de testes unitários?", 
    "Mocks e Stubs", 
    [
        "A) Simular o comportamento de componentes ou dependências externas complexas (como APIs de pagamento ou conexões de banco de dados) de forma controlada e rápida.",
        "B) Gerar senhas criptografadas aleatórias para testes de segurança de intrusão.",
        "C) Criar cópias de backup automáticas do código-fonte para o GitHub.",
        "D) Traduzir mensagens de erro do inglês para o português no console."
    ], 
    "A", 
    "Mocks permitem isolar a unidade que está sendo testada, simulando respostas e evitando dependências lentas ou instáveis (como requisições reais de rede ou operações pesadas de disco).", 
    "O uso excessivo de mocks pode indicar que o código possui forte acoplamento e precisa de refatoração."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que mede a métrica de 'Cobertura de Código' (Code Coverage), como a fornecida por ferramentas como JaCoCo ou Istanbul?", 
    "Cobertura de Código", 
    [
        "A) A porcentagem exata de bugs corrigidos pela equipe de QA em um sprint.",
        "B) A proporção de linhas, instruções ou ramificações do código-fonte que foram executadas ao menos uma vez durante a bateria de testes automatizados.",
        "C) O espaço em disco ocupado pelos arquivos de teste em comparação com o código de produção.",
        "D) O tempo total de execução da suíte de testes em segundos."
    ], 
    "B", 
    "A cobertura de código aponta quais partes do sistema passaram pelos testes. Alta cobertura não garante ausência total de bugs, mas indica quais trechos do código estão desprotegidos contra falhas.", 
    "Deve ser tratada como um indicador de qualidade, e não como uma meta absoluta de perfeição."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "Qual é o foco principal dos chamados 'Testes de Aceitação' (Acceptance Testing)?", 
    "Testes de Aceitação", 
    [
        "A) Verificar se a lógica matemática de funções matemáticas internas está correta.",
        "B) Validar se o sistema atende aos requisitos de negócio e se está pronto para ser aceito pelo cliente ou usuário final.",
        "C) Testar a robustez do servidor contra quedas de energia no data center.",
        "D) Analisar vulnerabilidades de injeção de SQL no backend."
    ], 
    "B", 
    "Os testes de aceitação focam nos critérios de valor de negócio. Muitas vezes são expressos no formato Behavior-Driven Development (BDD) utilizando sintaxe Gherkin (Dado-Quando-Então).", 
    "Garantem que o software construído é exatamente o que o cliente pediu e especificou."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "No contexto de testes de software não funcionais, o que avalia um 'Teste de Carga' (Load Testing)?", 
    "Testes Não Funcionais", 
    [
        "A) A capacidade do sistema de suportar uma carga esperada de usuários e transações simultâneas, medindo o desempenho sob estresse operacional.",
        "B) O peso físico dos servidores em racks metálicos dentro de uma sala climatizada.",
        "C) A quantidade de linhas de código que cada desenvolvedor consegue commitar por dia.",
        "D) A facilidade de uso e acessibilidade da interface para pessoas com deficiência visual."
    ], 
    "A", 
    "O teste de carga simula o tráfego real ou projetado para identificar gargalos de performance, tempos de resposta lentos e limites operacionais antes que o sistema vá para produção.", 
    "É um pilar essencial para sistemas corporativos que recebem alta concorrência de acessos."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que caracteriza a prática de Integração Contínua (CI) em relação aos testes automatizados?", 
    "Integração Contínua", 
    [
        "A) Executar testes manuais de homologação uma vez a cada semestre antes de liberar o sistema.",
        "B) Automatizar a execução de toda a suíte de testes sempre que novos códigos são enviados (pushed) para o repositório compartilhado, garantindo feedback rápido sobre falhas.",
        "C) Permitir que o código seja enviado para produção sem passar por validações prévias.",
        "D) Sincronizar branches locais via git fetch de forma manual."
    ], 
    "B", 
    "A Integração Contínua (gerenciada por ferramentas como GitHub Actions, GitLab CI ou Jenkins) roda os testes automaticamente a cada commit, bloqueando a entrada de código que quebre o sistema.", 
    "Garante que o repositório principal permaneça sempre em um estado saudável e executável."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que é um 'Teste de Sistema' (System Testing) no ciclo de vida de desenvolvimento de software?", 
    "Testes de Sistema", 
    [
        "A) Testar apenas uma única função matemática isolada no código.",
        "B) Testar o sistema integrado como um todo para verificar se ele atende aos requisitos especificados, avaliando tanto comportamentos funcionais quanto não funcionais em um ambiente semelhante ao de produção.",
        "C) O teste executado exclusivamente pelo desenvolvedor em sua máquina local antes do commit.",
        "D) A verificação dos componentes físicos de hardware do servidor web."
    ], 
    "B", 
    "O teste de sistema é tipicamente executado por uma equipe independente de QA, cobrindo o software completo em uma visão de caixa preta.", 
    "Valida o produto integrado frente à especificação técnica e de negócios."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que diferencia um 'Stub' de um 'Mock' em testes unitários?", 
    "Mocks vs Stubs", 
    [
        "A) Um Stub fornece respostas pré-programadas para chamadas feitas durante o teste (estado), enquanto um Mock também verifica expectativas de comportamento (ex: se um método foi chamado exatamente X vezes).",
        "B) O Stub serve para bancos de dados NoSQL e o Mock para bancos relacionais.",
        "C) O Stub é executado manualmente e o Mock é automatizado.",
        "D) Não há diferença; são termos estritamente sinônimos na literatura de testes."
    ], 
    "A", 
    "Embora ambos sejam dublês de teste, o Mock foca em verificação de comportamento (comportamento esperado), enquanto o Stub apenas alimenta a unidade com dados controlados.", 
    "Conceito muito importante em frameworks como Mockito ou Jest."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que avalia o 'Teste de Estresse' (Stress Testing) dentro dos testes de desempenho?", 
    "Testes de Estresse", 
    [
        "A) O nível de estresse emocional da equipe de desenvolvimento sob pressão de entrega.",
        "B) Submeter o sistema a cargas extremas ou superiores aos limites esperados de projeto para observar como ele lida com falhas, se recupera e qual é o seu ponto de ruptura (breaking point).",
        "C) Medir a velocidade de digitação dos operadores do sistema.",
        "D) Verificar se o software funciona corretamente em computadores antigos."
    ], 
    "B", 
    "O teste de estresse ajuda a entender o comportamento do sistema sob condições severas, identificando vazamentos de memória, travamentos ou falhas em cascata.", 
    "Diferente do teste de carga, que mede o comportamento sob carga nominal esperada."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que é o 'Behavior-Driven Development' (BDD) e qual é o seu principal foco nos testes?", 
    "BDD", 
    [
        "A) Um método focado exclusivamente em otimizar consultas SQL lentas.",
        "B) Uma extensão do TDD que incentiva a colaboração entre desenvolvedores, QA e negócios, descrevendo o comportamento do software através de especificações legíveis por humanos (Gherkin).",
        "C) Um padrão de arquitetura para construção de aplicativos móveis.",
        "D) Um framework para testes de carga em redes corporativas."
    ], 
    "B", 
    "O BDD utiliza cenários baseados em 'Dado / Quando / Então' (Given / When / Then), servindo simultaneamente como documentação viva, especificação executável e teste de aceitação.", 
    "Aproxima a linguagem de negócio da automação de testes."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que é o 'Smoke Testing' (Teste de Fumaça) no processo de liberação de software?", 
    "Smoke Testing", 
    [
        "A) Verificar se há superaquecimento e fumaça física nos circuitos elétricos do servidor.",
        "B) Uma bateria rápida e rasa de testes executada logo após um novo build para verificar se as funcionalidades críticas mais importantes funcionam sem travamentos óbvios antes de rodar testes mais profundos.",
        "C) Um teste de segurança focado em invasões cibernéticas.",
        "D) O teste de usabilidade feito por fumantes na área de descanso da empresa."
    ], 
    "B", 
    "O nome vem da engenharia elétrica (se liga o aparelho e sai fumaça, ele já está reprovado). No software, se o sistema nem abre a tela de login, o build é rejeitado imediatamente.", 
    "Economiza tempo precioso ao barrar builds quebrados logo na origem."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que é o 'Sanity Testing' (Teste de Sanidade) e quando ele é aplicado?", 
    "Sanity Testing", 
    [
        "A) Um teste psiquiátrico aplicado para contratar novos testadores de software.",
        "B) Um teste de verificação rápido e focado realizado após uma correção de bug específica ou alteração menor, para checar se aquela mudança resolveu o problema sem estragar o entorno imediato.",
        "C) Um teste de carga executado com milhões de usuários simultâneos.",
        "D) Uma validação de sintaxe feita pelo compilador Java."
    ], 
    "B", 
    "O sanity testing é um subconjunto restrito do teste de regressão, usado quando uma correção rápida foi aplicada e precisamos confirmar se a 'sanidade' do módulo afetado foi mantida.", 
    "É mais rápido e específico que um teste de regressão completo."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que avalia um 'Teste de Usabilidade' (Usability Testing)?", 
    "Testes de Usabilidade", 
    [
        "A) Se o código fonte está bem estruturado para ser lido por outros programadores.",
        "B) A facilidade, intuição e eficiência com que os usuários finais conseguem interagir com a interface do software para atingir seus objetivos.",
        "C) A compatibilidade do banco de dados relacional com drivers ODBC.",
        "D) O consumo de memória RAM do navegador durante a navegação."
    ], 
    "B", 
    "O teste de usabilidade foca na experiência do usuário (UX), avaliando se o design é claro, se há frustrações na navegação e se o sistema é acessível.", 
    "Geralmente envolve usuários reais observados por especialistas de UX."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que caracteriza um 'Teste de Segurança' (Security Testing)?", 
    "Testes de Segurança", 
    [
        "A) Verificar se as portas físicas do escritório estão trancadas com cadeado.",
        "B) Identificar falhas, vulnerabilidades, brechas de injeção de código, problemas de autenticação e riscos de invasão para proteger o sistema contra ameaças maliciosas.",
        "C) Garantir que todos os funcionários façam backup diário em pen drives.",
        "D) Testar se o sistema consegue rodar sem conexão com a internet."
    ], 
    "B", 
    "Testes de segurança englobam análises estáticas de código (SAST), dinâmicas (DAST) e testes de penetração (Pentest) para blindar a aplicação contra ataques.", 
    "Crucial em sistemas que lidam com dados sensíveis e LGPD."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que avalia um 'Teste de Recuperação' (Recovery Testing)?", 
    "Testes de Recuperação", 
    [
        "A) Se o time de desenvolvimento consegue recuperar arquivos apagados da Lixeira do Windows.",
        "B) A capacidade do sistema de se recuperar de falhas de hardware, quedas de rede, perda de energia ou travamentos abruptos, voltando a operar de forma íntegra e consistente.",
        "C) A velocidade de recuperação de senhas esquecidas pelos usuários via e-mail.",
        "D) O tempo necessário para reinstalar o sistema operacional do servidor."
    ], 
    "B", 
    "O teste de recuperação força falhas no sistema para validar se os mecanismos de tolerância a falhas, transações pendentes e logs de auditoria funcionam perfeitamente no restabelecimento.", 
    "Essencial para alta disponibilidade."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que significa 'Test Coverage' baseado em critérios estruturais como 'Branch Coverage' (Cobertura de Desvios)?", 
    "Cobertura de Desvios", 
    [
        "A) Medir quantas ramificações do controle de versão do Git foram fundidas.",
        "B) Garantir que cada desvio condicional (como cada ramo `true` e `false` de estruturas `if/else` ou `switch`) tenha sido executado ao menos uma vez pelos testes.",
        "C) Contar o número de arquivos criados dentro da pasta de testes.",
        "D) Medir a largura da árvore de diretórios do projeto."
    ], 
    "B", 
    "A cobertura de desvios é mais rigorosa do que a mera cobertura de linhas, pois força o testador a validar os cenários alternativos de tomada de decisão no código.", 
    "Ajuda a encontrar bugs lógicos ocultos."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que é o princípio da 'Exaustividade Impossível' (Testes não podem ser exaustivos) nos fundamentos de teste?", 
    "Princípios de Teste", 
    [
        "A) Que é proibido testar mais de 10 vezes a mesma funcionalidade.",
        "B) Que testar tudo (todas as combinações possíveis de entradas e pré-condições) é inviável para sistemas complexos, exigindo que o testador utilize análise de valor limite e partição de equivalência.",
        "C) Que os testes automatizados devem durar exatamente 24 horas ininterruptas.",
        "D) Que o software nunca precisará ser testado após o primeiro deploy."
    ], 
    "B", 
    "Como o número de caminhos possíveis é astronômico, os engenheiros de teste priorizam os casos de maior risco e impacto para otimizar o esforço.", 
    "Um dos princípios fundamentais definidos pelo ISTQB."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que significa a técnica de design de teste chamada 'Partição de Equivalência' (Equivalence Partitioning)?", 
    "Partição de Equivalência", 
    [
        "A) Dividir o banco de dados em partes iguais para balanceamento de carga.",
        "B) Dividir o domínio de entradas de dados em classes ou partições equivalentes, de modo que se espera que qualquer valor de uma partição se comporte da mesma forma, reduzindo o número de casos de teste necessários.",
        "C) Distribuir a equipe de testes em grupos de mesma produtividade.",
        "D) Separar códigos legados de códigos modernos."
    ], 
    "B", 
    "Se um campo aceita idades de 18 a 65 anos, dividimos em partições válidas (ex: 30) e inválidas (ex: 10 ou 70), testando um representante de cada grupo em vez de testar todos os números.", 
    "Economiza tempo sem perder eficácia analítica."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que é a técnica de teste de 'Análise de Valor Limite' (Boundary Value Analysis - BVA)?", 
    "Análise de Valor Limite", 
    [
        "A) Analisar o limite de orçamento financeiro alocado para o projeto de testes.",
        "B) Uma técnica complementar à partição de equivalência focada em testar os valores exatos nas fronteiras (limites) das partições, onde é estatisticamente mais provável ocorrerem erros de programação.",
        "C) Medir o limite de velocidade da conexão de rede do servidor.",
        "D) Controlar o horário limite de expediente dos testadores."
    ], 
    "B", 
    "Se um campo aceita valores de 1 a 100, testamos os limites: 0, 1, 2, 99, 100 e 101. Erros de operador relacional (`>` vs `>=`) aparecem nessas fronteiras.", 
    "Uma das técnicas de caixa preta mais poderosas e utilizadas."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que caracteriza a abordagem de 'Testes Exploratórios' (Exploratory Testing)?", 
    "Testes Exploratórios", 
    [
        "A) Explorar a galáxia usando simulações espaciais em software.",
        "B) Uma abordagem onde o aprendizado simultâneo, o design de testes e a execução ocorrem em conjunto, sem scripts pré-escritos, dependendo da intuição, experiência e criatividade do testador.",
        "C) Testar aleatoriamente botões da tela sem nenhum critério de qualidade.",
        "D) Enviar robôs exploradores para buscar bugs em servidores remotos."
    ], 
    "B", 
    "No teste exploratório, o testador investiga o software ativamente como um detetive, adaptando seus testes com base no que descobre a cada passo.", 
    "Excelente para encontrar bugs complexos que scripts rígidos não cobrem."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que é um 'Bug' ou Defeito de Software?", 
    "Defeitos de Software", 
    [
        "A) Um inseto real que entrou na carcaça do computador e fechou curto-circuito.",
        "B) Uma discrepância entre o comportamento real observado do software e o comportamento esperado especificado nos requisitos do sistema.",
        "C) Uma linha de código escrita em linguagem de programação obsoleta.",
        "D) Um atraso na entrega de relatórios gerenciais."
    ], 
    "B", 
    "O defeito é a manifestação de um erro (falha humana) cometido no código ou na especificação, que causa um comportamento incorreto quando executado.", 
    "O ciclo padrão envolve: Relatar -> Reproduzir -> Corrigir -> Retestar."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "Qual é a importância da 'Pirâmide de Testes' proposta por Mike Cohn?", 
    "Pirâmide de Testes", 
    [
        "A) Indicar a forma geométrica que os diagramas UML devem ter.",
        "B) Orientar que a base da estratégia de testes deve ser composta por muitos testes unitários (rápidos e baratos), seguidos por testes de integração intermediários, e poucos testes de ponta a ponta (E2E) no topo (lentos e caros).",
        "C) Mostrar que testes manuais devem ser o núcleo de qualquer projeto moderno.",
        "D) Definir a hierarquia de cargos entre desenvolvedores e testadores."
    ], 
    "B", 
    "Inverter a pirâmide (fazer muitos testes E2E e poucos unitários) cria o chamado 'Anti-pattern do Sorvete de Casquinha', resultando em builds lentos, frágeis e caros de manter.", 
    "Equilibrar os níveis da pirâmide é chave para a agilidade."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que são 'Testes de Ponta a Ponta' (End-to-End / E2E Tests)?", 
    "Testes E2E", 
    [
        "A) Testar apenas o início e o fim de uma linha de código em Java.",
        "B) Testar o fluxo completo da aplicação simulando o comportamento real do usuário (desde a interface web/mobile, passando por todas as APIs, serviços e banco de dados).",
        "C) Testar cabos de rede de fibra óptica em grandes data centers.",
        "D) O teste de unidade isolado feito com mocks."
    ], 
    "B", 
    "Ferramentas como Cypress, Playwright ou Selenium são usadas para testes E2E. Eles validam se o sistema integrado funciona do ponto de vista do usuário final.", 
    "São mais custosos de manter e mais lentos, por isso ficam no topo da pirâmide."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que significa o princípio da 'Ilacão de Pesticidas' (Pesticide Paradox) nos testes de software?", 
    "Princípios de Teste", 
    [
        "A) Que os computadores precisam de inseticida para afastar pragas virtuais.",
        "B) Que repetir exatamente os mesmos casos de teste indefinidamente fará com que eles deixem de encontrar novos bugs, assim como os insetos criam imunidade a um pesticida repetido.",
        "C) Que os testes devem ser aplicados apenas em ambientes agrícolas.",
        "D) Que o código deve ser limpo com produtos químicos especiais."
    ], 
    "B", 
    "Para superar o paradoxo do pesticida, os casos de teste precisam ser revisados, atualizados e expandidos regularmente, além de incorporar novos cenários exploratórios.", 
    "Testes estáticos não encontram novos defeitos com o tempo."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que avaliam os 'Testes de Compatibilidade' (Compatibility Testing)?", 
    "Testes de Compatibilidade", 
    [
        "A) Se dois desenvolvedores conseguem trabalhar na mesma mesa sem brigar.",
        "B) Se o software funciona corretamente em diferentes ambientes de hardware, sistemas operacionais, navegadores web, dispositivos móveis e resoluções de tela.",
        "C) Se a linguagem de programação é compatível com o sistema operacional MS-DOS.",
        "D) Se o contrato comercial é aceito pelo departamento jurídico."
    ], 
    "B", 
    "Garante que os usuários tenham a mesma experiência fluida independentemente de estarem usando Chrome, Safari, Windows, iOS ou Android.", 
    "Essencial para aplicações web e mobile modernas."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que caracteriza a prática de 'Test Automation' (Automação de Testes)?", 
    "Automação de Testes", 
    [
        "A) Substituir completamente os programadores por inteligência artificial.",
        "B) Utilizar software de automação para executar suítes de teste predefinidas, comparar resultados esperados com reais e gerar relatórios de qualidade sem intervenção humana manual.",
        "C) Ligar e desligar os servidores automaticamente toda meia-noite.",
        "D) Enviar e-mails automáticos de cobrança para os clientes."
    ], 
    "B", 
    "A automação é essencial para escalabilidade, permitindo rodar centenas de testes em minutos, viabilizando regressões contínuas e entregas rápidas (CI/CD).", 
    "Não elimina 100% dos testes manuais, mas absorve as tarefas repetitivas."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que é a 'Fase de Testes Alfa' (Alpha Testing)?", 
    "Fases de Testes", 
    [
        "A) O primeiro teste feito por robôs em laboratório.",
        "B) Um teste de aceitação realizado por potenciais usuários ou clientes no próprio local de desenvolvimento (dentro da organização criadora), antes do lançamento público.",
        "C) O teste final executado após o software já estar disponível nas lojas de aplicativos.",
        "D) O teste de unidade feito pelo estagiário no primeiro dia de trabalho."
    ], 
    "B", 
    "No teste alfa, a equipe de desenvolvimento observa os usuários reais usando o sistema em ambiente controlado para capturar feedbacks imediatos de usabilidade.", 
    "Antecede o teste beta (que vai para o público externo)."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que caracteriza a 'Fase de Testes Beta' (Beta Testing)?", 
    "Fases de Testes", 
    [
        "A) Testar o software utilizando apenas a letra grega beta.",
        "B) Liberar o software para um grupo selecionado de usuários externos testarem em seus próprios ambientes reais de uso, fornecendo feedback de bugs e melhorias antes do lançamento geral.",
        "C) O teste interno feito exclusivamente pelos diretores da empresa.",
        "D) A fase onde o código é apagado do servidor."
    ], 
    "B", 
    "O teste beta expõe o produto a condições reais e variadas que a empresa não conseguiria simular internamente.", 
    "Muito comum em sistemas operacionais, jogos e grandes aplicativos comerciais."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que significa 'Shift-Left Testing' (Deslocamento para a Esquerda) na engenharia de qualidade?", 
    "Shift-Left Testing", 
    [
        "A) Mover fisicamente as mesas dos testadores para o lado esquerdo da sala.",
        "B) A prática de iniciar as atividades de teste e validação o mais cedo possível no ciclo de vida de desenvolvimento (desde a concepção e revisão de requisitos), e não apenas no final.",
        "C) Atrasar os testes para o último dia antes do deploy.",
        "D) Clicar sempre no botão esquerdo do mouse durante os testes."
    ], 
    "B", 
    "Quanto mais cedo um defeito é encontrado (ex: na fase de especificação ou design), menor é o custo de sua correção em comparação a encontrá-lo em produção.", 
    "Um conceito fundamental na cultura DevOps e Quality Assurance moderno."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que avaliam os 'Testes de Mutação' (Mutation Testing)?", 
    "Testes de Mutação", 
    [
        "A) Se o software consegue se mutar em vírus de computador.",
        "B) Introduzir pequenas alterações propositais (mutações) no código de produção para verificar se a suíte de testes existente é capaz de detectar essas falhas (morrendo no processo).",
        "C) Mudar o DNA dos programadores para aumentarem a produtividade.",
        "D) Testar mutações genéticas em softwares de biotecnologia."
    ], 
    "B", 
    "O teste de mutação mede a 'qualidade dos testes'. Se alteramos um operador `+` para `-` no código e nenhum teste falha, significa que nossa suíte de testes é fraca e não cobre aquela regra.", 
    "É computacionalmente custoso, mas extremamente rigoroso."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que é uma 'Assertion' (Asserção) dentro de um código de teste automatizado?", 
    "Asserções", 
    [
        "A) Uma bronca aplicada pelo gerente ao encontrar um erro.",
        "B) Uma instrução lógica que valida se uma condição esperada é verdadeira (ex: `assertEquals(esperado, obtido)`), fazendo o teste falhar caso o resultado seja diferente.",
        "C) Um comando que apaga o banco de dados antes do teste.",
        "D) Uma mensagem de log impressa no console."
    ], 
    "B", 
    "A asserção é o coração do teste automatizado; sem ela, o código apenas executa operações sem verificar se o resultado está correto.", 
    "Testes sem asserções úteis são conhecidos como 'testes fantasmas'."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "Qual é o objetivo de manter a 'Independência dos Casos de Teste'?", 
    "Independência de Testes", 
    [
        "A) Fazer com que os testes funcionem sem precisar de energia elétrica.",
        "B) Garantir que cada caso de teste possa ser executado isoladamente, sem depender do sucesso, ordem ou estado deixado por outro teste executado anteriormente.",
        "C) Impedir que os testadores conversem entre si na equipe.",
        "D) Permitir que os testes rodem apenas em computadores desconectados da rede."
    ], 
    "B", 
    "Testes dependentes de ordem geram falsos positivos (flaky tests), onde um teste quebra apenas porque o anterior falhou, dificultando muito o diagnóstico da raiz do problema.", 
    "Cada teste deve preparar seu próprio cenário (setup) e limpar sua bagunça (teardown)."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que são os chamados 'Flaky Tests' (Testes Instáveis)?", 
    "Flaky Tests", 
    [
        "A) Testes que funcionam bem apenas no inverno.",
        "B) Testes automatizados que ora passam, ora falham intermitentemente sem que nenhuma alteração tenha sido feita no código-fonte, geralmente causados por concorrência, rede instável ou assincronicidade.",
        "C) Testes que passam em computadores Mac e falham em Windows.",
        "D) Testes escritos por programadores iniciantes."
    ], 
    "B", 
    "Testes instáveis destroem a confiança da equipe na automação, pois forçam reexecuções manuais desnecessárias.", 
    "Devem ser investigados e corrigidos ou removidos imediatamente da suíte principal."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "Por que a automação de testes é considerada um facilitador indispensável para arquiteturas de microsserviços e DevOps?", 
    "Testes em DevOps", 
    [
        "A) Porque elimina a necessidade de qualquer tipo de documentação técnica.",
        "B) Porque permite que pipelines de CI/CD validem centenas de serviços independentes de forma rápida e segura a cada deploy, garantindo alta velocidade sem sacrificar a estabilidade.",
        "C) Porque impede que os microsserviços precisem se comunicar via rede.",
        "D) Porque reduz o custo de servidores em nuvem a zero."
    ], 
    "B", 
    "Sem uma suíte de testes automatizados robusta, entregas contínuas em ambientes complexos de microsserviços tornam-se caóticas e propensas a falhas catastróficas em produção.", 
    "Automação e DevOps caminham lado a lado."
);
addQuestion(
    "Testes de Software", 
    "Média", 
    "O que avalia o 'Teste de Escalabilidade' (Scalability Testing) dentro dos testes de desempenho?", 
    "Testes de Escalabilidade", 
    [
        "A) A capacidade do sistema de continuar funcionando eficientemente quando há um aumento na carga de trabalho, expandindo recursos (vertical ou horizontalmente) conforme a demanda.",
        "B) A facilidade de escalar montanhas com os servidores da empresa.",
        "C) O cálculo do aumento salarial dos testadores baseado no número de bugs encontrados.",
        "D) A habilidade de redimensionar imagens PNG automaticamente no layout."
    ], 
    "A", 
    "O teste de escalabilidade mede o quão bem o software lida com o crescimento de dados, tráfego ou número de usuários simultâneos, identificando limites de expansão.", 
    "Essencial para aplicações em nuvem (Cloud Computing) que precisam crescer elásticas."
);

addQuestion(
    "Testes de Software", 
    "Média", 
    "O que significa a prática de 'Test-First Development' em comparação ao desenvolvimento tradicional?", 
    "Test-First Development", 
    [
        "A) Escrever a documentação completa do projeto antes de ligar o computador.",
        "B) A inversão na ordem de entrega onde os testes automatizados são priorizados e escritos antes do código funcional, garantindo especificações claras e menor acoplamento.",
        "C) Fazer testes físicos de hardware antes de montar a placa-mãe.",
        "D) Executar todos os testes de aceitação apenas no dia do encerramento do contrato."
    ], 
    "B", 
    "Escrever o teste primeiro obriga o desenvolvedor a entender exatamente qual é o requisito e o comportamento esperado antes de pensar na implementação técnica.", 
    "É a base conceitual de metodologias como o TDD."
);

/* =====================================================
    Bloco 17: GIT E CONTROLE DE VERSÃO - 40 QUESTÕES COMPLETAS
===================================================== */

addQuestion(
    "Git", 
    "Média", 
    "Qual é a principal diferença entre os comandos 'git pull' e 'git fetch' em um fluxo de trabalho com Git?", 
    "Fetch vs Pull", 
    [
        "A) O 'git fetch' atualiza imediatamente os arquivos da árvore de trabalho (working directory), enquanto o 'git pull' apenas baixa o histórico.",
        "B) O 'git fetch' baixa as alterações do repositório remoto sem aplicá-las automaticamente no seu branch atual, enquanto o 'git pull' baixa e faz o merge (mesclagem) automático na sequência.",
        "C) O 'git pull' é exclusivo para servidores locais e o 'git fetch' é usado apenas no GitHub.",
        "D) Não há diferença funcional; ambos executam exatamente a mesma rotina de sincronização."
    ], 
    "B", 
    "O `git fetch` busca as novidades do remoto atualizando as referências locais (como `origin/main`), permitindo que você inspecione o código antes de integrar. O `git pull` faz o `fetch` seguidos de um `merge` imediato.", 
    "Utilizar `git fetch` costuma ser mais seguro para revisar o que mudou antes de juntar no seu código atual."
);

addQuestion(
    "Git", 
    "Média", 
    "No Git, para que serve o comando 'git stash'?", 
    "Git Stash", 
    [
        "A) Para apagar permanentemente o histórico de commits corrompidos.",
        "B) Para guardar temporariamente as alterações não commitadas (modificações em arquivos rastreados) em um estoque, limpando a sua área de trabalho sem perder o progresso.",
        "C) Para criar um novo branch isolado direto na nuvem do GitHub.",
        "D) Para enviar o código diretamente para o servidor de produção em ambiente de homologação."
    ], 
    "B", 
    "O `git stash` é ideal quando você está no meio de uma alteração, precisa mudar de branch urgentemente para corrigir um bug, mas ainda não quer fazer um commit definitivo.", 
    "Você pode recuperar o que guardou usando o comando `git stash pop`."
);

addQuestion(
    "Git", 
    "Média", 
    "O que acontece quando executamos o comando 'git reset --soft HEAD~1'?", 
    "Git Reset", 
    [
        "A) Desfaz o último commit, mas mantém todas as alterações dos arquivos preservadas na área de staged (prontas para novo commit).",
        "B) Apaga permanentemente o último commit e descarta todas as alterações feitas no código de forma irreversível.",
        "C) Remove o repositório local do computador e desconecta do GitHub.",
        "D) Converte o branch atual em um arquivo compactado zip."
    ], 
    "A", 
    "O modificador `--soft` volta o ponteiro do HEAD em um commit, mantendo intactas as modificações no `staging area`. O `--mixed` (padrão) mantém as alterações no working directory, e o `--hard` apaga tudo.", 
    "Use `--hard` com muito cuidado, pois ele descarta o trabalho não salvo."
);

addQuestion(
    "Git", 
    "Média", 
    "Qual é a utilidade e o comportamento padrão do arquivo '.gitignore' em um projeto versionado?", 
    ".gitignore", 
    [
        "A) Listar os colaboradores autorizados a realizar push no repositório remoto.",
        "B) Definir padrões de arquivos e pastas que o Git deve ignorar e não rastrear (como dependências pesadas, arquivos de configuração local e caches).",
        "C) Automatizar os testes unitários toda vez que um commit for realizado.",
        "D) Armazenar senhas de acesso criptografadas para conexão com o banco de dados."
    ], 
    "B", 
    "O `.gitignore` impede que arquivos gerados automaticamente, credenciais sensíveis ou pastas de pacotes (`node_modules`, `build`, etc.) sejam enviados por engano para o versionamento.", 
    "Arquivos que já estão sendo rastreados pelo Git continuam sendo monitorados mesmo se você adicioná-los depois ao `.gitignore`, exigindo remoção prévia com `git rm --cached`."
);

addQuestion(
    "Git", 
    "Média", 
    "Qual é a diferença fundamental entre os comandos 'git merge' e 'git rebase' ao integrar alterações de um branch em outro?", 
    "Merge vs Rebase", 
    [
        "A) O 'merge' cria um commit de junção preservando o histórico real de ramificação, enquanto o 'rebase' reescreve o histórico aplicando os commits em sequência linear.",
        "B) O 'rebase' é mais rápido porque deleta os branches antigos, enquanto o 'merge' é proibido em equipes ágeis.",
        "C) O 'merge' altera o código remoto e o 'rebase' altera apenas o repositório local.",
        "D) Não há diferença matemática; ambos geram exatos mesmos hashes de commit."
    ], 
    "A", 
    "O `merge` preserva o contexto histórico criando um nó de união (merge commit). O `rebase` move a base da sua branch para o topo da branch de destino, gerando uma linha do tempo limpa e linear.", 
    "Evite usar `rebase` em branches públicos/compartilhados para não confundir o histórico de outros desenvolvedores."
);

addQuestion(
    "Git", 
    "Média", 
    "No fluxo de trabalho do Git, o que caracteriza a área chamada 'Staging Area' (ou Index)?", 
    "Áreas do Git", 
    [
        "A) O servidor remoto hospedado na nuvem (GitHub ou GitLab).",
        "B) Uma área intermediária onde você seleciona e prepara quais arquivos modificados serão incluídos no próximo commit.",
        "C) O diretório físico oculto `.git` onde ficam os logs de configuração.",
        "D) Um ambiente de homologação onde o site roda em produção."
    ], 
    "B", 
    "Antes de salvar as mudanças com `git commit`, você usa o `git add` para mover os arquivos da working tree para a Staging Area, selecionando exatamente o que compõe a sua entrega.", 
    "Isso permite commitar partes específicas de arquivos modificados através do modo interativo (`git add -p`)."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git checkout -b novo-branch' (ou 'git switch -c') realiza na prática?", 
    "Branches", 
    [
        "A) Deleta permanentemente o branch atual e todos os seus arquivos.",
        "B) Cria um novo branch e muda imediatamente o contexto de trabalho para ele em um único comando.",
        "C) Sincroniza o branch local com a última versão estável da nuvem.",
        "D) Cria uma tag de versão para release de software."
    ], 
    "B", 
    "Esse comando combina a criação de uma nova ramificação (`branch`) com a troca instantânea para ela, economizando o uso de dois comandos separados (`git branch` + `git checkout`).", 
    "Nas versões mais recentes do Git, o comando moderno recomendado para troca é `git switch`."
);

addQuestion(
    "Git", 
    "Média", 
    "O que ocorre quando o Git aponta um conflito de merge (merge conflict)?", 
    "Conflitos", 
    [
        "A) O repositório é corrompido e precisa ser baixado novamente do zero.",
        "B) O Git encontrou alterações concorrentes na mesma linha de código em branches diferentes e pausa a mesclagem para que o desenvolvedor decida manualmente qual código manter.",
        "C) O sistema operacional bloqueia o acesso aos arquivos por falta de permissão de administrador.",
        "D) O GitHub rejeita o projeto por violação de boas práticas de código limpo."
    ], 
    "B", 
    "O Git insere marcadores visuais (`<<<<<<<`, `=======`, `>>>>>>>`) no arquivo conflitante. Cabe ao programador editar o código para resolver o impasse, salvar o arquivo, dar `git add` e concluir o commit.", 
    "Editores modernos como o VS Code possuem ferramentas visuais excelentes para resolução de conflitos de merge."
);

addQuestion(
    "Git", 
    "Média", 
    "Para que serve o comando 'git log --oneline --graph'?", 
    "Git Log", 
    [
        "A) Para gerar um gráfico de consumo de memória RAM do processo do Git.",
        "B) Para exibir o histórico de commits de forma resumida (uma linha por commit) acompanhado de uma representação gráfica em árvore das ramificações.",
        "C) Para criar um diagrama UML da arquitetura do software baseado nos commits.",
        "D) Para medir a produtividade e quantidade de linhas escritas por cada desenvolvedor."
    ], 
    "B", 
    "Essa combinação de parâmetros do `git log` é excelente para visualizar rapidamente o fluxo de merges, ramificações e o histórico linear de forma limpa e direta no terminal.", 
    "Muitos desenvolvedores criam um alias (atalho) no terminal para esse comando devido à sua alta utilidade."
);

addQuestion(
    "Git", 
    "Média", 
    "O que é um 'Git Hook' e onde ele é executado?", 
    "Git Hooks", 
    [
        "A) Uma ferramenta gráfica oficial para conectar o repositório local ao GitHub Desktop.",
        "B) Um script personalizado que o Git executa automaticamente antes ou depois de eventos específicos, como commits, pushes ou merges.",
        "C) Um tipo de chave criptográfica utilizada para autenticação SSH no servidor remoto.",
        "D) Um plugin de extensão para debug de erros de sintaxe em JavaScript."
    ], 
    "B", 
    "Os hooks ficam na pasta oculta `.git/hooks` e são muito usados para rodar linters (como ESLint), formatadores de código ou testes automatizados antes de permitir um commit (`pre-commit`).", 
    "Eles ajudam a garantir a qualidade do código antes mesmo que ele seja enviado para o repositório compartilhado."
);

addQuestion(
    "Git", 
    "Média", 
    "Qual é a função do comando 'git remote add origin <url>'?", 
    "Repositórios Remotos", 
    [
        "A) Excluir definitivamente o repositório remoto do GitHub.",
        "B) Vincular o repositório Git local a um repositório remoto hospedado em um servidor externo (como GitHub, GitLab ou Bitbucket), nomeando-o de 'origin'.",
        "C) Criar uma cópia local completa do projeto via clone.",
        "D) Atualizar a senha de acesso do usuário no terminal."
    ], 
    "B", 
    "Esse comando estabelece o canal de comunicação entre sua máquina e a nuvem, permitindo enviar (`push`) e baixar (`pull`) o código com facilidade.", 
    "Geralmente executado logo após inicializar um projeto local (`git init`)."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git clone' realiza quando executado?", 
    "Git Clone", 
    [
        "A) Cria uma cópia exata do repositório remoto (incluindo todo o histórico de commits e branches) para o seu computador local.",
        "B) Apaga o projeto local e substitui por um arquivo de backup.",
        "C) Duplica o branch atual dentro do mesmo repositório local.",
        "D) Envia uma cópia de segurança do código para o e-mail do desenvolvedor."
    ], 
    "A", 
    "O `clone` é o ponto de partida padrão para começar a trabalhar em um projeto existente hospedado em uma plataforma remota.", 
    "Ele já configura automaticamente o remoto padrão chamado `origin`."
);

addQuestion(
    "Git", 
    "Média", 
    "O que significa o comando 'git commit --amend'?", 
    "Git Commit Amend", 
    [
        "A) Apaga todos os commits da história e reinicia o projeto.",
        "B) Modifica o último commit realizado, permitindo alterar sua mensagem de commit ou adicionar arquivos esquecidos sem criar um novo nó no histórico.",
        "C) Cria um commit automático a cada alteração de arquivo.",
        "D) Divide um commit grande em vários commits menores."
    ], 
    "B", 
    "É extremamente útil para corrigir pequenos erros de digitação na mensagem do último commit ou quando você esqueceu de incluir um arquivo pequeno relacionado à última alteração.", 
    "Evite usar `--amend` em commits que já foram enviados (`pushed`) para o repositório remoto compartilhado."
);

addQuestion(
    "Git", 
    "Média", 
    "Para que serve o comando 'git tag' em um projeto?", 
    "Git Tags", 
    [
        "A) Para marcar linhas de código com erros de sintaxe.",
        "B) Para rotular pontos específicos na história do repositório com um identificador legível (como v1.0.0), geralmente usado para marcar versões de lançamento (releases).",
        "C) Para etiquetar arquivos para exclusão automática.",
        "D) Para identificar qual desenvolvedor escreveu cada linha de código."
    ], 
    "B", 
    "As tags funcionam como marcadores estáticos e permanentes no tempo, facilitando o download de versões específicas estáveis do software.", 
    "Podem ser leves ou anotadas (anotadas contêm metadados do autor e data)."
);

addQuestion(
    "Git", 
    "Média", 
    "O que faz o comando 'git diff' quando executado sem parâmetros adicionais?", 
    "Git Diff", 
    [
        "A) Mostra a diferença entre dois branches remotos diferentes.",
        "B) Exibe as alterações feitas no working directory que ainda não foram adicionadas à staging area (modificações não indexadas).",
        "C) Compara o código local com o código em produção.",
        "D) Apaga as linhas de código duplicadas no projeto."
    ], 
    "B", 
    "O `git diff` faz uma análise linha por linha mostrando exatamente o que foi adicionado (`+`) e o que foi removido (`-`) nos arquivos modificados.", 
    "Você pode usar `git diff --staged` para ver o que está preparado na staging area."
);

addQuestion(
    "Git", 
    "Média", 
    "O que significa dizer que o Git é um sistema de controle de versão 'distribuído' (DVCS)?", 
    "Conceitos do Git", 
    [
        "A) Que o código roda distribuído em vários processadores da CPU.",
        "B) Que cada usuário possui uma cópia completa do repositório localmente, incluindo o histórico de commits completo, permitindo trabalhar offline sem depender de um servidor central contínuo.",
        "C) Que o código precisa ser dividido em pedaços e enviado para vários servidores diferentes obrigatoriamente.",
        "D) Que o projeto é gerenciado por inteligência artificial distribuída."
    ], 
    "B", 
    "Diferente de sistemas centralizados antigos (como SVN), no Git cada clone é um repositório completo e independente, o que garante alta resiliência e velocidade.", 
    "O servidor remoto atua apenas como ponto de sincronização central."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git status' informa ao desenvolvedor?", 
    "Git Status", 
    [
        "A) O status atual da conexão com a internet e ping do GitHub.",
        "B) O estado atual da árvore de trabalho e da staging area: quais arquivos foram modificados, quais estão prontos para commit (staged) e quais não estão sendo rastreados (untracked).",
        "C) A quantidade de bugs encontrados pelo linter.",
        "D) O nível de bateria do notebook do desenvolvedor."
    ], 
    "B", 
    "É o comando mais consultado durante o dia a dia para saber exatamente em qual branch você está e quais arquivos precisam de atenção.", 
    "Não altera nenhum arquivo, servindo apenas para inspeção."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git rm --cached arquivo.txt' faz?", 
    "Git Rm", 
    [
        "A) Apaga permanentemente o arquivo do disco rígido e do histórico.",
        "B) Remove o arquivo do rastreamento do Git (staging area), mantendo-o intacto na pasta do computador local.",
        "C) Limpa o cache de memória RAM do Git.",
        "D) Move o arquivo para a lixeira do sistema operacional."
    ], 
    "B", 
    "Muito útil quando você adicionou por engano um arquivo que deveria ser ignorado (como um arquivo de configuração local) e quer tirá-lo do controle de versão sem perdê-lo.", 
    "Em seguida, deve-se adicionar o arquivo ao `.gitignore`."
);

addQuestion(
    "Git", 
    "Média", 
    "O que faz o comando 'git branch -d nome-do-branch'?", 
    "Exclusão de Branches", 
    [
        "A) Deleta o branch localmente, desde que todas as suas alterações já tenham sido mescladas (merged) em outro branch.",
        "B) Envia o branch para a lixeira do GitHub de forma permanente.",
        "C) Renomeia o branch atual para um novo nome.",
        "D) Desfaz o último commit feito no branch."
    ], 
    "A", 
    "A bandeira `-d` (minúscula) protege contra a perda acidental de trabalho não mesclado. Se você quiser forçar a exclusão mesmo sem merge, usa-se `-D` (maiúscula).", 
    "Ajuda a manter o repositório limpo após features concluídas."
);

addQuestion(
    "Git", 
    "Média", 
    "O que é um 'Pull Request' (ou Merge Request) em plataformas como GitHub ou GitLab?", 
    "Pull Request", 
    [
        "A) Um comando de terminal para baixar atualizações do servidor.",
        "B) Uma solicitação formal para revisar e mesclar as alterações de um branch em outro (geralmente da feature para a main), permitindo code review, discussões e aprovações da equipe.",
        "C) Um pedido de suporte técnico enviado diretamente para os criadores do Git.",
        "D) Uma ferramenta de testes de carga para APIs web."
    ], 
    "B", 
    "O Pull Request é o pilar da colaboração moderna em equipe, viabilizando revisão de código por pares, execução de testes automatizados de CI e controle de qualidade antes do merge.", 
    "Garante que nenhum código suba para produção sem validação."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git blame arquivo.js' permite descobrir?", 
    "Git Blame", 
    [
        "A) Qual desenvolvedor introduziu um erro de sintaxe no código.",
        "B) Quem modificou cada linha específica de um arquivo e em qual commit isso aconteceu, facilitando a identificação do autor de um trecho de código.",
        "C) Quais linhas do código possuem vulnerabilidades de segurança.",
        "D) Quantas linhas de código foram escritas no total pelo time."
    ], 
    "B", 
    "O `git blame` exibe a listagem do arquivo com o hash do commit, o autor e a data lado a lado de cada linha.", 
    "Útil para entender o contexto histórico de uma implementação ou tirar dúvidas com o colega que escreveu."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git stash pop' realiza?", 
    "Git Stash Pop", 
    [
        "A) Apaga permanentemente todos os stashes salvos no computador.",
        "B) Aplica as alterações guardadas mais recentemente no stash de volta à árvore de trabalho e remove esse registro do estoque.",
        "C) Cria um novo branch baseado no último commit remoto.",
        "D) Reverte o último commit aplicando um patch de correção."
    ], 
    "B", 
    "Diferente do `git stash apply` (que aplica as alterações mas mantém o stash salvo), o `pop` aplica e limpa o estoque simultaneamente.", 
    "Se houver conflitos durante o pop, o Git avisa para que você os resolva."
);

addQuestion(
    "Git", 
    "Média", 
    "O que é uma 'Fork' no ecossistema do GitHub?", 
    "GitHub Forks", 
    [
        "A) Uma ferramenta de refatoração de código em árvore.",
        "B) Uma cópia independente de um repositório alocada na sua própria conta do GitHub, permitindo propor alterações em projetos de terceiros sem ter permissão direta de escrita neles.",
        "C) Um comando de bifurcação de processos no terminal.",
        "D) Um tipo de arquivo de configuração para testes unitários."
    ], 
    "B", 
    "O fork é amplamente utilizado no modelo de contribuição Open Source, onde você clica em 'Fork', altera no seu repositório e depois abre um Pull Request para o projeto original.", 
    "Diferente do clone (que é local), o fork ocorre na nuvem."
);

addQuestion(
    "Git", 
    "Média", 
    "Para que serve o comando 'git remote -v'?", 
    "Git Remote", 
    [
        "A) Para verificar a versão atual instalada do Git no sistema operacional.",
        "B) Para listar os URLs dos repositórios remotos configurados (fetch e push) associados ao seu projeto local.",
        "C) Para verificar se há vírus no repositório remoto.",
        "D) Para validar a chave SSH de conexão."
    ], 
    "B", 
    "É útil para confirmar se o projeto está apontando para os endereços corretos do GitHub ou GitLab antes de executar comandos de sincronização.", 
    "O `-v` vem de *verbose* (detalhado)."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git log -p' exibe no terminal?", 
    "Git Log Patch", 
    [
        "A) Apenas a lista de nomes dos autores dos commits.",
        "B) O histórico de commits acompanhado das diferenças detalhadas (patches/diffs) introduzidas em cada commit.",
        "C) O progresso de download dos arquivos remotos em porcentagem.",
        "D) A lista de senhas criptografadas do repositório."
    ], 
    "B", 
    "O parâmetro `-p` (ou `--patch`) permite inspecionar não só o que foi escrito na mensagem do commit, mas exatamente o código que mudou em cada alteração da história.", 
    "Excelente para auditoria fina de código legado."
);

addQuestion(
    "Git", 
    "Média", 
    "O que acontece quando executamos 'git push origin main'?", 
    "Git Push", 
    [
        "A) Baixa a branch main do repositório remoto para a máquina local.",
        "B) Envia os commits locais realizados na branch 'main' para o repositório remoto configurado como 'origin'.",
        "C) Apaga a branch main da nuvem do GitHub.",
        "D) Cria uma cópia local da branch main."
    ], 
    "B", 
    "Atualiza o servidor remoto com o seu trabalho local, tornando-o acessível para o restante da equipe.", 
    "Se o remoto estiver adiantado, o Git exigirá um `pull` prévio para evitar sobrescrever dados."
);

addQuestion(
    "Git", 
    "Média", 
    "O que significa a expressão 'detached HEAD' (HEAD destacada) no Git?", 
    "Detached HEAD", 
    [
        "A) Que o computador perdeu a conexão com a internet.",
        "B) Que o ponteiro HEAD está apontando diretamente para um hash de commit específico em vez de apontar para o topo de um branch, o que pode fazer com que commits novos fiquem órfãos se não forem salvos em um branch.",
        "C) Que o repositório foi corrompido e precisa ser reinstalado.",
        "D) Que o usuário foi banido do repositório remoto."
    ], 
    "B", 
    "Ocorre muito ao fazer checkout direto em tags ou commits antigos (ex: `git checkout v1.0`). Para salvar alterações nesse estado, deve-se criar um branch novo (`git checkout -b novo`).", 
    "Um conceito importante para evitar perda acidental de trabalho."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git clean -fd' faz na área de trabalho?", 
    "Git Clean", 
    [
        "A) Limpa o histórico de commits antigos do projeto.",
        "B) Remove arquivos não rastreados (`untracked`) e diretórios inteiros do diretório de trabalho de forma permanente.",
        "C) Limpa o cache de senhas do Git Credential Manager.",
        "D) Deleta todos os branches que já foram mesclados."
    ], 
    "B", 
    "O `-f` força a exclusão e o `-d` inclui diretórios não rastreados. Deve ser usado com cautela extrema para não apagar arquivos locais importantes que não estavam no controle de versão.", 
    "É irreversível."
);

addQuestion(
    "Git", 
    "Média", 
    "Qual é a utilidade do comando 'git stash list'?", 
    "Git Stash List", 
    [
        "A) Listar todos os arquivos ignorados pelo `.gitignore`.",
        "B) Exibir a lista de todos os stashes (estoques temporários) salvos no repositório local, identificando-os por índices como `stash@{0}`.",
        "C) Listar os colaboradores do projeto no GitHub.",
        "D) Mostrar os commits que ainda não foram enviados para o push."
    ], 
    "B", 
    "Permite visualizar múltiplos estoques criados em momentos diferentes, facilitando recuperar um específico usando `git stash apply stash@{1}`.", 
    "Organiza o gerenciamento de alterações pausadas."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git branch -a' exibe?", 
    "Git Branch List", 
    [
        "A) Apenas os branches locais criados na sua máquina.",
        "B) Todos os branches disponíveis, tanto os locais quanto os remotos (`remotes/*`).",
        "C) A árvore genealógica completa de todos os merges do projeto.",
        "D) A lista de administradores do repositório remoto."
    ], 
    "B", 
    "Útil para saber quais ramificações existem no servidor remoto que ainda não foram baixadas ou criadas localmente.", 
    "O `-a` vem de *all* (todos)."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git cherry-pick <hash-do-commit>' realiza?", 
    "Git Cherry-Pick", 
    [
        "A) Escolhe aleatoriamente um commit para ser apagado do histórico.",
        "B) Aplica um commit específico de outro branch diretamente no seu branch atual, permitindo reutilizar correções pontuais sem precisar fazer o merge de todo o branch.",
        "C) Cria uma tag de versão baseada na cor do commit.",
        "D) Baixa apenas os arquivos modificados em um commit remoto."
    ], 
    "B", 
    "É uma ferramenta cirúrgica muito útil quando um bug foi corrigido em um branch de homologação e você precisa dessa mesma correção urgentemente na branch principal de produção.", 
    "Evita trazer alterações indesejadas de outras ramificações."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git config --global user.name \"Seu Nome\"' configura no Git?", 
    "Git Config", 
    [
        "A) A senha de acesso à sua conta do GitHub.",
        "B) O nome de usuário global que será associado como autoria em todos os commits realizados nos repositórios da sua máquina.",
        "C) O nome do servidor remoto principal do projeto.",
        "D) O nome do arquivo de log do terminal."
    ], 
    "B", 
    "Essencial para a identificação correta dos autores no histórico de qualquer projeto Git na máquina.", 
    "Geralmente configurado logo na primeira instalação do Git junto com o e-mail (`user.email`)."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git fetch --prune' faz?", 
    "Git Fetch Prune", 
    [
        "A) Apaga o repositório local e baixa tudo novamente.",
        "B) Remove referências locais de branches remotos que já foram deletados no servidor (como no GitHub), limpando o lixo de referências obsoletas.",
        "C) Corta linhas de código duplicadas no arquivo atual.",
        "D) Comprime o histórico de commits em um arquivo zip."
    ], 
    "B", 
    "Evita que sua listagem de branches remotos fique poluída com ramificações antigas que já foram excluídas por outros membros da equipe na nuvem.", 
    "Uma ótima prática de manutenção de repositório."
);

addQuestion(
    "Git", 
    "Média", 
    "O que significa 'Fast-forward merge' no Git?", 
    "Fast-forward Merge", 
    [
        "A) Um erro de mesclagem que acelera a velocidade do processador.",
        "B) Um tipo de merge que ocorre quando o branch de destino não teve novos commits desde que o branch atual foi criado; o Git apenas avança o ponteiro para a frente sem criar um commit de junção.",
        "C) Um comando para acelerar o upload do push no GitHub.",
        "D) A exclusão automática de arquivos conflitantes."
    ], 
    "B", 
    "Mantém o histórico perfeitamente linear, sem nós extras de união, pois não houve divergência de caminhos na linha do tempo.", 
    "Pode ser desativado com a flag `--no-ff` se a equipe preferir registrar explicitamente o merge."
);

addQuestion(
    "Git", 
    "Média", 
    "O que faz o comando 'git branch -m novo-nome' quando executado em um branch?", 
    "Renomear Branch", 
    [
        "A) Deleta o branch atual e cria um novo.",
        "B) Renomeia o branch atual em que você está posicionado para o novo nome especificado.",
        "C) Modifica a mensagem do último commit.",
        "D) Mescla o branch atual com a master."
    ], 
    "B", 
    "Facilita a correção de nomes de branches criados com digitação incorreta ou fora do padrão de nomenclatura da equipe.", 
    "Se o branch antigo já estiver na nuvem, será necessário atualizar o remoto com um push correspondente."
);

addQuestion(
    "Git", 
    "Média", 
    "O que é o arquivo 'HEAD' dentro da pasta oculta '.git'?", 
    "O Ponteiro HEAD", 
    [
        "A) O arquivo de log de erros de rede.",
        "B) Um ponteiro simbólico que indica qual é o branch atual ou commit em que você está posicionado no momento.",
        "C) O arquivo principal de configuração de segurança SSH.",
        "D) A lista de commits enviados para o GitHub."
    ], 
    "B", 
    "O HEAD é a âncora fundamental que diz ao Git qual é o estado atual da árvore de trabalho que você está visualizando e editando.", 
    "Sempre aponta para a ponta do branch ativo, exceto no estado de *detached HEAD*."
);

addQuestion(
    "Git", 
    "Média", 
    "Qual é a utilidade do comando 'git bisect'?", 
    "Git Bisect", 
    [
        "A) Para dividir um arquivo grande em duas partes menores.",
        "B) Uma ferramenta de busca binária automatizada para encontrar qual commit introduziu um bug específico na base de código, testando commits intermediários de forma inteligente.",
        "C) Para duplicar o repositório em duas pastas diferentes no computador.",
        "D) Para calcular a porcentagem de cobertura de testes do projeto."
    ], 
    "B", 
    "Você marca um commit bom (onde o bug não existia) e um commit ruim (onde o bug está presente), e o Git testa o meio da história, perguntando se o bug está lá, até achar o culpado exato com mínimo esforço.", 
    "Uma ferramenta avançada de depuração de histórico extremamente poderosa."
);

addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git push origin --delete nome-do-branch' realiza?", 
    "Deletar Branch Remoto", 
    [
        "A) Deleta o branch apenas na sua máquina local.",
        "B) Remove e exclui permanentemente o branch especificado do repositório remoto hospedado na nuvem.",
        "C) Limpa o histórico de commits do branch local.",
        "D) Apaga o repositório inteiro do GitHub."
    ], 
    "B", 
    "Usado após finalizar uma feature, ter o PR aprovado e mesclado, para manter o servidor remoto livre de ramificações mortas e desnecessárias.", 
    "Equivale a clicar no botão de deletar branch diretamente na interface do GitHub."
);
addQuestion(
    "Git", 
    "Média", 
    "O que o comando 'git revert <hash-do-commit>' realiza no histórico do projeto?", 
    "Git Revert", 
    [
        "A) Apaga permanentemente o commit especificado e todos os seus arquivos do repositório local e remoto.",
        "B) Cria um novo commit que aplica o inverso exato das alterações introduzidas pelo commit especificado, desfazendo suas modificações sem destruir o histórico anterior.",
        "C) Restaura o projeto inteiro para o estado de fábrica ignorando branches.",
        "D) Move o ponteiro HEAD de volta para o commit anterior sem deixar rastros."
    ], 
    "B", 
    "O `git revert` é uma forma segura de anular mudanças em repositórios compartilhados, pois ele adiciona um novo commit corretivo em vez de reescrever a linha do tempo linear.", 
    "Diferente do `reset`, ele é totalmente seguro para usar em branches públicos como a `main`."
);

addQuestion(
    "Git", 
    "Média", 
    "Para que serve o comando 'git log --author=\"Nome\"'?", 
    "Git Log Author", 
    [
        "A) Para filtrar e exibir apenas os commits realizados por um autor específico no histórico do repositório.",
        "B) Para alterar o nome do autor de todos os commits passados automaticamente.",
        "C) Para bloquear contribuições de autores não autorizados no GitHub.",
        "D) Para gerar um relatório de horas trabalhadas por cada desenvolvedor."
    ], 
    "A", 
    "O filtro `--author` é extremamente útil em grandes equipes para auditar rapidamente quem escreveu ou modificou partes específicas do sistema ao longo do tempo.", 
    "Pode ser combinado com outros parâmetros como `--oneline` e `-p`."
);

/* =====================================================
    Bloco 18: CRIPTOGRAFIA E CERTIFICAÇÃO DIGITAL - 40 QUESTÕES
===================================================== */

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Qual é a principal principal diferença conceitual entre a criptografia simétrica e a criptografia assimétrica?", 
    "Simétrica vs Assimétrica", 
    [
        "A) A criptografia simétrica utiliza chaves diferentes para cifrar e decifrar, enquanto a assimétrica utiliza a mesma chave.",
        "B) A criptografia simétrica utiliza uma única chave compartilhada para cifrar e decifrar, enquanto a assimétrica utiliza um par de chaves (pública e privada).",
        "C) A criptografia simétrica é exclusiva para ambientes web via HTTPS, e a assimétrica é apenas para arquivos locais.",
        "D) Não há diferença de segurança; a criptografia assimétrica é apenas uma versão mais antiga da simétrica."
    ], 
    "B", 
    "Na criptografia simétrica, a mesma chave secreta faz todo o trabalho, exigindo um canal seguro de troca. Na assimétrica, o que a chave pública criptografa, apenas a chave privada correspondente descodifica.", 
    "Algoritmos simétricos (como AES) são muito mais rápidos que os assimétricos (como RSA)."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "No contexto da Segurança da Informação, o que garante a propriedade de 'Não-Repúdio' (ou Irretratabilidade)?", 
    "Propriedades de Segurança", 
    [
        "A) O uso exclusivo de senhas fortes com troca obrigatória a cada 30 dias.",
        "B) A capacidade de impedir que um usuário negue a autoria de uma mensagem ou transação que ele realizou.",
        "C) A criptografia de dados em trânsito utilizando protocolos de rede como o TLS 1.3.",
        "D) O armazenamento de senhas utilizando funções de hash unidirecionais com salt."
    ], 
    "B", 
    "O não-repúdio assegura que o emissor de uma mensagem não possa negar posteriormente tê-la enviado, o que é comumente alcançado com o uso de assinaturas digitais baseadas em criptografia assimétrica.", 
    "Fundamental em transações bancárias e documentos legais digitais."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que é uma função de Hash criptográfico (como SHA-256) e qual é uma de suas propriedades fundamentais?", 
    "Funções Hash", 
    [
        "A) Uma função reversível que compacta e descompacta arquivos grandes para otimizar espaço em disco.",
        "B) Um algoritmo matemático que converte uma entrada de tamanho arbitrário em uma string de tamanho fixo, sendo unidirecional (impossível de reverter para obter o dado original).",
        "C) Um sistema de chaves gêmeas onde a chave pública descobre o texto original gerado pelo hash.",
        "D) Um protocolo de troca de chaves simétricas inseguras em redes públicas."
    ], 
    "B", 
    "O hash gera uma 'impressão digital' única do arquivo ou texto. Ele é unidirecional (one-way) e resistente a colisões (difícil encontrar duas entradas que gerem o mesmo hash).", 
    "Funções hash são amplamente utilizadas na verificação de integridade de dados e armazenamento seguro de senhas."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Qual é a principal função de uma Autoridade Certificadora (AC) dentro de uma Infraestrutura de Chaves Públicas (ICP)?", 
    "ICP-Brasil e Certificação", 
    [
        "A) Bloquear ataques de negação de serviço (DDoS) em servidores de aplicações web.",
        "B) Emitir, suspender, revogar e gerenciar certificados digitais, atrelando uma chave pública à identidade de um usuário ou instituição.",
        "C) Armazenar cópias de segurança (backup) de todas as senhas dos usuários para recuperação em caso de perda.",
        "D) Executar varreduras de vulnerabilidades em códigos-fonte antes do deploy em produção."
    ], 
    "B", 
    "A Autoridade Certificadora atua como uma terceira parte confiável que valida a identidade do titular e emite o certificado digital assinado com sua própria chave privada.", 
    "O certificado digital funciona como o 'RG' eletrônico de pessoas físicas ou jurídicas."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Como funciona o processo de criação de uma Assinatura Digital?", 
    "Assinatura Digital", 
    [
        "A) O documento é cifrado integralmente utilizando a chave pública do destinatário.",
        "B) O resumo (hash) do documento é gerado e criptografado utilizando a chave privada do remetente.",
        "C) A senha do usuário é anexada ao final do arquivo em formato de texto plano protegido por permissões do sistema.",
        "D) Utiliza-se exclusivamente criptografia simétrica para mascarar o cabeçalho do arquivo."
    ], 
    "B", 
    "Para assinar, calcula-se o hash do documento e criptografa-se esse hash com a chave privada de quem assina. Qualquer pessoa pode usar a chave pública do remetente para decifrar o hash e conferir a integridade e autoria.", 
    "A assinatura digital garante integridade, autenticidade e não-repúdio."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que significa dizer que um certificado digital foi revogado e onde essa informação é consultada?", 
    "Revogação de Certificados", 
    [
        "A) Significa que a senha expirou e deve ser trocada no painel da AC. É consultada no arquivo hosts do sistema.",
        "B) Significa que o certificado perdeu a validade antes do prazo devido a comprometimento de chave ou mudança de dados, sendo consultado via LCR (Lista de Certificados Revogados ou CRL) ou protocolo OCSP.",
        "C) Significa que o site utilizava protocolo HTTP e migrou para HTTPS.",
        "D) Significa que o algoritmo AES foi substituído por uma chave simétrica menor."
    ], 
    "B", 
    "A revogação invalida o certificado antes da data de expiração oficial. Sistemas checam listas de revogação (CRL) ou consultam o status em tempo real via protocolo OCSP (Online Certificate Status Protocol).", 
    "Verificar a revogação é uma etapa crucial na validação de conexões SSL/TLS seguras."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Qual é o objetivo do protocolo TLS (Transport Layer Security) — sucessor espiritual do SSL — em uma aplicação web?", 
    "TLS / HTTPS", 
    [
        "A) Otimizar o tempo de carregamento de páginas HTML através da compressão de imagens e scripts.",
        "B) Proporcionar segurança de comunicação fim-a-fim na internet através de criptografia, autenticação de servidor e garantia de integridade.",
        "C) Substituir os bancos de dados relacionais por estruturas baseadas em blocos criptografados.",
        "D) Controlar o acesso de usuários por meio de perfis de permissão baseados em papéis (RBAC)."
    ], 
    "B", 
    "O TLS opera na camada de transporte (ou logo acima dela), criando um túnel seguro (HTTPS) onde os dados trocados entre o navegador e o servidor ficam protegidos contra interceptação e adulteração.", 
    "O estabelecimento dessa conexão segura ocorre inicialmente através do chamado 'Handshake TLS'."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que caracteriza um ataque do tipo 'Man-in-the-Middle' (MitM) em redes de computadores?", 
    "Ameaças e Ataques", 
    [
        "A) Um invasor sobrecarrega o servidor web com milhões de requisições falsas simultâneas.",
        "B) Um atacante intercepta secretamente e possivelmente altera a comunicação entre duas partes que acreditam estar se comunicando diretamente entre si.",
        "C) O roubo físico de discos rígidos em um data center para extração de arquivos em cache.",
        "D) A instalação de vírus de macro em planilhas eletrônicas compartilhadas na rede interna."
    ], 
    "B", 
    "No ataque MitM, o intermediário mal-intencionado fica no meio da rota dos pacotes de dados, podendo escutar ou modificar o conteúdo sem que os usuários percebam, o que é mitigado pelo uso de certificados digitais válidos e HSTS.", 
    "Redes Wi-Fi públicas desprotegidas são cenários comuns para esse tipo de tentativa de invasão."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "No contexto de criptografia simétrica, qual é a finalidade do 'Salt' (um dado aleatório) quando adicionado ao processo de hash de senhas?", 
    "Armazenamento de Senhas", 
    [
        "A) Aumentar o tamanho do arquivo de texto plano para dificultar ataques de força bruta.",
        "B) Garantir que duas pessoas que utilizem a mesma senha gerem hashes finais completamente diferentes, neutralizando ataques baseados em tabelas prontas (Rainbow Tables).",
        "C) Permitir que a senha seja recuperada facilmente pelo administrador do sistema em caso de esquecimento.",
        "D) Criptografar a conexão de rede durante o envio da senha para o servidor backend."
    ], 
    "B", 
    "O Salt adiciona uma sequência de caracteres aleatórios única a cada senha antes de aplicar a função hash. Assim, senhas iguais geram hashes totalmente distintos nas tabelas do banco de dados.", 
    "O uso de Salt em conjunto com funções lentas como Argon2 ou Bcrypt é padrão ouro para segurança de senhas."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Qual dos seguintes algoritmos é amplamente reconhecido e utilizado como padrão global para criptografia simétrica de blocos?", 
    "Algoritmos Criptográficos", 
    [
        "A) RSA",
        "B) Diffie-Hellman",
        "C) AES (Advanced Encryption Standard)",
        "D) MD5"
    ], 
    "C", 
    "O AES (Advanced Encryption Standard) é o algoritmo de criptografia simétrica padrão da indústria e do governo norte-americano, operando em blocos de 128 bits com chaves de 128, 192 ou 256 bits.", 
    "O MD5 é uma função hash antiga e insegura, enquanto o RSA é um algoritmo assimétrico."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que é a Autoridade de Registro (AR) em uma Infraestrutura de Chaves Públicas (ICP)?", 
    "ICP e Estrutura", 
    [
        "A) Um servidor de log que armazena os erros de acesso aos sites certificados.",
        "B) Uma entidade vinculada a uma Autoridade Certificadora responsável por receber, identificar e validar presencialmente ou por videoconferência a documentação dos solicitantes de certificados.",
        "C) O órgão governamental que define as leis de proteção de dados no Brasil (LGPD).",
        "D) Um banco de dados que armazena as chaves privadas de todos os cidadãos."
    ], 
    "B", 
    "A AR atua como o ponto de atendimento direto ao cliente, coletando documentos e validando a identidade antes de repassar a solicitação para a AC emitir o certificado digital.", 
    "Garante que o certificado seja emitido estritamente para o titular legítimo."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Qual é a principal limitação prática do uso de algoritmos de criptografia assimétrica (como o RSA) para cifrar grandes volumes de dados?", 
    "Limitações da Assimétrica", 
    [
        "A) A impossibilidade de gerar chaves maiores que 128 bits.",
        "B) O alto custo computacional e lentidão de processamento quando comparados à criptografia simétrica.",
        "C) A vulnerabilidade inerente a redes sem fio locais.",
        "D) A exigência de que as chaves públicas sejam mantidas em absoluto segredo."
    ], 
    "B", 
    "Operações matemáticas com números primos grandes na assimétrica exigem muita CPU. Por isso, na prática (como no HTTPS), usa-se assimétrica apenas para trocar uma chave simétrica temporária, e o restante da sessão usa criptografia simétrica (AES).", 
    "Essa abordagem combina segurança na troca com alta velocidade de transmissão."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que significa o termo 'Colisão' em funções de hash criptográficas?", 
    "Segurança de Hash", 
    [
        "A) Duas mensagens de texto diferentes que geram exatamente o mesmo valor de hash de saída.",
        "B) Um erro de hardware onde dois servidores tentam gravar no mesmo setor de disco.",
        "C) O momento em que a chave pública e a chave privada coincidem por falha matemática.",
        "D) Quando duas Autoridades Certificadoras emitem certificados com a mesma data de expiração."
    ], 
    "A", 
    "Encontrar colisões em funções hash (como ocorreu historicamente com o MD5 e o SHA-1) compromete a integridade dos dados, pois um invasor poderia substituir um arquivo legítimo por outro malicioso gerando o mesmo hash.", 
    "Funções modernas como SHA-256 são projetadas para resistir fortemente a ataques de colisão."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que é a Cadeia de Certificados (Certificate Chain) em uma conexão SSL/TLS?", 
    "Cadeia de Certificados", 
    [
        "A) Uma lista de senhas mestras compartilhadas entre os servidores web.",
        "B) Uma hierarquia de confiança que liga o certificado final do site (Leaf) a uma Autoridade Certificadora Intermediária e, por fim, a uma Autoridade Certificadora Raiz (Root CA) confiável pelo sistema operacional ou navegador.",
        "C) Um mecanismo de backup físico de chaves privadas em cartões inteligentes.",
        "D) O histórico de todas as revogações ocorridas em um domínio web."
    ], 
    "B", 
    "O navegador valida a segurança do site verificando se cada elo da cadeia assina o certificado imediatamente inferior, até chegar a uma raiz pré-instalada e confiável no dispositivo do usuário.", 
    "A ausência de um certificado intermediário na configuração do servidor causa erros de SSL no navegador."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Qual é a principal função do algoritmo de Diffie-Hellman na segurança de redes?", 
    "Troca de Chaves", 
    [
        "A) Assinar digitalmente contratos eletrônicos com validade jurídica.",
        "B) Permitir que duas partes estabeleçam um segredo compartilhado (chave simétrica) através de um canal de comunicação totalmente inseguro e público, sem que a chave seja transmitida.",
        "C) Criptografar discos rígidos inteiros com proteção contra remoção física.",
        "D) Comprimir dados binários para transmissão rápida em fibra óptica."
    ], 
    "B", 
    "O Diffie-Hellman é um protocolo revolucionário de troca de chaves baseado em aritmética modular, sendo a base para estabelecer sessões criptografadas seguras na internet.", 
    "Ele resolve o problema clássico de como compartilhar segredos em ambientes abertos."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "No padrão de certificados digitais X.509, o que contém o campo 'Assunto' (Subject) do certificado?", 
    "Padrão X.509", 
    [
        "A) A chave privada secreta do proprietário do certificado.",
        "B) As informações de identidade da entidade à qual o certificado foi emitido (como nome, CNPJ/CPF, país, e-mail e organização).",
        "C) A lista de algoritmos que a Autoridade Certificadora proibiu de usar.",
        "D) O valor do hash gerado pelo servidor no momento do boot."
    ], 
    "B", 
    "O campo Subject identifica claramente a quem pertence a chave pública contida no certificado, permitindo que o usuário saiba com quem está se comunicando.", 
    "O padrão X.509 define a estrutura estruturada desses metadados."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que diferencia um Certificado Digital do tipo A1 de um do tipo A3 no padrão ICP-Brasil?", 
    "Tipos de Certificados A1 vs A3", 
    [
        "A) O tipo A1 é para pessoas físicas e o tipo A3 é exclusivo para órgãos governamentais.",
        "B) O tipo A1 é armazenado em arquivo de software no computador com validade de 1 ano, enquanto o tipo A3 é armazenado em hardware dedicado (token USB ou cartão inteligente) com validade de até 5 anos.",
        "C) O tipo A1 utiliza criptografia simétrica e o tipo A3 utiliza criptografia quântica.",
        "D) Não há diferenças práticas; tratam-se apenas de nomenclaturas comerciais de empresas diferentes."
    ], 
    "B", 
    "A escolha entre A1 (praticidade de instalação em múltiplos sistemas) e A3 (maior segurança física por exigir presença do token e senha PIN) depende da necessidade corporativa.", 
    "Ambos possuem a mesma validade jurídica perante a ICP-Brasil."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que é o conceito de 'Forward Secrecy' (Sigilo Direfeito Perfeito) em protocolos como o TLS?", 
    "Forward Secrecy", 
    [
        "A) A garantia de que a chave privada da Autoridade Certificadora nunca expira.",
        "B) A propriedade que assegura que a interceptação de chaves de sessão passadas não será comprometida caso a chave privada de longo prazo do servidor venha a ser vazada no futuro.",
        "C) O bloqueio automático de IPs suspeitos de ataques de força bruta.",
        "D) A criptografia automática de logs de auditoria em servidores de nuvem."
    ], 
    "B", 
    "Com Forward Secrecy, cada sessão de navegação gera chaves efêmeras únicas e descartáveis. Mesmo que um invasor grave todo o tráfego de hoje e roube a chave do servidor amanhã, ele não conseguirá descriptografar as conversas passadas.", 
    "É um pilar fundamental da privacidade moderna na web."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que significa a sigla 'HSM' (Hardware Security Module) no contexto de segurança e certificação?", 
    "HSM", 
    [
        "A) High Security Memory, um tipo de memória RAM ultrarrápida resistente a vírus.",
        "B) Hardware Security Module, um dispositivo físico especializado e altamente blindado projetado para gerar, proteger e gerenciar chaves criptográficas e executar operações de assinatura com segurança máxima.",
        "C) Hash Secure Method, o protocolo padrão para validação de senhas em bancos de dados.",
        "D) Host System Monitor, um software antivírus para servidores Linux."
    ], 
    "B", 
    "Os HSMs são utilizados por Autoridades Certificadoras, bancos e grandes corporações para impedir que chaves privadas mestras sejam extraídas fisicamente ou acessadas por softwares maliciosos.", 
    "Possuem certificações rígidas contra violações físicas (tamper-proof)."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Qual é o papel do protocolo OCSP (Online Certificate Status Protocol) em relação às listas de revogação tradicionais (CRL)?", 
    "OCSP vs CRL", 
    [
        "A) Substituir a criptografia assimétrica por assinaturas baseadas em blocos.",
        "B) Permitir a consulta em tempo real e de forma pontual sobre a validade de um certificado digital específico, evitando a necessidade de baixar listas de revogação inteiras (CRL) que podem ser muito grandes.",
        "C) Comprimir o tamanho do certificado digital para acelerar o carregamento de páginas web.",
        "D) Criptografar o tráfego de e-mails corporativos baseados em PGP."
    ], 
    "B", 
    "Enquanto a CRL obriga o cliente a baixar um arquivo com todos os certificados revogados do sistema, o OCSP responde de forma direta e rápida 'Sim/Não' para o certificado consultado no momento.", 
    "Muitos servidores hoje implementam o recurso de 'OCSP Stapling' para otimizar ainda mais essa checagem."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que é um ataque de 'Força Bruta' direcionado a sistemas de criptografia ou senhas?", 
    "Ataques Criptográficos", 
    [
        "A) A exploração de falhas lógicas no código fonte de uma aplicação web.",
        "B) A tentativa sistemática de testar todas as combinações possíveis de chaves ou senhas até encontrar a correta.",
        "C) O envio de vírus através de pen drives infectados para engenharia social.",
        "D) A alteração física de cabos de rede para escuta clandestina."
    ], 
    "B", 
    "A força bruta depende puramente do poder computacional. Chaves longas e algoritmos modernos tornam esse tipo de ataque impraticável pelo tempo necessário para quebrar o código.", 
    "Políticas de bloqueio após tentativas falhas e uso de senhas complexas mitigam esse risco."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Qual é a função do algoritmo RSA no ecossistema de segurança digital?", 
    "Algoritmo RSA", 
    [
        "A) Compactar arquivos de texto para economizar espaço de armazenamento.",
        "B) Criptografar fluxos contínuos de dados em redes Wi-Fi domésticas.",
        "C) Realizar criptografia assimétrica e assinaturas digitais com base na dificuldade matemática da fatoração de grandes números primos.",
        "D) Gerar números aleatórios para uso em funções hash."
    ], 
    "C", 
    "Criado por Rivest, Shamir e Adleman, o RSA é um dos primeiros e mais famosos algoritmos de chave pública, amplamente utilizado para assinaturas e troca segura de chaves.", 
    "Exige tamanhos de chave maiores (ex: 2048 ou 4096 bits) para garantir segurança atual."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que caracteriza uma Cifra de Substituição Simples histórica (como a Cifra de César)?", 
    "Criptografia Clássica", 
    [
        "A) O uso de chaves públicas de 256 bits geradas por computador quântico.",
        "B) O deslocamento ou substituição fixa de letras do alfabeto por outras, sendo extremamente vulnerável à análise de frequência de caracteres.",
        "C) A divisão do texto em blocos simétricos validados por função hash.",
        "D) A impossibilidade matemática de decodificação sem a chave privada."
    ], 
    "B", 
    "Na Cifra de César, cada letra é trocada por outra situada um número fixo de posições à frente no alfabeto. Como a frequência das letras na língua escrita é constante, é fácil quebrá-la por estatística.", 
    "Curiosidade histórica que ilustra a evolução para a criptografia moderna."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que significa a propriedade de 'Confidencialidade' na Tríade da Segurança da Informação (CIA)?", 
    "Tríade CIA", 
    [
        "A) Garantir que os dados não foram alterados ou corrompidos por terceiros.",
        "B) Assegurar que a informação seja acessível apenas a pessoas, entidades ou sistemas autorizados, impedindo o acesso não autorizado.",
        "C) Garantir que os sistemas estejam sempre disponíveis para os usuários legítimos.",
        "D) Proibir o uso de assinaturas digitais em documentos corporativos."
    ], 
    "B", 
    "A confidencialidade é alcançada primordialmente através do uso de mecanismos de **criptografia**, assegurando que mesmo que os dados sejam interceptados, não possam ser lidos sem a chave correta.", 
    "Complementa a Integridade e a Disponibilidade na tríade básica da segurança."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que é uma 'Chave Efêmera' (Ephemeral Key) em sessões de segurança de rede?", 
    "Chaves Efêmeras", 
    [
        "A) Uma chave que fica gravada permanentemente no hardware do roteador.",
        "B) Uma chave criptográfica gerada especificamente para uma única sessão de comunicação e descartada logo em seguida, garantindo maior segurança.",
        "C) Uma senha de acesso temporário enviada por SMS para autenticação em dois fatores (2FA).",
        "D) Um certificado digital emitido por apenas 24 horas."
    ], 
    "B", 
    "O uso de chaves efêmeras (como no DHE ou ECDHE) impede que o comprometimento de longo prazo de uma chave principal afete sessões anteriores, sendo a base do conceito de Forward Secrecy.", 
    "Reduz drasticamente a janela de vulnerabilidade em caso de ataques."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Qual é o objetivo principal de um ataque de 'Adivinhação de Senha baseada em Dicionário'?", 
    "Ataques de Dicionário", 
    [
        "A) Descobrir senhas testando palavras comuns, termos do cotidiano e combinações frequentes contidas em listas pré-definidas, em vez de testar todas as combinações possíveis.",
        "B) Injetar comandos maliciosos em campos de formulários web.",
        "C) Roubar certificados digitais armazenados em pen drives A3.",
        "D) Modificar a estrutura de tabelas relacionais em bancos de dados."
    ], 
    "A", 
    "Como muitas pessoas escolhem senhas fáceis (como '123456', 'senha', 'password'), os ataques de dicionário são muito mais rápidos que a força bruta pura.", 
    "Políticas de senha forte e restrição de tentativas bloqueiam essa prática."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que é o PGP (Pretty Good Privacy) criado por Phil Zimmermann?", 
    "PGP e GPG", 
    [
        "A) Um protocolo de camada de enlace para redes locais sem fio.",
        "B) Um programa de criptografia amplamente utilizado para assinar, criptografar e descriptografar dados, como e-mails e arquivos, baseado em criptografia híbrida.",
        "C) Um padrão governamental brasileiro para emissão de notas fiscal eletrônicas.",
        "D) Um sistema de controle de versão concorrente do Git."
    ], 
    "B", 
    "O PGP utiliza um modelo de 'Teia de Confiança' (Web of Trust) descentralizado, onde os próprios usuários assinam chaves uns dos outros para validar identidades, diferindo das Autoridades Certificadoras tradicionais.", 
    "O GnuPG (GPG) é a implementação livre e aberta padrão hoje em dia."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que é a Criptografia Híbrida e por que ela é o padrão na internet moderna?", 
    "Criptografia Híbrida", 
    [
        "A) A combinação de senhas numéricas com biometria facial.",
        "B) O uso simultâneo de criptografia assimétrica (para trocar de forma segura a chave simétrica no início) e criptografia simétrica (para trafegar o restante dos dados com alta velocidade).",
        "C) A mistura de redes locais corporativas com servidores em nuvem pública.",
        "D) O armazenamento simultâneo de certificados A1 e A3 no mesmo token."
    ], 
    "B", 
    "A criptografia híbrida une o melhor dos dois mundos: a conveniência e segurança na troca inicial da assimétrica com a velocidade de processamento da simétrica.", 
    "É exatamente esse mecanismo que o HTTPS/TLS utiliza em todas as conexões web."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "No contexto de segurança, o que significa um ataque de 'Rainbow Table' (Tabelas Arco-Íris)?", 
    "Rainbow Tables", 
    [
        "A) Um ataque visual de engenharia social voltado para cores de interface.",
        "B) Uma técnica de ataque baseada em tabelas pré-computadas de hashes de senhas comuns, permitindo reverter rapidamente hashes sem Salt para descobrir o texto original.",
        "C) Uma ferramenta de testes de invasão para redes sem fio criptografadas com WPA3.",
        "D) Um método para burlar certificados SSL autoassinados em navegadores."
    ], 
    "B", 
    "As Rainbow Tables economizam tempo de processamento ao consultar resultados de hashes já calculados previamente para milhões de palavras.", 
    "O uso obrigatório de **Salt** inutiliza as Rainbow Tables, pois o hash armazenado torna-se único para cada usuário."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que valida o atributo de 'Integridade' em um sistema de segurança da informação?", 
    "Integridade", 
    [
        "A) Que os dados só podem ser lidos por pessoas com chave privada.",
        "B) Que a informação não foi modificada, adulterada, corrompida ou destruída de forma não autorizada durante o armazenamento ou transmissão.",
        "C) Que o sistema possui redundância geográfica em caso de queda de energia.",
        "D) Que o usuário efetuou login utilizando autenticação em dois fatores."
    ], 
    "B", 
    "A integridade é comumente garantida através de funções de hash e assinaturas digitais, permitindo detectar imediatamente qualquer alteração indevida nos dados.", 
    "Se um único caractere do arquivo for alterado, o hash resultante muda completamente."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que é um Certificado Autoassinado (Self-Signed Certificate)?", 
    "Certificados Autoassinados", 
    [
        "A) Um certificado emitido por uma Autoridade Certificadora governamental oficial.",
        "B) Um certificado cuja chave pública é assinada pela sua própria chave privada correspondente, sem passar por uma Autoridade Certificadora confiável externa.",
        "C) Um documento assinado digitalmente pelo próprio usuário utilizando seu token A3.",
        "D) Um certificado que não possui validade temporal definida."
    ], 
    "B", 
    "Certificados autoassinados são úteis para ambientes de desenvolvimento, testes locais ou redes internas fechadas, mas geram avisos de segurança nos navegadores públicos porque não há uma AC confiável na raiz para atestar a identidade.", 
    "Falta-lhes a validação por uma terceira parte confiável."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Qual é a função do algoritmo SHA-256 no protocolo de criptografia e integridade?", 
    "SHA-256", 
    [
        "A) Criptografar grandes arquivos de vídeo para transmissão rápida em streaming.",
        "B) Gerar um resumo criptográfico (hash) de tamanho fixo de 256 bits a partir de qualquer dado de entrada, sendo altamente sensível a qualquer mínima alteração.",
        "C) Atuar como chave simétrica principal para conexões HTTP em texto plano.",
        "D) Validar a identidade física do usuário em cartórios digitais."
    ], 
    "B", 
    "O SHA-256 faz parte da família SHA-2 e é amplamente utilizado em assinaturas digitais, tecnologia Blockchain (como no Bitcoin) e verificação de arquivos baixados na internet.", 
    "É considerado seguro e amplamente adotado globalmente."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que caracteriza uma Criptografia de Chave Simétrica baseada em 'Fluxo' (Stream Cipher)?", 
    "Cifras de Fluxo", 
    [
        "A) O algoritmo criptografa blocos fixos de 128 ou 256 bits de uma só vez.",
        "B) O algoritmo cifra os dados bit a bit ou byte a byte (geralmente usando uma operação XOR com uma sequência gerada por pseudo-aleatoriedade), sendo ideal para dados em tempo real.",
        "C) O algoritmo exige chaves assimétricas trocadas via Diffie-Hellman.",
        "D) O algoritmo substitui o texto por matrizes matemáticas complexas."
    ], 
    "B", 
    "Diferente das cifras de bloco (como o AES), as cifras de fluxo (como o RC4 ou ChaCha20) processam fluxos contínuos de dados com baixa latência.", 
    "Muito utilizadas em transmissões de áudio e vídeo em tempo real."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que significa a sigla 'CRL' (Certificate Revocation List) em infraestruturas de chave pública?", 
    "CRL", 
    [
        "A) Control Request Line, o comando de conexão inicial do TLS.",
        "B) Certificate Revocation List, uma lista digital assinada por uma Autoridade Certificadora que contém os números seriais de todos os certificados que foram revogados antes de sua expiração.",
        "C) Common Root License, a licença padrão de uso de chaves públicas.",
        "D) Client Relay Log, o arquivo de auditoria de acessos web."
    ], 
    "B", 
    "Sistemas de segurança consultam periodicamente a CRL para garantir que não estão confiando em certificados cuja chave privada tenha sido comprometida.", 
    "Tem sido gradualmente complementada ou substituída pelo protocolo OCSP em tempo real."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que é um ataque de 'Análise de Frequência' aplicado à criptografia clássica?", 
    "Análise de Frequência", 
    [
        "A) Medir a quantidade de energia elétrica consumida pelo processador durante a cifragem.",
        "B) Estudar a frequência estatística com que certas letras ou palavras aparecem em um texto cifrado para compará-las com a língua natural e deduzir a chave de substituição.",
        "C) Analisar a taxa de pacotes por segundo em um ataque de negação de serviço.",
        "D) Verificar a validade dos certificados digitais em horários de pico."
    ], 
    "B", 
    "Como em qualquer idioma algumas letras aparecem muito mais que outras (ex: 'A' e 'E' em português), cifras baseadas em simples substituição de letras tornam-se vulneráveis a esse tipo de estudo estatístico.", 
    "Criptografias modernas eliminam essa vulnerabilidade."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Qual é a finalidade principal do protocolo HSTS (HTTP Strict Transport Security) em servidores web?", 
    "HSTS", 
    [
        "A) Comprimir arquivos estáticos para acelerar o carregamento via CDN.",
        "B) Instruir o navegador do usuário a se comunicar com o site exclusivamente através de conexões HTTPS seguras, prevenindo ataques de downgrade e interceptação inicial.",
        "C) Substituir a necessidade de certificados digitais emitidos por Autoridades Certificadoras.",
        "D) Gerenciar o banco de dados de senhas com uso de Salt."
    ], 
    "B", 
    "O HSTS evita que um usuário seja redirecionado por engano ou ataque para uma versão HTTP vulnerável do site, forçando o canal criptografado por padrão.", 
    "Um mecanismo essencial para blindagem de aplicações web modernas."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que é uma 'Assinatura Cega' (Blind Signature) no contexto de criptografia?", 
    "Assinatura Cega", 
    [
        "A) Uma assinatura digital feita por pessoas com deficiência visual.",
        "B) Uma forma de assinatura digital onde o conteúdo da mensagem é ocultado (mascarado) antes de ser assinado pelo emissor, garantindo o anonimato de quem envia (comum em sistemas de pagamento digital e e-voting).",
        "C) Uma assinatura feita utilizando criptografia simétrica sem chave pública.",
        "D) Um certificado digital cuja chave privada foi perdida."
    ], 
    "B", 
    "Criada por David Chaum, a assinatura cega permite que uma autoridade assine um documento sem saber exatamente o que está contido nele, preservando a privacidade e evitando o rastreamento do usuário.", 
    "Conceito avançado aplicado em criptografia focada em privacidade."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "O que significa a expressão 'Cifra de Bloco' (Block Cipher)?", 
    "Cifras de Bloco", 
    [
        "A) Um sistema que bloqueia o acesso ao computador após três erros de senha.",
        "B) Um método de criptografia simétrica que opera em blocos de dados de tamanho fixo (ex: 64 ou 128 bits), transformando o bloco através de várias rodadas de substituição e permutação.",
        "C) Um arquivo compactado protegido por senha mestra.",
        "D) Um formato de certificado digital usado exclusivamente em redes corporativas."
    ], 
    "B", 
    "O AES e o DES são exemplos clássicos de cifras de bloco. Como operam em blocos fixos, utilizam modos de operação (como CBC, GCM) para cifrar mensagens maiores que o tamanho do bloco.", 
    "Garantem alta segurança e difusão de bits."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Por que o algoritmo MD5 (Message Digest 5) deixou de ser recomendado para fins de segurança criptográfica?", 
    "Insegurança do MD5", 
    [
        "A) Porque ele consome muita memória RAM dos servidores modernos.",
        "B) Devido à descoberta de vulnerabilidades graves que facilitam a geração rápida de colisões (duas entradas diferentes gerando o mesmo hash), comprometendo a integridade.",
        "C) Porque ele exige chaves simétricas de 4096 bits.",
        "D) Porque ele não é compatível com o sistema operacional Windows."
    ], 
    "B", 
    "Hoje o MD5 é considerado totalmente quebrado para uso em segurança e assinaturas digitais, embora ainda possa ser encontrado em checagens simples e não sensíveis de integridade de arquivos.", 
    "Deve-se utilizar sempre SHA-256 ou superiores."
);

addQuestion(
    "Criptografia e Certificação Digital", 
    "Média", 
    "Qual é o papel da Autoridade Raiz (Root CA) em uma Infraestrutura de Chaves Públicas?", 
    "Autoridade Raiz", 
    [
        "A) Armazenar cópias físicas de todas as senhas de usuários da internet.",
        "B) Estar no topo da cadeia de confiança, sendo uma entidade cujos certificados vêm pré-instalados e confiáveis por padrão nos sistemas operacionais e navegadores.",
        "C) Bloquear ataques cibernéticos em tempo real na camada de rede.",
        "D) Emitir certificados de tipo A1 exclusivamente para empresas públicas."
    ], 
    "B", 
    "A Root CA possui altíssimo nível de segurança e isolamento. Se uma Autoridade Raiz for comprometida, toda a segurança da cadeia baseada nela na internet global entra em risco.", 
    "Por isso, o uso de chaves raiz é extremamente restrito e auditado."
);
