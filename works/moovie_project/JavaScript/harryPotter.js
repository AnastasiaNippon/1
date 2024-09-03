// Блок с цитатами по Гарри Поттеру
$(document).ready(function () {
  generateQuote();

  function generateQuote() {
    let quotes = [
      [
        "Where your treasure is, there will your heart be also.",
        "Albus Dumbledore",
      ],
      ["Not my daughter, you bitch!", "Molly Weasley"],
      [
        "You think the dead we loved ever truly leave us? You think that we don’t recall them more clearly than ever in times of great trouble? Your father is alive in you, Harry, and shows himself plainly when you have need of him.",
        "Albus Dumbledore",
      ],
      [
        "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
        "Albus Dumbledore",
      ],
      [
        "Indeed, your failure to understand that there are things much worse than death has always been your greatest weakness.",
        "Quote from Dumbledore to Voldermort",
      ],
      [
        "I say there are spots that don’t come off… Spots that never come off, d’you know what I mean.",
        "Mad-Eye Moody",
      ],
      ["Nothing like a nighttime stroll to give you ideas.", "Mad-Eye Moody"],
      [
        "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        "Sirius Black",
      ],
      [
        "I sometimes find, and I am sure you know the feeling, that I simply have too many thoughts and memories crammed into my mind…. At these times… I use the Pensieve. One simply siphons the excess thoughts from one’s mind, pours them into the basin, and examines them at one’s leisure.",
        "Albus Dumbledore",
      ],
      [
        "Curiosity is not a sin… But we should exercise caution with our curiosity… yes, indeed.",
        "Albus Dumbledore",
      ],
      [
        "In dreams, we enter a world that’s entirely our own.",
        "Albus Dumbledore",
      ],
      [
        "To the well-organized mind, death is but the next great adventure.",
        "Albus Dumbledore",
      ],
      [
        "We must try not to sink beneath our anguish, Harry, but battle on.",
        "Albus Dumbledore",
      ],
      [
        "It is the unknown we fear when we look upon death and darkness, nothing more.",
        "Albus Dumbledore",
      ],
      ["Ah, music. A magic beyond all we do here!", "Albus Dumbledore"],
      [
        "Indifference and neglect often do much more damage than outright dislike …We wizards have mistreated and abused our fellows for too long, and we are now reaping our reward.",
        "Albus Dumbledore",
      ],
      [
        "People find it far easier to forgive others for being wrong than being right.",
        "Albus Dumbledore",
      ],
      [
        "It does not do to dwell on dreams and forget to live.",
        "Albus Dumbledore",
      ],
      [
        "Age is foolish and forgetful when it underestimates youth.",
        "Albus Dumbledore",
      ],
      [
        "When you have seen as much of life as I have, you will not underestimate the power of obsessive love.",
        "Albus Dumbledore",
      ],
      [
        "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        "Albus Dumbledore",
      ],
      [
        "Fear of a name increases fear of the thing itself.",
        "Albus Dumbledore",
      ],
      [
        "You sort of start thinking anything’s possible if you’ve got enough nerve.",
        "Ginny Weasley",
      ],
      [
        "Hearing voices no one else can hear isn’t a good sign, even in the wizarding world.",
        "Ron Weasley",
      ],
      [
        "It is our choices… that show what we truly are, far more than our abilities.",
        "Albus Dumbledore",
      ],
      [
        "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        "Arthur Weasley",
      ],
      [
        "As much money and life as you could want! The two things most human beings would choose above all – the trouble is, humans do have a knack of choosing precisely those things that are worst for them.",
        "Albus Dumbledore",
      ],
      [
        "There is no good or evil: only power and those too weak to seek it.",
        "Quirinus Quirrell",
      ],
      [
        "The mind is not a book, to be opened at will and examined at leisure. Thoughts are not etched on the inside of skulls, to be perused by an invader. The mind is a complex and many-layered thing.",
        "Severus Snape",
      ],
      [
        "Indifference and neglect often do much more damage than outright dislike.",
        "Albus Dumbledore",
      ],
      [
        "The truth is a beautiful and terrible thing, and should therefore be treated with caution.",
        "Albus Dumbledore",
      ],
      [
        "Youth cannot know how age thinks and feels. But old men are guilty if they forget what it was to be young.",
        "Albus Dumbledore",
      ],
      [
        "He chose the boy he thought most likely to be a danger to him … and notice this, Harry. He chose, not the pureblood (which according to his creed, is the only kind of wizard worth being or knowing), but the half-blood, like himself. He saw himself in you before he had ever seen you, and in marking you with that scar, he did not kill you, as he intended, but gave you powers, and a future, which have fitted you to escape him not once, but four times so far.",
        "Albus Dumbledore",
      ],
      [
        "Numbing the pain for a while will make it worse when you finally feel it.",
        "Albus Dumbledore",
      ],
      ["Time is making fools of us again.", "Albus Dumbledore"],
    ];

    let randomQuote = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomQuote];
    console.log(selectedQuote);
    $("#HP__quote").text('"' + selectedQuote[0] + '"');
    $("#HP__author").text("—" + selectedQuote[1]);
  }

  $("#generate").click(function () {
    generateQuote();
  });
});
//Герои
const apiURL = "https://harry-potter-api-en.onrender.com/db";

fetch(apiURL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.characters);

    data.characters.forEach(
      (element) =>
        (document.getElementById("HP__characters").innerHTML +=
          '<div id="HP_character">' +
          '<img src="' +
          element.image +
          '" width="200px" height="260spx">' +
          '<div id="name">' +
          element.character +
          "</div>")
    ) + "</div>";
  })
  .catch((error) => console.log(error));

//Книги
async function getHarryPotterBooks() {
  const url = "https://harry-potter-api-en.onrender.com/db";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }
    const data = await response.json();

    const bookList = document.getElementById("book-list");

    // Assuming the data returned has a `books` property
    data.books.forEach((book) => {
      const bookDiv = document.createElement("div");
      bookDiv.className = "HP__book";
      bookDiv.innerHTML = `
      
              <h2>${book.title}</h2>
              <p><strong>Author:</strong> ${book.author}</p>
              <p><strong>Release Day:</strong> ${book.releaseDay}</p>
             
          `;
      bookList.appendChild(bookDiv);
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Call the function
getHarryPotterBooks();
