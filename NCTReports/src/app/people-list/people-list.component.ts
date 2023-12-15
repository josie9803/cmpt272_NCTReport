import { Component, OnInit } from '@angular/core';
import { singleperson } from '../singleperson';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people:singleperson[]
  constructor(private router: Router, private ps: PeopleService){
    this.people = [];
  }

  //do calculation, while constructor only initialize variables
  ngOnInit(): void {
    this.people = this.ps.get();
  }

  onPersonDelete(evt:any){
    let delete_person = evt['delete_person']
    // this.people = this.people.filter((p) => p.name != delete_person)
    //console.log("deleted" + delete_person.baddieName)
    
    const enteredPassword = window.prompt('Enter your password:');
    const expectedHash = 'fcab0453879a2b2281bc5073e3f5fe54';

    if(enteredPassword != null){
      const hashedEnteredPassword = Md5.hashStr(enteredPassword);
      if (hashedEnteredPassword  === expectedHash){
        this.people = this.ps.delete(delete_person);
      }
      else{
        alert('Incorrect password. Status not modified.');
      }
    }
  }

  onCreate(){
    this.router.navigate(['person/add'])
  }
}
