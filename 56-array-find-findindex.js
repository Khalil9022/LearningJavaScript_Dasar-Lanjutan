function arrayFind(){
    let array1 = [5,12,8,120,44]

    let found = array1.find(function (element) {
        return element > 10
        //mengembalikan data yang pertama kali sesuai dengan kondisi
    })
    console.log(found);
}

const arrayFindIndex = () => {
    array1 = [5,12,8,130,44]

    function isLargeNumber(element){
        return element > 7
    }

    console.log(array1.findIndex(isLargeNumber));
}

arrayFind()
arrayFindIndex()
