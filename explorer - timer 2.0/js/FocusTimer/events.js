import { controls, themes } from "./elementes.js";
import * as actions from "./actions.js"
import * as el from "./elementes.js"
import state from "./state.js";
import { updateTimer } from "./timer.js";

export function registerControls() {
  controls.addEventListener("click", (e) => {
    const action = e.target.dataset.action

    if (typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
}



export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateTimer()
    el.minutes.removeAttribute('contenteditable')
  })
}

export function registerSounds() {
  themes.addEventListener("click", (e) => {
    const action = e.target.dataset.action

    if (typeof actions[action] != 'function') {
      return
    }

    
    actions[action]()
  })
}