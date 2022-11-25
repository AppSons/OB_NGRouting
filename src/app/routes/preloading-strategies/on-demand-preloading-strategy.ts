import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY, mergeMap } from 'rxjs';
import { PreloadingService, PreloadingOptions } from 'src/app/services/preloading.service';


@Injectable({
    providedIn: 'root'
})
export class OnDemandPreloadStrategy implements PreloadingStrategy {

    private _preloadDemandOptions$: Observable<PreloadingOptions>;

    constructor(private _preloadingService: PreloadingService){
        this._preloadDemandOptions$ = this._preloadingService.options$;
    }

    private decidirSiPrecargar(route:Route, preloadingOptions: PreloadingOptions): boolean{
        //Si:
        // * 1. La ruta tiene una propiedad llamada "data"
        // * 2. La ruta tiene dentro de "data" una clave llamada "preload" a true
        // * 3. Las opciones incliyen una ruta que está incluida en una lista de rutas que queremos precargar
        // * 4. Las opciones tienen "preload" a true
        // * Aquí podemos añadir más opciones totalmente personalizadas
        return(
            route.data &&
            route.data['preload'] &&
            [route.path, '*'].includes(preloadingOptions.routePath) &&
            preloadingOptions.preload //true
        )
    }

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        // Se escuchan los valores de opciones de precarga emitidos por el next() del servicio
        return this._preloadDemandOptions$.pipe(
            //Iteramos por cada valor recibido desde el servicio next()
            mergeMap((preloadingOptions: PreloadingOptions) =>{
                //comprobamos si se debe cargar o no bajo estas opciones
                const precargar: boolean = this.decidirSiPrecargar(route, preloadingOptions);
                //Mostramos por consola si se precarga o no en módulo:
                console.log(`${precargar ? '' : 'NO'} se precarga el módulo de la ruta ${route.path}`);
                // devolvemos la ejecución del callback load() o nada
                return precargar ? load() : EMPTY
            })
        );
    }
    
}



