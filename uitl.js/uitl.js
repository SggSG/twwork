function checkRate(input) {　　
    var re = /^[1-9]+[0-9]*]*$/　　
    var nubmer = document.getElementById(input).value;

    　　
    if (!re.test(nubmer)) {　　　　
        alert("请输入数字");　　　　
        document.getElementById(input).value = "";　　　　
        return false;　　
    }
}