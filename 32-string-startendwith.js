function startEnd(){
    var start = "Saya Pintar Masak Nasi Goreng"
    //mencari kata awal di suatu string menggunakan start with
    console.log(start.startsWith("Saya"));
    console.log(start.startsWith("Pintar"));
    console.log(start.startsWith("Pintar",5));

    //mencari kata akhir di suatu string menggunakan end with
    console.log(start.endsWith("Goreng"));

}

startEnd()