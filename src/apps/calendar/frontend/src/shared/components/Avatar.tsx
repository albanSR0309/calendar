import React from 'react';

type Props = {
  handlerLogout: Function;
};

export const Avatar = ({handlerLogout}: Props): JSX.Element => {
  return (
    <div className="navbar-link" onClick={() => handlerLogout()}>
      <img
        src="https://eu.ui-avatars.com/api/?&amp;background=E6F4F1&amp;color=548687&amp;name=Alban Rodriguez"
        alt="avatar"
        className="navbar-avatar"
      />
    </div>
  );
};
