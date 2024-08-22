console.log("JS loaded")
const pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';



  function getAll() {
    return pokemonList;
  }

  function add(item) {
    if (typeof item === 'object' && item.name && item.type && item.height && item.weight) {
      pokemonList.push(item);
    } else {
      console.log('Invalid Pokémon');
    }
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('#pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = pokemon.name;
    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);

    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  function addAllToList() {
    // debugger
    getAll().forEach(function(pokemon) {
      addListItem(pokemon);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addAllToList: addAllToList
  };

})();

pokemonRepository.addAllToList();
