import React from "react";

interface ButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  label,
  isActive = false,
  onClick,
  type = "button",
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-4 py-2 font-mono text-sm border transition-all duration-300 ${
      isActive
        ? "bg-cyber-secondary/20 border-cyber-primary text-cyber-accent glow-cyber-glow"
        : "border-terminal-border text-terminal-muted hover:border-cyber-primary/60 hover:text-cyber-light"
    }`}
  >
    {label.toUpperCase()}
  </button>
);

export default Button;
