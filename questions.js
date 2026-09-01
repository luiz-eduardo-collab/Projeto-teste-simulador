
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
   BLOCO 1: LÓGICA DE PROGRAMAÇÃO
===================================================== */

// Questões automáticas convertidas para chamadas individuais
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

// Questões novas manuais
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
    "Em lógica booleana, qual é o resultado da expressão: `(true AND false) OR (true AND true)`?",
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
    "Troca adjacentes fora de ordem repetidamente",
    ["A) Divide o vetor recursivamente ao meio", "B) Compara elementos adjacentes e os troca de posição se estiverem na ordem errada", "C) Cria uma tabela hash temporária", "D) Seleciona sempre o menor elemento restante"],
    "B",
    "O Bubble Sort flutua os maiores elementos para o final do vetor através de sucessivas trocas de elementos vizinhos.",
    "Eficiência O(n²) no pior caso."
);

addQuestion(
    "Lógica de Programação", "Fácil",
    "Qual estrutura de controle condicional é mais recomendada para tratar múltiplas ramificações discretas de uma mesma variável inteira ou caractere?",
    "Estruturas condicionais de seleção",
    ["A) if-else encadeado profundo", "B) switch-case", "C) do-while", "D) recursão terminal"],
    "B",
    "O comando switch-case melhora a legibilidade e a performance em testes de igualdade múltiplos para uma única variável.",
    "Evita a poluição visual de muitos ifs aninhados."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o valor de x ao final da execução?",
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
    "Qual operador lógico representa a negação (inclusão de inverso lógico) na maioria das linguagens de programação?",
    "Expressão booleana com inversão",
    ["A) &&", "B) ||", "C) !", "D) =="],
    "C",
    "O ponto de exclamação (!) inverte o valor booleano (true vira false, e vice-versa).",
    "Operador unário de negação lógica."
);

addQuestion(
    "Lógica de Programação", "Difícil",
    "Qual será o resultado da operação de módulo (resto da divisão) para: `-7 % 3` na grande maioria das linguagens baseadas em C/Java?",
    "int r = -7 % 3;",
    ["A) -1", "B) 1", "C) -2", "D) 2"],
    "A",
    "Em Java e C, o operador de módulo preserva o sinal do dividendo (o primeiro operando). Portanto, -7 % 3 resulta em -1.",
    "Fique atento às especificidades matemáticas versus a implementação de linguagens de programação."
);

console.log("Total de questões cadastradas:", questions.length);

/* =====================================================
   QUESTÕES DE LÓGICA DE PROGRAMAÇÃO
===================================================== */

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
    "Em lógica booleana, qual é o resultado da expressão: `(true AND false) OR (true AND true)`?",
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
    "Em lógica booleana, qual é o resultado da expressão: `(true AND false) OR (true AND true)`?",
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

// Adicione mais questões abaixo usando o mesmo formato...

console.log("Total de questões cadastradas:", questions.length);


/* =====================================================
   PROGRAMAÇÃO ORIENTADA A OBJETOS (POO)
===================================================== */

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

/* =====================================================
JAVA
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
"String s1 = Java;\nString s2 = new String(Java);\nSystem.out.println(s1 == s2);",
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
"/* Comentário /",
["A) ", "B) / Comentário */", "C)  Comentário ", "D) # Comentário"],
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

/* =====================================================
   ESTRUTURAS DE DADOS
===================================================== */

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
    "        Diretor\n        /       \\\n   Gerente A   Gerente B",
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
/* =====================================================
   BANCO DE DADOS
===================================================== */

addQuestion(
    "Banco de Dados", "Fácil",
    "Qual campo é a melhor chave primária?",
    "CLIENTE\n\nid_cliente\nnome\ncpf\ncidade",
    ["A) nome", "B) cidade", "C) id_cliente", "D) cpf e cidade"],
    "C",
    "O identificador único normalmente é utilizado como chave primária.",
    "Chave primária identifica unicamente um registro."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "Qual atributo representa uma chave estrangeira?",
    "CLIENTE\nid_cliente\n\nPEDIDO\nid_pedido\nid_cliente",
    ["A) CLIENTE.id_cliente", "B) PEDIDO.id_pedido", "C) PEDIDO.id_cliente", "D) Nenhum"],
    "C",
    "PEDIDO.id_cliente referencia CLIENTE.id_cliente.",
    "Chave estrangeira cria relacionamento entre tabelas."
);

addQuestion(
    "Banco de Dados", "Média",
    "Qual é o objetivo principal da normalização?",
    "Tabela\n\nServidor\nid\nnome\ntelefone1\ntelefone2\ntelefone3",
    ["A) Aumentar redundância", "B) Reduzir redundância", "C) Eliminar chaves", "D) Criar índices"],
    "B",
    "A normalização busca reduzir redundâncias e anomalias.",
    "Questão clássica de modelagem."
);

addQuestion(
    "Banco de Dados", "Difícil",
    "Em modelagem de dados, o que caracteriza a Terceira Forma Normal (3FN)?",
    "Eliminação de dependências transitivas",
    ["A) A tabela não deve conter grupos de repetição", "B) Todos os atributos não-chave devem depender inteiramente da chave primária inteira", "C) A tabela deve estar na 2FN e não possuir dependências transitivas entre atributos não-chave", "D) Todos os dados devem estar desnormalizados para otimizar leitura"],
    "C",
    "Na 3FN, nenhuma coluna não-chave pode depender de outra coluna não-chave (dependência transitiva).",
    "Reduz drasticamente redundâncias e anomalias de atualização."
);

addQuestion(
    "Banco de Dados", "Fácil",
    "O que define a Primeira Forma Normal (1FN)?",
    "Atributos atômicos e sem grupos de repetição",
    ["A) Ausência total de chaves estrangeiras", "B) Que os domínios dos atributos sejam atômicos (valores indivisíveis) e não haja grupos repetitivos", "C) A eliminação de dependências parciais", "D) A criação obrigatória de visões (views)"],
    "B",
    "A 1FN exige que cada célula da tabela contenha apenas um único valor e que não existam arrays ou colunas repetidas.",
    "Base fundamental para tabelas relacionais."
);

addQuestion(
    "Banco de Dados", "Média",
    "O que caracteriza a Segunda Forma Normal (2FN)?",
    "Estar na 1FN e eliminar dependência parcial",
    ["A) Dependência total da chave primária composta", "B) Eliminação de qualquer chave candidata", "C) Uso exclusivo de bancos NoSQL", "D) Ocultação de dados sensíveis"],
    "A",
    "A 2FN exige que a tabela esteja na 1FN e que todos os atributos não-chave sejam totalmente dependentes de toda a chave primária.",
    "Importante principalmente em chaves primárias compostas."
);


