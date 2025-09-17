// src/components/Input.tsx
import React from "react";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-sm text-slate-700 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent bg-white"
      />
    </div>
  );
};

export default Input;
