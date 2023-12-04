let darkMode = true
const buttonToggle = document.getElementById("toggle-mode")

buttonToggle.addEventListener("click", (even) => {
  document.documentElement.classList.toggle("light")

  const mode = darkMode ? 'light' : 'dark'

  even.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

  darkMode = !darkMode
})