import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../evento';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoEventoComponent implements OnInit {
  evento:Evento;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
   
    console.log(this.evento.nombre)
  }
  cancelar(){
    console.log('cancelar');
    this.router.navigate(['/eventos'])
  }

}
