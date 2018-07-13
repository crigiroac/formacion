import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EventosService } from './servicios/eventos.service';

@Component({
    template: `<h1> Detalle del evento </h1>
    <h2>{{evento.id}} - {{evento.nombre}} </h2>
    <p>{{evento.descripcion}}<br>
    {{evento.ciudad}}
    </p>`
})

export class DetalleEventoComponent implements OnInit {
evento
    constructor(
        private route: ActivatedRoute,
        private servicioEvento : EventosService)
    {
      
    }

    ngOnInit(){
        const id: number = +this.route.snapshot.params['id'];
        this.evento =this.servicioEvento.obtenerEventoPorId(id);
        console.log();
    }

}   