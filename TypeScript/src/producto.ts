export class Producto{
    constructor(){
        console.log('Nuevo Producto');
    }
}

export const ListaProductos=[
    {id:1, nombre:'celular', modelo:'note'},
    {id:2,nombre:'accesorios', modelo:'note'}
]

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

function pruebaScope3() {
    let var1: string='';
    let var2: number='';
    if (true) {
        var1='variable1';
        var2='variable dos 2';
    }
    console.log(var1);
    console.log(var2);
}