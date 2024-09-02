console.log("Hello world!");
// Biến Variable: để lưu trữ giá của kiểu dữ liệu
var x = 10;  // Biến số có thể thay đổi được 
let y = "Mindx !!!" // Không thể đặt biến số y lần thứ 2
const z = 20 // Hằng số không thay đổi được 

console.log(x);
console.log(y);
console.log(z);

// Kiểu dữ liệu 
// 1. Number: Giá trị số nguyên và số thực 
var num = 10;
var num = 2.4;

console.log(num);

// 2. Boolean
let Boolean = true;
let Boolean2 = false;

console.log(Boolean2);

// 3. String 
let name_1 = "Thầy Hưng Đẹp Trai !!!"

console.log(name_1);

// 4. Null: Giá trị rỗng 
let emptyValue = null;
console.log(emptyValue);

// 5. Undefined
let UndefinedValue;

console.log(UndefinedValue);

// 6. Object 
let mom = {
    name: "jjjj",
    age: 50,
    address: "Hà Nội",
};

// 7. Array 
let Numbers = [1, 2, 3, 4, 5, 6]
console.log(Numbers);

// Kiểm tra kiểu dữ liệu (typeof)
m = 10;
console.log(typeof m);

// Câu lệnh điều kiện (if else)
let b = 10
let c = 8
if (b < c) {
    console.log("Sai");
} else if (b == 10) {
    console.log("Đúng");
} else {
    console.log("Tuỳ");
}

// Vòng lặp For, while
// for loop

for (let i = 0; i < 10; i += 3) { // i = i + 3
    console.log("Lặp i tại: ", i);
}

// while loop
let j = 0;
while (j < 10) {
    console.log("Giá trị của j:", j);
    j += 3;
}

// lặp vô hạn
// let o = 0;
// while (true) {
//     console.log("Giá trị của o là:", o);
//     o ++;
// }