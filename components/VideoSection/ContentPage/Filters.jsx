export function Filters({ searchQuery, onSearchChange, sortOrder, onSortChange, subjectFilter, onSubjectChange }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border px-4 py-2 rounded-md w-full md:w-1/3"
      />
      <div className="flex gap-4">
        <select
          className="border px-4 py-2 rounded-md"
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
        <select
          className="border px-4 py-2 rounded-md"
          value={subjectFilter}
          onChange={(e) => onSubjectChange(e.target.value)}
        >
          <option value="">Explore Videos</option>
          <option value="ca-final">CA Final</option>
          <option value="cs">CS</option>
          <option value="ca-intermediate">CA Intermediate</option>
        </select>
      </div>
    </div>
  );
}
