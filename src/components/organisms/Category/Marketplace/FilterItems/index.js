export default function FilterItemsInHouse({ listComment, handleFilterData }) {
  return (
    <div key={listComment?.id} className="lg:flex items-center gap-5 ">
      <div className="grid grid-cols-6 gap-6 lg:grid lg:gap-6 lg:grid-cols-6 mt-6 ">
        <div>
          <button
            onClick={handleFilterData}
            value="all"
            className="bg-secondary ring-1 rounded-lg ring-primary lg:px-4 px-2 py-1 text-primary font-semibold text-sm"
          >
            All ({listComment.length})
          </button>
        </div>
        <div>
          <button
            onClick={handleFilterData}
            value={5}
            className="cursor-pointer hover:bg-secondary lg:inline-flex items-center gap-1 rounded-lg border py-1 lg:px-4 px-2 text-sm"
          >
            5 ⭐
          </button>
        </div>
        <div>
          <button
            onClick={handleFilterData}
            value={4}
            className="cursor-pointer hover:bg-secondary lg:inline-flex items-center gap-1 rounded-lg border py-1 lg:px-4 px-2 text-sm"
          >
            4 ⭐
          </button>
        </div>
        <div>
          <button
            onClick={handleFilterData}
            value={3}
            className="cursor-pointer hover:bg-secondary lg:inline-flex items-center gap-1 rounded-lg border py-1 lg:px-4 px-2 text-sm"
          >
            3 ⭐
          </button>
        </div>
        <div>
          <button
            onClick={handleFilterData}
            value={2}
            className="cursor-pointer hover:bg-secondary lg:inline-flex items-center gap-1 rounded-lg border py-1 lg:px-4 px-2 text-sm"
          >
            2 ⭐
          </button>
        </div>
        <div>
          <button
            onClick={handleFilterData}
            value={1}
            className="cursor-pointer hover:bg-secondary lg:inline-flex items-center gap-1 rounded-lg border py-1 px-2 text-sm"
          >
            1 ⭐
          </button>
        </div>
      </div>
    </div>
  );
}