/* =====================================================
   SQL
===================================================== */

addQuestion(
    "SQL", "Fácil",
    "O que essa consulta retorna?",
    "SELECT nome\nFROM servidor\nWHERE salario > 5000",
    ["A) Todos servidores", "B) Salários menores", "C) Servidores com salário acima de 5000", "D) Apenas um servidor"],
    "C",
    "WHERE filtra registros conforme a condição.",
    "Leia cuidadosamente a cláusula WHERE."
);

addQuestion(
    "SQL", "Fácil",
    "Qual comando modifica registros existentes?",
    "UPDATE servidor\nSET salario=6000\nWHERE id=10;",
    ["A) INSERT", "B) UPDATE", "C) DELETE", "D) DROP"],
    "B",
    "UPDATE altera dados já existentes.",
    "DELETE remove registros; DROP remove estrutura."
);

addQuestion(
    "SQL", "Média",
    "Qual cláusula filtra grupos?",
    "SELECT setor,COUNT(*)\nFROM servidor\nGROUP BY setor\nHAVING COUNT(*)>10;",
    ["A) WHERE", "B) ORDER BY", "C) HAVING", "D) DISTINCT"],
    "C",
    "HAVING atua após o agrupamento.",
    "WHERE filtra linhas; HAVING filtra grupos."
);

addQuestion(
    "SQL", "Fácil",
    "Qual comando SQL é utilizado para recuperar dados de uma tabela?",
    "SELECT * FROM clientes;",
    ["A) GET", "B) SELECT", "C) EXTRACT", "D) FETCH"],
    "B",
    "O comando SELECT é a instrução padrão da linguagem SQL para realizar consultas em uma ou mais tabelas.",
    "Fundamental para qualquer operação de leitura no banco de dados relacional."
);

addQuestion(
    "SQL", "Média",
    "O que define uma Chave Primária (Primary Key) em uma tabela relacional?",
    "CONSTRAINT pk_cliente PRIMARY KEY (id)",
    ["A) Um campo que aceita valores duplicados e nulos", "B) Um identificador único para cada registro da tabela, sem permitir nulos", "C) Um ponteiro físico para o disco rígido", "D) Uma senha de acesso criptografada para o DBA"],
    "B",
    "A chave primária garante a integridade da entidade, assegurando que cada linha seja unicamente identificável.",
    "Nenhum campo de uma chave primária pode ser NULL."
);

addQuestion(
    "SQL", "Difícil",
    "Qual tipo de JOIN retorna todos os registros da tabela da esquerda e os registros correspondentes da tabela da direita (ou NULL se não houver correspondência)?",
    "SELECT * FROM A LEFT JOIN B ON A.id = B.id;",
    ["A) INNER JOIN", "B) FULL OUTER JOIN", "C) LEFT JOIN (ou LEFT OUTER JOIN)", "D) CROSS JOIN"],
    "C",
    "O LEFT JOIN preserva toda a tabela esquerda, preenchendo com nulos as colunas da direita quando a condição de junção falha.",
    "Muito usado para listar entidades mesmo que elas não possuam relacionamentos dependentes."
);

addQuestion(
    "SQL", "Fácil",
    "Qual comando SQL é utilizado para apagar uma tabela inteira do banco de dados (inclusive sua estrutura)?",
    "DROP TABLE funcionarios;",
    ["A) DELETE TABLE", "B) TRUNCATE TABLE", "C) DROP TABLE", "D) CLEAR TABLE"],
    "C",
    "O comando DROP remove a tabela do banco de dados por completo. Já o DELETE remove linhas, mantendo a estrutura.",
    "Operação irreversível na maioria dos SGBDs sem backup."
);

addQuestion(
    "SQL", "Difícil",
    "Qual é a principal utilidade do comando GROUP BY em SQL?",
    "SELECT cargo, AVG(salario) FROM funcionarios GROUP BY cargo;",
    ["A) Ordenar alfabeticamente o resultado final", "B) Agrupar linhas que possuem valores idênticos em colunas especificadas para aplicar funções de agregação", "C) Criar uma nova tabela física no banco", "D) Unir dados de tabelas distintas sem usar chaves"],
    "B",
    "O GROUP BY organiza os dados em conjuntos para que funções como COUNT, SUM, AVG ou MAX operem por grupo.",
    "Sempre usado em conjunto com funções agregadas."
);

addQuestion(
    "SQL", "Média",
    "Qual cláusula é utilizada para ordenar o resultado de uma consulta SQL em ordem decrescente?",
    "SELECT * FROM produtos ORDER BY preco DESC;",
    ["A) ASC", "B) SORT", "C) DESC", "D) REVERSE"],
    "C",
    "A palavra-chave DESC indica ordenação descendente (do maior para o menor). ASC é o padrão (crescente).",
    "Aplicada no final da instrução SELECT."
);
/* =====================================================
DESENVOLVIMENTO WEB (HTML, CSS E JAVASCRIPT)
===================================================== */

addQuestion(
    'Desenvolvimento Web', 'Fácil',
    'Qual tag HTML é utilizada para criar um hiperlink para outra página ou site?',
    '<a href="https://www.exemplo.com">Link</a>',
    ['A)', 'B)', 'C)', 'D)'],
    'B',
    'A tag <a> (anchor) combinada com o atributo href define hiperlinks na web.',
    'A tag é usada para carregar folhas de estilo no HTML.'
);

addQuestion(
    "Desenvolvimento Web",
    "Fácil",
    "Qual tag HTML é utilizada para criar um hiperlink para outra página ou site?",
    "<a href=\"https://www.exemplo.com\">Link</a>",
    ["A)", "B)", "C)", "D)"],
    "B",
    "A tag <a> (anchor) combinada com o atributo href define hiperlinks na web.",
    "A tag é usada para carregar folhas de estilo no HTML."
);

addQuestion(
    "Desenvolvimento Web",
    "Fácil",
    "Qual propriedade CSS é utilizada para alterar a cor de fundo de um elemento?",
    "background-color: #ffffff;",
    ["A) color", "B) background-color", "C) fill-color", "D) bg-style"],
    "B",
    "A propriedade background-color define a cor de fundo, enquanto color altera a cor do texto.",
    "Essencial para estilização visual básica."
);

