// console.log("welcome to extarnal javaScript");
// document.write("Hello World")

// // let a = 10;
// //  let b = 40;
// //  let c = a + b;

// //  console.log("Answer is", c)


// let x = parseInt(prompt("Enter a value here"));
// let y = parseInt(prompt("Enter a value here"));

// let z = x + y;

// alert(z);

// const a = 20;
// const b = 5;

// const c = a * b;
// document.getElementById('ans').innerText = c;

// const valOne = 100;
// const valTwo = 80;

// if(valOne > valTwo){
//     console.log("Greater Value is", valOne)

// }else
// {
//     console.log("Greater value is ",valTwo)
// }

// const a = 20;
// const b = 30;

// (a>b) ? console.log("Greater value is", a) : console.log("Greater value is", b) 



// let marks = 65 ;
// if (marks < 35){
//     console.log("fail")
// }
//     else
//     {
//       if(marks <= 45)
//         console.log("Pass")

//       else{
//         if(marks >= 60 ){
//             console.log("Excellent")
//         }
//       }
//     }



    
// let loanStatus = prompt("");

// if (loanStatus == "c" || loanStatus == "C" ){
//   document.write("Customer not eligible");
// }

// if(loanStatus == "b"  || loanStatus == "B"){
// document.write("Loan Approved  75,000")
// }
// if(loanStatus == "a"  || loanStatus == "A"){
//   document.write("Loan Approved 1,00000")
// }else
// {
//   document.write("Invalid Status")
// }

// const loanStatus = prompt("");

// switch (loanStatus){
//   case "a":
//    case "A":

//    document.write("Loan Approved 1,00000")
//    break;

//    case "b":
//    case "B":
//    document.write("Loan Approved 75,0000")
//    break;

//    case "c":
//    case "B":
//    document.write("Customer Not eligible")
//    break;

//    default:
//     document.write("Invalid Status")
   
// }


// console.log("Hello world");
// document.writeln("hello world")


// for(let c=5; c<=50; c=c+5){
//  document.writeln(c)
// }

// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }

// console.log("The sum is:", sum);

// let multi = 1;

// for (let i = 1; i<= 5; i++){
//     multi *= i
// }
// console.log(multi)

// const myArr = ["Faizan", " ", "Shaikh"];
// document.writeln(myArr.concat());

// const myArr = [10, 20, 30, 40, 50 ]
// document.writeln(myArr)

// for(let c=0; c<=myArr.length; c++){
//   document.writeln(myArr[c])
// }

// const myFruits = ["Mango", "Apple", "Kiwi", "Banana"];

// console.log(myFruits);

// myFruits.push("Grapes", "Cherry")

// a = 5 ;
// b = a++;

// console.log(a, b)

// const myArr = ["Faizan", "Ahad", "Shabbir", "Khalid", "Junaid"];

// const newArr  = myArr.slice(1,3);
// console.log(newArr);
// console.log(myArr[myArr.length -1]);

// Object

// let myObj = {

//     Name : "Faizan",
//     age : 24,
//     ht : 5.8,
//     grt : function(){
//         alert("Welcome")
//     }

// }



myObj.grt();
console.log(myObj.age)

console.log(myObj)

let a = 23;
let b = 20;
let z = `template literals ${a + b}`;
console.log(z);
