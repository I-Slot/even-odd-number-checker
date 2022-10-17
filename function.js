"use strict";
//alert("Connected")

//Function Definition
// function sayHello1() {
//     //this function prints hello to the console
//     console.log("Hello!")
// }

// // Calling function or Function execution
// sayHello1();


// function sayHello2(yourname) {
//     console.log(`Hello ${yourname}!`)
    
// }

// sayHello2("Ismail")
// sayHello2("Adeshola")


// console.log("Show Sum")

// function showSum(sum1, sum2, sum3) {
//     let totalSum = sum1 + sum2 + sum3;
//     // console.log(`the total sum is ${sum1+sum2+sum3} : 1`)
//     console.log(`the total sum is ${totalSum} : 2`)
// }

// showSum(2,4,9)
// showSum(99, 56, 9)


// // let num1 = 27;
// // let num2 = 22;
// // let num3 = 45;

// function calcAvg(num1, num2, num3) {
//     let total = num1 + num2 + num3;
//     let average = total / 3;
//     // console.log(avarage);
//     return average;
// }


// let average = 0;

// average = calcAvg(10, 15, 20);
// console.log(average)
// console.log("The Average is " + calcAvg(10, 15, 20));


// set click even for the button
document.getElementById("even").onclick = checkIfEven;



// If Else Methood


function checkIfEven() {
    // alert("connected");
    const input = document.getElementById("num").value;
    console.log(`Your input is ${input}`);
    console.log(typeof (input))
    if (input % 2 == 0) {
        document.getElementById("output").textContent = `Your input is even number!`
    } else {
        document.getElementById("output").textContent= `Your input is odd even!`
    }
}
// Strike Status ?
//  const salary = true;
//     if (salary == true) {
//         const salary = true;
//         console.log("strike is called off");
//     } else {
//         console.log("strick continues")
//     }
//  const strike = (salary == true) ? "Strike called off" : "Strike continues";
//  console.log(strike);

    // const result = resume? "Strike Suspended" : "Strike Continues"
   

// console.log("The result is " + result);



// ============================
// //Condtional Ternary method
// ============================
// function checkIfEven() {
//     // alert("Connected")
//     const number = parseInt(document.getElementById("num").value);
//     //console.log("Your input is " + number);
//     const answer = isEven(number) ? "even" : "odd";
//     console.log(answer)
//     document.getElementById("output").textContent= `${number} is ${answer}`
// }




//Function for calculatng even number or odd number

// function isEven(num) {
//     return (num % 2 == 0);

//     /*
//     let remainder = num % 2;
//     console.log(remainder);
//     return (remainder == 0);

//     y
//     /*
//     if (remainder == 0) {
//         return true;
//     } else {
//         return false;
//     }
//     */
// }

// console.log(isEven(22));
// console.log(isEven(21));

// let remainder = isEven(40);
// console.log("Remainder is " + remainder)
// isEven(223);