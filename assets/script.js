// Navbar
const navbarHamburguer = document.querySelector('.navbarHamburguer')
const navbarHeader = document.querySelector('.navbarHeader')

navbarHamburguer.addEventListener('click', () => {
    navbarHamburguer.classList.toggle('active')
    navbarHeader.classList.toggle('active')
})

document.querySelectorAll('.navbarHeaderLink').forEach(n => n.addEventListener('click', () => {
    navbarHamburguer.classList.remove('active')
    navbarHeader.classList.remove('active')
}))

// Posts
document.querySelectorAll('[linkPosts]').forEach(link => {
    const postsArticle = document.getElementById('postsArticle')

    link.onclick = function(e) {
        e.preventDefault()
        fetch(link.href)
            .then(resp => resp.text())
            .then(html => postsArticle.innerHTML = html)
    }
})