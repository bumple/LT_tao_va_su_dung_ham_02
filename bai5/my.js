function minMatch(a, b, c) {
    let min;
    if (a < b && a < c) {
        min = a;
    } else if (b < c) {
        min = b
    } else {
        min = c
    }

    return min;
}


let a = +prompt("nhap so thu nhat")
let b = +prompt("nhap so thu 2")
let c = +prompt("nhap so thu 3")

minMatch(a,b,c);
document.write("gia tri nho nhat la: "+ minMatch(a,b,c))
console.log(a+"-"+b+"-"+c+"-")
console.log(minMatch(a,b,c))