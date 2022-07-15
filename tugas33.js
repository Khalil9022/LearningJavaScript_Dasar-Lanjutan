function tugas33(n){
    var kata = ''
    for(i=1;i<n;i++){
        if(i%3 === 0 && i%5 === 0){
            kata += "NIOMIC "
        }else if (i%3 === 0) {
            kata += "NIO "
        }else if (i%5 === 0){
            kata += "MIC "
        }else {
            kata += i+" "
        }
    }
    return kata
}

console.log(tugas33(10));
console.log(tugas33(20));
console.log(tugas33(30));