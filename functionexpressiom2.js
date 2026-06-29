// 1. check if a person is eligible to vote or not:

// function vote(age){    //first method
//     if(age >= 18){
//         return "Eligible for vote";
//     }
//     else{
//         return "Not Eligible for vote";
//     }
//     return 0;
// }
// let check =vote(18);
// console.log(check);

// const vote = function(age){   // second method
//       if(age >= 18){
//         return "Eligible for vote";
//     }
//     else{
//         return "Not Eligible for vote";
//     }
//     return 0;
// }
// let check =vote(21);
// console.log(check);

// 2. check if a student is passed or fail:

// function result(student){    //first method
//     if(student >= 33){
//         return "Pass";
//     }
//     else{
//         return "Faile";
//     }
//     return 0;
// }
// let check = result(33);
// console.log(check);

// const result = function(student){    //second method
//     if(student >= 33){
//         return "Pass";
//     }
//     else{
//         return "Faile";
//     }
//     return 0;
// }
// let check = result(91);
// console.log(check);

// 3. check the function expression to assign grades:

// function grade(student){    //first method
//     if(student >= 90){
//         return "GRADE A";
//     }
//     if(student >=75){
//         return "GRADE B";
//     }
//     if(student >= 60){
//         return "GRADE C";
//     }
//     if(student >= 40){
//          return "GRADE D";
//     }
//     else{
//         return "GRADE E";
//     }
//     return 0;
// }
// let check = grade(40);
// console.log(check);

// const grade = function (student){    //second method
//     if(student >= 90){
//         return "GRADE A";
//     }
//     if(student >= 75){
//         return "GRADE B";
//     }
//     if(student >= 60){
//         return "GRADE C";
//     }
//     if(student >= 40){
//          return "GRADE D";
//     }
//     else{
//         return "GRADE E";
//     }
//     return 0;
// }
// let check = grade(90);
// console.log(check);

// 4. check if a number is positive , negative or zero:

// function number(a){    //first method
//     if(a > 0){
//         return "Positive";
//     }
//     else if(a < 0){
//         return "Negative";
//     }
//     else{
//         return "Zero";
//     }
//     return 0;
// }
// let check = number(3);
// console.log(check);

// const number = function(a){    //second method
//     if(a > 0){
//         return "Positive";
//     }
//     else if(a < 0){
//         return "Negative";
//     }
//     else{
//         return "Zero";
//     }
//     return 0;
// }
// let check = number(4);
// console.log(check);

// 5. check number which divide two numbers: 

// function number(p,q){
//     // basic case
//     if(p === 0 || q === 0){
//         return 0;
//     }
//     // if(p > q){
//     //     return p/q;
//     // }
//     // else{
//     //     return q/p;
//     // }
//     return p/q;
// }
// let check = number(22,29);
// console.log(check);

// const number = function(p,q){
//  if(p/q){
//         return p/q;
//     }
//     else{
//         return q/p;
//     }
//     return 0;
// }
// let check = number(8,2);
// console.log(check);

// 6. find the sum of number from 1 to n:

// function  add(num){
//     let sum =0;
//     for(let i=1; i<=num; i++){
//         sum = sum + i;
//         // return sum;
//     }
//     return sum;
// }
// let total = add(5);
// console.log(total);

// const add = function(n){
//     let sum =0;
//     for(let q=1; q<=n; q++){
//         sum = sum + q;
//         // return sum;
//     }
//     return sum;
// }
// let check = add(10);
// console.log(check);

//7. check the number is divisible by both 3 & 5:

// function number(x){
//    if(x % 3 == 0 && x % 5 == 0){
//     return "number is divisible by 3 & 5"
//    }
//    else{
//     return "nuber is not divisible"
//    }
//     return 0;
// }
// let check = number(3);
// console.log(check);

// const number = function(y){
//     if(y % 3 == 0 || y % 5 == 0){
//         return "divisible by 3 & 5";
//     }
//     else{
//         return "Not divisible by 3 & 5";
//     }
//     return 0;
// }
// let total = number(3);
// console.log(total);

