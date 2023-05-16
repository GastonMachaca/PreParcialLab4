import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

import * as interfPelicula from '../../interfaces/pelicula'

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  public peliculas : interfPelicula.Pelicula[] = [];

  @Input() peliculaSeleccionada? : interfPelicula.Pelicula;
  @Output() cambioPelicula = new EventEmitter<interfPelicula.Pelicula>();

  constructor(public peliculasService : PeliculasService)
  {

  }

  ngOnInit(): void {
    
    this.peliculasService.getPeliculas().subscribe( (data : interfPelicula.Pelicula[]) =>{
      this.peliculas = data;
    });

  }

  public onSelect(p : interfPelicula.Pelicula)
  {
      this.peliculaSeleccionada = p;
      this.cambioPelicula.emit(this.peliculaSeleccionada);
  }
}
