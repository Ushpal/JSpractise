/*

Javasrcipt function is a block of code designed to perform a particular task.
A JavaScript functiion is executed when "something" invokes it (call it).


Javascripts Function Syntax
JavaScript function is defined with the function keyword, followed by a name, followed by parenthesis ().
Function names can contain letters, digits, underscores, and dillor signs (same rules as variables).
The paranthesis may include parameter names seperated by commas:
(parameter1, parameter2, ...)
The code to be ececuted , by the function, is placed inside  curly brackets: {}

syntax:
    function name(parameter1, parameter2, ...){
        //code to be executed
    }

function Invocation
    The code inside the function will exrecute when "Something" invokes (calls) the function:
        -when an event occurs (when a user clicks a button)
        -when it is invoked (called) from hjavascript code
        -Automatically (self invoked)


Function Return 
    When Javascript reaches a return statement, the function will stop executing.
    If the function was invoked from a statement, Javascript will "return" to execute the code after the invoking statement.
    Function often compute a return value. The return value is "returned" back to the "caller":        



Why Function?
    with function you can reuse code 
    You can write code that can be used many times.
    You can use the same code with different arguments, to produce different results.

*/

let x= myfunction(4,3);
console.log(x);
function myfunction(a,b) {
    return a*b;
}

//The () operator invokes (calls) the function:
function tocelsius(fahrenheit){
    return (5/9)*(fahrenheit-32);
}
let value= tocelsius(77);
let text="The temperature is "+value+" celsius."
console.log(text);




/*
Local Variables 
    Variables declared within a JavaScript Function, become LOCAL to the function.
    Local variables can only be accessed from within the function.
*/

//code here can NOT use carName
function myFunction(){
    let carName="Volvo";
    //code here can use carName
}

//code here can NOT use carName



