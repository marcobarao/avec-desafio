const twoDigits = string => `0${string}`.slice(-2);

const getDay = date => twoDigits(date.getDate());
const getMonth = date => twoDigits(date.getMonth() + 1);
const getYear = date => date.getFullYear();
const getHour = date => twoDigits(date.getHours());
const getMinutes = date => twoDigits(date.getMinutes());
const getSeconds = date => twoDigits(date.getSeconds());

const convertDate = (UTC = new Date().formatUTC) => {
  const date = new Date(UTC);
  const formatedDate = `${getDay(date)}/${getMonth(date)}/${getYear(date)} ${getHour(date)}:${getMinutes(date)}:${getSeconds(date)}`;
  return formatedDate;
};

export default convertDate;
