console.log("JS loaded")
const pokemonRepository = (function () {
  //step 2
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    if (typeof item === 'object' && item.name && item.url) {
      pokemonList.push(item);
    } else {
      console.log('Invalid PokÃ©mon');
    }
  }

  function showDetails(pokemon) {
    
    loadDetails(pokemon)
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('#pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = pokemon.name;
    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function addAllToList() {
    // debugger
    loadList().then(response => {
      //raw response
      console.log("raw response", response)
      //parse to json data
      response.json().then(data =>{
        console.log("parsed response", data)
        data.results.forEach(p => addListItem(p))
      })
    })
    .catch(err => {
      console.error("Api failed")
    })
    
    
  }
  //step 3
  function loadList(){
    //use fetch to get pokemon
    //.then waits for resolved
    return fetch(apiUrl)

  }
  function loadDetails(pokemon){
    //use fetch to get pokemon details using the detailsUrl
    fetch(pokemon.url).then(response => {
      response.json().then(data =>{
        console.log("details", data)
        //put this on a modal and open it
        return data
      })
    })

  }

  return {
    getAll: getAll,
    add: add,
    addAllToList: addAllToList,
    loadDetails: loadDetails,
    loadList: loadList
  };

})();

pokemonRepository.addAllToList();
pokemonRepository.addAllToList();
