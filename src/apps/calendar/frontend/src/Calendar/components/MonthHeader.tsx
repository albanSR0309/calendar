import React from 'react';

type Props = {
  month: Array<any>
};

export const MonthHeader = ({month}: Props): JSX.Element => {
  return (
    <div>
      <div className="month-calendar-header">
        {month.map((day: any, idx: number) => (
          <div key={idx}>
            {day.format('dddd')}
          </div>
        ))}
      </div>
    </div>
  );
};
