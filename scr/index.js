function displayRecipe(response) {
  new Typewriter("#recipe-paragraph", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionelement = document.querySelector("#searchBar");
  let apiKey = `9e6b9ffc064obdabfd0f8416t935a1a9`;
  let context =
    "You are one of the greatest chefs in the world. You are concise with your recipes and generate them in basic html, without the ```html and ``` at the start and end of the recipe. Can you also please end all recipes with something polite and sign with <stong> Klaudia</strong>";
  let prompt = `Generate a ${instructionelement.value} recipe`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe-paragraph");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">Generating a ${instructionelement.value} recipe...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#form-recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
