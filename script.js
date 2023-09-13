let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0


document.addEventListener("keyup",
(e)=> {
  console.log(e.key);  //imprimindo valor que essa tecla guarda
  console.log(e.code);  // imprimindo único código que esse botão do teclado guarda
})

document.addEventListener("keyup", //Exibe os valores das propriedades
(e)=> {
  keyText.innerText = e.key;
  codeText.innerText = e.code;
})

document.addEventListener("keydown", (e) => {  //Usaremos o evento keydown para poder continuar deslocando o elemento ao manter apertada uma tecla.

})

document.addEventListener("keydown", (e) => {
  if(e.code == "ArrowRight"){
    
    // console.log("Apertou a seta à direita");
  }
})

document.addEventListener("keydown", (e) => {
  if(e.code == "ArrowRight"){
    distanciaDaEsquerda = distanciaDaEsquerda + 10
    console.log(distanciaDaEsquerda);
    quadrado.style.left = distanciaDaEsquerda + "px"
  }
})