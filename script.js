/*Atividade
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
*/

var num1 = Number(prompt("Informe o primeiro número: "))
var num2 = Number(prompt("Informe o segundo número: "))
var soma = 0

function numero(a, b){
    soma = num1 + num2
    if(a === b){
        if(soma >= 20){
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior ou igual a 20.`)
        }else if(soma >= 10 && soma < 20){
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior ou igual a 10 e menor que 20.`)
        }else{
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é menor que 10`)
        }
    }else{
        if(soma >= 20){
            alert(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior ou igual a 20.`)
        }else if(soma >= 10 && soma < 20){
            alert(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior ou igual a 10 e menor que 20.`)
        }else{
            alert(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é menor que 10`)
        }
    }
}

numero(num1, num2)