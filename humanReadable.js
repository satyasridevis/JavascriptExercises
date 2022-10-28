function humanReadable(seconds) {
  let minutes, hours;
  if (seconds < 60) {
    console.log(`00:00:${seconds}`);
  } else if (seconds === 60) {
    console.log(`00:01:00`);
  } else if (seconds > 60) {
    minutes = seconds / 60;
    hours = minutes / 60;
    console.log(minutes);
    hours = minutes - 60;
    console.log(hours);
  }
}
humanReadable(3660);
