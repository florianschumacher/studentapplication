export default function navigateTo(sectionId) {
    document.querySelectorAll('.card__section')
        .forEach(element => {
            element.classList.add('section--hidden')
        })
    document.querySelector(sectionId).classList.remove('section--hidden')
}