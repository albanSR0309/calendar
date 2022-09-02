import React from 'react';

type Props = {
  sectionStyles?: string;
  containerStyles?: string;
  children: React.ReactNode;
};

export const Section = ({sectionStyles, containerStyles, children}: Props): JSX.Element => {
  return (
    <section className={sectionStyles}>
      <div className={containerStyles}>
        {children}
      </div>
    </section>
  );
};
