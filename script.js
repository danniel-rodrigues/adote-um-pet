let btnMenu = document.querySelector(".btn-abrir-menu")
let menu = document.querySelector(".mobile-menu")
let overlay = document.querySelector(".overlay-menu")

/* Abrir menu mobile */
btnMenu.addEventListener("click", () => {
    menu.classList.add("abrir-menu")
})

/* Fechar menu mobile */
menu.addEventListener("click", () => {
    menu.classList.remove("abrir-menu")
})

overlay.addEventListener("click", () => {
    menu.classList.remove("abrir-menu")
})


/* Intersection Observer para aplicar animações aos elementos quando surgem na tela */
const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
})

const elements = document.querySelectorAll('.animate')
elements.forEach(el => intersectionObserver.observe(el))