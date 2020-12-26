function yz(n){
    var arr=[];
    for (var i=0;i<n; i++){
        var num=parseInt(Math.random()*123);
        if (num>=0&&num<=9){
            arr.push(num);
        }else if(num>=97&&num<=122||num>=65&&num<=90){
            arr.push(String.fromCharCode(num));
        }else{
            i--;
        }

    }
    return arr.join("");
}