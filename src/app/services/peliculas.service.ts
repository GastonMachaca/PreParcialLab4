import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDoc, getDocs, updateDoc } from "@angular/fire/firestore";

import { Observable } from 'rxjs';

import { CollectionReference } from 'firebase/firestore'

import * as interfPelicula from '../interfaces/pelicula'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private firestore: Firestore ) { }

  public getPeliculas() : Observable<interfPelicula.Pelicula[]>
  {
    const personasCollection = collection(this.firestore, 'peliculasDB') as CollectionReference<interfPelicula.Pelicula>;

    return collectionData<interfPelicula.Pelicula>(personasCollection);
  }

  public addPeliculas(data : any)
  {
      const col = collection(this.firestore,'peliculasDB');
      return addDoc(col,data);
  }

}
