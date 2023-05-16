import { Component,ElementRef,EventEmitter,Input,OnInit, Output, ViewChild} from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { FormBuilder, FormControl,Validators,AbstractControl } from '@angular/forms';
import { getDownloadURL } from 'firebase/storage';

import { StorageService } from 'src/app/services/storage.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

import * as interfActores from '../../../interfaces/actor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit{

  @ViewChild('inputFile') myInputVariable: any;
  
  public tipos : any = ['Terror','Comedia','Amor','Otros'];
  public submitted : boolean = false;
  public image : any;
  public exitoImagen : boolean = false;
  public failImagen : boolean = false;
  public pipe = new DatePipe('en-US');

  private alertMessage = (title: any,text: any,icon: any) =>
  {
    Swal.fire({ 
      toast: true, 
      position: 'top-end', 
      showConfirmButton: false,
      timer: 4000, 
      title, 
      text, 
      icon, 
    });
  }

  constructor(
    private formBuilder : FormBuilder,
    private storageService : StorageService,
    private peliculasService : PeliculasService
    )
  {
    
  }

  public frmPelicula = this.formBuilder.group({
    nombre : new FormControl('',[Validators.required]),
    tipo : new FormControl('',[Validators.required]),
    actor : new FormControl('',[Validators.required]),
    fechaEstreno : new FormControl(formatDate(new Date(), "yyyy-MM-dd", "en"),[Validators.required]),
    cantidadPublico : new FormControl('',[Validators.required,Validators.min(0)])
  });

  ngOnInit(): void {
    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.frmPelicula.controls;
  }

  public onSubmit()
  {
    this.submitted = true;
    
    if(this.exitoImagen == true)
    {
      if(!this.frmPelicula.valid)
      {
          return;
      }

      this.storageService.subirImagen(this.frmPelicula.value.nombre ?? '',this.image).then(result => {
        getDownloadURL(result.ref).then(data => {

          this.frmPelicula.controls['fechaEstreno'].setValue(this.configDate(this.frmPelicula.value.fechaEstreno ?? ''))

          let jsonPelicula = JSON.stringify(this.frmPelicula.value, null, 2);

          let infoPelicula = JSON.parse(jsonPelicula);

          infoPelicula.fotoPelicula = data;

          this.peliculasService.addPeliculas(infoPelicula)
          .then((response) => {
            this.alertMessage('Exito','Se guardo la informacion de la pelicula en la base de datos','success');
            this.frmPelicula.reset();
            this.submitted = false;
            this.myInputVariable.nativeElement.value = '';
          })
          .catch(error => {
            this.alertMessage('Error','Fallo al registrar la pelicula','error');
          });

        });
      });

    }
    else
    {
      this.failImagen = true;
    }
  }

  public onFileChange(event : any) {

    if (event.target.files.length > 0) {

      this.failImagen = false;
      this.exitoImagen = true;

      const file = event.target.files[0];

      this.image = file;

    }
    else{
      this.failImagen = true;
      this.exitoImagen = false;
    }

  }

  public actualizarActor(actor : interfActores.Actor)
  {
      this.frmPelicula.controls['actor'].setValue(actor.nombre + ' ' + actor.apellido);
  }

  private configDate(value : string)
  {
      return this.pipe.transform(value, 'dd-MM-yyyy');
  }
}
