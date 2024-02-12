function sayMyname(){
    console.log("k");
    console.log("a");
    console.log("l");
    console.log("i");
}


//sayMyname();       



function addtwonumbers(num1, num2){

    console.log(num1+num2);
}

//addtwonumbers(3,4);


function loginUsermesage(username){
    return `${username} just logged in.`
}
// console.log(loginUsermesage("Nepali Babu"))



function calculateCartPrice(... num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500))




const user={
    username: "Nepali Babu",
    price:200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

 handleObject(user);





 const myNewArray =[200,300,400,600]
 function returnSecondValue(getArray){
    return getArray[1];
 }
 console.log(returnSecondValue([200,300,400,600]))
