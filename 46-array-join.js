//mengubah data array jadi string
function arrayJoin(){
    var kota = ['Padang','Semarang','Jakarta','Bandung']
    console.log(kota);
    var result = kota.join(",")
    return result
}

console.log(arrayJoin());