addQuestion(
    "Desenvolvimento Web",
    "Média",
    "O que significa a sigla DOM no contexto de desenvolvimento web com JavaScript?",
    "Document Object Model",
    ["A) Data Object Management", "B) Document Object Model", "C) Digital Oriented Markup", "D) Dynamic Opacity Module"],
    "B",
    "O DOM é a representação em árvore estruturada do documento HTML que permite ao JavaScript interagir e modificar elementos da página.",
    "Permite manipulação dinâmica de conteúdo, classes e estilos."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"Qual é a diferença principal entre position: absolute e position: fixed em CSS?",
"Contexto de referência e rolagem da página",
["A) Absolute posiciona em relação à tela, enquanto fixed posiciona em relação ao corpo", "B) Absolute posiciona em relação ao ancestral posicionado mais próximo, enquanto fixed posiciona em relação à janela de visualização (viewport) e não se move com o scroll", "C) Fixed funciona apenas em dispositivos móveis", "D) Não há diferença prática de comportamento"],
"B",
"Elementos com position: fixed ficam fixos na tela mesmo quando o usuário rola a página (scroll), ao contrário de absolute.",
"Fundamentais para criar menus fixos e layouts complexos."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual método JavaScript é utilizado para selecionar um único elemento do DOM utilizando um seletor CSS (como uma classe ou ID)?",
"document.querySelector('#meuId');",
["A) document.getElementById() apenas", "B) document.querySelector()", "C) document.selectElement()", "D) document.findElement()"],
"B",
"O querySelector retorna o primeiro elemento que corresponde ao seletor CSS especificado.",
"Para retornar todos os elementos correspondentes, usa-se querySelectorAll()."
);

addQuestion(
"Desenvolvimento Web", "Média",
"O que caracteriza o modelo de layout CSS Flexbox?",
"Alinhamento unidimensional de itens",
["A) Um sistema de grade bidimensional focado em colunas e linhas complexas", "B) Um modelo unidimensional projetado para distribuir espaço e alinhar itens em linha ou coluna", "C) Um método obsoleto substituído por tabelas HTML", "D) Uma ferramenta exclusiva para animações 3D"],
"B",
"O Flexbox é ideal para layouts onde os itens precisam se ajustar dinamicamente em uma única direção (linha ou coluna).",
"Para layouts complexos em grade de duas dimensões, usa-se CSS Grid."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"O que é o mecanismo de Event Bubbling (Borbulhamento de Eventos) em JavaScript?",
"Propagação de eventos do elemento mais interno para os mais externos",
["A) A criação de eventos duplicados por falha de sintaxe", "B) O fluxo onde um evento disparado em um elemento filho é propagado para cima através de seus ancestrais na árvore DOM", "C) O cancelamento automático de requisições AJAX simultâneas", "D) A execução assíncrona de funções em background"],
"B",
"Quando um evento ocorre em um elemento, ele primeiro roda os ouvintes do próprio elemento e depois sobe propagando-se para os elementos pai.",
"Pode ser interrompido usando o método event.stopPropagation()."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual tag HTML é semanticamente a mais adequada para representar o cabeçalho principal de uma página ou seção?",
"",
["A) ", "B) ", "C) ", "D) "],
"C",
"A tag  representa conteúdo introdutório ou um grupo de links de navegação.",
"A tag  fica oculta e guarda metadados da página."
);

addQuestion(
"Desenvolvimento Web", "Média",
"O que são Promises em JavaScript?",
"Objetos que representam a conclusão ou falha de uma operação assíncrona",
["A) Variáveis constantes que nunca mudam de valor", "B) Objetos que representam o resultado eventual (sucesso ou erro) de uma operação assíncrona", "C) Funções matemáticas de alta precisão", "D) Atalhos para criar loops for otimizados"],
"B",
"Promises possuem estados: pending (pendente), fulfilled (realizada) e rejected (rejeitada).",
"Facilitam o tratamento de código assíncrono em comparação a callbacks aninhados."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"Qual é a finalidade do atributo async ou defer em tags  no HTML?",
"Controlar o carregamento e execução assíncrona de scripts externos",
["A) Comprimir o tamanho do arquivo JavaScript para baixar mais rápido", "B) Permitir o carregamento não bloqueante do script em paralelo com a análise do HTML", "C) Criptografar o código JavaScript contra inspeção", "D) Forçar a execução imediata travando a renderização"],
"B",
"Scripts sem async/defer pausam o parsing do HTML até que o script seja baixado e executado. Com defer, o script executa após o documento estar pronto.",
"Melhora consideravelmente a performance de carregamento da página."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual propriedade CSS define a opacidade (transparência) de um elemento?",
"opacity: 0.5;",
["A) transparency", "B) opacity", "C) alpha", "D) visibility"],
"B",
"A propriedade opacity aceita valores de 0 (totalmente transparente) a 1 (totalmente opaco).",
"Diferente de visibility: hidden, a opacidade ainda mantém a interatividade do elemento se não for ajustada."
);

addQuestion(
"Desenvolvimento Web", "Média",
"O que o operador await faz dentro de uma função assíncrona (async function) em JavaScript?",
"Pausa a execução da função até que a Promise seja resolvida",
["A) Interrompe a execução de todo o navegador", "B) Faz a função aguardar de forma assíncrona a resolução de uma Promise antes de prosseguir com a próxima linha", "C) Converte tipos primitivos em objetos", "D) Dispara um erro síncrono proposital"],
"B",
"O await torna o código assíncrono muito mais legível, parecendo um código síncrono linear.",
"Só pode ser utilizado dentro de funções declaradas com a palavra-chave async."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"No contexto de CSS Grid, o que significa a unidade fracionária fr?",
"Fração do espaço disponível no container da grade",
["A) Uma unidade fixa baseada em fontes tipográficas", "B) Uma fração do espaço livre disponível dentro do container grid", "C) pixels flutuantes responsivos", "D) Porcentagem baseada na altura da tela"],
"B",
"A unidade fr facilita criar layouts flexíveis onde o espaço é distribuído proporcionalmente (ex: 1fr 2fr).",
"Elimina o cálculo manual complexo de porcentagens com margens."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual comando JavaScript converte um objeto ou array JavaScript em uma string JSON?",
"JSON.stringify(objeto);",
["A) JSON.parse()", "B) JSON.stringify()", "C) JSON.toText()", "D) JSON.convert()"],
"B",
"JSON.stringify serializa dados para o formato de texto JSON, enquanto JSON.parse faz o inverso (texto para objeto).",
"Fundamental para enviar dados via fetch para APIs."
);

