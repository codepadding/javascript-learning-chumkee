// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];



// console.log(list.length) // toal length of the array
// const deletedList = list.splice(3,3) // remove 3 elements from index 3

// console.log(list)
// console.log(deletedList)

// list.push(14) // item add to the end of the array
// list.unshift(0); // item add to the beginning of the array

// list.pop() // remove the last item of the array
// list.shift() // remove the first item of the array






// console.log(list)


// function getAge() {
//     const age = 20;
//    return age
// }

// function myName(name,cb) {
//     const age = getAge()
//    const myName = 'My name is '+name+ " age = "+age;
//    cb(myName)
// }




// const names = "Mizan";

// myName(names,(value)=>{
//     console.log(value)
// }) // function call


// function
// callback function
// arrow function



// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// For loop
// for(let i = 0; i<list.length;i++){
//     console.log(list[i])
// }

// forEeach
// list.forEach((item)=>{
//     console.log(item)
// })

// map
// map need to return a value
// const newList = list.map((item)=>{
//     return item*2
// });

// const newList = list.map((item)=> item*2);

// console.log(newList)

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// filter
// filter need to return a boolean value
// const newList = list.filter((item)=>item>5 && item<10);

// console.log(newList)

// find
// find return a value

const searchItem = 10;

const item = list.find(item=>{
    return item===searchItem
});

if(item){
    console.log(`item found ${item}`)
}else{
    console.log("item not found")
}


// map
// filter
// find
// callback function