let res1 = (true && false) || (false && true)
console.log(res1);
let res2 = 10 > 11 && 11 > 10
console.log(res2);
let res3 = (true || false) && true
console.log(res3);
let res4 = (!true && !false) || (!false && !true)
console.log(res4);
let res5 = 'Hello' === 'Hello' && 'World' == 'Word'
console.log(res5);
let res6 = (!(20 >= 20) && 7 === 7) || true
console.log(res6);
let res7 = '1' === 1 && '2' == 2 && '3' === 3
console.log(res7);
let res8 = !res7
console.log(res8);
let res9 = !res8
console.log(res9);
let res10 = (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)
console.log(res10);