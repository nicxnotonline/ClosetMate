// MainMenu.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Archive, Calendar, PlusCircle, Settings, BarChart2, User } from "lucide-react";


type Outfit = { image: string };

// Mock clothes (place in public/clothes/)
const mockClothes: string[] = [
  "/clothes/top1.jpg",
  "/clothes/top2.jpg",
  "/clothes/bottom1.jpg",
];

const MainMenu: React.FC = () => {
  const navigate = useNavigate();
  const [ootd, setOotd] = useState<Outfit | null>(null);

  const suggestedOutfit = mockClothes[Math.floor(Math.random() * mockClothes.length)];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-4">
      {/* Top Section: OOTD display */}
      <div className="flex-1 flex items-center justify-center mb-6">
        <div className="w-full max-w-md h-64 sm:h-80 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
          <img
            src={ootd ? ootd.image : suggestedOutfit}
            alt="OOTD"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Bottom Section: Navigation Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:bg-gray-100 transition"
        >
          <Home size={24} className="mb-1 text-blue-500 sm:mb-2 sm:text-28" />
          <span className="text-sm sm:text-base">Dashboard</span>
        </button>

        <button
          onClick={() => navigate("/closet")}
          className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:bg-gray-100 transition"
        >
          <Archive size={24} className="mb-1 text-green-500 sm:mb-2 sm:text-28" />
          <span className="text-sm sm:text-base">Closet</span>
        </button>

        <button
          onClick={() => navigate("/planner")}
          className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:bg-gray-100 transition"
        >
          <Calendar size={24} className="mb-1 text-purple-500 sm:mb-2 sm:text-28" />
          <span className="text-sm sm:text-base">Planner</span>
        </button>

        <button
          onClick={() => navigate("/reports")}
          className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:bg-gray-100 transition"
        >
          <BarChart2 size={24} className="mb-1 text-orange-500 sm:mb-2 sm:text-28" />
          <span className="text-sm sm:text-base">Reports</span>
        </button>

        <button
          onClick={() => navigate("/settings")}
          className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:bg-gray-100 transition"
        >
          <Settings size={24} className="mb-1 text-gray-700 sm:mb-2 sm:text-28" />
          <span className="text-sm sm:text-base">Settings</span>
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:bg-gray-100 transition"
        >
          <User size={24} className="mb-1 text-pink-500 sm:mb-2 sm:text-28" />
          <span className="text-sm sm:text-base">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
