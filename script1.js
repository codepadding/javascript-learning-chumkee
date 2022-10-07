// import { myName, age } from "./person.js";

// // console.log(myName, age);
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// // console.log(person.firstName);

// // const key = "lastName";

// // console.log(person[key]);

// console.log(person.fullName());

// syncronous && asyncronous

// const changeTitle = () => {
//     const title = document.getElementById("title");
//     title.innerText = "Hi! From JS";
// };

// setTimeout(changeTitle, 1000);

// Promise

// const task = new Promise((resolved, reject) => {
//   try {
//     console.log("script running....");
//     resolved();
//   } catch (error) {
//     reject(error);
//   }
// })



// task.then(()=>{
//     console.log("script done");
// }).catch((error)=>{
//     console.log(error.message);
// });

const main = async () => {
   const tesk1 = await new Promise((resolved,reject)=>{
        setTimeout(()=>{
            resolved("task 1 done");
        },1000)
    })

    console.log(tesk1);
    
    // tesk1.then((res)=>{
    //     console.log(res);
    // }).catch((error)=>{
    //     console.log(error.message);
    // });
    
    
    task2()
    

}

const task2 = () => {
    console.log("task 2 done");
}


main()