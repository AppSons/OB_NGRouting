import { Component, OnInit } from '@angular/core';

//Importamos de reactive form para hacer fomulario Array
import { FormGroup, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit {

  miFormArray: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.miFormArray = this.formBuilder.group(
      { 
        nombre: '',
        apellidos: '',
        telefonos: this.formBuilder.array([]) // Inicializamos la lista de telef vacía
      }
    )
  }
  // Método Getter para obtener el Array de la lista de teléfonos
  get telefonosFormulario(): FormArray{

    return this.miFormArray.get('telefonos') as FormArray;
  }
  // Método para añadir nuevos teléfonos
  addTelefono(){
    //Creamos un grupo teléfonos
    const telefonoNuevo = this.formBuilder.group({
      prefijo: '',
      numero: '',
    });

    //Añadimos el grupo a la lista de teléfonos
    this.telefonosFormulario.push(telefonoNuevo);
  }
  //Método para eliminar un teléfono de la lista
  delTelefono(index: number){
    this.telefonosFormulario.removeAt(index);
  }

}