addQuestion(
"Desenvolvimento Web", "Média",
"O que é o conceito de CSS Specificity (Especificidade)?",
"Regra de peso que define qual estilo CSS será aplicado quando há conflitos",
["A) A velocidade com que o navegador interpreta o arquivo de estilos", "B) O peso calculado de seletores CSS para determinar qual regra prevalece em caso de conflito de regras sobre o mesmo elemento", "C) A quantidade de linhas de código em um arquivo CSS", "D) O suporte a navegadores antigos"],
"B",
"IDs têm mais peso que classes, que por sua vez têm mais peso que seletores de tag.",
"O uso excessivo de !important sobrescreve a especificidade normal."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"O que é o CORS (Cross-Origin Resource Sharing) em aplicações web?",
"Mecanismo de segurança baseado em cabeçalhos HTTP",
["A) Um protocolo de criptografia de ponta a ponta para senhas", "B) Um mecanismo de segurança implementado por navegadores que restringe requisições HTTP feitas a partir de um domínio diferente daquele que serviu o recurso original", "C) Uma biblioteca JavaScript para requisições assíncronas", "D) Um padrão de rotas para Single Page Applications"],
"B",
"O CORS protege contra requisições maliciosas entre origens distintas, exigindo cabeçalhos específicos no servidor para liberar o acesso.",
"Erros de CORS ocorrem frequentemente ao testar APIs locais sem configuração de permissão."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual tag HTML é utilizada para inserir um arquivo JavaScript externo em um documento?",
"<script src=script.js>",
["A) <javascript src=script.js>", "B) <script href=script.js>", "C) <script src=script.js>", "D) <js file=script.js>"],
"C",
"A tag  com o atributo src vincula scripts externos à página.",
"Geralmente colocada no final do corpo (body) ou no head com defer."
);

addQuestion(
"Desenvolvimento Web", "Média",
"Qual é a principal utilidade do localStorage em navegadores web?",
"Armazenamento persistente de dados chave-valor no navegador",
["A) Enviar dados criptografados diretamente para um banco de dados em nuvem", "B) Armazenar dados no navegador do usuário de forma persistente, mesmo após fechar a aba ou o navegador", "C) Guardar arquivos temporários que expiram ao fechar a sessão", "D) Gerenciar o histórico de navegação avançado"],
"B",
"Diferente do sessionStorage (que apaga ao fechar a aba), o localStorage armazena dados sem data deexpiração explícita.",
"Armazena apenas strings. Objetos precisam ser convertidos com JSON.stringify."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"O que é o Virtual DOM utilizado em bibliotecas como o React?",
"Cópia leve do DOM real mantida na memória",
["A) Um navegador web rodando em servidores na nuvem", "B) Uma representação leve em memória do DOM real, permitindo calcular o diff e atualizar apenas os nós alterados de forma otimizada", "C) Um emulador de dispositivos móveis para testes", "D) Uma extensão de segurança para JavaScript"],
"B",
"O Virtual DOM minimiza manipulações diretas e lentas do DOM real, melhorando drasticamente a performance de renderização.",
"O algoritmo de reconciliação compara o estado anterior com o atual."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual propriedade CSS define o espaçamento interno entre o conteúdo de um elemento e suas bordas?",
"padding: 15px;",
["A) margin", "B) spacing", "C) padding", "D) border-gap"],
"C",
"O padding define o espaço interno. O margin define o espaço externo ao redor da borda.",
"Componentes fundamentais do CSS Box Model."
);

addQuestion(
"Desenvolvimento Web", "Média",
"O que significa dizer que o JavaScript é uma linguagem de programação single-threaded?",
"Executa apenas uma instrução por vez na thread principal",
["A) Não suporta nenhum tipo de operação assíncrona", "B) Possui apenas uma linha de execução principal na thread, processando tarefas sequencialmente", "C) Roda estritamente em processadores de um único núcleo", "D) É uma linguagem exclusiva para servidores monousuário"],
"B",
"Embora seja single-threaded, o JavaScript gerencia operações assíncronas eficientemente através do Event Loop e callbacks.",
"Evita problemas complexos de concorrência comum em multithreading tradicional."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"O que são Web Workers em JavaScript?",
"Scripts executados em background em threads separadas",
["A) Robôs de indexação de motores de busca", "B) Um mecanismo que permite executar scripts JavaScript em threads de segundo plano separadas da thread principal da interface", "C) Ferramentas de automação de testes end-to-end", "D) Servidores web embutidos no navegador"],
"B",
"Web Workers evitam que tarefas pesadas de processamento travem a interface gráfica do usuário na thread principal.",
"Eles não têm acesso direto ao DOM da página."
);

addQuestion(
"Desenvolvimento Web", "Fácil",
"Qual tag HTML é utilizada para criar uma lista não ordenada (com marcadores em bolinhas)?",
"",
["A) ", "B) ", "C) ", "D) "],
"C",
"A tag  (unordered list) agrupa itens de lista que utilizam a tag .",
"A tag  cria listas ordenadas (numeradas)."
);

addQuestion(
"Desenvolvimento Web", "Média",
"Qual é a utilidade do método fetch() em JavaScript moderno?",
"Realizar requisições HTTP assíncronas para servidores (APIs)",
["A) Buscar elementos no DOM usando tags HTML", "B) Realizar requisições de rede assíncronas (como GET e POST) para buscar recursos ou APIs", "C) Baixar arquivos compactados em formato ZIP localmente", "D) Recarregar a página web automaticamente"],
"B",
"O fetch() substituiu o antigo XMLHttpRequest, retornando Promises de forma nativa.",
"Facilita a comunicação com serviços web e APIs RESTful."
);

addQuestion(
"Desenvolvimento Web", "Difícil",
"O que define o comportamento de seletores CSS combinadores, como o seletor de irmão adjacente (+)?",
"Seleciona o elemento imediatamente após o especificado",
["A) Seleciona todos os descendentes diretos ou indiretos", "B) Seleciona o elemento que vem imediatamente após o primeiro elemento especificado, desde que compartilhem o mesmo pai", "C) Selecionado apenas elementos que possuem classes idênticas", "D) Seleciona elementos pais recursivamente"],
"B",
"O combinador + atinge o próximo irmão imediato. O combinador ~ atinge todos os irmãos seguintes.",
"Útil para estilizações condicionais baseadas na ordem estrutural do HTML."
);

/* =====================================================
   SPRING
===================================================== */

