//Data used for the 20 Pokemon in this application
let pokemon =  [
    {
        "id": "0",
        "number": "001",
        "name": "Bulbasaur",
        "type 1": "Grass",
        "type 2": "Poison" 
    },
    {
        "id": "1",
        "number": "002",
        "name": "Ivysaur",
        "type 1": "Grass",
        "type 2": "Poison" 
    },
    {
        "id": "2",
        "number": "003",
        "name": "Venusaur",
        "type 1": "Grass",
        "type 2": "Poison" 
    },
    {
        "id": "3",
        "number": "004",
        "name": "Charmander",
        "type 1": "Fire",
        "type 2": "" 
    },
    {
        "id": "4",
        "number": "005",
        "name": "Charmeleon",
        "type 1": "Fire",
        "type 2": "" 
    },
    {
        "id": "5",
        "number": "006",
        "name": "Charizard",
        "type 1": "Fire",
        "type 2": "Flying" 
    },
    {
        "id": "6",
        "number": "007",
        "name": "Squirtle",
        "type 1": "Water",
        "type 2": "" 
    },
    {
        "id": "7",
        "number": "008",
        "name": "Wartortle",
        "type 1": "Water",
        "type 2": "" 
    },
    {
        "id": "8",
        "number": "009",
        "name": "Blastoise",
        "type 1": "Water",
        "type 2": "" 
    },
    {
        "id": "9",
        "number": "010",
        "name": "Caterpie",
        "type 1": "Bug",
        "type 2": "" 
    },
    {
        "id": "10",
        "number": "011",
        "name": "Metapod",
        "type 1": "Bug",
        "type 2": "" 
    },
    {
        "id": "11",
        "number": "012",
        "name": "Buterfree",
        "type 1": "Bug",
        "type 2": "Flying" 
    },
    {
        "id": "12",
        "number": "013",
        "name": "Weedle",
        "type 1": "Bug",
        "type 2": "Poison" 
    },
    {
        "id": "13",
        "number": "014",
        "name": "Kakuna",
        "type 1": "Bug",
        "type 2": "Poison" 
    },
    {
        "id": "14",
        "number": "015",
        "name": "Beedrill",
        "type 1": "Bug",
        "type 2": "Poison" 
    },
    {
        "id": "15",
        "number": "016",
        "name": "Pidgey",
        "type 1": "Normal",
        "type 2": "Flying" 
    },
    {
        "id": "16",
        "number": "017",
        "name": "Pidgeotto",
        "type 1": "Normal",
        "type 2": "Flying" 
    },
    {
        "id": "17",
        "number": "018",
        "name": "Pidgeot",
        "type 1": "Normal",
        "type 2": "Flying" 
    },
    {
        "id": "18",
        "number": "019",
        "name": "Rattata",
        "type 1": "Normal",
        "type 2": "" 
    },
    {
        "id": "19",
        "number": "020",
        "name": "Raticate",
        "type 1": "Normal",
        "type 2": "" 
    }
  ]

//Data for pokemon type colors
let typeColors = {
    //pokemon types normal, fire, water, grass, poison, flying, bug
    Normal: '#A8A77A',
	Fire: '#EE8130',
	Water: '#6390F0',
	Grass: '#7AC74C',
    Poison: '#A33EA1',
    Flying: '#A98FF3',
    Bug: '#A6B91A',
}
//declares variables used
let searchIndex;
let searchName;
let buttonName;
let buttonIndex;
  
//For loop to go through the 20 pokemon and add each of their own boxes with their various descriptions
for(let i = 0; i<20; i++){
    //stores pokemon from the Object array into the variable pkmn based on the ID Number thats assigned
    let pkmn = pokemon.find(pokemon => pokemon.id == i);
    //variables to help create the HTML Elements
    let poke_card = document.getElementById('poke-card');
    let pokeElement = document.createElement("div");
    pokeElement.classList.add('pokemon');
//Creates the HTML Elements dynamically from javaScript and inserts all pokemon into an unOrdered List
let pokeInnerHtml = '<div class="img-container"> '
 + `<img src="images/${i+1}.png" alt=""> `
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

//Search Functionality for Names
buttonName = document.querySelectorAll("button")[0];
buttonName.onclick = () => {
    searchName = document.getElementById('searchValName').value;
    if (!/^[a-zA-Z]+$/.test(searchName)){   
    alert("Please enter between A-Z and a-z");
    }
    else {
        alert(" Name:"+pokemon.find(pokemon => pokemon.name == searchName).name + " \n Type1 :" +pokemon.find(pokemon => pokemon.name == searchName)["type 1"]+ " \n Type2 :" + pokemon.find(pokemon => pokemon.name == searchName)["type 2"] + " \n Index :" +pokemon.find(pokemon => pokemon.name == searchName).number);
    }
};
//Search Functionality for Index Number
buttonIndex = document.querySelectorAll("button")[1];
buttonIndex.onclick = () => {
    searchIndex = document.getElementById('searchValIndex').value;    
    if (!searchIndex > 0 && !searchIndex < 21){ 
    alert("Please enter a number between 001-020");
    }
    else {
        alert(" Name:"+pokemon.find(pokemon => pokemon.number == searchIndex).name + " \n Type1 :" +pokemon.find(pokemon => pokemon.number == searchIndex)["type 1"]+ " \n Type2 :" + pokemon.find(pokemon => pokemon.number == searchIndex)["type 2"]+ " \n Index :" +pokemon.find(pokemon => pokemon.number == searchIndex).number);
    }
};
}

