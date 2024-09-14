console.log("JS loaded");

const pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    if (typeof item === 'object' && item.name && item.url) {
      pokemonList.push(item);
    } else {
      console.log('Invalid Pokémon');
    }
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(details => {
      modalController.showModal(details);
    });
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('#pokemon-list');
    let listItem = document.createElement('li');
    
    // Assigning class to list item
    listItem.classList.add("list-group-item");

    // Creating button element
    let button = document.createElement('button');
    button.innerText = pokemon.name;

    // Adding Bootstrap button classes
    button.className = 'btn btn-primary';

    // Appending button to list item
    listItem.appendChild(button);

    // Appending list item to the pokemon list
    pokemonListElement.appendChild(listItem);

    // Adding event listener for button click to show details
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function addAllToList() {
    loadList().then(response => {
      console.log("raw response", response);
      response.json().then(data => {
        console.log("parsed response", data);
        data.results.forEach(p => addListItem(p));
      });
    })
    .catch(err => {
      console.error("API failed");
    });
  }

  function loadList() {
    return fetch(apiUrl);
  }

  function loadDetails(pokemon) {
    return fetch(pokemon.url).then(response => {
      return response.json().then(details => {
        return {
          name: pokemon.name,
          height: details.height,
          imageUrl: details.sprites.front_default,
        };
      });
    });
  }

  return {
    getAll: getAll,
    add: add,
    addAllToList: addAllToList,
    loadDetails: loadDetails,
    loadList: loadList,
  };
})();

const modalController = (function () {
  const modal = document.getElementById('modal-container');
  const closeButton = document.querySelector('.close-button');

  function showModal(details) {
    const pokemonNameElement = document.getElementById('pokemon-name');
    const pokemonHeightElement = document.getElementById('pokemon-height');
    const pokemonImageElement = document.getElementById('pokemon-image');

    pokemonNameElement.innerText = details.name;
    pokemonHeightElement.innerText = `Height: ${details.height}`;
    pokemonImageElement.src = details.imageUrl;
    pokemonImageElement.alt = details.name;

    modal.style.display = 'block';
  }

  function hideModal() {
    modal.style.display = 'none';
  }

  function handleKeyPress(event) {
    if (event.key === 'Escape') {
      hideModal();
    }
  }

  function handleOutsideClick(event) {
    if (event.target === modal) {
      hideModal();
    }
  }

  closeButton.addEventListener('click', hideModal);
  window.addEventListener('keydown', handleKeyPress);
  window.addEventListener('click', handleOutsideClick);

  return {
    showModal: showModal,
    hideModal: hideModal,
  };
})();

pokemonRepository.addAllToList();
