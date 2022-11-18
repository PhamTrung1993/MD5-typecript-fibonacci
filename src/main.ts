

// @ts-ignore
function fibonacci(number : number) {
    if (number == 0 || number == 1) {
        return 1;
    }
    else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}
let num = 10;
let array = "";
for (let i = 0; i < num; i++) {
    array +=  fibonacci(i) + ","
}
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += i;
}
console.log("Dãy fibonacci nhỏ hơn 10 là :" + array);
console.log("Tổng các số fibonacci trong mảng trên là: " + sum);