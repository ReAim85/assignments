document.getElementById("pokemon").addEventListener("submit", async function(event) {
    event.preventDefault();

    let numOfPoke = document.getElementById("pokeCountInp").value;
    let pokeType = document.getElementById("pokeTypeInp").value.toLowerCase();

    document.getElementById("pokemonCards").innerHTML = "";

    let count = 0;
    let i = 1;
    
    while(count < numOfPoke) {
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            if (!response.ok) {
                console.error("Error fetching Pokémon", i);
                i++;
                continue;
            }   

            let data = await response.json();
            console.log(`Fetched pokemon: ${data.name}`)
            
            let types = data.types.map(typeinfo => typeinfo.type.name);
            console.log(`Type for ${data.name}:`, types);

            if (types.includes(pokeType)) {
                renderPokemonCard(data, types);
                count++
            } 
        } catch (error) {
            console.log("Unable to fetch Pokémon: " + error);
        }
        i++;
    }
});

function renderPokemonCard(pokemon, types) {
    const pokemonContainer = document.getElementById('pokemonCards');
    let card = document.createElement("div");
    card.classList.add("pokemon-card");

    card.innerHTML = `
        <h3>${pokemon.name}</h3>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Type: ${types.join(", ")}</p>
    `;
    pokemonContainer.appendChild(card);
}
