import { Component,EventEmitter,Input,OnInit,Output } from '@angular/core';

import { PaisesService } from 'src/app/services/paises.service';

import { ActoresService } from 'src/app/services/actores.service';

import * as interfActores from '../../interfaces/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})

export class TablaActorComponent implements OnInit {
  
  public actores : interfActores.Actor[] = [];

  @Input() actorSeleccionado? : interfActores.Actor;
  @Output() cambioActor = new EventEmitter<interfActores.Actor>();

  constructor(public paisesService : PaisesService, public actoresService : ActoresService)
  {

  }

  ngOnInit(): void {
     
    this.actoresService.traerActores().subscribe((result : interfActores.Actor[]) => {
      this.actores = result;
    })
  }

  public onSelect(a : interfActores.Actor)
  { 
      this.actorSeleccionado = a;
      this.cambioActor.emit(this.actorSeleccionado);
  }
}
