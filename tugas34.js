function tugas34(value){
    //CARA PERTAMA!!!
    // return Object.keys(value[0]).map(function(c) {
    //     return value.map(function(r) { return r[c]; });
    // });

    //CARA KEDUA!! 
    output = value[0].map((_, colIndex) => value.map(row => row[colIndex]));
    return output
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

console.log(tugas34(nestedArray));
