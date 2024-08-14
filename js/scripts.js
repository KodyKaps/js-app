const pokemonRepository = (function() {

  const pokemonList = [
    { name: 'Bulbasaur', type: 'grass', height: 2, weight: 15.2 },
    { name: 'Charmander', type: 'fire', height: 2, weight: 18.7 },
    { name: 'Squirtle', type: 'water', height: 1, weight: 19.8 }
  ];

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
