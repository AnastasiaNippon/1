// Блок с цитатами по игре престолов
const GOTquotesContainer = document.getElementById("GOT__quotes--container");
const GOTbutton = document.getElementById("GOT__button");

document.addEventListener("DOMContentLoaded", getGOTquotes);

async function getGOTquotes() {
  try {
    const GOTfetch = await fetch(
      "https://api.gameofthronesquotes.xyz/v1/random"
    );

    if (!GOTfetch.ok) {
      throw new Error(
        `<p>Возникла ошибка при получении данных с сервера: ${GOTfetch.status}</p>`
      );
    }

    const GOTdata = await GOTfetch.json();
    displayQuotes(GOTdata);
  } catch (error) {
    GOTquotesContainer.innerHTML = `<p>Ошибка: ${error.message}</p>`;
  }
}

function displayQuotes(quote) {
  GOTquotesContainer.innerHTML = `<q class='GOTquote__sentence'>${quote.sentence}</q>
<cite class='GOTquote__character'>${quote.character.name}</cite>`;
}

GOTbutton.addEventListener("click", getGOTquotes);

// Блок с карточками книг
document.addEventListener("DOMContentLoaded", function () {
  const GOTcardsArray = `[
{
"title": "A Game of Thrones 🏰",
"author": "George R. R. Martin",
"year": "1996",
"url": "/moovie_project/assets/images/GOT/book1.jpg",
"info": "In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the North of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens. Amid plots and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in the balance, as each endeavors to win that deadliest of conflicts: the game of thrones."
},
{
"title": "A Clash of Kings 👑",
"author": "George R. R. Martin",
"year": "1998",
"url": "/moovie_project/assets/images/GOT/book2.jpg",
"info": "A comet the color of blood and flame cuts across the sky. And from the ancient citadel of Dragonstone to the forbidding shores of Winterfell, chaos reigns. Six factions struggle for control of a divided land and the Iron Throne of the Seven Kingdoms, preparing to stake their claims through tempest, turmoil, and war. <br> It is a tale in which brother plots against brother and the dead rise to walk in the night. Here a princess masquerades as an orphan boy; a knight of the mind prepares a poison for a treacherous sorceress; and wild men descend from the Mountains of the Moon to ravage the countryside. Against a backdrop of incest and fratricide, alchemy and murder, victory may go to the men and women possessed of the coldest steel...and the coldest hearts. For when kings clash, the whole land trembles."
},
{
"title": "A Storm of Swords ⚔️",
"author": "George R. R. Martin",
"year": "2000",
"url": "/moovie_project/assets/images/GOT/book3.jpg",
"info": "Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as violently as ever, as alliances are made and broken. Joffrey, of House Lannister, sits on the Iron Throne. His most bitter rival, Lord Stannis, stands defeated and disgraced. But young Robb, of House Stark, still rules the North from the fortress of Riverrun. Meanwhile, making her way across a blood-drenched continent is Daenerys, mistress of the only three dragons still left in the world... But as opposing forces, an army of barbaric wildlings arrives from the outermost line of civilization. In their vanguard is a horde of mythical Others, a supernatural army of the living dead whose animated corpses are unstoppable. As the future of the land hangs in the balance, no one will rest until the Seven Kingdoms have exploded in a veritable storm of swords..."
}, {
"title": "A Feast for Crows 🐦⬛",
"author": "George R. R. Martin",
"year": "2005",
"url": "/moovie_project/assets/images/GOT/book4.jpg",
"info": "After centuries of bitter strife and fatal treachery, the seven powers dividing the land have decimated one another into an uneasy truce. Or so it appears... With the death of the monstrous King Joffrey, Cersei is ruling as regent in King’s Landing. Robb Stark’s demise has broken the back of the Northern rebels, and his siblings are scattered throughout the kingdom. Few legitimate claims to the once desperately sought Iron Throne still exist, or they are held in hands too weak or too distant to wield them effectively. The war, which raged out of control for so long, has burned itself out. Now in the Seven Kingdoms, as the human crows assemble over a banquet of ashes, daring new plots and dangerous new alliances are formed, while surprising faces—some familiar, others only just appearing—are seen emerging from an ominous twilight of past struggles and chaos to take up the challenges ahead."
}, {
"title": "A Dance with Dragons 🐉",
"author": "George R. R. Martin",
"year": "2011",
"url": "/moovie_project/assets/images/GOT/book5.jpg",
"info": "In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance once again. In the east, Daenerys Targaryen rules with her three dragons as queen of a city built on dust and death. She has three times 3,000 enemies, and many have set out to find her. To the north lies the mammoth Wall of ice and stone - a structure only as strong as those guarding it. There, Jon Snow, 998th Lord Commander of the Nights Watch, will face his greatest challenge yet. Bitter conflicts soon reignite, intimate betrayals are perpetrated, and a grand cast of outlaws and priests, soldiers and skinchangers, nobles and slaves, will face seemingly insurmountable obstacles. Some will fail, others will grow in the strength of darkness. But in a time of rising restlessness, the tides of destiny and politics will lead inevitably to the greatest dance of all."
}, {
"title": "The Winds of Winter ❄️",
"author": "George R. R. Martin",
"year": "Planned 🥲",
"url": "/moovie_project/assets/images/GOT/book6.webp",
"info": "The Winds of Winter is the forthcoming sixth novel in the epic fantasy series A Song of Ice and Fire by George R.R. Martin. <br> The previous installment, A Dance with Dragons, covered less story than Martin intended, omitting at least one planned large battle sequence and leaving several character threads ending in cliffhangers."
}, {
"title": "A Dream of Spring 🍃",
"author": "George R. R. Martin",
"year": "Planned 🥲",
"url": "/moovie_project/assets/images/GOT/book7.webp",
"info": "Originally titled A Time For Wolves. The seventh and apparent final book of George R.R. Martin's acclaimed series, A Song of Ice and Fire."
}, {
"title": "Tales of Dunk and Egg 📜",
"author": "George R. R. Martin",
"year": "1998 - nowadays",
"url": "/moovie_project/assets/images/GOT/book8.jpg",
"info": "Tales of Dunk and Egg is a series of fantasy novellas by George R. R. Martin, set in the world of his A Song of Ice and Fire novels. They follow the adventures of Dunk (the future Lord Commander of the Kingsguard, Ser Duncan the Tall) and Egg (the future King Aegon V Targaryen), some 90 years before the events of the novels. <br> Three novellas have been published – The Hedge Knight (1998), The Sworn Sword (2003), and The Mystery Knight (2010) – and Martin has stated his intention to continue the series. A collection of the existing three novellas, with illustrations by Gary Gianni, was published as A Knight of the Seven Kingdoms on October 6, 2015."
}
]`;
  const GOTcardsContainer = document.getElementById("GOTcards__container");
  let GOTcards;
  try {
    GOTcards = JSON.parse(GOTcardsArray);
  } catch (error) {
    GOTcardsContainer.innerHTML = `<p>Ошибка: ${error.message}</p>`;
    return;
  }

  let GOTcardsContent = "";

  for (let card of GOTcards) {
    GOTcardsContent += `
<div class='GOTcard'>
<div class='GOTcard__front'>
<img class='GOTcard__image' src='${card.url}' alt='Book image'/>
<div class='GOTcard__text'>
<p class='GOTcard__title'><b>Year:</b> ${card.year}</p>
</div>
</div>
<div class='GOTcard__back'>
<p class='GOTcard__p'>${card.info}</p>
</div>
</div>
`;
  }
  GOTcardsContainer.innerHTML = GOTcardsContent;

  // Переворот карточки
  const cards = document.querySelectorAll(".GOTcard");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
    });
  });
});

