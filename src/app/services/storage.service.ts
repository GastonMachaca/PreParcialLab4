import { Injectable } from '@angular/core';
import { Storage,ref} from '@angular/fire/storage'
import { getDownloadURL, uploadBytes } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public urls : any[] = [];

  constructor(private storage : Storage) { }

  public subirImagen(nombre : string, imagen : any)
  {
    let aux = imagen.type.split("/");

    const imgRef = ref(this.storage,`imagenesPeliculas/${nombre + "_" + "_imagen_1" + '.' + aux[1]}`);

    return uploadBytes(imgRef,imagen);
  }

}
