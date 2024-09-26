function displayRecipe(response) {
  new Typewriter("#recipe-paragraph", {
    strings: `<div class="recipe-content">${response.data.answer}</div>`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionelement = document.querySelector("#searchBar");
  let apiKey = `9e6b9ffc064obdabfd0f8416t935a1a9`;
  let context = `<div class="recipeGenerator">You are one of the greatest chefs in the world. Please generate the recipe using basic HTML with headings (<h1>, <h2>) and paragraphs (<p>). Ensure it's concise and ends politely, signed with <strong>Klaudia</strong>.</div>`;
  let prompt = `Generate a ${instructionelement.value} recipe`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe-paragraph");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">Generating a ${instructionelement.value} recipe...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#form-recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
