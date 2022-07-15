function panggilRegexp(){
    let data = "Belajar satu tahun bersama niomic"

    console.log(/satu tahun/.test(data));
}

function testPanggilRegexp(strValue){
    let kata2= /Belajar html/
    let kata3= /Belajar css/

    if(kata2.test(strValue)){
        console.log("Belajar html");
    }else if (kata3.test(strValue)){
        console.log("Belajar css");
    }else {
        console.log("Belajar");
    }
}

panggilRegexp()
testPanggilRegexp("Belajar html")
testPanggilRegexp("Belajar javascript")
testPanggilRegexp("Belajar css")
testPanggilRegexp("Belajar php")