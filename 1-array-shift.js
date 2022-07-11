function panggilShift(){
    var kota = [ 'bandung','jakarta', 'malang','surabaya','makasar']
    console.log(kota)
    console.log("=====================")
    //kota = kota.shift() 

    var kota2 = kota.shift() //menghilangkan data dari array pertama
    console.log(kota2)
    return kota
}

console.log(panggilShift())
