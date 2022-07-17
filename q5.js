const num1 = Number.parseInt(prompt('digite o primeiro numero'))
const num2 = Number.parseInt(prompt('digite o segundo numero'))
const num3 = Number.parseInt(prompt('digite o terceiro numero'))
const num4 = Number.parseInt(prompt('digite o quarto numero'))
   
const array = [num1,num2,num3,num4]

function fatorial (num){
    if (num === 0) return 1;
    if (num === 1) return 1;
    return num * fatorial(num-1);
}

const novoarray = array.map(fatorial, 0)

alert(novoarray)