function goodVsEvil(good, evil) {
  let goodArray = good.split(" ");
  let evilArray = evil.split(" ");
  let countofgood = 0;
  let countofevil = 0;
  let number;

  for (let i of goodArray) {
    number = Number(i);
    countofgood += number;
  }

  for (let i of evilArray) {
    number = Number(i);
    countofevil += number;
  }

  return countofgood === countofevil
    ? "Battle Result: No victor on this battle field"
    : countofgood > countofevil
    ? "Battle Result: Good triumphs over Evil"
    : "Battle Result: Evil eradicates all trace of Good";

  /* if (countofgood === countofevil) {
    return "Battle Result: No victor on this battle field";
  } else if (countofgood > countofevil) {
    return "Battle Result: Good triumphs over Evil";
  } else {
     return "Battle Result: Evil eradicates all trace of Good";
  }*/
}

goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1");
goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0");
goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0");