// раздел с информацией о сериале
document.addEventListener("DOMContentLoaded", function () {
  const TVseriesContainer = document.getElementById("GOTtvSeries__container");
  const TVseriesArray = `[
{
"title": "Season 1 (2011)",
"info": "In Winterfell, Ned Stark becomes Hand of the King to Robert Baratheon, bringing his daughters, Sansa and Arya, with him to King’s Landing. Ned's son, Bran, is paralyzed after stumbling upon Robert's wife, Cersei Lannister, having sex with her brother, Jaime. Ned discovers that Robert and Cersei's three children are in fact Jaime and Cersei's three children, and are not rightful heirs to the throne. Following Robert's death, however, Cersei's eldest, Joffrey, is crowned. Ned's refusal to recognize Joffrey as king leads to his execution. Meanwhile, Ned's bastard son Jon Snow joins the Night's Watch, an ancient order sworn to defend Westeros by maintaining the Wall. In Essos, the exiled Viserys Targaryen marries his sister, Daenerys, off to Dothraki warlord Khal Drogo in exchange for an army to take back Westeros, where his father was once king. Daenerys is gifted three dragon eggs while Viserys is eventually killed by Drogo, who later dies himself. Daenerys then hatches the dragon eggs, bringing dragons back into the world.",
"url": "https://www.amediateka.ru/watch/series_11223_finaligra-prestolov/season_1_11646",
"image": "/moovie_project/assets/images/GOT/Game_of_Thrones_Season_1.jpg"
},
{
"title": "Season 2 (2012)",
"info": "Ned's eldest son, Robb, takes Jaime prisoner in a recently declared war with the Lannisters. His mother, Catelyn, sends Brienne of Tarth to escort Jaime to King's Landing, where she believes she can trade him for her daughters. In King's Landing, Sansa is frequently abused by Joffrey while acting Hand of the King and youngest Lannister child Tyrion works with Cersei to prepare for Stannis Baratheon's upcoming attack on the capitol. The attack eventually occurs, but despite Stannis' best efforts, he ultimately fails. Having escaped, Arya finds herself trapped in Harrenhal serving as cup bearer to Lannister patriarch Tywin, but manages to escape. Ned's ward, Theon Greyjoy, betrays Robb and takes Winterfell for himself, forcing Bran and youngest Stark child Rickon to flee to the Wall. Beyond the Wall, Jon gains the trust of the Wildlings while Samwell Tarly encounters White Walkers. In Essos, Daenerys and her khalassar find refuge in Qarth, but Daenerys had her dragons stolen. She recovers them, steals some wealth, and leaves the city.",
"url": "https://www.amediateka.ru/watch/series_11223_finaligra-prestolov/season_2_11647",
"image": "/moovie_project/assets/images/GOT/Game_of_Thrones_Season_2.jpg"
},
{
"title": "Season 3 (2013)",
"info": "After Robb breaks his vow to marry one of Walder Frey's daughters, Frey arranges the massacre of Robb, his mother, his wife, and all his bannermen, during a wedding feast. After Robb's death, Roose Bolton is appointed the new Warden of the North by Tywin, who is now Hand of the King. Theon is tortured by Roose's bastard son, Ramsay Snow. Further north, Jon Snow climbs the Wall with a Wildling party and ends up on its south side, but then betrays them. In the capital, King Joffrey has decided to marry Margaery of House Tyrell, setting Sansa aside. Tywin, however, arranges Sansa's marriage with his son, Tyrion. Jaime reaches King's Landing, having had his dominant hand cut off. In Essos, Daenerys acquires 'The Unsullied', an army of eunuch slave soldiers. She also joins forces with the 'Second Sons', a company of mercenaries, and becomes the Queen of Yunkai.",
"url": "https://www.amediateka.ru/watch/series_11223_finaligra-prestolov/season_3_11648",
"image": "/moovie_project/assets/images/GOT/Game_of_Thrones_Season_3.jpg"
},
{
"title": "Season 4 (2014)",
"info": "In King's Landing, Lady Olenna secretly poisons King Joffrey at his wedding with her granddaughter Margaery, but Tyrion is falsely accused of the murder by his family, and is found guilty. However, Jaime and Varys conspire to smuggle Tyrion to Essos. Tyrion kills his father Tywin before leaving. Petyr Baelish smuggles Sansa into the Vale, ruled by her aunt and his lover, the widowed Lysa Arryn. Baelish marries Lysa but later kills her. After attempting to reunite with her family, Arya takes a ship bound for Braavos, in Essos. Having returned to the Night's Watch, Jon Snow defends Castle Black against an army of Wildlings, who are superior in strength. The Watch is rescued by the arrival of Stannis Baratheon and his forces. A crippled Bran with newfound powers travels north beyond the Wall with a few companions. Beneath a weirwood tree, he finds the Three-eyed Raven, an old man with the ability to perceive future and past. In Essos, Daenerys takes control of Meereen and abolishes slavery. When she discovers that her trusted advisor, Ser Jorah Mormont, had spied on her for Robert Baratheon, she exiles him.",
"url": "https://www.amediateka.ru/watch/series_11223_finaligra-prestolov/season_4_11649",
"image": "/moovie_project/assets/images/GOT/Game_of_Thrones_Season_4.jpg"
},
{
"title": "Season 5 (2015)",
"info": "In King's Landing, Margaery marries the new King Tommen Baratheon, Joffrey's younger brother. The Sparrows, a group of religious fanatics, impose their views upon the city, imprisoning Margaery, her brother Loras, and Cersei for committing various sins. Jaime travels to Dorne to take back Myrcella Baratheon. However, Oberyn Martell's lover, Ellaria and his bastard daughters kill Myrcella as revenge for Oberyn's death. In Winterfell, the new seat of House Bolton, Baelish arranges Sansa's marriage with the now-legitimized son of Roose Bolton, the sadist Ramsay. Stannis's unsuccessful march on Winterfell, which leads to his death, allows Sansa the opportunity to escape with Theon. At the Wall, as the newly elected Lord Commander of the Night's Watch, Jon Snow forms an alliance with the Wildlings to save them from the White Walkers and their army of reanimated corpses. However, Jon is stabbed to death by some brothers who see him as a traitor. Arya arrives in Braavos, where she finds Jaqen H'ghar whom she had previously helped escape, and begins training with the Faceless Men, a guild of assassins. In Essos, Tyrion becomes an advisor to Daenerys. Ser Jorah saves the life of Daenerys against a revolt of slavers, who flees Meereen on Drogon's back.",
"url": "https://www.amediateka.ru/watch/series_11223_finaligra-prestolov/season_5_11650",
"image": "/moovie_project/assets/images/GOT/Game_of_Thrones_Season_5.png"
},
{
"title": "Season 6 (2016)",
"info": "At the Wall, Melisandre resurrects Jon. Jon reunites with Sansa and leaves the Night's Watch. Aided by the Wildlings, loyalists and the Knights of the Vale, they defeat the Boltons and Jon is proclaimed the King in the North. Beyond the Wall, Bran trains with the Three-eyed Raven but they come under attack by the White Walkers. The Three-eyed Raven is killed and succeeded by Bran, who escapes with the help of Hodor, who dies in the process. Bran realizes Jon is in fact the son of his deceased aunt Lyanna Stark. In Braavos, Arya continues her training with the Faceless Men, but eventually leaves them and returns to Westeros to take revenge on Walder Frey. In King's Landing, Cersei demolishes the Great Sept with wildfire. Many die, including the High Sparrow, Margaery, and Loras. Tommen kills himself after witnessing the events, and Cersei is crowned Queen. In the Iron Islands, Euron Greyjoy usurps leadership by killing his brother and Theon's father, Balon. Daenerys gets captured by the Dothraki but gains their devotion by burning their leaders alive. She forgives Ser Jorah and returns to Meereen, in time to save the city from a naval siege by slavers, then sails for Westeros, joined by Theon and his sister Yara. Ellaria seizes control of Dorne, and joins Olenna Tyrell in an alliance with Daenerys.",
"url": "https://www.amediateka.ru/watch/series_11223_finaligra-prestolov/season_6_11651",
"image": "/moovie_project/assets/images/GOT/Game_of_Thrones_Season_6.jpeg"
},
{
"title": "Season 7 (2017)",
"info": "Daenerys arrives in Westeros and takes over Dragonstone. She plans to overthrow Cersei, but Jon arrives to instead save Westeros from the White Walkers. The two fall in love and venture together beyond the Wall to prove the threat of the White Walkers. The Night King - leader of the White Walkers - kills and reanimates Daenerys' dragon Viserion during the mission. Jon and Daenerys then attempt to persuade Cersei to join their cause by showing the existence of a wight they had captured, but she has her own plans to increase control over the continent. At Winterfell, Sansa is reunited with her siblings, Arya and Bran. When Lord Protector of the Vale Petyr Baelish begins to turn the Stark children against one another, they manage to turn the tables on him, expose all his crimes, and ultimately have him executed. In a vision, Bran sees that his aunt, Lyanna, was, in fact, married to Prince Rhaegar, and that Jon's real name is Aegon Targaryen, making him the true heir to the Iron Throne. After his sister Yara is kidnapped by his uncle Euron, Theon sets out to save her. The Night King demolishes a section of The Wall with the help of the reanimated Viserion, allowing the White Walkers and Army of the Dead to pass into the Seven Kingdoms.",
"url": "https://www.amediateka.ru/watch/series_11223_finaligra-prestolov/season_7_11652",
"image": "/moovie_project/assets/images/GOT/Game_of_Thrones_Season_7.png"
},
{
"title": "Season 8 (2018)",
"info": "Jon and Daenerys travel to Winterfell and learn the Army of the Dead has breached the Wall. Theon rescues Yara, then returns to Winterfell. Sam reveals to Jon that he is actually Aegon Targaryen. Jaime arrives at Winterfell, revealing Cersei will not help defeat the Army of the Dead. Jon reveals his Targaryen lineage to Daenerys, who wants it kept a secret. After a battle, Arya kills the Night King, destroying the Army of the Dead. With the Army of the Dead defeated, Daenerys turns her attention towards the Iron Throne. Euron's navy kills Rhaegal and captures Missandei, who is later executed by Cersei, enraging Daenerys, who, after her army takes King's Landing, destroys much of the city indiscriminately, while Cersei and Jaime are killed in the destruction. Tyrion denounces Daenerys and is imprisoned for treason to await execution. Jon, unable to stop Daenerys, is forced to kill her. Bran Stark is proclaimed king, allowing the North to secede as an independent kingdom. Bran appoints Tyrion as his Hand. Sansa is crowned Queen in the North, and Arya sails to find new lands. Jon is sentenced to the Night's Watch, and leads the Wildlings back north of the Wall.",
"url": "https://www.amediateka.ru/watch/series_11223_finaligra-prestolov/season_8_11653",
"image": "/moovie_project/assets/images/GOT/Game_of_Thrones_Season_8.png"
}
]`;

  let TVseries;
  try {
    TVseries = JSON.parse(TVseriesArray);
  } catch (error) {
    TVseriesContainer.innerHTML = `<p>Ошибка: ${error.message}</p>`;
    return;
  }

  let TVseriesContent = "";

  for (let episod of TVseries) {
    TVseriesContent += `
<div class='GOTtvSeries__box'>
<div class='GOTTtvSeries__front'>
  <img class='GOTtvSeries_img' src='${episod.image}' alt='TV Series image'/>
  <div class='GOTtvSeries__text'>
    <p class='GOTtvSeries__title'><b>${episod.title}</b></p>
  </div>
</div>
<div class='GOTTtvSeries__back'>
  <p class='GOTtvSeries__p'>${episod.info}</p>
</div>
</div>
`;
  }
  TVseriesContainer.innerHTML = TVseriesContent;

  const TVseriesflip = document.querySelectorAll(".GOTtvSeries__box");

  TVseriesflip.forEach((element) => {
    element.addEventListener("click", function () {
      element.classList.toggle("flipped");
    });
  });
});

