function tugas22(){
    var kalimat = "Saya ingin belajar bersama"
    var split = kalimat.split(" ")

    split.forEach((item,index,array) => {
        console.log('item : ' ,item,' index ke : ',index);
    });
}

tugas22()