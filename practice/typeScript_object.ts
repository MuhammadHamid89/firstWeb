// typeScript objects , Arrays , and interface

// type script and js object
// let user={   //  js object structure
//     name:'ali',
//     age :22
// }

// let user1 :{ name1:string, age:number} = {
//     name1: 'ali',
//     age:23
// }
// user1.age='waleed'// this show error
// user1.age=23 // this is right


// typeScript Arryas
// let number:number[]=[10,20,30];
// let names:string[]=['ali','waleed'];
// let mixed:(string | number)[]=['ali',22]

// names.push(3)  //push use in array but not push error given
// names.push('3') // is good


//type script interface
// interface student{
//     name:string;
//     age:number
// }
// const s:student={name:'ahmad',age:20}

// interface user{
//     name:string;
//     age:number
// }
// const u: user={name:'ahmad',age:22}
// console.log(u)
// 1 : - tsc practice/typeScript_object.ts     <------ phly ye chaly
// 2 : - node  practice/typeScript_object.ts <----- bad my ye



// practical example
// interface Product{
//     id:number;
//     title:string;
//     price: number;
// }
// const products: Product[]=[
//     {id:1, title:'laptop',price:500},
//     {id:2, title:'mouse', price:20}
// ]
// console.log(products)
// 1 : - tsc practice/typeScript_object.ts     <------ phly ye chaly
// 2 : - node  practice/typeScript_object.ts <----- bad my ye


interface items{
    id:number;
    title:string;
    price ?: number  // optional value
}

const item:items[]=[
    {id:1,title:'mobile',price:400},
    {id:2,title:'bag'}
]
console.log(item)