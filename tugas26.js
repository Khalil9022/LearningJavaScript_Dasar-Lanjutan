function tugas26(){
    let array = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

    for(i=0;i<array.length;i++){
        if(isFinite(array[i])){
            console.log("Angka ",array[i]," NOT Infinity");
        }
        else {
            console.log("Angka ",array[i]," IS Infinity");
        }
    }
}

tugas26()