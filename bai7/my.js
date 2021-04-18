function changeName(arr1) {
    a = arr1[0];
    arr1[0] = arr1[1];
    arr1[1] = a;
    return arr1;
}

let n = +prompt("so thu nhat");
let m = +prompt("so thu hai");
let arr = [];
arr.push(n);
arr.push(m);
console.log("truoc khi doi---" + arr)
changeName(arr);
console.log("sau khi doi---" + arr);