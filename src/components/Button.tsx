import React from 'react';

import './../styles/button.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
  extraStyles?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, extraStyles }) => {
  return (
    <button onClick={onClick} className={`${extraStyles}`}>
      {label}
    </button>
  );
}

export default Button;