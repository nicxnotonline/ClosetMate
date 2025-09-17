import React, { useState } from "react";
import Input from "../components/Input";
import TagSelector from "../components/TagSelectors";
import Button from "../components/Buttons";

const AddItem: React.FC = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [brand, setBrand] = useState("");

  // State for all tag fields
  const [category, setCategory] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [pattern, setPattern] = useState<string[]>([]);
  const [fabric, setFabric] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);
  const [season, setSeason] = useState<string[]>([]);
  const [occasion, setOccasion] = useState<string[]>([]);
  const [fitType, setFitType] = useState<string[]>([]);
  const [careType, setCareType] = useState<string[]>([]);
  const [condition, setCondition] = useState<string[]>([]);

  // Config array for dynamic mapping
  const tagFields = [
    { label: "Category", options: ["Top", "Bottom", "Dress", "Outerwear", "Footwear"], state: category, setState: setCategory },
    { label: "Type", options: ["Blouse", "Jeans", "Blazer", "Sneakers"], state: type, setState: setType },
    { label: "Color", options: ["Black", "White", "Blue", "Pastel Pink"], state: color, setState: setColor },
    { label: "Pattern", options: ["Solid", "Striped", "Floral", "Plaid"], state: pattern, setState: setPattern },
    { label: "Fabric/Material", options: ["Cotton", "Polyester", "Wool", "Denim", "Leather"], state: fabric, setState: setFabric },
    { label: "Size", options: ["S", "M", "L", "EU 38"], state: size, setState: setSize },
    { label: "Season", options: ["Summer", "Winter", "All-season"], state: season, setState: setSeason },
    { label: "Occasion", options: ["Casual", "Formal", "Workwear", "Activewear"], state: occasion, setState: setOccasion },
    { label: "Fit Type", options: ["Slim Fit", "Oversized", "Regular"], state: fitType, setState: setFitType },
    { label: "Care Type", options: ["Machine Wash", "Dry Clean", "Hand Wash"], state: careType, setState: setCareType },
    { label: "Condition", options: ["New", "Gently Used", "Worn"], state: condition, setState: setCondition },
  ];

  // Photo upload handler
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  // Save handler
  const handleSave = () => {
    const newItem = {
      photo,
      brand,
      category,
      type,
      color,
      pattern,
      fabric,
      size,
      season,
      occasion,
      fitType,
      careType,
      condition,
    };
    console.log("✅ Saved item:", newItem);
    alert("Item saved! Check console for data.");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-slate-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-slate-700 mb-6">➕ Add New Item</h1>

      {/* Photo Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">Upload Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="w-full border border-slate-300 rounded-lg px-3 py-2"
        />
        {photo && (
          <img
            src={URL.createObjectURL(photo)}
            alt="preview"
            className="mt-3 w-32 h-32 object-cover rounded-lg"
          />
        )}
      </div>

      {/* Brand Input */}
      <div className="mb-6">
        <Input label="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
      </div>

      {/* TagSelectors mapped dynamically */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tagFields.map((field) => (
          <TagSelector
            key={field.label}
            label={field.label}
            options={field.options} // default options, shared store manages added ones
            selected={field.state}
            onChange={field.setState}
          />
        ))}
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <Button
          label="Save Item"
          onClick={handleSave}
          className="!bg-brown-500 !text-white font-semibold hover:!bg-brown-600"
        />
      </div>
    </div>
  );
};

export default AddItem;
