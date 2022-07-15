function panggilSpesifikKarakter(value){
    let ambilData = value.match(/ke/g)
    let ambilData2 = value.match(/Bulan/g)
    let ambilData3 = value.match(/[ke]/g)
    let ambilData4 = value.match(/dari/g)

    console.log(ambilData);  //['ke','ke']
    console.log(ambilData2); //Bulan
    console.log(ambilData3); //[k,e,k,e]
    console.log(ambilData4); //null
}

panggilSpesifikKarakter("Bulan ke 1 sd ke 4")