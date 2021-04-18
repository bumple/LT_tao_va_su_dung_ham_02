let arr = [];
let n = +prompt("so luong gia tri muon nhap");
for (let i = 0; i < n; i++) {
    a = +prompt("1");
    arr.push(a);
}


function reverse1(arr1){
   arr1.reverse()
    return arr1;
}
console.log(arr);
console.log(reverse1(arr));

