export default function RecipeCard({ recipe, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5 flex flex-col gap-3">
        {/* Title */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">
            {recipe.name}
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {recipe.description}
        </p>

        {/* Divider Line */}
        <hr className="border-gray-100 my-1" />

        {/* Meta Details Container */}
        <div className="flex flex-col gap-2 text-xs">
          {/* Category (Styled as a small pill/badge) */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-400 uppercase tracking-wider w-16">
              Category
            </span>
            <span className=" font-medium px-2 py-0.5 rounded-md border">
              {recipe.category}
            </span>
          </div>
          {recipe.notes && (
            <div className="flex flex-col gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-500 w-16 mt-0.5">
                Notes
              </span>
              <p className="text-gray-600 italic flex-1">{recipe.notes}</p>
            </div>
          )}
        </div>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(recipe.id)}
          type="button"
          className="cursor-pointer w-full mt-2 py-2.5 px-4 bg-white hover:bg-red-400 border hover:text-white border-red-500 text-red-500 text-sm font-semibold rounded-xl transition-colors shadow-sm shadow-red-50 focus:ring-1 focus:ring-red-200 focus:ring-opacity-50"
        >
          Delete Recipe
        </button>
      </div>
    </div>
  );
}
