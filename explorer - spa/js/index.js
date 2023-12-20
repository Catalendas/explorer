import { Router } from "./router.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/sobre", "/pages/sobre.html")
router.add("/contato", "/pages/contato.html")
router.add(404, "/pages/404.html")

console.log(router.routes)

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()