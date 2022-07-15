function panggilPerintahMap() {
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    dataKota.map((item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);
    });

    // atau bisa juga dibuat dalam bentuk seperti ini : 
    var dataKota2 = ['Jakarta', 'Balikpapan', 'Medan'];
    dataKota2.map(function(item, index, array){
    console.log(item);
    console.log(index);
    console.log(array);
    });
}

panggilPerintahMap();