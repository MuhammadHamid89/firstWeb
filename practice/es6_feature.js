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
// let user= {firstName: 'ali', age:33, city:'lahore'}
// let {firstName,age}=user
// console.log(firstName,age)

// example 1 spread operator with Array
// const first=['ali','ahmad']
// const second=['sara']
//  const student=[...first]
// const student=[...first,...second] //for combine
// const student=[...first,...second,'fiza'] // add new value
//  console.log(student)


// example 2 spread operator with object
// const user={name:'ali', city:'lahore'}
// const update={city:'karachi', age:22}
// const userinfo={...user,...update}
// console.log(userinfo)

// example 3 function  spread operator
// function total(number){
//     console.log(number)
// }
// total([20,30,40])


//example 4 object literal
// const name='ali'
// const age=23
// // const user1={name:name,age:age} // old 
// const user1={name, age} // new way no need write again same name vaiable
// console.log(user1)

//   example 6 add variable in object
// const field='email'
// const value='ali@example.com'
// const firstDate={
//     name: 'ali',
//     [field] :value
// }
// console.log(firstDate)




// example 7 how to use question mark (?) and avoid error
// const response={
//     user:{                      // object k andar object nested object
//         name: 'raza'
//     }
// }
// console.log(response.user)
// console.log(response.user.name)
// // console.log(response.user.name.address.city) // esy kry gy to error ay ga kue k address or city
//                                                 // ki values ni hain os sy bachny k liye hum ye kry gy
// console.log(response.user.name.address?.city) // ? this key word help if value have use it otherwise undefine



//  example 7 null is double question mark (??)
// const username= null
// // const displayName = username; // is sy null ay ga
// const displayName = username ?? 'guest' // is sy apni mrzi ki value dy gy
// console.log(displayName)

// const quatity =0
// const finalQuatity = quatity ?? 1;
// console.log(finalQuatity) // iski ooutput 0 ay gi q k initial value 0 hain jo null ki equal ki