// Récupérer les éléments
const form = document.getElementById("libform");
const nounInput = document.getElementById("noun");
const adjInput = document.getElementById("adjective");
const personInput = document.getElementById("person");
const verbInput = document.getElementById("verb");
const placeInput = document.getElementById("place");
const storySpan = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle-button");

// Tableau pour stocker les stories générées
let stories = [];

// Fonction pour créer une story
function generateStory() {
    const noun = nounInput.value.trim();
    const adjective = adjInput.value.trim();
    const person = personInput.value.trim();
    const verb = verbInput.value.trim();
    const place = placeInput.value.trim();

    // Vérifier que les inputs ne sont pas vides
    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill in all fields before generating a story!");
        return;
    }

    // Différentes histoires possibles
    const storyTemplates = [
        `${person} went to the ${place} with a ${adjective} ${noun} and decided to ${verb}.`,
        `One day, ${person} saw a ${adjective} ${noun} in the ${place} and had to ${verb} it!`,
        `In the ${place}, ${person} found a ${noun} so ${adjective} that they couldn't resist to ${verb}.`,
        `Everyone was shocked when ${person} took the ${adjective} ${noun} to ${place} and started to ${verb}.`
    ];

    // Générer une story aléatoire
    const randomStory = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
    
    // Afficher
    storySpan.textContent = randomStory;

    // Sauvegarder dans le tableau pour shuffle
    stories = storyTemplates;
}

// Événement submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    generateStory();
});

// Bonus: shuffle button
shuffleButton.addEventListener("click", () => {
    if (stories.length === 0) return; // pas de story encore
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    storySpan.textContent = randomStory;
});
