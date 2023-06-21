const cl = console.log;


function outerfunction(){
    let x = 100;
    return function innerfunction(){
        return x
    }
}
cl(outerfunction);
cl(outerfunction());
document.write(outerfunction)

let f1 = outerfunction();
document.write(f1 ,`<br></br>`)
cl(f1)
let xl = f1();
cl(xl)


function outeside(){
    let y = 200;
    return function outerfunction(){
        return y
    }
}

let f2 =outeside()
let cdl = f2();
cl(cdl)