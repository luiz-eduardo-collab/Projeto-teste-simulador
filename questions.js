
const questions = [];

let id = 1;

function addQuestion(area, difficulty, question, code, options, answer, explanation, trap){

    questions.push({
        id:id++,
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

for(let i=1;i<=30;i++){

    let a=i+5;
    let b=i%5+2;

    addQuestion(
        "Lógica de Programação",
        i%3===0?"Difícil":i%2===0?"Média":"Fácil",
        "Considere o algoritmo abaixo. Qual será o valor final de x?",
`x = ${a}
y = ${b}

if(x > y){
    x = x - y;
}else{
    x = x + y;
}

x = x * 2;`,
[
"A) "+((a-b)*2),
"B) "+((a+b)*2),
"C) "+(a-b),
"D) "+a
],
"A",
`Inicialmente x=${a} e y=${b}. Como x é maior que y, ocorre x=x-y, resultando em ${a-b}. Depois x é multiplicado por 2, chegando em ${(a-b)*2}.`,
"Acompanhe cada linha do algoritmo; a banca costuma explorar atribuições sequenciais."
    );

}

/* =====================================================
   POO
===================================================== */

const pooTemplates=[
{
q:"Observe o código Java. Qual conceito está representado pela criação do objeto?",
c:`class Servidor{
 String nome;
}

Servidor s = new Servidor();`,
o:[
"A) Herança",
"B) Instanciação",
"C) Encapsulamento",
"D) Polimorfismo"
],
a:"B",
e:"A classe Servidor é utilizada para criar um objeto chamado s.",
t:"Classe é o molde; objeto é a instância criada."
},
{
q:"Qual princípio da orientação a objetos é demonstrado?",
c:`class Conta{
 private double saldo;
}`,
o:[
"A) Herança",
"B) Recursividade",
"C) Encapsulamento",
"D) Sobrecarga"
],
a:"C",
e:"O modificador private restringe o acesso direto ao atributo saldo.",
t:"Private está fortemente associado ao encapsulamento."
},
{
q:"Qual será a saída?",
c:`class Animal{
 void som(){
  System.out.println("Animal");
 }
}

class Cachorro extends Animal{
 @Override
 void som(){
  System.out.println("Cachorro");
 }
}

Animal a = new Cachorro();
a.som();`,
o:[
"A) Animal",
"B) Cachorro",
"C) Erro",
"D) Nenhuma saída"
],
a:"B",
e:"O objeto criado é Cachorro. O método sobrescrito é executado por polimorfismo.",
t:"Observe sempre o tipo real do objeto."
},
{
q:"Qual palavra-chave representa herança em Java?",
c:`class Analista ______ Funcionario{
}`,
o:[
"A) implements",
"B) extends",
"C) inherit",
"D) super"
],
a:"B",
e:"Classes utilizam extends para herdar outra classe.",
t:"implements é utilizado para interfaces."
}
];

for(let i=0;i<35;i++){

    let x=pooTemplates[i%pooTemplates.length];

    addQuestion(
        "POO",
        i%3===0?"Difícil":i%2===0?"Média":"Fácil",
        x.q,
        x.c,
        x.o,
        x.a,
        x.e,
        x.t
    );

}

/* =====================================================
   JAVA
===================================================== */

const javaTemplates=[
{
q:"Qual componente executa o bytecode Java?",
c:`Código.java
     ↓
Compilação
     ↓
Código.class
     ↓
     ?`,
o:["A) JDK","B) JVM","C) JRE","D) JDBC"],
a:"B",
e:"A JVM é responsável pela execução do bytecode.",
t:"JDK desenvolve, JVM executa."
},
{
q:"Qual será a saída?",
c:`int x = 5;

System.out.println(x++);
System.out.println(x);`,
o:["A) 5 e 5","B) 5 e 6","C) 6 e 6","D) 6 e 5"],
a:"B",
e:"O pós-incremento imprime primeiro 5 e depois incrementa para 6.",
t:"x++ é diferente de ++x."
},
{
q:"Qual coleção não permite elementos duplicados?",
c:`Set<String> cidades =
new HashSet<>();`,
o:["A) List","B) Set","C) Queue","D) ArrayList"],
a:"B",
e:"Set representa uma coleção sem duplicidade.",
t:"List permite repetição; Set não."
}
];

for(let i=0;i<30;i++){

let x=javaTemplates[i%javaTemplates.length];

addQuestion("Java",i%2===0?"Média":"Fácil",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   ESTRUTURAS DE DADOS
===================================================== */

const estrutura=[
{
q:"Qual elemento será removido?",
c:`Stack<Integer> pilha =
new Stack<>();

pilha.push(10);
pilha.push(20);
pilha.push(30);

pilha.pop();`,
o:["A) 10","B) 20","C) 30","D) Nenhum"],
a:"C",
e:"A pilha segue LIFO. O último elemento inserido é removido primeiro.",
t:"LIFO = Last In First Out."
},
{
q:"Qual elemento será atendido primeiro?",
c:`Queue<Integer> fila =
new LinkedList<>();

fila.add(10);
fila.add(20);
fila.add(30);

fila.poll();`,
o:["A) 10","B) 20","C) 30","D) Erro"],
a:"A",
e:"A fila segue FIFO. O primeiro inserido sai primeiro.",
t:"FIFO = First In First Out."
},
{
q:"Qual estrutura representa melhor uma hierarquia?",
c:`        Diretor
       /       \\
 Gerente A   Gerente B`,
o:["A) Fila","B) Pilha","C) Árvore","D) Vetor"],
a:"C",
e:"Estruturas hierárquicas são representadas por árvores.",
t:"Árvore possui raiz e nós."
}
];

for(let i=0;i<25;i++){

let x=estrutura[i%estrutura.length];

addQuestion("Estruturas de Dados",i%3===0?"Difícil":"Média",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   BANCO DE DADOS
===================================================== */

const banco=[
{
q:"Qual campo é a melhor chave primária?",
c:`CLIENTE

id_cliente
nome
cpf
cidade`,
o:["A) nome","B) cidade","C) id_cliente","D) cpf e cidade"],
a:"C",
e:"O identificador único normalmente é utilizado como chave primária.",
t:"Chave primária identifica unicamente um registro."
},
{
q:"Qual atributo representa uma chave estrangeira?",
c:`CLIENTE
id_cliente

PEDIDO
id_pedido
id_cliente`,
o:["A) CLIENTE.id_cliente","B) PEDIDO.id_pedido","C) PEDIDO.id_cliente","D) Nenhum"],
a:"C",
e:"PEDIDO.id_cliente referencia CLIENTE.id_cliente.",
t:"Chave estrangeira cria relacionamento entre tabelas."
},
{
q:"Qual é o objetivo principal da normalização?",
c:`Tabela

Servidor
id
nome
telefone1
telefone2
telefone3`,
o:[
"A) Aumentar redundância",
"B) Reduzir redundância",
"C) Eliminar chaves",
"D) Criar índices"
],
a:"B",
e:"A normalização busca reduzir redundâncias e anomalias.",
t:"Questão clássica de modelagem."
}
];

for(let i=0;i<35;i++){

let x=banco[i%banco.length];

addQuestion("Banco de Dados/Modelagem",i%2===0?"Média":"Fácil",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   SQL
===================================================== */

const sql=[
{
q:"O que essa consulta retorna?",
c:`SELECT nome
FROM servidor
WHERE salario > 5000;`,
o:[
"A) Todos servidores",
"B) Salários menores",
"C) Servidores com salário acima de 5000",
"D) Apenas um servidor"
],
a:"C",
e:"WHERE filtra registros conforme a condição.",
t:"Leia cuidadosamente a cláusula WHERE."
},
{
q:"Qual comando modifica registros existentes?",
c:`UPDATE servidor
SET salario=6000
WHERE id=10;`,
o:["A) INSERT","B) UPDATE","C) DELETE","D) DROP"],
a:"B",
e:"UPDATE altera dados já existentes.",
t:"DELETE remove registros; DROP remove estrutura."
},
{
q:"Qual cláusula filtra grupos?",
c:`SELECT setor,COUNT(*)
FROM servidor
GROUP BY setor
HAVING COUNT(*)>10;`,
o:["A) WHERE","B) ORDER BY","C) HAVING","D) DISTINCT"],
a:"C",
e:"HAVING atua após o agrupamento.",
t:"WHERE filtra linhas; HAVING filtra grupos."
}
];

for(let i=0;i<30;i++){

let x=sql[i%sql.length];

addQuestion("SQL",i%3===0?"Difícil":"Média",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   WEB
===================================================== */

const web=[
{
q:"Qual tecnologia estrutura uma página?",
c:`<h1>Prefeitura</h1>`,
o:["A) HTML","B) CSS","C) SQL","D) Java"],
a:"A",
e:"HTML define a estrutura do documento.",
t:"CSS estiliza; HTML estrutura."
},
{
q:"Qual tecnologia estiliza elementos?",
c:`body{
 background:#fff;
}`,
o:["A) HTML","B) CSS","C) JSON","D) XML"],
a:"B",
e:"CSS é responsável pela apresentação.",
t:"Questão conceitual recorrente."
},
{
q:"Qual é a finalidade?",
c:`fetch('/api/servidores')
.then(r=>r.json())
.then(d=>console.log(d));`,
o:[
"A) Executar SQL",
"B) Consumir API JSON",
"C) Compilar Java",
"D) Criar banco"
],
a:"B",
e:"fetch realiza requisição HTTP e json interpreta a resposta.",
t:"AJAX normalmente aparece associado a comunicação assíncrona."
}
];

for(let i=0;i<20;i++){

let x=web[i%web.length];

addQuestion("Web/JS/JSON/XML/AJAX","Média",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   SPRING
===================================================== */

const spring=[
{
q:"Qual conceito está presente?",
c:`@Service
class ServidorService{

 private final Repository repo;

 ServidorService(Repository repo){
  this.repo=repo;
 }
}`,
o:[
"A) Recursividade",
"B) Injeção de dependência",
"C) Herança",
"D) Hash"
],
a:"B",
e:"O Repository é fornecido ao Service pelo construtor.",
t:"IoC e DI são fundamentos do Spring."
},
{
q:"Qual módulo facilita persistência?",
c:`interface ServidorRepository
extends JpaRepository<Servidor,Long>{}`,
o:["A) Spring Security","B) Spring Data","C) Spring Boot apenas","D) Spring MVC"],
a:"B",
e:"Spring Data fornece abstrações para acesso aos dados.",
t:"JpaRepository é pista importante."
},
{
q:"Qual módulo trata autenticação?",
c:`http
.authorizeHttpRequests(...)
.formLogin(...);`,
o:["A) Spring Data","B) Spring Security","C) JDBC","D) Maven"],
a:"B",
e:"Spring Security trata autenticação e autorização.",
t:"Autenticação e autorização são conceitos diferentes."
}
];

for(let i=0;i<15;i++){

let x=spring[i%spring.length];

addQuestion("Spring","Média",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   ARQUITETURA
===================================================== */

const arquitetura=[
{
q:"Qual camada concentra regras de negócio?",
c:`Controller
     ↓
Service
     ↓
Repository`,
o:["A) Controller","B) Service","C) Repository","D) Banco"],
a:"B",
e:"Service normalmente concentra regras de negócio.",
t:"Arquitetura em camadas."
},
{
q:"Qual princípio é aplicado?",
c:`Interface
   ↓
Negócio
   ↓
Persistência`,
o:[
"A) Acoplamento máximo",
"B) Separação de responsabilidades",
"C) Recursividade",
"D) Herança"
],
a:"B",
e:"Cada camada possui responsabilidade específica.",
t:"Alta coesão e baixo acoplamento são objetivos arquiteturais."
}
];

for(let i=0;i<15;i++){

let x=arquitetura[i%arquitetura.length];

addQuestion("Arquitetura/3-tier/SOA","Média",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   REST SOAP
===================================================== */

const rest=[
{
q:"Qual operação normalmente consulta recursos?",
c:`GET /servidores/10`,
o:["A) GET","B) POST","C) DELETE","D) PUT"],
a:"A",
e:"GET recupera informações.",
t:"Métodos HTTP são muito cobrados."
},
{
q:"Qual formato é típico em APIs REST?",
c:`{
 "id":10,
 "nome":"Ana"
}`,
o:["A) XML","B) JSON","C) SQL","D) CSV"],
a:"B",
e:"JSON é amplamente utilizado em APIs REST.",
t:"SOAP normalmente utiliza XML."
},
{
q:"SOAP é principalmente:",
c:`<soap:Envelope>
 ...
</soap:Envelope>`,
o:[
"A) Linguagem",
"B) Banco",
"C) Protocolo baseado em XML",
"D) Framework CSS"
],
a:"C",
e:"SOAP utiliza mensagens estruturadas em XML.",
t:"REST não é protocolo; é estilo arquitetural."
}
];

for(let i=0;i<15;i++){

let x=rest[i%rest.length];

addQuestion("REST/SOAP","Média",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   UML
===================================================== */

const uml=[
{
q:"Qual diagrama representa atores e funcionalidades?",
c:`Servidor
   |
Cadastrar
Consultar
Excluir`,
o:[
"A) Classes",
"B) Casos de Uso",
"C) Sequência",
"D) Atividades"
],
a:"B",
e:"Casos de uso representam atores e funcionalidades.",
t:"Ator é a principal pista."
},
{
q:"Qual diagrama mostra classes e relacionamentos?",
c:`Servidor ---- Departamento`,
o:[
"A) Sequência",
"B) Classes",
"C) Casos de Uso",
"D) Implantação"
],
a:"B",
e:"Diagrama de classes representa estrutura estática.",
t:"Classes possuem atributos e métodos."
}
];

for(let i=0;i<15;i++){

let x=uml[i%uml.length];

addQuestion("UML","Fácil",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   DESIGN PATTERNS
===================================================== */

const patterns=[
{
q:"GoF divide padrões em:",
c:`GoF Patterns`,
o:[
"A) Criacionais Estruturais Comportamentais",
"B) Banco Web Java",
"C) SQL HTML CSS",
"D) Cliente Servidor Banco"
],
a:"A",
e:"Essa é a classificação clássica dos padrões GoF.",
t:"Questão conceitual."
},
{
q:"Qual padrão garante uma única instância?",
c:`private static App instance;`,
o:["A) Factory","B) Singleton","C) Observer","D) Adapter"],
a:"B",
e:"Singleton controla a criação de uma única instância.",
t:"Muito comum em provas."
}
];

for(let i=0;i<10;i++){

let x=patterns[i%patterns.length];

addQuestion("Design Patterns","Média",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   DDD
===================================================== */

const ddd=[
{
q:"No DDD uma entidade possui principalmente:",
c:`Servidor
id=10
nome='Carlos'`,
o:[
"A) Apenas valor",
"B) Identidade própria",
"C) Apenas métodos",
"D) Apenas tabela"
],
a:"B",
e:"Entidades são definidas por sua identidade.",
t:"Value Object é definido pelos valores."
},
{
q:"Value Object representa:",
c:`Endereco
Rua
Número
CEP`,
o:[
"A) Objeto definido pelos valores",
"B) Entidade obrigatória",
"C) Serviço",
"D) Controller"
],
a:"A",
e:"Value Objects normalmente não possuem identidade própria.",
t:"DDD diferencia entidade e Value Object."
}
];

for(let i=0;i<10;i++){

let x=ddd[i%ddd.length];

addQuestion("DDD","Média",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   SCRUM XP
===================================================== */

const scrum=[
{
q:"Quem gerencia o Product Backlog?",
c:`Product Backlog`,
o:[
"A) Scrum Master",
"B) Product Owner",
"C) DBA",
"D) Cliente"
],
a:"B",
e:"Product Owner prioriza e gerencia o backlog.",
t:"Responsabilidade clássica do Scrum."
},
{
q:"Qual evento apresenta o incremento?",
c:`Sprint
   ↓
Incremento`,
o:[
"A) Daily",
"B) Review",
"C) Planning",
"D) Retrospective"
],
a:"B",
e:"Sprint Review inspeciona o incremento.",
t:"Daily é reunião curta diária."
},
{
q:"Qual prática XP utiliza dois programadores?",
c:`Dev A + Dev B`,
o:[
"A) TDD",
"B) Pair Programming",
"C) Refactoring",
"D) Scrum"
],
a:"B",
e:"Pair Programming significa programação em pares.",
t:"XP é diferente de Scrum."
}
];

for(let i=0;i<15;i++){

let x=scrum[i%scrum.length];

addQuestion("Scrum/XP","Média",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   TESTES
===================================================== */

const testes=[
{
q:"Teste de uma função isolada:",
c:`calcularMedia()`,
o:[
"A) Sistema",
"B) Unidade",
"C) Aceitação",
"D) Integração"
],
a:"B",
e:"Teste unitário verifica uma unidade isolada.",
t:"Função ou método isolado."
},
{
q:"Teste entre módulos:",
c:`Controller
   ↓
Service
   ↓
Repository`,
o:[
"A) Unidade",
"B) Integração",
"C) Regressão",
"D) Aceitação"
],
a:"B",
e:"Integração verifica comunicação entre componentes.",
t:"Observe interação entre módulos."
},
{
q:"Após alteração verifica se algo que funcionava continua funcionando:",
c:`Nova versão
    ↓
Executar testes`,
o:[
"A) Sistema",
"B) Regressão",
"C) Carga",
"D) Caixa preta"
],
a:"B",
e:"Teste de regressão procura efeitos colaterais.",
t:"Muito cobrado em engenharia de software."
}
];

for(let i=0;i<15;i++){

let x=testes[i%testes.length];

addQuestion("Testes","Média",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   GIT
===================================================== */

const git=[
{
q:"Qual comando mostra o estado do repositório?",
c:`git ???`,
o:["A) push","B) status","C) merge","D) clone"],
a:"B",
e:"git status mostra arquivos modificados e preparados.",
t:"Comando básico obrigatório."
},
{
q:"Qual comando envia commits ao remoto?",
c:`git ??? origin main`,
o:["A) pull","B) push","C) add","D) log"],
a:"B",
e:"git push envia alterações para o repositório remoto.",
t:"push envia; pull recebe."
}
];

for(let i=0;i<10;i++){

let x=git[i%git.length];

addQuestion("Git","Fácil",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   CRIPTOGRAFIA
===================================================== */

const crypto=[
{
q:"MD5 é:",
c:`MD5("senha")`,
o:[
"A) Hash",
"B) Assimétrica",
"C) Simétrica",
"D) Banco"
],
a:"A",
e:"MD5 é função hash.",
t:"Hash não é criptografia reversível."
},
{
q:"RSA utiliza:",
c:`Chave Pública
+
Chave Privada`,
o:[
"A) Uma única chave",
"B) Duas chaves",
"C) Nenhuma chave",
"D) Apenas senha"
],
a:"B",
e:"RSA é criptografia assimétrica.",
t:"Pública e privada."
},
{
q:"AES é:",
c:`Mesma chave
Cifrar
Decifrar`,
o:[
"A) Hash",
"B) Simétrica",
"C) Assimétrica",
"D) Assinatura"
],
a:"B",
e:"AES utiliza a mesma chave secreta.",
t:"Simétrica = mesma chave."
},
{
q:"Assinatura digital fornece principalmente:",
c:`Documento
Assinatura
Verificação`,
o:[
"A) Compactação",
"B) Integridade e autenticidade",
"C) Backup",
"D) Banco"
],
a:"B",
e:"A assinatura digital permite verificar autoria e integridade.",
t:"Não confunda assinatura com criptografia."
}
];

for(let i=0;i<20;i++){

let x=crypto[i%crypto.length];

addQuestion("Criptografia/Certificação",i%2===0?"Média":"Difícil",x.q,x.c,x.o,x.a,x.e,x.t);

}

/* =====================================================
   DART FLUTTER
===================================================== */

const flutter=[
{
q:"Qual palavra permite reatribuição?",
c:`var idade = 58;
idade = 59;`,
o:[
"A) final",
"B) const",
"C) var",
"D) static"
],
a:"C",
e:"var permite alterar o valor posteriormente.",
t:"final recebe valor apenas uma vez."
},
{
q:"Qual widget organiza elementos verticalmente?",
c:`Column(
 children:[]
)`,
o:["A) Row","B) Column","C) Stack","D) Scaffold"],
a:"B",
e:"Column organiza widgets no eixo vertical.",
t:"Row organiza horizontalmente."
},
{
q:"Qual widget possui estado mutável?",
c:`class Tela extends StatefulWidget`,
o:[
"A) StatelessWidget",
"B) StatefulWidget",
"C) MaterialApp",
"D) Container"
],
a:"B",
e:"StatefulWidget possui estado que pode mudar.",
t:"Muito cobrado em conceitos Flutter."
}
];

for(let i=0;i<15;i++){

let x=flutter[i%flutter.length];

addQuestion("Dart/Flutter","Média",x.q,x.c,x.o,x.a,x.e,x.t);

}

console.log("Total de questões:",questions.length);
