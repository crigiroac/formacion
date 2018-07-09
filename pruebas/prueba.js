function pruebaScope() {
    if (true) {
        var var1='variable1';
        let var2='variable dos 2';
    }
    console.log(var1);
    console.log(var2);
}

function pruebaScope2() {
    let var1='';
    let var2='';
    if (true) {
        var1='variable1';
        var2='variable dos 2';
    }
    console.log(var1);
    console.log(var2);
}