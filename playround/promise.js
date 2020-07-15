const somethingPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve("Chạy vào resolve");
        reject("Chạy vào reject");
    }, 2000);
});

somethingPromise
.then((value)=>{
    console.log("then:",value);
})
.catch((err)=>{
    console.log("catch:", err)
})

// somethingPromise                                 //callback style
// .then((value)=>{
//     console.log("then:",value);
// }, (err)=>{
//     console.log("then error: ", err)
// })
