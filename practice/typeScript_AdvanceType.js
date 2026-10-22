"use strict";
// 1 : - union type//
// Union Type: Ek variable ko ek se zyada badalti hui data
//  types (jaise string | number) allow karne ki ijazat dena.
let id; // btya hain string ya number hoga sirf
id = 101; // number (condition k mutabik)
id = 'emp101'; //string (condtion k muutabik)
// id=true // error  ye ni a skta
function printId(id) {
    console.log(id);
}
printId(id);
