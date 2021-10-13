const findTheOldest = function (peopleArray) {
  if (Array.isArray(peopleArray)) {
    const oldestPerson = peopleArray.reduce((oldest, person) => {
      if (!oldest) return person;

      const oldestAge = calcAge(oldest);
      const personAge = calcAge(person);

      return oldestAge >= personAge ? oldest : person;
    });

    return oldestPerson;
  }
};

function calcAge(person) {
  return !person.yearOfDeath
    ? new Date().getFullYear() - person.yearOfBirth
    : person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
