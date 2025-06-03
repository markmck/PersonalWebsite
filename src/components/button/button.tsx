import React from "react";
import "./button.css";

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
    className={`cybr-btn header-font ${isActive ? "cybr-btn--active" : ""}`}
>
    <span className="cybr-btn__label">
        {label.toUpperCase()}
        <span aria-hidden>_</span>
        <span aria-hidden className="cybr-btn__glitch">
            {label.toUpperCase()}_
        </span>
    </span>
</button>
);

export default Button;
