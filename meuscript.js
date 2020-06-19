let rs = require("readline-sync")

let peso = rs.question("Qual o seu peso?")

let altura = rs.questionFloat("Qual a sua altura?")

let imc = peso / (altura*altura)

console.log("O seu IMC é " + imc)




