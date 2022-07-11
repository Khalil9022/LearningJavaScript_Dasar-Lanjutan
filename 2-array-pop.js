function panggilPop(){
    var kota = ['jakarta', 'bandung', 'medan','makasar']   
    console.log(kota) 
    kota.pop() // menghapus data pada array paling akhir 
    return kota
}

console.log(panggilPop())
