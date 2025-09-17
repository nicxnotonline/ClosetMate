import Navbar from "../components/Navbar";
import Button from "../components/Buttons";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cream to-sage">
      <Navbar />
      <div className="p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-dark">Dashboard</h1>

        {/* Outfit of the Day */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Outfit of the Day</h2>
          <div className="flex gap-4">
            <div className="w-32 h-32 bg-slate-200 rounded-lg flex items-center justify-center">Top</div>
            <div className="w-32 h-32 bg-slate-200 rounded-lg flex items-center justify-center">Bottom</div>
            <div className="w-32 h-32 bg-slate-200 rounded-lg flex items-center justify-center">Shoes</div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button label="Shuffle" />
            <Button label="Apply to All" />
            <Button label="Lock All" />
          </div>
        </section>

        {/* Quick View */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Outfits</h2>
          <p className="text-sm text-slate-600">Here you’ll see your next planned outfits.</p>
        </section>

        {/* Closet Health */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Closet Health</h2>
          <p className="text-sm text-slate-600">Idle items, sustainability score, and usage summary will show here.</p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
