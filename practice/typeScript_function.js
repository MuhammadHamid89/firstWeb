"use strict";
//type script function and type annotation
//function example 1
// function greet(name:string):void{ // pparameter type define kiya or void is liye use kia k function kuch bi return ni kry ga
//     console.log('hello',name)
// }
// // // greet(5)
// greet('ali')
// ------>vs terminal write (node  practice/typeScript_function.ts)<------



//function example 2 function parameter
// function add(a:number,b:number):number{     //yaha btya hain k function number return kry ga
//     return a+b
// }
//  let result:number=add(10,20)  // this is pass only
// let result:number=add(10, 'k')  // compile time error bta diya hain we can't pass it
// console.log(result)
// ------>vs terminal write (node  practice/typeScript_function.ts)<------


// function example 3 return type
// function square(num:number):number{
//     return  num * num
// }
// function welcome(name:string):string{
//     return 'welcome ' + name
// }

// function example 4 function type
// let multiply:(a:number,b:number)=> number
// multiply = (x,y)=> x*y


//function 5 optional parameter
function introduce(name, age) {
    if (age) {
        console.log(name + ' is ' + age);
    }
    else {
        console.log(name);
    }
}
introduce('ahmad');
introduce('ahmad', 22);
