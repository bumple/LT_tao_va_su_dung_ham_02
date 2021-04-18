function factorials(n) {
    let temp = 1;
    for (let i = 1; i <= n; i++) {
        temp *= i;
    }
    return temp;
}
let m = +prompt("nhap vao 1 so");

console.log(factorials(m));
document.write(factorials(m));
