function deretAngka(n){
    var kata = ""
    for(i = 1;i<=n;i++){
        if(i%3 === 0){
            kata += "NIO "
        }
        else if (i%5 === 0){
            kata += "MIC "
        }
        else {
            kata += i
        }
    }
    return kata
}

console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));