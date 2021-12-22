// 1. Addition

// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator

let sum = 0;

for( let i= 200; i<=2700;i++){
    if((i%5===0  && i%3!==0) || (i%3===0 && i%5!==0)){
      sum = sum+i 
    }
}
console.log("Addition Problem", sum)

// 2. Shift the Values

// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// [2,1,6,4,-7]
// [-7,2,1,6,4]
const x = [2,1,6,4,-7];
console.log("shift the values", x.reverse())

// 3. FizzBuzz

// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]

let answer=[]
for(let i=1;i<=135;i++){
    if(i%3===0 && i%5===0){
        answer.push("fizzbuzz")
    }else if(i%5===0){
       answer.push("buzz")
    }else if (i%3===0){
        answer.push("fizz")
    }else{
        answer.push(i)
    }
    
}
console.log(answer)

// 4. Fibonacci

// For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

// 0 1 1 2 3 5 8 13 21...

// let firstNum = 0;
// let secondNum = 1;

// let i =1;

// while(i<1000000) {
//     firstNum = secondNum;
//     secondNum = i;
//     i = firstNum + secondNum;
// }

let firstNum = 0;
let secondNum = 1;
let i = firstNum + secondNum

for(i; i< 1000000; i = firstNum + secondNum) {
    firstNum = secondNum  ;
    secondNum = i;
    // console.log("fibonnaci", i)
  
}
console.log("fibonnaci", i)

// // 5. Remove the Negative

// // Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].
// const x5=[1,-2,4,1];
// const answer5=[]
// for(let i=0;i<x5.length;i++){
//     if(x5[i]>=0){
//         answer5.push(x[i])   
//     }
   
// }
// console.log(answer5)




