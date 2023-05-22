// Obtener personajes de Rick and Mortyr
fetch('https://rickandmortyapi.com/api/character?page=1&limit=10')
.then(response => response.json())
.then(data => {
  const characterContainer = document.getElementById('character-container');
  characterContainer.classList.add('row')
  characterContainer.classList.add('g-4')
  data.results.forEach(character => {
  const cardContainer = document.createElement('div')
  cardContainer.classList.add('col-3')
    const card = createCharacterCard(character);
    cardContainer.appendChild(card);
    characterContainer.appendChild(cardContainer);
  });
})
.catch(error => {
  console.error('Error al obtener los personajes:', error);
});

// Obtener episodios de Rick and Morty
fetch('https://rickandmortyapi.com/api/episode?page=1&limit=10')
.then(response => response.json())
.then(data => {
  const episodeContainer = document.getElementById('episode-container');
  episodeContainer.classList.add('row')
  episodeContainer.classList.add('g-4')
  data.results.forEach(episode => {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('col-3')
    const card = createEpisodeCard(episode);
    cardContainer.appendChild(card);
    episodeContainer.appendChild(cardContainer);
  });
})
.catch(error => {
  console.error('Error al obtener los episodios:', error);
});

// Función para crear una tarjeta de personaje
function createCharacterCard(character) {
const card = document.createElement('div');
card.classList.add('character-card');

card.classList.add('p-1')
const image = document.createElement('img');
image.src = character.image;
image.alt = character.name;

const name = document.createElement('h3');
name.textContent = character.name;

card.appendChild(image);
card.appendChild(name);

return card;
}

// Función para crear una tarjeta de episodio
function createEpisodeCard(episode) {
const card = document.createElement('div');
card.classList.add('episode-card');

card.classList.add('p-1')

const episodeName = document.createElement('h3');
episodeName.textContent = episode.name;

const airDate = document.createElement('p');
airDate.textContent = 'Air Date: ' + episode.air_date;

const episodeCode = document.createElement('p');
episodeCode.textContent = 'Episode Code: ' + episode.episode;

card.appendChild(episodeName);
card.appendChild(airDate);
card.appendChild(episodeCode);

return card;
}