// // 9. Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;
// let person = "jonas";
// let PI = 3.1415;

// let myFirstsJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// // 11. Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// javascriptIsFun = "YES!";
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// // 12. let, const, var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;
// // const job;

// var job = "programmer";
// job = "teacher";

// // 13. Basic operators
// // Math operators
// const now = 2037;
// const ageMark = now - 1997;
// const ageSara = now - 2018;
// console.log(ageMark, ageSara);
// console.log(ageMark * 2, ageSara / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageMark > ageSara);
// console.log(ageSara >= 18);

// const isFullAge = ageSara >= 18;
// console.log(isFullAge);

// console.log(now - 1991 > now - 2018);

// // 14. Operator precedence
// const now = 2037;
// const ageMark = now - 1997;
// const ageSara = now - 2018;

// // 17. Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// // template strings
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`String
// new line
// here
// test
// xd`);

// // 18. if else
// const age = 18;
// if (age >= 18) {
//   console.log(`Sara can start driving license 😁`);
// } else {
//   console.log(`Sara is below 18 years old`);
// }

// // 20. type conversion and coercion
// // type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof Nan);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
// console.log("23" * "2");
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// 22. Equaity operators == vs ===
// const favourite = Number(prompt(`What's your favourite number?`));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log(`Cool! 23 is an amazing number!`);
// } else if (favourite === 7) {
//   console.log(`Cool! 7 is an amazing number!`);
// } else if (favourite === 9) {
//   console.log(`Cool! 9 is an amazing number!`);
// } else {
//   console.log(`Different number!`);
// }

// if (favourite !== 23) {
//   console.log("Why not 23?");
// }

// // 24. Logical operators
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasDriversLicense);
// console.log(hasDriversLicense || hasDriversLicense);
// console.log(!hasDriversLicense && hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sara is able do drive`);
// } else {
//   console.log(`Someone else should drive...`);
// }

// // 26. The switch statement
// const cars = 10;

// switch (cars) {
//   case 10:
//   case 11:
//     console.log(`${cars} autek w twojej kolekcji, super!`);
//     break;
//   case 0:
//     console.log(`Widze dopiero zaczynasz swoja przygode ze zbieraniem`);
//     break;
//   case 100:
//     console.log(`Jestes prawdziwym kolekcjonerem, pierwsze ${cars} za toba`);
//     break;
//   case 1000:
//     console.log(`Jestes szalony to juz ${cars} autek`);
//     break;
//   default:
//     console.log(`inna liczba autek ${cars}`);
//     break;
// }

// // 28. Conditional operator (Ternary) Operator
// const age = 23;
// age >= 18
//   ? console.log(`I like to drink wine 😁`)
//   : console.log(`I like to drink water 💧`);

// const test = age >= 18 ? `wine` : `water`;

// console.log(test);
