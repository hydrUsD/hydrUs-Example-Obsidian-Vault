async function isOddWeek(num) {
  return num % 2 === 1;
}
async function isEvenWeek(num) {
  return !(await isOddWeek(num));
}
async function isEvenThursday(num, classes) {
  return ((await isEvenWeek(num)) && classes.includes("- thursday"));
}
console.log(isEvenThursday(50, "- thursday"));
module.exports = isEvenThursday;
