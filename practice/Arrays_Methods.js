// let fruit=['apple','banana']
// // console.log(fruit[0]) // array inner variable access through index and index start with  0,1,2 and so on
// fruit.push('kiwi') //push add item in last/end index
// fruit.unshift('pineapple') // inshift add item in start index
// fruit.pop() // pop remove last item/last index
// fruit.shift() // this remove first index item
// console.log(fruit)


// 1 :- iteration in arrays using for loop 
// let fruits=['apple','orange','banana','mango','kiwi']
// for(let i=0; i<fruits.length;i++){                  //fruit.lenght count array lenght
//     console.log(fruits[i])
// }


// // 2 :- iteration in arrays using For each use for data print ya iterate
// let fruits =['apple','banana','mango','kiwi']
// fruits.forEach(function(value){
//     console.log(value)
// })


//3 : -map loop and map return updated values/arrays with normal function
// let prices=[100,200,300]
// let updated=prices.map(function(price){
//     return price+50
// })
// console.log(prices)
// console.log(updated)

// // map use with arrow function
// let prices=[100,200,300]
// let updatePrice=prices.map((value)=>{
//     return value * 2
// })
// console.log(prices)
// console.log(updatePrice)


// 4: - filter and this return updated arrays
// let ages=[16,20,90]
// let adults=ages.filter(function(value){
//     return value >=18
// })
// console.log(adults)

//  5: - reduce 
let marks=[10,20,30]
let total=marks.reduce(function(sum,mark){
    return sum+mark
},10)  // ye starting value yani phly ye 10 or phr oper wali value add hogi
console.log(total)