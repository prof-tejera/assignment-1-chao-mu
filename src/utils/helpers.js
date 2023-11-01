const msPerSecond = 1000;
const msPerMinute = msPerSecond * 60;
const msPerHour = msPerMinute * 60;

export const padTime = (t) => t.toString().padStart(2, "0");

export const splitTimeMs = (timeMs) => {
  // Convert to hours, truncate the remainder.
  const hoursExact = timeMs / msPerHour;
  const hours = Math.floor(hoursExact);

  // Take the remainder from before and convert to minutes
  const minutesExact = (hoursExact - hours) * 60;
  const minutes = Math.floor(minutesExact);

  // Take the remainder from before and convert to seconds
  const secondsExact = (minutesExact - minutes) * 60;
  const seconds = Math.floor(secondsExact);

  return { hours, minutes, seconds };
};

export const joinTimeMs = ({ hours, minutes, seconds }) => {
  return hours * msPerHour + minutes * msPerMinute + seconds * msPerSecond;
};

export const bindEvent =
  (...onChanges) =>
  (event) => {
    onChanges.forEach((onChange) => onChange(event.target.value));
  };
