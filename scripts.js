const btn = document.getElementById('btn');
const welcomeMsg = document.getElementById('welcomeMsg');

btn.addEventListener('click', fetchData);

async function fetchData() {
    try {
        welcomeMsg.textContent = '';
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const resultText = document.getElementById('errorMsg');
        if (!response.ok) {
            resultText.textContent = 'The Pokémon Was not Found';
            return;
        }
        const data = await response.json();
        
        // Displaying the Pokémon image
        const img = data.sprites.front_default;
        const resultImg = document.getElementById('resultImg');
        resultImg.src = img;
        resultImg.style.display = "block";

        // Displaying additional Pokémon details
        document.getElementById('pokemonHeight').textContent = `Height: ${data.height}`;
        document.getElementById('pokemonWeight').textContent = `Weight: ${data.weight}`;
        document.getElementById('pokemonType').textContent = `Type: ${data.types.map(type => type.type.name).join(', ')}`;
        document.getElementById('pokemonAbilities').textContent = `Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}`;

        resultText.style.display = "none";
    } catch (error) {
        errorMsg.textContent = 'No PokeMon Found';
    }
}
