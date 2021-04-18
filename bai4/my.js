function checkNums(n) {
    let flag = false;
    if (typeof n == "number" && isNaN(n) !== true) {
        flag = true;
    }

    return flag;
}
m = +prompt('nhap so vao');

checkNums(m);

if (checkNums(m) === true) {
    alert("day la so")
} else {
    alert("đây không phải là số")
}

