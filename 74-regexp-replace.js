function panggilRegexpReplace(){
    let data = "Belajar satu tahun bersama Niomic"

    console.log(data.replace(/satu/,1));
}

function testPanggilRegexpReplace(){
    let data = "Belajar-Satu-Tahun-Bersama-Niomic"

    console.log(data.replace(/-/gi," "));
}

panggilRegexpReplace()
testPanggilRegexpReplace()