import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { singleperson } from '../singleperson';
import { Router } from '@angular/router';

@Component({
  selector: '[app-person]',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person:any 
  @Output() delete = new EventEmitter()
  constructor(private router: Router){
    // this.person={
    //   location:"Metrotown",
    //   name:"Mischief Maximus",
    //   time:new Date().getTime(),
    //   status: "RESOLVED"
    // }
  }
  onDelete(evt:any,deleted_person:string){
    evt['delete_person'] = deleted_person; //attach another delete_person to the evt
    this.delete.emit(evt);
  }
  onView(){
    this.router.navigate(['/person', this.person.id])
  }
}
