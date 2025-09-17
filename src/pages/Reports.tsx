import Navbar from "../components/Navbar";
import Button from "../components/Buttons";

const Reports = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-tan to-sage">
      <Navbar />
      <div className="p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-dark">Reports & Insights</h1>

        {/* Graph Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Wear Frequency</h2>
          <div className="w-full h-48 bg-slate-200 flex items-center justify-center">
            [Graph Placeholder]
          </div>
        </div>

        {/* Idle Items */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Idle Items</h2>
          <ul className="list-disc pl-6 text-slate-600">
            <li>Item A</li>
            <li>Item B</li>
          </ul>
        </div>

        <Button label="Export Report" className="self-start" />
      </div>
    </div>
  );
};

export default Reports;
