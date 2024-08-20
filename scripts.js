const btn = document.getElementById('btn');

btn.addEventListener('click',fetchData);

async function fetchData() {
    try {

        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const resultText = document.getElementById('errorMsg');
        if (!response.ok) {
            resultText.textContent = 'The Pokemon Was not Found'
        }
        const data = await response.json();
        const img = data.sprites.front_default;
        const resultImg = document.getElementById('resultImg');
        resultText.style.display = "none"
        resultImg.src = img;
        resultImg.style.display = "block";
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

