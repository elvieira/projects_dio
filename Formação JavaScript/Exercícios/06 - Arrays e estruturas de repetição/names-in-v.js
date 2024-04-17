/*
Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/
const names = ['Ana', 'Rafael', 'Vinicius', 'Carla', 'Maria', 'Lucas', 'Vanessa', 'Julia', 'João', 'Viviane', 'Pedro', 'Mariana', 'Vitor', 'Valentina', 'Gustavo'];
let namesInV = []

for (i = 0; i < names.length; i++) {
    if (names[i].startsWith('V')) {
        namesInV.push(names[i])
    }
}

console.log(`Os nomes que começam com a letra 'V' na lista são: ${namesInV}`)
