//Блок с цитатами
$(document).ready(function () {

  const obiwanQuotes = [// Obi-Wan Kenobi Quotes
  "You must do what you feel is right, of course. @-Obi-Wan Kenobi",
  "Mos Eisley Spaceport. You will never find a more wretched hive of scum and villainy. We must be cautious. @-Obi-Wan Kenobi",
  "Your eyes can deceive you. Don’t trust them. @-Obi-Wan Kenobi",
  "Remember... the Force will be with you, always. @-Obi-Wan Kenobi",
  "In my experience, there is no such thing as luck. @-Obi-Wan Kenobi",
  "These aren't the droids you're looking for. @-Obi-Wan Kenobi",
  "I felt a great disturbance in the Force, as if millions of voices suddenly cried out in terror and were suddenly silenced. @-Obi-Wan Kenobi",
  "Use the Force, Luke.@-Obi-Wan Kenobi",
  "You can't win, Darth. If you strike me down, I shall become more powerful than you could possibly imagine. @-Obi-Wan Kenobi",
  "That's no moon. It's a space station. @-Obi-Wan Kenobi",
  "Luke! Don't give in to hate. That leads to the Dark Side. @-Obi-Wan Kenobi",
  "Who's the more foolish, the fool or the fool who follows him? @-Obi-Wan Kenobi",
  "And these blast points, too accurate for Sandpeople. Only Imperial Stormtroopers are so precise. @-Obi-Wan Kenobi"];


  const darthvaderQuotes = ["I find your lack of faith disturbing. @-Darth Vader",
  "The circle is now complete. When I left you, I was but the learner. Now I am the master. @-Darth Vader",
  "The Force is with you, young Skywalker, but you are not a Jedi yet. @-Darth Vader",
  "No. I am your father. @-Darth Vader",
  "Impressive. Most impressive. @-Darth Vader",
  "I am altering the deal. Pray I don't alter it any further. @-Darth Vader",
  "You underestimate the power of the Dark Side. If you will not fight, then you will meet your destiny. @-Darth Vader",
  "You have failed me for the last time, Admiral! @-Darth Vader",
  "The Force is strong with this one. @-Darth Vader",
  "The ability to destroy a planet is insignificant next to the power of the Force. @-Darth Vader"];

  const yodaQuotes = ["Do. Or do not. There is no try. @-Yoda",
  "You must unlearn what you have learned. @-Yoda",
  "When nine hundred years old you reach, look as good you will not. @-Yoda",
  "Truly wonderful, the mind of a child is. @-Yoda",
  "A Jedi uses the Force for knowledge and defense, never for attack. @-Yoda",
  "Adventure. Excitement. A Jedi craves not these things. @-Yoda",
  "Size matters not. Judge me by my size, do you? @-Yoda",
  "Fear is the path to the dark side…fear leads to anger…anger leads to hate…hate leads to suffering. @-Yoda",
  "Wars not make one great. @-Yoda",
  "Luminous beings are we…not this crude matter. @-Yoda",
  "Difficult to see. Always in motion is the future. @-Yoda",
  "Control, control, you must learn control! @-Yoda"];

  const lukeskywalkerQuotes = ["I'll never turn to the Dark Side. You've failed, your highness. I am a Jedi, like my father before me. @-Luke Skywalker",
  "If there's a bright center to the universe, you're on the planet that it's farthest from. @-Luke Skywalker",
  "I'm Luke Skywalker. I'm here to rescue you. @-Luke Skywalker",
  "The Force is strong in my family. My father has it. I have it. My sister has it. You have that power, too. @-Luke Skywalker",
  "But I was going into Tosche Station to pick up some power converters! @-Luke Skywalker"];

  const hansoloQuotes = ["Chewie...we're home. @-Han Solo",
  "Never tell me the odds. @-Han Solo",
  "Women always figure out the truth. Always. @-Han Solo",
  "Fast ship? You've never heard of the Millennium Falcon? It's the ship that made the Kessel Run in less than twelve parsecs. @-Han Solo",
  "Great shot, kid, that was one in a million! @-Han Solo",
  "Boring conversation anyway. LUKE, WE'RE GONNA HAVE COMPANY! @-Han Solo",
  "No reward is worth this. @-Han Solo",
  "Wonderful girl. Either I'm going to kill her or I'm beginning to like her. @-Han Solo",
  "Look, Your Worshipfulness, let's get one thing straight. I take orders from just one person: me. @-Han Solo"];

  const leiaQuotes = ["Help me, Obi-Wan Kenobi. You're my only hope. @-Princess Leia Organa",
  "Aren't you a little short for a stormtrooper? @-Princess Leia Organa",
  "Someone has to save our skins. Into the garbage chute, fly boy. @-Princess Leia Organa",
  "Will someone get this big walking carpet out of my way? @-Leia Organa",
  "You needn't worry about your reward. If money is all that you love, then that's what you'll receive. @-Leia Organa"];

  const c3poQuotes = ["I suggest a new strategy, R2: let the Wookiee win. @-C-3PO",
  "We seem to be made to suffer. It's our lot in life. @-C-3PO",
  "Sir, the possibility of successfully navigating an asteroid field is approximately 3,720 to 1. @-C-3PO",
  "Sir, it's quite possible this asteroid is not entirely stable. @-C-3PO",
  "Don’t call me a mindless philosopher, you overweight glob of grease! @-C-3PO"];

  const emperorQuotes = ["Young fool... Only now, at the end, do you understand... @-The Emperor",
  "Your feeble skills are no match for the power of the Dark Side. @-The Emperor",
  "Now, you will pay the price for your lack of vision! @-The Emperor",
  "I will make it legal. @-Darth Sidious"];

  const miscQuotes = ["Many Bothans died to bring us this information. @-Mon Mothma",
  "Charming to the last. You don't know how hard I found it, signing the order to terminate your life. @-Governor Tarkin",
  "It's a trap! @-Admiral Ackbar",
  "So this is how liberty dies…with thunderous applause. @-Padmé Amidala",
  "He's no good to me dead. @-Boba Fett",
  "I've got a bad feeling about this. @-Various characters in Star Wars",
  "May the force be with you. @-Various characters in Star Wars"];

  const quoteArray = [

  // Obi-Wan Kenobi Quotes
  obiwanQuotes,

  // Darth Vader Quotes
  darthvaderQuotes,

  // Yoda Quotes
  yodaQuotes,

  // Luke Skywalker Quotes
  lukeskywalkerQuotes,

  // Han Solo Quotes
  hansoloQuotes,

  // Princess Leia Organa Quotes
  leiaQuotes,

  // C-3PO Quotes
  c3poQuotes,

  // Emperor / Darth Sidious Quotes
  emperorQuotes,

  // Miscellaneous Quotes
  miscQuotes];

  function generateQuote() {    
    const randomArray = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    const randomQuote = randomArray[Math.floor(Math.random() * randomArray.length)];
    const author = randomQuote.split("@");
    document.querySelector(".sw_quotes__content").innerHTML = '"' + author[0] + '"';    
    document.querySelector(".sw_quotes__author").innerHTML = author[1];    
  }

  document.querySelector(".sw_quotes__btn").onclick = generateQuote;

  generateQuote();

});


