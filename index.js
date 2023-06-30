// const number = -7;
// console.log(Math.abs(number));

const number = 7.50;
// const output  = Math.ceil(number);
// const output  = Math.floor(number);
// console.log(output);

const output = Math.random() * 6;
// const random = Math.floor(output);
const random = Math.ceil(output);
// console.log(random);

let first = 5;
let second = 10;
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

[first, second] = [second, first];
// console.log(first, second);

let minister = 250;
let businessman = 200;
let bcscader = 100;

// if(minister > businessman && minister > bcscader){
//     console.log("Minister er taka business er cheye beshi.");
// }else if(businessman > minister && businessman > bcscader){
//     console.log("Businessman er taka beshi.")
// }else{
//     console.log("Bcs cader er taka beshi.")
// }

const max = Math.max(minister, businessman, bcscader);
// console.log(max);

function largestNumber(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3) {
        return num2;
    }else {
        return num3;
    }
}

var result = largestNumber(2000, 500, 400);
// console.log("The largest number is:", result);

const numbers = [1, 2, 3, 10, 30];
// let sum = 0;
// for(let i=0; i<numbers.length; i++){
//     let element = numbers[i];
//     // sum = sum + element;
//     sum += element;
//     // console.log(element);
// }

// console.log(sum);

// const ages = [20, 80, 10, 90];

// function sumOfArray(array){
//     let sum = 0;
//     for(let i=0; i<array.length; i++){
//         let element = array[i];
//         // sum = sum + element;
//         sum += element;
//         // console.log(element);
//     }

//     return sum;
// }

// const sumOfOurAge = sumOfArray(ages);
// console.log(sumOfOurAge);

const ages = [20, 80, 10, 90];

function largestElement(array){
    let largest = 0;
    for(let i=0; i<array.length; i++){
        let element = array[i];
        if(element > largest){
            largest = element;
        }
    }

    return largest;
}

// const agesResult = largestElement(ages);
// console.log(agesResult);

// const fibo = [0,1];
// // fibo[2] = fibo[0] + fibo[1];
// // fibo[3] = fibo[1] + fibo[2];
// for(let i=2; i<=10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);

function fibonacciSeries(number){
    if(typeof(number) == "string"){
        return "Please enter a valid number."
    }
    if(number <= 2){
        return "Please eneter a number greater than 2."
    }
    const fibo = [0,1];

    for(let i=2; i<number; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }

    return fibo;
}

var output1 = fibonacciSeries("ahahh");
console.log(output1);