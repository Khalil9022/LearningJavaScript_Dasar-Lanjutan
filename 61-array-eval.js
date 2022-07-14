function arrayEval(){
    let x = [1,2,3,4,5,6,7,8,9]
    let total = 0

    //menggunakan fungsi reduce : 
    console.log(x.reduce((accumulator,currentValue)=> accumulator + currentValue));

    //menggunakan array-eval, tidak disarankan karna rendah security!
    for(i=0;i<x.length;i++){
        total += x[i]
    }

    console.log(eval(total));
}

arrayEval()