import React, { useState } from "react";
import Input from "../components/Input";
import TagSelector from "../components/TagSelectors";

const ItemDetails: React.FC = () => {
  // Example: Normally you’ll fetch this item’s data from backend
  const [brand, setBrand] = useState("Zara");
  const [color, setColor] = useState(["Black"]);
  const [pattern, setPattern] = useState(["Solid"]);
  const [condition, setCondition] = useState(["Gently Used"]);

  const handleUpdate = () => {
    const updatedItem = { brand, color, pattern, condition };
    console.log("🔄 Updated item:", updatedItem);
    // send to backend later
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-slate-700 mb-6">👕 Item Details</h1>

      {/* Image */}
      <div className="mb-6">
        <img
          src="https://via.placeholder.com/300"
          alt="item"
          className="w-48 h-48 object-cover rounded-lg"
        />
      </div>

      {/* Editable Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
        <TagSelector label="Color" options={["Black", "White", "Blue"]} selected={color} onChange={setColor} />
        <TagSelector label="Pattern" options={["Solid", "Striped", "Floral"]} selected={pattern} onChange={setPattern} />
        <TagSelector label="Condition" options={["New", "Gently Used", "Worn"]} selected={condition} onChange={setCondition} />
      </div>

      {/* Update Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleUpdate}
          className="px-6 py-2 bg-violet-500 text-white font-semibold rounded-lg shadow hover:bg-violet-600 transition"
        >
          Update Item
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;