const convertDateTime = (dateTime: string) => {
  const date = new Date(dateTime);

  return [
    `${date.getHours()}:${
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    }`,
    `${date.toLocaleDateString("en-US", { weekday: "long" })}`,
    `${date.getDate()}`,
  ];
};

export default convertDateTime;
