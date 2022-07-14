//mirip dengan array some. returnnya hanya bernilai boolean (true false)
function arrayEvery(){
    let products = [
        {name : "Apple",type : "fruit"},
        {name : "Monitor",type : "computer"},
        {name : "Mango",type : "fruit"},
        {name : "Table",type : "furniture"}
    ]

    console.log(products.every(products=>products.type === "fruit"));
}
//akan bernilai false, karna di type tidak hanya ada fruit, tapi juga ada computer dan furniture
arrayEvery()