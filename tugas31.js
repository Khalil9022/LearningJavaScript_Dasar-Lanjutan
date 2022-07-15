function tugas31(value) {
 var arr = [
   {negara: 'Indonesia', benua: 'Asia'},
   {negara: 'Jerman', benua: 'Eropa'},
   {negara: 'Spanyol', benua: 'Eropa'},
   {negara: 'Korea', benua: 'Asia'},
   {negara: 'Portugal', benua: 'Eropa'},
   {negara: 'Amerika Serikat', benua: 'Amerika'},
 ];

 //soal nomor 1
 var benuaAsia = arr.filter(function(item) {
      return item.benua === "Asia"
 });

 //soal nomor 2 
 var benuaEropa = arr.filter(function (item) {
    return item.benua === "Eropa"
 }) 

 console.log(benuaAsia);
 console.log(benuaEropa);
}

tugas31()