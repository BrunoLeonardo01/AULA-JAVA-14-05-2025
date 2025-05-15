/*declarando variaveis*/
let altura;
let peso;
let imc;
/* criando uma função para calculo do IMC*/
/* comentario de bloco*/
// comentario de linha
function calcImc(){
    let altura=(document.getElementById("al").value)/100;//divisao por 100 para converter em metros

    let peso = document.getElementById("ps").value;
   
    //converter para numero
    altura = parseFloat(altura)
    /*
    tipos de dados:
    ont = numeros inteiros
    float = de ponto flutuante, exemplo o preço da gasolina 6.27
    string = texto
    boolean = verdadeiro ou falso
    */
peso = parseFloat(peso)

imc = peso / (altura*altura);// calcular o IMC
window.alert("Seu IMC é :" + imc.toFixed(2)); 
}
function alternarTema_escuro(){
    const corpo = document.body// corpo do html
    corpo.classList.toggle("escuro");
}

function alternarTemas_claro(){
    const corpo = document.body// corpo do html
    corpo.classList.toggle("claro")
}