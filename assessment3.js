var num1 = 10
var num2 = 18
var sum = num1 + num2

var firstName;
firstName = "Marlie"
console.log(firstName);
var lastName;
lastName ="Shirley"
console.log(lastName);

var hello = "Hello, my name is";
var fullName = firstName + " " + lastName;
var helloAndName = hello + fullName;
console.log(helloAndName);

var ssn = "123-45-6789";
var lastFourDigits = ssn.slice(7);

var suits["Hearts" "Clubs" "Spades" "Diamonds"];
console.log(suits[2]);

var bool = true;
if(bool == true) {
    console.log("The boolean is true");
}

var speed = 80;
var seenByCop = true;
if(speed >80 && seenByCop == true){
    console.log("You got cought!");
} else if(speed <80 && seenByCop == false) {

    console.log("You're safe...for now");
}
















//1. Create two variables, num1 and num2, and assign a numerical value to each. Finally, create a third variable, sum, and assign it as a value the sum of num1 and num2.


//2. Create two variables, firstName and lastName, and assign them the appropriate values from your name. Using string concatenation, log the following phrase to the console: “Hello, my name is firstName lastName”, where firstName and lastName are replaced with the values from the variables.


//3. Using the slice, substring, or substr methods, pull the last four characters from the following string:

var ssn = "123-45-6789";

//4. Create an array called suits that contains the four different suits from a standard deck of cards.


//5. Print out the third suit from your suits array.


//6. Create a variable, bool. Using an if statement, if bool is true, print out “The Boolean is true”.


//BONUS

//7. Create two Boolean variables, speed and noticedByCop.  Using an if statement, check to see if speed is above 80 AND noticedByCop is equal to true. If both of these are met, print out “You got caught!” to the console. Add an else block to the if statement and print out “You’re safe…for now” in the case both of those conditions aren’t met.