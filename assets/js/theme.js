const body = document.querySelector('body')
const changeTheme = document.querySelector('.toggle')

changeTheme.addEventListener('click', (e) => {
    let positionToggle = e.target.id
    let indicator = document.querySelector('.checked')

    if (positionToggle === 'one') {
        body.className = `theme-${positionToggle}`
        indicator.style.left = '5px'

    } else if (positionToggle === 'two') {
        body.className = `theme-${positionToggle}`
        indicator.style.left = '27px'
    } else if (positionToggle === 'tree') {
        body.className = `theme-${positionToggle}`
        indicator.style.left = '50px'
    }
})
