import createElement from '../ui-framework/index'

export default () => {
    const footer = createElement('footer', document.body, 'footer');
    const footernav = createElement('nav', footer, 'nav');
    const footernavelement1 = createElement('a', footernav, 'nav__button--home');
    const footernavelement2 = createElement('a', footernav, 'nav__button--codebuddys');
    const footernavelement3 = createElement('a', footernav, 'nav__button--team');
    const footernavelement4 = createElement('a', footernav, 'nav__button--energy');
    const footernavelement5 = createElement('a', footernav, 'nav__button--journalpage');    
}

