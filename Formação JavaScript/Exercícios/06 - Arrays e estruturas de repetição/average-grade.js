/*
Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5) e qual for a maior nota.
   Exemplo de lista = [2, 7, 3, 8, 10, 4]
*/
const grades = [2, 7, 3, 8, 10, 4]
let recovery = []
let highestGrade = 0

for (i = 0; i < grades.length; i++) {
   if (grades[i] < 5) {
      recovery.push(grades[i])
   }
   if (grades[i] > highestGrade) {
      highestGrade = grades[i]
   }
}

console.log(`Os alunos que ficaram de recuperação foram: `)

for (i = 0; i < recovery.length; i++) {
   console.log(`O aluno com a nota: ${recovery[i]}`)
}

console.log(`E o aluno com maior nota foi: ${highestGrade}`)