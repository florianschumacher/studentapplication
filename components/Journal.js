import createElement from '../ui-framework/index'

export default () => {
console.log('Journal.js Function is in da house');
    const journalContainer = createElement('div', document.body, 'card__section', ' ', 'journalpage');
    const journalForm = createElement('form', journalContainer);
    const journalSubmit = createElement('button', journalForm, 'journal__submit', 'Rate Today ★ ');
    const journalBox = createElement('section', journalForm, 'journal__box');
    const journalBoxHeadline = createElement('h2', journalBox, 'journal__box--h2', 'Yesterday:');
    const journalBoxNaming = createElement('p', journalBox, 'journal__box--namings', 'Rating:');
    const journalStarRatingContainer = createElement('div', journalBox, 'rating');
}

/*

                <h2 class="journal__box--h2">Yesterday:</h2>
                <p class="journal__box--namings">Rating:</p>
                <div class="rating">
                    <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
                    <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4
                        stars</label>
                    <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
                    <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2
                        stars</label>
                    <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1
                        star</label>
                </div>
                <p class="journal__box--namings">Comprehension:</p>
                <div class="rating__box">
                    <input type="radio" id="box10" class="boxrating" name="boxrating" value="10" /><label for="box10"
                        title="Rocks!">10</label>
                    <input type="radio" id="box9" class="boxrating" name="boxrating" value="9" /><label for="box9"
                        title="Pretty good">9</label>
                    <input type="radio" id="box8" class="boxrating" name="boxrating" value="8" /><label for="box8"
                        title="Meh">8</label>
                    <input type="radio" id="box7" class="boxrating" name="boxrating" value="7" /><label for="box7"
                        title="Kinda bad">7</label>
                    <input type="radio" id="box6" class="boxrating" name="boxrating" value="6" /><label for="box6"
                        title="Sucks big time">6</label>
                    <input type="radio" id="box5" class="boxrating" name="boxrating" value="5" /><label for="box5"
                        title="Rocks!">5</label>
                    <input type="radio" id="box4" class="boxrating" name="boxrating" value="4" /><label for="box4"
                        title="Pretty good">4</label>
                    <input type="radio" id="box3" class="boxrating" name="boxrating" value="3" /><label for="box3"
                        title="Meh">3</label>
                    <input type="radio" id="box2" class="boxrating" name="boxrating" value="2" /><label for="box2"
                        title="Kinda bad">2</label>
                    <input type="radio" id="box1" class="boxrating" name="boxrating" value="1" /><label for="box1"
                        title="Sucks big time">1</label>
                </div>
                <p class="journal__box--namings">Motto:</p>
                <article class="journal__box--mottocontent">"Thats life in the city"</article>
                <p class="journal__box--namings">Notes:</p>
                <article class="journal__box--notescontent">
                    Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi.
                    Et quidem se repellere, idque instituit docere sic omne animal,
                    simul atque.
                </article>
            </form>
        </section>
    </div> 
    */