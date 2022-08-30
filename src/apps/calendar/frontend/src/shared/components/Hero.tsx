import React from 'react';
import {Link} from "react-router-dom";

type Props = {
  title: string;
  caption: string;
  ariaLabel: string;
  href: string;
};

export const Hero = ({title, caption, ariaLabel, href}: Props): JSX.Element => {
  return (
    <div className="hero">
      <div className="container hero-container">
        <h1>{title}</h1>
        <p>{caption}</p>
        <Link to={href}><button className="button button-primary">{ariaLabel}</button></Link>
      </div>
    </div>
  );
};
