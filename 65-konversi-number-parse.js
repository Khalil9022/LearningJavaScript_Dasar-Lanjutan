function panggilNumber(){
    var a = "9"
    var b = 3

    hasil = a+b
    console.log(hasil);

    hasil2 = Number(a) + b
    console.log(hasil2);

    hasil3 = b+a
    console.log(hasil3);
}

function panggilParseInt(){
    var a = "13.78"
    var b = "9 naga"
    var c = "100.99 meter"
    var d = "naga ada 71"

    console.log(parseInt(a));
    console.log(parseInt(b));
    console.log(parseInt(c));
    console.log(parseInt(d));
    
    hasil4 = parseFloat(a)
    console.log(hasil4);
}

//panggilNumber()
panggilParseInt()