import { Component,EventEmitter,Input,OnInit, Output} from '@angular/core';

import * as interfPaises from '../../../interfaces/pais';

import { FormBuilder, FormControl,Validators,AbstractControl } from '@angular/forms';

import Swal from 'sweetalert2';

import { ActoresService } from 'src/app/services/actores.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  // @Output() cambioPais = new EventEmitter<interfPaises.Paises>();

  // @Input() pais? : interfPaises.Paises;

  public generos : any = ['Masculino','Femenino','Otro'];
  public submitted : boolean = false;


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

  constructor(private formBuilder : FormBuilder, private actorService : ActoresService)
  {
    
  }

  public frmActor = this.formBuilder.group({
    nombre : new FormControl('',[Validators.required]),
    apellido : new FormControl('',[Validators.required]),
    pais : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    genero : new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.frmActor.controls;
  }

  public onSubmit()
  {
    this.submitted = true;

    if(!this.frmActor.valid)
    {
        return;
    }

    this.actorService.guardarActor(this.frmActor.value);

    this.alertMessage('Exito','Se guardo la informacion del actor en la base de datos','success');

    this.submitted = false;

    this.frmActor.reset();
  }

  public actualizarPais(pais : interfPaises.Paises)
  {
      this.frmActor.controls['pais'].setValue(pais.translations['spa'].common);
  }
}
