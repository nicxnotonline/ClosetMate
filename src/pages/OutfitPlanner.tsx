import Navbar from "../components/Navbar";
import Button from "../components/Buttons";

const OutfitPlanner = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cream to-clay">
      <Navbar />
      <div className="p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-dark">Outfit Planner</h1>

        {/* Date Range */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Plan Your Outfits</h2>
          <input type="date" className="px-3 py-2 rounded-md border border-sage mr-2" />
          <input type="date" className="px-3 py-2 rounded-md border border-sage" />
        </div>

        {/* Daily View */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Outfit for Selected Day</h2>
          <div className="flex gap-4">
            <div className="w-28 h-28 bg-slate-200 rounded-lg flex items-center justify-center">Top</div>
            <div className="w-28 h-28 bg-slate-200 rounded-lg flex items-center justify-center">Bottom</div>
            <div className="w-28 h-28 bg-slate-200 rounded-lg flex items-center justify-center">Shoes</div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button label="Swap" />
            <Button label="Lock" />
            <Button label="Save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitPlanner;
