//singleton
//objects literals
//objectz literals
const mySym= Symbol("key1")
const Jsuser={
    name:"tiger",
    age: 20,
    [mySym]:"key1",
    email:"abc@google.com",
    isLoggedin: false,
    lastLoginDays: ["monday","saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["name"])
console.log(typeof Jsuser[mySym])


Jsuser.email="cde@google.com"
Object.freeze(Jsuser)
Jsuser.email="efg@google.com"
console.log(Jsuser);



Jsuser.greeting=function(){
    console.log("Hello Js user");
}

console.log(Jsuser.greeting());
