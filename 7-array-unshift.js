//Menambahkan beberapa data diawal aray
function panggilUnshift(){
    var data = ['bandung','jakarta','yogya','medan']
    console.log(data)
    console.log("=============")
    data.unshift('Sidikalang','bali')

    return data
}

console.log(panggilUnshift())