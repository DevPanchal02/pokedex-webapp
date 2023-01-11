//Data for pokemon type colors
let typeColors = {
    //pokemon types normal, fire, water, grass, poison, flying, bug
	Normal: '#A8A77A',
	Fire: '#EE8130',
	Water: '#6390F0',
	Electric: '#F7D02C',
	Grass: '#7AC74C',
	Ice: '#96D9D6',
	Fighting: '#C22E28',
	Poison: '#A33EA1',
	Ground: '#E2BF65',
	Flying: '#A98FF3',
	Psychic: '#F95587',
	Bug: '#A6B91A',
	Rock: '#B6A136',
	Ghost: '#735797',
	Dragon: '#6F35FC',
	Dark: '#705746',
	Steel: '#B7B7CE',
	Fairy: '#D685AD',
}

//declares variables used
let buttonName;
let buttonIndex;

//Runs through for loop calling getPokemon for each instance of i

const getPokemon = async (start, end) => {
    let pokemon =  [];
    let listDiv = document.getElementById('list');
    let childDiv = document.getElementById('poke-card');
    if(childDiv != null) {
        listDiv.removeChild(childDiv);
    }
    for (let i = start; i<end; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const res = await fetch(url);
        const pokemonapi = await res.json();
        let type2;
        if(pokemonapi.types[1] != null){
            type2 = pokemonapi.types[1].type.name
        }
        else {
            type2 = "";
        }
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
        let apiPokemon = {
            "id": pokemon.length,
            "pokeNum": pokemonapi.id,
            "number": pokemonapi.id.toString().padStart(3, '0'),
            "name":   capitalizeFirstLetter(pokemonapi.name),
            "type 1": capitalizeFirstLetter(pokemonapi.types[0].type.name),
            "type 2": capitalizeFirstLetter(type2)
     
        }
        pokemon.push(apiPokemon);
    }
    return pokemon
}

