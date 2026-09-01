
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
   LÓGICA DE PROGRAMAÇÃO
===================================================== */
const logicaProgramacaoQuest = [
    {
        q: "O que é uma variável no contexto de lógica de programação?",
        d: "Fácil",
        c: "Conceitos Básicos",
        o: [
            "A) Um comando físico que reseta o processador.",
            "B) Um espaço reservado na memória RAM do computador para armazenar dados que podem ser alterados durante a execução do programa.",
            "C) Um erro de sintaxe que impede a compilação.",
            "D) Uma biblioteca externa de funções matemáticas."
        ],
        a: "B",
        e: "Variáveis guardam dados temporários na memória RAM que mudam de valor conforme o programa roda.",
        t: "Essencial para qualquer algoritmo que precise manipular dados."
    },
    {
        q: "Qual operador lógico retorna verdadeiro apenas se AMBAS as condições avaliadas forem verdadeiras?",
        d: "Fácil",
        c: "Operadores Lógicos",
        o: [
            "A) OU (OR / ||)",
            "B) NÃO (NOT / !)",
            "C) E (AND / &&)",
            "D) OU Exclusivo (XOR)"
        ],
        a: "C",
        e: "O operador E exige que todas as premissas lógicas sejam verdadeiras para o resultado ser verdadeiro.",
        t: "Fundamental em estruturas condicionais compostas."
    },
    {
        q: "O que é um algoritmo em ciência da computação?",
        d: "Fácil",
        c: "Conceitos Básicos",
        o: [
            "A) Um programa executável em linguagem C.",
            "B) Uma sequência finita de instruções claras e bem definidas, não ambíguas, projetadas para resolver um problema específico.",
            "C) Um circuito integrado de silício.",
            "D) Um vírus de computador."
        ],
        a: "B",
        e: "Algoritmos são receitas lógicas passo a passo que podem ser traduzidas para qualquer linguagem de programação.",
        t: "Base de toda a lógica computacional."
    },
    {
        q: "Qual estrutura de controle condicional é mais adequada para verificar múltiplas opções baseadas no valor exato de uma única variável?",
        d: "Média",
        c: "Estruturas de Controle",
        o: [
            "A) Um laço de repetição infinito `while(true)`.",
            "B) Uma estrutura de seleção múltipla `switch / case`.",
            "C) Uma função recursiva sem caso base.",
            "D) Uma tabela hash estática."
        ],
        a: "B",
        e: "O `switch/case` é otimizado para múltiplos desvios condicionais baseados na igualdade de uma mesma expressão.",
        t: "Torna o código mais limpo que múltiplos `if/else if` encadeados."
    },
    {
        q: "Qual é o resultado da expressão lógica: `(5 > 3) AND (10 == 2 * 5) OR NOT(8 < 4)`?",
        d: "Média",
        c: "Expressões Booleanas",
        o: [
            "A) Falso",
            "B) Verdadeiro",
            "C) Indeterminado",
            "D) Erro de tipo"
        ],
        a: "B",
        e: "Analisando: `(True) AND (True) OR NOT(False)` -> `True OR True` -> `True`.",
        t: "A ordem de precedência respeita parênteses, NOT, AND e por fim OR."
    },
    {
        q: "O que caracteriza uma função pura na programação?",
        d: "Média",
        c: "Funções",
        o: [
            "A) Uma função que altera variáveis globais do sistema.",
            "B) Uma função que, para os mesmos argumentos de entrada, sempre retorna exatamente o mesmo resultado e não causa efeitos colaterais visíveis externamente.",
            "C) Uma função que roda apenas no hardware do servidor principal.",
            "D) Uma função que não aceita parâmetros de entrada."
        ],
        a: "B",
        e: "Funções puras são previsíveis e extremamente fáceis de testar por não dependerem de estados mutáveis externos.",
        t: "Conceito central na programação funcional."
    },
    {
        q: "Qual é o comportamento e o número de execuções de um laço `do-while` em comparação a um laço `while` tradicional quando a condição inicial é falsa?",
        d: "Difícil",
        c: "Laços de Repetição",
        o: [
            "A) Ambos executam exatamente o mesmo número de vezes (zero vezes).",
            "B) O `while` executa pelo menos uma vez, enquanto o `do-while` não executa nenhuma vez.",
            "C) O `do-while` garante que o bloco de código seja executado obrigatoriamente pelo menos uma vez antes de testar a condição no final, enquanto o `while` testa antes de executar.",
            "D) O `do-while` gera um erro de compilação se a condição for falsa."
        ],
        a: "C",
        e: "O diferencial do `do-while` é o teste lógico ao final do bloco, garantindo ao menos uma execução.",
        t: "Útil para menus interativos onde a tela precisa aparecer antes de validar a escolha."
    },
    {
        q: "O que ocorre quando uma função recursiva é executada infinitamente sem um caso base adequado?",
        d: "Difícil",
        c: "Recursividade",
        o: [
            "A) O processador desliga automaticamente para economizar energia.",
            "B) Ocorre um estouro de pilha (`Stack Overflow`) devido ao esgotamento do espaço alocado para o contexto das chamadas recursivas na memória.",
            "C) O compilador converte a recursão em loop linear de forma automática.",
            "D) O sistema operacional limpa a memória RAM dinamicamente."
        ],
        a: "B",
        e: "Cada chamada empilha um contexto na call stack. Sem parada, a pilha transborda.",
        t: "Toda recursão precisa de um critério de terminação claro."
    },
    {
        q: "Qual é a complexidade assintótica (Big O) de um algoritmo de busca binária em um vetor ordenado de tamanho $n$?",
        d: "Difícil",
        c: "Complexidade Algorítmica",
        o: [
            "A) O(n)",
            "B) O(n²)",
            "C) O(log n)",
            "D) O(1)"
        ],
        a: "C",
        e: "A busca binária divide o espaço de busca pela metade a cada passo, resultando em crescimento logarítmico.",
        t: "Muito superior à busca linear O(n) em grandes massas de dados."
    },
    {
        q: "Como o algoritmo de ordenação Bubble Sort se comporta no pior e no melhor caso de complexidade temporal?",
        d: "Difícil",
        c: "Algoritmos de Ordenação",
        o: [
            "A) O(1) para ambos os casos.",
            "B) O(n log n) no pior e O(n) no melhor caso.",
            "C) O(n²) no pior caso (vetor inversamente ordenado) e O(n) no melhor caso (vetor já ordenado com otimização de parada).",
            "D) O(n²) fixo em qualquer cenário sem variações."
        ],
        a: "C",
        e: "Se o Bubble Sort for implementado com uma flag de verificação de trocas, ele detecta que o vetor já está ordenado na primeira passada e encerra em O(n).",
        t: "Exemplo clássico de análise de eficiência de algoritmos de troca."
    }
];

