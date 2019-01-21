// Este trecho do código serve para garantir que o usuário insira um nome não nulo.
do {
  var name = prompt ('Qual é o seu nome?');
} while (name == "" || name == "null" || name == null);

var publicarName = document.getElementsByClassName("jstext")[0];
publicarName.innerHTML = "Seja bem-vindo(a), " + name + "!";

//Esta função é para jogar o modo História.
function playHistory() {
  var historyQuestions = ['Qual o ano da independência do Brasil? \nA) 1822 \nB) 1889 \nC) 1806 \nDigite a letra correspondente.',
                          'Quem descobriu o Brasil? \nA) Dom Pedro I \nB) Machado de Assis \nC) Pedro Álvares Cabral \nDigite a letra correspondente.',
                          'Quem assinou a Lei Áurea? \nA) Dom João VI \nB) Princesa Isabel \nC) Getúlio Vargas \nDigite a letra correspondente.'];
  var rightAnswers = ['A',
                      'C',
                      'B'];

  var answers = [];
  var hits = [];
  var i;
  //Este loop é responsável pela exibição das perguntas, das capturas das respostas e compara com as respostas corretas. 
  //As respostas estão armazenadas na variável hits. 
  for (i = 0; i < historyQuestions.length; i++) {
    answers.push(prompt(historyQuestions[i]));
    if (answers[i].toLowerCase() == rightAnswers[i].toLowerCase()) {
    alert('Parabéns, você acertou!');
    hits.push('correta');
    } else {
      alert('Puxa vida, ' + name + '! Resposta incorreta! A resposta é ' + rightAnswers[i] + '. Clique em Ok para continuar.');
      hits.push('incorreta')
    }
  }
  //Neste trecho, computamos as respostas corretas.
  var score = 0;
  for (i = 0; i < historyQuestions.length; i++){
      if (hits[i] == 'correta'){
        score++;
      }
  }
  //A variável getscore imprime na tela a quantidade de acertos.
  var getScore = document.getElementsByClassName("jstext")[0];
      getScore.innerHTML =  "Você acertou " + score + "/" + hits.length + ".";

//Aqui ele esconde a tela inicial do jogo para mostrar o botão Jogar Novamente.
  document.getElementById("playAg").className="show";
  document.getElementById("gameBtn").className="hide";
  }

//Esta função esconde o botão Jogar Novamente e mostra os botões de modo de jogo.
  function playAgain() {
    document.getElementById("playAg").className="hide";
    document.getElementById("gameBtn").className="show";      
  }

//A função jogar Geografia é igual à função de História, só mudam as variáveis de perguntas e respostas.
function playGeography() {
  var geographyQuestions = ['Qual é a cidade mais populosa do continente americano? \nA) São Paulo \nB) Nova Iorque \nC) Cidade do México \nDigite a letra correspondente.',
                          'A lagoa da Pampulha é um ponto turistico de qual capital brasileira? \nA) Brasília \nB) Belo Horizonte \nC) Rio de Janeiro \nDigite a letra correspondente.',
                          'Moro próximo à Praia de Boa Viagem? Em que cidade eu moro? \nA) Recife \nB) Salvador \nC) Fortaleza \nDigite a letra correspondente.'];
  var rightAnswers = ['C',
                      'B',
                      'A'];
  var answers = [];
  var hits = [];
  var i;
  for (i = 0; i < geographyQuestions.length; i++) {
    answers.push(prompt(geographyQuestions[i]));
    if (answers[i].toLowerCase() == rightAnswers[i].toLowerCase()) {
    alert('Brilhante! Clique em Ok para continuar.');
    hits.push('correta');
    } else {
      alert('Resposta incorreta! Não desista, ' + name + '! A resposta é ' + rightAnswers[i] + '. Clique em Ok para continuar.');
      hits.push('incorreta')
    }
  }
  var score = 0;
  for (i = 0; i < geographyQuestions.length; i++){
      if (hits[i] == 'correta'){
        score++;
      }
  }
  var getScore = document.getElementsByClassName("jstext")[0];
      getScore.innerHTML =  "Você acertou " + score + "/" + hits.length + ".";


  document.getElementById("playAg").className="show";
  document.getElementById("gameBtn").className="hide";
  }

