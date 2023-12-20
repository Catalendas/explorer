export function handleBg(pathname) {
  if (pathname == "/") {
    document.querySelector("body").style.backgroundImage = "url(./assets/mountains-universe-1.png)"
  } else if (pathname == "/about") {
    document.querySelector("body").style.backgroundImage = "url(./assets/mountains-universe02.png)"
  } else if (pathname == "/explorer") {
    document.querySelector("body").style.backgroundImage = "url(./assets/mountains-universe-3.png)"
  }
}