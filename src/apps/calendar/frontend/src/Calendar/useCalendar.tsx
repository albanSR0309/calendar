import React, {useEffect, useState} from "react";
import dayjs from "dayjs";
import {MonthFinder} from "./repositories/CalendarRepository";

export const useCalendar = () => {
  const [currenMonth, setCurrentMonth] = useState(MonthFinder());
  const [monthId, setMonthId] = useState<any>(dayjs().month());
  const [selectedDay, setSelectedDay] = useState()
  const [selectedEvent, setSelectedEvent] = useState()

  useEffect(() => {
    setCurrentMonth(MonthFinder(monthId));
  }, [monthId]);

  function handleNextMonth() {
    setMonthId(monthId + 1);
  }

  function handlePrevMonth() {
    setMonthId(monthId - 1);
  }

  return {
    currenMonth,
    monthId,
    selectedDay,
    selectedEvent,
    handleNextMonth,
    handlePrevMonth,
    setSelectedEvent,
    setSelectedDay
  }
}