const spring = [
    {
        q: "Qual anotação do Spring Boot é utilizada na classe principal para habilitar a configuração automática, o escaneamento de componentes e a configuração de beans?",
        c: "@SpringBootApplication",
        o: [
            "A) @SpringAppConfig",
            "B) @EnableAutoConfiguration",
            "C) @SpringBootApplication",
            "D) @ConfigurationRoot"
        ],
        a: "C",
        e: "A anotação @SpringBootApplication é um atalho que combina @Configuration, @EnableAutoConfiguration e @ComponentScan.",
        t: "Não confunda com anotações isoladas como @EnableAutoConfiguration, que não realiza o escaneamento de pacotes por si só."
    },
    {
        q: "Em aplicações Spring Data JPA, qual anotação é utilizada para indicar que uma classe Java representa uma entidade mapeada para uma tabela de banco de dados?",
        c: "@Entity",
        o: [
            "A) @TableMapping",
            "B) @Entity",
            "C) @DatabaseModel",
            "D) @Persistable"
        ],
        a: "B",
        e: "A anotação @Entity especifica que a classe é uma entidade JPA e deve ser mapeada para uma tabela no banco de dados relacional.",
        t: "Geralmente vem acompanhada de @Id para definir a chave primária e @Table para customizar o nome da tabela."
    },
    {
        q: "Qual conceito está presente no construtor abaixo?",
        c: `@Service
class ServidorService{
    private final Repository repo;
    ServidorService(Repository repo){
        this.repo = repo;
    }
}`,
        o: [
            "A) Recursividade",
            "B) Injeção de dependência",
            "C) Herança",
            "D) Hash"
        ],
        a: "B",
        e: "O Repository é fornecido ao Service pelo construtor.",
        t: "IoC e DI são fundamentos do Spring."
    },
    {
        q: "Qual módulo facilita persistência?",
        c: `interface ServidorRepository
extends JpaRepository<Servidor, Long>{}`,
        o: [
            "A) Spring Security",
            "B) Spring Data",
            "C) Spring Boot apenas",
            "D) Spring MVC"
        ],
        a: "B",
        e: "Spring Data fornece abstrações para acesso aos dados.",
        t: "JpaRepository é pista importante."
    },
    {
        q: "Qual módulo trata autenticação?",
        c: `http
.authorizeHttpRequests(...)
.formLogin(...);`,
        o: [
            "A) Spring Data",
            "B) Spring Security",
            "C) JDBC",
            "D) Maven"
        ],
        a: "B",
        e: "Spring Security trata autenticação e autorização.",
        t: "Autenticação e autorização são conceitos diferentes."
    }
];

