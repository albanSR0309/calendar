import React from 'react';

type Props = {
  type: string;
  label: string;
  placeholder: string;
  value: string;
  min?: string;
  onChange: Function;
};

export const Input = ({type, label, placeholder, value, min, onChange}: Props): JSX.Element => {
  return (
      <input
        className="input"
        name={label}
        type={type}
        placeholder={placeholder}
        value={value}
        min={min}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
  );
};
