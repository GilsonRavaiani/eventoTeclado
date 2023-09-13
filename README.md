# eventoTeclado

Material de apoio feito por: https://prozeducacao.com.br/

Introdução

Muitas interações de sites são acionadas por eventos de mouse. Porém, ao usar eventos de teclado, temos mais possibilidades para adicionar interatividade nos nossos sites.

Os eventos de teclado são muito populares na área de desenvolvimento de videogames.

Setup de arquivos

Para demonstrar o uso dos eventos de teclado, usaremos como exemplo um projeto simples com três arquivos: index.html, style.css e script.js.

O arquivo index.html segue o padrão de estrutura base HTML. Veja o exemplo.

<!-- <body>
    <h2>Tecla apertada: =>Elemento pai.
      <span id="key-text"></span> => Elemento filho.
    </h2>
    <h2>Código da tecla:
      <span id="code-text"></span>
    </h2>
    <div id="quadrado"></div> =>Elemento que iremos interagir através do evento pelo teclado.
</body> -->

No código anterior, temos três elementos principais: dois h2 e uma div. Ambos elementos h2 tem um próprio elemento span como filho.

As spans serão usadas para inserir texto com a linguagem JavaScript. Já a div, com id quadrado, será um elemento que moveremos usando as setas do teclado.

Esses ids e classes atribuídos servirão para referenciar os elementos nos arquivos style.css e script.js.

Para conectar o arquivo HTML com os arquivos style.css e script.js, que devem estar na mesma pasta que o arquivo index.html, precisamos incluir os seguintes comandos dentro da tag <head></head>:

<link rel="stylesheet" href="style.css">

<script src="script.js" defer></script>

No arquivo style.css, definimos o estilo para o seletor do id quadrado, que é o elemento que queremos criar para o evento.

No id quadrado, determinamos a altura, a largura e a cor de fundo do elemento para facilitar a visualização no navegador. Além disso, usamos a propriedade position com valor relative para mover o elemento. Observe o código:

#quadrado {
width: 24px;
height: 24px;
background-color: blue;
position: relative;
}

No arquivo script.js, iremos capturar todos os elementos do DOM que usaremos com o método querySelector(), que serve para retornar um valor. Além disso, vamos definir a variável distanciaDaEsquerda, a qual representará a distância entre o elemento quadrado e a borda esquerda do elemento pai.

let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0

Quando trabalhamos com eventos de teclado, temos três tipos de evento que podemos usar como ativadores: keypress, keydown e keyup.

Tipo Descrição
keypress => Tipo de evento que só reconhece teclas de letras, números ou pontuação, ou seja, desconsidera teclas como Shift, Alt, setas etc.
keydown => Tipo de evento disparado ao apertar uma tecla. Ele é executado de forma repetida se a tecla permanece apertada.
keyup => Tipo de evento disparado ao soltar uma tecla. Importante destacar que, antes, ela precisa ser pressionada.

##Tipos de eventos de teclado

Esses eventos são usados em diferentes situações. Eles nos permitem ter mais controle sobre o tipo de interação que queremos para o usuário.

Eventos de teclado

Os eventos de teclado podem ser atribuídos a elementos do tipo input se quisermos, por exemplo, ativá-los apenas quando o usuário inserir alguma informação em um local específico e travando se ele escrever em outro; ou diretamente no DOM, se quisermos que o evento seja disparado em qualquer parte da nossa página.

No nosso caso, o evento de teclado será aplicado diretamente no objeto Document para dispará-lo sem precisar selecionar nenhum elemento específico. Assim, o site reconhecerá o comando logo quando clicarmos em alguma tecla.

Propriedades key e code

Primeiro, definimos um evento do tipo keyup e declaramos uma arrow function no eventListener, que recebe o parâmetro e (evento). Dessa forma:

document.addEventListener("keyup", (e)=> {

})

Para entender melhor os eventos de teclado, usaremos a função console.log() para ver quais propriedades existem:

document.addEventListener("keyup", (e)=> {

console.log(e);

})

Ao salvar as mudanças e abrir nosso projeto no navegador com o LiveServer, é preciso clicar em qualquer tecla para ver o DevTools imprimindo algo semelhante a essa mídia na aba Console:

O nome KeyboardEvent indica que o evento disparado é um evento de teclado.

Se clicarmos no triângulo à esquerda do KeyboardEvent, podemos ver todas as propriedades que os eventos de teclado possuem. As duas propriedades que mais nos interessam nesse momento são code e key.

Neste link, temos a lista de code e key para todas as teclas.
