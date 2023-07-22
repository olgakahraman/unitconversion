let input = document.querySelector("#inputText");

let convertBtn = document.querySelector("#convertBtn");

let metersStart = document.querySelector("#metersStart");
let metersResult = document.querySelector("#metersResult");

let feetStart = document.querySelector("#feetStart");
let feetResult = document.querySelector("#feetResult");

let litersStart = document.querySelector("#litersStart");
let litersResult = document.querySelector("#litersResult");

let gallonsStart = document.querySelector("#gallonsStart");
let gallonsResult = document.querySelector("#gallonsResult");

let kilosStart = document.querySelector("#kilosStart");
let kilosResult = document.querySelector("#kilosResult");

let poundsStart = document.querySelector("#poundsStart");
let poundsResult = document.querySelector("#poundsResult");

convertBtn.addEventListener("click", function () {
  metersStart.innerHTML = input.value;
  metersResult.innerHTML = input.value * 0.3048;
  feetStart.innerHTML = input.value;
  feetResult.innerHTML = input.value * 3.2808;
  litersStart.innerHTML = input.value;
  litersResult.innerHTML = input.value * 3.7854;
  gallonsStart.innerHTML = input.value;
  gallonsResult.innerHTML = input.value * 0.2641;
  kilosStart.innerHTML = input.value;
  kilosResult.innerHTML = input.value * 0.4535;
  poundsStart.innerHTML = input.value;
  poundsResult.innerHTML = input.value * 2.2046;
});

toggleBtn.addEventListener("click", () => {
  let body = document.querySelector("body");

  if (toggleBtn.classList.contains("toggled")) {
    toggleBtn.classList.remove("toggled");
    body.classList.remove("dark");
    lightenText.classList.remove("unselected");
    darkenText.classList.add("unselected");
  } else {
    toggleBtn.classList.add("toggled");
    body.classList.add("dark");
    lightenText.classList.add("unselected");
    darkenText.classList.remove("unselected");
  }
});
