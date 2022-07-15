function panggilRegexp(){
    let str ="abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz"

    console.log(str.match(/c/g)); //mengambil semua data yg memungkinkan jika menggunakan flag g
}

panggilRegexp()