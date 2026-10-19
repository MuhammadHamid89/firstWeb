// lexical scope
// function outer(){
//     let course='mern stack'
//     function inner(){
//         console.log(course)  //ye outer function k variable ko print kr rha hain
//     }
//     inner()
// }
// outer()

//closures
// example 1
// function outer(){
//     let name ='ali'
//     function inner(){
//         console.log(name)
//     }
//     return inner
//     // inner()
// }
// // outer()
// const myFunction = outer()
// myFunction()


// example 2
// function createBankAccount(){
//     let balance=1000
//     return{
//         checkBalance: function(){
//             return balance
//         },
//         deposite: function(amount){              //yah balance my deposite addd hogi
//             balance=balance + amount
//             return balance
//         }
//     }
// }
// const account = createBankAccount()
// console.log(account.checkBalance()) 
// console.log(account.deposite(500))
// console.log(account.balance)   // ye krny sy undefined ay ga q k vaiable firf inner+outer function 
//                                 // my accessbile hain bahir ni 


//example 3
// function createDiscount(discount){
//     return function(price){
//         return price - (price * discount)/100
//     }
// }
// const studentDiscount=createDiscount(20) //ye 20,50 parameter createDiscount k andar pass hoye hain discount ki jaga
// const specialDiscount=createDiscount(50)
// console.log(studentDiscount(1000))
// console.log(specialDiscount(1000))        //outer function inner function return krta hain


//example 4
// function setupButton(message){
//     const button=document.querySelector('#btn');
//     button.addEventListener('click',function(){
//         alert(message)
//     })
// }
// setupButton('welcome to javascript')


//example 5
function createApi(baseurl){
    return function(endpoint){
        return baseurl + endpoint
    }
}
const api=createApi('https://api.example.com')
console.log(api('/users'))
console.log(api('/products'))