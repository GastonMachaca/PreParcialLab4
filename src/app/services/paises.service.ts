import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as interfPaises from '../interfaces/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { 

  }

  public getPaises() : Observable<interfPaises.Paises[]>
  {
     return this.http.get<interfPaises.Paises[]>('https://restcountries.com/v3.1/region/south%20america');
  }
}
