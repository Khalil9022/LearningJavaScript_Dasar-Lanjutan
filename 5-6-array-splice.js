function panggilSplice(){
    var kota= ['jakarta','medan','palembang','depok']
    console.log(kota[0])

    kota.splice(2,0,'Padang') //menambahkan data kedalam array sesuai urutan yg ingin dimasukkan
    // Menambahkan data ke index nomor 2 dan untuk 0 array data untuk hapus data didepannya
    console.log(kota)
    kota.splice(2,1,'Surabaya')
    // Menambahkan data ke index nomor 2 dan untuk 1 array data untuk hapus data didepannya

    kota.splice(1,1) //menghapus kota medan
    console.log(kota)

    kota.splice(1,2) //menghapus kota surabaya dan palembang
    return kota
}

console.log(panggilSplice())