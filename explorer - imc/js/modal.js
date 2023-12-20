 export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector("span"),
  buttonClose: document.querySelector(".modal button.close"),
  open() {
    this.wrapper.classList.add("open")
  },
  close() {
    this.wrapper.classList.remove("open")
  },
}

Modal.buttonClose.onclick = () => Modal.close()

window.addEventListener("keydown", handleKeyDow)
function handleKeyDow(e) {
  if (e.key === "Escape") {
    Modal.close()
  }
}