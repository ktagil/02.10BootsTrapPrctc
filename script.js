// 1- ci TASK


// let n = 2;
// let m = 6;
// let res = 0;

// for (let i = n; i < m; i++) {
//     if(i%2 == 1){
// res+=i;
//     }
//     }
// console.log(res)


// 2 - ci TASK

// let n = [1,2,3,4,5,]
// let i = 0;
// let res = 0;

// for (let i = 0; i <= n.length; i++){
//      res += i;
// }
// console.log(res)


// 3 - cu TASK


// let n = [1,2,3,4,5]
// let i = 0;
// let res = 0;

// for (let i = 0; i <= n.length; i++){
//     if(i%2==0){
//         res += i;}

// }
// console.log(res)


// 4 - cu TASK


// let n = 4;
// let m = 1;

// for (let i = 1; i <= n; i++) {
//     m*=i;
// }
// console.log(m)


// 5-ci TASK


// let m = 6;
// let n = 0;

// for (i = 0; i <= m; i++) if(
//     m%i==0) {n++}
//     if(n<=2){
//         console.log("sadedir")
//     }
//     else
//     console.log("murekkebdir")



// let n = [17, 19, 23, 30, 26];
// let m = 0;

// for (let i = 0; i < n.length; i++) if (n[i] % 6 > 4) { m++; }

// console.log(m)


// 6 - ci TASK


let students = [

{
name : "Agil",
surName : "Kazimov",
email : "agiltk@code.edu.az",
age : 28
},

{
name : "Valeh",
surName : "Maharramov",
email : "Valehm@code.edu.az",
age : 19
},

{
name : "Terxan",
surName : "Zeynalabdiyev",
email : "Terxanz@code.edu.az",
age : 25
}
]
// let sumAge = 0;

// for (const item of students) {
//   sumAge+=item.age  
// }
// console.log(sumAge)


let avgAge = 0;
let sumAge = 0;
let sumCount = 0;
let t = 0;

for (const item of students) {
    sumAge+=item.age  
    sumCount++
  }
console.log(sumAge/sumCount)





