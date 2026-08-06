export default function SearchRecipes({ onSearchChange, searchValue }) {
  return (
    <div className="w-full max-w-xl mx-auto px-4 my-6">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          value={searchValue}
          onChange={onSearchChange}
          type="text"
          placeholder="Search recipes by name..."
          className="w-full pl-11 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-2xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 transition-all"
        />
      </div>
    </div>
  );
}
