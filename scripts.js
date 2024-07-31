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

for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")<br>");
}
