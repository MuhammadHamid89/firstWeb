//old way
// const name = 'waleed'
// console.log('hello',name)

// //template  literal
// console.log(`hello ${name}`)

// template literal example 2
// let email =` Dear Ali, your class star at 9pm thanks`
// console.log(`email is ${email}`)

// //exaple 3 Array Destructure
// let fruits=['apple','banana','mango']
// // let [first,second]=fruits
// let [first, ,second]=fruits //for skip any value in fruits put comma(,) between them
// console.log(first,second)

//example 4 object 
let user= {firstName: 'ali', age:33, city:'lahore'}
let {firstName,age}=user
console.log(firstName,age)