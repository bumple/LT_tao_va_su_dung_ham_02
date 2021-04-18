let arr = []
let n = +prompt("số lượng ký tự")
for (let i = 0; i < n; i++) {
    input = prompt("nhập vào ký tự")
    arr.push(input)
}

function checkText(text) {
    count = 0;
    let data = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === text) {
            data += "trùng tại vị trí: " + i + "<br>";
            count++;
        }
    }
    if (count === 0) {
        document.write("khong trung ky tự nào")
    } else {
        document.write("Trùng " + count + " lần" + "<hr>" + data)
    }
}

let check = prompt("nhap tu muon kiem tra");
checkText(check);
