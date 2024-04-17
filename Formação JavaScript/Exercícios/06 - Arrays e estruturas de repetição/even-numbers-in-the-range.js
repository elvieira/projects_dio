/*
Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50.
*/
const array = [23, 45, 12, 56, 34, 2, 7, 40, 18, 50, 3, 29, 10, 5, 30, 15, 1, 6, 48, 20, 9, 55, 37, 42, 19, 8, 51, 27, 4, 38, 11, 52, 16, 31, 13, 47, 22, 36, 14, 49, 25, 57, 33, 24, 58, 26, 44, 21, 59, 17, 54, 32, 41, 35, 60, 39, 53, 43, 28];
let evenNumbers = []

for (i = 0; i < array.length; i++) {
    if (array[i] >= 10 && array[i] <= 50) {
        if ((array[i] % 2) === 0 ) {
            evenNumbers.push(array[i])
        }
    }
}

console.log(`Os números encontrados nessa lista que estão entre 10 e 50 são ${evenNumbers}`)