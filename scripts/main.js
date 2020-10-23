import navigateTo from './navigation'
/* import toggleCopy from './toggleheader' */

document
    .querySelectorAll('.nav__button')
    .forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault()
            navigateTo(event.target.getAttribute('data-href'))
        })
    })

