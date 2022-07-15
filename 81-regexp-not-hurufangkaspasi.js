function panggilRegexp(value){
    var ambilData = value.match(/\W/g)
    console.log(ambilData); //mengambil hanya spasinya saja

    var ambilData2 = value.match(/\D/g)
    console.log(ambilData2); //mengambil semua data kecuali angka
    
    var ambilData2 = value.match(/\S/g)
    console.log(ambilData2);
}  

panggilRegexp("Bulan ke 1 sd ke 4")