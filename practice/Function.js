// syntax
// function greet(name){
//     //piece of code
//     console.log('hello  world',name)
// }
// greet('ali')

// function add(a,b){
//     // console.log(a+b) this use or screen print only
//     return a + b  // this use for store variable and move forward for reuse
// }
// const result = add(7,7)
// console.log(result)


// function expression
// const sayHi=function(){
//     //piece of code
//     console.log('say hello')
// }
// sayHi()

// Arrow function
// const greet = (name) =>{
//     return 'hello' + name
// }

//single parameter
// const square=(n)=>{
//      return n*2
// }
// console.log(square(2))
// console.log(square(4))

// const add = (a,b) =>{
//     return a+b
// }
// console.log(add(2,4))

//more simplify arrow function
// const add = (a,b) => a+b
// console.log(add(2,8))

// problem delivery
//1km = 20rps
// const deliveryCharges =(km) => km *20
// console.log(deliveryCharges(5))

// const greet=(name= 'Guest') =>{
//     return 'hello ' + name
// }
// console.log(greet('waleed'))
// console.log(greet())


//example

// function order(item,quantity=1){
//     console.log(item + ' , ' +quantity)
// }
// order('burger',3)
// order('pizza')


// const showNumber=(numbers,num2)=>{
//     console.log('number ',numbers,num2)
// }
// showNumber(2,1)


// const showNumber=(...numbers)=>{
//     console.log('number ',numbers)
// }
// showNumber(2,1,4,5,6)

function totalMarks(...marks){
    let total=0
    for (let mark of marks)(
        total +=mark
    )
    return total
}
console.log(totalMarks(90,80,70))