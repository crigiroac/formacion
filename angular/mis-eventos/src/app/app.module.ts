import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ListaEventosComponent} from './eventos/lista-eventos.component'
import { MaterialModule } from './shared/material.module';
import { TarjetaEventoComponent } from './eventos/tarjeta/tarjeta-evento.component';
import { EventosService } from './eventos/servicios/eventos.service';
import {DetalleEventoComponent} from './eventos/detalle-evento.component'
import { RouterModule, Routes }  from '@angular/router';
import { appRutas } from './rutas';
import { importType } from '@angular/compiler/src/output/output_ast';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NuevoEventoComponent } from './eventos/nuevo/nuevo.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaEventosComponent,
    TarjetaEventoComponent,
    DetalleEventoComponent,
    ToolbarComponent,
    NuevoEventoComponent
    
  ],
  imports: [
    // es el modulo que le dice el DOM
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRutas),
    MaterialModule
  ],
  providers: [ EventosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
