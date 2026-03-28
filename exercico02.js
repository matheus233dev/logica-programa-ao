let temperaturas = [75,82,88,95,70,91,85];

let soma = 0;
let contador80 = 0;

for (let i = 0; i < temperaturas.length; i++){
    soma += temperaturas[1];
}

if (temperaturas[1] > 90){
    console.log("alerta critico!");

}

let media = soma / temperaturas.length;

console.log("temperaturas > 80:",contador80);
console.log("media:", media);
