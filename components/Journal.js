import createElement from '../ui-framework/index'

export default () => {
    const journalContainer = createElement('div', document.body, 'card__section', ' ', 'journalpage');
    const journalForm = createElement('form', journalContainer);
    const journalSubmit = createElement('button', journalForm, 'journal__submit', 'Rate Today ★ ');
    const journalBox = createElement('section', journalForm, 'journal__box');
    const journalBoxHeadline = createElement('h2', journalBox, 'journal__box--h2', 'Yesterday:');
    const journalBoxNaming1 = createElement('p', journalBox, 'journal__box--namings', 'Rating:');
    const journalStarRatingContainer = createElement('div', journalBox, 'rating', ' ', 'starscontainer');
    
    let i = 5;
    for (i; i > 0; i--) {
        const item = 'stars'+i;
        let star = document.getElementById('starscontainer');
        star.insertAdjacentHTML('beforeend', '<input type="radio" id="'+item+'" name="rating" value="'+i+'" /><label for="'+item+'">'+i+'</label>');
    } 
    
    const journalBoxNaming2 = createElement('p', journalBox, 'journal__box--namings', 'Comprehension:');
    const journalBoxRatingContainer = createElement('div', journalBox, 'rating__box',  ' ', 'ratingboxcontainer');
    
    let j = 10;
    for (j; j > 0; j--) {
        const boxitem = 'box'+j;
        let box = document.getElementById('ratingboxcontainer');
        box.insertAdjacentHTML('beforeend', '<input type="radio" id="'+boxitem+'" class="boxrating" name="comprehension" value="'+j+'" /><label for="'+boxitem+'">'+j+'</label>');
    }
    
    const journalBoxNaming3 = createElement('p', journalBox, 'journal__box--namings',  'Motto:');
    const journalBoxMotto = createElement('article', journalBox, 'journal__box--mottocontent',  '"Thats life in the city"');  
    const journalBoxNaming4 = createElement('p', journalBox, 'journal__box--namings',  'Notes:');
    const journalBoxNotes = createElement('article', journalBox, 'journal__box--notescontent',  'Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque.');  
}