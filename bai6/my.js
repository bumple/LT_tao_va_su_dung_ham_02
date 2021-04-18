function checkNum(a) {
    let flag = false
    if (a >= 0) {
        flag = true
    }
    return flag;
}

n = +prompt("nhap vao 1 so");
checkNum(n);

if (checkNum(n) === true) {
    alert("gia tri la nguyen duong")
} else {
    alert("gia tri la nguyen am")
}