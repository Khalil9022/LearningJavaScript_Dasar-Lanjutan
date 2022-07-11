function tugas16(){
    let angka1 = [45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10]
    let angka2 = [45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5]

    console.log('Nilai minimal dari deret angka : 45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10 adalah : ', Math.min(45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10))
    console.log()
    console.log('Nilai Maximal dari deret angka : 45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5 adalah : ', Math.max(45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5))

    // using Math.min array 
    console.log('Nilai minimalnya adalah : ', Math.min(...angka1))
    console.log()
    console.log('Nilai Maximalnya adalah : ', Math.max(...angka2))

}

tugas16()