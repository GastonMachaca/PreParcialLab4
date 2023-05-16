import { Injectable } from '@angular/core';

import { addDoc, collection, collectionData, Firestore, getDoc, getDocs, updateDoc } from "@angular/fire/firestore";

import { Observable } from 'rxjs';

import * as interfActores from '../interfaces/actor';

import { CollectionReference } from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private firestore: Firestore) { }

  public guardarActor(data : any)
  {
    const actor = collection(this.firestore, 'actores');

    addDoc(actor,data);
  }

  public traerActores() : Observable<interfActores.Actor[]>
  {
      const actores = collection(this.firestore,'actores')  as CollectionReference<interfActores.Actor>;
      const obs = collectionData(actores);

      return obs;

  }
}
