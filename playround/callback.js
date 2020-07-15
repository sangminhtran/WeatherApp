//Callback là tính năng của ES5 dùng để handle async trong JS
//callback bản chất là 1 function, đc gọi như là 1 tham số của 1 hàm khác
/*callback giống như 1 điệp viên, nó đứng đợi xem hàm callService thực hiện xong hay chưa,
 nếu thực hiện xong thì gọi printData, nếu ko thì tiếp tục đợi*/
var x;
function callService(callback) {
  setTimeout(() => {
    console.log("callService");
    x=9;
    callback();
  }, 2000);
}

function printData() {
  console.log("printData");
  console.log("x= "+x);
}

//callService();
//printData();
callService(()=>{
    printData();
})
//hoặc
callService(printData);
