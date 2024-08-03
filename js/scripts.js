let pokemonList = [];

pokemonList[0] = {
  name: "Bulbasaur",
  height: 2,
  weight: 15.2, 
  types: ["grass", "poison"]
  
};

pokemonList[1] = {
  name: "Charmander",
  height: 2,
  weight: 18.7,
  types: ["fire"]
};

pokemonList[2] = {
  name: "Squirtle",
  height: 1,
  weight: 19.8,
  types: ["water"]
};

console.log(pokemonList);


pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + " (height: " + pokemon.height + ")<br>");
});
