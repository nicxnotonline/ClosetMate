import Navbar from "../components/Navbar";
import Button from "../components/Buttons";
const Closet = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sage to-tan">
      <Navbar />
      <div className="p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-dark">Closet</h1>

        {/* Filters + Actions */}
        <div className="flex justify-between items-center mb-4">
          <input type="text" placeholder="Search items..." className="px-3 py-2 rounded-md border border-sage bg-ivory" />
          <div className="flex gap-2">
            <Button label="Add New Item" />
            <Button label="Bulk Action" />
          </div>
        </div>

        {/* Grid of Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <div className="w-24 h-24 bg-slate-200 rounded-md mb-2"></div>
              <p className="font-semibold">Item {i}</p>
              <p className="text-xs text-slate-500">Available</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Closet;
