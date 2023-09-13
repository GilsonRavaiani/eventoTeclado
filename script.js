let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0


document.addEventListener("keyup",
(e)=> {
  console.log(e.key);
  console.log(e.code);
})

document.addEventListener("keyup", 
(e)=> {
  keyText.innerText = e.key;
  codeText.innerText = e.code;
})