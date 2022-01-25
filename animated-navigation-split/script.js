const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
const top_half = document.getElementById('top_half')
const bottom = document.getElementById('bottom_half')


toggle.addEventListener('click', () => {
    nav.classList.toggle('active')    
    top_half.classList.toggle('active')
    bottom_half.classList.toggle('active')
})
