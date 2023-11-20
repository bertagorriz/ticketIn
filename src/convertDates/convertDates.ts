const convertDateTime = (dateTime: string) => {
  const [date, time] = dateTime.split("T");
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");

  return [day, month, year, hour, minute];
};

export default convertDateTime;
