import { Modal } from "./modal.js"
import { AlertError} from "./alert-error.js"

 const form = document.querySelector("form")
 const inputHeight = document.querySelector("#altura")
 const inputWeight = document.querySelector("#peso")

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

 form.onsubmit = (e) => {
  e.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumbert(weight) || notNumbert(height)

  if (showAlertError) {
    AlertError.open()
    return
  }

  AlertError.close()

  const imc = (weight / ((height / 100) ** 2)).toFixed(2)

  Modal.message.innerText = `Seu IMC é de ${imc}`
  Modal.open();
 }

 function notNumbert(value) {
  return isNaN(value) || value == ""
}


 