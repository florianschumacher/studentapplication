import createElement from '../ui-framework/index'

export default () => {
    const journalContainer = createElement('div', document.body, 'card__section', ' ', 'journalpage');
    const journalForm = createElement('form', journalContainer);
    const journalSubmit = createElement('button', journalForm, 'journal__submit', 'Rate Today ★ ');
    const journalBox = createElement('section', journalForm, 'journal__box');
    const journalBoxHeadline = createElement('h2', journalBox, 'journal__box--h2', 'Yesterday:');
    const journalBoxNaming1 = createElement('p', journalBox, 'journal__box--namings', 'Rating:');
    const journalStarRatingContainer = createElement('div', journalBox, 'rating', ' ', 'starscontainer');
    const star1 = document.getElementById('starscontainer');
    star1.insertAdjacentHTML('beforeend', '<input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>');
    const star2 = document.getElementById('starscontainer');
    star2.insertAdjacentHTML('beforeend', '<input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Rocks!">4 stars</label>');
    const star3 = document.getElementById('starscontainer');
    star3.insertAdjacentHTML('beforeend', '<input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Rocks!">3 stars</label>');
    const star4 = document.getElementById('starscontainer');
    star4.insertAdjacentHTML('beforeend', '<input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Rocks!">2 stars</label>');
    const star5 = document.getElementById('starscontainer');
    star5.insertAdjacentHTML('beforeend', '<input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Rocks!">1 stars</label>');
    const journalBoxNaming2 = createElement('p', journalBox, 'journal__box--namings', 'Comprehension:');
    const journalBoxRatingContainer = createElement('div', journalBox, 'rating__box',  ' ', 'ratingboxcontainer');
    const box10 = document.getElementById('ratingboxcontainer');
    box10.insertAdjacentHTML('beforeend', '<input type="radio" id="box10" class="boxrating" name="boxrating" value="10" /><label for="box10">10</label>');
    const box9 = document.getElementById('ratingboxcontainer');
    box9.insertAdjacentHTML('beforeend', '<input type="radio" id="box9" class="boxrating" name="boxrating" value="9" /><label for="box9">9</label>');
    const box8 = document.getElementById('ratingboxcontainer');
    box8.insertAdjacentHTML('beforeend', '<input type="radio" id="box8" class="boxrating" name="boxrating" value="8" /><label for="box8">8</label>');
    const box7 = document.getElementById('ratingboxcontainer');
    box7.insertAdjacentHTML('beforeend', '<input type="radio" id="box7" class="boxrating" name="boxrating" value="7" /><label for="box7">7</label>');
    const box6 = document.getElementById('ratingboxcontainer');
    box6.insertAdjacentHTML('beforeend', '<input type="radio" id="box6" class="boxrating" name="boxrating" value="6" /><label for="box6">6</label>');
    const box5 = document.getElementById('ratingboxcontainer');
    box5.insertAdjacentHTML('beforeend', '<input type="radio" id="box5" class="boxrating" name="boxrating" value="5" /><label for="box5">5</label>');
    const box4 = document.getElementById('ratingboxcontainer');
    box4.insertAdjacentHTML('beforeend', '<input type="radio" id="box4" class="boxrating" name="boxrating" value="4" /><label for="box4">4</label>');
    const box3 = document.getElementById('ratingboxcontainer');
    box3.insertAdjacentHTML('beforeend', '<input type="radio" id="box3" class="boxrating" name="boxrating" value="3" /><label for="box3">3</label>');
    const box2 = document.getElementById('ratingboxcontainer');
    box2.insertAdjacentHTML('beforeend', '<input type="radio" id="box2" class="boxrating" name="boxrating" value="2" /><label for="box2">2</label>');
    const box1 = document.getElementById('ratingboxcontainer');
    box1.insertAdjacentHTML('beforeend', '<input type="radio" id="box1" class="boxrating" name="boxrating" value="1" /><label for="box1">1</label>');
    const journalBoxNaming3 = createElement('p', journalBox, 'journal__box--namings',  'Motto:');
    const journalBoxMotto = createElement('article', journalBox, 'journal__box--mottocontent',  '"Thats life in the city"');  
    const journalBoxNaming4 = createElement('p', journalBox, 'journal__box--namings',  'Notes:');
    const journalBoxNotes = createElement('article', journalBox, 'journal__box--notescontent',  'Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque.');  
}