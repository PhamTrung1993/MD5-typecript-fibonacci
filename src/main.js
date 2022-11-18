// @ts-ignore
function fibonacci(number) {
    if (number == 0 || number == 1) {
        return 1;
    }
    else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}
var num = 10;
var array = "";
for (var i = 0; i < num; i++) {
    array += fibonacci(i) + ",";
}
var sum = 0;
for (var i = 0; i < array.length; i++) {
    sum += i;
}
console.log("Dãy fibonacci nhỏ hơn 10 là :" + array);
console.log("Tổng các số fibonacci trong mảng trên là: " + sum);
