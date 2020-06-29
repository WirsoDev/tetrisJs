const btn = document.querySelector('#start-button')
const score = document.querySelector('.values h3 span')
const start = document.querySelector('.grid')

btn.addEventListener('click', () => {

    if(btn.innerHTML == 'Click to start'){
        btn.innerText = 'Pause'
    }else if(btn.innerHTML == 'Pause'){
        btn.innerText = 'Click to start'
    }
})

btn.addEventListener('mouseover', () => {
    start.classList.add('hover')
})

btn.addEventListener('mouseout', () => {
    start.classList.remove('hover')
})



