import { Component, OnInit } from '@angular/core';
import { Event } from './../../models/event.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  event: Array<Event> = [];
  adresa: string;
  dogadjaj: string;
  datum: string;
  muzika: string;
  slobodanulaz: string;
  cena: string;
  vrstadogadjaja: string;
  izvodjac: string;
  kapacitet: string;
  
  constructor() { }

  ngOnInit() {
  }
  onSaveEvent(u_naziv: string, u_adresa: string, u_datum: string, u_muzika: string, u_ulaz: string, u_cena: string, u_dogadjaj: string, u_izvodjac: string, u_kapacitet: string){
    this.event.push(new Event(u_naziv, u_adresa, u_datum, u_muzika, u_ulaz, u_cena, u_dogadjaj, u_izvodjac, u_kapacitet));
    /*this.adresa = this.event[0].adress;
    this.dogadjaj = this.event[0].event;
    this.datum = this.event[0].date;
    this.muzika = this.event[0].typeOfMusic;
    this.slobodanulaz = this.event[0].freeEntry;
    this.cena = this.event[0].price;
    this.vrstadogadjaja = this.event[0].typeOfEvent;
    this.izvodjac = this.event[0].performer;
    console.log(this.dogadjaj);
    console.log(this.adresa);
    console.log(this.datum);
    
    console.log(this.muzika);
    console.log(this.slobodanulaz);
    console.log(this.cena);
    console.log(this.vrstadogadjaja);
    console.log(this.izvodjac);*/
    for(let i of this.event){
      console.log(i);
    }

  }
  onDeleteEvent(b_naziv: string, b_adresa:string, b_datum: string){
    for (let i of this.event){
      if (i.event == b_naziv && i.adress == b_adresa && i.date == b_datum){
        console.log("TREBA DA SE BRISE");
        this.event.splice(this.event.indexOf(i),1);
      }
    }
    for(let i of this.event){
    console.log(i);
    }
  }
  onChangeEvent(i_naziv: string, i_datum: string, i_muzika: string, i_cena: string, i_izvodjac: string){
    for (let i of this.event){
      if (i.event == i_naziv){
        console.log("TREBA DA SE MENJA");
        i.date = i_datum;
        i.typeOfMusic = i_muzika;
        i.price = i_cena;
        i.performer = i_izvodjac;
       } 
    }
    for(let i of this.event){
      console.log(i);
      }

  }

}
