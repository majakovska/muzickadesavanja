import { Component, OnInit } from '@angular/core';
/*import {EventsService} from './../events.service';*/

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
 // message: string;
  constructor() { }

  ngOnInit() {
  //  this.data.currentMessage.subscribe(message => this.message = message);
  }

}
