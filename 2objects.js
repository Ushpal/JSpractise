//const tinderUser= new object()


const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Nepali"
tinderUser.isloggedIn= false

//console.log(tinderUser);

const regularUser={
    email:"abc@gmail.coom",
    fullname:{
        userfullname:{
            firstname:"Nepali babu",
            lastname:"Made in nepal"

        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);


const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

//const obj3={obj1,obj2}
//const obj3= Object.assign({},obj1,obj2)

const obj3={...obj1, ...obj2}
//console.log(obj3)


const users=[
    {
        id:1,
        email:"asd@gmail.com"
    },
    {
        id:2,
        email:"asd@gmail.com"
    },
    {
        id:3,
        email:"asd@gmail.com"
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));