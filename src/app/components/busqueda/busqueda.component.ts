import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';

import * as interfPelicula from '../../interfaces/pelicula'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  @Output() cambioPelicula = new EventEmitter<interfPelicula.Pelicula>();

  @Input() pelicula? : interfPelicula.Pelicula;

  constructor()
  {
      
  }

  ngOnInit(): void {

  }
  
}
