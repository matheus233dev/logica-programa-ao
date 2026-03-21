let idade = 17;
let temAutorizacao = true;

let resultado = "";

if (idade >= 18){
    resultado = "acesso liberado";
} else if (idade >= 16 && temAutorizacao){

    resultado = "Acesso liberado";
} else {
    resultado = "Acesso negado";
}

console.log("idade: " + idade);
conaole.log(" temAutorizacao: " + temAutorizao);
console.log("resultado: " + resultado);