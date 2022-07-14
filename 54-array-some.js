//hampir sama dengan every, tetapi pada metode ini akan bernilai true jika terdapat salah satu dari kriteria yg ingin dilihat
function arraySome() {
    let products = [
        {name : "Apple",type : "fruit"},
        {name : "Monitor",type : "computer"},
        {name : "Mango",type : "fruit"},
        {name : "Table",type : "furniture"}
    ]

    console.log(products.some(products=> products.type === "fruit"));
}

arraySome()