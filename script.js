// // Adapta o Header quando o usuário faz scroll na página
// window.addEventListener("scroll", function() {
//     const header = document.getElementById('header')
//     header.classList.toggle('scroll', window.scrollY > 0)
// })


const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
})

const elements = document.querySelectorAll('.animate')
elements.forEach(el => intersectionObserver.observe(el))