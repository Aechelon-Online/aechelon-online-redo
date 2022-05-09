const titles = document.querySelectorAll(".titles")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    rootMargin: "-100px",
})

titles.forEach(title => {
    observer.observe(title)
})


