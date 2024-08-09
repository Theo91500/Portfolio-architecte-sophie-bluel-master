
function salut(toto) {
    toto++;
    console.log(toto);
    
    return toto;
}

function add(){
    let test = 10;
    salut(test);
    console.log(test);
}

add();