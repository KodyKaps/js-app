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

  return {
    getAll: getAll,
    add: add
  };
  
})();

