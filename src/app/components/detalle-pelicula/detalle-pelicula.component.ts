import { Component, Input } from '@angular/core';

import * as interfPelicula from '../../interfaces/pelicula'

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent {

  @Input() pelicula? : interfPelicula.Pelicula;

  constructor()
  {
      
  }

}
