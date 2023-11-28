export interface DateTimeStructure {
  hour: string;
  weekDay: string;
  date: string;
}

const convertDateTime = (dateTime: string): DateTimeStructure => {
  const date = new Date(dateTime);

  return {
    hour: `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`,
    weekDay: `${date.toLocaleDateString("en-US", { weekday: "long" })}`,
    date: `${date.getDate()}`,
  };
};

export default convertDateTime;
