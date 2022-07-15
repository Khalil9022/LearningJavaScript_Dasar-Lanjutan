// flag “i” : dimana flag “i” ini sendiri berfungsi untuk menjadikan keyword / kata kunci dalam pencarian menjadi TIDAK  case-insensitive, sehingga jika kita memasukkan “A” atau “a” maka akan di anggap sama.
function panggilFlags(){
     let str = "abcdefghijklmnopqrstuvwxyz";

 console.log(str.search(/K/))
 console.log(str.search(/K/i))
 console.log(str.search(/k/i))
}

panggilFlags()