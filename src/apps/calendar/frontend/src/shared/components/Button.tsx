import React from 'react';

type Props = {
  type?: 'submit' | 'reset' | 'button',
  styles: string,
  ariaLabel: string
};

export const Button = ({type, styles, ariaLabel}: Props): JSX.Element => {
  return (
    <button
      type={type}
      className={`button ${styles}`}>
      {ariaLabel}
    </button>
  );
};
