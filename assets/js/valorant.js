fetch('https://valorant-api.com/v1/agents')
  .then(response => response.json())
  .then(data => {
    const agentContainer = document.getElementById('agent-container');

    data.data.forEach(agent => {
      const card = createAgentCard(agent);
      agentContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al obtener los agentes:', error);
  });

function createAgentCard(agent) {
  const card = document.createElement('div');
  card.classList.add('agent-card');

  const image = document.createElement('img');
  image.src = agent.displayIcon;
  image.alt = agent.displayName;

  const name = document.createElement('h3');
  name.textContent = agent.displayName;

  const description = document.createElement('p');
  description.textContent = agent.description;

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(description);

  return card;
}
fetch('https://valorant-api.com/v1/weapons')
  .then(response => response.json())
  .then(data => {
    const weaponContainer = document.getElementById('weapon-container');

    data.data.forEach(weapon => {
      const card = createWeaponCard(weapon);
      weaponContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al obtener las armas:', error);
  });

fetch('https://valorant-api.com/v1/weapons')
  .then(response => response.json())
  .then(data => {
    const weaponContainer = document.getElementById('weapon-container');

    data.data.forEach(weapon => {
      const card = createWeaponCard(weapon);
      weaponContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al obtener las armas:', error);
  });

function createWeaponCard(weapon) {
  const card = document.createElement('div');
  card.classList.add('weapon-card');

  const image = document.createElement('img');
  image.src = weapon.displayIcon;
  image.alt = weapon.displayName;

  const name = document.createElement('h3');
  name.textContent = weapon.displayName;

  const price = document.createElement('p');
  price.textContent = `Precio: ${weapon.shopData.cost} puntos`;

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(price);

  return card;
}
// Obtener los mapas de Valorant
fetch('https://valorant-api.com/v1/maps')
  .then(response => response.json())
  .then(data => {
    const mapContainer = document.getElementById('map-container');

    data.data.forEach(map => {
      const card = createCard(map.displayName, map.splash, map.description);
      mapContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al obtener los mapas:', error);
  });

function createCard(title, image, description) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = image;
  img.alt = title;

  const heading = document.createElement('h3');
  heading.textContent = title;

  const desc = document.createElement('p');
  desc.textContent = description;

  card.appendChild(img);
  card.appendChild(heading);
  card.appendChild(desc);

  return card;
}