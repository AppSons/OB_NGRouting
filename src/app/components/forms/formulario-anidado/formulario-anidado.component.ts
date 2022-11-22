import { Component, OnInit } from '@angular/core';

//Importamos de reactive form para hacer fomulario Anidado
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit {

  miFormAnidado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Agrupacion para teléfonos
    const telefonoFijo = this.formBuilder.group(
      {
        prefijo: '',
        numero: '',
      }
    )
    const telefonoMovil = this.formBuilder.group(
      {
        prefijo: '',
        numero: '',
      }
    )
    //Agrupación del formulario
    this.miFormAnidado = this.formBuilder.group(
      { 
        
        telefonoFijo: telefonoFijo,
        telefonoMovil: telefonoMovil,
      }
    )
  }

}
