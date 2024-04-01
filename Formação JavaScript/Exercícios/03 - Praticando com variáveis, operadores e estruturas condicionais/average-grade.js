/*
Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre.
*/
const read = require('readline-sync')

console.log('Digite as 3 notas do aluno: ')

let note1 = read.question('NOTA 1: ')
let note2 = read.question('NOTA 2: ')
let note3 = read.question('NOTA 3: ')

let average = (Number(note1) + Number(note2) + Number(note3)) / 3

console.log(`Sua média é: ${average.toFixed(1)}`)

if (average < 5) {
    console.log('Reprovação')
} else if (average >= 5 && average <= 7) {
    console.log('Recuperação')
} else {
    console.log('Passou de semestre')
}