import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const third = document.querySelector("#tercer-numero");
const fourth = document.querySelector("#cuarto-numero");
const forms = document.querySelector("#sumar-form");
const formm = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado2-div");

forms.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formm.addEventListener("submit", (event) => {
  event.preventDefault();

  const thirdNumber = Number.parseInt(third.value);
  const fourthNumber = Number.parseInt(fourth.value);

  div2.innerHTML = "<p>" + multiplicar(thirdNumber, fourthNumber) + "</p>";
});