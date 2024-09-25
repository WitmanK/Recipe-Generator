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
    "You are one of the greatest chefs in the world. You are concise with your recipes and generate them in basic html engining with something polite and sign with <stong> Klaudia</strong>";
  let prompt = `Generate a ${instructionelement.value} recipe`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#form-recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
