import { Directive, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLifeCycle]'
})
export class LifeCycleDirective implements OnInit, OnChanges, OnDestroy {

  constructor() { }
  
  
  ngOnInit(): void {
    this.lifeCycle('OnInit');
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.lifeCycle('OnChanges');
  }

  ngOnDestroy(): void {
   this.lifeCycle('OnDestroy');
  }

  lifeCycle(_hook:string, changes?: SimpleChanges){
    console.log(`CICLO DE VIDA: ${_hook}`);
    if(changes){
      console.log('Cambios:', changes);
    }
  }

}
