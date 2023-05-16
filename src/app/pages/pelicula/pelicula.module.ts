import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaRoutingModule } from './pelicula-routing.module';

import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaActorComponent } from 'src/app/components/tabla-actor/tabla-actor.component';

@NgModule({
  declarations: [
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    TablaActorComponent
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule,
    ReactiveFormsModule
  ]
})
export class PeliculaModule { }
