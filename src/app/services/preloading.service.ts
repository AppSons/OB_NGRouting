import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';



//Creamos un clase de opciones de precarga
// va a servir para definir las opciones que debe tener una ruta
// para precargar o no un módulo
export class PreloadingOptions{
  constructor(public routePath: string, public preload: boolean = true){}
}

/** SERVICIO PERSONALIZADO QUE SE VA A ENCARGAR DE PRECARGAR O NO UN MODULO
 * DE LAS DIFERENTES RUTAS QUE HAYA EN EL MODULO DE ENRUTADO Y ESTÉN
 * ESPECIFICADOS COMO CARGA PEREZOSA.
 * 
 * LA IDEA ES QUE A TRAVÉS DE UN EVENTO DEL USUARIO EN EL DOM (CLICK, HOVER, LONG PRESS..)
 * SE INICIE UNA PRECARGA O NO DE MODULOS, POR LO QUE CONSEGUIRIAMOS ADELANTARNOS AL USUARIO
 * PRECARGANDO UN MODULO QUE PREDECIMOS QUE VA A NECESITAR.
 * 
 * CON ESTE SE PUEDE CONSERVAR UNA MEJOR EXPERIENCIA PARA EL USUARIO, AL EVITAR QUE LA APP SE QUEDE CARGANDO
 * CUANDO TENGA QUE DE MANERA PEREZOSA CARGAR UN MODULO DE RUTAS NUEVO.
 * 
 * ? POR EJEMPLO SI UN USUARIO PASA EL CURSOR POR UN ELEMENTO DEL MENU AL QUE VA A NAVEGAR
 * PRECARGAMOS EL MODULO EN SEGUNDO PLANO, PARA QUE LA NAVEGACION SEA MAS FLUIDA Y REDUCIR TIEMPOS DE CARGA.
 * 
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class PreloadingService {

  // Un subject es un tipo de Observable que permite emitir valores
  // a quien esté suscrito al mismo a través del metodo .next(nuevovalor)
  private _subject = new Subject<PreloadingOptions>();

  // Cualquier Subject puede ser tratado como un Observable y es el que tenemos
  // que hacer público.
  // Con él vamos a ofrecer las opciones de la ruta que desea ser precargada como Observable
  public options$ = this._subject.asObservable();

  constructor() {}

  /** Método encargado de iniciar una evaluación  
   *  @param routePath Ruta que se desea precargar
  */
  comenzarPrecarga(routePath: string){
    // creamos unas opciones de precarga
    const opcionesPrecarga: PreloadingOptions = new PreloadingOptions(routePath, true);

    // Emitimos las opciones que se desean precargar
    // Esta información la va a escuchar la Estrategia de Precarga
    // * ON-DEMAND-PRELOADING-STRATEGY
    // para asi evaluar si debe o no precargar la ruta
    this._subject.next(opcionesPrecarga);
  }
}


