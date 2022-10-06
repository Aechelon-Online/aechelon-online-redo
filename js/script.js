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

const techstackFlexBox = document.querySelector(".techstack-page__flexbox")

const flexBoxes = [
    {
        id: 1,
        name: "HTML"
    },
    {
        id: 2,
        name: "CSS"
    },
    {
        id: 3,
        name: "Javascript"
    },
    {
        id: 4,
        name: "SASS"
    },
    {
        id: 5,
        name: "Bootstrap"
    },
    {
        id: 6,
        name: "API"
    }
]

techstackFlexBox.innerHTML = flexBoxes.map(flexbox => 
    

        `<div class="techstack-page__flexbox-${flexbox.id} techstack-flexbox">
            <div class="techstack-page__flexbox-${flexbox.id}-img">
            <span class="demo-button">
                <input class="example-button" type="button" value="Demo">
                <input class="code-button" type="button" value="Code">
            </span>
            </div>
            <h3 class="techstack-page__flexbox-text">${flexbox.name}</h3>
        </div>`).join('')
    
    console.log(techstackFlexBox)