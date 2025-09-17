import React, { useState, useEffect } from "react";
import { getOptions, addOption } from "../utils/tagOptionsStore";

interface TagSelectorProps {
  label: string;
  options: string[]; // default options
  selected: string[];
  onChange: (tags: string[]) => void;
}

const TagSelector: React.FC<TagSelectorProps> = ({ label, options: defaultOptions, selected, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<string[]>([]);

  // Load options from shared store on mount
  useEffect(() => {
    setOptions(getOptions(label, defaultOptions));
  }, [label, defaultOptions]);

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim();
    if (!trimmedTag) return;

    // Add to selected tags
    if (!selected.includes(trimmedTag)) onChange([...selected, trimmedTag]);

    // Add to shared store if new
    addOption(label, trimmedTag);

    // Update local state options
    setOptions(getOptions(label, defaultOptions));

    setInputValue("");
  };

  const removeTag = (tag: string) => {
    onChange(selected.filter((t) => t !== tag));
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm text-slate-700 font-medium">{label}</label>

      {/* Selected Tags */}
      <div className="flex flex-wrap gap-2">
        {selected.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-brown-200 text-brown-800 text-sm cursor-pointer"
            onClick={() => removeTag(tag)}
          >
            {tag} ✕
          </span>
        ))}
      </div>

      {/* Input & Add */}
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add or select a tag"
          className="px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brown-500 flex-1"
          onKeyDown={(e) => e.key === "Enter" && addTag(inputValue)}
        />
        <button
          onClick={() => addTag(inputValue)}
          type="button"
          className="px-3 py-2 bg-brown-500 text-white rounded-lg"
        >
          Add
        </button>
      </div>

      {/* Options */}
      <div className="flex flex-wrap gap-2 mt-2">
        {options.map((option) => (
          <span
            key={option}
            className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
              selected.includes(option) ? "bg-brown-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => addTag(option)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagSelector;
