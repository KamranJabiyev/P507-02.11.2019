// 2-task

// let month = 3;
// let amount = 1000;
// let reminder = amount % month;
// let monthly_payment = (amount - reminder) / month;

//getStudentName - camel case
//get-student-name - kebab case
//get_student_name - under case

// for (let i = 1; i <= month; i++) {
//     if (i == month) {
//         console.log(month + "-ci ay odenish: " + (monthly_payment + reminder));
//     }
//     console.log(i + "-ci ay odenish: " + monthly_payment);
// }


// 3-task
// let arr = [-15, -18, -100, -20, -90];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max)


// NEW LESSON 
//part-1 switch case

// let day = new Date().getDay();

// switch (day) {
//     default: console.log("Hefte sonu deyil")
//     break;
//     case 6:
//             console.log("Bu gun shenbedir")
//         break;
//     case 0:
//             console.log("Bu gun bazardir")
// }




//part-2 function


// function getPower(number, power = 1) {
//     let result = 1;
//     for (let i = 0; i < power; i++) {
//         result *= number;
//     }
//     return result;
// }

// const getPower = (number, power) => {
//     let result = 1;
//     for (let i = 0; i < power; i++) {
//         result *= number;
//     }
//     return result;
// }

// function Sum(n1, n2) {
//     return n1 + n2;
// }

// function getPi() {
//     return 3.14;
// }
// console.log(getSquare(5))

// function getSquare(n) {
//     return n * n;
// }

// const getSquare = n => n * n;

// const getPi = () => 3.14; //arrow function

// let x = getPower(2, 2);
// console.log(Sum(x, getPower(x, 3)));

// function SumArrElm() {
//     let result = 0;
//     for (let elm of arguments) {
//         if (!isNaN(elm)) result += elm;
//     }
//     return result;
// }

// console.log(SumArrElm(15, 45, "Cemil", 55, "Sadiq"))

//task

// function Calculate(n1, n2, operator = "+") {
//     switch (operator) {
//         case "-":
//             return n1 - n2;
//         case "*":
//             return n1 * n2;
//         case "/":
//             return n1 / n2;
//         case "%":
//             return n1 % n2;
//         default:
//             return n1 + n2;
//     }
// }
// let x = Calculate(75, 5);
// console.log(x)

// let arr = [15, 25, 35];

let arr = new Array(15, 25, 35);