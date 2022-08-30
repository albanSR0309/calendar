import React from 'react';

type Props = {
  sectionStyles?: string;
  containerStyles?: string;
  children: any;
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
