import React, { forwardRef, useEffect, useState } from "react";

interface TextAreaProps {
    texto: string;
    placeholder: string;
    name: string;
    type?: string;
    customStyles?: React.CSSProperties;
    extraStyles?: string;
    onValueChange: (value: string) => void;
}

const TextArea = forwardRef(({texto,placeholder,name,type = "text",onValueChange,customStyles,extraStyles}: TextAreaProps) => {

    const [inputValue,setInputValue] = useState("");
    const [placeHold,setPlaceHolder] = useState("");
    const [inputName,setInputName] = useState("");

    const handleChange = (value: string) => {
        setInputValue(value);
        onValueChange(value);
    }

    useEffect( () => {
        setInputValue(texto);
        setInputName(name);
        setPlaceHolder(placeholder);
    },[name, placeholder, texto, type]);

  return (
    <textarea
      name={inputName}
      id={inputName}
      cols={30}
      rows={4}
      value={inputValue}
      placeholder={placeHold}
      className="p-4 border border-[#8B8986] w-full outline-[--color-primary] rounded-none"
    ></textarea>
  );
});

export default TextArea;
