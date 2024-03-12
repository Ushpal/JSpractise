// let user = {
//     name: 'Dicky',
//     age: 99,
//     lacation: 'cave'
    
// }

// let boss= user;
// boss.name= 'furry';
// // alert(user.name); sale sale sale

// console.log(boss.name)


// // throwing blade to comparison by reference

// let a={};
// //let b={};  yesle kaam gardaina sale
// let b=a;

// console.log(a==b);
// console.log(a===b);




// const mobile={                    //saitan ke aakh he re bhai const bhi var ho gaya
//     app: "dearlo",
//     spec:"watch short video",
// }

// let laptop=mobile;
// mobile.app="olraed";
// console.log(mobile.app);


// //---------------------another blade for cloning and merging , object.assign--------------------

// let keto = {
//     name:'Dicky',
//     age:81,
// };
// // let clone={};    // fnew empty object
// // //let's copy all user properties into it
// // for(let key in keto){
// //     clone[key]= keto[key];

// // }


// // clone.name='furry';
// // console.log(keto.name)

// // let permission1= {canview:true};
// // let permission2={canEdit:true};

// // Object.assign(keto,permission1,permission2);
// // console.log(keto.name);
// // console.log(keto.canview);
// // console.log(keto.canEdit);


// let clone= Object.assign({},keto);
// console.log(clone.name);
// console.log(clone.age)





let rec={
    name:'Xcube',
    sizes:{
        height:182,
        width:60,
    }
};

// console.log(rec.sizes.height);

// let clone= structuredClone(rec);
// console.log(rec.sizes===clone.sizes);
// rec.sizes.width=70;
// console.log(clone.sizes.width);





let user = {};

user.me=user;
let clone=structuredClone(user);
console.log(clone.me===clone);
