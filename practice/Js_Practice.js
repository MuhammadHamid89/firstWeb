// variable and scope
// type of variable (let, var, const)
//let was introduce in ES6 2015 and released in 2015
// avoid var variable re-decleration , block scope, hoisting, confusion accidenal


// var name= 'hamid' // function scope result change when we again assign value 
// name='hameed'
// console.log(name)

// let name = 'hamid'
// name ='hameed'
// console.log(name)

// const name = 'hamid'
// name='hameed' // give error when re-assign value
// console.log(name)


//1:- var variable re-declaration
// var name= 'hamid' 
// var name='hameed'
// console.log(name)

// let name= 'hamid' // re-assign value it gives error but var no give error
// let name='hameed'
// console.log(name)



// 2 :-var scope
//type of scope (block,functional,global)
// let name='waleed'
// function greet(){
//     console.log(name)
// }
// greet()



//2:- functional scope
// let name='waleed'
// function greet(){
//     let surname='ali'
//     console.log(surname)
// }
// console.log(surname)
// greet() /// its give because surname use only inside in function outside give errror


//3 : - block scope
// let name='waleed'
// function greet(){
//     console.log(name)
// }
// if(true){
//     let age = 25
//     console.log(age)
// }
// console.log(age)
// greet()

//var variable no respect block scope
// if (true){
//     var age=25
//     console.log(age)
// }
// console.log(age)


//hoisting
// console.log(a)
// var a=5 is undefine but when use let it give error

console.log(a)
let a=5