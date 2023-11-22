/*     

Variables can be declared in 4 ways:
        -Automatically
        -using Var
        -using let
        -using const


When to use Var, let, or const?
        -Always declare Variables
        -Always use const if the value should not be changed
        -Always use const if the type should not be changed (Array and objects)
        -Only use let if you can't use const
        -Only use Var if you Must support old browsers

JS Identifiers:
    All JS variables must be identified with Unique Names.
    These Unique name are called idedntifiers.
    Identifiers can be short name (like x & y ) or more descriptive (naming for ease understanding)
    
    The General rule for constructing names for variables (Unique identifiers) are:
        -Name can contain letter, digits, underscore, and dollar sign.
        -name must begin with letter
        -Name can also begin with $and _ 
        -Name are case sensitive (y & Y are different variable)
        -reserved words (like Javascript Keywords) cannot be used as names.


let keyword was introduced in ES6
        -variable defined with let cannot be Redeclared 
        -variable defined with let must be Declared before use
        -variable defined with let have Block scope


let and const => variables declared inside a {} block cannot be accessed from outside the block 
Variable declared with the var keyword can NOT have Block scope

What is good?
        -let and const have block scope 
        -let and const can not be redeclared 
        -let and const must be declared before use
        -let and const does not bind to this.
        -let and const are not hoisted

What is Not good?
        -Var does not have to be declared 
        -Var is hoisted 
        -Var bind to this 


USe const when you declare:
        -A new Array
        -A new Object
        -A new function
        -A new RegExp

*/


var name;
name="Ushpal";
console.log(name);

const age= 23;
console.log(age);

let code;
code="javascript";
console.log(code);