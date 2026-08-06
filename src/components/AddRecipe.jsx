export default function AddRecipe({
  newRecipe,
  onAddRecipeChange,
  handleSubmit,
  errorMessage,
}) {
  const categoryOptions = ["Breakfast", "Lunch", "Dinner", "Dessert"];

  return (
    <form
      onSubmit={handleSubmit}
      className="my-8 max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-5"
    >
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">Create New Recipe</h2>
        <p className="text-xs text-gray-500 mt-1">
          Share your culinary masterpiece with the world.
        </p>
      </div>

      {/* Recipe Name Input */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="name"
          className="text-xs font-bold text-gray-700 uppercase tracking-wider"
        >
          Recipe Name
        </label>
        <input
          id="name"
          value={newRecipe.name}
          onChange={(event) => onAddRecipeChange(event, "name")}
          type="text"
          placeholder="e.g., Homemade Blueberry Pancakes"
          className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all"
        />
      </div>

      {/* Description Textarea */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="description"
          className="text-xs font-bold text-gray-700 uppercase tracking-wider"
        >
          Recipe Description
        </label>
        <textarea
          id="description"
          value={newRecipe.description}
          onChange={(event) => onAddRecipeChange(event, "description")}
          rows="3"
          placeholder="What makes this dish special? Mention key flavors or details..."
          className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all resize-none"
        />
      </div>

      {/* Category Select Dropdown */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="category"
          className="text-xs font-bold text-gray-700 uppercase tracking-wider"
        >
          Category
        </label>
        <div className="relative">
          <select
            id="category"
            className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all appearance-none cursor-pointer"
            value={newRecipe.category}
            onChange={(event) => onAddRecipeChange(event, "category")}
          >
            <option value="" disabled>
              Select Category
            </option>
            {categoryOptions.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>

          {/* Custom dropdown chevron arrow icon */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Notes Textarea */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="notes"
          className="text-xs font-bold text-gray-700 uppercase tracking-wider"
        >
          Notes
        </label>
        <textarea
          id="notes"
          value={newRecipe.notes}
          onChange={(event) => onAddRecipeChange(event, "notes")}
          rows="2"
          placeholder="e.g., Substitutions, storage tips, or wine pairings"
          className="w-full px-3.5 py-2 text-sm bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all resize-none"
        />
      </div>
      {errorMessage !== "" ? (
        <p className="text-red-500 text-xs mt-1 mb-2">{errorMessage}</p>
      ) : null}

      {/* Submit Button */}
      <button
        type="submit"
        className="cursor-pointer w-full mt-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm shadow-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-50"
      >
        Add Recipe
      </button>
    </form>
  );
}
