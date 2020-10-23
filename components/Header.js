import createElement from '../ui-framework/index'

export default () => {
   const header = createElement('header', document.body, 'header');
   const headerHeadline = createElement('h1', header, 'toggle__head', 'Journal', 'headLine');
}