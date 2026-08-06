import { useState } from "react";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";
import SearchRecipes from "./components/SearchRecipes";

const RECIPES_DATA = [
  {
    id: 1,
    name: "Classic Avocado Toast",
    description:
      "Crispy sourdough bread topped with mashed avocado, chili flakes, and a drizzle of olive oil.",
    category: "Breakfast",
    notes:
      "Toast the sourdough bread. Mash avocado with salt and lime. Spread on toast and top with chili flakes.",
  },
  {
    id: 2,
    name: "Honey Garlic Salmon",
    description:
      "Pan-seared salmon fillets glazed in a sweet and savory garlic butter sauce.",
    category: "Lunch",
    notes:
      "Season salmon with salt and pepper. Sear fillets in a hot pan for 4 mins. Pour glaze over fish and simmer.",
  },
  {
    id: 3,
    name: "Berry Banana Smoothie",
    description:
      "A thick, refreshing blend of frozen mixed berries, banana, and almond milk.",
    category: "Drink",
    notes:
      "Add fruits and milk into a blender. Blend on high speed until smooth. Pour into a glass and enjoy hot or cold.",
  },
  {
    id: 4,
    name: "Pesto Pasta",
    description:
      "A classic Italian pasta dish filled with a creamy pesto sauce.",
    category: "Dinner",
    notes:
      "Cook pasta according to package instructions. Whisk together pesto ingredients. Drizzle over cooked pasta and serve.",
  },
  {
    id: 5,
    name: "Grilled Chicken Salad",
    description:
      "A refreshing and healthy salad with grilled chicken, tomatoes, and a drizzle of olive oil.",
    category: "Lunch",
    notes:
      "Grill chicken until cooked through. Slice tomatoes and combine with chicken. Toss with olive oil and serve.",
  },
  {
    id: 6,
    name: "Cranberry Sauce Pasta",
    description:
      "A creamy and flavorful pasta dish with a tangy cranberry sauce.",
    category: "Dinner",
    notes:
      "Cook pasta according to package instructions. Whisk together sauce ingredients. Drizzle over cooked pasta and serve.",
  },
];
const initialNewRecipe = {
  name: "",
  description: "",
  category: "",
  notes: "",
};
function App() {
  const [recipes, setRecipes] = useState(RECIPES_DATA);
  const [newRecipe, setNewRecipe] = useState(initialNewRecipe);
  const [searchValue, setSearchValue] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  let filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );

  function handleAddRecipeChange(event, identifier) {
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [identifier]: event.target.value,
    }));
  }
  function handleAddRecipe(event) {
    event.preventDefault();
    const missing = ["name", "description", "category", "notes"].filter(
      (key) => !newRecipe[key].trim(),
    );
    if (missing.length > 0) {
      setErrorMessage(
        `Please fill in mandatory field${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}`,
      );
      return;
    }
    setRecipes((prevRecipes) => [
      ...prevRecipes,
      { ...newRecipe, id: crypto.randomUUID() },
    ]);
    setNewRecipe(initialNewRecipe);
    setErrorMessage("");
  }
  function handleRecipeDelete(recipeId) {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== recipeId),
    );
  }
  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }
  return (
    <>
      <Header />
      <SearchRecipes
        onSearchChange={handleSearchChange}
        searchValue={searchValue}
      />
      <p className="text-gray-500 mt-4 font-semibold text-sm mb-2 text-center">
        Showing {filteredRecipes.length} of {recipes.length} recipes
      </p>
      {filteredRecipes.length === 0 && searchValue !== "" ? (
        <p className="text-center text-gray-500 mt-4 font-semibold">
          No recipes were found
        </p>
      ) : (
        <RecipeList recipes={filteredRecipes} onDelete={handleRecipeDelete} />
      )}
      <AddRecipe
        newRecipe={newRecipe}
        onAddRecipeChange={handleAddRecipeChange}
        handleSubmit={handleAddRecipe}
        errorMessage={errorMessage}
      />
    </>
  );
}

export default App;
