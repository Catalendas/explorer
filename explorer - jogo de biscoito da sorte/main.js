const mesages = [
  "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
  "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.",
  "A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.",
  "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.",
  "Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.",
  "A perseverança é a mãe da boa sorte.",
  "O homem é assim o árbitro constante de sua própria sorte. Ele pode aliviar o seu suplício ou prolongá-lo indefinidamente. Sua felicidade ou sua desgraça dependem da sua vontade de fazer o bem.",
  "Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.",
  "Sorte é estar pronto quando a oportunidade vem.",
  "A sorte favorece a mente bem preparada.",
  "Que sorte possuir uma grande inteligência: nunca te faltam asneiras para dizer.",
  "A sorte do egoísta é viver sem preocupações; o seu castigo é morrer sem afetos."
]

let startButton = document.querySelector("#start")

// startButton.addEventListener("click", openCookie)


function openCookie() {
  // console.log("foi")
  let random = Math.round(Math.random() * 11)

  document.getElementById("text").innerText = mesages[random]
  document.querySelector(".screen1").classList.add("hide")
  document.querySelector(".screen2").classList.remove("hide")
  document.querySelector(".screen2").classList.add("flex")

}

function openNewCookie() {
  document.querySelector(".screen1").classList.remove("hide")
  // document.getElementById("text").innerText = mesages[random]
  document.querySelector(".screen2").classList.add("hide")
  document.querySelector(".screen2").classList.remove("flex")
}
