import state from "./state.js"
import * as el from "./elementes.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
}

export function set() {
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateTimer()
}

export function plus() {
  el.minutes.textContent = String(Number(el.minutes.textContent) + 5).padStart(2, "0")
  // console.log(state)
}

export function minus() {
  el.minutes.textContent = String(Number(el.minutes.textContent) - 5).padStart(2, "0")

  if ( Number(el.minutes.textContent) < 0) {
    el.minutes.textContent = "00"
    el.seconds.textContent = "00"
  }
  // console.log(state)
}

export function rain() {
  

  if (rain.name === state.sound) {
    sounds.rainAudio.pause()
    state.sound = ""
    return
  }

  sounds.shopAudio.pause()
  sounds.treeAudio.pause()
  sounds.flameAudio.pause()
  sounds.rainAudio.play()
  state.sound = rain.name
  console.log(state)
}

export function flame() {

  if (flame.name === state.sound) {
    sounds.flameAudio.pause()
    state.sound = ""
    return
  }

  sounds.shopAudio.pause()
  sounds.treeAudio.pause()
  sounds.flameAudio.play()
  sounds.rainAudio.pause()

  state.sound = flame.name
}

export function tree() {

  if (tree.name === state.sound) {
    sounds.treeAudio.pause()
    state.sound = ""
    return
  }

  sounds.shopAudio.pause()
  sounds.treeAudio.play()
  sounds.flameAudio.pause()
  sounds.rainAudio.pause()
  state.sound = tree.name
}

export function storefront() {

  if (storefront.name === state.sound) {
    sounds.shopAudio.pause()
    state.sound = ""
    return 
  }

  sounds.shopAudio.play()
  sounds.treeAudio.pause()
  sounds.flameAudio.pause()
  sounds.rainAudio.pause()
  state.sound = storefront.name
}