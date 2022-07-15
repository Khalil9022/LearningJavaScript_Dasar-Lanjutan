function tugas35(value) {
 let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

 //Tulis Code Jawaban Kamu Di Bawah ini
    var ambilData = str.match(/c|C/g)
    var ambilData2 = str.match(/k|K/g)
    var ambilData3 = str.match(/l|L/g)
    console.log(ambilData);
    console.log(ambilData2);
    console.log(ambilData3);
}

tugas35()