//Async Function that calls getPokemon and builds the website with the data received
const fillData = async (start, end) => {
let pokemon = await getPokemon(start, end);
let listDiv = document.getElementById('list');
console.log(pokemon)
//For loop to go through the 20 pokemon and add each of their own boxes with their various descriptions
for(let i = 0; i<pokemon.length; i++){
    //stores pokemon from the Object array into the variable pkmn based on the ID Number thats assigned
    let pkmn = pokemon.find(pokemon => pokemon.id == i);
    //variables to help create the HTML Elements
    let pokeDiv = document.createElement('div');
    pokeDiv.id = "poke-card";
    pokeDiv.className = "poke-card";
    listDiv.appendChild(pokeDiv);
    let poke_card = document.getElementById('poke-card');
    let pokeElement = document.createElement("div");
    pokeElement.classList.add('pokemon');
    console.log(pokemon.length);

//Creates the HTML Elements dynamically from javaScript and inserts all pokemon into an unOrdered List
let pokeInnerHtml = '<div class="img-container"> '
 + `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${start+i}.png"> `
 +`</div> `
 +`<div class="info"> `
 +`     <span class="number">${pkmn.number}</span> `
 +`       <br> `
 +`       <span class="name">${pkmn.name}</span> `
 +`       <br> `
 +`       <span class="type1">${pkmn["type 1"]}</span> `
 +`       <span class="type2">${pkmn["type 2"]}</span> `
 +`</div> ` ;
pokeElement.innerHTML = pokeInnerHtml;
poke_card.appendChild(pokeElement);

//Adds CSS Styling for the pokemon type 1 dynamically though javascript
document.getElementsByClassName("type1")[i].style.border = `2px solid ${typeColors[pkmn["type 1"]]}`;
document.getElementsByClassName("type1")[i].style.background = `${typeColors[pkmn["type 1"]]}`;

//Adds CSS Styling for the pokemon type 2 dynamically though javascript
document.getElementsByClassName("type2")[i].style.border = `2px solid ${typeColors[pkmn["type 2"]]}`;
document.getElementsByClassName("type2")[i].style.background = `${typeColors[pkmn["type 2"]]}`;

}

//searches through array with name
let searchName = document.getElementById('search1');

searchName.addEventListener('keyup',(e)=>{

    let target = (e.target.value).toLowerCase();
    if(typeof target === "string"){
    let duplicatedPokemon = pokemon;
    let filteredPokemon = duplicatedPokemon.filter(poke => poke.name.toLowerCase().includes(target) || poke.number.includes(target));

    let searchDiv = document.getElementById('searchList');
    let childDiv = document.getElementById('search-poke-card');
    if(childDiv != null){
        searchDiv.removeChild(childDiv);
    }
    let filiteredPokeDiv = document.createElement('div');
    filiteredPokeDiv.id = "search-poke-card";
    filiteredPokeDiv.className = "search-poke-card";
    searchDiv.appendChild(filiteredPokeDiv);
    if(filteredPokemon.length !== duplicatedPokemon.length){
    filteredSearchDiv(filteredPokemon);
        }
    }
    else {
        console.log('please enter a character')
    }
} );

//Searches through array with number
let searchIndex = document.getElementById('search2');
searchIndex.addEventListener('keyup', (e)=> {
    let target = (e.target.value).toLowerCase();
    if(typeof target === "string"){
    let duplicatedPokemon = pokemon;
    filteredPokemon = duplicatedPokemon.filter(poke => poke.number.includes(target))
    let searchDiv = document.getElementById('searchList');
    let childDiv = document.getElementById('search-poke-card');
    if(childDiv != null){
        searchDiv.removeChild(childDiv);
    }
    let filiteredPokeDiv = document.createElement('div');
    filiteredPokeDiv.id = "search-poke-card";
    filiteredPokeDiv.className = "search-poke-card";
    searchDiv.appendChild(filiteredPokeDiv);
    if(filteredPokemon.length !== duplicatedPokemon.length){
    filteredSearchDiv(filteredPokemon);
        }
    }
    else {
        console.log('please enter a number')
    }
})

//FiliteredSearchDiv method that creates a new div with the provided values
function filteredSearchDiv (values) {
    for(let i = 0; i<values.length; i++){
        let poke_card = document.getElementById('search-poke-card');
        let pokeElement = document.createElement("div");
        pokeElement.classList.add('pokemon');
        console.log(values[i])
        let pokeHtml = '<div class="img-container"> '
 + `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parseInt(values[i].pokeNum)}.png" alt=""> `
 +`</div> `
 +`<div class="info"> `
 +`     <span class="number">${values[i].number}</span> `
 +`       <br> `
 +`       <span class="name">${values[i].name}</span> `
 +`       <br> `
 +`       <span class="type1">${values[i]["type 1"]}</span> `
 +`       <span class="type2">${values[i]["type 2"]}</span> `
 +`</div> ` ;

 pokeElement.innerHTML = pokeHtml;
 poke_card.appendChild(pokeElement);
 console.log(document.getElementsByClassName("type1"));

//Adds CSS Styling for the pokemon type 1 dynamically though javascript
document.getElementsByClassName("type1")[i].style.border = `2px solid ${typeColors[values[i]["type 1"]]}`;
document.getElementsByClassName("type1")[i].style.background = `${typeColors[values[i]["type 1"]]}`;

//Adds CSS Styling for the pokemon type 2 dynamically though javascript
document.getElementsByClassName("type2")[i].style.border = `2px solid ${typeColors[values[i]["type 2"]]}`;
document.getElementsByClassName("type2")[i].style.background = `${typeColors[values[i]["type 2"]]}`;

    }
}
}
fillData(1,152)
kanto.addEventListener('click',(e) =>{
    regionSetter('kanto');
});
jhoto.addEventListener('click',(e) =>{
    regionSetter('jhoto');
});
hoenn.addEventListener('click',(e) =>{
    regionSetter('hoenn');
});
sinnoh.addEventListener('click',(e) =>{
    regionSetter('sinnoh');
});
unova.addEventListener('click',(e) =>{
    regionSetter('unova');
});
kalos.addEventListener('click',(e) =>{
    regionSetter('kalos');
});
alola.addEventListener('click',(e) =>{
    regionSetter('alola');
});
galar.addEventListener('click',(e) =>{
    regionSetter('galar');
});
const regionSetter = (selectedRegion) => {
    kanto.attributeStyleMap.clear()
    jhoto.attributeStyleMap.clear()
    hoenn.attributeStyleMap.clear()
    sinnoh.attributeStyleMap.clear()
    unova.attributeStyleMap.clear()
    kalos.attributeStyleMap.clear()
    alola.attributeStyleMap.clear()
    galar.attributeStyleMap.clear()
    let region = document.getElementById(selectedRegion);
    region.style.textDecoration = 'underline cyan 6px'
    region.style.textUnderlineOffset = '1.845em'
    region.style.color = 'cyan'

    switch(selectedRegion){
        case 'kanto':
            fillData(1, 152)
            break;
         case 'jhoto':
                fillData(152, 252)
            break;
        case 'hoenn':
                fillData(252, 387)
            break;
        case 'sinnoh':
                fillData(387, 494);
            break;
        case 'unova':
                fillData(494, 650);
            break;
        case 'kalos':
                fillData(650, 722);
        break;
        case 'alola':
                fillData(722, 810);
        break;
        case 'galar':
            fillData(810, 906);
        break;
    } 
}