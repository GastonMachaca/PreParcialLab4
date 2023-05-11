import { Injectable } from '@angular/core';

import { addDoc, collection, collectionData, Firestore, getDoc, getDocs, updateDoc } from "@angular/fire/firestore";

import { Observable } from 'rxjs';

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
}