logicaProgramacaoQuest.forEach(x => {
    addQuestion("Lógica de Programação", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   ESTRUTURAS DE DADOS
===================================================== */
const estruturaDadosQuest = [
    {
        q: "Qual estrutura de dados opera sob o princípio LIFO (Last In, First Out - O último a entrar é o primeiro a sair)?",
        d: "Fácil",
        c: "Pilhas",
        o: [
            "A) Fila (Queue)",
            "B) Pilha (Stack)",
            "C) Árvore Binária",
            "D) Tabela Hash"
        ],
        a: "B",
        e: "A pilha funciona como uma pilha de pratos: o último colocado no topo é o primeiro a ser retirado.",
        t: "Utilizada no controle de chamadas de funções e operações de desfazer (undo)."
    },
    {
        q: "Qual estrutura de dados opera estritamente sob o princípio FIFO (First In, First Out - O primeiro a entrar é o primeiro a sair)?",
        d: "Fácil",
        c: "Filas",
        o: [
            "A) Pilha",
            "B) Fila (Queue)",
            "C) Árvore AVL",
            "D) Tabela Hash"
        ],
        a: "B",
        e: "A fila funciona como uma fila de atendimento real: quem chega primeiro é atendido primeiro.",
        t: "Essencial em algoritmos de busca em largura (BFS) e filas de mensagens."
    },
    {
        q: "O que caracteriza um Array (Vetor) tradicional na memória RAM?",
        d: "Fácil",
        c: "Arrays",
        o: [
            "A) Espaços de memória alocados de forma contígua, permitindo acesso direto por índice.",
            "B) Nós espalhados aleatoriamente conectados por ponteiros duplos.",
            "C) Uma estrutura que não possui limite nem restrição de tipo de dados.",
            "D) Um arquivo de texto gravado no disco rígido."
        ],
        a: "A",
        e: "A contiguidade na memória permite acesso indexado instantâneo O(1).",
        t: "Sua desvantagem é o tamanho estático em muitas linguagens."
    },
    {
        q: "Qual é a principal vantagem de desempenho de uma Tabela Hash (Hash Table) em operações de busca direta?",
        d: "Média",
        c: "Tabelas Hash",
        o: [
            "A) Complexidade de tempo média de busca de O(1) constante através de funções de hash.",
            "B) Garantir ordenação alfabética estrita automática de todos os elementos.",
            "C) Consumir zero bytes de memória RAM.",
            "D) Permitir chaves duplicadas sem nenhuma colisão."
        ],
        a: "A",
        e: "O mapeamento direto por função hash permite acesso instantâneo em tempo constante médio.",
        t: "Bases de dados chave-valor e dicionários baseiam-se nessa estrutura."
    },
    {
        q: "Qual é a propriedade fundamental que define uma Árvore Binária de Busca (BST)?",
        d: "Média",
        c: "Árvores Binárias",
        o: [
            "A) Todos os nós devem ter exatamente quatro filhos.",
            "B) Para qualquer nó, todos os valores na subárvore esquerda são menores que o nó, e todos os valores na subárvore direita são maiores.",
            "C) Os elementos formam um círculo fechado sem raiz.",
            "D) É idêntica a uma lista encadeada linear."
        ],
        a: "B",
        e: "Essa propriedade recursiva viabiliza buscas rápidas semelhantes à busca binária.",
        t: "Árvores desbalanceadas podem degradar para O(n)."
    },
    {
        q: "Qual é a principal diferença estrutural entre uma Lista Encadeada Simples e uma Lista Duplamente Encadeada?",
        d: "Média",
        c: "Listas Encadeadas",
        o: [
            "A) A lista duplamente encadeada não usa ponteiros.",
            "B) Na lista simples, cada nó aponta apenas para o próximo elemento; na duplamente encadeada, cada nó possui ponteiros tanto para o próximo quanto para o elemento anterior, permitindo navegação bidirecional.",
            "C) Listas simples só funcionam em disco rígido.",
            "D) Listas duplas ocupam menos memória que arrays."
        ],
        a: "B",
        e: "O ponteiro anterior facilita operações de remoção reversa ao custo de um leve aumento no uso de memória.",
        t: "Muito usada em estruturas de histórico de navegação."
    },
    {
        q: "Qual é a complexidade de tempo no pior caso dos algoritmos de ordenação baseados em comparação, como o MergeSort?",
        d: "Difícil",
        c: "Algoritmos de Ordenação",
        o: [
            "A) O(1)",
            "B) O(n)",
            "C) O(n log n) garantido para o MergeSort",
            "D) O(n²)"
        ],
        a: "C",
        e: "O MergeSort divide o vetor exatamente ao meio de forma recursiva, garantindo desempenho O(n log n) mesmo no pior cenário.",
        t: "Excelente exemplo de algoritmo de divisão e conquista."
    },
    {
        q: "Como uma Árvore AVL mantém sua eficiência de busca em O(log n) garantida?",
        d: "Difícil",
        c: "Árvores AVL",
        o: [
            "A) Através de rotações automáticas (simples ou duplas) sempre que o fator de balanceamento (diferença de altura entre subárvores esquerda e direita) absoluto de qualquer nó exceder 1.",
            "B) Apagando nós aleatórios periodicamente.",
            "C) Convertendo-se em uma tabela hash após 100 inserções.",
            "D) Impedindo inserções de números negativos."
        ],
        a: "A",
        e: "O auto-balanceamento evita que a árvore degeneresca em uma lista encadeada linear.",
        t: "Garante operações de busca, inserção e remoção sempre em O(log n)."
    },
    {
        q: "Qual é a vantagem de utilizar uma Lista de Adjacência em vez de uma Matriz de Adjacência para representar Grafos?",
        d: "Difícil",
        c: "Grafos",
        o: [
            "A) A matriz é sempre mais rápida para qualquer tipo de grafo.",
            "B) Para grafos esparsos (com poucas arestas em relação ao total possível de conexões), a lista de adjacência consome consideravelmente menos memória O(V + E) em comparação ao O(V²) da matriz.",
            "C) A lista de adjacência elimina a necessidade de vértices.",
            "D) A matriz impede ciclos fechados no grafo."
        ],
        a: "B",
        e: "A escolha da representação de grafos depende diretamente da densidade das conexões e da operação predominante.",
        t: "Fundamental em algoritmos de menor caminho como Dijkstra."
    },
    {
        q: "O que caracteriza uma Tabela Hash com tratamento de colisão por Endereçamento Aberto (Open Addressing) com Sondagem Linear (Linear Probing)?",
        d: "Difícil",
        c: "Tabelas Hash",
        o: [
            "A) Cada posição da tabela armazena uma lista encadeada independente.",
            "B) Quando ocorre colisão em um índice hash ocupado, o algoritmo examina as posições seguintes sequencialmente (+1, +2...) até encontrar um slot livre.",
            "C) Os dados colididos são descartados permanentemente.",
            "D) O tamanho da tabela dobra e todos os dados são apagados."
        ],
        a: "B",
        e: "O endereçamento aberto mantém todos os elementos dentro do próprio vetor principal da hash table.",
        t: "Pode sofrer com o fenômeno de agrupamento primário (primary clustering)."
    }
];

estruturaDadosQuest.forEach(x => {
    addQuestion("Estruturas de Dados", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   PROGRAMAÇÃO ORIENTADA A OBJETOS (POO)
===================================================== */
const pooQuest = [
    {
        q: "O que é o encapsulamento na Programação Orientada a Objetos?",
        d: "Fácil",
        c: "Pilares da POO",
        o: [
            "A) A capacidade de criar novas classes a partir de classes existentes.",
            "B) Ocultar os detalhes internos de funcionamento de um objeto e expor apenas uma interface controlada de acesso.",
            "C) A conversão automática de tipos primitivos.",
            "D) A execução de múltiplos métodos simultaneamente."
        ],
        a: "B",
        e: "O encapsulamento protege o estado interno do objeto usando modificadores de acesso (como private/public).",
        t: "Garante a integridade dos dados da classe."
    },
    {
        q: "O que é herança em POO?",
        d: "Fácil",
        c: "Pilares da POO",
        o: [
            "A) Um mecanismo onde uma classe (subclasse) herda atributos e métodos de outra classe (superclasse), promovendo reutilização de código.",
            "B) A duplicação manual de código fonte entre arquivos diferentes.",
            "C) Ocultar métodos sensíveis de bibliotecas de terceiros.",
            "D) Um erro de compilação por ambiguidade."
        ],
        a: "A",
        e: "Permite criar hierarquias lógicas de classes reaproveitando comportamentos comuns.",
        t: "Representa a relação 'é um' (is-a)."
    },
    {
        q: "O que é polimorfismo em Programação Orientada a Objetos?",
        d: "Fácil",
        c: "Pilares da POO",
        o: [
            "A) A capacidade de um mesmo método assumir comportamentos diferentes dependendo do objeto que o executa.",
            "B) A criação de classes que não possuem atributos.",
            "C) A execução de código em múltiplas máquinas virtuais.",
            "D) A proibição de sobrecarga de construtores."
        ],
        a: "A",
        e: "Permite tratar objetos de classes diferentes através de uma interface ou superclasse comum.",
        t: "Base para flexibilidade em tempo de execução."
    },
    {
        q: "Qual é a diferença conceitual entre herança e composição?",
        d: "Média",
        c: "Herança vs Composição",
        o: [
            "A) Herança usa a relação 'é um' (is-a), enquanto composição usa a relação 'tem um' (has-a), sendo geralmente preferida para maior flexibilidade.",
            "B) Herança destrói dados e composição os duplica.",
            "C) Não há diferença; ambas resolvem o mesmo problema da mesma forma.",
            "D) Composição é exclusiva de linguagens funcionais."
        ],
        a: "A",
        e: "A composição promove melhor acoplamento frouxo reutilizando objetos por referência em vez de herdar comportamentos rígidos.",
        t: "O princípio de design favorito da comunidade orientada a objetos é 'prefira composição sobre herança'."
    },
    {
        q: "O que distingue uma Classe Abstrata de uma Interface pura?",
        d: "Média",
        c: "Classes Abstratas vs Interfaces",
        o: [
            "A) Classes abstratas não podem ter construtores; interfaces podem.",
            "B) Classes abstratas podem conter estado (atributos) e implementações parciais de métodos; interfaces tradicionais definem apenas contratos puros de comportamento (sem estado corporificado).",
            "C) Interfaces permitem herança múltipla de estado.",
            "D) Não há nenhuma diferença técnica em linguagens modernas."
        ],
        b: "B",
        e: "Interfaces definem 'o que' deve ser feito, enquanto classes abstratas podem prover uma base parcial de 'como' fazer.",
        t: "Em muitas linguagens modernas, interfaces agora suportam métodos default."
    },
    {
        q: "O que significa sobrecarga de métodos (Overloading) em POO?",
        d: "Média",
        c: "Sobrecarga de Métodos",
        o: [
            "A) Substituir um método herdado na classe filha.",
            "B) Criar múltiplos métodos com o mesmo nome na mesma classe, desde que possuam assinaturas diferentes (número ou tipos de parâmetros distintos).",
            "C) Executar métodos simultaneamente em threads separadas.",
            "D) Chamar métodos privados a partir de pacotes externos."
        ],
        a: "B",
        e: "A sobrecarga resolve-se em tempo de compilação com base nos argumentos passados.",
        t: "Exemplo clássico: múltiplos construtores com diferentes parâmetros."
    },
    {
        q: "O que o Princípio da Substituição de Liskov (LSP - SOLID) estabelece sobre hierarquias de classes?",
        d: "Difícil",
        c: "SOLID",
        o: [
            "A) Classes filhas devem ser capazes de substituir suas classes base em qualquer lugar sem alterar a corretude ou comportamento esperado do programa.",
            "B) Objetos nunca devem herdar métodos privados.",
            "C) Métodos estáticos não podem usar polimorfismo.",
            "D) Interfaces devem conter no máximo um método abstrato."
        ],
        a: "A",
        e: "O LSP garante que subclasses mantenham os contratos estabelecidos pela superclasse, evitando comportamentos inesperados.",
        t: "Violações de LSP geram bugs difíceis de rastrear em polimorfismo."
    },
    {
        q: "O que define o Princípio da Inversão de Dependência (DIP - SOLID)?",
        d: "Difícil",
        c: "SOLID",
        o: [
            "A) Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações. Abstrações não devem depender de detalhes; detalhes devem depender de abstrações.",
            "B) Classes devem ter apenas uma razão para mudar.",
            "C) Métodos privados devem ser acessíveis globalmente.",
            "D) Objetos nunca devem ser instanciados com o operador new."
        ],
        a: "A",
        e: "Promove o desacoplamento extremo através do uso de interfaces e injeção de dependências.",
        t: "Base conceitual de frameworks como Spring."
    },
    {
        q: "Como o princípio do OCP (Open/Closed Principle) do SOLID orienta o design de software?",
        d: "Difícil",
        c: "SOLID",
        o: [
            "A) As classes devem estar sempre abertas para modificação direta de código e fechadas para testes.",
            "B) Entidades de software (classes, módulos, funções) devem ser abertas para extensão, mas fechadas para modificação.",
            "C) O código fonte nunca pode ser versionado no Git.",
            "D) Funções devem ser executadas exclusivamente em servidores fechados."
        ],
        a: "B",
        e: "Permite adicionar novas funcionalidades criando novas classes ou comportamentos via polimorfismo, sem precisar alterar código antigo já testado.",
        t: "Evita o efeito cascata de bugs ao alterar sistemas legados."
    },
    {
        q: "O que caracteriza a Coesão Alta em um módulo orientado a objetos?",
        d: "Difícil",
        c: "Coesão e Acoplamento",
        o: [
            "A) O módulo executa uma única tarefa bem definida ou um conjunto de responsabilidades fortemente relacionadas.",
            "B) O módulo depende fortemente de dezenas de outras classes externas.",
            "C) O módulo possui milhares de linhas de código misturadas.",
            "D) O módulo não possui métodos públicos."
        ],
        a: "B",
        e: "Na verdade, a opção correta é: o módulo executa uma tarefa coesa e focada. Alta coesão combinada com baixo acoplamento é a meta da arquitetura limpa.",
        t: "Módulos coesos são fáceis de manter e reutilizar."
    }
];

pooQuest.forEach(x => {
    addQuestion("Programação Orientada a Objetos", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   JAVA
===================================================== */
const javaQuest = [
    {
        q: "Qual é a função do coletor de lixo (Garbage Collector) na JVM?",
        d: "Fácil",
        c: "Gerenciamento de Memória",
        o: [
            "A) Deletar arquivos temporários do disco rígido.",
            "B) Identificar e liberar automaticamente da memória RAM objetos que não possuem mais referências ativas.",
            "C) Compilar o código bytecode em código de máquina.",
            "D) Fechar conexões abertas com servidores FTP."
        ],
        a: "B",
        e: "O Garbage Collector evita vazamentos de memória gerenciando o ciclo de vida dos objetos na heap.",
        t: "Isso dispensa o desenvolvedor de liberar memória manualmente como em C/C++."
    },
    {
        q: "O que significa a extensão do arquivo compilado em Java (.class)?",
        d: "Fácil",
        c: "Compilação Java",
        o: [
            "A) Código fonte em texto plano editável.",
            "B) Bytecode intermediário gerado pelo compilador javac, executável pela Máquina Virtual Java (JVM).",
            "C) Um pacote compactado de imagens e estilos web.",
            "D) Script de banco de dados SQL."
        ],
        a: "B",
        e: "O bytecode garante o famoso lema do Java: 'Escreva uma vez, rode em qualquer lugar' (WORA).",
        t: "A JVM interpreta ou compila via JIT esse bytecode para a arquitetura nativa."
    },
    {
        q: "Qual é o ponto de entrada padrão (método main) para execução de uma aplicação Java autônoma?",
        d: "Fácil",
        c: "Estrutura Básica",
        o: [
            "A) `public void start(String[] args)`",
            "B) `public static void main(String[] args)`",
            "C) `private int execute()`",
            "D) `run(Application app)`"
        ],
        b: "B",
        e: "A JVM procura rigorosamente por essa assinatura exata para iniciar a execução da classe principal.",
        t: "O modificador static permite chamar o método sem instanciar a classe."
    },
    {
        q: "Qual é a diferença entre `String`, `StringBuilder` e `StringBuffer` em Java?",
        d: "Média",
        c: "Manipulação de Strings",
        o: [
            "A) `String` é mutável; os outros dois são de leitura exclusiva.",
            "B) `String` é imutável (cada concatenação gera um novo objeto); `StringBuilder` é mutável e não thread-safe (rápido); `StringBuffer` é mutável e thread-safe (sincronizado).",
            "C) Não há diferenças de performance ou mutabilidade.",
            "D) `StringBuilder` funciona apenas com tipos primitivos numéricos."
        ],
        b: "B",
        e: "Para loops intensivos de concatenação de texto, o uso de `StringBuilder` evita a criação excessiva de lixo na memória gerada por `Strings` imutáveis.",
        t: "Use `StringBuffer` apenas se houver concorrência explícita entre threads."
    },
    {
        q: "Qual é a utilidade da API de Streams introduzida no Java 8?",
        d: "Média",
        c: "Java Streams",
        o: [
            "A) Manipular arquivos binários de áudio em streaming na internet.",
            "B) Processar coleções de dados de forma declarativa utilizando operações funcionais como `filter`, `map` e `reduce`, facilitando paralelismo.",
            "C) Substituir o protocolo HTTP por sockets UDP.",
            "D) Criar interfaces gráficas de usuário (GUI)."
        ],
        a: "B",
        e: "Os streams modernizaram a manipulação de coleções em Java com código limpo e expressivo.",
        t: "Podem ser executados de forma sequencial ou paralela (`parallelStream`)."
    },
    {
        q: "O que o modificador `final` acarreta quando aplicado a uma classe, a um método ou a uma variável em Java?",
        d: "Média",
        c: "Modificador Final",
        o: [
            "A) Torna o elemento visível apenas dentro de pacotes privados.",
            "B) Aplicado a uma classe impede herança; a um método impede sobrescrita (override); a uma variável impede reatribuição de valor (constante).",
            "C) Deleta o elemento da memória RAM imediatamente.",
            "D) Transforma o elemento em thread-safe obrigatório."
        ],
        a: "B",
        e: "Garante imutabilidade de referência ou fechamento de hierarquias conforme a necessidade de design.",
        t: "Muito usado em constantes e boas práticas de segurança."
    },
    {
        q: "Como o mecanismo de reflexão (Reflection API) funciona em Java e quais são seus impactos comuns?",
        d: "Difícil",
        c: "Reflection API",
        o: [
            "A) Permite inspecionar e modificar classes, métodos, atributos e construtores em tempo de execução, muito usado em frameworks, embora traga impacto de performance e riscos de segurança.",
            "B) Converte código Java diretamente em JavaScript para o navegador.",
            "C) Substitui o uso de interfaces gráficas em aplicações desktop.",
            "D) Gera testes unitários automatizados em tempo de compilação."
        ],
        a: "A",
        e: "A reflection dá poder dinâmico extremo ao Spring, Hibernate e JUnit, mas deve ser usada com cautela devido ao custo de processamento.",
        t: "Permite acessar até mesmo membros privados se devidamente configurado."
    },
    {
        q: "O que ocorre sob o capô quando um bloco de código é sincronizado usando a palavra-chave `synchronized` em Java?",
        d: "Difícil",
        c: "Concorrência em Java",
        o: [
            "A) As threads são executadas em múltiplos núcleos físicos sem nenhuma restrição.",
            "B) É adquirido um monitor intrínseco (monitor lock) associado ao objeto, garantindo exclusão mútua e visibilidade de memória entre threads.",
            "C) O garbage collector é acionado imediatamente.",
            "D) O método é convertido em código nativo C++."
        ],
        a: "B",
        e: "Garante segurança contra condições de corrida (race conditions) em ambientes multi-thread.",
        t: "Uso excessivo pode gerar gargalos de contenção de locks."
    },
    {
        q: "Como o modelo de referências e tipos de objetos lidam com Memory Leaks em Java moderno?",
        d: "Difícil",
        c: "Gerenciamento Avançado de Memória",
        o: [
            "A) Java elimina totalmente qualquer possibilidade de vazamento de memória.",
            "B) Embora o GC limpe objetos sem referência, ocorrem memory leaks lógicos quando objetos mantêm referências ativas indesejadas (ex: coleções estáticas acumulando itens sem limpeza).",
            "C) Ocorre vazamento apenas em arquivos .class corrompidos.",
            "D) Ocorre quando o sistema operacional fica sem espaço em disco."
        ],
        a: "B",
        e: "O coletor de lixo não remove objetos que continuam referenciados por engano no código.",
        t: "Ferramentas de profiling (como VisualVM ou JProfiler) ajudam a diagnosticar."
    },
    {
        q: "O que são referências fracas (`WeakReference`) em Java e para que servem?",
        d: "Difícil",
        c: "Referências em Java",
        o: [
            "A) Referências que geram erros de compilação propositais.",
            "B) Referências que não impedem que o objeto referenciado seja coletado pelo Garbage Collector, sendo ideals para caches em memória que podem ser descartados sob pressão de RAM.",
            "C) Variáveis que aceitam apenas valores nulos.",
            "D) Ponteiros diretos para registradores da CPU."
        ],
        a: "B",
        e: "Úteis em estruturas como `WeakHashMap` para evitar que o cache consuma toda a memória heap.",
        t: "Diferem de soft, strong e phantom references."
    }
];

javaQuest.forEach(x => {
    addQuestion("Java", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   DART E FLUTTER
===================================================== */
const dartFlutterQuest = [
    {
        q: "O que é um 'Widget' no framework Flutter?",
        d: "Fácil",
        c: "Conceitos Flutter",
        o: [
            "A) Um componente de hardware para dispositivos móveis.",
            "B) A unidade básica imutável de construção da interface do usuário (UI), onde tudo (layouts, estilos, botões) é widget.",
            "C) Um banco de dados NoSQL local criptografado.",
            "D) Uma rota de navegação entre telas web."
        ],
        a: "B",
        e: "No Flutter, a interface inteira é construída compondo árvores de widgets.",
        t: "Dividem-se primordialmente em StatelessWidget e StatefulWidget."
    },
    {
        q: "Qual é a função da palavra-chave `async` e `await` em Dart?",
        d: "Fácil",
        c: "Dart Assíncrono",
        o: [
            "A) Criar threads paralelas de hardware.",
            "B) Facilitar o trabalho com operações assíncronas (como requisições de rede) de forma sequencial e legível, aguardando a resolução de um `Future`.",
            "C) Criptografar dados sensíveis de login.",
            "D) Compilar o aplicativo para iOS."
        ],
        a: "B",
        e: "Tornam o código assíncrono tão legível quanto código síncrono tradicional.",
        t: "Evitam o uso excessivo de callbacks aninhados (callback hell)."
    },
    {
        q: "Qual comando do CLI do Flutter é utilizado para criar um novo projeto padrão?",
        d: "Fácil",
        c: "Flutter CLI",
        o: [
            "A) `flutter start`",
            "B) `flutter create nome_projeto`",
            "C) `flutter init`",
            "D) `flutter build app`"
        ],
        b: "B",
        e: "Gera a estrutura completa de pastas multiplataforma para Android, iOS, Web e Desktop.",
        t: "Essencial para iniciar novos desenvolvimentos."
    },
    {
        q: "Qual é a diferença prática entre `StatelessWidget` e `StatefulWidget`?",
        d: "Média",
        c: "Gerenciamento de Estado",
        o: [
            "A) `StatelessWidget` mantém estado mutável interno; `StatefulWidget` é totalmente estático.",
            "B) `StatelessWidget` não possui estado mutável interno (sua UI depende apenas de suas configurações iniciais); `StatefulWidget` gerencia dados que mudam ao longo do tempo, disparando re-renderizações via `setState`.",
            "C) Não há diferenças técnicas.",
            "D) Apenas o `StatelessWidget` pode ser executado em plataformas web."
        ],
        b: "B",
        e: "Sempre que uma tela precisar reagir a interações do usuário alterando variáveis visuais, utiliza-se o StatefulWidget.",
        t: "Gerenciadores de estado avançados (Bloc, Provider, Riverpod) expandem essa lógica."
    },
    {
        q: "O que o sistema de tipagem nula segura (Null Safety) garante na linguagem Dart?",
        d: "Média",
        c: "Null Safety",
        o: [
            "A) Impede que qualquer variável seja declarada na memória.",
            "B) As variáveis não podem conter valores nulos (null) por padrão, a menos que sejam explicitamente declaradas como anuláveis usando o modificador `?`, eliminando o famoso erro `NullPointerException` em tempo de execução.",
            "C) Converte automaticamente valores nulos em números inteiros zero.",
            "D) Torna a compilação do código 10 vezes mais lenta."
        ],
        a: "B",
        e: "O Null Safety transfere a checagem de erros de nulidade para o tempo de compilação, aumentando drasticamente a robustez do app.",
        t: "Introduz operadores úteis como `!` e `??`."
    },
    {
        q: "O que é o 'BuildContext' em Flutter?",
        d: "Média",
        c: "BuildContext",
        o: [
            "A) Um arquivo de configuração de rede HTTP.",
            "B) Um objeto que representa o local de um widget dentro da árvore de widgets da aplicação, permitindo localizar ancestrais, navegar entre telas e acessar temas.",
            "C) Um gerenciador de banco de dados SQLite local.",
            "D) Um compilador de código nativo C++."
        ],
        a: "B",
        e: "Cada widget possui seu próprio BuildContext, essencial para operações que dependem da hierarquia visual.",
        t: "Erros de BuildContext ocorrem frequentemente ao usá-lo após gaps assíncronos (await)."
    },
    {
        q: "Como o Dart lida com concorrência e processamento pesado através de `Isolates`?",
        d: "Difícil",
        c: "Isolates em Dart",
        o: [
            "A) Compartilhando a mesma memória heap entre múltiplas threads concorrentes.",
            "B) Executando código em workers independentes que possuem sua própria memória isolada, comunicando-se exclusivamente através de troca de mensagens assíncronas (Ports), evitando travamentos na UI.",
            "C) Bloqueando a thread principal até que o cálculo pesado termine.",
            "D) Convertendo o código Dart em processos do kernel do Linux."
        ],
        a: "B",
        e: "O Dart é single-threaded por padrão (Event Loop). Para tarefas pesadas de CPU (como criptografia ou parsing gigante), usam-se Isolates para evitar engasgos (jank) na interface.",
        t: "Função `compute` simplifica casos comuns de isolates."
    },
    {
        q: "O que ocorre no ciclo de vida de um `StatefulWidget` quando o método `dispose()` é chamado?",
        d: "Difícil",
        c: "Ciclo de Vida State",
        o: [
            "A) O widget é recriado do zero imediatamente.",
            "B) O objeto State é permanentemente removido da árvore de widgets, sendo o momento ideal para cancelar assinaturas de streams, fechar controllers (como TextEditingController) e liberar recursos de memória.",
            "C) O aplicativo inteiro é fechado pelo sistema operacional.",
            "D) Os dados locais são salvos automaticamente no servidor em nuvem."
        ],
        a: "B",
        e: "O gerenciamento correto do dispose previne vazamentos severos de memória em aplicações Flutter.",
        t: "Executado logo após o `deactivate`."
    },
    {
        q: "Qual é a diferença arquitetural entre compilação JIT (Just-In-Time) e AOT (Ahead-Of-Time) no Flutter?",
        d: "Difícil",
        c: "JIT vs AOT",
        o: [
            "A) JIT compila o código nativamente antes da instalação; AOT compila em tempo de execução.",
            "B) JIT é usada no modo de desenvolvimento (permite Hot Reload rápido compilando bytecode em tempo de execução); AOT é usada em produção para compilar Dart diretamente em código de máquina nativo otimizado.",
            "C) Ambas fazem exatamente a mesma coisa em produção.",
            "D) AOT é exclusiva para navegadores web."
        ],
        a: "B",
        e: "O Hot Reload do Flutter só é possível graças à flexibilidade da compilação JIT durante o desenvolvimento.",
        t: "Para builds de release, o AOT garante máxima performance de execução."
    },
    {
        q: "Como funcionam os `RenderObjects` no motor de renderização do Flutter (Skia / Impeller)?",
        d: "Difícil",
        c: "Motor de Renderização Flutter",
        o: [
            "A) Eles convertem widgets em componentes nativos de UI da plataforma (como botões nativos do Android ou UIKit do iOS).",
            "B) Eles compõem a camada intermediária responsável por calcular layouts, tamanhos, restrições e pintar diretamente na tela através de aceleração gráfica.",
            "C) Eles gerenciam requisições HTTP e cache de imagens.",
            "D) Eles armazenam dados de formulários em cache local."
        ],
        a: "B",
        e: "O Flutter desenha sua própria interface pixel a pixel em vez de usar wrappers de componentes nativos, garantindo alta performance consistente.",
        t: "Impeller substituiu o Skia recentemente em plataformas móveis para eliminar jank de shaders."
    }
];

dartFlutterQuest.forEach(x => {
    addQuestion("Dart e Flutter", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   BANCO DE DADOS
===================================================== */
const bancoDadosQuest = [
    {
        q: "O que preconiza o Teorema de CAP em sistemas distribuídos de bancos de dados?",
        d: "Fácil",
        c: "Teorema de CAP",
        o: [
            "A) Garantir que um sistema distribuído possa manter simultaneamente Consistência, Disponibilidade e Tolerância a Particionamento sem restrições.",
            "B) Em caso de falha de rede (particionamento), escolhe-se entre Consistência ou Disponibilidade, mas não ambas juntas.",
            "C) Criptografia total para dados em repouso.",
            "D) Limite máximo de conexões simultâneas."
        ],
        a: "B",
        e: "Redes sofrem quedas. O teorema mostra que sistemas distribuídos devem balancear escolhas entre CP e AP.",
        t: "Bancos relacionais tendem a focar em consistência (CP)."
    },
    {
        q: "O que é um Banco de Dados Relacional?",
        d: "Fácil",
        c: "Conceitos Básicos",
        o: [
            "A) Um sistema que armazena dados em tabelas compostas por linhas e colunas, estruturadas com esquemas rígidos e chaves relacionais.",
            "B) Um arquivo de texto plano sem nenhuma formatação.",
            "C) Um sistema exclusivo para armazenamento de arquivos de áudio.",
            "D) Uma rede social corporativa."
        ],
        a: "A",
        e: "Utilizam SQL como linguagem de consulta e garantem forte integridade transacional (ACID).",
        t: "Exemplos: PostgreSQL, MySQL, Oracle."
    },
    {
        q: "Qual é a principal função de um Índice em um banco de dados?",
        d: "Fácil",
        c: "Indexação",
        o: [
            "A) Aumentar o espaço em disco para duplicar arquivos.",
            "B) Otimizar e acelerar a velocidade de recuperação de dados em consultas baseadas em colunas específicas.",
            "C) Impedir qualquer comando de atualização.",
            "D) Compactar imagens em formato JPEG."
        ],
        a: "B",
        e: "Cria estruturas de busca rápida (como árvores B-Tree) para evitar varreduras lineares completas na tabela.",
        t: "Acelera leituras ao custo de maior consumo de espaço e lentidão em escritas."
    },
    {
        q: "O que caracteriza o modelo de Consistência Eventual comum em bancos NoSQL?",
        d: "Média",
        c: "Consistência Eventual",
        o: [
            "A) Os dados nunca são salvos no disco rígido.",
            "B) Se nenhuma nova atualização for feita, todas as réplicas eventualmente retornarão o mesmo valor após um período de propagação.",
            "C) Bloqueio síncrono absoluto em todas as máquinas.",
            "D) Exclusão automática de dados a cada meia-noite."
        ],
        a: "B",
        e: "Prioriza alta disponibilidade e escrita rápida, aceitando que leituras imediatas retornem dados desatualizados por instantes.",
        t: "Comum em redes sociais e contadores em tempo real."
    },
    {
        q: "O que diferencia o Sharding da Replicação em bancos de dados distribuídos?",
        d: "Média",
        c: "Sharding vs Replicação",
        o: [
            "A) Sharding duplica todos os dados; replicação os divide.",
            "B) A replicação copia e sincroniza dados em múltiplos nós para alta disponibilidade e leitura escalável; o sharding divide o banco em partes menores (shards) distribuídas horizontalmente para suportar volumes massivos de escrita e armazenamento.",
            "C) Ambos são sinônimos de backup em nuvem.",
            "D) Sharding é exclusivo de arquivos CSV."
        ],
        a: "B",
        e: "Replicação resolve leitura e disponibilidade; sharding resolve gargalos de escrita e limite físico de armazenamento.",
        t: "O roteamento de chaves de sharding exige planejamento."
    },
    {
        q: "O que representa o modelo BASE em bancos NoSQL distribuídos, em contraponto ao ACID?",
        d: "Média",
        c: "Modelo BASE",
        o: [
            "A) Protocolo de segurança de senhas bancárias.",
            "B) Acrônimo para Basic Availability (Disponibilidade Básica), Soft-state (Estado Flexível) e Eventual consistency (Consistência Eventual), priorizando disponibilidade sobre consistência imediata.",
            "C) Método para compactar tabelas SQL.",
            "D) Padrão de arquitetura frontend."
        ],
        a: "B",
        e: "Reflete a filosofia de design de sistemas NoSQL orientados a alta escala e microsserviços.",
        t: "Aceita flutuação temporária de estado em prol da resiliência."
    },
    {
        q: "O que modela primariamente um banco de dados orientado a Grafos (Graph Database, como Neo4j)?",
        d: "Difícil",
        c: "Bancos de Grafos",
        o: [
            "A) Tabelas relacionais estritas com restrições numéricas.",
            "B) Dados altamente conectados compostos por Nós (Entidades), Arestas (Relacionamentos) e Propriedades, ideal para redes sociais e motores de recomendação.",
            "C) Arquivos binários planos.",
            "D) Séries temporais de métricas de CPU."
        ],
        a: "B",
        e: "Calcula conexões complexas de múltiplos graus com alta performance sem operações custosas de JOIN.",
        t: "Utiliza linguagens específicas como o Cypher."
    },
    {
        q: "Como funcionam os mecanismos de isolamento de transações e controle de concorrência baseados em MVCC (Multi-Version Concurrency Control)?",
        d: "Difícil",
        c: "MVCC",
        o: [
            "A) Bloqueando permanentemente a tabela inteira a cada comando SELECT.",
            "B) Mantendo múltiplas versões dos dados modificados de forma que leitores não bloqueiem escritores e escritores não bloqueiem leitores, garantindo alto desempenho concorrente.",
            "C) Apagando transações concorrentes automaticamente.",
            "D) Convertendo banco relacional em NoSQL."
        ],
        a: "B",
        e: "Usado por PostgreSQL e MySQL (InnoDB) para garantir isolamento ACID sem sacrificar concorrência.",
        t: "Exige processos de limpeza periódica de versões antigas (vacuum)."
    },
    {
        q: "O que diferencia um banco de dados de Séries Temporais (Time-Series) de um banco relacional tradicional no armazenamento físico?",
        d: "Difícil",
        c: "Séries Temporais",
        o: [
            "A) Armazenam dados em arquivos de áudio compactados.",
            "B) Utilizam armazenamento orientado a colunas otimizado para carimbos de data/hora (timestamps), compressão agressiva de métricas sequenciais e políticas automáticas de retenção.",
            "C) Não aceitam índices de busca.",
            "D) Funcionam exclusivamente em memória RAM volátil."
        ],
        a: "B",
        e: "Otimizados para alta taxa de gravação de métricas de IoT e logs de infraestrutura.",
        t: "Exemplos: InfluxDB, TimescaleDB."
    },
    {
        q: "O que é o processo de desnormalização em bancos de dados relacionais e quando ele é aplicado?",
        d: "Difícil",
        c: "Desnormalização",
        o: [
            "A) Correção de erros ortográficos em comandos SQL.",
            "B) Introdução intencional de redundância de dados (como duplicar colunas) para eliminar JOINs complexos e acelerar drasticamente o tempo de leitura em relatórios de alta escala.",
            "C) Exclusão definitiva de todas as chaves primárias.",
            "D) Conversão de tabelas em arquivos XML."
        ],
        a: "B",
        e: "Compromisso de design: sacrifica-se a pureza estrutural e facilidade de escrita para obter ganhos expressivos de performance de leitura.",
        t: "Exige que a aplicação garanta a consistência dos dados duplicados."
    }
];

bancoDadosQuest.forEach(x => {
    addQuestion("Banco de Dados", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   SQL
===================================================== */
const sqlQuest = [
    {
        q: "Qual é o comportamento padrão de um `INNER JOIN` ao combinar duas tabelas?",
        d: "Fácil",
        c: "Junções (Joins)",
        o: [
            "A) Retorna todos os registros da tabela à esquerda.",
            "B) Retorna apenas os registros que possuem correspondência em ambas as tabelas.",
            "C) Retorna o produto cartesiano absoluto.",
            "D) Retorna apenas registros exclusivos sem correspondência."
        ],
        a: "B",
        e: "Linhas que não encontram correspondência na condição ON são descartadas.",
        t: "Diferencia-se do LEFT e RIGHT JOIN."
    },
    {
        q: "Qual comando SQL é utilizado para extrair dados de uma tabela?",
        d: "Fácil",
        c: "Comandos básicos",
        o: [
            "A) GET",
            "B) SELECT",
            "C) EXTRACT",
            "D) FETCH"
        ],
        b: "B",
        e: "O comando `SELECT` é o pilar fundamental de consultas em bancos relacionais.",
        t: "Combinado com cláusulas como WHERE, GROUP BY e ORDER BY."
    },
    {
        q: "Qual cláusula SQL é usada para filtrar registros com base em condições específicas?",
        d: "Fácil",
        c: "Filtros SQL",
        o: [
            "A) FILTER",
            "B) WHERE",
            "C) CONDITION",
            "D) HAVING"
        ],
        b: "B",
        e: "O `WHERE` restringe quais linhas serão retornadas na consulta.",
        t: "Aplicado antes de operações de agrupamento."
    },
    {
        q: "Qual é a função da cláusula `HAVING` em uma consulta SQL agregada?",
        d: "Média",
        c: "Cláusula HAVING",
        o: [
            "A) Filtrar linhas individuais antes do agrupamento GROUP BY.",
            "B) Filtrar os resultados gerados após a aplicação de funções de agregação e agrupamento.",
            "C) Ordenar os dados em ordem decrescente.",
            "D) Unir tabelas sem JOIN."
        ],
        a: "B",
        e: "Enquanto o WHERE filtra linhas brutas, o HAVING filtra os resultados já agregados (ex: HAVING COUNT(*) > 5).",
        t: "Sempre posicionada após o GROUP BY."
    },
    {
        q: "Qual é a utilidade de criar um Índice (`CREATE INDEX`) em uma tabela?",
        d: "Média",
        c: "Indexação SQL",
        o: [
            "A) Duplicar o espaço em disco para backup.",
            "B) Otimizar a velocidade de recuperação de dados em colunas consultadas frequentemente em filtros e junções.",
            "C) Impedir exclusões acidentais.",
            "D) Compactar arquivos BLOB."
        ],
        b: "B",
        e: "Acelera leituras consideravelmente ao custo de maior consumo de armazenamento e lentidão em comandos de escrita.",
        t: "Deve ser aplicado de forma estratégica nas colunas de busca."
    },
    {
        q: "Qual é a diferença funcional entre os operadores `UNION` e `UNION ALL`?",
        d: "Média",
        c: "Operadores de Conjuntos",
        o: [
            "A) `UNION` remove duplicatas e ordena; `UNION ALL` inclui todos os registros (inclusive duplicados) de forma direta e mais rápida.",
            "B) `UNION` une tabelas de bancos diferentes e `UNION ALL` junta apenas uma tabela consigo mesma.",
            "C) Não há diferença.",
            "D) `UNION ALL` apaga dados originais."
        ],
        a: "A",
        e: "Como o `UNION` padrão exige distinct, consome mais CPU. Se duplicatas não forem problema, o `UNION ALL` é mais performático.",
        t: "Ambos exigem o mesmo número de colunas compatíveis."
    },
    {
        q: "Qual é a diferença entre os comandos `DELETE`, `TRUNCATE` e `DROP`?",
        d: "Difícil",
        c: "Comandos DDL e DML",
        o: [
            "A) Todos executam exatamente a mesma operação de remoção.",
            "B) `DELETE` é DML para linhas específicas (com WHERE e rollback); `TRUNCATE` é DDL que limpa linhas reiniciando identidades rapidamente sem log detalhado; `DROP` exclui permanentemente a tabela inteira.",
            "C) `DROP` apaga linhas e `DELETE` destrói o servidor.",
            "D) `TRUNCATE` cria novas visões."
        ],
        a: "B",
        e: "Conhecer a diferença entre DML e DDL impacta diretamente performance e segurança transacional.",
        t: "Cuidado com chaves estrangeiras ao rodar TRUNCATE."
    },
    {
        q: "O que caracteriza uma Subconsulta Correlacionada (Correlated Subquery) em SQL?",
        d: "Difícil",
        c: "Subconsultas",
        o: [
            "A) Uma subquery que executa uma única vez de forma isolada.",
            "B) Uma subquery que depende de valores da linha avaliada na consulta externa, sendo reexecutada para cada linha processada.",
            "C) Uma consulta que roda exclusivamente em servidores de backup.",
            "D) Uma visão materializada estática."
        ],
        a: "B",
        e: "Subconsultas correlacionadas podem impactar a performance se não forem indexadas corretamente devido ao processamento linha a linha.",
        t: "Usadas em cenários analíticos avançados."
    },
    {
        q: "O que representam as propriedades ACID em transações de bancos de dados relacionais?",
        d: "Difícil",
        c: "Transações ACID",
        o: [
            "A) Protocolo de criptografia de rede.",
            "B) Atomicidade (tudo ou nada), Consistência (regras respeitadas), Isolamento (transações concorrentes não interferem) e Durabilidade (dados confirmados não se perdem após falhas).",
            "C) Método de desfragmentação de disco.",
            "D) Linguagem orientada a objetos."
        ],
        a: "B",
        e: "Garantem confiabilidade absoluta em operações transacionais críticas, como transações bancárias.",
        t: "Controladas por comandos como BEGIN, COMMIT e ROLLBACK."
    },
    {
        q: "Qual é a diferença de comportamento entre `LEFT JOIN` e `FULL OUTER JOIN`?",
        d: "Difícil",
        c: "Junções Avançadas",
        o: [
            "A) `LEFT JOIN` retorna todos os registros da tabela esquerda mais as correspondências da direita; `FULL OUTER JOIN` retorna todos os registros de ambas as tabelas, preenchendo com NULL quando não há correspondência em nenhum dos lados.",
            "B) Ambas retornam resultados idênticos.",
            "C) `FULL OUTER JOIN` só funciona com tabelas vazias.",
            "D) `LEFT JOIN` exclui correspondências."
        ],
        a: "A",
        e: "O Full Outer Join combina o comportamento de Left e Right Join simultaneamente.",
        t: "Útil para auditorias de integridade de dados entre duas tabelas."
    }
];

sqlQuest.forEach(x => {
    addQuestion("SQL", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   DESENVOLVIMENTO WEB
===================================================== */
const devWebQuest = [
    {
        q: "Qual é a principal função da tag `<head>` em um documento HTML?",
        d: "Fácil",
        c: "HTML Básico",
        o: [
            "A) Exibir o conteúdo visual principal da página no navegador.",
            "B) Armazenar metadados do documento (como título, links para folhas de estilo CSS, scripts e codificação de caracteres) que não são exibidos diretamente no corpo da página.",
            "C) Criar formulários de cadastro de usuários.",
            "D) Conectar o site diretamente a servidores FTP remotos."
        ],
        a: "B",
        e: "O head prepara o terreno para o navegador renderizar o conteúdo do body.",
        t: "Fundamental para SEO e carregamento de assets."
    },
    {
        q: "Qual linguagem é utilizada primariamente para estilizar e estruturar a aparência visual de páginas web?",
        d: "Fácil",
        c: "CSS Básico",
        o: [
            "A) Python",
            "B) CSS (Cascading Style Sheets)",
            "C) SQL",
            "D) Git"
        ],
        b: "B",
        e: "O CSS define cores, fontes, layouts e responsividade das páginas HTML.",
        t: "Trabalha em conjunto com HTML e JavaScript."
    },
    {
        q: "Qual elemento HTML é semanticamente mais adequado para representar o rodapé de uma página ou seção?",
        d: "Fácil",
        c: "HTML Semântico",
        o: [
            "A) `<div class='footer'>`",
            "B) `<footer>`",
            "C) `<bottom>`",
            "D) `<section-end>`"
        ],
        b: "B",
        e: "O HTML5 introduziu tags semânticas claras como header, nav, section, article e footer para melhorar acessibilidade e SEO.",
        t: "Prefira tags semânticas a divs genéricas quando aplicável."
    },
    {
        q: "Como o modelo de layout CSS Flexbox lida com o alinhamento de itens?",
        d: "Média",
        c: "CSS Flexbox",
        o: [
            "A) Exclusivamente através de posicionamento absoluto em coordenadas X e Y.",
            "B) Fornecendo um layout unidimensional em linha ou coluna, permitindo distribuir espaço e alinhar itens de forma flexível através de propriedades como `justify-content` e `align-items`.",
            "C) Criando grades bidimensionais complexas com linhas e colunas explícitas.",
            "D) Convertendo elementos HTML em tabelas legadas."
        ],
        a: "B",
        e: "O Flexbox resolveu os maiores problemas de alinhamento vertical e responsividade em CSS.",
        t: "Para layouts bidimensionais completos, o CSS Grid é o complemento ideal."
    },
    {
        q: "O que o DOM (Document Object Model) representa no desenvolvimento web?",
        d: "Média",
        c: "DOM",
        o: [
            "A) Um servidor web corporativo na nuvem.",
            "B) Uma representação em árvore orientada a objetos da estrutura do documento HTML que permite ao JavaScript interagir dinamicamente, modificar e atualizar elementos da página.",
            "C) Um formato de compactação de imagens.",
            "D) Um protocolo de criptografia de rede."
        ],
        a: "B",
        e: "O DOM é a ponte viva entre o código JavaScript e a interface visual exibida pelo navegador.",
        t: "Manipulações excessivas e diretas no DOM podem gerar gargalos de performance."
    },
    {
        q: "O que caracteriza o comportamento assíncroco de requisições utilizando a API Fetch em JavaScript?",
        d: "Média",
        c: "Fetch API",
        o: [
            "A) O navegador trava completamente até que o servidor responda.",
            "B) Permite enviar e receber dados de servidores de forma não bloqueante utilizando Promises, possibilitando que o restante da aplicação continue rodando enquanto a resposta é aguardada.",
            "C) Funciona apenas sem conexão com a internet.",
            "D) Converte arquivos HTML em código binário."
        ],
        a: "B",
        e: "A Fetch API substituiu o antigo XMLHttpRequest de forma elegante e moderna.",
        t: "Combinada com `async/await`, facilita muito a leitura do código."
    },
    {
        q: "O que caracteriza a política de segurança de CORS (Cross-Origin Resource Sharing) em navegadores web?",
        d: "Difícil",
        c: "Segurança Web e CORS",
        o: [
            "A) Um mecanismo baseado em cabeçalhos HTTP que permite a um servidor indicar quais origens diferentes da sua própria têm permissão para carregar recursos restritos.",
            "B) Um algoritmo de criptografia de ponta para senhas de formulários.",
            "C) Um framework JavaScript para roteamento frontend.",
            "D) Um protocolo para otimizar imagens via CDN."
        ],
        a: "A",
        e: "O CORS protege aplicações web contra requisições maliciosas de origens cruzadas não autorizadas.",
        t: "Erros de CORS ocorrem frequentemente quando o backend não libera o domínio do frontend."
    },
    {
        q: "Como funcionam os Service Workers no contexto de Progressive Web Apps (PWAs)?",
        d: "Difícil",
        c: "Service Workers",
        o: [
            "A) Scripts que rodam no servidor central de banco de dados.",
            "B) Scripts executados pelo navegador em uma thread separada da página web, atuando como proxy de rede programável para interceptar requisições, gerenciar cache offline e permitir funcionamento sem internet.",
            "C) Plugins de estilização CSS.",
            "D) Ferramentas para gerar relatórios de vendas."
        ],
        a: "B",
        e: "Transformam aplicações web em experiências ricas e offline-first semelhantes a aplicativos nativos.",
        t: "Exigem conexões seguras obligatórias via HTTPS."
    },
    {
        q: "O que é o mecanismo de Event Bubbling (Borbulhamento de Eventos) no DOM do navegador?",
        d: "Difícil",
        c: "Event Bubbling",
        o: [
            "A) Eventos que ocorrem apenas no elemento raiz e se destroem.",
            "B) Quando um evento ocorre em um elemento filho (ex: clique em um botão), ele é disparado primeiro no elemento alvo e depois 'borbulha' subindo recursivamente por toda a sua árvore de ancestrais até o documento.",
            "C) Um erro de memória gerado por loops infinitos em JavaScript.",
            "D) Animações gráficas fluidas em CSS."
        ],
        a: "B",
        e: "Permite a técnica de Event Delegation (delegação de eventos), ouvindo eventos em elementos pais em vez de em centenas de filhos.",
        t: "Pode ser interrompido usando `stopPropagation()`."
    },
    {
        q: "Como o princípio de Content Security Policy (CSP) protege aplicações web modernas contra ataques de Cross-Site Scripting (XSS)?",
        d: "Difícil",
        c: "CSP (Content Security Policy)",
        o: [
            "A) Criptografando o código fonte HTML em formato binário.",
            "B) Através de cabeçalhos HTTP que restringem estritamente as origens confiáveis de onde scripts, folhas de estilo e imagens podem ser carregados e executados pelo navegador.",
            "C) Bloqueando qualquer acesso via protocolo HTTPS.",
            "D) Exigindo que todos os usuários façam login com biometria."
        ],
        a: "B",
        e: "O CSP é uma das barreiras de defesa mais poderosas contra injeção arbitrária de scripts maliciosos na web.",
        t: "Deve ser configurado rigorosamente em servidores de produção."
    }
];

devWebQuest.forEach(x => {
    addQuestion("Desenvolvimento Web", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   SPRING
===================================================== */
const springQuest = [
    {
        q: "O que é o conceito de Inversão de Controle (IoC) e Injeção de Dependência no Spring?",
        d: "Fácil",
        c: "IoC e DI",
        o: [
            "A) O desenvolvedor instancia objetos manualmente com `new`.",
            "B) O framework assume a responsabilidade de criar, gerenciar o ciclo de vida e injetar beans automaticamente, promovendo desacoplamento.",
            "C) Mecanismo de criptografia de senhas.",
            "D) Padrão de roteamento de rede."
        ],
        a: "B",
        e: "O container IoC gerencia as dependências, facilitando testes e manutenção.",
        t: "Injeção via construtor é a boa prática recomendada."
    },
    {
        q: "Qual é o principal objetivo do Spring Boot?",
        d: "Fácil",
        c: "Spring Boot",
        o: [
            "A) Substituir Java por JavaScript no backend.",
            "B) Eliminar configurações XML complexas oferecendo auto-configuração, starters e servidor embutido (Tomcat), permitindo subir aplicações rapidamente.",
            "C) Executar código no navegador do cliente.",
            "D) Fornecer banco de dados em memória infinito."
        ],
        a: "B",
        e: "Automatiza configurações iniciais baseadas no classpath e dependências.",
        t: "Permite focar nas regras de negócio."
    },
    {
        q: "Qual anotação marca uma classe como um componente gerenciado pelo container do Spring?",
        d: "Fácil",
        c: "Componentes Spring",
        o: [
            "A) `@MainClass`",
            "B) `@Component` (ou suas especializações como `@Service`, `@Repository`, `@Controller`)",
            "C) `@RunBean`",
            "D) `@NewInstance`"
        ],
        b: "B",
        e: "Informa ao Spring que a classe deve ser escaneada e transformada em um Bean gerenciado.",
        t: "Base para injeção de dependência."
    },
    {
        q: "Qual é a função da anotação `@RestController` no Spring Boot?",
        d: "Média",
        c: "Spring MVC",
        o: [
            "A) Renderizar páginas HTML estáticas.",
            "B) Combinar `@Controller` com `@ResponseBody`, serializando automaticamente os retornos de métodos para JSON ou XML para consumo por APIs REST.",
            "C) Conectar o sistema a bancos Oracle.",
            "D) Gerenciar transações de segurança."
        ],
        a: "B",
        e: "É o padrão para criação de APIs RESTful modernas.",
        t: "Facilita o desenvolvimento desacoplado com frontends modernos."
    },
    {
        q: "Como o Spring Data JPA simplifica a camada de persistência?",
        d: "Média",
        c: "Spring Data JPA",
        o: [
            "A) Exigindo escrita manual de todo o SQL bruto.",
            "B) Permitindo criar repositórios via interfaces que estendem `JpaRepository`, gerando operações CRUD automáticas e parsing de métodos por nome.",
            "C) Substituindo o banco por arquivos CSV.",
            "D) Executando migrações via terminal."
        ],
        a: "B",
        e: "Reduz drasticamente o código boilerplate de acesso a dados.",
        t: "Implementa ORM de forma transparente."
    },
    {
        q: "Para que serve a anotação `@Transactional` no Spring?",
        d: "Média",
        c: "Gerenciamento de Transações",
        o: [
            "A) Registrar logs de erro no console.",
            "B) Declarar que um método deve executar dentro de uma transação de banco de dados, garantindo atomicidade (rollback automático em caso de exceções não tratadas).",
            "C) Criptografar dados em rede.",
            "D) Gerenciar conexões HTTP."
        ],
        a: "B",
        e: "Mantém a consistência de dados em operações complexas que envolvem múltiplos passos.",
        t: "Gerenciado de forma declarativa via proxies."
    },
    {
        q: "Como o Spring lida com o tratamento global de exceções em APIs REST?",
        d: "Difícil",
        c: "Tratamento de Exceções",
        o: [
            "A) Deixando a aplicação quebrar e exibir stack traces em HTML.",
            "B) Utilizando classes anotadas com `@ControllerAdvice` combinadas com `@ExceptionHandler` para capturar exceções centralizadamente e retornar respostas HTTP padronizadas.",
            "C) Reiniciando o servidor web automaticamente a cada erro.",
            "D) Convertendo erros em arquivos PDF."
        ],
        a: "B",
        e: "Evita duplicação de blocos try-catch espalhados pelos controllers.",
        t: "Permite mapear exceções de negócio para códigos HTTP corretos (ex: 404)."
    },
    {
        q: "O que faz a cadeia de filtros de segurança (`SecurityFilterChain`) no Spring Security?",
        d: "Difícil",
        c: "Spring Security Avançado",
        o: [
            "A) Compacta arquivos estáticos CSS e JS.",
            "B) Intercepta requisições HTTP aplicando regras encadeadas de autenticação, autorização, proteção CSRF e gerenciamento de tokens/sessões.",
            "C) Executa testes unitários de carga.",
            "D) Realiza balanceamento de carga em nuvem."
        ],
        a: "B",
        e: "Componente central do Spring Security para blindar endpoints contra acessos não autorizados.",
        t: "Altamente customizável via beans de configuração."
    },
    {
        q: "O que são os `Spring Boot Actuator Endpoints` em ambientes de produção?",
        d: "Difícil",
        c: "Spring Boot Actuator",
        o: [
            "A) Ferramentas para desenhar diagramas UML.",
            "B) Endpoints prontos expostos para monitoramento de saúde (`/actuator/health`), métricas de memória, threads e status de microsserviços integrados a ferramentas como Prometheus/Grafana.",
            "C) Compilador nativo de bytecode Java.",
            "D) Gerenciador de versões Git."
        ],
        a: "B",
        e: "Essencial para observabilidade em arquiteturas modernas baseadas em microsserviços.",
        t: "Endpoints sensíveis exigem proteção via Spring Security."
    },
    {
        q: "Como funciona a injeção de propriedades customizadas usando `@ConfigurationProperties` em comparativo com `@Value`?",
        d: "Difícil",
        c: "ConfigurationProperties",
        o: [
            "A) `@Value` faz type-safe mapping de arquivos complexos; `@ConfigurationProperties` injeta strings simples.",
            "B) `@ConfigurationProperties` permite mapear blocos hierárquicos inteiros de propriedades em objetos Java fortemente tipados (type-safe), enquanto `@Value` injeta valores escalares isolados um a um.",
            "C) Ambas fazem exatamente a mesma coisa sem distinção.",
            "D) `@ConfigurationProperties` é exclusiva para banco de dados."
        ],
        a: "B",
        e: "Ideal para organizar configurações complexas de aplicações em classes de configuração dedicadas.",
        t: "Suporta validação via Bean Validation (JSR-303)."
    }
];

springQuest.forEach(x => {
    addQuestion("Spring", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   REST E SOAP
===================================================== */
const restSoapQuest = [
    {
        q: "Qual formato de serialização de dados é o mais associado ao desenvolvimento de APIs REST modernas?",
        d: "Fácil",
        c: "Formatos REST",
        o: [
            "A) XML estrito com XSD.",
            "B) JSON (JavaScript Object Notation), pela leveza e legibilidade.",
            "C) Arquivos binários ZIP.",
            "D) Planilhas CSV."
        ],
        a: "B",
        e: "O JSON tornou-se o padrão de fato da indústria por sua simplicidade e baixo consumo de banda.",
        t: "Acelera o desenvolvimento frontend e backend."
    },
    {
        q: "Quais são os verbos HTTP fundamentais utilizados em operações CRUD em uma API RESTful?",
        d: "Fácil",
        c: "Verbos HTTP",
        o: [
            "A) SEND, RECEIVE, EXECUTE, DELETE",
            "B) GET (Leitura), POST (Criação), PUT/PATCH (Atualização), DELETE (Remoção)",
            "C) FETCH, UPLOAD, DOWNLOAD, DROP",
            "D) READ, WRITE, UPDATE, ERASE"
        ],
        b: "B",
        e: "O mapeamento correto dos verbos HTTP garante conformidade com o padrão REST.",
        t: "Cada verbo possui semântica específica (idempotência, segurança)."
    },
    {
        q: "O que representa um código de status HTTP na faixa de 4xx em uma resposta de API?",
        d: "Fácil",
        c: "Status HTTP",
        o: [
            "A) Sucesso absoluto na requisição.",
            "B) Erros originados no lado do cliente (Client Error), como requisições malformadas, falta de autenticação (401) ou recurso não encontrado (404).",
            "C) Erros catastróficos no servidor remoto.",
            "D) Redirecionamento temporário de URL."
        ],
        b: "B",
        e: "Indicam que o cliente enviou algo incorreto ou não autorizado.",
        t: "Exemplos comuns: 400 Bad Request, 401 Unauthorized, 404 Not Found."
    },
    {
        q: "Como o REST lida com o conceito de 'Stateless' (Sem Estado)?",
        d: "Média",
        c: "Princípios do REST",
        o: [
            "A) O servidor armazena senhas e históricos em memória RAM.",
            "B) Cada requisição do cliente deve conter todas as informações necessárias para processamento, sem depender de sessões armazenadas no servidor.",
            "C) O estado é mantido em cookies criptografados no banco relacional.",
            "D) O servidor gerencia o fluxo de telas via TCP persistente."
        ],
        a: "B",
        e: "Melhora drasticamente a escalabilidade, pois qualquer instância do servidor atende qualquer requisição.",
        t: "Tokens como JWT encaixam-se perfeitamente nessa premissa."
    },
    {
        q: "Qual é a principal diferença arquitetural e de protocolo entre SOAP e REST?",
        d: "Média",
        c: "REST vs SOAP",
        o: [
            "A) SOAP é um protocolo rígido baseado em XML com contrato estrito WSDL; REST é um estilo arquitetural baseado em recursos orientados a HTTP utilizando flexivelmente JSON.",
            "B) SOAP é mais leve e rápido que o REST em navegadores web.",
            "C) REST exige uso obrigatório de XML.",
            "D) SOAP não suporta segurança corporativa."
        ],
        a: "A",
        e: "SOAP é muito utilizado em ambientes corporativos legados com alta exigência de contrato rígido e transações WS-Security; REST domina a web moderna por sua simplicidade.",
        t: "REST opera diretamente sobre os verbos HTTP."
    },
    {
        q: "O que significa a propriedade de 'Idempotência' em métodos HTTP REST?",
        d: "Média",
        c: "Idempotência",
        o: [
            "A) Que a requisição deve ser executada apenas uma vez na vida do servidor.",
            "B) Que fazer múltiplas requisições idênticas consecutivas produz exatamente o mesmo efeito colateral no servidor do que fazer apenas uma única requisição.",
            "C) Que o servidor gera respostas aleatórias.",
            "D) Que o payload deve ser criptografado."
        ],
        a: "B",
        e: "Métodos como GET, PUT e DELETE são idempotentes; o POST tradicionalmente não é (pois criar múltiplas vezes gera múltiplos recursos).",
        t: "Fundamental para tratamento de falhas e retries de rede."
    },
    {
        q: "O que significa o conceito de HATEOAS no nível mais avançado de maturidade REST?",
        d: "Difícil",
        c: "HATEOAS",
        o: [
            "A) Sistema de criptografia de ponta a ponta.",
            "B) Incluir links de hipermídia nas respostas da API, permitindo que o cliente navegue dinamicamente pelas próximas ações possíveis.",
            "C) Biblioteca de compressão JSON.",
            "D) Framework de injeção de dependência."
        ],
        a: "B",
        e: "Representa o Nível 3 do Modelo de Maturidade de Richardson, desacoplando o cliente das URLs.",
        t: "A resposta traz dados e os links de navegação disponíveis."
    },
    {
        q: "Como o protocolo SOAP lida com definições de contratos e serviços através do arquivo WSDL?",
        d: "Difícil",
        c: "SOAP e WSDL",
        o: [
            "A) WSDL descreve em formato XML estrito todas as operações disponíveis, tipos de dados aceitos e endpoints de conexão do serviço SOAP.",
            "B) WSDL é uma folha de estilo CSS para formatação visual.",
            "C) WSDL substitui o protocolo HTTP por sockets UDP.",
            "D) WSDL armazena logs de erro em tempo real."
        ],
        a: "B",
        e: "Permite a geração automática de clientes SDK fortemente tipados em várias linguagens.",
        t: "Garante interoperabilidade estrita baseada em contratos rígidos."
    },
    {
        q: "O que caracteriza o modelo de controle de concorrência otimista em APIs REST utilizando o cabeçalho `ETag`?",
        d: "Difícil",
        c: "ETag e Concorrência",
        o: [
            "A) Bloquear permanentemente o registro no banco de dados durante edições.",
            "B) O servidor envia um hash de versão (`ETag`) do recurso; em atualizações posteriores (PUT), o cliente envia o cabeçalho `If-Match`, permitindo que o servidor rejeite atualizações conflitantes caso o recurso tenha mudado intermediariamente.",
            "C) Criptografar senhas de usuários.",
            "D) Comprimir payloads JSON grandes."
        ],
        a: "B",
        e: "Previne o problema de perda de atualizações concorrentes (lost update problem) em APIs REST.",
        t: "Retorna o status 412 Precondition Failed em caso de conflito."
    },
    {
        q: "Quais são as restrições arquiteturais oficiais que definem estritamente um sistema RESTful segundo Roy Fielding?",
        d: "Difícil",
        c: "Restrições REST",
        o: [
            "A) Uso obrigatório de bancos de dados NoSQL e JSON.",
            "B) Client-Server, Stateless, Cacheable, Layered System, Uniform Interface e Code-On-Demand (opcional).",
            "C) Uso exclusivo de webSockets em tempo real.",
            "D) Obrigatoriedade de autenticação via OAuth2."
        ],
        a: "B",
        e: "Muitas APIs se dizem REST, mas violam restrições fundamentais como a Uniform Interface.",
        t: "A interface uniforme é o coração do design REST."
    }
];

restSoapQuest.forEach(x => {
    addQuestion("REST e SOAP", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   UML
===================================================== */
const umlQuest = [
    {
        q: "O que representa um Diagrama de Casos de Uso na UML?",
        d: "Fácil",
        c: "Casos de Uso",
        o: [
            "A) A arquitetura física dos servidores de hardware.",
            "B) As funcionalidades do sistema do ponto de vista dos atores externos (usuários ou outros sistemas), mostrando interações e limites.",
            "C) O código fonte em tempo de compilação.",
            "D) O fluxo sequencial de linhas de banco de dados."
        ],
        a: "B",
        e: "Foca nos requisitos funcionais e em quem interage com o sistema.",
        t: "Essencial na fase de levantamento de requisitos."
    },
    {
        q: "O que descreve um Diagrama de Classes na UML?",
        d: "Fácil",
        c: "Diagrama de Classes",
        o: [
            "A) A estrutura estática do sistema, mostrando classes, atributos, operações e os relacionamentos entre elas.",
            "B) A sequência temporal de mensagens trocadas em uma tela.",
            "C) O hardware de rede corporativo.",
            "D) O fluxo de estados de um pedido de e-commerce."
        ],
        a: "B",
        e: "É o diagrama estrutural mais utilizado no design orientado a objetos.",
        t: "Base para geração de código em linguagens OOP."
    },
    {
        q: "Qual símbolo representa visualmente um ator em um Diagrama de Casos de Uso UML?",
        d: "Fácil",
        c: "Atores UML",
        o: [
            "A) Um quadrado pontilhado.",
            "B) Um boneco palito (stick figure) acompanhado de seu nome.",
            "C) Um cilindro de banco de dados.",
            "D) Uma seta bidirecional em negrito."
        ],
        b: "B",
        e: "Representa qualquer entidade externa que interage com o sistema (humano ou outro software).",
        t: "Pode herdar características de outros atores."
    },
    {
        q: "Qual é a diferença entre uma Associação de Agregação e uma de Composição em Diagramas de Classes UML?",
        d: "Média",
        c: "Agregação vs Composição",
        o: [
            "A) Agregação representa relação 'todo-parte' fraca (o objeto parte pode existir independentemente do todo); Composição representa relação forte onde o ciclo de vida da parte depende do todo.",
            "B) Não há diferença visual ou conceitual.",
            "C) Composição é usada apenas para métodos estáticos.",
            "D) Agregação indica herança múltipla."
        ],
        a: "A",
        e: "Visualmente representada por losango vazio (agregação) e losango preenchido (composição).",
        t: "Exemplo de composição: um carro e seus motores internos."
    },
    {
        q: "O que modela um Diagrama de Atividades na UML?",
        d: "Média",
        c: "Diagrama de Atividades",
        o: [
            "A) O mapeamento físico de servidores na nuvem.",
            "B) O fluxo de controle dinâmico de um processo ou algoritmo, modelando ações, decisões condicionais (branching), paralelismo (fork/join) e término.",
            "C) A hierarquia estática de pacotes de código.",
            "D) O tempo de resposta de requisições HTTP."
        ],
        a: "B",
        e: "Funciona como um fluxograma avançado orientado a objetos com suporte a concorrência.",
        t: "Muito útil para modelar fluxos complexos de negócios."
    },
    {
        q: "O que representam os relacionamentos `<<include>>` e `<<extend>>` em Diagramas de Casos de Uso?",
        d: "Média",
        c: "Include vs Extend",
        o: [
            "A) Ambos fazem exatamente a mesma coisa.",
            "B) `<<include>>` indica comportamento obrigatório reutilizado por um caso de uso base; `<<extend>>` indica comportamento opcional/condicional que estende um caso de uso sob certas circunstâncias.",
            "C) `<<include>>` indica herança de banco e `<<extend>>` indica exclusão de classe.",
            "D) São termos exclusivos de diagramas de sequência."
        ],
        a: "B",
        e: "Ajudam a modularizar casos de uso complexos evitando duplicações.",
        t: "A direção da seta aponta para o caso de uso incluído ou estendido dependendo da convenção."
    },
    {
        q: "Como o Diagrama de Sequência modela a dinâmica de um sistema?",
        d: "Difícil",
        c: "Diagrama de Sequência",
        o: [
            "A) Mostrando a distribuição física de nós de rede em um mapa geográfico.",
            "B) Destacando a ordem cronológica das mensagens trocadas entre objetos ou atores ao longo do tempo, representadas em linhas de vida verticais.",
            "C) Exibindo restrições matemáticas de banco de dados relacional.",
            "D) Listando apenas atributos e métodos estáticos de classes abstratas."
        ],
        a: "B",
        e: "Excelente para visualizar o fluxo de execução de cenários complexos de negócio.",
        t: "Inclui mensagens síncronas, assíncronas e blocos de controle (alt, loop)."
    },
    {
        q: "O que modela um Diagrama de Estados (State Machine Diagram) na UML?",
        d: "Difícil",
        c: "Diagrama de Estados",
        o: [
            "A) A quantidade de memória RAM consumida por instâncias de classes.",
            "B) Os estados possíveis pelos quais um objeto passa durante seu ciclo de vida em resposta a eventos externos, além das transições e ações associadas.",
            "C) O relacionamento hierárquico entre pacotes de software.",
            "D) A topologia física de roteadores de rede."
        ],
        a: "B",
        e: "Essencial para modelar objetos com comportamentos complexos dependentes de histórico (como pedidos de compra: Criado -> Pago -> Enviado -> Entregue).",
        t: "Inclui estados iniciais, finais e transições guardadas por condições."
    },
    {
        q: "Qual é a finalidade de um Diagrama de Implantação (Deployment Diagram) na UML?",
        d: "Difícil",
        c: "Diagrama de Implantação",
        o: [
            "A) Descrever o código fonte interno de algoritmos matemáticos.",
            "B) Modelar a arquitetura física de hardware do sistema, mostrando nós de processamento (servidores, dispositivos), artefatos de software implantados neles e as conexões de rede.",
            "C) Listar os testes unitários executados no Jenkins.",
            "D) Mapear casos de uso funcionais para usuários finais."
        ],
        a: "B",
        e: "Foca na infraestrutura física e topologia de distribuição da aplicação em produção.",
        t: "Pertence à categoria de diagramas estruturais."
    },
    {
        q: "O que representam as 'Portas' e 'Interfaces' em um Diagrama de Componentes UML avançado?",
        d: "Difícil",
        c: "Diagrama de Componentes",
        o: [
            "A) Portas são gabinetes de servidores físicos e interfaces são cabos de fibra.",
            "B) Portas definem pontos de interação isolados de um componente, expondo interfaces fornecidas (provided interfaces) que o componente implementa e interfaces requeridas (required interfaces) de que ele depende.",
            "C) São apenas enfeites visuais sem impacto semântico.",
            "D) Indicam restrições de banco de dados relacional."
        ],
        a: "B",
        e: "Permitem encapsulamento rigoroso e substituição de componentes em arquiteturas modulares.",
        t: "Muito alinhado com conceitos de microsserviços e arquitetura baseada em componentes."
    }
];

umlQuest.forEach(x => {
    addQuestion("UML", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   ARQUITETURA DE SOFTWARE
===================================================== */
const arquiteturaSoftwareQuest = [
    {
        q: "O que caracteriza o padrão arquitetural MVC (Model-View-Controller)?",
        d: "Fácil",
        c: "Padrão MVC",
        o: [
            "A) Misturar banco de dados e layout visual no mesmo arquivo.",
            "B) Separar responsabilidades em Model (dados/regra), View (apresentação) e Controller (intermediário de controle).",
            "C) Padrão exclusivo para bancos NoSQL.",
            "D) Técnica de criptografia HTTP."
        ],
        a: "B",
        e: "Um dos padrões mais clássicos da engenharia de software para separação de preocupações.",
        t: "Serve de base para diversos frameworks web modernos."
    },
    {
        q: "O que é uma aplicação Monolítica?",
        d: "Fácil",
        c: "Monolitos",
        o: [
            "A) Um sistema distribuído composto por centenas de microsserviços.",
            "B) Uma aplicação estruturada como uma única unidade executável unificada, onde todas as funcionalidades (UI, regras de negócio e acesso a dados) rodam no mesmo processo.",
            "C) Um banco de dados NoSQL distribuído.",
            "D) Um script executado exclusivamente no navegador."
        ],
        a: "B",
        e: "Fáceis de iniciar e implantar no começo, mas podem se tornar complexos (monolitos gigantes) com o crescimento.",
        t: "Muitos sistemas modernos nascem como monólitos modulares antes de migrar para microsserviços."
    },
    {
        q: "O que avalia a métrica de 'Acoplamento' (Coupling) na arquitetura de software?",
        d: "Fácil",
        c: "Acoplamento",
        o: [
            "A) O grau de dependência entre diferentes módulos ou classes; quanto menor o acoplamento, mais independentes e fáceis de modificar os módulos são.",
            "B) A quantidade de linhas de código escritas por dia.",
            "C) O espaço em disco ocupado pelos binários.",
            "D) A velocidade de execução dos testes."
        ],
        a: "A",
        e: "Baixo acoplamento evita que alterações em um módulo quebrem os demais.",
        t: "Deve sempre caminhar junto com alta coesão."
    },
    {
        q: "Qual é o principal objetivo da Arquitetura Limpa (Clean Architecture) de Robert C. Martin?",
        d: "Média",
        c: "Clean Architecture",
        o: [
            "A) Tornar o banco de dados o núcleo inalterável da aplicação.",
            "B) Separar o software em camadas concêntricas onde as dependências apontam de fora para dentro, isolando as regras de negócio de frameworks e banco de dados.",
            "C) Automatizar arquivos CSS.",
            "D) Substituir orientação a objetos por programação puramente funcional."
        ],
        a: "B",
        e: "Garante alta testabilidade e independência tecnológica.",
        t: "A Regra de Dependência é o pilar fundamental."
    },
    {
        q: "Quais são as características fundamentais do estilo de Arquitetura de Microsserviços?",
        d: "Média",
        c: "Microsserviços",
        o: [
            "A) Microsserviços rodam obrigatoriamente na mesma máquina física e compartilham banco central.",
            "B) Estruturar a aplicação como um conjunto de pequenos serviços independentes, cada um executando em seu próprio processo, comunicando-se via mecanismos leves (HTTP/REST ou gRPC) com deploy autônomo.",
            "C) Eliminar a necessidade de testes automatizados.",
            "D) Monolitos modernos são sinônimos de microsserviços."
        ],
        a: "B",
        e: "Promovem autonomia técnica e organizacional entre equipes.",
        t: "Introduzem complexidade distribuída em áreas como consistência de dados e latência."
    },
    {
        q: "O que propõe o padrão arquitetural CQRS (Command Query Responsibility Segregation)?",
        d: "Média",
        c: "CQRS",
        o: [
            "A) Usar a mesma tabela para escrita e leitura pesada.",
            "B) Separar rigorosamente os modelos e operações de leitura (Queries) dos modelos de escrita/atualização (Commands), permitindo otimizar cada lado independentemente.",
            "C) Sincronizar dados via arquivos de texto diários.",
            "D) Substituir servidores web por funções serverless."
        ],
        a: "B",
        e: "Permite escalar bases de leitura separadamente das bases transacionais de escrita em alta escala.",
        t: "Muitas vezes combinado com Event Sourcing."
    },
    {
        q: "No contexto da Arquitetura Hexagonal (Ports and Adapters), qual é a função das Portas e dos Adaptadores?",
        d: "Difícil",
        c: "Arquitetura Hexagonal",
        o: [
            "A) Portas são gabinetes de servidores e adaptadores são cabos de rede.",
            "B) Portas definem interfaces abstratas de entrada/saída para a aplicação; adaptadores implementam essas portas conectando o núcleo a tecnologias externas (REST, SQL, filas).",
            "C) Portas controlam o roteamento de telas frontend.",
            "D) Substituem testes automatizados."
        ],
        a: "B",
        e: "Isola o domínio de agentes externos, permitindo trocar tecnologias sem alterar a regra de negócio.",
        t: "Facilita testes unitários puros do domínio."
    },
    {
        q: "O que caracteriza uma Arquitetura Orientada a Eventos (Event-Driven Architecture - EDA)?",
        d: "Difícil",
        c: "Event-Driven Architecture",
        o: [
            "A) Serviços comunicam-se estritamente de forma síncrona via HTTP bloqueante.",
            "B) Produção, detecção e consumo de eventos ocorrem de forma assíncrona entre componentes desacoplados via brokers de mensagens (como Kafka ou RabbitMQ), permitindo alta reatividade.",
            "C) O sistema aguarda encerramento manual para processar dados.",
            "D) Regras de negócio centralizadas em monólito único."
        ],
        a: "B",
        e: "Um componente publica um fato ocorrido sem se preocupar com quem vai consumi-lo.",
        t: "Ideal para sistemas reativos de grande volume em tempo real."
    },
    {
        q: "O que resolve o padrão 'API Gateway' em uma arquitetura de microsserviços?",
        d: "Difícil",
        c: "API Gateway",
        o: [
            "A) Substituir bancos relacionais por cache.",
            "B) Atuar como ponto único de entrada (proxy reverso) para requisições dos clientes, lidando com roteamento, autenticação, rate limiting, SSL termination e agregação de respostas.",
            "C) Executar testes de carga em produção.",
            "D) Gerenciar versionamento no GitHub."
        ],
        a: "B",
        e: "Oculta a topologia interna dos microsserviços simplificando o consumo para clientes externos.",
        t: "Evita que clientes móveis façam dezenas de requisições diretas a serviços internos."
    },
    {
        q: "O que define o padrão Saga em arquiteturas de microsserviços distribuídos para gerenciar transações?",
        d: "Difícil",
        c: "Padrão Saga",
        o: [
            "A) Um bloqueio global ACID em todas as instâncias do cluster.",
            "B) Uma sequência de transações locais onde cada serviço atualiza seus dados e publica um evento/mensagem; se uma etapa falha, Sagas compensatórias executam ações reversas para manter a consistência eventual.",
            "C) Um mecanismo de criptografia TLS para endpoints REST.",
            "D) Um framework de injeção de dependência."
        ],
        a: "B",
        e: "Como transações ACID tradicionais via 2PC (Two-Phase Commit) não escalam bem em microsserviços, o padrão Saga gerencia consistência eventual de forma distribuída.",
        t: "Pode ser implementado via Orquestração ou Coreografia."
    }
];

arquiteturaSoftwareQuest.forEach(x => {
    addQuestion("Arquitetura de Software", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   DESIGN PATTERNS
===================================================== */
const designPatternsQuest = [
    {
        q: "Qual é o objetivo do Design Pattern criacional Singleton?",
        d: "Fácil",
        c: "Singleton",
        o: [
            "A) Criar cópias idênticas de objetos complexos.",
            "B) Garantir que uma classe tenha apenas uma única instância em toda a aplicação e fornecer um ponto global de acesso a ela.",
            "C) Desacoplar classes através de interfaces de eventos.",
            "D) Converter interfaces incompatíveis."
        ],
        a: "B",
        e: "Controla o acesso restrito a recursos compartilhados (como conexões de banco de dados ou logs).",
        t: "Deve ser usado com cuidado para evitar estado global excessivo."
    },
    {
        q: "O que propõe o Design Pattern Factory Method?",
        d: "Fácil",
        c: "Factory Method",
        o: [
            "A) Fornecer uma interface para criação de objetos em uma superclasse, mas permitindo que subclasses alterem o tipo de objeto que será criado.",
            "B) Destruir objetos da memória automaticamente.",
            "C) Criar tabelas SQL de forma dinâmica.",
            "D) Rotear requisições HTTP."
        ],
        a: "B",
        e: "Na verdade, a opção correta é: delegar a instanciação de objetos para subclasses. Promove baixo acoplamento.",
        t: "Evita acoplar o código cliente a classes concretas específicas."
    },
    {
        q: "Qual é o propósito do padrão Observer?",
        d: "Fácil",
        c: "Observer",
        o: [
            "A) Criptografar dados em trânsito.",
            "B) Definir uma dependência um-para-muitos entre objetos para que, quando um objeto mudar de estado, todos os seus dependentes sejam notificados e atualizados automaticamente.",
            "C) Ordenar listas de arrays em O(n log n).",
            "D) Unir duas tabelas relacionais."
        ],
        a: "B",
        e: "Base para arquiteturas orientadas a eventos e interfaces reativas.",
        t: "Exemplo: listeners de eventos em UI."
    },
    {
        q: "Como o padrão comportamental Strategy funciona?",
        d: "Média",
        c: "Strategy",
        o: [
            "A) Notifica automaticamente múltiplos objetos sobre mudanças de estado.",
            "B) Define uma família de algoritmos, encapsula cada um em classes separadas e permite que eles sejam trocados dinamicamente em tempo de execução.",
            "C) Constrói objetos complexos passo a passo.",
            "D) Fornece uma interface unificada para um subsistema complexo."
        ],
        a: "B",
        e: "Elimina grandes blocos condicionais (`if/else` ou `switch`) ao delegar comportamentos para classes especializadas.",
        t: "Exemplo clássico: diferentes algoritmos de cálculo de frete ou pagamento."
    },
    {
        q: "O que o Design Pattern Adapter resolve na engenharia de software?",
        d: "Média",
        c: "Adapter",
        o: [
            "A) Cria múltiplas instâncias de classes estáticas.",
            "B) Permite que objetos com interfaces incompatíveis colaborem entre si, atuando como um tradutor (wrapper) entre o código cliente e a classe legada.",
            "C) Criptografa senhas de banco de dados.",
            "D) Gerencia transações ACID distribuídas."
        ],
        a: "B",
        e: "Útil ao integrar bibliotecas de terceiros ou sistemas legados cujas assinaturas não coincidem com o padrão do projeto.",
        t: "Pertence à categoria de padrões estruturais."
    },
    {
        q: "Qual é a função do padrão Builder no desenvolvimento orientado a objetos?",
        d: "Média",
        c: "Builder",
        o: [
            "A) Executar migrações de banco de dados.",
            "B) Permitir a construção de objetos complexos passo a passo, separando a lógica de construção da representação final do objeto.",
            "C) Destruir instâncias órfãs da memória heap.",
            "D) Validar formulários web via JavaScript."
        ],
        a: "B",
        e: "Evita construtores telescópicos com dezenas de parâmetros posicionais confusos.",
        t: "Muito utilizado com objetos imutáveis complexos (Lombok @Builder)."
    },
    {
        q: "Qual é a diferença estrutural entre os padrões Adapter e Proxy?",
        d: "Difícil",
        c: "Adapter vs Proxy",
        o: [
            "A) Adapter altera a interface de um objeto para torná-la compatível com outra esperada; Proxy mantém a mesma interface do objeto real para controlar o acesso a ele (seja por segurança, lazy loading ou cache).",
            "B) Ambos fazem exatamente a mesma coisa.",
            "C) Proxy é usado apenas em banco de dados e Adapter em interface gráfica.",
            "D) Adapter cria instâncias múltiplas e Proxy é Singleton."
        ],
        a: "A",
        e: "Embora ambos atuem como intermediários (wrappers), suas intenções arquiteturais são distintas: conversão de interface vs controle de acesso.",
        t: "Ambos pertencem à categoria de padrões estruturais."
    },
    {
        q: "O que caracteriza o padrão comportamental State em comparação a múltiplos condicionais?",
        d: "Difícil",
        c: "State Pattern",
        o: [
            "A) State armazena dados em cache NoSQL.",
            "B) Permite que um objeto altere seu comportamento quando seu estado interno muda, encapsulando cada estado em classes separadas e fazendo o objeto delegar o comportamento para o estado atual.",
            "C) State substitui o uso de banco de dados relacional.",
            "D) State é sinônimo de Singleton global."
        ],
        a: "B",
        e: "Evita o antipadrão de dezenas de `if/else` baseados em variáveis de estado espalhadas pela classe.",
        t: "Cada estado vira uma classe concreta que implementa uma interface comum."
    },
    {
        q: "Como o padrão Command desacopla o emissor do receptor de uma solicitação?",
        d: "Difícil",
        c: "Command Pattern",
        o: [
            "A) Encapsulando uma solicitação como um objeto completo, permitindo parametrizar clientes com diferentes requisições, enfileirar operações, registrar logs e suportar funcionalidade de desfazer (undo).",
            "B) Unindo métodos estáticos diretamente no controller HTTP.",
            "C) Criptografando requisições em rede via SSL.",
            "D) Substituindo filas de mensagens em nuvem."
        ],
        a: "A",
        e: "Transforma uma chamada de método em um objeto de primeira classe.",
        t: "Muito útil em macros de teclado, transações reversíveis e arquiteturas CQRS."
    },
    {
        q: "O que distingue o padrão Abstract Factory do Factory Method?",
        d: "Difícil",
        c: "Abstract Factory vs Factory Method",
        o: [
            "A) Abstract Factory cria famílias inteiras de objetos relacionados ou dependentes sem especificar suas classes concretas, enquanto o Factory Method foca em criar um único tipo de objeto através de herança.",
            "B) Abstract Factory não utiliza interfaces.",
            "C) Factory Method é usado apenas em microsserviços.",
            "D) Não há nenhuma diferença conceitual."
        ],
        a: "A",
        e: "Abstract Factory lida com múltiplos produtos inter-relacionados (ex: criar componentes visuais para Windows ou Mac), enquanto o Factory Method delega a criação de um produto específico para subclasses.",
        t: "Ambos são padrões criacionais avançados."
    }
];

designPatternsQuest.forEach(x => {
    addQuestion("Design Patterns", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   DDD (DOMAIN-DRIVEN DESIGN)
===================================================== */
const dddQuest = [
    {
        q: "O que é uma Entidade (Entity) no Domain-Driven Design?",
        d: "Fácil",
        c: "Entidades DDD",
        o: [
            "A) Um objeto definido primariamente por sua identidade única e contínua ao longo do tempo, e não por seus atributos.",
            "B) Um objeto imutável definido apenas pelos seus valores.",
            "C) Uma tabela de banco de dados relacional.",
            "D) Um arquivo de configuração XML."
        ],
        a: "A",
        e: "Mesmo que todos os atributos de uma Entidade mudem, sua identidade (ID) a mantém como o mesmo objeto de negócio.",
        t: "Exemplo: Um cliente continua sendo o mesmo cliente mesmo se mudar de endereço e telefone."
    },
    {
        q: "O que caracteriza um Objeto de Valor (Value Object) no DDD?",
        d: "Fácil",
        c: "Value Objects",
        o: [
            "A) Um objeto mutável com identificador numérico sequencial.",
            "B) Um objeto imutável que descreve características ou atributos do domínio, definido inteiramente por seus valores e sem identidade conceitual própria.",
            "C) Uma tabela de log de erros.",
            "D) Um endpoint REST de alta performance."
        ],
        a: "B",
        e: "Se dois objetos de valor possuem os mesmos atributos, eles são considerados estritamente iguais (ex: Endereço, Moeda, Período de tempo).",
        t: "Devem ser sempre imutáveis."
    },
    {
        q: "O que é um Bounded Context (Contexto Delimitado) no DDD?",
        d: "Fácil",
        c: "Bounded Context",
        o: [
            "A) O limite físico da rede de servidores na nuvem.",
            "B) O limite conceitual dentro do qual um modelo de domínio específico é definido e aplicável, garantindo que termos de negócio tenham significado unívoco.",
            "C) Uma restrição de chave estrangeira em banco de dados.",
            "D) Um limite de tempo para execução de Sprints."
        ],
        a: "B",
        e: "Evita que conceitos de negócio colidam (ex: a palavra 'Cliente' tem significados distintos no contexto de Vendas e no contexto de Suporte).",
        t: "Fundamental para o design de microsserviços."
    },
    {
        q: "Qual é a função de um Repositório (Repository) na arquitetura DDD?",
        d: "Média",
        c: "Repositórios DDD",
        o: [
            "A) Conectar diretamente telas frontend a servidores FTP.",
            "B) Abstrair a camada de persistência, fingindo que o banco de dados é uma coleção em memória de Agregados, isolando o domínio de detalhes de SQL.",
            "C) Executar scripts de migração de schema.",
            "D) Criptografar dados sensíveis."
        ],
        a: "B",
        e: "O repositório fornece métodos para buscar e salvar Agregados, mantendo o domínio puro.",
        t: "Trabalha diretamente atrelado ao conceito de Aggregate Root."
    },
    {
        q: "O que é uma Raiz de Agregado (Aggregate Root) no Domain-Driven Design?",
        d: "Média",
        c: "Aggregate Root",
        o: [
            "A) A tabela principal de um banco relacional.",
            "B) Uma entidade que serve como ponto de entrada e controle para um cluster de objetos associados (o Agregado), garantindo que as regras de consistência transacional do grupo sejam rigorosamente mantidas.",
            "C) O servidor web principal da aplicação.",
            "D) Um método estático de inicialização."
        ],
        a: "B",
        e: "Objetos externos só podem modificar o agregado através de sua Raiz, protegendo as invariantes do negócio.",
        t: "Limita o escopo de modificações transacionais."
    },
    {
        q: "Qual é o papel de um Serviço de Domínio (Domain Service) no DDD?",
        d: "Média",
        c: "Domain Services",
        o: [
            "A) Conectar a aplicação a serviços de nuvem externos como AWS S3.",
            "B) Conter lógicas de negócio ou regras complexas que envolvem múltiplas entidades ou agregados e que não pertencem naturalmente a nenhuma entidade isolada.",
            "C) Renderizar componentes visuais no frontend.",
            "D) Executar rotinas de testes unitários."
        ],
        a: "B",
        e: "Usado quando a operação de domínio não cabe em uma única entidade sem violar encapsulamento.",
        t: "Diferencia-se de Application Services (que coordenam transações e infraestrutura)."
    },
    {
        q: "O que caracteriza uma Linguagem Ubíqua (Ubiquitous Language) no DDD?",
        d: "Difícil",
        c: "Linguagem Ubíqua",
        o: [
            "A) Um vocabulário técnico rigoroso exclusivo dos programadores sêniores.",
            "B) Uma linguagem rigorosamente compartilhada e comum entre especialistas de domínio e desenvolvedores, utilizada tanto nas conversas quanto diretamente no código fonte.",
            "C) Um padrão de tradução automática de código Java para C#.",
            "D) Uma biblioteca de internacionalização de idiomas web."
        ],
        a: "B",
        e: "Evita ruídos de tradução entre o que o negócio quer e o que o software faz.",
        t: "Termos do negócio devem refletir exatamente nos nomes de classes, métodos e variáveis."
    },
    {
        q: "Como o DDD lida com a comunicação entre diferentes Bounded Contexts através de Context Mapping?",
        d: "Difícil",
        c: "Context Mapping",
        o: [
            "A) Unificando todos os contextos em um monólito gigante.",
            "B) Mapeando formalmente as relações e padrões de integração entre contextos delimitados (como Shared Kernel, Customer-Supplier, Anti-Corruption Layer ou Open Host Service).",
            "C) Criptografando o tráfego de rede via TLS.",
            "D) Ignorando diferenças de modelos de dados."
        ],
        a: "B",
        e: "O Context Mapping é essencial para desenhar limites arquiteturais claros em ecossistemas corporativos complexos.",
        t: "A Anti-Corruption Layer (ACL) protege um domínio de modelos sujos de outro."
    },
    {
        q: "O que são Eventos de Domínio (Domain Events) no DDD e como impactam a arquitetura?",
        d: "Difícil",
        c: "Domain Events",
        o: [
            "A) Logs de erro impressos no console.",
            "B) Objetos imutáveis que representam algo significativo que ocorreu no domínio de negócio (ex: `PedidoRealizado`), permitindo reatividade, desacoplamento assíncrono e arquiteturas orientadas a eventos.",
            "C) Cliques de mouse executados pelo usuário no frontend.",
            "D) Migrações de esquema de banco de dados."
        ],
        a: "B",
        e: "Permitem disparar efeitos colaterais em outros agregados ou contextos de forma assíncrona sem acoplamento direto.",
        t: "Base para arquiteturas reativas e event sourcing."
    },
    {
        q: "Como se aplicam as Invariantes (Invariants) de negócio dentro de um Agregado no DDD?",
        d: "Difícil",
        c: "Invariantes DDD",
        o: [
            "A) Invariantes são regras matemáticas que mudam aleatoriamente.",
            "B) São regras de consistência que devem ser mantidas verdadeiras a cada momento dentro do agregado; operações que violam uma invariante devem ser rejeitadas transacionalmente pela Raiz do Agregado.",
            "C) São restrições visuais de CSS.",
            "D) São padrões de criptografia de senhas."
        ],
        a: "B",
        e: "O escopo de consistência estrita (ACID) no DDD deve se limitar aos limites de um único Agregado.",
        t: "Entre agregados diferentes, aceita-se consistência eventual."
    }
];

dddQuest.forEach(x => {
    addQuestion("DDD", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   SCRUM E XP
===================================================== */
const scrumXpQuest = [
    {
        q: "O que é uma Sprint no framework Scrum?",
        d: "Fácil",
        c: "Scrum Básico",
        o: [
            "A) Uma reunião diária de 15 minutos.",
            "B) Um ciclo de tempo fixo (time-box) de um mês ou menos onde um incremento de produto pronto e utilizável é criado.",
            "C) Um relatório financeiro anual.",
            "D) Um teste de carga automatizado."
        ],
        a: "B",
        e: "A Sprint é o coração do Scrum, mantendo o ritmo constante de entregas.",
        t: "Sua duração não deve ser alterada durante a execução."
    },
    {
        q: "O que é a Daily Scrum (Reunião Diária)?",
        d: "Fácil",
        c: "Daily Scrum",
        o: [
            "A) Uma reunião de 4 horas para planejamento de custos.",
            "B) Um evento time-boxed de 15 minutos para o time de desenvolvimento inspecionar o progresso rumo à Meta da Sprint e sincronizar o plano para as próximas 24 horas.",
            "C) Uma avaliação de desempenho individual feita pelo chefe.",
            "D) Uma apresentação comercial para clientes externos."
        ],
        b: "B",
        e: "Mantém a equipe alinhada e identifica impedimentos rapidamente.",
        t: "Focada estritamente no objetivo da Sprint."
    },
    {
        q: "O que é o Product Backlog no Scrum?",
        d: "Fácil",
        c: "Product Backlog",
        o: [
            "A) Um documento estático imutável criado no primeiro dia do projeto.",
            "B) Uma lista emergente e ordenada de tudo que é necessário para o produto, sendo a única fonte de requisitos para quaisquer mudanças no produto.",
            "C) O histórico de bugs corrigidos em sistemas legados.",
            "D) O registro de ponto dos funcionários."
        ],
        b: "B",
        e: "Gerenciado pelo Product Owner, evolui constantemente com o produto e feedback dos usuários.",
        t: "Itens no topo devem estar refinados e prontos."
    },
    {
        q: "Quais são os três papéis oficiais definidos no Scrum?",
        d: "Média",
        c: "Papéis Scrum",
        o: [
            "A) Gerente de Projetos, Arquiteto Chefe e Desenvolvedor Sênior.",
            "B) Product Owner, Scrum Master e Developers (Desenvolvedores/Time de Desenvolvimento).",
            "C) Cliente, Analista de Requisitos e Tester.",
            "D) Diretor Executivo, Líder Técnico e DevOps."
        ],
        a: "B",
        e: "O Scrum define papéis claros focados em produto, facilitação de processo e entrega técnica.",
        t: "Não há subcargos formais dentro do time de desenvolvimento no Scrum."
    },
    {
        q: "Qual é a principal responsabilidade do Product Owner (PO) no Scrum?",
        d: "Média",
        c: "Product Owner",
        o: [
            "A) Gerenciar o código fonte no GitHub e aprovar pull requests.",
            "B) Maximizar o valor do produto resultante do trabalho do time, gerenciar, priorizar e refinar o Product Backlog.",
            "C) Conduzir reuniões diárias e remover impedimentos técnicos.",
            "D) Aplicar punições por atrasos nas entregas."
        ],
        a: "B",
        e: "O PO é a voz do cliente e do negócio perante o time de desenvolvimento.",
        t: "Sua decisão sobre a ordem do backlog é soberana."
    },
    {
        q: "O que ocorre na Reunião de Retrospectiva da Sprint (Sprint Retrospective)?",
        d: "Média",
        c: "Sprint Retrospective",
        o: [
            "A) O cliente avalia financeiramente o trabalho do time.",
            "B) O time inspeciona a si próprio quanto a pessoas, interações, processos e ferramentas, planejando melhorias para implementar na próxima Sprint.",
            "C) O Scrum Master cancela o projeto se houver falhas.",
            "D) O Product Owner define novas metas comerciais."
        ],
        a: "B",
        e: "Foco total em melhoria contínua (Kaizen) do processo de desenvolvimento.",
        t: "Gera ações práticas de melhoria para a Sprint seguinte."
    },
    {
        q: "O que diferencia a prática de Programação em Duplas (Pair Programming) do Extreme Programming (XP)?",
        d: "Difícil",
        c: "Extreme Programming (XP)",
        o: [
            "A) Dois programadores trabalham juntos na mesma estação de trabalho; um escreve o código (driver) enquanto o outro revisa cada linha em tempo real (navigator), alternando papéis.",
            "B) Dois programadores escrevem códigos em servidores separados e depois fundem via Git.",
            "C) Um programador escreve código de dia e o outro à noite.",
            "D) Prática exclusiva de testes de interface."
        ],
        a: "A",
        e: "Melhora drasticamente a qualidade do código, reduz bugs e dissemina o conhecimento técnico na equipe.",
        t: "É um dos pilares de engenharia do XP."
    },
    {
        q: "Como o princípio de 'Refatoração' (Refactoring) é abordado no Extreme Programming (XP)?",
        d: "Difícil",
        c: "Refatoração XP",
        o: [
            "A) Refatorar é proibido após o código ir para produção.",
            "B) Os desenvolvedores devem refatorar continuamente o código para melhorar sua estrutura interna sem alterar seu comportamento externo, mantendo a cobertura de testes sempre verde.",
            "C) Refatoração é feita apenas uma vez por ano por consultores externos.",
            "D) Significa reescrever todo o software do zero em outra linguagem."
        ],
        a: "B",
        e: "Combate o acúmulo de débito técnico mantendo o design do software limpo e flexível.",
        t: "Prática chave combinada com testes automatizados."
    },
    {
        q: "O que propõe a prática de Desenvolvimento Orientado a Testes (TDD) dentro do Extreme Programming (XP)?",
        d: "Difícil",
        c: "TDD no XP",
        o: [
            "A) Escrever testes dias após o código de produção.",
            "B) Escrever um teste automatizado que falha antes de escrever o código de produção correspondente, escrevendo o código mínimo para passar e em seguida refatorando.",
            "C) Testar apenas falhas de hardware do servidor.",
            "D) Ter uma equipe de testers dedicada separada dos desenvolvedores."
        ],
        a: "B",
        e: "O ciclo Red-Green-Refactor garante alta testabilidade e arquitetura desacoplada.",
        t: "Prática fundamental de engenharia ágil."
    },
    {
        q: "Como funciona a dinâmica de estimativa por 'Planning Poker' no Scrum?",
        d: "Difícil",
        c: "Planning Poker",
        o: [
            "A) O gerente determina sozinho o prazo e impõe à equipe.",
            "B) Os membros do time usam cartas numeradas (geralmente com escala Fibonacci) para votar em conjunto e em segredo sobre o esforço de itens do backlog, debater divergências e chegar a um consenso.",
            "C) Jogo de azar para definir bônus salariais.",
            "D) Sorteio aleatório de tarefas via software."
        ],
        a: "B",
        e: "Evita o viés de ancoragem onde a primeira opinião dita o valor estimado.",
        t: "Promove engajamento e entendimento compartilhado das histórias."
    }
];

scrumXpQuest.forEach(x => {
    addQuestion("Scrum e XP", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   TESTES DE SOFTWARE
===================================================== */
const testesSoftwareQuest = [
    {
        q: "O que é um Teste Unitário (Unit Test)?",
        d: "Fácil",
        c: "Testes Unitários",
        o: [
            "A) Testar o sistema inteiro integrando banco de dados e APIs.",
            "B) Testar a menor unidade isolada de código (geralmente um método ou função) de forma automatizada e independente.",
            "C) Testes visuais feitos manualmente por usuários finais.",
            "D) Testes de carga em servidores de produção."
        ],
        a: "B",
        e: "Devem rodar extremamente rápido e sem dependências externas reais (usando mocks).",
        t: "Base da pirâmide de testes."
    },
    {
        q: "O que avalia um Teste de Aceitação (Acceptance Test)?",
        d: "Fácil",
        c: "Testes de Aceitação",
        o: [
            "A) Se o sistema atende aos requisitos de negócio e critérios de aceitação definidos pelo cliente, validando se o software está pronto para uso.",
            "B) Se o microprocessador suporta alta temperatura.",
            "C) Se a sintaxe CSS possui erros de ponto e vírgula.",
            "D) Se o código possui variáveis não utilizadas."
        ],
        a: "B",
        e: "Normalmente validam fluxos ponta a ponta do ponto de vista do usuário.",
        t: "Fazem parte do topo da pirâmide de testes."
    },
    {
        q: "O que é um Bug em engenharia de software?",
        d: "Fácil",
        c: "Conceitos de Teste",
        o: [
            "A) Um inseto real na placa-mãe do computador.",
            "B) Uma falha, defeito ou erro no código que faz com que o programa produza um resultado incorreto ou inesperado em relação ao seu comportamento esperado.",
            "C) Uma melhoria planejada na interface.",
            "D) Um arquivo de backup compactado."
        ],
        b: "B",
        e: "Devem ser identificados por testes e corrigidos antes do deploy.",
        t: "Termo popularizado por Grace Hopper."
    },
    {
        q: "Qual é o objetivo do padrão TDD (Test-Driven Development)?",
        d: "Média",
        c: "TDD",
        o: [
            "A) Escrever testes automatizados dias após o sistema ir para produção.",
            "B) Ciclo onde o desenvolvedor escreve um teste automatizado que falha, escreve o código mínimo necessário para o teste passar (Green) e em seguida refatora o código.",
            "C) Testar apenas falhas de hardware.",
            "D) Substituir revisões de código por relatórios PDF."
        ],
        a: "B",
        e: "O famoso ciclo Red-Green-Refactor melhora o design do código e garante cobertura alta.",
        t: "Gera código altamente desacoplado e testável."
    },
    {
        q: "O que diferencia Testes de Caixa Branca de Testes de Caixa Preta?",
        d: "Média",
        c: "Caixa Branca vs Caixa Preta",
        o: [
            "A) Caixa branca testa hardware; caixa preta testa software.",
            "B) Caixa branca exige conhecimento da estrutura interna de código e lógica do sistema; caixa preta testa o software apenas pelas entradas e saídas externas, sem conhecer o código interno.",
            "C) Não há nenhuma diferença metodológica.",
            "D) Caixa preta é exclusiva para testes unitários."
        ],
        a: "B",
        e: "Testes unitários costumam ser caixa branca; testes de sistema ou aceitação costumam ser caixa preta.",
        t: "Abordagens complementares na garantia de qualidade."
    },
    {
        q: "O que avaliam os Testes de Regressão?",
        d: "Média",
        c: "Testes de Regressão",
        o: [
            "A) Se o sistema consegue voltar no tempo.",
            "B) Se novas alterações de código (correções de bugs ou novas funcionalidades) não quebraram funcionalidades antigas que já funcionavam.",
            "C) A velocidade de renderização de telas em celulares antigos.",
            "D) A quantidade de linhas apagadas no Git."
        ],
        a: "B",
        e: "Essenciais em pipelines de CI/CD para rodar suítes inteiras de testes a cada commit.",
        t: "Automatizados para garantir feedback rápido."
    },
    {
        q: "Qual é a diferença conceitual entre Mocks e Stubs em testes automatizados?",
        d: "Difícil",
        c: "Mocks vs Stubs",
        o: [
            "A) Stubs fornecem respostas prontas pré-programadas para chamadas durante o teste; Mocks são objetos configurados com expectativas específicas que verificam se interações e chamadas esperadas realmente ocorreram.",
            "B) Ambos são sinônimos exatos sem nenhuma distinção.",
            "C) Stubs testam banco de dados e Mocks testam telas.",
            "D) Mocks são usados apenas em linguagens dinâmicas."
        ],
        a: "A",
        e: "Enquanto o Stub foca no estado (retornar dados), o Mock foca no comportamento (verificar se o método foi chamado corretamente).",
        t: "Conceito fundamental em bibliotecas como Mockito."
    },
    {
        q: "O que mede a métrica de Cobertura de Código (Code Coverage), como Branch Coverage e Line Coverage?",
        d: "Difícil",
        c: "Code Coverage",
        o: [
            "A) O número exato de bugs eliminados em produção.",
            "B) A porcentagem de linhas de código, instruções ou desvios condicionais (branches) que foram executados ao menos uma vez durante a execução da suíte de testes.",
            "C) A velocidade de execução dos testes em segundos.",
            "D) A quantidade de desenvolvedores trabalhando na mesma branch."
        ],
        a: "B",
        e: "Alta cobertura indica quais partes foram testadas, embora 100% de cobertura não garanta ausência de bugs lógicos.",
        t: "Métrica importante, mas não a única medida de qualidade."
    },
    {
        q: "O que caracteriza a abordagem de Testes de Mutação (Mutation Testing)?",
        d: "Difícil",
        c: "Testes de Mutação",
        o: [
            "A) Alterar o código fonte de produção aleatoriamente para ver se os testes falham (matam a mutação), avaliando assim a qualidade e robustez da própria suíte de testes.",
            "B) Mudar o sistema operacional do servidor durante o teste.",
            "C) Testar aplicações desenvolvidas em linguagens mutáveis.",
            "D) Compilar código binário em tempo de execução."
        ],
        a: "B",
        e: "Se um teste passa mesmo após o código de produção ser alterado (mutado), significa que o teste é fraco e não valida o comportamento real.",
        t: "Técnica avançada de alto rigor de qualidade."
    },
    {
        q: "Como funcionam os Testes de Contrato (Contract Testing) em microsserviços?",
        d: "Difícil",
        c: "Testes de Contrato",
        o: [
            "A) Testar contratos de trabalho de funcionários em planilhas.",
            "B) Validar se os microsserviços provedores e consumidores se comunicam conforme um contrato acordado (ex: Pact), garantindo que alterações em um serviço não quebrem o outro sem precisar subir todo o ambiente.",
            "C) Testar criptografia de certificados SSL.",
            "D) Executar testes de carga em servidores proxy."
        ],
        a: "B",
        e: "Resolve o problema de integração frágil em arquiteturas distribuídas complexas.",
        t: "Alternativa eficiente a testes de ponta a ponta (E2E) lentos."
    }
];

testesSoftwareQuest.forEach(x => {
    addQuestion("Testes de Software", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   GIT
===================================================== */
const gitQuest = [
    {
        q: "O que o comando `git commit` faz no controle de versão Git?",
        d: "Fácil",
        c: "Comandos Básicos Git",
        o: [
            "A) Envia o código para o servidor remoto GitHub.",
            "B) Grava permanentemente o instantâneo (snapshot) das alterações preparadas (staging area) no histórico local do repositório.",
            "C) Cria uma nova branch isolada.",
            "D) Apaga o histórico de commits anteriores."
        ],
        a: "B",
        e: "Salva o progresso localmente com uma mensagem descritiva.",
        t: "Diferencia-se do `git push` que envia para a nuvem."
    },
    {
        q: "Qual comando do Git é usado para clonar um repositório remoto existente?",
        d: "Fácil",
        c: "Git Clone",
        o: [
            "A) `git download url`",
            "B) `git clone <url>`",
            "C) `git copy repository`",
            "D) `git pull remote`"
        ],
        b: "B",
        e: "Baixa uma cópia completa de todo o histórico do repositório para a máquina local.",
        t: "Comando inicial padrão ao trabalhar em um projeto existente."
    },
    {
        q: "Para que serve o comando `git status`?",
        d: "Fácil",
        c: "Git Status",
        o: [
            "A) Para verificar o estado atual do diretório de trabalho e da staging area, mostrando arquivos modificados, adicionados ou não rastreados.",
            "B) Para checar se o servidor GitHub está fora do ar.",
            "C) Para exibir o status de bateria da máquina.",
            "D) Para listar todos os usuários conectados ao repositório."
        ],
        b: "B",
        e: "O comando mais consultado no dia a dia para saber o que está pendente de commit.",
        t: "Não altera nenhum dado no repositório."
    },
    {
        q: "Qual é a diferença entre `git merge` e `git rebase`?",
        d: "Média",
        c: "Merge vs Rebase",
        o: [
            "A) `git merge` cria um commit de junção preservando o histórico cronológico exato das branches; `git rebase` reaplica os commits da branch atual em cima da base de outra branch, reescrevendo o histórico para mantê-lo linear.",
            "B) `merge` apaga arquivos e `rebase` os recupera.",
            "C) Não há diferenças; ambos executam a mesma operação.",
            "D) `rebase` é exclusivo para repositórios privados."
        ],
        a: "A",
        e: "O rebase deixa o histórico linear e limpo, mas deve ser evitado em branches públicas compartilhadas para não corromper o trabalho de outros desenvolvedores.",
        t: "Merge preserva a verdade histórica exata das ramificações."
    },
    {
        q: "O que o comando `git stash` faz?",
        d: "Média",
        c: "Git Stash",
        o: [
            "A) Deleta permanentemente todas as alterações não comitadas.",
            "B) Guarda temporariamente (em uma pilha) as alterações em andamento no diretório de trabalho para que você possa mudar de branch com limpo, permitindo recuperá-las depois.",
            "C) Envia o código para o servidor remoto em modo oculto.",
            "D) Cria um novo branch de release."
        ],
        a: "B",
        e: "Muito útil quando é preciso interromper uma tarefa atual para corrigir um bug urgente em outra branch.",
        t: "Recuperável via `git stash pop`."
    },
    {
        q: "O que significa o conceito de 'Detached HEAD' no Git?",
        d: "Média",
        c: "Detached HEAD",
        o: [
            "A) Que o computador perdeu a conexão com a internet.",
            "B) Que o ponteiro HEAD está apontando diretamente para um commit específico em vez de para o topo de uma branch, tornando fácil perder novos commits se não forem associados a uma branch.",
            "C) Que o repositório foi corrompido permanentemente.",
            "D) Que o usuário foi banido do GitHub."
        ],
        a: "B",
        e: "Ocorre frequentemente ao fazer checkout direto em hashes de commits antigos.",
        t: "Pode ser resolvido criando uma branch a partir dali (`git checkout -b nova-branch`)."
    },
    {
        q: "O que o comando `git reset --soft` faz em comparação com `--hard`?",
        d: "Difícil",
        c: "Git Reset Avançado",
        o: [
            "A) `--soft` move o ponteiro HEAD mantendo as alterações no staging area; `--hard` redefine o HEAD, o staging area e o diretório de trabalho, destruindo todas as alterações não comitadas.",
            "B) Ambos descartam permanentemente todo o código do computador.",
            "C) `--soft` envia alterações para o GitHub e `--hard` baixa do servidor.",
            "D) Não existe distinção prática."
        ],
        a: "A",
        e: "Compreender os modificadores de reset evita perda acidental de código fonte.",
        t: "Use `--hard` com extremo cuidado."
    },
    {
        q: "Como funciona o comando `git cherry-pick`?",
        d: "Difícil",
        c: "Git Cherry-Pick",
        o: [
            "A) Apaga um commit específico do histórico remoto.",
            "B) Permite pegar um commit específico de qualquer branch e aplicá-lo na branch atual onde você está trabalhando, sem precisar fazer merge de toda a branch.",
            "C) Sincroniza todos os branches automaticamente.",
            "D) Cria tags de versão para produção."
        ],
        a: "B",
        e: "Útil para aplicar correções pontuais (hotfixes) de uma branch de desenvolvimento diretamente em produção.",
        t: "Evita merges indesejados de códigos inacabados."
    },
    {
        q: "O que o comando `git reflog` registra e para que serve?",
        d: "Difícil",
        c: "Git Reflog",
        o: [
            "A) Registra logs de erros de compilação em Java.",
            "B) Mantém um registro local de todas as alterações na posição do ponteiro HEAD (incluindo commits deletados, resets e checkouts), permitindo recuperar códigos aparentemente perdidos.",
            "C) Mostra o consumo de rede ao enviar commits.",
            "D) Lista credenciais de acesso ao GitHub."
        ],
        a: "B",
        e: "É a 'caixa-preta' salvadora do Git quando comandos destrutivos são executados por engano.",
        t: "Permite voltar a qualquer estado anterior do repositório local."
    },
    {
        q: "O que diferencia um Submódulo Git (`git submodule`) de um subtree?",
        d: "Difícil",
        c: "Git Submodules",
        o: [
            "A) Submódulos não utilizam controle de versão.",
            "B) Submódulos apontam para um commit específico de um repositório externo mantendo-o como um projeto separado dentro do principal; subtrees mesclam o código externo diretamente no histórico do repositório hospedeiro.",
            "C) São sinônimos exatos sem nenhuma distinção.",
            "D) Submódulos funcionam apenas em servidores Windows."
        ],
        a: "B",
        e: "Gerenciam dependências complexas de projetos externos dentro de um repositório pai.",
        t: "Exigem atenção redobrada ao clonar e atualizar referências."
    }
];

gitQuest.forEach(x => {
    addQuestion("Git", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   CRIPTOGRAFIA E CERTIFICAÇÃO DIGITAL
===================================================== */
const criptografiaQuest = [
    {
        q: "Qual é a diferença fundamental entre Criptografia Simétrica e Assimétrica?",
        d: "Fácil",
        c: "Conceitos de Criptografia",
        o: [
            "A) Simétrica usa senhas numéricas e Assimétrica usa arquivos de texto.",
            "B) Simétrica usa a mesma chave secreta tanto para criptografar quanto para descriptografar; Assimétrica usa um par de chaves matemáticas distintas (pública e privada).",
            "C) Assimétrica é mais rápida e usada para grandes volumes de dados locais.",
            "D) Simétrica é exclusiva de servidores web HTTPS."
        ],
        a: "B",
        e: "A criptografia assimétrica resolve o problema da troca segura de chaves em redes abertas.",
        t: "Exemplos: AES (Simétrica) e RSA (Assimétrica)."
    },
    {
        q: "O que é uma Função Hash criptográfica (como SHA-256)?",
        d: "Fácil",
        c: "Funções Hash",
        o: [
            "A) Um algoritmo reversível que criptografa e descriptografa senhas.",
            "B) Uma função matemática unidirecional (one-way) que transforma qualquer entrada de dados em uma sequência de tamanho fixo (resumo/digest), sendo impossível recuperar o dado original a partir do hash.",
            "C) Um protocolo de rede para envio de e-mails.",
            "D) Uma chave privada secreta."
        ],
        a: "B",
        e: "Utilizada para verificação de integridade de arquivos e armazenamento seguro de senhas com sal (salt).",
        t: "Mesmo uma alteração mínima no arquivo altera completamente o hash resultante."
    },
    {
        q: "Qual é a finalidade principal de um Certificado Digital (como padrão X.509)?",
        d: "Fácil",
        c: "Certificação Digital",
        o: [
            "A) Aumentar a velocidade de download de arquivos grandes.",
            "B) Vincular uma chave pública a uma identidade corporativa ou pessoal, atestada por uma Autoridade Certificadora (CA) confiável.",
            "C) Compactar dados em formato ZIP.",
            "D) Bloquear ataques de força bruta em servidores."
        ],
        a: "B",
        e: "Garante confiança e autenticidade em transações eletrônicas e sites web seguros.",
        t: "Base da infraestrutura de chave pública (ICP)."
    },
    {
        q: "O que garante o uso de uma Assinatura Digital em documentos eletrônicos?",
        d: "Média",
        c: "Assinatura Digital",
        o: [
            "A) Apenas a compactação do arquivo em formato ZIP.",
            "B) Integridade (o documento não foi alterado), Autenticidade (prova quem assinou) e Não-repúdio (o signatário não pode negar a autoria).",
            "C) Criptografia simétrica de chave única compartilhada.",
            "D) Velocidade de download da página."
        ],
        a: "B",
        e: "Baseada em criptografia assimétrica e hash, a assinatura digital tem validade jurídica.",
        t: "Garante que qualquer alteração posterior invalide a assinatura."
    },
    {
        q: "O que é um ataque de Homem no Meio (MitM - Man-in-the-Middle)?",
        d: "Média",
        c: "Ataques Criptográficos",
        o: [
            "A) Um invasor intercepta secretamente e pode alterar a comunicação entre duas partes que acreditam estar se comunicando diretamente entre si.",
            "B) Um vírus que apaga o disco rígido à meia-noite.",
            "C) Um ataque de força bruta contra senhas de e-mail.",
            "D) Falha de hardware em roteadores Wi-Fi."
        ],
        a: "B",
        e: "Na verdade, a opção correta é: interceptação e retransmissão de mensagens em rede. O HTTPS com certificados válidos previne esse tipo de ataque.",
        t: "Exige validação estrita de certificados SSL pelo cliente."
    },
    {
        q: "Qual é a utilidade do conceito de 'Sal' (Salt) no armazenamento seguro de senhas com Hash?",
        d: "Média",
        c: "Salt em Senhas",
        o: [
            "A) Deixar a senha mais saborosa para o sistema.",
            "B) Adicionar uma string aleatória única a cada senha antes de aplicar a função hash, impedindo ataques por tabela arco-íris (Rainbow Tables) para senhas idênticas.",
            "C) Criptografar a chave privada do servidor.",
            "D) Aumentar o tamanho do arquivo de log."
        ],
        a: "B",
        e: "Garante que usuários com a mesma senha (ex: '123456') tenham hashes resultantes completamente diferentes no banco de dados.",
        t: "Algoritmos como bcrypt e Argon2 fazem isso nativamente."
    },
    {
        q: "Como o protocolo HTTPS utiliza certificados digitais SSL/TLS no estabelecimento de uma conexão segura?",
        d: "Difícil",
        c: "SSL/TLS e HTTPS",
        o: [
            "A) Criptografando todo o tráfego com chaves públicas fixas embutidas no navegador.",
            "B) Através do processo de Handshake TLS, onde o servidor apresenta um certificado validado por uma Autoridade Certificadora (CA), permitindo negociar chaves de sessão simétricas temporárias para troca segura de dados.",
            "C) Desativando firewalls locais para otimizar pacotes TCP.",
            "D) Substituindo o protocolo IP por endereços MAC físicos."
        ],
        a: "B",
        e: "Combina criptografia assimétrica no handshake inicial para troca segura de chaves e simétrica para o tráfego contínuo devido à performance.",
        t: "Essencial para privacidade e segurança na web moderna."
    },
    {
        q: "O que caracteriza o algoritmo de criptografia assimétrica RSA e sua base matemática?",
        d: "Difícil",
        c: "Algoritmo RSA",
        o: [
            "A) Baseia-se na dificuldade computacional da fatoração de números inteiros grandes que são o produto de dois números primos grandes.",
            "B) Utiliza operações aritméticas simples de substituição de letras.",
            "C) É um algoritmo estritamente simétrico de chave única.",
            "D) Funciona apenas em redes locais sem fio."
        ],
        a: "B",
        e: "Na verdade, a opção correta é a fatoração de grandes números primos. Quanto maior o tamanho da chave (ex: 2048 ou 4096 bits), mais seguro contra ataques.",
        t: "Base de grande parte da segurança da internet atual."
    },
    {
        q: "O que são Criptossistemas Pós-Quânticos e por que são necessários?",
        d: "Difícil",
        c: "Criptografia Pós-Quântica",
        o: [
            "A) Sistemas para criptografar computadores quânticos.",
            "B) Algoritmos criptográficos projetados para serem seguros contra ataques realizados por computadores quânticos futuros (que conseguirão quebrar algoritmos tradicionais como RSA e ECC via Algoritmo de Shor).",
            "C) Criptografia obsoleta usada nos anos 90.",
            "D) Protocolos de backup em nuvem."
        ],
        a: "B",
        e: "Com o avanço da computação quântica, chaves RSA e ECC atuais correrão risco iminente de quebra em tempo hábil.",
        t: "Padronização em andamento por órgãos como o NIST."
    },
    {
        q: "Como funcionam as Provas de Conhecimento Zero (Zero-Knowledge Proofs - ZKP)?",
        d: "Difícil",
        c: "Zero-Knowledge Proofs",
        o: [
            "A) Provar que você não possui nenhum conhecimento sobre programação.",
            "B) Um protocolo criptográfico onde uma parte (o provador) pode provar à outra parte (o verificador) que uma declaração é verdadeira, sem revelar nenhuma informação além da própria veracidade da declaração.",
            "C) Um método para apagar dados de discos rígidos sem deixar vestígios.",
            "D) Criptografia simétrica sem uso de chaves."
        ],
        a: "B",
        e: "Permite autenticar identidades ou transações (como em criptomoedas focadas em privacidade) sem expor senhas ou dados sensíveis.",
        t: "Conceito revolucionário na criptografia moderna."
    }
];

criptografiaQuest.forEach(x => {
    addQuestion("Criptografia e Certificação Digital", x.d, x.q, x.c, x.o, x.a, x.e, x.t);
});

console.log("Total de questões:",questions.length);
