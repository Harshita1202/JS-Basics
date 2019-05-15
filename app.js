                               // LAB-SET (1)

// types of variables
var score = 100;          //Number

        var average = 40.5;       //Floating number
        
        var name = "sachin";      //String
        
        var retired = true;      //Boolean
        
        
        console.log(score);
        console.log(average);
        console.log(name);
        console.log(retired);
        console.log(score,average,name);  // Multiple console logs can be done using commas

// undefined type
var myName;
     console.log(myName);

// dynamic type conersion
var a = 5;
var b = "hello";
console.log(a+b); 

var a = 5;
a = "hello";
 console.log(a);
var b = 6;
console.log(b+a);      
var c = "1"
console.log(b+c);       
console.log(b*c);        
console.log(a*b); 

// basic arithmetic operations
var a = 5;
var b = 6;


var sum = a  + b;
var diff = a - b;
var product = a * b;
var division = a / b;
var modulus = a % b;


console.log("sum:",sum,"diff:",diff,"product:",product,"division:",division,"modulus:",modulus)  

sum++;

console.log(sum);  //increment

sum = sum + 2;

console.log(sum);

diff--;

console.log(diff);  //decrement

diff = diff -3;

console.log(diff);

// functions
function sum(a,b){
    return a+b;
}
var sum = function(a,b){
    return a+b
}

  function speak(){
    console.log("hello");
    };
    
    speak();   //this will return undefined
    function sum(a,b){
      return a + b;
    }
    
    
    var diff = function(a,b){
      return a - b;
    }
    
    var sumResult = sum(4,5);
    var diffResult = diff(4,5);
    
    console.log("sumResult:",sumResult,"diffResult:",diffResult);
    
    function speak(){
       
        console.log("speak");    // this will print when function is called
    }
    
    var speakResult = speak();
    
    console.log(speakResult);  // this will be undefined