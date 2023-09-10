import React from 'react';

import './../styles/button.css';

interface ButtonProps {
  label: string;
  customClick: (value :string) => void;
  extraStyles?: string;
}

const Button: React.FC<ButtonProps> = ({ label, customClick, extraStyles }) => {

  const onCustomClick = (value: string) => {
    console.log(value);
    customClick(value);
  }

  return (
    <button onClick={() => onCustomClick(label)} className={`${extraStyles}`}>
      {label}
    </button>
  );
}

export default Button;