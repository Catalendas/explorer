
let random = Math.round(Math.random() * 10)
console.log(random)
let xAttents = 1

function handleClick(event) {
  event.preventDefault()

  let inputNumber = document.querySelector("#inputNumber").value
  
  if (inputNumber == random) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    document.querySelector("h2").innerText = `Acerto em ${xAttents} vezes`
  }
  
  xAttents++
}

function restart(event) {
  event.preventDefault()

  xAttents = 1;

  document.querySelector(".screen2").classList.add("hide")
  document.querySelector(".screen1").classList.remove("hide")

  random = Math.round(Math.random() * 10)
}

