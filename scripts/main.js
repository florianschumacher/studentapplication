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


document.getAttribute('data-href', () => {
        if(this.getAttribute.value = '')
        document.write.toggle__head('adsfghjk')
        })
