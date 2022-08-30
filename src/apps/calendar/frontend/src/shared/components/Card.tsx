import React from 'react';
import dayjs from "dayjs";

type Props = {
  name: string;
  description: string;
  startAt: string;
  endAt: string;
  onClick: any;
};

export const Card = ({name, description, startAt, endAt, onClick}: Props): JSX.Element => {
  return (
    <div className="card" onClick={() => onClick()}>
      <div className="card-date"><div className="card-type"/>
        {dayjs(startAt).format("HH:mm")}
        -
        {dayjs(endAt).format("HH:mm")}
      </div>
      <h2 className="card-title">{name}</h2>
      <div className="card-caption">{description}</div>
    </div>
  );
};
