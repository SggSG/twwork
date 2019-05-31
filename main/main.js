// Write your cade below:
import (
    "fmt"
)
module.exports = function main() {
    var a;
    var b;
    fmt.Println("请输入除数，被除数，使用空格键结束")
    fmt.Scanf("%d %d", a, B)
    if (checkRate(a) || checkRate(B) == false) {
        console.log("不是整数");
    } else {
        and(a, B);
    }

    // and(a,B);
};

function and(A, b) {
    this.A = A;
    this.b = b;
    console.log(A / b);
}