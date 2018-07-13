import {Injectable} from '@angular/core'

@Injectable()

export class EventosService{

    obtenerEventos(){
        return EVENTOS;
    }

    obtenerEventoPorId(id: number){
        return EVENTOS.find(e => e.id === id);
    }
}

const EVENTOS = [
{
        id:1,
        nombre:'Conferencia Angular',
        fecha:'20/08/2018',
        imagenurl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion:'un super envento angular',
        ciudad:'Bogota'
    },
    {
        id:2,
        nombre:'Conferencia retet 2',
        fecha:'21/08/2018',
        imagenurl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion:'un super envento angular 2',
        ciudad:'Bogota 2'
    },{
        id:3,
        nombre:'Conferencia View 2',
        fecha:'21/08/2018',
        imagenurl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion:'un super envento angular 2',
        ciudad:'Bogota 2'
    },{
        id:4,
        nombre:'Conferencia Material 2',
        fecha:'21/08/2018',
        imagenurl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion:'un super envento angular 2',
        ciudad:'Bogota 2'
    },{
        id:5,
        nombre:'Conferencia Rails 2',
        fecha:'21/08/2018',
        imagenurl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion:'un super envento angular 2',
        ciudad:'Bogota 2'
    },{
        id:6,
        nombre:'Conferencia Ionic 2',
        fecha:'21/08/2018',
        imagenurl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        descripcion:'un super envento angular 2',
        ciudad:'Bogota 2'
    }
]
// Injectable de  un inyector de dependencias