// movie section

document.addEventListener('DOMContentLoaded', (el) => {
  const swMovieSection = document.getElementById('star-wars-movies');
  const swStartSection = document.getElementById('star-wars');
  const swNextBtn = document.querySelector('.sw_btn_next');
  const swLogoAnimation = document.querySelector('.sw_logo');
  const swBackBtn = document.querySelector('.sw_movies__btn-back');

  swNextBtn.addEventListener('click', (el) => { 
    swLogoAnimation.classList.add('sw_logo_animation');    
  })

  swLogoAnimation.addEventListener('animationend', (el) => {
    // Скрыть стартовую секцию      
    swStartSection.classList.toggle('star-wars_hide');
    //  Показать секцию с фильмами  
    swMovieSection.classList.toggle('star-wars-movies_visible');
  })

  // Не работает. Проверить!
swBackBtn.addEventListener('click', (el) => {
  // Скрыть секцию с фильмами 
  swMovieSection.classList.toggle('star-wars-movies_hide');

  swStartSection.classList.toggle('star-wars_visible');
  
  

})

})




// movie cards

async function getSwMovies() {
  let apiUrl = 'https://swapi.dev/api/films/';

  try {
    const response = await fetch(apiUrl);
    if(!response.ok) {
      throw new Error('Данные с сервера не получены');
    }
    const data = await response.json();

    const movieList = document.querySelector('.sw_card__container');
       
       
    data.results.forEach(result => {
      const movieCont = document.createElement('div');
      movieCont.className = 'sw_movie_card';
      movieCont.innerHTML = `            
      <h2 class="sw_card_title">${result.title}</h2>
      <p class = "sw_card_dir">Director: ${result.director}</p>
      <p class = "sw_card_release">Release Date: ${result.release_date}</p>`;
      movieList.appendChild(movieCont)  
})
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

getSwMovies();

