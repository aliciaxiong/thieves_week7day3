console.log('test')
// instructions: Using what we learned in class, create a mockup of a Pokedex.. 
// when you enter a Pokemon name, it should make an API call and get all the data.. 
// then display some of that information to your html page

// (couple of pokemon names to try: "ditto", "pikachu", "charizard")

// Features should include:
// -name
// -image(hint: the path to the image is 'sprites' -> 'front_default')

// Extra credit: List out all the pokemon's abilities


const form = document.querySelector('form');
const table = document.querySelector('.pokemon')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data_input = (form[0]).value
    p_data(data_input)
});

const displayPokemon = (pokemon) => {
    table.innerHTML = "";

    const nameRow = document.createElement('tr');
    nameRow.innerHTML = `<td> </td><td>${pokemon.name}</td>`;
    table.appendChild(nameRow);

    const imageRow = document.createElement('tr');
    imageRow.innerHTML = `<td> </td> <td><img src="${pokemon.sprites.front_default}" alt="${pokemon.sprite}"</td>`
    table.appendChild(imageRow);

    const rowAbility = document.createElement('tr');
    rowAbility.innerHTML = `<td>Abilities:</td><td>${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</td>`;
    table.appendChild(rowAbility);
}


const p_data = async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json()
        displayPokemon(data);
};



