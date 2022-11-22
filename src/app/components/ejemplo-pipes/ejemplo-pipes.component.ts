import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacts.interface';
import { IJugador } from 'src/app/models/jugador.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit {


  dob: Date = new Date(1971,7,5);
  cambio:boolean = true;
  nombre: string = 'Fernando';
  numero_PI: number = 3.1415926535897;
  precioCarrito: number = 100;
  persona: IContacto = {
    id: 0,
    nombre: 'Fernando',
    apellidos: 'Nielson',
    email: 'nombre@gmail.com',
    sexo: 'male'
  };
  cantidad: number = 0.3518;
  textoLargo: string = 'ipsumLorem cncncnmnclkn kcmcncncnkcncnocncnocn kcnncqoiehqincqncqoncqcn'
  //Ejemplo PIPE calcula puntuación
  jugador1: IJugador = {
    nombre: 'Fernando',
    puntos: [10, 30, 40, 0]
  }
  jugador2: IJugador = {
    nombre: 'Nico',
    puntos: [100, 80, 90, 20]
  }


  constructor() { }

  ngOnInit(): void {
  }

  get dateFormat(){
    return this.cambio ? 'shortDate' : 'fullDate'
  }

  cambiarFormato(){
    this.cambio = !this.cambio;
  }

}
