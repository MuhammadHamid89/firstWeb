//synchronous example code run line by line
// console.log('step 1')
// console.log('step 2')
// console.log('step 3')

/// set timeout
// console.log('start')

// setTimeout(()=>{
//     console.log('data loaded')
// },5000)         // time pass out in mili second

// console.log('end')



// callback function example 1
// function greet(name,callback){
//     console.log(`hello ${name}`)
//     callback()
// }
// //use arrow as callback
// const loadData=()=>{
//     console.log('data loaded')
// }
// greet('wwaleed',loadData)



//callback function example 2 this is call back hell an dcode complexity and horizantaly expand 
// //and avid this callback
// wakeup(()=>{
//     brushteeth(()=>{
//         eatbreakFast(()=>{
//             console.log('go to school')
//         })
//     })
// })

 //call back hell solution with promises example 2 solution and top to bottom expand and promise chain use
// wakeup().then(()=>{
//     return brush()
// }).then(()=>{
//     return breakfast()
// }).then(()=>{
//     console.log('go to school')
// })


// promises help to avoid callback hell normal function example 3
// function Login(username,password){
//     if(username==='admin' && password==='1234'){
//         console.log('successfull login')
//     }else{
//         console.log('login failed')
//     }
// }
// Login('admin','12345')


//promises function
// function Login(username,password){
//     return new Promise((resolve,reject)=>{
//         if(username === 'admin' && password === '1234'){
//             resolve('login successfull')
//         }else{
//             reject('login failed')
//         }
//     })
    
// }
// Login('admin','12345').then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })                                //result dekhny k liye .then or .catch use hoga or on my arroe
//                                     // function use hoga



// normal function
// function sayHello(){
//     return 'hello  student'
// }
// const response=sayHello()
// console.log(response)

//example 1 use asunc keyword
// async function sayHello(){
//     return 'hello  student'
// }

// sayHello().then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// })


//example 2 use await keyword
// async function sayHello(){
//     return 'hello  student'
// }
// const data=await sayHello()
// console.log(data)
// async/await use to avoid promise chaining and this is solution


//example 3 async/await
// function getUser(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('user loaded')
//         },2000)
//     })
// }
// async function loadUser() {
//     let result= await getUser()
//     console.log(result)
// }
// loadUser()

//example 4 only syntax code
// fetchdata().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// async function(){
//     try{
//         let data=await fetchdata()
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }


// example 5 
async function getPost() {
    try{
        let response=await fetch('https://jsonplaceholder.typicode.com/posts')
        let data= await response.json()
        console.log('lenght is: ', data.length)
    } catch(err){
        console.log(err)
    }
}
getPost()