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

// console.log(a)
// let a=5


// //preimitive data tyes  (string, int,float,boolean,undefined,null)
// let name= 'waleed' //string
// let age=25 //nummber
// let height=5.5 //number(float)
// let isStudent=true //boolean
// let test ; //undefined value unassign
// // console.log(test)



//non-primitive data type
// object
// let user={name:"waleed",age:"25",gender:"male"}
// console.log(user)
// console.log(user.gender)
// console.log(user['age'])
// console.log(user['gender'])

// //array
// let fruit=['apple','banana','kiwi',25]
// console.log(fruit[3])


//data type
// let age='25'
// age=Number(age) 
// console.log(typeof(age))

// let age=25
// age=String(age)
// console.log(typeof age)


// operators
// 1:- arithmetic operator 
// let a =1
// let b=2
// console.log(a+b)

// let a =1
// let b=2
// console.log(a-b)

//2:- increment & decrement operator(++,--)
// let a = 5
// a++
// console.log(a)

// let  a =5
// a--
// console.log(a)

// 3:-  assignment operator (=,+=)
// let a=5
// a+=4 // beside execute this a=a+4
// console.log(a)

//comparision operator (==, ===, !=, <,>)
// let name='waleed'
// let surname='ali'
// console.log(name == surname)

// let age='25'
// let height=25
// console.log(age === height)

// let a =4
// let b =10
// console.log(a>b)


// 5 :- logical operator
// let age =20
// let hasCNIC=true
// console.log(age >= 18 && hasCNIC)

// let age =17
// let hasCNIC=true
// console.log(age >= 18 && hasCNIC)

// let age =16
// let hasCNIC=true
// console.log(age >= 18 || hasCNIC)

// condition
// let age = 26
// if(age>=18){
//     console.log('adult')
// }else{
//     console.log('minor')
// }

// let age = 20
// if(age>=80){
//     console.log('adult')
// }else if(age >=20){
//     console.log('age is 20')
// }else{
//     console.log('minor')
// }


// 7 :  - ternary operator
let age= 30
let result=age >=18 ? 'adult' : 'minor'
console.log(result)