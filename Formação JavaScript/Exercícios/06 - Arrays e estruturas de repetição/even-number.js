/*
Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.
*/
const array = [5, 12, 8, 3, 10, 6, 15, 4, 9, 11]
let list = []

for (let i = 0; i < array.length; i++) {
    if ((array[i] % 2) === 0) {
        list.push(array[i])
    }
}

console.log(`Os números pares presentes na sua lista são: ${list}`)