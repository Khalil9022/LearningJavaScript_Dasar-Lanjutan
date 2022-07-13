function arraySlice(){
    var isi = ['a','b','c','d','e','f','g']
    var cop = isi.slice()
    var cop2 = isi.slice(2)
    var cop3 = isi.slice(2,4)
    console.log(cop)
    console.log(cop2);
    console.log(cop3);
    console.log(isi.slice(-3));
}

arraySlice()