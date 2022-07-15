function panggilToken(){
    var s = "ini ibu budi \n bukan bapaknya."
    var re = /./g

    console.log(s.match(re));

    var s2 = "sempurna.."
    var re2 = /\./g

    console.log(s2.match(re2));
}

function panggilToken2(){
    var s = "abCD123 efg456 !@#$%^_"

    //hanya angka
    console.log(s.match(/\d/g));

    //selain angka 
    console.log(s.match(/\D/g));

    //angka,huruf, dan underscore 
    console.log(s.match(/\w/g));

    //selain angka,huruf, dan underscore
    console.log(s.match(/\W/g));

    //whitespace
    console.log(s.match(/\s/g));
}

panggilToken()
console.log("====================================");
panggilToken2()