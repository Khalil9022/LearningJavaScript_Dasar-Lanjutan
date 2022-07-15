function balikKata2(kata){
    var kata1 = kata
    var kata2 = []
    for (i=kata1.length; i>=0;i--){
        kata2 += kata1.charAt(i)
    }
    return kata2
}

console.log(balikKata2("Niomic!"))    
console.log(balikKata2("JavaScript"))  
console.log(balikKata2("alohahola"))  
console.log(balikKata2("Jawa_Barat")) 