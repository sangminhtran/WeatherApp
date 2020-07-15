//Thế nào là bất đồng bộ
console.log("First line");
setTimeout(()=>{
    console.log("Second line aaaaa");
}, 2000);

setTimeout(()=>{
    console.log("Second line");
}, 0);

console.log("Third line");