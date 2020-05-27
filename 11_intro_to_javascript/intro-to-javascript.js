// prompt("what is your name");

// alert("hello");

// document.write("hello there");


// var yourName = prompt("What is your name?");

// alert("Your name is " + yourName);


//----
// var tweet = prompt("compose your tweet");

// var tweetCount = tweet.length;
// var maxTweetCount = 180;
// var tweetDifference = maxTweetCount - tweetCount;

// alert("You have typed " + tweetCount + " characters, you have " + tweetDifference + " characters remaining");
//---


// alert("You have a virus");


// var name = "Angela";
// name.slice(0,3);


// var tweet = prompt("compose your tweet");

// var tweetCount = tweet.length;
// var maxTweetCount = 10;
// var tweetDifference = maxTweetCount - tweetCount;

// // alert("You have typed " + tweetCount + " characters, you have " + tweetDifference + " characters remaining");
// // alert("Your tweet: " + tweet.slice(0,maxTweetCount));

// alert( tweet.toUpperCase());
// alert( tweet.tolowerCase());

// function getMilk(bottles) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }

// getMilk();
// getMilk();

  
// function lifeInWeeks(age) {
//   lifeSpan = 30; // years;
//   var yearsLeft = lifeSpan - age;
//   var monthsLeft = yearsLeft*12;
//   var weeksLeft = yearsLeft*52;
//   console.log("You have " + yearsLeft + " years, " + monthsLeft + " months, and " + weeksLeft + " weeks left");
// }

// lifeInWeeks(23);


// function round_to_precision(x, precision) {
//     var y = +x + (precision === undefined ? 0.5 : precision/2);
//     return y - (y % (precision === undefined ? 1 : +precision));
// }


//---
// var n = Math.random();
// n*= 100;
// n = Math.floor(n) + 1;
// console.log(n);

// function bmiCalculator(weight, height) {
//   inchesToMeters = 0.0254;
//   lbsToKg = 2.2;
//   weight /= lbsToKg;
//   height *= inchesToMeters;
 
//   bmi = weight / Math.pow(height,2);
//   return round_to_precision(bmi, 0.1)
// }

// function bmiInterpretation(bmi) {
//   if ( bmi<18.5) {
//     return "You are underweight.";
//   }
//   if (18.5 <= bmi && bmi <= 24.9 ) {
//     return "You have a normal weight";
//   }
//   else {
//     return "You are overweight";
//   }
// }

// bmi = bmiCalculator(155, 68);
// interpretation = bmiInterpretation(bmi);
// console.log(interpretation);
//---

//---
// function isLeap(year) {
//   if (year%4 === 0) {
//     if (year%100 === 0) {
//       if (year%400 === 0) {
//         return "Not leap year.";
//       }
//       return "Leap year.";
//     }
//     return "Leap year.";
//   }
//   return "Not leap year.";
// }

// year = 2000;
// console.log(isLeap(year));
//---

//---
// var guestList = ["ben", "clair"];

// var guestName = prompt("what is your name?");

// if (guestList.includes(guestName)) {
//   alert("Welcome");
// } else {
//   alert("Go Away");
// }
//---


//---
// var output = [];


// function fizzBuzz() {
//   // Write code here.
//   count = output.length+1;
//   if (count%3 === 0 && count%5 === 0) {
//     output.push("fizzbuzz");
//   }
//   if (count%3 === 0 && count%5 !==0) {
//     output.push("fizz");
//     }
//   if (count%3 !== 0 && count%5 === 0) {
//     output.push("buzz");
//   }
//   if (count%3 !== 0 && count%5 !==0) {
//     output.push(output.length+1)
//     }
  
//   console.log(output);
// }


// for (var i=0;i<15; i++) {
//   fizzBuzz();
// }
//---

//---
// function randomChoice(array) {
//   index = Math.floor( array.length * Math.random() );
//   return array[index] 
// }

// guestList = ["Ben", "Clair","Rosalind","Benito"];
// guest = randomChoice(guestList);
// console.log(guest + " is going to buy lunch today");
//---

// var i = 1;
// while(i<2) {
//   console.log(i);
//   i++;
// }


//---
// function beer() {
//   numberOfBottles = 100;
//   while(numberOfBottles !== 0) {
//     console.log(numberOfBottles + " of beer on the wall, " + numberOfBottles + " bottles of beer!");
//     numberOfBottles--;
//     console.log("Take one down, pass it around, " + numberOfBottles + " bottles of beer on the wall");
    
//   }
// }

// beer()
//---


//---
// Fibonnaci sequence
// function fibonacciGenerator(n) {
//   var sequence = [];
//   if (n === 0) {
//     return sequence;
//   }
//   sequence.push(1);
//   if (n===1) {
//     return sequence;
//   }
//   sequence.push(1);
//   if (n===2) {
//     return sequence;
//   }


//   for (var i=2; i<n; i++) {
//     var first = sequence[i-2];
//     var second = sequence[i-1];
//     var newValue = first + second;
//     sequence.push(newValue);
//   }
//   return sequence;
// }

// sequence = fibonacciGenerator(3);
// console.log(sequence);
//---
