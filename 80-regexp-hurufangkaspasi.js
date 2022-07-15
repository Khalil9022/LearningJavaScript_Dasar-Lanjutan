function panggilRegexp(value){
    var ambilData = value.match(/\w/g)
    console.log(ambilData);
    //Semua karakter berupa angka dan huruf akan terambil semua, kecuali spasi. RegExp (Regular Expression) untuk melakukan itu adalah : \w

    var ambilData2 = value.match(/\d/g)
    console.log(ambilData2);
    //hanya angka yang akan terambil

      var ambilData3 = value.match(/\s/g)
    console.log(ambilData3);
}

panggilRegexp("Bulan ke 1 sd ke 4")