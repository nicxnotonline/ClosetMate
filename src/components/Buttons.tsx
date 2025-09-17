import { FiSend } from "react-icons/fi";

interface ButtonProps {
  label: string;
  className?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  className = "",
  icon = <FiSend />,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-full flex items-center gap-2 text-dark bg-cream shadow-[-5px_-5px_10px_rgba(255,255,255,0.8),5px_5px_10px_rgba(0,0,0,0.25)] transition-all hover:shadow-inner hover:text-clay ${className}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Button;
