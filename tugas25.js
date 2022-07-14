function tugas25(){
    let array = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

    console.log("Sebelumnya  :  2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16");
    console.log("Ascending   : ",array.sort().join(", "));
    console.log("Descending  : ",array.reverse().join(", "));
    console.log("Filter      : ",array.filter(array => {
        return array > 10
    }).join(", "));
}

tugas25()