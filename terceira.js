<!-- Enunciado:  solicite ao usuário quatro valores inteiros e armazene-os num array simples. Após isso, utilize a função filter() para gerar um novo array contendo apenas valores pares.-->

const valor1 = Number(prompt('digite o primeiro numero'))
const valor2 = Number(prompt('digite o segundo numero'))
const valor3 = Number(prompt('digite o terceiro numero'))
const valor4 = Number(prompt('digite o quarto numero'))

valores = [];
const pares = [];
const impares = [];

function par(n1){
    if (n1%2 == 0){
        pares.push(n1) && valores.push(n1)
    }else{
        impares.push(n1) && valores.push(n1)

    }
}



par(valor1);
par(valor2);
par(valor3);
par(valor4);

document.write('numeros pares:' + '('+pares+')')
document.write('numeros impares:' + '('+impares+')')

const paress = valores.filter(par)
document.write('resultado do filtro:'+paress)

