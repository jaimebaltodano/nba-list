import React, { useState } from "react";

interface inputHook {
  id: string;
  initValue: string;
  label: string;
  handler: (val: string) => void;
}
const useInput = ({ id, initValue, label, handler }: inputHook) => {
  const [inputValue, setInputValue] = useState(initValue);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = evt.target;
    handler(value);
    setInputValue(value);
  };

  const renderInput = (className: string) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>{" "}
        <input
          id={id}
          name={id}
          value={inputValue}
          className={className}
          onChange={onChange}
        />
      </div>
    );
  };
  return {
    inputValue,
    renderInput,
  };
};

export default useInput;
