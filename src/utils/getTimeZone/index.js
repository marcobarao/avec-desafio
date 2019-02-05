const getTimeZone = (timeZoneOffset = new Date().getTimezoneOffset()) => {
  const timeZone = timeZoneOffset / -60;

  if (timeZone > 0) return `UTC+${timeZone}`;
  if (timeZone < 0) return `UTC${timeZone}`;
  return 'UTC';
};

export default getTimeZone;
