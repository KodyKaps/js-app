const pokemtonRepository = (function() {

  const pokemonList = [
    {name: 'Bulbasur', type: 'grass', height: '2', weight: '15.2'},
    {name: 'Charmander',type: 'fire', height: '2', weight: '18.7'},
    {name: 'Squirtle', type: 'water', height: '1', weight: '19.8'}
  ];

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    if (typeof item === 'object' && item.name && item.type && item.height && item.weight){
      pokemonList.push(item);
    } else {
      console.log('invalid Pokemon')
    }
   
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innterText = pokemon.name;
    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);

    addButtonEventListener(button, pokemon); {
      button.addEventListener('click', function() {
        showDetails(pokemon);

      });
    }

    function showDetails(pokemon) {
      console.log(pokemon);
    }

    function addAllToList() {
      getAll().forEach(function(pokemon) {
        addListItem(pokemon);
      });
    }

  }
 

  return {
    getAll: getAll,
    add: add,
    addAllToList: addAllToList
  };

  
  
})();

pokemtonRepository.addAllToList();

