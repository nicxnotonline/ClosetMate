import Navbar from "../components/Navbar";
import Button from "../components/Buttons";

const Settings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-ivory to-cream">
      <Navbar />
      <div className="p-8 flex flex-col gap-6 max-w-xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-dark">Settings & Profile</h1>

        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark">Name</label>
            <input type="text" className="px-3 py-2 border rounded-md w-full" defaultValue="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark">Email</label>
            <input type="email" className="px-3 py-2 border rounded-md w-full" defaultValue="john@example.com" />
          </div>
          <div className="flex gap-2">
            <Button label="Save Changes" />
            <Button label="Delete Account" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
