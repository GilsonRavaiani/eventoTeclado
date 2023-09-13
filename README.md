# eventoTeclado

Introdução

Muitas interações de sites são acionadas por eventos de mouse. Porém, ao usar eventos de teclado, temos mais possibilidades para adicionar interatividade nos nossos sites.

Os eventos de teclado são muito populares na área de desenvolvimento de videogames.

Setup de arquivos

Para demonstrar o uso dos eventos de teclado, usaremos como exemplo um projeto simples com três arquivos: index.html, style.css e script.js.

O arquivo index.html segue o padrão de estrutura base HTML. Veja o exemplo.

No código anterior, temos três elementos principais: dois h2 e uma div. Ambos elementos h2 tem um próprio elemento span como filho.

As spans serão usadas para inserir texto com a linguagem JavaScript. Já a div, com id quadrado, será um elemento que moveremos usando as setas do teclado.

Esses ids e classes atribuídos servirão para referenciar os elementos nos arquivos style.css e script.js.

Para conectar o arquivo HTML com os arquivos style.css e script.js, que devem estar na mesma pasta que o arquivo index.html, precisamos incluir os seguintes comandos dentro da tag <head></head>:

<link rel="stylesheet" href="style.css">

<script src="script.js" defer></script>
