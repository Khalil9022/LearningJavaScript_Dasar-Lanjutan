function panggilForEach(){
    var data = ['a','b','c']
    //item, index, array boleh dirubah rubah katanya
    //item : untuk kata di tiap tiap index array
    //index : index di array
    //array : melihat isi arraynya
    data.forEach(function (item,index,array){
        console.log(item);
        console.log(index);
        console.log(array);
    });
}

panggilForEach()