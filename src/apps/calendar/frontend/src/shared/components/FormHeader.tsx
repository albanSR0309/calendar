import React, {Fragment} from 'react';

type Props = {
  title: string;
  caption: string;
};

export const FormHeader = ({title, caption}: Props): JSX.Element => {
  return (
    <Fragment>
      <strong>{title}.</strong>
      <div>{caption}</div>
      <br/>
    </Fragment>
  );
};
