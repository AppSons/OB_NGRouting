import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss']
})
export class FormularioValidadoComponent implements OnInit {

  miFormValidado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.miFormValidado = this.formBuilder.group(
      { 
        nombre: ['', Validators.required], //Campo Obligatorio
        apellidos: '', 
        edad: ['', Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        acepta: [false, Validators.requiredTrue]
      }
    )
  }

  get nombre() {
    return this.miFormValidado.get('nombre');
  }
  get apellidos() {
    return this.miFormValidado.get('apellidos');
  }
  get edad() {
    return this.miFormValidado.get('edad');
  }
  get email() {
    return this.miFormValidado.get('email');
  }
  get password() {
    return this.miFormValidado.get('password');
  }
  get acepta() {
    return this.miFormValidado.get('acepta');
  }

  //Método de submit del Formulario
  enviarFormulario(){
    //Controlamos que el Formulario sea válido
    if(this.miFormValidado.valid){
      console.table(this.miFormValidado.value);
      //resetear los campos del formulario-validado
      this.miFormValidado.reset();
    }
  }

}
