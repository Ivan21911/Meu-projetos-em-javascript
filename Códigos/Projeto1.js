const peso = prompt("Seu peso");
const altura = prompt("Sua altura");
const resultado = peso / altura **2;

if (resultado < 18.4) {
  console.log("muito abaixo do peso!");
}

else if (resultado < 24.9) {
  console.log("peso normal")
}

if (resultado > 25 && resultado < 29.9) {
  console.log("acima do peso")
  }

else if (resultado > 30) {
  console.log("obesidade")
}
