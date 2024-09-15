const apiKey = "B1lmuNCxfkD5kzGqi6_q";
const headers = {
  Authorization: `Bearer ${apiKey}`,
};

const characterContainer = document.getElementById("character-container");
const button = document.getElementById("lotr__button");
const errorContainer = document.createElement("div");
errorContainer.style.color = "red";
characterContainer.parentNode.insertBefore(
  errorContainer,
  characterContainer.nextSibling
);

const loadingContainer = document.createElement("div");
loadingContainer.textContent = "Загрузка данных...";
loadingContainer.style.display = "none";
characterContainer.parentNode.insertBefore(
  loadingContainer,
  characterContainer.nextSibling
);

const fetchAllCharacters = async () => {
  try {
    loadingContainer.style.display = "block";
    const url = "https://the-one-api.dev/v2/character";
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data.docs;
  } catch (error) {
    errorContainer.textContent = `Ошибка: ${error.message}`;
  } finally {
    loadingContainer.style.display = "none";
    console.log("Запрос завершен");
  }
};

button.addEventListener("click", async () => {
  errorContainer.textContent = "";
  try {
    const characters = await fetchAllCharacters();
    if (characters) {
      characterContainer.innerHTML = "";
      const randomIndex = Math.floor(Math.random() * characters.length);
      const character = characters[randomIndex];
      const characterElement = document.createElement("div");
      characterElement.innerHTML = `
          <h3>${character.name}</h3>
          <p>Статья: ${character.wikiUrl}</p>
          <p>Раса: ${character.race}</p>
          <p>Пол: ${character.gender}</p>
          <p>Дата рождения: ${character.birth}</p>
          <p>Дата смерти: ${character.death}</p>
          <p>Волосы: ${character.hair}</p>
          <p>Рост: ${character.height}</p>
          <p>Королевство: ${character.realm}</p>
          <p>Супруг/а: ${character.spouse}</p>
        `;
      characterContainer.appendChild(characterElement);
    }
  } catch (error) {
    errorContainer.textContent = `Ошибка: ${error.message}`;
  }
});

// Movie gallery
const movies = [
  {
    title: "Lord of the Rings: The Fellowship of the Ring",
    genres: "Action/Adventure, Sci-Fi/Fantasy",
    year: "2001",
    image: "/moovie_project/assets/images/LOTR/ring.jpg",
  },
  {
    title: "Lord of the Rings: The Two Towers",
    genres: "Action/Adventure, Oscar Winners, Sci-Fi/Fantasy",
    year: "2002",
    image: "/moovie_project/assets/images/LOTR/towers.jpg",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    genres: "Action/Adventure, Oscar Winners, Sci-Fi/Fantasy",
    year: "2003",
    image: "/moovie_project/assets/images/LOTR/king.jpg",
  },
  {
    title: "Hobbit: An Unexpected Journey",
    genres: "Action/Adventure, Sci-Fi/Fantasy",
    year: "2012",
    image: "/moovie_project/assets/images/LOTR/journey.jpg",
  },
  {
    title: "The Hobbit: The Desolation of Smaug",
    genres: "Action/Adventure, Sci-Fi/Fantasy",
    year: "2013",
    image: "/moovie_project/assets/images/LOTR/smaug.jpg",
  },
  {
    title: "The Hobbit: The Battle of the Five Armies",
    genres: "Action/Adventure, Drama, Sci-Fi/Fantasy, Suspense/Thriller",
    year: "2014",
    image: "/moovie_project/assets/images/LOTR/armies.jpg",
  },
];

const lotrWrapper = document.querySelector('.movies-swiper-wrapper');

movies.forEach(movie => {
  const lotrSlide = document.createElement('div');
  lotrSlide.classList.add('swiper-slide');

  const lotrImg = document.createElement('img');
  lotrImg.src = movie.image;
  lotrImg.alt = movie.title;

  const lotrTitle = document.createElement('div');
  lotrTitle.classList.add('movie-title');
  lotrTitle.textContent = movie.title;

  const lotrGenres = document.createElement('div');
  lotrGenres.classList.add('movie-genres');
  lotrGenres.textContent = movie.genres;

  const lotrYear = document.createElement('div');
  lotrYear.classList.add('movie-year');
  lotrYear.textContent = `Published: ${movie.year}`;

  lotrSlide.appendChild(lotrImg);
  lotrSlide.appendChild(lotrTitle);
  lotrSlide.appendChild(lotrGenres);
  lotrSlide.appendChild(lotrYear);
  lotrWrapper.appendChild(lotrSlide);
});

const lotrContainer = new Swiper('.movies-swiper', {
slidesPerView: 3,
spaceBetween: 30,
loop: true,
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
breakpoints: {
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
},
});


const books = [
  { title: "The Hobbit", year: "1937", image: "/moovie_project/assets/images/LOTR/hobbit.jpg" },
  { title: "The Fellowship of the Ring", year: "1954", image: "/moovie_project/assets/images/LOTR/fellowship.jpg" },
  { title: "The Two Towers", year: "1954", image: "/moovie_project/assets/images/LOTR/two_towers.jpg" },
  { title: "The Return of the King", year: "1955", image: "/moovie_project/assets/images/LOTR/return.jpg" },
  { title: "The Silmarillion", year: "1977", image: "/moovie_project/assets/images/LOTR/silmarillion.jpg" },
  { title: "Unfinished Tales of Numenor and Middle-earth", year: "1980", image: "/moovie_project/assets/images/LOTR/unfinished.jpg" },
  { title: "The Children of Hurin", year: "2007", image: "/moovie_project/assets/images/LOTR/children.jpg" },
  { title: "Beren and Luthien", year: "2017", image: "/moovie_project/assets/images/LOTR/beren.jpg" },
  { title: "The Fall of Gondolin", year: "2018", image: "/moovie_project/assets/images/LOTR/fall.jpg" },
];

const booksWrapper = document.querySelector('.books-swiper-wrapper');

        books.forEach(book => {
            const booksSlide = document.createElement('div');
            booksSlide.classList.add('swiper-slide');

            const booksImg = document.createElement('img');
            booksImg.classList.add('book-img');
            booksImg.src = book.image;
            booksImg.alt = book.title;

            const booksTitle = document.createElement('div');
            booksTitle.classList.add('book-title');
            booksTitle.textContent = book.title;

            const booksYear = document.createElement('div');
            booksYear.classList.add('book-year');
            booksYear.textContent = `Published: ${book.year}`;

            booksSlide.appendChild(booksImg);
            booksSlide.appendChild(booksTitle);
            booksSlide.appendChild(booksYear);
            booksWrapper.appendChild(booksSlide);
        });

        const booksSwiper = new Swiper('.books-swiper', {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        });