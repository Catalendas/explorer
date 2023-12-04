import state from "./state.js"
import * as events from "./events.js"
import { updateTimer } from "./timer.js"

export function start(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds  

  updateTimer(minutes, seconds)

  events.registerControls()
  events.setMinutes()
  events.registerSounds()
}