//персонажи
const GOTcharactersContainer = document.getElementById(
  "GOT__characters--container"
);
const GOTbuttonChar = document.getElementById("GOT__characters--button");

document.addEventListener("DOMContentLoaded", getGOTcharacter);

async function getGOTcharacter() {
  try {
    const GOTcharFetch = await fetch(
      "https://thronesapi.com/api/v2/Characters"
    );

    if (!GOTcharFetch.ok) {
      throw new Error(
        `Возникла ошибка при получении данных с сервера: ${GOTcharFetch.status}`
      );
    }

    const GOTcharData = await GOTcharFetch.json();
    const randomChar =
      GOTcharData[Math.floor(Math.random() * GOTcharData.length)];
    displayGOTcharacters(randomChar);
  } catch (error) {
    GOTcharactersContainer.innerHTML = `<p>Ошибка: ${error.message}</p>`;
  }
}

function displayGOTcharacters(character) {
  GOTcharactersContainer.innerHTML = `
  <div class='GOTcharDownload'>
  <p class='GOTchar_p'>Загрузка изображения...</p>
  </div>
  <img class='GOTchar_img' src="${character.imageUrl}" alt="${character.fullName}" style="display:none;" onload="this.style.display=''; this.previousElementSibling.remove();"  />
  <div class='GOTchar_text'>
  <p class='GOTchar_p'><b>Name:</b> ${character.fullName}</p>
  <p class='GOTchar_p'><b>Title:</b> ${character.title}</p>
  <p class='GOTchar_p'><b>Family:</b> ${character.family}</p>
  </div>
  `;
}

GOTbuttonChar.addEventListener("click", getGOTcharacter);
