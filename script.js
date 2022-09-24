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
        "type 2": "" 
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
  console.log("Hello World");
  let pkmn = pokemon.find(pokemon => pokemon.id == 19);
  console.log(pkmn.name)
  let num = "001";
  console.log(num+1);

 let poke_card = document.getElementById('poke-card');
 let pokeElement = document.createElement("div");
 pokeElement.classList.add('pokemon');

let pokeInnerHtml = '<div class="img-container"> '
 + '<img src="images/1.png" alt=""> '
 +'</div> '
 +'<div class="info"> '
 +'     <span class="number">#001</span> '
 +'       <br> '
 +'       <span class="name">Bulbasaur</span> '
 +'       <br> '
 +'       <small class="type">Type: <span>Grass</span></small> '
 +'</div> ' ;

pokeElement.innerHTML = pokeInnerHtml;
poke_card.appendChild(pokeElement);



