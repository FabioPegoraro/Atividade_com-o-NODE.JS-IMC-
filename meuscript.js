let rs = require("readline-sync")

let nome = rs.question("Ola, qual o seu nome?\n")

let peso = rs.question(nome + ", qual o seu peso? (Ex.: 80)\n")

let altura = rs.questionFloat("Qual a sua altura?  (Ex.: 1.70)\n")

let imc = peso / (altura*altura)

if (imc <18.5) {
   console.log (nome + " seu IMC é " + imc + ", sua classificação é Magreza (Abaixo do Peso Ideial)\n")
} else if (imc>=18.5 && imc <24.9) {
    console.log (nome + " seu IMC é " + imc + ", sua classificação é Normal (Peso Ideal)\n")
} else if (imc>=25 && imc <29.9) {
    console.log (nome + " seu IMC é " + imc + ", sua classificação é Obesidade I (Sobre Peso)\n")
} else if (imc>=30 && imc <39.9) {
    console.log (nome + " seu IMC é " + imc + ", sua classificação é Obesidade II (Severa)\n")
} else if (imc>40) {
    console.log (nome + " seu IMC é " + imc + ", sua classificação é Obesidade III(Morbida)\n")
}

