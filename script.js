window.addEventListener("scroll", function() {
    const header = document.getElementById('header')
    header.classList.toggle('scroll', window.scrollY > 0)
})