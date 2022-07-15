function panggilBilanganKelipatan5(){
    var bilangan = []
    for(var i=0;i<=50;i++){
        if(i%5 === 0){
            bilangan.push(i)
        }
    }
    return bilangan
}

console.log(panggilBilanganKelipatan5());