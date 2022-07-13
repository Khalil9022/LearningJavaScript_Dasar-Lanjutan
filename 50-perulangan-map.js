function panggilPerintahMap(){
    var datakota = ['jakarta','bandung','surabaya','medan']
    //cara penulisan pertama : 
    datakota.map((item,index,array)=> {
        console.log(item);
        console.log(index);
        console.log(array);
    })
    console.log();
    console.log("//=============================//");
    console.log();
    //cara penulisan kedua : 
    datakota.map(function(array,index,item){
        console.log(item);
        console.log(index);
        console.log(array);
    })
}

panggilPerintahMap()