function isSaturday(classes) {
  return classes.includes("- saturday");
};
function isSunday(classes) {
  return classes.includes("- sunday");
};
function isWeekDay(classes) {
  return !(isSaturday(classes) || isSunday(classes));
};
function isTuesday(classes) {
  return classes.includes("- tuesday");
};

async function isOddWeek(num) {
  return num % 2 === 1;
};
async function isEvenWeek(num) {
  return !(await isOddWeek(num));
};
async function isEvenThursday(num, classes) {
  return ((await isEvenWeek(num)) && classes.includes("- thursday"));
};
async function isSchoolDay(num, classes) {
  return (await isEvenThursday(num, classes) || isTuesday(classes)) && isWeekDay(classes);
};

module.exports = isSchoolDay;
