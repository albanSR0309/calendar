import React from 'react';
import {useUser} from '../../Users/useUser';

type Props = {
  handlerLogout: Function;
};

export const Avatar = ({handlerLogout}: Props): JSX.Element => {
  const {user}: any = useUser();
  return (
    <div className="navbar-link" onClick={() => handlerLogout()}>
      <img
        src={`https://ui-avatars.com/api/?background=E6F4F1&color=548687&name=${user.name}`}
        alt="avatar"
        className="navbar-avatar"
      />
    </div>
  );
};
