

const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else reject("Not valid");
    }, 1000);
  });
};

//promise hell
// asyncAdd(1, 7)
//   .then(sum1 => {
//     console.log(sum1);
//     asyncAdd(sum1, 2)                   //có thể thực hiện lại liên tiếp hàm nhưng
//     .then(sum2 =>{                      //như vậy ko khác gì call back ==>promise hell
//       console.log(sum2);                
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });

//promise-chaning
// asyncAdd(1, 2)
// .then(sum1=>{
//   console.log(sum1)
//   return asyncAdd(sum1, 3);
// })
// .then(sum2 =>{
//   console.log(sum2)
//   return asyncAdd(sum2, 5)
// })
// .then(sum3 =>{
//   console.log(sum3);
// })
// .catch(console.log);

//promis all
//sum1 = 1+2 && sum2 = 2+3
//sum3 = sum1 + sum2
Promise.all([asyncAdd(1,2), asyncAdd(2,3)])
.then(([sum1, sum2])=>{
  console.log("TCL: sum1", sum1);
  console.log("TCL: sum2", sum2);
  return asyncAdd(sum1, sum2)
})
.then(sum3 => console.log(sum3))
.catch(console.log);