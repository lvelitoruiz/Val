import React, { forwardRef, useEffect, useState } from "react";

interface inputProps {
    texto: string;
    placeholder: string;
    name: string;
    type?: string;
    customStyles?: React.CSSProperties;
    extraStyles?: string;
    onValueChange: (value: string) => void;
}

const Input = forwardRef(({texto,placeholder,name,type = "text",onValueChange,customStyles,extraStyles}: inputProps) => {

    const [inputValue,setInputValue] = useState("");
    const [placeHold,setPlaceHolder] = useState("");
    const [inputType,setInputType] = useState("text");
    const [inputName,setInputName] = useState("");

    const handleChange = (value: string) => {
        setInputValue(value);
        onValueChange(value);
    }

    useEffect( () => {
        setInputValue(texto);
        setInputName(name);
        setPlaceHolder(placeholder);
        setInputType(type);
    },[name, placeholder, texto, type]);

  return (
    <input
      className={`h-[50px] px-4 border border-[#8B8986] w-full outline-[--color-primary] rounded-none ${extraStyles}`}
      type={inputType}
      name={inputName}
      id={inputName}
      value={inputValue}
      onChange={(event) => handleChange(event.target.value)}
      placeholder={placeHold}
    />
  );
});

export default Input;
