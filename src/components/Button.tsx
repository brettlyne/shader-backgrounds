import React from "react";
import "./Button.scss";

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  secondary?: false;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, secondary }) => {
  return (
    <button
      className={`Button ${secondary ? "secondary" : "primary"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