// Carrega as questões do array para o sistema principal
spring.forEach(x => {
    addQuestion("Spring", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});


/* =====================================================
   ARQUITETURA DE SOFTWARE
===================================================== */

const arquitetura = [
    {
        q: "Qual padrão arquitetural separa a representação da informação da interação do usuário com ela, dividindo a aplicação em três componentes principais?",
        c: "",
        o: [
            "A) MVC (Model-View-Controller)",
            "B) Singleton",
            "C) Factory Method",
            "D) Peer-to-Peer"
        ],
        a: "A",
        e: "O padrão MVC divide a aplicação em Model (dados/regras), View (interface) e Controller (fluxo/comunicação).",
        t: "Muito comum em aplicações web tradicionais e frameworks modernos."
    },
    {
        q: "No contexto de Arquitetura Limpa (Clean Architecture), qual camada fica mais ao centro e contém as regras de negócio corporativas da aplicação?",
        c: "",
        o: [
            "A) Frameworks e Drivers",
            "B) Interface Adapters",
            "C) Use Cases (Casos de Uso)",
            "D) Entities (Entidades)"
        ],
        a: "D",
        e: "As Entidades (Entities) encapsulam as regras de negócio de alto nível e independentes da aplicação, ficando no núcleo da arquitetura.",
        t: "A regra de dependência aponta sempre para dentro, do detalhe para o núcleo."
    },
    {
        q: "Qual é a principal característica da Arquitetura Orientada a Microsserviços em comparação com a Arquitetura Monolítica?",
        c: "",
        o: [
            "A) Todos os módulos compartilham obrigatoriamente a mesma base de dados.",
            "B) A aplicação é dividida em pequenos serviços independentes que se comunicam por rede.",
            "C) O deploy de qualquer alteração exige a recompilação e republicação de todo o sistema.",
            "D) Elimina completamente a necessidade de gerenciamento de rede e balanceadores de carga."
        ],
        a: "B",
        e: "Microsserviços descentralizam o desenvolvimento, deploy e escalabilidade, isolando domínios de negócio.",
        t: "Apesar de escaláveis, trazem complexidade distribuída (consistência eventual, latência)."
    }
];

arquitetura.forEach(x => {
    addQuestion("Arquitetura de Software", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   REST E SOAP
===================================================== */

const restSoap = [
    {
        q: "Qual protocolo de comunicação para serviços Web é baseado estritamente em XML, possui especificações rígidas de segurança e confiabilidade (WS-Security, WS-ReliableMessaging) e opera tipicamente sobre os protocolos HTTP, SMTP ou TCP?",
        c: "",
        o: [
            "A) REST",
            "B) SOAP",
            "C) GraphQL",
            "D) gRPC"
        ],
        a: "B",
        e: "O SOAP (Simple Object Access Protocol) é um protocolo altamente padronizado e baseado em XML, ideal para ambientes corporativos que exigem contratos formais via WSDL.",
        t: "Lembre-se: SOAP é um protocolo pesado e estrito, enquanto REST é um estilo arquitetural."
    },
    {
        q: "No design de APIs RESTful, qual método HTTP é semanticamente o mais adequado para realizar a atualização completa ou parcial de um recurso existente?",
        c: "",
        o: [
            "A) GET",
            "B) POST",
            "C) PUT (ou PATCH)",
            "D) DELETE"
        ],
        a: "C",
        e: "O método PUT é utilizado para substituir ou atualizar um recurso, enquanto o PATCH é focado em atualizações parciais. O POST cria novos recursos e o GET apenas recupera.",
        t: "Atente-se à idempotência dos métodos: PUT e GET são idempotentes, POST geralmente não é."
    },
    {
        q: "Qual formato de dados é o mais amplamente utilizado em requisições e respostas de APIs REST modernas devido à sua leveza e facilidade de manipulação em linguagens como JavaScript?",
        c: "",
        o: [
            "A) XML",
            "B) JSON",
            "C) YAML",
            "D) CSV"
        ],
        a: "B",
        e: "O JSON (JavaScript Object Notation) tornou-se o padrão da indústria para REST por consumir menos banda e ser facilmente convertido em objetos nativos.",
        t: "Embora REST suporte XML, JSON é quase universal no ecossistema atual."
    }
];

restSoap.forEach(x => {
    addQuestion("REST e SOAP", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   UML (Unified Modeling Language)
===================================================== */

const uml = [
    {
        q: "Qual diagrama UML é utilizado para representar a visão estática do sistema, mostrando as classes, seus atributos, operações e os relacionamentos entre elas?",
        c: "",
        o: [
            "A) Diagrama de Casos de Uso",
            "B) Diagrama de Classes",
            "C) Diagrama de Atividades",
            "D) Diagrama de Sequência"
        ],
        a: "B",
        e: "O Diagrama de Classes é o principal bloco de construção da modelagem orientada a objetos na UML, detalhando a estrutura estática do sistema.",
        t: "Foque na diferença entre visões estáticas (Classes, Objetos, Componentes) e dinâmicas (Sequência, Atividades, Estados)."
    },
    {
        q: "No contexto de relacionamentos em Diagramas de Classes UML, qual tipo de associação representa uma relação de 'todo-parte' onde a parte pode existir de forma independente do todo (agregação fraca)?",
        c: "",
        o: [
            "A) Composição",
            "B) Agregação",
            "C) Generalização",
            "D) Realização"
        ],
        a: "B",
        e: "A agregação indica que um objeto contém outros, mas as partes sobrevivem se o todo for destruído. A composição representa uma relação de propriedade exclusiva (ciclo de vida dependente).",
        t: "Lembre-se da representação gráfica: losango branco para Agregação e losango preto preenchido para Composição."
    },
    {
        q: "Qual diagrama UML comportamental foca na ordenação temporal das mensagens trocadas entre objetos ao longo do tempo?",
        c: "",
        o: [
            "A) Diagrama de Sequência",
            "B) Diagrama de Implantação",
            "C) Diagrama de Pacotes",
            "D) Diagrama de Perfis"
        ],
        a: "A",
        e: "O Diagrama de Sequência detalha como os objetos interagem em um cenário específico, destacando a linha de vida temporal de cada participante.",
        t: "É um dos diagramas dinâmicos mais cobrados em concursos para detalhar fluxos de casos de uso."
    }
];

uml.forEach(x => {
    addQuestion("UML", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   DESIGN PATTERNS
===================================================== */

const designPatterns = [
    {
        q: "Qual padrão de projeto criacional garante que uma classe tenha apenas uma instância em toda a aplicação e fornece um ponto de acesso global para ela?",
        c: "",
        o: [
            "A) Factory Method",
            "B) Singleton",
            "C) Prototype",
            "D) Builder"
        ],
        a: "B",
        e: "O Singleton restringe a instanciação de uma classe a um único objeto, sendo útil para gerenciar recursos compartilhados como conexões de banco de dados ou configurações globais.",
        t: "Cuidado com o uso excessivo de Singletons, pois eles introduzem estado global e podem dificultar testes unitários."
    },
    {
        q: "Qual categoria de Design Patterns foca na forma como classes e objetos são compostos para formar estruturas maiores, garantindo flexibilidade e eficiência?",
        c: "",
        o: [
            "A) Criacionais",
            "B) Estruturais",
            "C) Comportamentais",
            "D) Concorrentes"
        ],
        a: "B",
        e: "Os padrões estruturais (como Adapter, Decorator e Facade) explicam como montar objetos e classes em estruturas maiores, mantendo essas estruturas flexíveis.",
        t: "Exemplos clássicos de estruturais: Adapter, Composite, Proxy."
    },
    {
        q: "Qual padrão comportamental permite que você defina uma família de algoritmos, coloque cada um deles em uma classe separada e faça com que seus objetos sejam intercambiáveis em tempo de execução?",
        c: "",
        o: [
            "A) Strategy",
            "B) Observer",
            "C) Command",
            "D) Template Method"
        ],
        a: "A",
        e: "O padrão Strategy permite alterar o comportamento de um objeto em tempo de execução encapsulando algoritmos intercambiáveis.",
        t: "Ideal para substituir grandes estruturas condicionais (if/else ou switch/case) baseadas no tipo de comportamento."
    }
];

designPatterns.forEach(x => {
    addQuestion("Design Patterns", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   DDD (Domain-Driven Design)
===================================================== */

const ddd = [
    {
        q: "Qual conceito fundamental do Domain-Driven Design (DDD) representa um objeto que não possui identidade conceitual própria e é definido inteiramente por seus atributos?",
        c: "",
        o: [
            "A) Entity (Entidade)",
            "B) Value Object (Objeto de Valor)",
            "C) Aggregate Root",
            "D) Repository"
        ],
        a: "B",
        e: "Os Value Objects são imutáveis e definidos pelos seus valores (como um endereço ou CPF). Se dois objetos têm os mesmos valores, eles são considerados iguais.",
        t: "Entidades possuem identidade única que persiste ao longo do tempo, independentemente de mudanças em seus atributos."
    },
    {
        q: "No contexto de DDD, o que define uma 'Aggregate' (Agregado) e sua 'Aggregate Root' (Raiz de Agregado)?",
        c: "",
        o: [
            "A) Um grupo de objetos associados tratados como uma unidade para mudanças de dados, onde apenas a raiz é acessível externamente.",
            "B) Uma tabela de banco de dados que centraliza todas as chaves estrangeiras de um microsserviço.",
            "C) Um serviço de infraestrutura responsável por mapear objetos para tabelas relacionais.",
            "D) Um padrão de arquitetura focado exclusivamente na performance de consultas SQL complexas."
        ],
        a: "A",
        e: "A Aggregate Root é a entidade principal do agregado que controla o acesso e garante a consistência das regras de negócio para todo o limite do agregado.",
        t: "Regra de ouro do DDD: objetos externos só podem referenciar a Aggregate Root."
    },
    {
        q: "Qual é o principal objetivo da Linguagem Ubíqua (Ubiquitous Language) no Domain-Driven Design?",
        c: "",
        o: [
            "A) Traduzir automaticamente o código fonte de Java para C# sem perda de desempenho.",
            "B) Estabelecer um vocabulário comum e rigoroso compartilhado entre desenvolvedores e especialistas do domínio.",
            "C) Documentar o sistema utilizando termos técnicos avançados de infraestrutura e redes.",
            "D) Criar diagramas UML estritos que substituem a necessidade de testes automatizados."
        ],
        a: "B",
        e: "A Linguagem Ubíqua deve ser usada em todos os lugares do projeto — nas conversas, na documentação e diretamente no código (classes, métodos e variáveis).",
        t: "Evita o desalinhamento entre o que o negócio precisa e o que o software implementa."
    }
];

ddd.forEach(x => {
    addQuestion("DDD", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   SCRUM E XP (Extreme Programming)
===================================================== */

const scrumXp = [
    {
        q: "Qual cerimônia do Scrum é destinada a inspecionar o incremento gerado no final do ciclo e adaptar o Product Backlog se necessário, contando com a participação do Product Owner, do Time e de stakeholders?",
        c: "",
        o: [
            "A) Sprint Planning",
            "B) Daily Scrum",
            "C) Sprint Review",
            "D) Sprint Retrospective"
        ],
        a: "C",
        e: "A Sprint Review foca no produto: o time apresenta o que foi feito e avalia o incremento com os stakeholders.",
        t: "Não confunda com a Sprint Retrospective, que é voltada para a inspeção do processo interno e das pessoas da equipe."
    },
    {
        q: "No contexto de Extreme Programming (XP), qual prática de engenharia consiste em dois programadores trabalharem juntos em uma mesma estação de trabalho, onde um escreve o código e o outro revisa simultaneamente?",
        c: "",
        o: [
            "A) Refatoração (Refactoring)",
            "B) Programação em Par (Pair Programming)",
            "C) Integração Contínua (Continuous Integration)",
            "D) Desenvolvimento Orientado a Testes (TDD)"
        ],
        a: "B",
        e: "O Pair Programming melhora a qualidade do código, facilita a troca de conhecimento e reduz erros em tempo real.",
        t: "Os papéis se alternam frequentemente entre quem digita (driver) e quem observa e pensa estrategicamente (navigator)."
    },
    {
        q: "Qual artefato do Scrum representa a lista ordenada de tudo o que é necessário no produto e serve como a única fonte de requisitos para as alterações a serem feitas?",
        c: "",
        o: [
            "A) Sprint Backlog",
            "B) Product Backlog",
            "C) Incremento",
            "D) Burndown Chart"
        ],
        a: "B",
        e: "O Product Backlog é gerenciado exclusivamente pelo Product Owner e evolui constantemente para refletir as necessidades do produto.",
        t: "O Sprint Backlog, por sua vez, é o subconjunto de itens selecionados para a sprint atual junto com o plano para entregá-los."
    }
];

scrumXp.forEach(x => {
    addQuestion("Scrum e XP", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   TESTES DE SOFTWARE
===================================================== */

const testes = [
    {
        q: "Qual nível de teste de software é responsável por verificar a integração entre diferentes módulos ou componentes do sistema para garantir que eles funcionem corretamente juntos?",
        c: "",
        o: [
            "A) Testes Unitários",
            "B) Testes de Integração",
            "C) Testes de Aceitação",
            "D) Testes de Regressão"
        ],
        a: "B",
        e: "Os testes de integração focam nas interfaces e nas interações entre componentes integrados, identificando falhas na comunicação entre módulos.",
        t: "A ordem clássica da pirâmide de testes vai de Unitários (base) até Aceitação/E2E (topo)."
    },
    {
        q: "No contexto de testes automatizados, o que preconiza a técnica de TDD (Test-Driven Development / Desenvolvimento Orientado por Testes)?",
        c: "",
        o: [
            "A) Escrever a documentação completa do sistema antes de iniciar qualquer linha de código.",
            "B) Escrever o código de produção primeiro e adicionar testes automatizados apenas após a entrega em produção.",
            "C) Escrever um teste automatizado que falha antes de escrever o código de produção necessário para fazê-lo passar.",
            "D) Delegar a criação de todos os testes unitários exclusivamente para a equipe de garantia de qualidade (QA)."
        ],
        a: "C",
        e: "O ciclo do TDD resume-se em: Red (escrever teste que falha), Green (escrever código para passar) e Refactor (melhorar o código sem alterar o comportamento).",
        t: "Garante alta testabilidade e design de código mais desacoplado."
    },
    {
        q: "Qual tipo de teste caixa-preta tem como objetivo verificar se o sistema atende aos requisitos de negócio e se está pronto para ser entregue ao usuário final?",
        c: "",
        o: [
            "A) Testes de Unidade",
            "B) Testes de Sistema",
            "C) Testes de Aceitação",
            "D) Testes de Estresse"
        ],
        a: "C",
        e: "Os testes de aceitação validam o software sob a perspectiva do usuário e das regras de negócio, muitas vezes utilizando critérios de aceite descritos em Histórias de Usuário.",
        t: "Podem envolver testes de aceitação do usuário (UAT) realizados pelos próprios stakeholders ou clientes."
    }
];

testes.forEach(x => {
    addQuestion("Testes de Software", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   GIT E VERSIONAMENTO
===================================================== */

const git = [
    {
        q: "Qual comando do Git é utilizado para salvar as alterações atuais do diretório de trabalho no repositório local, criando um novo commit com uma mensagem descritiva?",
        c: "git commit -m \"mensagem\"",
        o: [
            "A) git push",
            "B) git commit",
            "C) git add",
            "D) git save"
        ],
        a: "B",
        e: "O comando `git commit` grava o estado atual das alterações que estavam no estágio (`staging area`) no histórico do repositório local.",
        t: "Lembre-se que antes de commitar, os arquivos precisam ser adicionados ao staging area usando o `git add`."
    },
    {
        q: "Qual comando do Git permite alternar entre ramos (branches) existentes ou criar e mudar para um novo ramo simultaneamente?",
        c: "git checkout -b <nome-branch> (ou git switch -c)",
        o: [
            "A) git branch -d",
            "B) git checkout / git switch",
            "C) git merge",
            "D) git clone"
        ],
        a: "B",
        e: "Os comandos `git checkout` (ou o mais moderno `git switch`) são utilizados para navegar entre diferentes branches e gerenciar o contexto de trabalho.",
        t: "A bandeira `-b` cria a branch e já realiza a troca para ela em um único passo."
    },
    {
        q: "No fluxo de trabalho do Git, qual é a principal diferença entre os comandos `git merge` e `git rebase` ao juntar alterações de ramos diferentes?",
        c: "",
        o: [
            "A) O merge cria um commit de junção preservando o histórico exato das ramificações, enquanto o rebase reescreve o histórico aplicando os commits em cima da nova base.",
            "B) O merge apaga o ramo de origem após a junção, enquanto o rebase mantém ambos intactos.",
            "C) O rebase só pode ser executado localmente e nunca pode ser enviado para o repositório remoto sob nenhuma circunstância.",
            "D) Não há diferença prática; ambos geram exatamente a mesma árvore de commits e logs."
        ],
        a: "A",
        e: "O `merge` preserva a história tal como aconteceu (mesmo que crie um nó extra de merge), enquanto o `rebase` lineariza o histórico movendo os commits para a ponta da branch alvo.",
        t: "Cuidado ao usar `rebase` em branches públicas/compartilhadas, pois reescrever histórico público gera conflitos para os demais colaboradores."
    }
];

git.forEach(x => {
    addQuestion("Git", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});
/* =====================================================
   CRIPTOGRAFIA E SEGURANÇA
===================================================== */

const criptografia = [
    {
        q: "Qual tipo de criptografia utiliza uma única chave secreta tanto para cifrar (criptografar) quanto para decifrar (descriptografar) os dados?",
        c: "",
        o: [
            "A) Criptografia Assimétrica",
            "B) Criptografia Simétrica",
            "C) Assinatura Digital",
            "D) Função Hashing"
        ],
        a: "B",
        e: "A criptografia simétrica (como AES e DES) utiliza a mesma chave para as duas operações, sendo extremamente rápida e eficiente para grandes volumes de dados.",
        t: "O grande desafio da criptografia simétrica é a troca segura dessa chave entre remetente e destinatário."
    },
    {
        q: "No contexto de segurança da informação e criptografia assimétrica, como são utilizadas a chave pública e a chave privada de um par de chaves?",
        c: "",
        o: [
            "A) A chave pública é mantida em segredo absoluto pelo proprietário, enquanto a chave privada é distribuída publicamente para qualquer pessoa.",
            "B) O que é criptografado com a chave pública só pode ser decifrado com a chave privada correspondente, e vice-versa.",
            "C) Ambas as chaves devem ser idênticas para que o algoritmo de cifragem funcione corretamente.",
            "D) A chave pública serve apenas para gerar hashes e não possui relação matemática com a chave privada."
        ],
        a: "B",
        e: "Na criptografia assimétrica (como RSA), o par de chaves possui relação matemática complementar: dados cifrados com a chave pública só abrem com a privada, garantindo confidencialidade ou autenticidade (via assinatura digital).",
        t: "Lembre-se: chave pública é compartilhada com o mundo; chave privada é guardada a sete chaves."
    },
    {
        q: "Qual é a principal propriedade de uma função hash criptográfica (como SHA-256) que garante que é computacionalmente inviável encontrar duas entradas diferentes que gerem exatamente o mesmo valor de hash?",
        c: "",
        o: [
            "A) Reversibilidade",
            "B) Simetria de chaves",
            "C) Resistência a colisões",
            "D) Dobramento de bits"
        ],
        a: "C",
        e: "A resistência a colisões assegura que duas mensagens distintas não produzam a mesma saída (hash), o que é crítico para integridade de dados e assinaturas digitais.",
        t: "Funções hash são de mão única (unidirecionais), ou seja, é impossível 'desfazer' o hash para descobrir o texto original."
    }
];

criptografia.forEach(x => {
    addQuestion("Criptografia", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

/* =====================================================
   DART E FLUTTER
===================================================== */

const dartFlutter = [
    {
        q: "No ecossistema Dart e Flutter, qual é a principal diferença entre os tipos de widgets 'StatelessWidget' e 'StatefulWidget'?",
        c: "",
        o: [
            "A) O StatelessWidget mantém estado interno mutável, enquanto o StatefulWidget é imutável após renderizado.",
            "B) O StatelessWidget é imutável e não mantém estado interno mutável ao longo do ciclo de vida, enquanto o StatefulWidget pode gerenciar e alterar estado interno.",
            "C) O StatefulWidget executa exclusivamente em servidores web, enquanto o StatelessWidget é exclusivo para aplicativos móveis nativos.",
            "D) Não há diferença arquitetural; ambos utilizam o mesmo gerenciador de estado nativo do Dart."
        ],
        a: "B",
        e: "Widgets sem estado (Stateless) dependem apenas de suas configurações iniciais, enquanto widgets com estado (Stateful) possuem um objeto State associado que pode sofrer alterações e redesenhar a tela (setState).",
        t: "Sempre dê preferência a StatelessWidget quando o componente for estático para otimizar a performance."
    },
    {
        q: "Qual modificador de palavra-chave na linguagem Dart é utilizado para declarar variáveis que podem ser calculadas em tempo de execução, mas cujo valor é atribuído uma única vez e permanece imutável após a inicialização?",
        c: "final vs const",
        o: [
            "A) var",
            "B) dynamic",
            "C) final",
            "D) static"
        ],
        a: "C",
        e: "A palavra-chave `final` define uma variável que só pode ser configurada uma vez. Já o `const` define uma constante estática avaliada obrigatoriamente em tempo de compilação.",
        t: "Cuidado para não confundir: `const` é mais restrito que `final` por exigir valor conhecido antes mesmo de rodar o aplicativo."
    },
    {
        q: "No Flutter, qual é o papel fundamental do motor gráfico de renderização (como o Impeller ou o antigo Skia) na arquitetura do framework?",
        c: "",
        o: [
            "A) Traduzir diretamente o código Dart para componentes nativos específicos de UI (como botões nativos do Android e iOS).",
            "B) Desenhar os pixels diretamente na tela utilizando gráficos acelerados por hardware, ignorando a árvore de widgets nativa do sistema operacional.",
            "C) Gerenciar exclusivamente as requisições de rede HTTP e a persistência local via SQLite.",
            "D) Executar a máquina virtual Dart em segundo plano em um thread separado de I/O."
        ],
        a: "B",
        e: "O Flutter utiliza uma abordagem de renderização própria (cross-platform non-native components), desenhando os elementos usando seu próprio motor gráfico, o que garante alta performance e consistência visual entre diferentes plataformas.",
        t: "Isso explica por que um botão no Flutter se parece exatamente igual no iOS e no Android por padrão."
    }
];

dartFlutter.forEach(x => {
    addQuestion("Dart e Flutter", "Média", x.q, x.c, x.o, x.a, x.e, x.t);
});

console.log("Total de questões:",questions.length);
