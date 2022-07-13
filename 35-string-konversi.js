function konversi() {
    var kon = new String("Belajar kuy....")
    console.log(typeof kon)
    console.log(kon)

    //cara pertama menggunakan toString()
    var konf = kon.toString()
    console.log("");
    console.log(typeof konf);
    console.log(konf);

    //cara kedua menggunakan valueOf()
    var konf2 = kon.valueOf()
    console.log();
    console.log(typeof konf2);
    console.log(konf2);
}

konversi()