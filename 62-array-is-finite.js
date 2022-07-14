function arrayIsFinite(){
    let a = isFinite([1,2,3,4,5])
    let b = isFinite(["jakarta",'lampung','depok'])
    let c = isFinite([1,2,3,"Hello","Niomic"])
    let d = isFinite(-99924.23)
    let e = isFinite(123)

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
}

arrayIsFinite()