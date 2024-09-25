function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-paragraph", {
    strings: ["Hello World"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#form-recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
