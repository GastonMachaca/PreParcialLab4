import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { TablaPaisesComponent } from 'src/app/components/tabla-paises/tabla-paises.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ 
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    ReactiveFormsModule
  ]
})
export class ActorModule { }
