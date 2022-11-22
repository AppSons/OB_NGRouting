import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/models/contacts.interface';
import { IRandomContact } from 'src/app/models/randomuser';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  id: any | undefined;
  contacto: IRandomContact | undefined;
  filtroPrevio:string = 'todos';


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Vamos a leer los parámetros
    this.route.params.subscribe((params:any) => {if (params.id) this.id = params.id});


    //Leemos también del State del contacto
    if(history.state.data){
      this.contacto = history.state.data;
    }

    if(history.state.filtro){
      this.filtroPrevio = history.state.filtro;
    }
  }

}
