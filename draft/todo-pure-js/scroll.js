const element = document.querySelector('#select')

addEventListener('scroll', (e) => {
    if(window.innerHeight + window.scrollY >= element.offsetTop)
        console.log(true)
})