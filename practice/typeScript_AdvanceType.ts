// 1 : - union type//
// Union Type: Ek variable ko ek se zyada badalti hui data
//  types (jaise string | number) allow karne ki ijazat dena.

// let id: string | number; // btya hain string ya number hoga sirf
// id=101  // number (condition k mutabik)
// id='emp101' //string (condtion k muutabik)
// // id=true // error  ye ni a skta
// function printId(id: string | number){
//     console.log(id)
// }
// printId(id)  // ye function call hova hain oper wla (printId)
// 1 :- ---> tsc practice/typeScript_AdvanceType.ts  <-- phly ye chaly
// 2 :- ----  node practice/typeScript_AdvanceType.ts <-- bad my ye chaly



// 2 : - literal type
// Variable ki value ko kisi aam data type ki bajaye ek specific fixed value
//  (jaise sirf "red" ya sirf 5) tak mehdood kar dena.

let direction : 'left' | 'right' | 'up' | 'down'
direction='left'
// direction='forward'  // error ay ga q k opr diya ni hain


// 3 : - type Alis
//• Kisi bhi mushkil ya custom data type ko ek naya aur aasan naam (nickname) 
// dena takay use code mein baar baar istemal kiya ja sake.

type UserId=string | number
type user={name:string, age:number,id: UserId}
// const user : User={name:'ali', age:22, id:1001}
const user : user={name:'ali', age:22, id:"1001"} // UserId my hum number ya string pass kr skty hain



//best practice
//1:- easy to read code
//2:- reduce bugs
//3:- better team work
//4:- maintain easily
// 5:- strick mode file name is (tsconfig.json) responsibility configuration according to it
// and early detect bug and prevent value null and undefined 

