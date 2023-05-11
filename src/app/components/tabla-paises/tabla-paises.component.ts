import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

import * as interfPelicula from '../../interfaces/pelicula';

import * as interfPaises from '../../interfaces/pais';

import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  public peliculas : interfPelicula.Pelicula[] = [];

  public paises : interfPaises.Paises[] = [];

  @Input() paisSeleccionado? : interfPaises.Paises;
  @Output() cambioPais = new EventEmitter<interfPaises.Paises>();


  constructor(public paisesService : PaisesService)
  {

  }

  ngOnInit(): void {
     
    this.paisesService.getPaises().subscribe((data : interfPaises.Paises[]) => {
      this.paises = data;
    });
  }

  public onSelect(p : interfPaises.Paises)
  { 
      this.paisSeleccionado = p;
      this.cambioPais.emit(this.paisSeleccionado);
  }

}
