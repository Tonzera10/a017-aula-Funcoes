// // função nomeada
// function soma(num1, num2){
//     return num1 + num2
// }

// //função anonima ou não-nomeada (expressão de função)
// const soma = function(num1, num2) {
//     return num1 + num2
// }

// declarando aminha função
// function olaMundo() {
//     console.log("Olá Mundo!")
// }

// olaMundo()

// function olaPessoa(nome) {
//     console.log(nome)
// }

// olaPessoa('Everton')

// refatoração pra uma expressão de função
// const nome = function (nome) {
//     console.log(nome)
// }
//função não-nomeada
// const somaEx = function (num1, num2) {
//     return num1 + num2
// }

// //arrow function
// const soma = (num1, num2) => {
//     return num1 + num2
// }

// // const result = soma(4, 6)
// // console.log(result)
// console.log(soma(4, 6))
// console.log(soma(12, 30))
// console.log(soma(23, 73))

//array da prática guiada 1
// const numeros = [00, 11, 22, 33, 44, 55, 66, 77, 88, 99]
// const numeros1 = [10, 11, 22, 33, 44, 55, 66, 77, 88, 99]
// const numeros2 = [20, 11, 22, 33, 44, 55, 66, 77, 88, 100]

// function retornaPrimeiroEUltimo(array) {
//     const primeiro = array[0]
//     const ultimo = array[array.length - 1]
//     const novoArray = []
//     novoArray.push(primeiro, ultimo)
//     return novoArray
// }
// console.log(retornaPrimeiroEUltimo(numeros))
// console.log(retornaPrimeiroEUltimo(numeros1))
// console.log(retornaPrimeiroEUltimo(numeros2))

//array da prática guiada 2
// const numeros = [00, 11, 22, 33, 44, 55, 66, 77, 88, 99]

// const somentePares = (array) => {
//     let novoArray = []

//     for(let numero of array) {
//         if(numero % 2 === 0) {
//             novoArray.push(numero)
//         }
//     }

//     return novoArray
// }

// console.log(somentePares(numeros)

const numeros = [04, 11, 22, 44, 55, 99, 88, 66]
const numeros1 = [12, 20, 33, 54, 24, 93, 23, 44]

function doisDivididos(array) {
    let primeiro = array[0]/2
    let ultimo = array[array.length-1]/2
    let divididos = []
    divididos.push(primeiro, ultimo)
    return divididos
}

console.log(doisDivididos(numeros))
console.log(doisDivididos(numeros1))
